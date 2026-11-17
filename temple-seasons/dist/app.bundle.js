/* 생성물 — tools/build-app.mjs 가 js/ 와 vendor/three 로 만든다. 직접 고치지 않는다. */
(()=>{var bu=Object.defineProperty;var on=(e,t)=>()=>(e&&(t=e(e=0)),t);var Tu=(e,t)=>{for(var i in t)bu(e,i,{get:t[i],enumerable:!0})};var wa,us,ln,Yt,Ot,vt,kt,yl,Aa,xt,nr,ni,cn=on(()=>{wa={medium:600,wide:1024},us=["spring","summer","autumn","winter"],ln="autumn",Yt={spring:{sky:13886186,key:16773860,keyIntensity:2.15,hemi:1.35,shadow:.85,fogNear:40,fogFar:240,ground:10732159,forest:8824935,field:10469536,path:13351060,valley:10732159,rock:8027e3,tile:4936796,thatch:11836010,pineCap:3037765,water:8366520,leaves:[15907014,16174294,10273902,11916682],leafScale:.95,lotus:.35,ripple:1,particles:{petal:.95,leaf:0,snow:0}},summer:{sky:11128808,key:16775404,keyIntensity:2.6,hemi:1.1,shadow:1,fogNear:50,fogFar:280,ground:6262603,forest:5143102,field:7971922,path:12890250,valley:6262603,rock:8027e3,tile:4936796,thatch:11836010,pineCap:3037765,water:6197152,leaves:[4091450,5012799,3104309,4618811],leafScale:1.1,lotus:1,ripple:1,particles:{petal:0,leaf:0,snow:0}},autumn:{sky:12966116,key:16769728,keyIntensity:2.3,hemi:1.2,shadow:1,fogNear:40,fogFar:250,ground:10787436,forest:9206614,field:14006364,path:13813414,valley:10787436,rock:8027e3,tile:4936796,thatch:11836010,pineCap:3037765,water:7312803,leaves:[13124395,14251822,14922300,11883309],leafScale:1,lotus:.45,ripple:1,particles:{petal:0,leaf:.95,snow:0}},winter:{sky:13226201,key:14542319,keyIntensity:1.1,hemi:2.35,shadow:.4,fogNear:10,fogFar:170,ground:15331059,forest:14476264,field:15331059,path:14870508,valley:15331059,rock:8751759,tile:15133937,thatch:15133937,pineCap:15922680,water:14477036,leaves:[10721936,10129799,11248536,9800834],leafScale:.62,lotus:0,ripple:0,particles:{petal:0,leaf:0,snow:.95}}},Ot={pillar:10893867,band:4090718,plaster:15722974,timber:12159838,granite:11907238,ridge:3883850,bell:7297596,trunk:7033922,pine:3037765,farPeak:10465467,pondBed:6123362,lotus:5209914,bird:3094080,smoke:15065820,ripple:16777215,petal:[16239060,16507881,15971780],leaf:[13124395,14251822,14922300,11883309],snow:[16777215],shadow:0},vt={gate:{x:-2.5,z:5.2,base:1,top:5.6},hall:{x:0,z:-9.8,base:6.4,top:13.6,priority:1},pagoda:{x:-4.2,z:-2.4,base:4.6,top:10.4},pond:{x:6.5,z:11.5,base:.1,top:3.4},bell:{x:7.6,z:-3.2,base:4.6,top:10.9}},kt={yard:{x:1,z:-2.5,rx:9.6,rz:4,y:4.6},hall:{x:0,z:-9.6,rx:8.2,rz:3,y:6.4},gate:{x:-2.5,z:5.4,rx:4.6,rz:1.4,y:1},village:.32},yl=[[-12.5,1.6,13],[13,1.6,15]],Aa={sway:60,smoke:7,ripple:4.2,bird:18},xt={fov:35,elevationMin:12,elevationMax:65,startElevation:21,startAzimuth:20,homeDistance:100,homeTarget:[0,9,-9.8],swayDegrees:18,stepRotate:30,stepZoom:.75,fitShare:.62,fitShareMax:.92,fitMinSceneShare:.45,closestSpan:9.2,maxDistanceFactor:1.6,groundClearance:1.2},nr={wide:{width:1430,height:858,K:1300,ax:.718,ay:.409,quality:"high"},medium:{width:1134,height:804,K:1100,ax:.583,ay:.479,quality:"low"},narrow:{width:740,height:1210,K:1e3,ax:.622,ay:.512,quality:"low"}},ni={pixelRatioHigh:2,pixelRatioLow:1.5,terrainSegmentsHigh:88,terrainSegmentsLow:56,particles:{petal:{high:1400,low:500},leaf:{high:800,low:300},snow:{high:2400,low:900}},particleMaxPx:7,shadowMapSize:2048,slowFrameMs:33,sampleWindowMs:2e3,warmupMs:1200}});function wu(){let e=xt.startAzimuth*ps,t=xt.startElevation*ps,[i,r,a]=xt.homeTarget,n=[Math.cos(t)*Math.sin(e),Math.sin(t),Math.cos(t)*Math.cos(e)],s=[i+n[0]*xt.homeDistance,r+n[1]*xt.homeDistance,a+n[2]*xt.homeDistance],o=[-n[0],-n[1],-n[2]],l=Math.hypot(o[2],o[0]),c=[-o[2]/l,0,o[0]/l],h=[c[1]*o[2]-c[2]*o[1],c[2]*o[0]-c[0]*o[2],c[0]*o[1]-c[1]*o[0]];return{pos:s,f:o,r:c,up:h}}function Au(){let e=[];return Object.values(vt).forEach(t=>{e.push([t.x,t.base,t.z],[t.x,t.top,t.z])}),e.concat(yl)}function ms(e,t,i={}){let r=Math.min(i.inset||0,e*.6),a=Math.max(0,i.top??0),n=Math.min(t,i.bottom??t),s=Math.max(1,e-r),o=Math.max(40,n-a),l=(a+n)/2,c=(x,y)=>Math.max(xt.fitShare*x,Math.min(xt.fitShareMax*x,xt.fitMinSceneShare*y)),h=Math.min(c(s,e)/hn.w,c(o,t)/hn.h),p=r+s/2-h*hn.cu,u=l+h*hn.cv,g=r+s/2;return{K:h,cx:p,cy:u,zoom:h*fs/(t/2),ox:e/2-p,oy:t/2-u,focusOx:e/2-g,focusOy:t/2-l}}function gs(e){let t=nr[e],i=t.ax*t.width,r=t.ay*t.height,a=t.width/2-i,n=t.height/2-r;return{K:t.K,cx:i,cy:r,zoom:t.K*fs/(t.height/2),ox:a,oy:n,focusOx:a,focusOy:n}}function El(e,t,i,r){let a=nr[e],n=ms(t,i,r),s=gs(e),o=n.K/s.K,l=n.cx-s.cx*o,c=n.cy-s.cy*o,h=a.width*o,p=a.height*o;return l<=.5&&c<=.5&&l+h>=t-.5&&c+p>=i-.5?{left:l,top:c,width:h,height:p}:null}function bl(e){return xt.closestSpan*e/fs}var ps,fs,ds,hn,_s=on(()=>{cn();ps=Math.PI/180,fs=Math.tan(xt.fov/2*ps);ds=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];hn=(()=>{let{pos:e,f:t,r:i,up:r}=wu(),a=1/0,n=-1/0,s=1/0,o=-1/0;return Au().forEach(l=>{let c=[l[0]-e[0],l[1]-e[1],l[2]-e[2]],h=ds(c,t),p=ds(c,i)/h,u=ds(c,r)/h;a=Math.min(a,p),n=Math.max(n,p),s=Math.min(s,u),o=Math.max(o,u)}),{u0:a,u1:n,v0:s,v1:o,cu:(a+n)/2,cv:(s+o)/2,w:n-a,h:o-s}})()});function od(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ld(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Jn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function cd(){let e=Jn("canvas");return e.style.display="block",e}function Ul(...e){let t="THREE."+e.shift();ha?ha("log",t,...e):console.log(t,...e)}function Jc(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function je(...e){e=Jc(e);let t="THREE."+e.shift();if(ha)ha("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function qe(...e){e=Jc(e);let t="THREE."+e.shift();if(ha)ha("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Vn(...e){let t=e.join(" ");t in Dl||(Dl[t]=!0,je(...e))}function hd(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}function Wa(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Kt[e&255]+Kt[e>>8&255]+Kt[e>>16&255]+Kt[e>>24&255]+"-"+Kt[t&255]+Kt[t>>8&255]+"-"+Kt[t>>16&15|64]+Kt[t>>24&255]+"-"+Kt[i&63|128]+Kt[i>>8&255]+"-"+Kt[i>>16&255]+Kt[i>>24&255]+Kt[r&255]+Kt[r>>8&255]+Kt[r>>16&255]+Kt[r>>24&255]).toLowerCase()}function st(e,t,i){return Math.max(t,Math.min(i,e))}function dd(e,t){return(e%t+t)%t}function bs(e,t,i){return(1-i)*e+i*t}function pd(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Yo(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function fd(e,t){if(t.constructor===Float32Array)return e;let i=Yo(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function md(e,t){if(t.constructor===Float32Array)return e;let i=Yo(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}function gd(){let e={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===ft&&(a.r=er(a.r),a.g=er(a.g),a.b=er(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ft&&(a.r=ia(a.r),a.g=ia(a.g),a.b=ia(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===dr?Zn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[s].fromXYZ).multiply(this.spaces[n].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Kn]:{primaries:t,whitePoint:r,transfer:Zn,toXYZ:Fl,fromXYZ:Bl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:r,transfer:ft,toXYZ:Fl,fromXYZ:Bl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),e}function er(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ia(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function As(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?_d.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}function Ps(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}function zs(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){wr.fromArray(e,n);let o=a.x*Math.abs(wr.x)+a.y*Math.abs(wr.y)+a.z*Math.abs(wr.z),l=t.dot(wr),c=i.dot(wr),h=r.dot(wr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function Ud(e,t,i,r,a,n,s,o){let l;if(t.side===oi?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===Lr,o),l===null)return null;wn.copy(o),wn.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(wn);return c<i.near||c>i.far?null:{distance:c,point:wn.clone(),object:e}}function An(e,t,i,r,a,n,s,o,l,c){e.getVertexPosition(o,yn),e.getVertexPosition(l,En),e.getVertexPosition(c,bn);let h=Ud(e,t,i,r,yn,En,bn,Kl);if(h){let p=new G;Ca.getBarycoord(Kl,yn,En,bn,p),a&&(h.uv=Ca.getInterpolatedAttribute(a,o,l,c,p,new it)),n&&(h.uv1=Ca.getInterpolatedAttribute(n,o,l,c,p,new it)),s&&(h.normal=Ca.getInterpolatedAttribute(s,o,l,c,p,new G),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new G,materialIndex:0};Ca.getNormal(yn,En,bn,u.normal),h.face=u,h.barycoord=p}return h}function tc(e,t,i,r,a,n,s){let o=Fo.distanceSqToPoint(e);if(o<i){let l=new G;Fo.closestPointToPoint(e,l),l.applyMatrix4(r);let c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}function pa(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(ic(a))a.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(ic(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function $t(e){let t={};for(let i=0;i<e.length;i++){let r=pa(e[i]);for(let a in r)t[a]=r[a]}return t}function ic(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Hd(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Ah(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:nt.workingColorSpace}function Kr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Nn(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Rh(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function Jd(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function Qd(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=Rh(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=Jd(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}function rc(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function ac(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}function cc(e,t,i,r){let a=vp(r);switch(i){case jc:return e*t;case Wo:return e*t/a.components*a.byteLength;case Xo:return e*t/a.components*a.byteLength;case Pr:return e*t*2/a.components*a.byteLength;case jo:return e*t*2/a.components*a.byteLength;case qc:return e*t*3/a.components*a.byteLength;case Hi:return e*t*4/a.components*a.byteLength;case qo:return e*t*4/a.components*a.byteLength;case Bn:case zn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Hn:case Gn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ao:case so:return Math.max(e,16)*Math.max(t,8)/4;case ro:case no:return Math.max(e,8)*Math.max(t,8)/2;case oo:case lo:case ho:case uo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case co:case jn:case po:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case go:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case _o:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case vo:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case So:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case yo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case bo:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case To:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case wo:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ro:case Co:case Lo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Po:case No:return Math.ceil(e/4)*Math.ceil(t/4)*8;case qn:case Io:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vp(e){switch(e){case fi:case Vc:return{byteLength:1,components:1};case Ga:case kc:case ki:return{byteLength:2,components:1};case Vo:case ko:return{byteLength:2,components:4};case Vi:case Go:case Li:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}function Uh(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function xp(e){let t=new WeakMap;function i(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=e.HALF_FLOAT:g=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=e.SHORT;else if(c instanceof Uint32Array)g=e.UNSIGNED_INT;else if(c instanceof Int32Array)g=e.INT;else if(c instanceof Int8Array)g=e.BYTE;else if(c instanceof Uint8Array)g=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function r(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((g,x)=>g.start-x.start);let u=0;for(let g=1;g<p.length;g++){let x=p[u],y=p[g];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,p[u]=y)}p.length=u+1;for(let g=0,x=p.length;g<x;g++){let y=p[g];e.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}function tg(e,t,i,r,a,n){let s=new Ke(0),o=a===!0?0:1,l,c,h=null,p=0,u=null;function g(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){let S=E.backgroundBlurriness>0;w=t.get(w,S)}return w}function x(E){let w=!1,S=g(E);S===null?m(s,o):S&&S.isColor&&(m(S,1),w=!0);let A=e.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,n):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(E,w){let S=g(w);S&&S.isCubeTexture?(c===void 0&&(c=new mt(new _r(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:pa(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(eg.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Oh),c.material.toneMapped=nt.getTransfer(S.colorSpace)!==ft,(h!==S||p!==S.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,u=e.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new mt(new Xa(2,2),new Nr({name:"BackgroundMaterial",uniforms:pa(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=nt.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=S,p=S.version,u=e.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,w){E.getRGB(Un,Ah(e)),i.buffers.color.setClear(Un.r,Un.g,Un.b,w,n)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(E,w=1){s.set(E),o=w,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(s,o)},render:x,addToRenderList:y,dispose:d}}function ig(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(O,C,Q,I,X){let ae=!1,W=p(O,I,Q,C);n!==W&&(n=W,c(n.object)),ae=g(O,I,Q,X),ae&&x(O,I,Q,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),(ae||s)&&(s=!1,S(O,C,Q,I),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return e.createVertexArray()}function c(O){return e.bindVertexArray(O)}function h(O){return e.deleteVertexArray(O)}function p(O,C,Q,I){let X=I.wireframe===!0,ae=r[C.id];ae===void 0&&(ae={},r[C.id]=ae);let W=O.isInstancedMesh===!0?O.id:0,ye=ae[W];ye===void 0&&(ye={},ae[W]=ye);let Z=ye[Q.id];Z===void 0&&(Z={},ye[Q.id]=Z);let J=Z[X];return J===void 0&&(J=u(l()),Z[X]=J),J}function u(O){let C=[],Q=[],I=[];for(let X=0;X<i;X++)C[X]=0,Q[X]=0,I[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:Q,attributeDivisors:I,object:O,attributes:{},index:null}}function g(O,C,Q,I){let X=n.attributes,ae=C.attributes,W=0,ye=Q.getAttributes();for(let Z in ye)if(ye[Z].location>=0){let J=X[Z],ue=ae[Z];if(ue===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),J===void 0||J.attribute!==ue||ue&&J.data!==ue.data)return!0;W++}return n.attributesNum!==W||n.index!==I}function x(O,C,Q,I){let X={},ae=C.attributes,W=0,ye=Q.getAttributes();for(let Z in ye)if(ye[Z].location>=0){let J=ae[Z];J===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(J=O.instanceColor));let ue={};ue.attribute=J,J&&J.data&&(ue.data=J.data),X[Z]=ue,W++}n.attributes=X,n.attributesNum=W,n.index=I}function y(){let O=n.newAttributes;for(let C=0,Q=O.length;C<Q;C++)O[C]=0}function m(O){d(O,0)}function d(O,C){let Q=n.newAttributes,I=n.enabledAttributes,X=n.attributeDivisors;Q[O]=1,I[O]===0&&(e.enableVertexAttribArray(O),I[O]=1),X[O]!==C&&(e.vertexAttribDivisor(O,C),X[O]=C)}function E(){let O=n.newAttributes,C=n.enabledAttributes;for(let Q=0,I=C.length;Q<I;Q++)C[Q]!==O[Q]&&(e.disableVertexAttribArray(Q),C[Q]=0)}function w(O,C,Q,I,X,ae,W){W===!0?e.vertexAttribIPointer(O,C,Q,X,ae):e.vertexAttribPointer(O,C,Q,I,X,ae)}function S(O,C,Q,I){y();let X=I.attributes,ae=Q.getAttributes(),W=C.defaultAttributeValues;for(let ye in ae){let Z=ae[ye];if(Z.location>=0){let J=X[ye];if(J===void 0&&(ye==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),ye==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),J!==void 0){let ue=J.normalized,Ie=J.itemSize,ee=t.get(J);if(ee===void 0)continue;let fe=ee.buffer,Ne=ee.type,ze=ee.bytesPerElement,Ge=Ne===e.INT||Ne===e.UNSIGNED_INT||J.gpuType===Go;if(J.isInterleavedBufferAttribute){let Ee=J.data,Je=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,rt=J.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let De=0;De<Z.locationSize;De++)d(Z.location+De,Ee.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let De=0;De<Z.locationSize;De++)m(Z.location+De);e.bindBuffer(e.ARRAY_BUFFER,fe);for(let De=0;De<Z.locationSize;De++)w(Z.location+De,Ie/Z.locationSize,Ne,ue,Je*ze,(rt+Ie/Z.locationSize*De)*ze,Ge)}else{if(J.isInstancedBufferAttribute){for(let Ee=0;Ee<Z.locationSize;Ee++)d(Z.location+Ee,J.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)m(Z.location+Ee);e.bindBuffer(e.ARRAY_BUFFER,fe);for(let Ee=0;Ee<Z.locationSize;Ee++)w(Z.location+Ee,Ie/Z.locationSize,Ne,ue,Ie*ze,Ie/Z.locationSize*Ee*ze,Ge)}}else if(W!==void 0){let ue=W[ye];if(ue!==void 0)switch(ue.length){case 2:e.vertexAttrib2fv(Z.location,ue);break;case 3:e.vertexAttrib3fv(Z.location,ue);break;case 4:e.vertexAttrib4fv(Z.location,ue);break;default:e.vertexAttrib1fv(Z.location,ue)}}}}E()}function A(){L();for(let O in r){let C=r[O];for(let Q in C){let I=C[Q];for(let X in I){let ae=I[X];for(let W in ae)h(ae[W].object),delete ae[W];delete I[X]}}delete r[O]}}function R(O){if(r[O.id]===void 0)return;let C=r[O.id];for(let Q in C){let I=C[Q];for(let X in I){let ae=I[X];for(let W in ae)h(ae[W].object),delete ae[W];delete I[X]}}delete r[O.id]}function f(O){for(let C in r){let Q=r[C];for(let I in Q){let X=Q[I];if(X[O.id]===void 0)continue;let ae=X[O.id];for(let W in ae)h(ae[W].object),delete ae[W];delete X[O.id]}}}function M(O){for(let C in r){let Q=r[C],I=O.isInstancedMesh===!0?O.id:0,X=Q[I];if(X!==void 0){for(let ae in X){let W=X[ae];for(let ye in W)h(W[ye].object),delete W[ye];delete X[ae]}delete Q[I],Object.keys(Q).length===0&&delete r[C]}}}function L(){N(),s=!0,n!==a&&(n=a,c(n.object))}function N(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:L,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:M,releaseStatesOfProgram:f,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function rg(e,t,i){let r;function a(l){r=l}function n(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function s(l,c,h){h!==0&&(e.drawArraysInstanced(r,l,c,h),i.update(c,r,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,h);let p=0;for(let u=0;u<h;u++)p+=c[u];i.update(p,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function ag(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let f=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(f){return!(f!==Hi&&r.convert(f)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(f){let M=f===ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(f!==fi&&f!==Li&&!M&&r.convert(f)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(f){if(f==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";f="mediump"}return f==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);h!==c&&(je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.logarithmicDepthBuffer===!0&&p===!1;i.reversedDepthBuffer===!0&&p===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&p===!0&&je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let g=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),E=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),R=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:S,maxSamples:A,samples:R}}function ng(e){let t=this,i=null,r=0,a=!1,n=!1,s=new ur,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let g=p.length!==0||u||r!==0||a;return a=u,r=p.length,g},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(p,u){i=h(p,u,0)},this.setState=function(p,u,g){let x=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,d=e.get(p);if(!a||x===null||x.length===0||n&&!m)n?h(null):c();else{let E=n?0:r,w=E*4,S=d.clippingState||null;l.value=S,S=h(x,u,w,g);for(let A=0;A!==w;++A)S[A]=i[A];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function h(p,u,g,x){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=l.value,x!==!0||m===null){let d=g+y*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,S=g;w!==y;++w,S+=4)s.copy(p[w]).applyMatrix4(E,o),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function dc(e,t,i){return new tl(e,{minFilter:pr,generateMipmaps:t,type:ki,colorSpace:Kn,depthBuffer:i})}function Ka(e,t,i){return new Nr({name:e,uniforms:t,vertexShader:$e.cube_vert,fragmentShader:i,side:oi,blending:ta,depthTest:!1,depthWrite:!1})}function ug(){return Ka("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Fh}u

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
	`)}function dg(){return Ka("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bh}},`

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
	`)}function pg(){return Ka("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${og}
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
	`)}function pc(){return Ka("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function fc(){return Ka("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function fg(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,g=!1){return u==null?null:g?s(u):n(u)}function n(u){if(u&&u.isTexture){let g=u.mapping;if(g===vs||g===xs)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let y=new tl(x.height);return y.fromEquirectangularTexture(e,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let g=u.mapping,x=g===vs||g===xs,y=g===la||g===Ha;if(x||y){let m=i.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return r===null&&(r=new uc(e)),m=x?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let E=u.image;return x&&E&&E.height>0||y&&E&&l(E)?(r===null&&(r=new uc(e)),m=x?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,g){return g===vs?u.mapping=la:g===xs&&(u.mapping=Ha),u}function l(u){let g=0,x=6;for(let y=0;y<x;y++)u[y]!==void 0&&g++;return g===x}function c(u){let g=u.target;g.removeEventListener("dispose",c);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function h(u){let g=u.target;g.removeEventListener("dispose",h);let x=i.get(g);x!==void 0&&(i.delete(g),x.dispose())}function p(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:p}}function mg(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Vn("WebGLRenderer: "+r+" extension not supported."),a}}}function gg(e,t,i,r){let a={},n=new WeakMap,s=new FinalizationRegistry(x=>delete a[x]);function o(x){l(x.target)}function l(x){x.index!==null&&t.remove(x.index);for(let m in x.attributes)t.remove(x.attributes[m]);x.removeEventListener("dispose",o),delete a[x.id],s.unregister(x);let y=n.get(x);y&&(t.remove(y),n.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function c(x,y){return a[y.id]!==void 0||(y.addEventListener("dispose",o),a[y.id]=new WeakRef(y),s.register(y,y.id,y),i.memory.geometries++),y}function h(x){let y=x.attributes;for(let m in y)t.update(y[m],e.ARRAY_BUFFER)}function p(x){let y=x.index,m=x.attributes.position,d=0;if(m===void 0)return;let E=y!==null?y.array.length:m.array.length/3-1,w=m.count>=65535?sh:nh,S=new w(Math.ceil(E/3)*6,1),A=S.array;if(y!==null){let f=y.array;d=y.version;for(let M=0,L=0;M<E;M+=3){let N=f[M+0],O=f[M+1],C=f[M+2];A[L++]=N,A[L++]=O,A[L++]=O,A[L++]=C,A[L++]=C,A[L++]=N}}else{d=m.version;for(let f=0,M=0;f<E;f+=3){let L=f+0,N=f+1,O=f+2;A[M++]=L,A[M++]=N,A[M++]=N,A[M++]=O,A[M++]=O,A[M++]=L}}S.version=d;let R=n.get(x);R&&t.remove(R),n.set(x,S)}function u(x){let y=n.get(x);if(y){let m=x.index;m!==null&&y.version<m.version&&p(x)}else p(x);return n.get(x)}function g(){for(let x in a){let y=a[x].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:g}}function _g(e,t,i){let r;function a(p){r=p}let n,s;function o(p){n=p.type,s=p.bytesPerElement}function l(p,u){e.drawElements(r,u,n,p*s),i.update(u,r,1)}function c(p,u,g){g!==0&&(e.drawElementsInstanced(r,u,n,p*s,g),i.update(u,r,g))}function h(p,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,p,0,g);let x=0;for(let y=0;y<g;y++)x+=u[y];i.update(x,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vg(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:qe("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function xg(e,t,i){let r=new WeakMap,a=new Lt;function n(s,o,l){let c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=r.get(o);if(u===void 0||u.count!==p){let g=function(){M.dispose(),r.delete(o),o.removeEventListener("dispose",g)};u!==void 0&&u.texture.dispose();let x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],S=0;x===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let A=o.attributes.position.count*S,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let f=new Float32Array(A*R*4*p),M=new Qc(f,A,R,p);M.type=Li,M.needsUpdate=!0;let L=S*4;for(let N=0;N<p;N++){let O=d[N],C=E[N],Q=w[N],I=A*R*4*N;for(let X=0;X<O.count;X++){let ae=X*L;x===!0&&(a.fromBufferAttribute(O,X),f[I+ae+0]=a.x,f[I+ae+1]=a.y,f[I+ae+2]=a.z,f[I+ae+3]=0),y===!0&&(a.fromBufferAttribute(C,X),f[I+ae+4]=a.x,f[I+ae+5]=a.y,f[I+ae+6]=a.z,f[I+ae+7]=0),m===!0&&(a.fromBufferAttribute(Q,X),f[I+ae+8]=a.x,f[I+ae+9]=a.y,f[I+ae+10]=a.z,f[I+ae+11]=Q.itemSize===4?a.w:1)}}u={count:p,texture:M,size:new it(A,R)},r.set(o,u),o.addEventListener("dispose",g)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let g=0;for(let y=0;y<c.length;y++)g+=c[y];let x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function Sg(e,t,i,r,a){let n=new WeakMap;function s(c){let h=a.render.frame,p=c.geometry,u=t.get(c,p);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let g=c.skeleton;n.get(g)!==h&&(g.update(),n.set(g,h))}return u}function o(){n=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),r.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:o}}function yg(e,t,i,r,a,n){let s=new Gi(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new ei;h.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ut([0,2,0,0,2,0],2));let p=new Wd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new mt(h,p),g=new Ih(-1,1,1,-1,0,1),x=null,y=null,m=!1,d,E=null,w=[],S=!1;this.setSize=function(A,R){s.setSize(A,R),o!==null&&o.setSize(A,R),l!==null&&l.setSize(A,R);for(let f=0;f<w.length;f++){let M=w[f];M.setSize&&M.setSize(A,R)}},this.setEffects=function(A){w=A,S=w.length>0&&w[0].isRenderPass===!0;let R=s.width,f=s.height;w.length>0&&o===null&&(o=new Gi(R,f,{type:ki,depthBuffer:!1,stencilBuffer:!1}),l=new Gi(R,f,{type:ki,depthBuffer:!1,stencilBuffer:!1}));let M=a===!0&&w.some(L=>L.needsDepthTexture===!0);M!==(s.depthTexture!==null)&&(M===!0&&c===null&&(c=new da(R,f),n===!0&&(c.format=fr,c.type=ca)),s.dispose(),s.depthTexture=M?c:null,s.resolveDepthBuffer=M,s.storeMultisampledDepthBuffer=M);for(let L=0;L<w.length;L++){let N=w[L];N.setSize&&N.setSize(R,f),M&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(A,R){if(m||A.toneMapping===$i&&w.length===0)return!1;if(E=R,R!==null){let f=R.width,M=R.height;(s.width!==f||s.height!==M)&&this.setSize(f,M)}return S===!1&&A.setRenderTarget(s),d=A.toneMapping,A.toneMapping=$i,!0},this.hasRenderPass=function(){return S},this.end=function(A,R){A.toneMapping=d,m=!0;let f=s,M=o;for(let L=0;L<w.length;L++){let N=w[L];N.enabled!==!1&&(N.render(A,M,f,R),N.needsSwap!==!1&&(f=M,M=M===o?l:o))}if(x!==A.outputColorSpace||y!==A.toneMapping){x=A.outputColorSpace,y=A.toneMapping,p.defines={},nt.getTransfer(x)===ft&&(p.defines.SRGB_TRANSFER="");let L=Mg[y];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=f.texture,A.setRenderTarget(E),A.render(u,g),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}function va(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=mc[a];if(n===void 0&&(n=new Float32Array(a),mc[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Ft(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Bt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function $n(e,t){let i=gc[t];i===void 0&&(i=new Int32Array(t),gc[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Eg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function bg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ft(i,t))return;e.uniform2fv(this.addr,t),Bt(i,t)}}function Tg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Ft(i,t))return;e.uniform3fv(this.addr,t),Bt(i,t)}}function wg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ft(i,t))return;e.uniform4fv(this.addr,t),Bt(i,t)}}function Ag(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ft(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Bt(i,t)}else{if(Ft(i,r))return;xc.set(r),e.uniformMatrix2fv(this.addr,!1,xc),Bt(i,r)}}function Rg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ft(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Bt(i,t)}else{if(Ft(i,r))return;vc.set(r),e.uniformMatrix3fv(this.addr,!1,vc),Bt(i,r)}}function Cg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ft(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Bt(i,t)}else{if(Ft(i,r))return;_c.set(r),e.uniformMatrix4fv(this.addr,!1,_c),Bt(i,r)}}function Lg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Pg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ft(i,t))return;e.uniform2iv(this.addr,t),Bt(i,t)}}function Ng(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ft(i,t))return;e.uniform3iv(this.addr,t),Bt(i,t)}}function Ig(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ft(i,t))return;e.uniform4iv(this.addr,t),Bt(i,t)}}function Dg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Ug(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ft(i,t))return;e.uniform2uiv(this.addr,t),Bt(i,t)}}function Og(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ft(i,t))return;e.uniform3uiv(this.addr,t),Bt(i,t)}}function Fg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ft(i,t))return;e.uniform4uiv(this.addr,t),Bt(i,t)}}function es(e){return e.version===0&&(e.compareFunction=Zc,e.needsUpdate=!0),e}function Bg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?n=es(Gh):n=Hh,i.setTexture2D(t||n,a)}function zg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Wh,a)}function Hg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_CUBE_SHADOW?n=es(Vh):n=Xh,i.setTextureCube(t||n,a)}function Gg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||kh,a)}function Vg(e){switch(e){case 5126:return Eg;case 35664:return bg;case 35665:return Tg;case 35666:return wg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Lg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ng;case 35669:case 35673:return Ig;case 5125:return Dg;case 36294:return Ug;case 36295:return Og;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Gg}}function kg(e,t){e.uniform1fv(this.addr,t)}function Wg(e,t){let i=va(t,this.size,2);e.uniform2fv(this.addr,i)}function Xg(e,t){let i=va(t,this.size,3);e.uniform3fv(this.addr,i)}function jg(e,t){let i=va(t,this.size,4);e.uniform4fv(this.addr,i)}function qg(e,t){let i=va(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Yg(e,t){let i=va(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Kg(e,t){let i=va(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Zg(e,t){e.uniform1iv(this.addr,t)}function Jg(e,t){e.uniform2iv(this.addr,t)}function Qg(e,t){e.uniform3iv(this.addr,t)}function $g(e,t){e.uniform4iv(this.addr,t)}function e0(e,t){e.uniform1uiv(this.addr,t)}function t0(e,t){e.uniform2uiv(this.addr,t)}function i0(e,t){e.uniform3uiv(this.addr,t)}function r0(e,t){e.uniform4uiv(this.addr,t)}function a0(e,t,i){let r=this.cache,a=t.length,n=$n(i,a);Ft(r,n)||(e.uniform1iv(this.addr,n),Bt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=es(Gh):s=Hh;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function n0(e,t,i){let r=this.cache,a=t.length,n=$n(i,a);Ft(r,n)||(e.uniform1iv(this.addr,n),Bt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Wh,n[s])}function s0(e,t,i){let r=this.cache,a=t.length,n=$n(i,a);Ft(r,n)||(e.uniform1iv(this.addr,n),Bt(r,n));let s;this.type===e.SAMPLER_CUBE_SHADOW?s=es(Vh):s=Xh;for(let o=0;o!==a;++o)i.setTextureCube(t[o]||s,n[o])}function o0(e,t,i){let r=this.cache,a=t.length,n=$n(i,a);Ft(r,n)||(e.uniform1iv(this.addr,n),Bt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||kh,n[s])}function l0(e){switch(e){case 5126:return kg;case 35664:return Wg;case 35665:return Xg;case 35666:return jg;case 35674:return qg;case 35675:return Yg;case 35676:return Kg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return $g;case 5125:return e0;case 36294:return t0;case 36295:return i0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return o0}}function Sc(e,t){e.seq.push(t),e.map[t.id]=t}function d0(e,t,i){let r=e.name,a=r.length;for(js.lastIndex=0;;){let n=js.exec(r),s=js.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Sc(i,c===void 0?new c0(o,e,t):new h0(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new u0(o),Sc(i,h)),i=h}}}function Mc(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}function m0(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}function g0(e){nt._getMatrix(yc,nt.workingColorSpace,e);let t=`mat3( ${yc.elements.map(i=>i.toFixed(4))} )`;switch(nt.getTransfer(e)){case Zn:return[t,"LinearTransferOETF"];case ft:return[t,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Ec(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+m0(e.getShaderSource(t),s)}else return a}function _0(e,t){let i=g0(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function x0(e,t){let i=v0[t];return i===void 0?(je("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function S0(){nt.getLuminanceCoefficients(On);let e=On.x.toFixed(4),t=On.y.toFixed(4),i=On.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function y0(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function E0(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Fa(e){return e!==""}function bc(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Tc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function zo(e){return e.replace(b0,T0)}function T0(e,t){let i=$e[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return zo(i)}function wc(e){return e.replace(w0,A0)}function A0(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Ac(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function C0(e){return R0[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function P0(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":L0[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function I0(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":N0[e.combine]||"ENVMAP_BLENDING_NONE"}function D0(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=C0(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=P0(i),p=I0(i),u=M0(i),g=y0(n),x=a.createProgram(),y,m,d=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Fa).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Fa).join(`
`),m.length>0&&(m+=`
`)):(y=[Ac(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),m=[Ac(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+p:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==$i?"#define TONE_MAPPING":"",i.toneMapping!==$i?$e.tonemapping_pars_fragment:"",i.toneMapping!==$i?x0("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,_0("linearToOutputTexel",i.outputColorSpace),S0(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Fa).join(`
`)),s=zo(s),s=bc(s,i),s=Tc(s,i),o=zo(o),o=bc(o,i),o=Tc(o,i),s=wc(s),o=wc(o),i.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",i.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=d+y+s,w=d+m+o,S=Mc(a,a.VERTEX_SHADER,E),A=Mc(a,a.FRAGMENT_SHADER,w);a.attachShader(x,S),a.attachShader(x,A),i.index0AttributeName!==void 0?a.bindAttribLocation(x,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function R(N){if(e.debug.checkShaderErrors){let O=a.getProgramInfoLog(x)||"",C=a.getShaderInfoLog(S)||"",Q=a.getShaderInfoLog(A)||"",I=O.trim(),X=C.trim(),ae=Q.trim(),W=!0,ye=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(W=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,S,A);else{let Z=Ec(a,S,"vertex"),J=Ec(a,A,"fragment");qe("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+Z+`
`+J)}else I!==""?je("WebGLProgram: Program Info Log:",I):(X===""||ae==="")&&(ye=!1);ye&&(N.diagnostics={runnable:W,programLog:I,vertexShader:{log:X,prefix:y},fragmentShader:{log:ae,prefix:m}})}a.deleteShader(S),a.deleteShader(A),f=new Xn(a,x),M=E0(a,x)}let f;this.getUniforms=function(){return f===void 0&&R(this),f};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(x,p0)),L},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=f0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=A,this}function B0(e){return e===Pr||e===jn||e===qn}function z0(e,t,i,r,a,n){let s=new eh,o=new O0,l=new Set,c=[],h=new Map,p=r.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(f){return l.add(f),f===0?"uv":`uv${f}`}function x(f,M,L,N,O,C){let Q=N.fog,I=O.geometry,X=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?N.environment:null,ae=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,W=t.get(f.envMap||X,ae),ye=u[f.type],Z=r.precision;f.precision!==null&&(Z=r.getMaxPrecision(f.precision),Z!==f.precision&&je("WebGLProgram.getParameters:",f.precision,"not supported, using",Z,"instead."));let J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ue=J!==void 0?J.length:0,Ie=0;I.morphAttributes.position!==void 0&&(Ie=1),I.morphAttributes.normal!==void 0&&(Ie=2),I.morphAttributes.color!==void 0&&(Ie=3);let ee,fe,Ne,ze;if(ye){let we=zi[ye];ee=we.vertexShader,fe=we.fragmentShader}else{ee=f.vertexShader,fe=f.fragmentShader;let we=o.getVertexShaderStage(f),ot=o.getFragmentShaderStage(f);o.update(f,we,ot),Ne=we.id,ze=ot.id}let Ge=e.getRenderTarget(),Ee=e.state.buffers.depth.getReversed(),Je=O.isInstancedMesh===!0,rt=O.isBatchedMesh===!0,De=!!f.map,Rt=!!f.matcap,Nt=!!W,Dt=Nt&&W.isPMREMTexture===!0,Tt=!!f.aoMap,zt=!!f.lightMap,Qt=!!f.bumpMap&&f.wireframe===!1,wt=!!f.normalMap,Mt=!!f.displacementMap,qt=!!f.emissiveMap,Gt=!!f.metalnessMap,ai=!!f.roughnessMap,B=f.anisotropy>0,hi=f.clearcoat>0,ht=f.diffuseRoughness>0,Ct=f.dispersion>0,Re=f.retroreflectivity>0,dt=f.iridescence>0,Ve=f.sheen>0,ke=f.transmission>0,Ut=B&&!!f.anisotropyMap,T=hi&&!!f.clearcoatMap,_=hi&&!!f.clearcoatNormalMap,V=hi&&!!f.clearcoatRoughnessMap,ce=ht&&!!f.diffuseRoughnessMap,ie=dt&&!!f.iridescenceMap,Me=dt&&!!f.iridescenceThicknessMap,ve=Ve&&!!f.sheenColorMap,F=Ve&&!!f.sheenRoughnessMap,ne=!!f.specularMap,re=!!f.specularColorMap,P=!!f.specularIntensityMap,Y=ke&&!!f.transmissionMap,se=ke&&!!f.thicknessMap,pe=!!f.gradientMap,be=!!f.alphaMap,ge=f.alphaTest>0,Oe=!!f.alphaHash,he=!!f.extensions,We=$i;f.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(We=e.toneMapping);let He=Dt?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,tt={shaderID:ye,shaderType:f.type,shaderName:f.name,vertexShader:ee,fragmentShader:fe,defines:f.defines,customVertexShaderID:Ne,customFragmentShaderID:ze,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:Z,batching:rt,batchingColor:rt&&O._colorsTexture!==null,instancing:Je,instancingColor:Je&&O.instanceColor!==null,instancingMorph:Je&&O.morphTexture!==null,outputColorSpace:Ge===null?e.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:De,matcap:Rt,envMap:Nt,envMapMode:Nt&&W.mapping,envMapPMREM:Dt,envMapMaxLod:Dt?He.length-1:null,envMapSize:Dt?He[0].width:null,aoMap:Tt,lightMap:zt,bumpMap:Qt,normalMap:wt,displacementMap:Mt,emissiveMap:qt,normalMapObjectSpace:wt&&f.normalMapType===$u,normalMapTangentSpace:wt&&f.normalMapType===Uo,packedNormalMap:wt&&f.normalMapType===Uo&&B0(f.normalMap.format),metalnessMap:Gt,roughnessMap:ai,anisotropy:B,anisotropyMap:Ut,clearcoat:hi,clearcoatMap:T,clearcoatNormalMap:_,clearcoatRoughnessMap:V,diffuseRoughness:ht,diffuseRoughnessMap:ce,dispersion:Ct,retroreflection:Re,iridescence:dt,iridescenceMap:ie,iridescenceThicknessMap:Me,sheen:Ve,sheenColorMap:ve,sheenRoughnessMap:F,specularMap:ne,specularColorMap:re,specularIntensityMap:P,transmission:ke,transmissionMap:Y,thicknessMap:se,gradientMap:pe,opaque:f.transparent===!1&&f.blending===Ba&&f.alphaToCoverage===!1,alphaMap:be,alphaTest:ge,alphaHash:Oe,combine:f.combine,mapUv:De&&g(f.map.channel),aoMapUv:Tt&&g(f.aoMap.channel),lightMapUv:zt&&g(f.lightMap.channel),bumpMapUv:Qt&&g(f.bumpMap.channel),normalMapUv:wt&&g(f.normalMap.channel),displacementMapUv:Mt&&g(f.displacementMap.channel),emissiveMapUv:qt&&g(f.emissiveMap.channel),metalnessMapUv:Gt&&g(f.metalnessMap.channel),roughnessMapUv:ai&&g(f.roughnessMap.channel),anisotropyMapUv:Ut&&g(f.anisotropyMap.channel),clearcoatMapUv:T&&g(f.clearcoatMap.channel),clearcoatNormalMapUv:_&&g(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&g(f.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ce&&g(f.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&g(f.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&g(f.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(f.sheenColorMap.channel),sheenRoughnessMapUv:F&&g(f.sheenRoughnessMap.channel),specularMapUv:ne&&g(f.specularMap.channel),specularColorMapUv:re&&g(f.specularColorMap.channel),specularIntensityMapUv:P&&g(f.specularIntensityMap.channel),transmissionMapUv:Y&&g(f.transmissionMap.channel),thicknessMapUv:se&&g(f.thicknessMap.channel),alphaMapUv:be&&g(f.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(wt||B),vertexNormals:!!I.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(De||be),fog:!!Q,useFog:f.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||I.attributes.normal===void 0&&wt===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ee,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ie,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:C.filter(we=>we.texture!==null).length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:f.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:We,decodeVideoTexture:De&&f.map.isVideoTexture===!0&&nt.getTransfer(f.map.colorSpace)===ft,decodeVideoTextureEmissive:qt&&f.emissiveMap.isVideoTexture===!0&&nt.getTransfer(f.emissiveMap.colorSpace)===ft,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===Ci,flipSided:f.side===oi,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:he&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&f.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function y(f){let M=[];if(f.shaderID?M.push(f.shaderID):(M.push(f.customVertexShaderID),M.push(f.customFragmentShaderID)),f.defines!==void 0)for(let L in f.defines)M.push(L),M.push(f.defines[L]);return f.isRawShaderMaterial===!1&&(m(M,f),d(M,f),M.push(e.outputColorSpace)),M.push(f.customProgramCacheKey),M.join()}function m(f,M){f.push(M.precision),f.push(M.outputColorSpace),f.push(M.envMapMode),f.push(M.envMapPMREM),f.push(M.envMapMaxLod),f.push(M.envMapSize),f.push(M.mapUv),f.push(M.alphaMapUv),f.push(M.lightMapUv),f.push(M.aoMapUv),f.push(M.bumpMapUv),f.push(M.normalMapUv),f.push(M.displacementMapUv),f.push(M.emissiveMapUv),f.push(M.metalnessMapUv),f.push(M.roughnessMapUv),f.push(M.anisotropyMapUv),f.push(M.clearcoatMapUv),f.push(M.clearcoatNormalMapUv),f.push(M.clearcoatRoughnessMapUv),f.push(M.diffuseRoughnessMapUv),f.push(M.iridescenceMapUv),f.push(M.iridescenceThicknessMapUv),f.push(M.sheenColorMapUv),f.push(M.sheenRoughnessMapUv),f.push(M.specularMapUv),f.push(M.specularColorMapUv),f.push(M.specularIntensityMapUv),f.push(M.transmissionMapUv),f.push(M.thicknessMapUv),f.push(M.combine),f.push(M.fogExp2),f.push(M.sizeAttenuation),f.push(M.morphTargetsCount),f.push(M.numSunLights),f.push(M.numDirLights),f.push(M.numPointLights),f.push(M.numSpotLights),f.push(M.numSpotLightMaps),f.push(M.numHemiLights),f.push(M.numRectAreaLights),f.push(M.numSunLightShadows),f.push(M.numDirLightShadows),f.push(M.numPointLightShadows),f.push(M.numSpotLightShadows),f.push(M.numSpotLightShadowsWithMaps),f.push(M.numLightProbes),f.push(M.numLightProbeGrids),f.push(M.shadowMapType),f.push(M.toneMapping),f.push(M.numClippingPlanes),f.push(M.numClipIntersection),f.push(M.depthPacking)}function d(f,M){s.disableAll(),M.instancing&&s.enable(0),M.instancingColor&&s.enable(1),M.instancingMorph&&s.enable(2),M.matcap&&s.enable(3),M.envMap&&s.enable(4),M.normalMapObjectSpace&&s.enable(5),M.normalMapTangentSpace&&s.enable(6),M.clearcoat&&s.enable(7),M.iridescence&&s.enable(8),M.alphaTest&&s.enable(9),M.vertexColors&&s.enable(10),M.vertexAlphas&&s.enable(11),M.vertexUv1s&&s.enable(12),M.vertexUv2s&&s.enable(13),M.vertexUv3s&&s.enable(14),M.vertexTangents&&s.enable(15),M.anisotropy&&s.enable(16),M.alphaHash&&s.enable(17),M.batching&&s.enable(18),M.dispersion&&s.enable(19),M.retroreflection&&s.enable(24),M.diffuseRoughness&&s.enable(25),M.batchingColor&&s.enable(20),M.gradientMap&&s.enable(21),M.packedNormalMap&&s.enable(22),M.vertexNormals&&s.enable(23),f.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.reversedDepthBuffer&&s.enable(4),M.skinning&&s.enable(5),M.morphTargets&&s.enable(6),M.morphNormals&&s.enable(7),M.morphColors&&s.enable(8),M.premultipliedAlpha&&s.enable(9),M.shadowMapEnabled&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),M.decodeVideoTextureEmissive&&s.enable(20),M.alphaToCoverage&&s.enable(21),M.numLightProbeGrids>0&&s.enable(22),M.hasPositionAttribute&&s.enable(23),f.push(s.mask)}function E(f){let M=u[f.type],L;if(M){let N=zi[M];L=Gd.clone(N.uniforms)}else L=f.uniforms;return L}function w(f,M){let L=h.get(M);return L!==void 0?++L.usedTimes:(L=new D0(e,M,f,a),c.push(L),h.set(M,L)),L}function S(f){if(--f.usedTimes===0){let M=c.indexOf(f);c[M]=c[c.length-1],c.pop(),h.delete(f.cacheKey),f.destroy()}}function A(f){o.remove(f)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:E,acquireProgram:w,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:R}}function H0(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function G0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Rc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Cc(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function o(u,g,x,y,m,d){let E=e[t];return E===void 0?(E={id:u.id,object:u,geometry:g,material:x,materialVariant:s(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:d},e[t]=E):(E.id=u.id,E.object=u,E.geometry=g,E.material=x,E.materialVariant=s(u),E.groupOrder=y,E.renderOrder=u.renderOrder,E.z=m,E.group=d),t++,E}function l(u,g,x,y,m,d,E){E.reversedDepth===!0&&(m=-m);let w=o(u,g,x,y,m,d);x.transmission>0?r.push(w):x.transparent===!0?a.push(w):i.push(w)}function c(u,g,x,y,m,d){let E=o(u,g,x,y,m,d);x.transmission>0?r.unshift(E):x.transparent===!0?a.unshift(E):i.unshift(E)}function h(u,g){i.length>1&&i.sort(u||G0),r.length>1&&r.sort(g||Rc),a.length>1&&a.sort(g||Rc)}function p(){for(let u=t,g=e.length;u<g;u++){let x=e[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:c,finish:p,sort:h}}function V0(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new Cc,e.set(r,[s])):a>=n.length?(s=new Cc,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function k0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new G,color:new Ke};break;case"SpotLight":i={position:new G,direction:new G,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new G,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":i={direction:new G,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":i={color:new Ke,position:new G,halfWidth:new G,halfHeight:new G};break}return e[t.id]=i,i}}}function W0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}function j0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function q0(e){let t=new k0,i=W0(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new G);let a=new G,n=new Et,s=new Et;function o(c){let h=0,p=0,u=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let g=0,x=0,y=0,m=0,d=0,E=0,w=0,S=0,A=0,R=0,f=0,M=0,L=0,N=0;c.sort(j0);for(let C=0,Q=c.length;C<Q;C++){let I=c[C],X=I.color,ae=I.intensity,W=I.distance,ye=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Pr?ye=I.shadow.map.texture:ye=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=X.r*ae,p+=X.g*ae,u+=X.b*ae;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(I.sh.coefficients[Z],ae);N++}else if(I.isSunLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,ue=i.get(I);ue.shadowIntensity=J.intensity,ue.shadowBias=J.bias,ue.shadowNormalBias=J.normalBias,ue.shadowRadius=J.radius,ue.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),r.sunShadow[x]=ue,r.sunShadowMap[x]=ye;let Ie=J.getViewportCount();for(let ee=0;ee<Ie;ee++)r.sunShadowMatrix[y+ee]=J.getMatrix(ee),r.sunShadowCascade[y+ee]=J._cascadeData[ee];y+=Ie,x++}r.sun[g]=Z,g++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,ue=i.get(I);ue.shadowIntensity=J.intensity,ue.shadowBias=J.bias,ue.shadowNormalBias=J.normalBias,ue.shadowRadius=J.radius,ue.shadowMapSize=J.mapSize,r.directionalShadow[m]=ue,r.directionalShadowMap[m]=ye,r.directionalShadowMatrix[m]=I.shadow.matrix,A++}r.directional[m]=Z,m++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(X).multiplyScalar(ae),Z.distance=W,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,r.spot[E]=Z;let J=I.shadow;if(I.map&&(r.spotLightMap[M]=I.map,M++,J.updateMatrices(I),I.castShadow&&L++),r.spotLightMatrix[E]=J.matrix,I.castShadow){let ue=i.get(I);ue.shadowIntensity=J.intensity,ue.shadowBias=J.bias,ue.shadowNormalBias=J.normalBias,ue.shadowRadius=J.radius,ue.shadowMapSize=J.mapSize,r.spotShadow[E]=ue,r.spotShadowMap[E]=ye,f++}E++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(X).multiplyScalar(ae),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),r.rectArea[w]=Z,w++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let J=I.shadow,ue=i.get(I);ue.shadowIntensity=J.intensity,ue.shadowBias=J.bias,ue.shadowNormalBias=J.normalBias,ue.shadowRadius=J.radius,ue.shadowMapSize=J.mapSize,ue.shadowCameraNear=J.camera.near,ue.shadowCameraFar=J.camera.far,r.pointShadow[d]=ue,r.pointShadowMap[d]=ye,r.pointShadowMatrix[d]=I.shadow.matrix,R++}r.point[d]=Z,d++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(ae),Z.groundColor.copy(I.groundColor).multiplyScalar(ae),r.hemi[S]=Z,S++}}w>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=u;let O=r.hash;(O.sunLength!==g||O.directionalLength!==m||O.pointLength!==d||O.spotLength!==E||O.rectAreaLength!==w||O.hemiLength!==S||O.numSunShadows!==x||O.numDirectionalShadows!==A||O.numPointShadows!==R||O.numSpotShadows!==f||O.numSpotMaps!==M||O.numLightProbes!==N)&&(r.sun.length=g,r.directional.length=m,r.spot.length=E,r.rectArea.length=w,r.point.length=d,r.hemi.length=S,r.sunShadow.length=x,r.sunShadowMap.length=x,r.sunShadowMatrix.length=y,r.sunShadowCascade.length=y,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.directionalShadowMatrix.length=A,r.pointShadow.length=R,r.pointShadowMap.length=R,r.pointShadowMatrix.length=R,r.spotShadow.length=f,r.spotShadowMap.length=f,r.spotLightMatrix.length=f+M-L,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=N,O.sunLength=g,O.directionalLength=m,O.pointLength=d,O.spotLength=E,O.rectAreaLength=w,O.hemiLength=S,O.numSunShadows=x,O.numDirectionalShadows=A,O.numPointShadows=R,O.numSpotShadows=f,O.numSpotMaps=M,O.numLightProbes=N,r.version=X0++)}function l(c,h){let p=0,u=0,g=0,x=0,y=0,m=0,d=h.matrixWorldInverse;for(let E=0,w=c.length;E<w;E++){let S=c[E];if(S.isSunLight){let A=r.sun[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),p++}else if(S.isDirectionalLight){let A=r.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(d),u++}else if(S.isSpotLight){let A=r.spot[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(d),x++}else if(S.isRectAreaLight){let A=r.rectArea[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),s.identity(),n.copy(S.matrixWorld),n.premultiply(d),s.extractRotation(n),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(s),A.halfHeight.applyMatrix4(s),y++}else if(S.isPointLight){let A=r.point[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),g++}else if(S.isHemisphereLight){let A=r.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:r}}function Lc(e){let t=new q0(e),i=[],r=[],a=[];function n(p){h.camera=p,i.length=0,r.length=0,a.length=0}function s(p){p.isLightProbeGrid?a.push(p):i.push(p)}function o(p){r.push(p)}function l(){t.setup(i),a.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){t.setupView(i,p)}let h={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:h,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function Y0(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Lc(e),t.set(a,[o])):n>=s.length?(o=new Lc(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}function $0(e,t,i){let r=new ka,a=new it,n=new it,s=new Lt,o=new Xd,l=new jd,c={},h=i.maxTextureSize,p={[Lr]:oi,[oi]:Lr,[Ci]:Ci},u=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:K0,fragmentShader:Z0}),g=u.clone();g.defines.HORIZONTAL_PASS=1;let x=new ei;x.setAttribute("position",new mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new mt(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fn;let d=this.type;this.render=function(R,f,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Lu&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fn);let L=e.getRenderTarget(),N=e.getActiveCubeFace(),O=e.getActiveMipmapLevel(),C=e.state;C.setBlending(ta),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let Q=d!==this.type;Q&&f.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(X=>X.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,X=R.length;I<X;I++){let ae=R[I],W=ae.shadow;if(W===void 0){je("WebGLShadowMap:",ae,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);let ye=W.getFrameExtents();a.multiply(ye),n.copy(W.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/ye.x),a.x=n.x*ye.x,W.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/ye.y),a.y=n.y*ye.y,W.mapSize.y=n.y));let Z=e.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Z,W.map===null||Q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Oa){if(ae.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Gi(a.x,a.y,{format:Pr,type:ki,minFilter:si,magFilter:si,generateMipmaps:!1}),W.map.texture.name=ae.name+".shadowMap",W.map.depthTexture=new da(a.x,a.y,Li),W.map.depthTexture.name=ae.name+".shadowMapDepth",W.map.depthTexture.format=gr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Wt,W.map.depthTexture.magFilter=Wt}else ae.isPointLight?(W.map=new tl(a.x),W.map.depthTexture=new fh(a.x,Vi)):(W.map=new Gi(a.x,a.y),W.map.depthTexture=new da(a.x,a.y,Vi)),W.map.depthTexture.name=ae.name+".shadowMap",W.map.depthTexture.format=gr,this.type===Fn?(W.map.depthTexture.compareFunction=Z?Kc:Yc,W.map.depthTexture.minFilter=si,W.map.depthTexture.magFilter=si):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Wt,W.map.depthTexture.magFilter=Wt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==a.x||W.map.height!==a.y)&&W.map.setSize(a.x,a.y);let J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();ae.isPointLight!==!0&&W.updateMatrices(ae,M);let ue=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:M.layers;for(let Ie=0;Ie<J;Ie++){let ee=W.getCamera(Ie);if(ae.isPointLight){let fe=W.camera,Ne=W.matrix,ze=ae.distance||fe.far;ze!==fe.far&&(fe.far=ze,fe.updateProjectionMatrix()),Ua.setFromMatrixPosition(ae.matrixWorld),fe.position.copy(Ua),qs.copy(fe.position),qs.add(J0[Ie]),fe.up.copy(Q0[Ie]),fe.lookAt(qs),fe.updateMatrixWorld(),Ne.makeTranslation(-Ua.x,-Ua.y,-Ua.z),Pc.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Pc,fe.coordinateSystem,fe.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)e.setRenderTarget(W.map,Ie),e.clear();else{Ie===0&&(e.setRenderTarget(W.map),e.clear());let fe=W.getViewport(Ie);s.set(n.x*fe.x,n.y*fe.y,n.x*fe.z,n.y*fe.w),C.viewport(s)}r=W.getFrustum(Ie),S(f,M,ee,ae,ue,this.type)}W.isPointLightShadow!==!0&&this.type===Oa&&E(W,M),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(L,N,O)};function E(R,f){let M=t.update(y);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null?R.mapPass=new Gi(a.x,a.y,{format:Pr,type:ki}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(f,null,M,u,y,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value.set(R.map.width,R.map.height),g.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(f,null,M,g,y,null)}function w(R,f,M,L){let N=null,O=M.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)N=O;else if(N=M.isPointLight===!0?l:o,e.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0||f.alphaToCoverage===!0){let C=N.uuid,Q=f.uuid,I=c[C];I===void 0&&(I={},c[C]=I);let X=I[Q];X===void 0&&(X=N.clone(),I[Q]=X,f.addEventListener("dispose",A)),N=X}if(N.visible=f.visible,N.wireframe=f.wireframe,L===Oa?N.side=f.shadowSide!==null?f.shadowSide:f.side:N.side=f.shadowSide!==null?f.shadowSide:p[f.side],N.alphaMap=f.alphaMap,N.alphaTest=f.alphaToCoverage===!0?.5:f.alphaTest,N.map=f.map,N.clipShadows=f.clipShadows,N.clippingPlanes=f.clippingPlanes,N.clipIntersection=f.clipIntersection,N.displacementMap=f.displacementMap,N.displacementScale=f.displacementScale,N.displacementBias=f.displacementBias,N.wireframeLinewidth=f.wireframeLinewidth,N.linewidth=f.linewidth,M.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let C=e.properties.get(N);C.light=M}return N}function S(R,f,M,L,N,O){if(R.visible===!1)return;if(R.layers.test(N)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&O===Oa)&&(!R.frustumCulled||R.intersectsFrustum(r))){R.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,R.matrixWorld);let Q=t.update(R),I=R.material;if(Array.isArray(I)){let X=Q.groups;for(let ae=0,W=X.length;ae<W;ae++){let ye=X[ae],Z=I[ye.materialIndex];if(Z&&Z.visible){let J=w(R,Z,L,O);R.onBeforeShadow(e,R,f,M,Q,J,ye),e.renderBufferDirect(M,null,Q,J,R,ye),R.onAfterShadow(e,R,f,M,Q,J,ye)}}}else if(I.visible){let X=w(R,I,L,O);R.onBeforeShadow(e,R,f,M,Q,X,null),e.renderBufferDirect(M,null,Q,X,R,null),R.onAfterShadow(e,R,f,M,Q,X,null)}}let C=R.children;for(let Q=0,I=C.length;Q<I;Q++)S(C[Q],f,M,L,N,O)}function A(R){R.target.removeEventListener("dispose",A);for(let f in c){let M=c[f],L=R.target.uuid;L in M&&(M[L].dispose(),delete M[L])}}}function e_(e,t){function i(){let P=!1,Y=new Lt,se=null,pe=new Lt(0,0,0,0);return{setMask:function(be){se!==be&&!P&&(e.colorMask(be,be,be,be),se=be)},setLocked:function(be){P=be},setClear:function(be,ge,Oe,he,We){We===!0&&(be*=he,ge*=he,Oe*=he),Y.set(be,ge,Oe,he),pe.equals(Y)===!1&&(e.clearColor(be,ge,Oe,he),pe.copy(Y))},reset:function(){P=!1,se=null,pe.set(-1,0,0,0)}}}function r(){let P=!1,Y=!1,se=null,pe=null,be=null;return{setReversed:function(ge){if(Y!==ge){let Oe=t.get("EXT_clip_control");ge?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Y=ge;let he=be;be=null,this.setClear(he)}},getReversed:function(){return Y},setTest:function(ge){ge?Ee(e.DEPTH_TEST):Je(e.DEPTH_TEST)},setMask:function(ge){se!==ge&&!P&&(e.depthMask(ge),se=ge)},setFunc:function(ge){if(Y&&(ge=ud[ge]),pe!==ge){switch(ge){case Ys:e.depthFunc(e.NEVER);break;case Ks:e.depthFunc(e.ALWAYS);break;case Zs:e.depthFunc(e.LESS);break;case za:e.depthFunc(e.LEQUAL);break;case Js:e.depthFunc(e.EQUAL);break;case Qs:e.depthFunc(e.GEQUAL);break;case $s:e.depthFunc(e.GREATER);break;case eo:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pe=ge}},setLocked:function(ge){P=ge},setClear:function(ge){be!==ge&&(be=ge,Y&&(ge=1-ge),e.clearDepth(ge))},reset:function(){P=!1,se=null,pe=null,be=null,Y=!1}}}function a(){let P=!1,Y=null,se=null,pe=null,be=null,ge=null,Oe=null,he=null,We=null;return{setTest:function(He){P||(He?Ee(e.STENCIL_TEST):Je(e.STENCIL_TEST))},setMask:function(He){Y!==He&&!P&&(e.stencilMask(He),Y=He)},setFunc:function(He,tt,we){(se!==He||pe!==tt||be!==we)&&(e.stencilFunc(He,tt,we),se=He,pe=tt,be=we)},setOp:function(He,tt,we){(ge!==He||Oe!==tt||he!==we)&&(e.stencilOp(He,tt,we),ge=He,Oe=tt,he=we)},setLocked:function(He){P=He},setClear:function(He){We!==He&&(e.clearStencil(He),We=He)},reset:function(){P=!1,Y=null,se=null,pe=null,be=null,ge=null,Oe=null,he=null,We=null}}}let n=new i,s=new r,o=new a,l={},c=new WeakMap,h={},p={},u={},g=new WeakMap,x=[],y=null,m=!1,d=null,E=null,w=null,S=null,A=null,R=null,f=null,M=new Ke(0,0,0),L=0,N=!1,O=null,C=null,Q=null,I=null,X=null,ae=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ye=0,Z=e.getParameter(e.VERSION);Z.indexOf("WebGL")!==-1?(ye=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=ye>=1):Z.indexOf("OpenGL ES")!==-1&&(ye=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=ye>=2);let J=null,ue={},Ie=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),fe=new Lt().fromArray(Ie),Ne=new Lt().fromArray(ee);function ze(P,Y,se,pe){let be=new Uint8Array(4),ge=e.createTexture();e.bindTexture(P,ge),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Oe=0;Oe<se;Oe++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(Y,0,e.RGBA,1,1,pe,0,e.RGBA,e.UNSIGNED_BYTE,be):e.texImage2D(Y+Oe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,be);return ge}let Ge={};Ge[e.TEXTURE_2D]=ze(e.TEXTURE_2D,e.TEXTURE_2D,1),Ge[e.TEXTURE_CUBE_MAP]=ze(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ge[e.TEXTURE_2D_ARRAY]=ze(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Ge[e.TEXTURE_3D]=ze(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ee(e.DEPTH_TEST),s.setFunc(za),Qt(!1),wt(Tl),Ee(e.CULL_FACE),Tt(ta);function Ee(P){h[P]!==!0&&(e.enable(P),h[P]=!0)}function Je(P){h[P]!==!1&&(e.disable(P),h[P]=!1)}function rt(P,Y){return u[P]!==Y?(e.bindFramebuffer(P,Y),u[P]=Y,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=Y),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=Y),!0):!1}function De(P,Y){let se=x,pe=!1;if(P){se=g.get(Y),se===void 0&&(se=[],g.set(Y,se));let be=P.textures;if(se.length!==be.length||se[0]!==e.COLOR_ATTACHMENT0){for(let ge=0,Oe=be.length;ge<Oe;ge++)se[ge]=e.COLOR_ATTACHMENT0+ge;se.length=be.length,pe=!0}}else se[0]!==e.BACK&&(se[0]=e.BACK,pe=!0);pe&&e.drawBuffers(se)}function Rt(P){return y!==P?(e.useProgram(P),y=P,!0):!1}let Nt={[Qr]:e.FUNC_ADD,[Nu]:e.FUNC_SUBTRACT,[Iu]:e.FUNC_REVERSE_SUBTRACT};Nt[Du]=e.MIN,Nt[Uu]=e.MAX;let Dt={[Ou]:e.ZERO,[Fu]:e.ONE,[Bu]:e.SRC_COLOR,[Nc]:e.SRC_ALPHA,[Wu]:e.SRC_ALPHA_SATURATE,[Vu]:e.DST_COLOR,[Hu]:e.DST_ALPHA,[zu]:e.ONE_MINUS_SRC_COLOR,[Ic]:e.ONE_MINUS_SRC_ALPHA,[ku]:e.ONE_MINUS_DST_COLOR,[Gu]:e.ONE_MINUS_DST_ALPHA,[Xu]:e.CONSTANT_COLOR,[ju]:e.ONE_MINUS_CONSTANT_COLOR,[qu]:e.CONSTANT_ALPHA,[Yu]:e.ONE_MINUS_CONSTANT_ALPHA};function Tt(P,Y,se,pe,be,ge,Oe,he,We,He){if(P===ta){m===!0&&(Je(e.BLEND),m=!1);return}if(m===!1&&(Ee(e.BLEND),m=!0),P!==Pu){if(P!==d||He!==N){if((E!==Qr||A!==Qr)&&(e.blendEquation(e.FUNC_ADD),E=Qr,A=Qr),He)switch(P){case Ba:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case wl:e.blendFunc(e.ONE,e.ONE);break;case Al:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Rl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:qe("WebGLState: Invalid blending: ",P);break}else switch(P){case Ba:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case wl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Al:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",P);break}w=null,S=null,R=null,f=null,M.set(0,0,0),L=0,d=P,N=He}return}be=be||Y,ge=ge||se,Oe=Oe||pe,(Y!==E||be!==A)&&(e.blendEquationSeparate(Nt[Y],Nt[be]),E=Y,A=be),(se!==w||pe!==S||ge!==R||Oe!==f)&&(e.blendFuncSeparate(Dt[se],Dt[pe],Dt[ge],Dt[Oe]),w=se,S=pe,R=ge,f=Oe),(he.equals(M)===!1||We!==L)&&(e.blendColor(he.r,he.g,he.b,We),M.copy(he),L=We),d=P,N=!1}function zt(P,Y){P.side===Ci?Je(e.CULL_FACE):Ee(e.CULL_FACE);let se=P.side===oi;Y&&(se=!se),Qt(se),P.blending===Ba&&P.transparent===!1?Tt(ta):Tt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),n.setMask(P.colorWrite);let pe=P.stencilWrite;o.setTest(pe),pe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),qt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ee(e.SAMPLE_ALPHA_TO_COVERAGE):Je(e.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(P){O!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),O=P)}function wt(P){P!==Ru?(Ee(e.CULL_FACE),P!==C&&(P===Tl?e.cullFace(e.BACK):P===Cu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Je(e.CULL_FACE),C=P}function Mt(P){P!==Q&&(W&&e.lineWidth(P),Q=P)}function qt(P,Y,se){P?(Ee(e.POLYGON_OFFSET_FILL),(I!==Y||X!==se)&&(I=Y,X=se,s.getReversed()&&(Y=-Y,se=-se),e.polygonOffset(Y,se))):Je(e.POLYGON_OFFSET_FILL)}function Gt(P){P?Ee(e.SCISSOR_TEST):Je(e.SCISSOR_TEST)}function ai(P){P===void 0&&(P=e.TEXTURE0+ae-1),J!==P&&(e.activeTexture(P),J=P)}function B(P,Y,se){se===void 0&&(J===null?se=e.TEXTURE0+ae-1:se=J);let pe=ue[se];pe===void 0&&(pe={type:void 0,texture:void 0},ue[se]=pe),(pe.type!==P||pe.texture!==Y)&&(J!==se&&(e.activeTexture(se),J=se),e.bindTexture(P,Y||Ge[P]),pe.type=P,pe.texture=Y)}function hi(){let P=ue[J];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ht(){try{e.compressedTexImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function Ct(){try{e.compressedTexImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function Re(){try{e.texSubImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function dt(){try{e.texSubImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function Ve(){try{e.compressedTexSubImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function Ut(){try{e.texStorage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function T(){try{e.texStorage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function _(){try{e.texImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function V(){try{e.texImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function ce(P){return p[P]!==void 0?p[P]:e.getParameter(P)}function ie(P,Y){p[P]!==Y&&(e.pixelStorei(P,Y),p[P]=Y)}function Me(P){fe.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),fe.copy(P))}function ve(P){Ne.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),Ne.copy(P))}function F(P,Y){let se=c.get(Y);se===void 0&&(se=new WeakMap,c.set(Y,se));let pe=se.get(P);pe===void 0&&(pe=e.getUniformBlockIndex(Y,P.name),e.uniformBlockBinding(Y,pe,pe),se.set(P,pe))}function ne(P,Y,se){let pe=c.get(Y).get(P);l[pe]!==se&&(e.bindBufferBase(e.UNIFORM_BUFFER,pe,se),l[pe]=se)}function re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},J=null,ue={},u={},l={},g=new WeakMap,x=[],y=null,m=!1,d=null,E=null,w=null,S=null,A=null,R=null,f=null,M=new Ke(0,0,0),L=0,N=!1,O=null,C=null,Q=null,I=null,X=null,fe.set(0,0,e.canvas.width,e.canvas.height),Ne.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:Ee,disable:Je,bindFramebuffer:rt,drawBuffers:De,useProgram:Rt,setBlending:Tt,setMaterial:zt,setFlipSided:Qt,setCullFace:wt,setLineWidth:Mt,setPolygonOffset:qt,setScissorTest:Gt,activeTexture:ai,bindTexture:B,unbindTexture:hi,compressedTexImage2D:ht,compressedTexImage3D:Ct,texImage2D:_,texImage3D:V,pixelStorei:ie,getParameter:ce,updateUBOMapping:F,uniformBlockBinding:ne,texStorage2D:Ut,texStorage3D:T,texSubImage2D:Re,texSubImage3D:dt,compressedTexSubImage2D:Ve,compressedTexSubImage3D:ke,scissor:Me,viewport:ve,reset:re}}function t_(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,p=new Set,u,g=new WeakMap,x=new Set,y=new FinalizationRegistry(T=>x.delete(T)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,_){return m?new OffscreenCanvas(T,_):Jn("canvas")}function E(T,_,V){let ce=1,ie=Ut(T);if((ie.width>V||ie.height>V)&&(ce=V/Math.max(ie.width,ie.height)),ce<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Me=Math.floor(ce*ie.width),ve=Math.floor(ce*ie.height);u===void 0&&(u=d(Me,ve));let F=_?d(Me,ve):u;return F.width=Me,F.height=ve,F.getContext("2d").drawImage(T,0,0,Me,ve),je("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Me+"x"+ve+")."),F}else return"data"in T&&je("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function w(T){return T.generateMipmaps}function S(T){e.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function R(T,_,V,ce,ie,Me=!1){if(T!==null){if(e[T]!==void 0)return e[T];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ve;ce&&(ve=t.get("EXT_texture_norm16"),ve||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let F=_;if(_===e.RED&&(V===e.FLOAT&&(F=e.R32F),V===e.HALF_FLOAT&&(F=e.R16F),V===e.UNSIGNED_BYTE&&(F=e.R8),V===e.UNSIGNED_SHORT&&ve&&(F=ve.R16_EXT),V===e.SHORT&&ve&&(F=ve.R16_SNORM_EXT)),_===e.RED_INTEGER&&(V===e.UNSIGNED_BYTE&&(F=e.R8UI),V===e.UNSIGNED_SHORT&&(F=e.R16UI),V===e.UNSIGNED_INT&&(F=e.R32UI),V===e.BYTE&&(F=e.R8I),V===e.SHORT&&(F=e.R16I),V===e.INT&&(F=e.R32I)),_===e.RG&&(V===e.FLOAT&&(F=e.RG32F),V===e.HALF_FLOAT&&(F=e.RG16F),V===e.UNSIGNED_BYTE&&(F=e.RG8),V===e.UNSIGNED_SHORT&&ve&&(F=ve.RG16_EXT),V===e.SHORT&&ve&&(F=ve.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(V===e.UNSIGNED_BYTE&&(F=e.RG8UI),V===e.UNSIGNED_SHORT&&(F=e.RG16UI),V===e.UNSIGNED_INT&&(F=e.RG32UI),V===e.BYTE&&(F=e.RG8I),V===e.SHORT&&(F=e.RG16I),V===e.INT&&(F=e.RG32I)),_===e.RGB_INTEGER&&(V===e.UNSIGNED_BYTE&&(F=e.RGB8UI),V===e.UNSIGNED_SHORT&&(F=e.RGB16UI),V===e.UNSIGNED_INT&&(F=e.RGB32UI),V===e.BYTE&&(F=e.RGB8I),V===e.SHORT&&(F=e.RGB16I),V===e.INT&&(F=e.RGB32I)),_===e.RGBA_INTEGER&&(V===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),V===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),V===e.UNSIGNED_INT&&(F=e.RGBA32UI),V===e.BYTE&&(F=e.RGBA8I),V===e.SHORT&&(F=e.RGBA16I),V===e.INT&&(F=e.RGBA32I)),_===e.RGB&&(V===e.UNSIGNED_SHORT&&ve&&(F=ve.RGB16_EXT),V===e.SHORT&&ve&&(F=ve.RGB16_SNORM_EXT),V===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),V===e.UNSIGNED_INT_10F_11F_11F_REV&&(F=e.R11F_G11F_B10F)),_===e.RGBA){let ne=Me?Zn:nt.getTransfer(ie);V===e.FLOAT&&(F=e.RGBA32F),V===e.HALF_FLOAT&&(F=e.RGBA16F),V===e.UNSIGNED_BYTE&&(F=ne===ft?e.SRGB8_ALPHA8:e.RGBA8),V===e.UNSIGNED_SHORT&&ve&&(F=ve.RGBA16_EXT),V===e.SHORT&&ve&&(F=ve.RGBA16_SNORM_EXT),V===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),V===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function f(T,_){let V;return T?_===null||_===Vi||_===ca?V=e.DEPTH24_STENCIL8:_===Li?V=e.DEPTH32F_STENCIL8:_===Ga&&(V=e.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vi||_===ca?V=e.DEPTH_COMPONENT24:_===Li?V=e.DEPTH_COMPONENT32F:_===Ga&&(V=e.DEPTH_COMPONENT16),V}function M(T,_){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==Wt&&T.minFilter!==si?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function L(T){let _=new WeakRef(T);r.get(T).__ref=_,x.add(_),y.register(T,_,_)}function N(T){let _=r.get(T).__ref;_!==void 0&&(x.delete(_),y.unregister(_))}function O(T){Q(T.target)}function C(T){I(T.target)}function Q(T){T.removeEventListener("dispose",O),N(T),ae(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&p.delete(T)}function I(T){T.removeEventListener("dispose",C),N(T),ye(T)}function X(){for(let T of x){let _=T.deref();_!==void 0&&(_.isRenderTarget===!0?I(_):Q(_))}x.clear(),p.clear()}function ae(T){let _=r.get(T);if(_.__webglInit===void 0)return;let V=T.source,ce=g.get(V);if(ce){let ie=ce[_.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&W(T),Object.keys(ce).length===0&&g.delete(V)}r.remove(T)}function W(T){let _=r.get(T);e.deleteTexture(_.__webglTexture);let V=T.source,ce=g.get(V);delete ce[_.__cacheKey],s.memory.textures--}function ye(T){let _=r.get(T);_.__depthDisposeCallback&&_.__depthDisposeCallback();let V=T.depthTexture;if(V&&V.renderTarget===T&&Q(V),T.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(_.__webglFramebuffer[ie]))for(let Me=0;Me<_.__webglFramebuffer[ie].length;Me++)e.deleteFramebuffer(_.__webglFramebuffer[ie][Me]);else e.deleteFramebuffer(_.__webglFramebuffer[ie]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[ie])}else{if(Array.isArray(_.__webglFramebuffer))for(let ie=0;ie<_.__webglFramebuffer.length;ie++)e.deleteFramebuffer(_.__webglFramebuffer[ie]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ie=0;ie<_.__webglColorRenderbuffer.length;ie++)_.__webglColorRenderbuffer[ie]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[ie]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let ce=T.textures;for(let ie=0,Me=ce.length;ie<Me;ie++){let ve=r.get(ce[ie]);ve.__webglTexture&&(e.deleteTexture(ve.__webglTexture),s.memory.textures--),r.remove(ce[ie])}r.remove(T)}let Z=0;function J(){Z=0}function ue(){return Z}function Ie(T){Z=T}function ee(){let T=Z;return T>=a.maxTextures&&je("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+a.maxTextures),Z+=1,T}function fe(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.mipmapsAutoUpdate),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function Ne(T,_){let V=r.get(T);if(T.isVideoTexture&&Ve(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){let ce=T.image;if(ce===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{zt(V,T,_);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,V.__webglTexture,e.TEXTURE0+_)}function ze(T,_){let V=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){zt(V,T,_);return}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,V.__webglTexture,e.TEXTURE0+_)}function Ge(T,_){let V=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){zt(V,T,_);return}i.bindTexture(e.TEXTURE_3D,V.__webglTexture,e.TEXTURE0+_)}function Ee(T,_){let V=r.get(T);if(T.version>0&&V.__version!==T.version){Qt(V,T,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture,e.TEXTURE0+_)}let Je={[to]:e.REPEAT,[Qi]:e.CLAMP_TO_EDGE,[io]:e.MIRRORED_REPEAT},rt={[Wt]:e.NEAREST,[Ju]:e.NEAREST_MIPMAP_NEAREST,[un]:e.NEAREST_MIPMAP_LINEAR,[si]:e.LINEAR,[Ss]:e.LINEAR_MIPMAP_NEAREST,[pr]:e.LINEAR_MIPMAP_LINEAR},De={[td]:e.NEVER,[Zc]:e.ALWAYS,[id]:e.LESS,[Yc]:e.LEQUAL,[rd]:e.EQUAL,[Kc]:e.GEQUAL,[ad]:e.GREATER,[nd]:e.NOTEQUAL};function Rt(T,_){if(_.type===Li&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===si||_.magFilter===Ss||_.magFilter===un||_.magFilter===pr||_.minFilter===si||_.minFilter===Ss||_.minFilter===un||_.minFilter===pr)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,Je[_.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,Je[_.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,Je[_.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,rt[_.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,rt[_.minFilter]),_.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,De[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Wt||_.minFilter!==un&&_.minFilter!==pr||_.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function Nt(T,_){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",O),L(_));let ce=_.source,ie=g.get(ce);ie===void 0&&(ie={},g.set(ce,ie));let Me=fe(_);if(Me!==T.__cacheKey){ie[Me]===void 0&&(ie[Me]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,V=!0),ie[Me].usedTimes++;let ve=ie[T.__cacheKey];ve!==void 0&&(ie[T.__cacheKey].usedTimes--,ve.usedTimes===0&&W(_)),T.__cacheKey=Me,T.__webglTexture=ie[Me].texture}return V}function Dt(T,_,V){return Math.floor(Math.floor(T/V)/_)}function Tt(T,_,V,ce){let ie=T.updateRanges;if(ie.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,V,ce,_.data);else{ie.sort((re,P)=>re.start-P.start);let Me=0;for(let re=1;re<ie.length;re++){let P=ie[Me],Y=ie[re],se=P.start+P.count,pe=Dt(Y.start,_.width,4),be=Dt(P.start,_.width,4);Y.start<=se+1&&pe===be&&Dt(Y.start+Y.count-1,_.width,4)===pe?P.count=Math.max(P.count,Y.start+Y.count-P.start):(++Me,ie[Me]=Y)}ie.length=Me+1;let ve=i.getParameter(e.UNPACK_ROW_LENGTH),F=i.getParameter(e.UNPACK_SKIP_PIXELS),ne=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let re=0,P=ie.length;re<P;re++){let Y=ie[re],se=Math.floor(Y.start/4),pe=Math.ceil(Y.count/4),be=se%_.width,ge=Math.floor(se/_.width),Oe=pe;i.pixelStorei(e.UNPACK_SKIP_PIXELS,be),i.pixelStorei(e.UNPACK_SKIP_ROWS,ge),i.texSubImage2D(e.TEXTURE_2D,0,be,ge,Oe,1,V,ce,_.data)}T.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ve),i.pixelStorei(e.UNPACK_SKIP_PIXELS,F),i.pixelStorei(e.UNPACK_SKIP_ROWS,ne)}}function zt(T,_,V){let ce=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ce=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ce=e.TEXTURE_3D);let ie=Nt(T,_),Me=_.source;i.bindTexture(ce,T.__webglTexture,e.TEXTURE0+V);let ve=r.get(Me);if(Me.version!==ve.__version||ie===!0){if(i.activeTexture(e.TEXTURE0+V),!(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)){let he=nt.getPrimaries(nt.workingColorSpace),We=_.colorSpace===dr?null:nt.getPrimaries(_.colorSpace),He=_.colorSpace===dr||he===We?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let F=E(_.image,!1,a.maxTextureSize);F=ke(_,F);let ne=n.convert(_.format,_.colorSpace),re=n.convert(_.type),P=R(_.internalFormat,ne,re,_.normalized,_.colorSpace,_.isVideoTexture);Rt(ce,_);let Y,se=_.mipmaps,pe=_.isVideoTexture!==!0,be=ve.__version===void 0||ie===!0,ge=Me.dataReady,Oe=M(_,F);if(_.isDepthTexture)P=f(_.format===fr,_.type),be&&(pe?i.texStorage2D(e.TEXTURE_2D,1,P,F.width,F.height):i.texImage2D(e.TEXTURE_2D,0,P,F.width,F.height,0,ne,re,null));else if(_.isDataTexture)if(se.length>0){pe&&be&&i.texStorage2D(e.TEXTURE_2D,Oe,P,se[0].width,se[0].height);for(let he=0,We=se.length;he<We;he++)Y=se[he],pe?ge&&i.texSubImage2D(e.TEXTURE_2D,he,0,0,Y.width,Y.height,ne,re,Y.data):i.texImage2D(e.TEXTURE_2D,he,P,Y.width,Y.height,0,ne,re,Y.data);_.generateMipmaps=!1}else pe?(be&&i.texStorage2D(e.TEXTURE_2D,Oe,P,F.width,F.height),ge&&Tt(_,F,ne,re)):i.texImage2D(e.TEXTURE_2D,0,P,F.width,F.height,0,ne,re,F.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){pe&&be&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Oe,P,se[0].width,se[0].height,F.depth);for(let he=0,We=se.length;he<We;he++)if(Y=se[he],_.format!==Hi)if(ne!==null)if(pe){if(ge)if(_.layerUpdates.size>0){let He=cc(Y.width,Y.height,_.format,_.type);for(let tt of _.layerUpdates){let we=Y.data.subarray(tt*He/Y.data.BYTES_PER_ELEMENT,(tt+1)*He/Y.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,he,0,0,tt,Y.width,Y.height,1,ne,we)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,he,0,0,0,Y.width,Y.height,F.depth,ne,Y.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,he,P,Y.width,Y.height,F.depth,0,Y.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?ge&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,he,0,0,0,Y.width,Y.height,F.depth,ne,re,Y.data):i.texImage3D(e.TEXTURE_2D_ARRAY,he,P,Y.width,Y.height,F.depth,0,ne,re,Y.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{pe&&be&&i.texStorage2D(e.TEXTURE_2D,Oe,P,se[0].width,se[0].height);for(let he=0,We=se.length;he<We;he++)Y=se[he],_.format!==Hi?ne!==null?pe?ge&&i.compressedTexSubImage2D(e.TEXTURE_2D,he,0,0,Y.width,Y.height,ne,Y.data):i.compressedTexImage2D(e.TEXTURE_2D,he,P,Y.width,Y.height,0,Y.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?ge&&i.texSubImage2D(e.TEXTURE_2D,he,0,0,Y.width,Y.height,ne,re,Y.data):i.texImage2D(e.TEXTURE_2D,he,P,Y.width,Y.height,0,ne,re,Y.data)}else if(_.isDataArrayTexture)if(pe){if(be&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Oe,P,F.width,F.height,F.depth),ge)if(_.layerUpdates.size>0){let he=cc(F.width,F.height,_.format,_.type);for(let We of _.layerUpdates){let He=F.data.subarray(We*he/F.data.BYTES_PER_ELEMENT,(We+1)*he/F.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,We,F.width,F.height,1,ne,re,He)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,ne,re,F.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,P,F.width,F.height,F.depth,0,ne,re,F.data);else if(_.isData3DTexture)pe?(be&&i.texStorage3D(e.TEXTURE_3D,Oe,P,F.width,F.height,F.depth),ge&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,ne,re,F.data)):i.texImage3D(e.TEXTURE_3D,0,P,F.width,F.height,F.depth,0,ne,re,F.data);else if(_.isFramebufferTexture){if(be)if(pe)i.texStorage2D(e.TEXTURE_2D,Oe,P,F.width,F.height);else{let he=F.width,We=F.height;for(let He=0;He<Oe;He++)i.texImage2D(e.TEXTURE_2D,He,P,he,We,0,ne,re,null),he>>=1,We>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let he=e.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),F.parentNode!==he){he.appendChild(F),p.add(_),he.onpaint=We=>{let He=We.changedElements;for(let tt of p)He.includes(tt.image)&&(tt.needsUpdate=!0)},he.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,F);else{let We=e.RGBA,He=e.RGBA,tt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,We,He,tt,F)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(se.length>0){if(pe&&be){let he=Ut(se[0]);i.texStorage2D(e.TEXTURE_2D,Oe,P,he.width,he.height)}for(let he=0,We=se.length;he<We;he++)Y=se[he],pe?ge&&i.texSubImage2D(e.TEXTURE_2D,he,0,0,ne,re,Y):i.texImage2D(e.TEXTURE_2D,he,P,ne,re,Y);_.generateMipmaps=!1}else if(pe){if(be){let he=Ut(F);i.texStorage2D(e.TEXTURE_2D,Oe,P,he.width,he.height)}ge&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ne,re,F)}else i.texImage2D(e.TEXTURE_2D,0,P,ne,re,F);w(_)&&_.mipmapsAutoUpdate===!0&&S(ce),ve.__version=Me.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Qt(T,_,V){if(_.image.length!==6)return;let ce=Nt(T,_),ie=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+V);let Me=r.get(ie);if(ie.version!==Me.__version||ce===!0){i.activeTexture(e.TEXTURE0+V);let ve=nt.getPrimaries(nt.workingColorSpace),F=_.colorSpace===dr?null:nt.getPrimaries(_.colorSpace),ne=_.colorSpace===dr||ve===F?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let re=_.isCompressedTexture||_.image[0].isCompressedTexture,P=_.image[0]&&_.image[0].isDataTexture,Y=[];for(let we=0;we<6;we++)!re&&!P?Y[we]=E(_.image[we],!0,a.maxCubemapSize):Y[we]=P?_.image[we].image:_.image[we],Y[we]=ke(_,Y[we]);let se=Y[0],pe=n.convert(_.format,_.colorSpace),be=n.convert(_.type),ge=R(_.internalFormat,pe,be,_.normalized,_.colorSpace),Oe=_.isVideoTexture!==!0,he=Me.__version===void 0||ce===!0,We=ie.dataReady,He=M(_,se);Rt(e.TEXTURE_CUBE_MAP,_);let tt;if(_.isDepthTexture){if(ge=f(_.format===fr,_.type),he)if(Oe)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,ge,se.width,se.height);else for(let we=0;we<6;we++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ge,se.width,se.height,0,pe,be,null)}else if(re){Oe&&he&&i.texStorage2D(e.TEXTURE_CUBE_MAP,He,ge,se.width,se.height);for(let we=0;we<6;we++){tt=Y[we].mipmaps;for(let ot=0;ot<tt.length;ot++){let gt=tt[ot];_.format!==Hi?pe!==null?Oe?We&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,ot,0,0,gt.width,gt.height,pe,gt.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,ot,ge,gt.width,gt.height,0,gt.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?We&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,ot,0,0,gt.width,gt.height,pe,be,gt.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,ot,ge,gt.width,gt.height,0,pe,be,gt.data)}}}else{if(tt=_.mipmaps,Oe&&he){tt.length>0&&He++;let we=Ut(Y[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,He,ge,we.width,we.height)}for(let we=0;we<6;we++)if(P){Oe?We&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Y[we].width,Y[we].height,pe,be,Y[we].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ge,Y[we].width,Y[we].height,0,pe,be,Y[we].data);for(let ot=0;ot<tt.length;ot++){let gt=tt[ot].image[we].image;Oe?We&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,ot+1,0,0,gt.width,gt.height,pe,be,gt.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,ot+1,ge,gt.width,gt.height,0,pe,be,gt.data)}}else{Oe?We&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,pe,be,Y[we]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ge,pe,be,Y[we]);for(let ot=0;ot<tt.length;ot++){let gt=tt[ot];Oe?We&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,ot+1,0,0,pe,be,gt.image[we]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,ot+1,ge,pe,be,gt.image[we])}}}w(_)&&_.mipmapsAutoUpdate===!0&&S(e.TEXTURE_CUBE_MAP),Me.__version=ie.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function wt(T,_,V,ce,ie,Me){let ve=n.convert(V.format,V.colorSpace),F=n.convert(V.type),ne=R(V.internalFormat,ve,F,V.normalized,V.colorSpace),re=r.get(_),P=r.get(V);if(P.__renderTarget=_,!re.__hasExternalTextures){let Y=Math.max(1,_.width>>Me),se=Math.max(1,_.height>>Me);ie===e.TEXTURE_3D||ie===e.TEXTURE_2D_ARRAY?i.texImage3D(ie,Me,ne,Y,se,_.depth,0,ve,F,null):i.texImage2D(ie,Me,ne,Y,se,0,ve,F,null)}i.bindFramebuffer(e.FRAMEBUFFER,T),dt(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ce,ie,P.__webglTexture,0,Re(_)):(ie===e.TEXTURE_2D||ie>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ce,ie,P.__webglTexture,Me),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Mt(T,_,V){if(e.bindRenderbuffer(e.RENDERBUFFER,T),_.depthBuffer){let ce=_.depthTexture,ie=ce&&ce.isDepthTexture?ce.type:null,Me=f(_.stencilBuffer,ie),ve=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;dt(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(_),Me,_.width,_.height):V?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(_),Me,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,Me,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ve,e.RENDERBUFFER,T)}else{let ce=_.textures;for(let ie=0;ie<ce.length;ie++){let Me=ce[ie],ve=n.convert(Me.format,Me.colorSpace),F=n.convert(Me.type),ne=R(Me.internalFormat,ve,F,Me.normalized,Me.colorSpace);dt(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(_),ne,_.width,_.height):V?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(_),ne,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ne,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function qt(T,_,V){let ce=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=r.get(_.depthTexture);ie.__renderTarget=_;let Me=ce?_.depthTexture.image[0]:_.depthTexture.image;(!ie.__webglTexture||Me.width!==_.width||Me.height!==_.height)&&(Me.width=_.width,Me.height=_.height,_.depthTexture.needsUpdate=!0),ce?Ee(_.depthTexture,0):Ne(_.depthTexture,0);let ve=ie.__webglTexture,F=Re(_),ne=ce?e.TEXTURE_CUBE_MAP_POSITIVE_X+V:e.TEXTURE_2D,re=_.depthTexture.format===fr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===gr)dt(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,re,ne,ve,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,re,ne,ve,0);else if(_.depthTexture.format===fr)dt(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,re,ne,ve,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,re,ne,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(T){let _=r.get(T),V=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let ce=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ce){let ie=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ce.removeEventListener("dispose",ie)};ce.addEventListener("dispose",ie),_.__depthDisposeCallback=ie}_.__boundDepthTexture=ce}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(V)for(let ce=0;ce<6;ce++)qt(_.__webglFramebuffer[ce],T,ce);else T.texture.mipmaps.length>0?qt(_.__webglFramebuffer[0],T,0):qt(_.__webglFramebuffer,T,0);else if(V){_.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[ce]),_.__webglDepthbuffer[ce]===void 0)_.__webglDepthbuffer[ce]=e.createRenderbuffer(),Mt(_.__webglDepthbuffer[ce],T,!1);else{let ie=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Me=_.__webglDepthbuffer[ce];e.bindRenderbuffer(e.RENDERBUFFER,Me),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,Me)}}else if(T.texture.mipmaps.length>0?i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Mt(_.__webglDepthbuffer,T,!1);else{let ce=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ie),e.framebufferRenderbuffer(e.FRAMEBUFFER,ce,e.RENDERBUFFER,ie)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ai(T,_,V){let ce=r.get(T);_!==void 0&&wt(ce.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),V!==void 0&&Gt(T)}function B(T){let _=T.texture,V=r.get(T),ce=r.get(_);T.addEventListener("dispose",C),L(T);let ie=T.textures,Me=T.isWebGLCubeRenderTarget===!0,ve=ie.length>1;if(ve||(ce.__webglTexture===void 0&&(ce.__webglTexture=e.createTexture()),ce.__version=_.version,s.memory.textures++),Me){V.__webglFramebuffer=[];for(let F=0;F<6;F++)if(_.mipmaps.length>0){V.__webglFramebuffer[F]=[];for(let ne=0;ne<_.mipmaps.length;ne++)V.__webglFramebuffer[F][ne]=e.createFramebuffer()}else V.__webglFramebuffer[F]=e.createFramebuffer()}else{if(_.mipmaps.length>0){V.__webglFramebuffer=[];for(let F=0;F<_.mipmaps.length;F++)V.__webglFramebuffer[F]=e.createFramebuffer()}else V.__webglFramebuffer=e.createFramebuffer();if(ve)for(let F=0,ne=ie.length;F<ne;F++){let re=r.get(ie[F]);re.__webglTexture===void 0&&(re.__webglTexture=e.createTexture(),s.memory.textures++)}if(T.samples>0&&dt(T)===!1){V.__webglMultisampledFramebuffer=e.createFramebuffer(),V.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let F=0;F<ie.length;F++){let ne=ie[F];V.__webglColorRenderbuffer[F]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,V.__webglColorRenderbuffer[F]);let re=n.convert(ne.format,ne.colorSpace),P=n.convert(ne.type),Y=R(ne.internalFormat,re,P,ne.normalized,ne.colorSpace,T.isXRRenderTarget===!0),se=Re(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,se,Y,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+F,e.RENDERBUFFER,V.__webglColorRenderbuffer[F])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=e.createRenderbuffer(),Mt(V.__webglDepthRenderbuffer,T,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Me){i.bindTexture(e.TEXTURE_CUBE_MAP,ce.__webglTexture),Rt(e.TEXTURE_CUBE_MAP,_);for(let F=0;F<6;F++)if(_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)wt(V.__webglFramebuffer[F][ne],T,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne);else wt(V.__webglFramebuffer[F],T,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);w(_)?S(e.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),i.unbindTexture()}else if(ve){for(let F=0,ne=ie.length;F<ne;F++){let re=ie[F],P=r.get(re),Y=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(Y,P.__webglTexture),Rt(Y,re),wt(V.__webglFramebuffer,T,re,e.COLOR_ATTACHMENT0+F,Y,0),w(re)&&S(Y)}i.unbindTexture()}else{let F=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(F=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(F,ce.__webglTexture),Rt(F,_),_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)wt(V.__webglFramebuffer[ne],T,_,e.COLOR_ATTACHMENT0,F,ne);else wt(V.__webglFramebuffer,T,_,e.COLOR_ATTACHMENT0,F,0);w(_)?S(F):_.mipmaps.length>0&&e.texParameteri(F,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),i.unbindTexture()}T.depthBuffer&&Gt(T)}function hi(T){let _=T.textures;for(let V=0,ce=_.length;V<ce;V++){let ie=_[V];if(w(ie)&&ie.mipmapsAutoUpdate===!0){let Me=A(T),ve=r.get(ie).__webglTexture;i.bindTexture(Me,ve),S(Me),i.unbindTexture()}}}let ht=[];function Ct(T){if(T.samples>0){if(dt(T)===!1){let _=T.textures,V=T.width,ce=T.height,ie=e.COLOR_BUFFER_BIT,Me=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=r.get(T),F=_.length>1;if(F)for(let ne=0;ne<_.length;ne++)i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ne,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ne,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ne=0;ne<_.length;ne++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=e.STENCIL_BUFFER_BIT)),F){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ve.__webglColorRenderbuffer[ne]);let re=r.get(_[ne]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,re,0)}e.blitFramebuffer(0,0,V,ce,0,0,V,ce,ie,e.NEAREST),l===!0&&(ht.length=0,ht.push(e.COLOR_ATTACHMENT0+ne),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&ht.push(Me),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ht))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),F)for(let ne=0;ne<_.length;ne++){i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ne,e.RENDERBUFFER,ve.__webglColorRenderbuffer[ne]);let re=r.get(_[ne]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ne,e.TEXTURE_2D,re,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let _=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function Re(T){return Math.min(a.maxSamples,T.samples)}function dt(T){let _=r.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ve(T){let _=s.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function ke(T,_){let V=T.colorSpace,ce=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==Kn&&V!==dr&&(nt.getTransfer(V)===ft?(ce!==Hi||ie!==fi)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",V)),_}function Ut(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=J,this.getTextureUnits=ue,this.setTextureUnits=Ie,this.setTexture2D=Ne,this.setTexture2DArray=ze,this.setTexture3D=Ge,this.setTextureCube=Ee,this.rebindTextures=ai,this.setupRenderTarget=B,this.updateRenderTargetMipmap=hi,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=dt,this.dispose=X}function i_(e,t){function i(r,a=dr){let n,s=nt.getTransfer(a);if(r===fi)return e.UNSIGNED_BYTE;if(r===Vo)return e.UNSIGNED_SHORT_4_4_4_4;if(r===ko)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Wc)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Xc)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Vc)return e.BYTE;if(r===kc)return e.SHORT;if(r===Ga)return e.UNSIGNED_SHORT;if(r===Go)return e.INT;if(r===Vi)return e.UNSIGNED_INT;if(r===Li)return e.FLOAT;if(r===ki)return e.HALF_FLOAT;if(r===jc)return e.ALPHA;if(r===qc)return e.RGB;if(r===Hi)return e.RGBA;if(r===gr)return e.DEPTH_COMPONENT;if(r===fr)return e.DEPTH_STENCIL;if(r===Wo)return e.RED;if(r===Xo)return e.RED_INTEGER;if(r===Pr)return e.RG;if(r===jo)return e.RG_INTEGER;if(r===qo)return e.RGBA_INTEGER;if(r===Bn||r===zn||r===Hn||r===Gn)if(s===ft)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Bn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Bn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ro||r===ao||r===no||r===so)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===ro)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ao)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===no)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===so)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===oo||r===lo||r===co||r===ho||r===uo||r===jn||r===po)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===oo||r===lo)return s===ft?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===co)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===ho)return n.COMPRESSED_R11_EAC;if(r===uo)return n.COMPRESSED_SIGNED_R11_EAC;if(r===jn)return n.COMPRESSED_RG11_EAC;if(r===po)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===fo||r===mo||r===go||r===_o||r===vo||r===xo||r===So||r===Mo||r===yo||r===Eo||r===bo||r===To||r===wo||r===Ao)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===fo)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mo)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===go)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_o)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vo)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xo)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===So)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mo)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yo)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Eo)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bo)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===To)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wo)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ao)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ro||r===Co||r===Lo)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Ro)return s===ft?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Co)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Po||r===No||r===qn||r===Io)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===Po)return n.COMPRESSED_RED_RGTC1_EXT;if(r===No)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Io)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ca?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}function l_(e,t){function i(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,Ah(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,E,w,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?n(m,d):d.isMeshLambertMaterial?(n(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(n(m,d),p(m,d)):d.isMeshPhongMaterial?(n(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(n(m,d),u(m,d),d.isMeshPhysicalMaterial&&g(m,d,S)):d.isMeshMatcapMaterial?(n(m,d),x(m,d)):d.isMeshDepthMaterial?n(m,d):d.isMeshDistanceMaterial?(n(m,d),y(m,d)):d.isMeshNormalMaterial?n(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,i(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===oi&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,i(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===oi&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,i(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,i(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,i(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=t.get(d),w=E.envMap,S=E.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(jh),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,i(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,i(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=w*.5,d.map&&(m.map.value=d.map,i(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,i(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,i(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,E){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,i(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,i(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,i(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,i(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,i(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,i(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===oi&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,i(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,i(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,i(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,i(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,i(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,i(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,i(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function c_(e,t,i,r){let a={},n={};function s(E,w){let S=w.program;r.uniformBlockBinding(E,S,a[E.id])}function o(E,w){let S=a[E.id];S===void 0&&(x(E),S=l(E),a[E.id]=S,E.addEventListener("dispose",m));let A=w.program;r.updateUBOMapping(E,A);let R=t.render.frame;n[E.id]!==R&&(c(E),n[E.id]=R)}function l(E){let w=e.createBuffer(),S=E.__size,A=E.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,S,A),e.bindBuffer(e.UNIFORM_BUFFER,null),w}function c(E){let w=a[E.id],S=E.uniforms,A=E.__cache;e.bindBuffer(e.UNIFORM_BUFFER,w);for(let R=0,f=S.length;R<f;R++){let M=S[R];if(Array.isArray(M))for(let L=0,N=M.length;L<N;L++)h(M[L],R,L,A);else h(M,R,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(E,w,S,A){if(u(E,w,S,A)===!0){let R=E.__offset,f=E.value;if(Array.isArray(f)){let M=0;for(let L=0;L<f.length;L++){let N=f[L],O=y(N,!0);p(N,E.__data,M),M+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else p(f,E.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,R,E.__data)}}function p(E,w,S){typeof E=="number"||typeof E=="boolean"?w[S]=E:E.isMatrix3?(w[S]=E.elements[0],w[S+1]=E.elements[1],w[S+2]=E.elements[2],w[S+3]=0,w[S+4]=E.elements[3],w[S+5]=E.elements[4],w[S+6]=E.elements[5],w[S+7]=0,w[S+8]=E.elements[6],w[S+9]=E.elements[7],w[S+10]=E.elements[8],w[S+11]=0):ArrayBuffer.isView(E)?w.set(E.subarray(0,w.length-S),S):E.toArray(w,S)}function u(E,w,S,A){let R=E.value,f=w+"_"+S;if(Array.isArray(R)){A[f]===void 0&&(A[f]=[]);let M=A[f],L=!1;for(let N=0;N<R.length;N++)g(R[N],M,N)===!0&&(L=!0);return L}return g(R,A,f)}function g(E,w,S){if(w[S]===void 0)return typeof E=="number"||typeof E=="boolean"?w[S]=E:ArrayBuffer.isView(E)?w[S]=E.slice():w[S]=E.clone(),!0;{let A=w[S];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return w[S]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(A.equals(E)===!1)return A.copy(E),!0}}return!1}function x(E){let w=E.uniforms,S=0,A=16;for(let f=0,M=w.length;f<M;f++){let L=Array.isArray(w[f])?w[f]:[w[f]];for(let N=0,O=L.length;N<O;N++){let C=L[N],Q=Array.isArray(C.value)?C.value:[C.value],I=Array.isArray(w[f])||Array.isArray(C.value),X=S;for(let W=0,ye=Q.length;W<ye;W++){let Z=Q[W],J=y(Z,I),ue=S%A,Ie=ue%J.boundary,ee=ue+Ie;S+=Ie,ee!==0&&A-ee<J.storage&&(S+=A-ee),W===0&&(X=S),S+=J.storage}let ae=C.type==="int"?Int32Array:C.type==="uint"?Uint32Array:Float32Array;C.__data=new ae((S-X)/Float32Array.BYTES_PER_ELEMENT),C.__offset=X}}let R=S%A;return R>0&&(S+=A-R),E.__size=S,E.__cache={},this}function y(E,w){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=16,S.storage=48):E.isMatrix4?(S.boundary=16,S.storage=64):E.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(S.boundary=16,S.storage=E.byteLength):je("WebGLRenderer: Unsupported uniform value type.",E),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(E){let w=E.target;w.removeEventListener("dispose",m),e.deleteBuffer(a[w.id]),delete a[w.id],delete n[w.id]}function d(){for(let E in a)e.deleteBuffer(a[E]);a={},n={}}return{bind:s,update:o,dispose:d}}function u_(){return Bi===null&&(Bi=new ch(h_,16,16,Pr,ki),Bi.name="DFG_LUT",Bi.minFilter=si,Bi.magFilter=si,Bi.wrapS=Qi,Bi.wrapT=Qi,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var Ru,Tl,Cu,Fn,Lu,Oa,Lr,oi,Ci,ta,Ba,wl,Al,Rl,Pu,Qr,Nu,Iu,Du,Uu,Ou,Fu,Bu,zu,Nc,Ic,Hu,Gu,Vu,ku,Wu,Xu,ju,qu,Yu,Ys,Ks,Zs,za,Js,Qs,$s,eo,Ho,Ku,Zu,$i,Dc,Uc,Oc,Fc,Bc,zc,Hc,Gc,la,Ha,vs,xs,to,Qi,io,Wt,Ju,un,si,Ss,pr,fi,Vc,kc,Ga,Go,Vi,Li,ki,Vo,ko,ca,Wc,Xc,jc,qc,Hi,gr,fr,Wo,Xo,Pr,jo,qo,Bn,zn,Hn,Gn,ro,ao,no,so,oo,lo,co,ho,uo,jn,po,fo,mo,go,_o,vo,xo,So,Mo,yo,Eo,bo,To,wo,Ao,Ro,Co,Lo,Po,No,qn,Io,Yn,Do,Ms,Cl,Ll,Pl,Nl,Qu,Uo,$u,dr,_i,Kn,Zn,ft,ys,ed,td,id,rd,Yc,ad,nd,Kc,Zc,sd,Il,Pi,Va,Dl,ha,ud,Ir,Kt,Es,Oo,ra,it,Dr,aa,G,Ts,Ol,na,Ze,ws,Fl,Bl,nt,Br,_d,vd,Ko,xd,Rs,Si,sa,Lt,Sd,Gi,Qc,Md,Cr,Et,zr,wi,yd,Ed,sr,dn,di,zl,Hl,ua,eh,bd,Gl,Hr,qi,pn,Ra,Td,wd,Vl,kl,Wl,Xl,Ad,Gr,Cs,Jt,xi,Rd,Ls,th,or,fn,Ke,Zt,ih,ah,Ai,Yi,Ns,Ki,Vr,kr,jl,Is,Ds,Us,Os,Fs,Bs,Ca,Ur,Zi,Ri,mn,Wr,Xr,jr,lr,cr,Tr,La,gn,_n,wr,It,vn,Cd,mr,nh,sh,ut,Ld,Pa,Hs,fa,Pd,gi,Gs,qr,pi,Na,Ht,ei,Vs,Nd,Id,ur,Dd,ma,Ji,ks,xn,Sn,lh,ga,ql,Ar,Mn,Yl,yn,En,bn,Ws,Tn,Kl,wn,mt,ch,Zl,Yr,Jl,Rn,Ql,Od,Ia,Da,ti,Rr,Fd,Cn,ka,$l,Bd,Zo,ec,Fo,Ln,Pn,uh,dh,ph,da,fh,mh,_r,Qn,Mi,_a,zd,Jo,Xa,Eh,Th,Gd,Vd,kd,Nr,Wd,Qo,Xd,jd,ja,qd,Yd,Kd,Zd,Wi,qa,$d,ep,tp,Ch,Ya,ip,rp,ap,np,Lh,Ph,Xs,nc,sc,sp,In,Dn,Fi,Nh,hr,oc,lc,vi,Ih,op,Dh,Zr,Jr,Bo,lp,$o,cp,el,hp,up,dp,pp,fp,mp,gp,_p,At,W_,oa,X_,Sp,Mp,yp,Ep,bp,Tp,wp,Ap,Rp,Cp,Lp,Pp,Np,Ip,Dp,Up,Op,Fp,Bp,zp,Hp,Gp,Vp,kp,Wp,Xp,jp,qp,Yp,Kp,Zp,Jp,Qp,$p,ef,tf,rf,af,nf,sf,of,lf,cf,hf,uf,df,pf,ff,mf,gf,_f,vf,xf,Sf,Mf,yf,Ef,bf,Tf,wf,Af,Rf,Cf,Lf,Pf,Nf,If,Df,Uf,Of,Ff,Bf,zf,Hf,Gf,Vf,kf,Wf,Xf,jf,qf,Yf,Kf,Zf,Jf,Qf,$f,em,tm,im,rm,am,nm,sm,om,lm,cm,hm,um,dm,pm,fm,mm,gm,_m,vm,xm,Sm,Mm,ym,Em,bm,Tm,wm,Am,Rm,Cm,Lm,Pm,Nm,Im,Dm,Um,Om,Fm,Bm,zm,Hm,Gm,Vm,km,Wm,Xm,jm,qm,Ym,Km,Zm,Jm,Qm,$m,$e,Ce,zi,Un,eg,Oh,tl,hc,sg,og,Fh,Bh,lg,cg,hg,uc,Mg,Hh,Gh,Vh,kh,Wh,Xh,mc,gc,_c,vc,xc,c0,h0,u0,js,Xn,p0,f0,yc,v0,On,b0,w0,R0,L0,N0,U0,O0,F0,X0,K0,Z0,J0,Q0,Pc,Ua,qs,r_,a_,n_,s_,o_,jh,h_,Bi,qh,Yh=on(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */Ru=0,Tl=1,Cu=2,Fn=1,Lu=2,Oa=3,Lr=0,oi=1,Ci=2,ta=0,Ba=1,wl=2,Al=3,Rl=4,Pu=5,Qr=100,Nu=101,Iu=102,Du=103,Uu=104,Ou=200,Fu=201,Bu=202,zu=203,Nc=204,Ic=205,Hu=206,Gu=207,Vu=208,ku=209,Wu=210,Xu=211,ju=212,qu=213,Yu=214,Ys=0,Ks=1,Zs=2,za=3,Js=4,Qs=5,$s=6,eo=7,Ho=0,Ku=1,Zu=2,$i=0,Dc=1,Uc=2,Oc=3,Fc=4,Bc=5,zc=6,Hc=7,Gc=300,la=301,Ha=302,vs=303,xs=304,to=1e3,Qi=1001,io=1002,Wt=1003,Ju=1004,un=1005,si=1006,Ss=1007,pr=1008,fi=1009,Vc=1010,kc=1011,Ga=1012,Go=1013,Vi=1014,Li=1015,ki=1016,Vo=1017,ko=1018,ca=1020,Wc=35902,Xc=35899,jc=1021,qc=1022,Hi=1023,gr=1026,fr=1027,Wo=1028,Xo=1029,Pr=1030,jo=1031,qo=1033,Bn=33776,zn=33777,Hn=33778,Gn=33779,ro=35840,ao=35841,no=35842,so=35843,oo=36196,lo=37492,co=37496,ho=37488,uo=37489,jn=37490,po=37491,fo=37808,mo=37809,go=37810,_o=37811,vo=37812,xo=37813,So=37814,Mo=37815,yo=37816,Eo=37817,bo=37818,To=37819,wo=37820,Ao=37821,Ro=36492,Co=36494,Lo=36495,Po=36283,No=36284,qn=36285,Io=36286,Yn=2300,Do=2301,Ms=2302,Cl=2303,Ll=2400,Pl=2401,Nl=2402,Qu=3200,Uo=0,$u=1,dr="",_i="srgb",Kn="srgb-linear",Zn="linear",ft="srgb",ys=7680,ed=519,td=512,id=513,rd=514,Yc=515,ad=516,nd=517,Kc=518,Zc=519,sd=35044,Il="300 es",Pi=2e3,Va=2001;Dl={},ha=null;ud={[Ys]:Ys,[Zs]:$s,[Js]:Js,[za]:Qs,[Ks]:Ks,[$s]:Zs,[eo]:eo,[Qs]:za},Ir=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Es=Math.PI/180,Oo=180/Math.PI;it=(ra=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=st(this.x,t.x,i.x),this.y=st(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=st(this.x,t,i),this.y=st(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(st(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(st(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ra.prototype.isVector2=!0,ra),Dr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],c=i[r+2],h=i[r+3],p=a[n+0],u=a[n+1],g=a[n+2],x=a[n+3];if(h!==x||o!==p||l!==u||c!==g){let y=o*p+l*u+c*g+h*x;y<0&&(p=-p,u=-u,g=-g,x=-x,y=-y);let m=1-s;if(y<.9995){let d=Math.acos(y),E=Math.sin(d);m=Math.sin(m*d)/E,s=Math.sin(s*d)/E,o=o*m+p*s,l=l*m+u*s,c=c*m+g*s,h=h*m+x*s}else{o=o*m+p*s,l=l*m+u*s,c=c*m+g*s,h=h*m+x*s;let d=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=d,l*=d,c*=d,h*=d}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],c=i[r+3],h=a[n],p=a[n+1],u=a[n+2],g=a[n+3];return e[t]=s*g+c*h+o*u-l*p,e[t+1]=o*g+c*p+l*h-s*u,e[t+2]=l*g+c*u+s*p-o*h,e[t+3]=c*g-s*h-o*p-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),c=s(r/2),h=s(a/2),p=o(i/2),u=o(r/2),g=o(a/2);switch(n){case"XYZ":this._x=p*c*h+l*u*g,this._y=l*u*h-p*c*g,this._z=l*c*g+p*u*h,this._w=l*c*h-p*u*g;break;case"YXZ":this._x=p*c*h+l*u*g,this._y=l*u*h-p*c*g,this._z=l*c*g-p*u*h,this._w=l*c*h+p*u*g;break;case"ZXY":this._x=p*c*h-l*u*g,this._y=l*u*h+p*c*g,this._z=l*c*g+p*u*h,this._w=l*c*h-p*u*g;break;case"ZYX":this._x=p*c*h-l*u*g,this._y=l*u*h+p*c*g,this._z=l*c*g-p*u*h,this._w=l*c*h+p*u*g;break;case"YZX":this._x=p*c*h+l*u*g,this._y=l*u*h+p*c*g,this._z=l*c*g-p*u*h,this._w=l*c*h-p*u*g;break;case"XZY":this._x=p*c*h-l*u*g,this._y=l*u*h-p*c*g,this._z=l*c*g+p*u*h,this._w=l*c*h+p*u*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10],p=i+s+h;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(c-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>h){let u=2*Math.sqrt(1+i-s-h);this._w=(c-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>h){let u=2*Math.sqrt(1+s-i-h);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+n*s+r*l-a*o,this._y=r*c+n*o+a*s-i*l,this._z=a*c+n*l+i*o-r*s,this._w=n*c-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=(aa=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ol.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ol.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*r),h=2*(o*i-n*a),p=2*(n*r-s*i);return this.x=i+l*c+s*p-o*h,this.y=r+l*h+o*c-n*p,this.z=a+l*p+n*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=st(this.x,t.x,i.x),this.y=st(this.y,t.y,i.y),this.z=st(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=st(this.x,t,i),this.y=st(this.y,t,i),this.z=st(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(st(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ts.copy(this).projectOnVector(t),this.sub(Ts)}reflect(t){return this.sub(Ts.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(st(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},aa.prototype.isVector3=!0,aa),Ts=new G,Ol=new Dr,Ze=(na=class{constructor(t,i,r,a,n,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c)}set(t,i,r,a,n,s,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=i,h[4]=n,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],p=r[7],u=r[2],g=r[5],x=r[8],y=a[0],m=a[3],d=a[6],E=a[1],w=a[4],S=a[7],A=a[2],R=a[5],f=a[8];return n[0]=s*y+o*E+l*A,n[3]=s*m+o*w+l*R,n[6]=s*d+o*S+l*f,n[1]=c*y+h*E+p*A,n[4]=c*m+h*w+p*R,n[7]=c*d+h*S+p*f,n[2]=u*y+g*E+x*A,n[5]=u*m+g*w+x*R,n[8]=u*d+g*S+x*f,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*s*h-i*o*c-r*n*h+r*o*l+a*n*c-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*s-o*c,u=o*l-h*n,g=c*n-s*l,x=i*p+r*u+a*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=p*y,t[1]=(a*c-h*r)*y,t[2]=(o*r-a*s)*y,t[3]=u*y,t[4]=(h*i-a*l)*y,t[5]=(a*n-o*i)*y,t[6]=g*y,t[7]=(r*l-c*i)*y,t[8]=(s*i-r*n)*y,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+i,0,0,1),this}scale(t,i){return Vn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ws.makeScale(t,i)),this}rotate(t){return Vn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ws.makeRotation(-t)),this}translate(t,i){return Vn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ws.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},na.prototype.isMatrix3=!0,na),ws=new Ze,Fl=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt=gd();_d=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Br===void 0&&(Br=Jn("canvas")),Br.width=e.width,Br.height=e.height;let r=Br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Br}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=er(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(er(t[i]/255)*255):t[i]=er(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vd=0,Ko=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(As(r[n].image)):a.push(As(r[n]))}else a=As(r);i.url=a}return t||(e.images[this.uuid]=i),i}};xd=0,Rs=new G,Si=class kn extends Ir{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=Qi,a=Qi,n=si,s=pr,o=Hi,l=fi,c=kn.DEFAULT_ANISOTROPY,h=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Wa(),this.name="",this.source=new Ko(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rs).x}get height(){return this.source.getSize(Rs).y}get depth(){return this.source.getSize(Rs).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){je(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){je(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case to:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case to:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=Gc;Si.DEFAULT_ANISOTROPY=1;Lt=(sa=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],c=s[8],h=s[1],p=s[5],u=s[9],g=s[2],x=s[6],y=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-g)<.01&&Math.abs(u-x)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+g)<.1&&Math.abs(u+x)<.1&&Math.abs(o+p+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let d=(o+1)/2,E=(p+1)/2,w=(y+1)/2,S=(l+h)/4,A=(c+g)/4,R=(u+x)/4;return d>E&&d>w?d<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(d),a=S/r,n=A/r):E>w?E<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(E),r=S/a,n=R/a):w<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(w),r=A/n,a=R/n),this.set(r,a,n,i),this}let m=Math.sqrt((x-u)*(x-u)+(c-g)*(c-g)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(x-u)/m,this.y=(c-g)/m,this.z=(h-l)/m,this.w=Math.acos((o+p+y-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=st(this.x,t.x,i.x),this.y=st(this.y,t.y,i.y),this.z=st(this.z,t.z,i.z),this.w=st(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=st(this.x,t,i),this.y=st(this.y,t,i),this.z=st(this.z,t,i),this.w=st(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(st(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sa.prototype.isVector4=!0,sa),Sd=class extends Ir{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let r=i.count;for(let a=0;a<r;a++)this.textures[a]=new Si({width:e,height:t,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ko(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gi=class extends Sd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Qc=class extends Si{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Md=class extends Si{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Et=(Cr=class{constructor(t,i,r,a,n,s,o,l,c,h,p,u,g,x,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c,h,p,u,g,x,y,m)}set(t,i,r,a,n,s,o,l,c,h,p,u,g,x,y,m){let d=this.elements;return d[0]=t,d[4]=i,d[8]=r,d[12]=a,d[1]=n,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=g,d[7]=x,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/zr.setFromMatrixColumn(t,0).length(),n=1/zr.setFromMatrixColumn(t,1).length(),s=1/zr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),h=Math.cos(n),p=Math.sin(n);if(t.order==="XYZ"){let u=s*h,g=s*p,x=o*h,y=o*p;i[0]=l*h,i[4]=-l*p,i[8]=c,i[1]=g+x*c,i[5]=u-y*c,i[9]=-o*l,i[2]=y-u*c,i[6]=x+g*c,i[10]=s*l}else if(t.order==="YXZ"){let u=l*h,g=l*p,x=c*h,y=c*p;i[0]=u+y*o,i[4]=x*o-g,i[8]=s*c,i[1]=s*p,i[5]=s*h,i[9]=-o,i[2]=g*o-x,i[6]=y+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*h,g=l*p,x=c*h,y=c*p;i[0]=u-y*o,i[4]=-s*p,i[8]=x+g*o,i[1]=g+x*o,i[5]=s*h,i[9]=y-u*o,i[2]=-s*c,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*h,g=s*p,x=o*h,y=o*p;i[0]=l*h,i[4]=x*c-g,i[8]=u*c+y,i[1]=l*p,i[5]=y*c+u,i[9]=g*c-x,i[2]=-c,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,g=s*c,x=o*l,y=o*c;i[0]=l*h,i[4]=y-u*p,i[8]=x*p+g,i[1]=p,i[5]=s*h,i[9]=-o*h,i[2]=-c*h,i[6]=g*p+x,i[10]=u-y*p}else if(t.order==="XZY"){let u=s*l,g=s*c,x=o*l,y=o*c;i[0]=l*h,i[4]=-p,i[8]=c*h,i[1]=u*p+y,i[5]=s*h,i[9]=g*p-x,i[2]=x*p-g,i[6]=o*h,i[10]=y*p+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,Ed)}lookAt(t,i,r){let a=this.elements;return di.subVectors(t,i),di.lengthSq()===0&&(di.z=1),di.normalize(),sr.crossVectors(r,di),sr.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),sr.crossVectors(r,di)),sr.normalize(),dn.crossVectors(di,sr),a[0]=sr.x,a[4]=dn.x,a[8]=di.x,a[1]=sr.y,a[5]=dn.y,a[9]=di.y,a[2]=sr.z,a[6]=dn.z,a[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],p=r[5],u=r[9],g=r[13],x=r[2],y=r[6],m=r[10],d=r[14],E=r[3],w=r[7],S=r[11],A=r[15],R=a[0],f=a[4],M=a[8],L=a[12],N=a[1],O=a[5],C=a[9],Q=a[13],I=a[2],X=a[6],ae=a[10],W=a[14],ye=a[3],Z=a[7],J=a[11],ue=a[15];return n[0]=s*R+o*N+l*I+c*ye,n[4]=s*f+o*O+l*X+c*Z,n[8]=s*M+o*C+l*ae+c*J,n[12]=s*L+o*Q+l*W+c*ue,n[1]=h*R+p*N+u*I+g*ye,n[5]=h*f+p*O+u*X+g*Z,n[9]=h*M+p*C+u*ae+g*J,n[13]=h*L+p*Q+u*W+g*ue,n[2]=x*R+y*N+m*I+d*ye,n[6]=x*f+y*O+m*X+d*Z,n[10]=x*M+y*C+m*ae+d*J,n[14]=x*L+y*Q+m*W+d*ue,n[3]=E*R+w*N+S*I+A*ye,n[7]=E*f+w*O+S*X+A*Z,n[11]=E*M+w*C+S*ae+A*J,n[15]=E*L+w*Q+S*W+A*ue,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],g=t[14],x=t[3],y=t[7],m=t[11],d=t[15],E=l*g-c*u,w=o*g-c*p,S=o*u-l*p,A=s*g-c*h,R=s*u-l*h,f=s*p-o*h;return i*(y*E-m*w+d*S)-r*(x*E-m*A+d*R)+a*(x*w-y*A+d*f)-n*(x*S-y*R+m*f)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return i*(s*h-o*c)-r*(n*h-o*l)+a*(n*c-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],g=t[11],x=t[12],y=t[13],m=t[14],d=t[15],E=i*o-r*s,w=i*l-a*s,S=i*c-n*s,A=r*l-a*o,R=r*c-n*o,f=a*c-n*l,M=h*y-p*x,L=h*m-u*x,N=h*d-g*x,O=p*m-u*y,C=p*d-g*y,Q=u*d-g*m,I=E*Q-w*C+S*O+A*N-R*L+f*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/I;return t[0]=(o*Q-l*C+c*O)*X,t[1]=(a*C-r*Q-n*O)*X,t[2]=(y*f-m*R+d*A)*X,t[3]=(u*R-p*f-g*A)*X,t[4]=(l*N-s*Q-c*L)*X,t[5]=(i*Q-a*N+n*L)*X,t[6]=(m*S-x*f-d*w)*X,t[7]=(h*f-u*S+g*w)*X,t[8]=(s*C-o*N+c*M)*X,t[9]=(r*N-i*C-n*M)*X,t[10]=(x*R-y*S+d*E)*X,t[11]=(p*S-h*R-g*E)*X,t[12]=(o*L-s*O-l*M)*X,t[13]=(i*O-r*L+a*M)*X,t[14]=(y*w-x*A-m*E)*X,t[15]=(h*A-p*w+u*E)*X,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,c=n*s,h=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+r,h*l-a*s,0,c*l-a*o,h*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,c=n+n,h=s+s,p=o+o,u=n*c,g=n*h,x=n*p,y=s*h,m=s*p,d=o*p,E=l*c,w=l*h,S=l*p,A=r.x,R=r.y,f=r.z;return a[0]=(1-(y+d))*A,a[1]=(g+S)*A,a[2]=(x-w)*A,a[3]=0,a[4]=(g-S)*R,a[5]=(1-(u+d))*R,a[6]=(m+E)*R,a[7]=0,a[8]=(x+w)*f,a[9]=(m-E)*f,a[10]=(1-(u+y))*f,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=zr.set(a[0],a[1],a[2]).length(),o=zr.set(a[4],a[5],a[6]).length(),l=zr.set(a[8],a[9],a[10]).length();n<0&&(s=-s),wi.copy(this);let c=1/s,h=1/o,p=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=p,wi.elements[9]*=p,wi.elements[10]*=p,i.setFromRotationMatrix(wi),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=Pi,l=!1){let c=this.elements,h=2*n/(i-t),p=2*n/(r-a),u=(i+t)/(i-t),g=(r+a)/(r-a),x,y;if(l)x=n/(s-n),y=s*n/(s-n);else if(o===Pi)x=-(s+n)/(s-n),y=-2*s*n/(s-n);else if(o===Va)x=-s/(s-n),y=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=Pi,l=!1){let c=this.elements,h=2/(i-t),p=2/(r-a),u=-(i+t)/(i-t),g=-(r+a)/(r-a),x,y;if(l)x=1/(s-n),y=s/(s-n);else if(o===Pi)x=-2/(s-n),y=-(s+n)/(s-n);else if(o===Va)x=-1/(s-n),y=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Cr.prototype.isMatrix4=!0,Cr),zr=new G,wi=new Et,yd=new G(0,0,0),Ed=new G(1,1,1),sr=new G,dn=new G,di=new G,zl=new Et,Hl=new Dr,ua=class $c{constructor(t=0,i=0,r=0,a=$c.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],p=a[2],u=a[6],g=a[10];switch(i){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-st(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-st(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,g),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ua.DEFAULT_ORDER="XYZ";eh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bd=0,Gl=new G,Hr=new Dr,qi=new Et,pn=new G,Ra=new G,Td=new G,wd=new Dr,Vl=new G(1,0,0),kl=new G(0,1,0),Wl=new G(0,0,1),Xl={type:"added"},Ad={type:"removed"},Gr={type:"childadded",child:null},Cs={type:"childremoved",child:null},Jt=class Wn extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();let t=new G,i=new ua,r=new Dr,a=new G(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ze}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Hr.setFromAxisAngle(t,i),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(t,i){return Hr.setFromAxisAngle(t,i),this.quaternion.premultiply(Hr),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(kl,t)}rotateZ(t){return this.rotateOnAxis(Wl,t)}translateOnAxis(t,i){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(kl,t)}translateZ(t){return this.translateOnAxis(Wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?pn.copy(t):pn.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ra,pn,this.up):qi.lookAt(pn,Ra,this.up),this.quaternion.setFromRotationMatrix(qi),a&&(qi.extractRotation(a.matrixWorld),Hr.setFromRotationMatrix(qi),this.quaternion.premultiply(Hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(qe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xl),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ad),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xl),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,t,Td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];n(t.shapes,p)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),p=s(t.shapes),u=s(t.skeletons),g=s(t.animations),x=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),p.length>0&&(r.shapes=p),u.length>0&&(r.skeletons=u),g.length>0&&(r.animations=g),x.length>0&&(r.nodes=x)}return r.object=a,r;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new G(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;xi=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rd={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let x of e.hand.values()){let y=t.getJointPose(x,i),m=this._getHandJoint(l,x);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=c.position.distanceTo(h.position),u=.02,g=.005;l.inputState.pinching&&p>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Rd)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},fn={h:0,s:0,l:0};Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=dd(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Ps(n,a,e+1/3),this.g=Ps(n,a,e),this.b=Ps(n,a,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=_i){function i(a){a!==void 0&&parseFloat(a)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){let i=th[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return nt.workingToColorSpace(Zt.copy(this),e),Math.round(st(Zt.r*255,0,255))*65536+Math.round(st(Zt.g*255,0,255))*256+Math.round(st(Zt.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Zt.copy(this),t);let i=Zt.r,r=Zt.g,a=Zt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,c=(s+n)/2;if(s===n)o=0,l=0;else{let h=n-s;switch(l=c<=.5?h/(n+s):h/(2-n-s),n){case i:o=(r-a)/h+(r<a?6:0);break;case r:o=(a-i)/h+2;break;case a:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=_i){nt.workingToColorSpace(Zt.copy(this),e);let t=Zt.r,i=Zt.g,r=Zt.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(fn);let i=bs(or.h,fn.h,t),r=bs(or.s,fn.s,t),a=bs(or.l,fn.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new Ke;Ke.NAMES=th;ih=class rh{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ke(t),this.near=i,this.far=r}clone(){return new rh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ah=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ai=new G,Yi=new G,Ns=new G,Ki=new G,Vr=new G,kr=new G,jl=new G,Is=new G,Ds=new G,Us=new G,Os=new Lt,Fs=new Lt,Bs=new Lt,Ca=class $r{constructor(t=new G,i=new G,r=new G){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Ai.subVectors(t,i),a.cross(Ai);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Ai.subVectors(a,i),Yi.subVectors(r,i),Ns.subVectors(t,i);let s=Ai.dot(Ai),o=Ai.dot(Yi),l=Ai.dot(Ns),c=Yi.dot(Yi),h=Yi.dot(Ns),p=s*c-o*o;if(p===0)return n.set(0,0,0),null;let u=1/p,g=(c*l-o*h)*u,x=(s*h-o*l)*u;return n.set(1-g-x,x,g)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Ki.x),l.addScaledVector(s,Ki.y),l.addScaledVector(o,Ki.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Os.setScalar(0),Fs.setScalar(0),Bs.setScalar(0),Os.fromBufferAttribute(t,i),Fs.fromBufferAttribute(t,r),Bs.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Os,n.x),s.addScaledVector(Fs,n.y),s.addScaledVector(Bs,n.z),s}static isFrontFacing(t,i,r,a){return Ai.subVectors(r,i),Yi.subVectors(t,i),Ai.cross(Yi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),Ai.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return $r.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return $r.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return $r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Vr.subVectors(a,r),kr.subVectors(n,r),Is.subVectors(t,r);let l=Vr.dot(Is),c=kr.dot(Is);if(l<=0&&c<=0)return i.copy(r);Ds.subVectors(t,a);let h=Vr.dot(Ds),p=kr.dot(Ds);if(h>=0&&p<=h)return i.copy(a);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return s=l/(l-h),i.copy(r).addScaledVector(Vr,s);Us.subVectors(t,n);let g=Vr.dot(Us),x=kr.dot(Us);if(x>=0&&g<=x)return i.copy(n);let y=g*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),i.copy(r).addScaledVector(kr,o);let m=h*x-g*p;if(m<=0&&p-h>=0&&g-x>=0)return jl.subVectors(n,a),o=(p-h)/(p-h+(g-x)),i.copy(a).addScaledVector(jl,o);let d=1/(m+y+u);return s=y*d,o=u*d,i.copy(r).addScaledVector(Vr,s).addScaledVector(kr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ur=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Ri):Ri.fromBufferAttribute(a,n),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mn.copy(i.boundingBox)),mn.applyMatrix4(e.matrixWorld),this.union(mn)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),gn.subVectors(this.max,La),Wr.subVectors(e.a,La),Xr.subVectors(e.b,La),jr.subVectors(e.c,La),lr.subVectors(Xr,Wr),cr.subVectors(jr,Xr),Tr.subVectors(Wr,jr);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Tr.z,Tr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Tr.z,0,-Tr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Tr.y,Tr.x,0];return!zs(t,Wr,Xr,jr,gn)||(t=[1,0,0,0,1,0,0,0,1],!zs(t,Wr,Xr,jr,gn))?!1:(_n.crossVectors(lr,cr),t=[_n.x,_n.y,_n.z],zs(t,Wr,Xr,jr,gn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new G,new G,new G,new G,new G,new G,new G,new G],Ri=new G,mn=new Ur,Wr=new G,Xr=new G,jr=new G,lr=new G,cr=new G,Tr=new G,La=new G,gn=new G,_n=new G,wr=new G;It=new G,vn=new it,Cd=0,mr=class extends Ir{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sd,this.updateRanges=[],this.gpuType=Li,this.version=0,this._normalizationScale=e!==void 0?Yo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXY(t,vn.x,vn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):fd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):md(e,this.array)}},nh=class extends mr{constructor(e,t,i){super(new Uint16Array(e),t,i)}},sh=class extends mr{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ut=class extends mr{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ld=new Ur,Pa=new G,Hs=new G,fa=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ld.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);let t=Pa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Hs)),this.expandByPoint(Pa.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pd=0,gi=new Et,Gs=new Jt,qr=new G,pi=new Ur,Na=new Ur,Ht=new G,ei=class oh extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(od(t)?sh:nh)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Ze().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,r){return gi.makeTranslation(t,i,r),this.applyMatrix4(gi),this}scale(t,i,r){return gi.makeScale(t,i,r),this.applyMatrix4(gi),this}lookAt(t){return Gs.lookAt(t),Gs.updateMatrix(),this.applyMatrix4(Gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ut(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];pi.setFromBufferAttribute(n),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let r=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Na.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(pi.min,Na.min),pi.expandByPoint(Ht),Ht.addVectors(pi.max,Na.max),pi.expandByPoint(Ht)):(pi.expandByPoint(Na.min),pi.expandByPoint(Na.max))}pi.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Ht.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Ht));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(t,c),Ht.add(qr)),a=Math.max(a,r.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new mr(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[],c=new Uint8Array(r.count);for(let L=0;L<r.count;L++)o[L]=new G,l[L]=new G;let h=new G,p=new G,u=new G,g=new it,x=new it,y=new it,m=new G,d=new G;function E(L,N,O){c[L]=c[N]=c[O]=1,h.fromBufferAttribute(r,L),p.fromBufferAttribute(r,N),u.fromBufferAttribute(r,O),g.fromBufferAttribute(n,L),x.fromBufferAttribute(n,N),y.fromBufferAttribute(n,O),p.sub(h),u.sub(h),x.sub(g),y.sub(g);let C=1/(x.x*y.y-y.x*x.y);isFinite(C)&&(m.copy(p).multiplyScalar(y.y).addScaledVector(u,-x.y).multiplyScalar(C),d.copy(u).multiplyScalar(x.x).addScaledVector(p,-y.x).multiplyScalar(C),o[L].add(m),o[N].add(m),o[O].add(m),l[L].add(d),l[N].add(d),l[O].add(d))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,N=w.length;L<N;++L){let O=w[L],C=O.start,Q=O.count;for(let I=C,X=C+Q;I<X;I+=3)E(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let S=new G,A=new G,R=new G,f=new G;function M(L){R.fromBufferAttribute(a,L),f.copy(R);let N=o[L];S.copy(N),S.sub(R.multiplyScalar(R.dot(N))).normalize(),A.crossVectors(f,N);let O=A.dot(l[L])<0?-1:1;s.setXYZW(L,S.x,S.y,S.z,O)}for(let L=0,N=r.count;L<N;++L)c[L]&&M(L);this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new mr(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,g=r.count;u<g;u++)r.setXYZ(u,0,0,0);let a=new G,n=new G,s=new G,o=new G,l=new G,c=new G,h=new G,p=new G;if(t)for(let u=0,g=t.count;u<g;u+=3){let x=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(i,x),n.fromBufferAttribute(i,y),s.fromBufferAttribute(i,m),h.subVectors(s,n),p.subVectors(a,n),h.cross(p),o.fromBufferAttribute(r,x),l.fromBufferAttribute(r,y),c.fromBufferAttribute(r,m),o.add(h),l.add(h),c.add(h),r.setXYZ(x,o.x,o.y,o.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,g=i.count;u<g;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),h.subVectors(s,n),p.subVectors(a,n),h.cross(p),r.setXYZ(u+0,h.x,h.y,h.z),r.setXYZ(u+1,h.x,h.y,h.z),r.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Ht.fromBufferAttribute(t,i),Ht.normalize(),t.setXYZ(i,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),g=0,x=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*h;for(let d=0;d<h;d++)u[x++]=c[g++]}return new mr(u,h,p)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new oh,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,r);i.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],g=t(u,r);l.push(g)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let g=c[p];h.push(g.toJSON(t.data))}h.length>0&&(a[l]=h,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(i))}let n=t.morphAttributes;for(let c in n){let h=[],p=n[c];for(let u=0,g=p.length;u<g;u++)h.push(p[u].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vs=new G,Nd=new G,Id=new Ze,ur=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Vs.subVectors(i,t).cross(Nd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Vs),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Id.getNormalMatrix(e),r=this.coplanarPoint(Vs).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Dd=0,ma=class extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=Ba,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Ic,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ur().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new it().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ji=new G,ks=new G,xn=new G,Sn=new G,lh=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ks.copy(e).add(t).multiplyScalar(.5),xn.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(ks);let a=e.distanceTo(t)*.5,n=-this.direction.dot(xn),s=Sn.dot(this.direction),o=-Sn.dot(xn),l=Sn.lengthSq(),c=Math.abs(1-n*n),h,p,u,g;if(c>0)if(h=n*o-s,p=n*s-o,g=a*c,h>=0)if(p>=-g)if(p<=g){let x=1/c;h*=x,p*=x,u=h*(h+n*p+2*s)+p*(n*h+p+2*o)+l}else p=a,h=Math.max(0,-(n*p+s)),u=-h*h+p*(p+2*o)+l;else p=-a,h=Math.max(0,-(n*p+s)),u=-h*h+p*(p+2*o)+l;else p<=-g?(h=Math.max(0,-(-n*a+s)),p=h>0?-a:Math.min(Math.max(-a,-o),a),u=-h*h+p*(p+2*o)+l):p<=g?(h=0,p=Math.min(Math.max(-a,-o),a),u=p*(p+2*o)+l):(h=Math.max(0,-(n*a+s)),p=h>0?a:Math.min(Math.max(-a,-o),a),u=-h*h+p*(p+2*o)+l);else p=n>0?-a:a,h=Math.max(0,-(n*p+s)),u=-h*h+p*(p+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ks).addScaledVector(xn,p),u}intersectSphere(e,t){if(e.radius<0)return null;Ji.subVectors(e.center,this.origin);let i=Ji.dot(this.direction),r=Ji.dot(Ji)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),c>=0?(a=(e.min.y-p.y)*c,n=(e.max.y-p.y)*c):(a=(e.max.y-p.y)*c,n=(e.min.y-p.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),h>=0?(s=(e.min.z-p.z)*h,o=(e.max.z-p.z)*h):(s=(e.max.z-p.z)*h,o=(e.min.z-p.z)*h),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,c=s.z,h=e.x-n.x,p=e.y-n.y,u=e.z-n.z,g=t.x-n.x,x=t.y-n.y,y=t.z-n.z,m=i.x-n.x,d=i.y-n.y,E=i.z-n.z,w=Math.abs(o),S=Math.abs(l),A=Math.abs(c),R,f,M,L,N,O,C,Q,I,X,ae,W;if(w>=S&&w>=A?(M=o,O=h,I=g,W=m,o>=0?(R=l,f=c,L=p,N=u,C=x,Q=y,X=d,ae=E):(R=c,f=l,L=u,N=p,C=y,Q=x,X=E,ae=d)):S>=A?(M=l,O=p,I=x,W=d,l>=0?(R=c,f=o,L=u,N=h,C=y,Q=g,X=E,ae=m):(R=o,f=c,L=h,N=u,C=g,Q=y,X=m,ae=E)):(M=c,O=u,I=y,W=E,c>=0?(R=o,f=l,L=h,N=p,C=g,Q=x,X=m,ae=d):(R=l,f=o,L=p,N=h,C=x,Q=g,X=d,ae=m)),M===0)return null;let ye=R/M,Z=f/M,J=1/M,ue=L-ye*O,Ie=N-Z*O,ee=C-ye*I,fe=Q-Z*I,Ne=X-ye*W,ze=ae-Z*W,Ge=Ne*fe-ze*ee,Ee=ue*ze-Ie*Ne,Je=ee*Ie-fe*ue;if(r){if(Ge<0||Ee<0||Je<0)return null}else if((Ge<0||Ee<0||Je<0)&&(Ge>0||Ee>0||Je>0))return null;let rt=Ge+Ee+Je;if(rt===0)return null;let De=J*(Ge*O+Ee*I+Je*W);return(rt>0?De<0:De>0)?null:this.at(De/rt,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ga=class extends ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ql=new Et,Ar=new lh,Mn=new fa,Yl=new G,yn=new G,En=new G,bn=new G,Ws=new G,Tn=new G,Kl=new G,wn=new G,mt=class extends Jt{constructor(e=new ei,t=new ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){Tn.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let c=s[o],h=a[o];c!==0&&(Ws.fromBufferAttribute(h,e),n?Tn.addScaledVector(Ws,c):Tn.addScaledVector(Ws.sub(t),c))}t.add(Tn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mn.copy(i.boundingSphere),Mn.applyMatrix4(a),Ar.copy(e.ray).recast(e.near),!(Mn.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Mn,Yl)===null||Ar.origin.distanceToSquared(Yl)>(e.far-e.near)**2))&&(ql.copy(a).invert(),Ar.copy(e.ray).applyMatrix4(ql),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,h=a.attributes.normal,p=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let g=0,x=p.length;g<x;g++){let y=p[g],m=n[y.materialIndex],d=Math.max(y.start,u.start),E=Math.min(s.count,Math.min(y.start+y.count,u.start+u.count));for(let w=d,S=E;w<S;w+=3){let A=s.getX(w),R=s.getX(w+1),f=s.getX(w+2);r=An(this,m,e,i,l,c,h,A,R,f),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let g=Math.max(0,u.start),x=Math.min(s.count,u.start+u.count);for(let y=g,m=x;y<m;y+=3){let d=s.getX(y),E=s.getX(y+1),w=s.getX(y+2);r=An(this,n,e,i,l,c,h,d,E,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let g=0,x=p.length;g<x;g++){let y=p[g],m=n[y.materialIndex],d=Math.max(y.start,u.start),E=Math.min(o.count,Math.min(y.start+y.count,u.start+u.count));for(let w=d,S=E;w<S;w+=3){let A=w,R=w+1,f=w+2;r=An(this,m,e,i,l,c,h,A,R,f),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let g=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let y=g,m=x;y<m;y+=3){let d=y,E=y+1,w=y+2;r=An(this,n,e,i,l,c,h,d,E,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}};ch=class extends Si{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Wt,c=Wt,h,p){super(null,n,s,o,l,c,r,a,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zl=class extends mr{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yr=new Et,Jl=new Et,Rn=[],Ql=new Ur,Od=new Et,Ia=new mt,Da=new fa,ti=class extends mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Od)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ur),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),Ql.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(Ql)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),Da.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(Da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Da.copy(this.boundingSphere),Da.applyMatrix4(i),e.ray.intersectsSphere(Da)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Yr),Jl.multiplyMatrices(i,Yr),Ia.matrixWorld=Jl,Ia.raycast(e,Rn);for(let n=0,s=Rn.length;n<s;n++){let o=Rn[n];o.instanceId=a,o.object=this,t.push(o)}Rn.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ch(new Float32Array(r*this.count),r,this.count,Wo,Li));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rr=new fa,Fd=new it(.5,.5),Cn=new G,ka=class{constructor(e=new ur,t=new ur,i=new ur,r=new ur,a=new ur,n=new ur){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],p=a[6],u=a[7],g=a[8],x=a[9],y=a[10],m=a[11],d=a[12],E=a[13],w=a[14],S=a[15];if(r[0].setComponents(l-n,u-c,m-g,S-d).normalize(),r[1].setComponents(l+n,u+c,m+g,S+d).normalize(),r[2].setComponents(l+s,u+h,m+x,S+E).normalize(),r[3].setComponents(l-s,u-h,m-x,S-E).normalize(),i)r[4].setComponents(o,p,y,w).normalize(),r[5].setComponents(l-o,u-p,m-y,S-w).normalize();else if(r[4].setComponents(l-o,u-p,m-y,S-w).normalize(),t===Pi)r[5].setComponents(l+o,u+p,m+y,S+w).normalize();else if(t===Va)r[5].setComponents(o,p,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);let t=Fd.distanceTo(e.center);return Rr.radius=.7071067811865476+t,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Cn.x=r.normal.x>0?e.max.x:e.min.x,Cn.y=r.normal.y>0?e.max.y:e.min.y,Cn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$l=new Et,Bd=class hh{constructor(){this.coordinateSystem=Pi,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];$l.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new ka),r[a].setFromProjectionMatrix($l,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new ka),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new hh().copy(this)}},Zo=class extends ma{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ec=new Et,Fo=new lh,Ln=new fa,Pn=new G,uh=class extends Jt{constructor(e=new ei,t=new Zo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ln.copy(i.boundingSphere),Ln.applyMatrix4(r),Ln.radius+=a,e.ray.intersectsSphere(Ln)===!1)return;ec.copy(r).invert(),Fo.copy(e.ray).applyMatrix4(ec);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,c=i.attributes.position;if(l!==null){let h=Math.max(0,n.start),p=Math.min(l.count,n.start+n.count);for(let u=h,g=p;u<g;u++){let x=l.getX(u);Pn.fromBufferAttribute(c,x),tc(Pn,x,o,r,e,t,this)}}else{let h=Math.max(0,n.start),p=Math.min(c.count,n.start+n.count);for(let u=h,g=p;u<g;u++)Pn.fromBufferAttribute(c,u),tc(Pn,u,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};dh=class extends Si{constructor(e=[],t=la,i,r,a,n,s,o,l,c){super(e,t,i,r,a,n,s,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ph=class extends Si{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},da=class extends Si{constructor(e,t,i=Vi,r,a,n,s=Wt,o=Wt,l,c=gr,h=1){if(c!==gr&&c!==fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:h};super(p,r,a,n,s,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fh=class extends da{constructor(e,t=Vi,i=la,r,a,n=Wt,s=Wt,o,l=gr){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,s,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},mh=class extends Si{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_r=class gh extends ei{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],u=0,g=0;x("z","y","x",-1,-1,r,i,t,s,n,0),x("z","y","x",1,-1,r,i,-t,s,n,1),x("x","z","y",1,1,t,r,i,a,s,2),x("x","z","y",1,-1,t,r,-i,a,s,3),x("x","y","z",1,-1,t,i,r,a,n,4),x("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(p,2));function x(y,m,d,E,w,S,A,R,f,M,L){let N=S/f,O=A/M,C=S/2,Q=A/2,I=R/2,X=f+1,ae=M+1,W=0,ye=0,Z=new G;for(let J=0;J<ae;J++){let ue=J*O-Q;for(let Ie=0;Ie<X;Ie++){let ee=Ie*N-C;Z[y]=ee*E,Z[m]=ue*w,Z[d]=I,c.push(Z.x,Z.y,Z.z),Z[y]=0,Z[m]=0,Z[d]=R>0?1:-1,h.push(Z.x,Z.y,Z.z),p.push(Ie/f),p.push(1-J/M),W+=1}}for(let J=0;J<M;J++)for(let ue=0;ue<f;ue++){let Ie=u+ue+X*J,ee=u+ue+X*(J+1),fe=u+(ue+1)+X*(J+1),Ne=u+(ue+1)+X*J;l.push(Ie,ee,Ne),l.push(ee,fe,Ne),ye+=6}o.addGroup(g,ye,L),g+=ye,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Qn=class _h extends ei{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],c=new G,h=new it;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=i;p++,u+=3){let g=r+p/i*a;c.x=t*Math.cos(g),c.y=t*Math.sin(g),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[u]/t+1)/2,h.y=(s[u+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=i;p++)n.push(p,p+1,0);this.setIndex(n),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(o,3)),this.setAttribute("uv",new ut(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _h(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Mi=class vh extends ei{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),n=Math.floor(n);let h=[],p=[],u=[],g=[],x=0,y=[],m=r/2,d=0;E(),s===!1&&(t>0&&w(!0),i>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(g,2));function E(){let S=new G,A=new G,R=0,f=(i-t)/r;for(let M=0;M<=n;M++){let L=[],N=M/n,O=N*(i-t)+t;for(let C=0;C<=a;C++){let Q=C/a,I=Q*l+o,X=Math.sin(I),ae=Math.cos(I);A.x=O*X,A.y=-N*r+m,A.z=O*ae,p.push(A.x,A.y,A.z),S.set(X,f,ae).normalize(),u.push(S.x,S.y,S.z),g.push(Q,1-N),L.push(x++)}y.push(L)}for(let M=0;M<a;M++)for(let L=0;L<n;L++){let N=y[L][M],O=y[L+1][M],C=y[L+1][M+1],Q=y[L][M+1];(t>0||L!==0)&&(h.push(N,O,Q),R+=3),(i>0||L!==n-1)&&(h.push(O,C,Q),R+=3)}c.addGroup(d,R,0),d+=R}function w(S){let A=x,R=new it,f=new G,M=0,L=S===!0?t:i,N=S===!0?1:-1;for(let C=1;C<=a;C++)p.push(0,m*N,0),u.push(0,N,0),g.push(.5,.5),x++;let O=x;for(let C=0;C<=a;C++){let Q=C/a*l+o,I=Math.cos(Q),X=Math.sin(Q);f.x=L*X,f.y=m*N,f.z=L*I,p.push(f.x,f.y,f.z),u.push(0,N,0),R.x=I*.5+.5,R.y=X*.5*N+.5,g.push(R.x,R.y),x++}for(let C=0;C<a;C++){let Q=A+C,I=O+C;S===!0?h.push(I,I+1,Q):h.push(I+1,I,Q),M+=3}c.addGroup(d,M,S===!0?1:2),d+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_a=class xh extends Mi{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new xh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zd=class Sh extends ei{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),c(r),h(),this.setAttribute("position",new ut(n,3)),this.setAttribute("normal",new ut(n.slice(),3)),this.setAttribute("uv",new ut(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let w=new G,S=new G,A=new G;for(let R=0;R<i.length;R+=3)g(i[R+0],w),g(i[R+1],S),g(i[R+2],A),l(w,S,A,E)}function l(E,w,S,A){let R=A+1,f=[];for(let M=0;M<=R;M++){f[M]=[];let L=E.clone().lerp(S,M/R),N=w.clone().lerp(S,M/R),O=R-M;for(let C=0;C<=O;C++)C===0&&M===R?f[M][C]=L:f[M][C]=L.clone().lerp(N,C/O)}for(let M=0;M<R;M++)for(let L=0;L<2*(R-M)-1;L++){let N=Math.floor(L/2);L%2===0?(u(f[M][N+1]),u(f[M+1][N]),u(f[M][N])):(u(f[M][N+1]),u(f[M+1][N+1]),u(f[M+1][N]))}}function c(E){let w=new G;for(let S=0;S<n.length;S+=3)w.x=n[S+0],w.y=n[S+1],w.z=n[S+2],w.normalize().multiplyScalar(E),n[S+0]=w.x,n[S+1]=w.y,n[S+2]=w.z}function h(){let E=new G;for(let w=0;w<n.length;w+=3){E.x=n[w+0],E.y=n[w+1],E.z=n[w+2];let S=m(E)/2/Math.PI+.5,A=d(E)/Math.PI+.5;s.push(S,1-A)}x(),p()}function p(){for(let E=0;E<s.length;E+=6){let w=s[E+0],S=s[E+2],A=s[E+4],R=Math.max(w,S,A),f=Math.min(w,S,A);R>.9&&f<.1&&(w<.2&&(s[E+0]+=1),S<.2&&(s[E+2]+=1),A<.2&&(s[E+4]+=1))}}function u(E){n.push(E.x,E.y,E.z)}function g(E,w){let S=E*3;w.x=t[S+0],w.y=t[S+1],w.z=t[S+2]}function x(){let E=new G,w=new G,S=new G,A=new G,R=new it,f=new it,M=new it;for(let L=0,N=0;L<n.length;L+=9,N+=6){E.set(n[L+0],n[L+1],n[L+2]),w.set(n[L+3],n[L+4],n[L+5]),S.set(n[L+6],n[L+7],n[L+8]),R.set(s[N+0],s[N+1]),f.set(s[N+2],s[N+3]),M.set(s[N+4],s[N+5]),A.copy(E).add(w).add(S).divideScalar(3);let O=m(A);y(R,N+0,E,O),y(f,N+2,w,O),y(M,N+4,S,O)}}function y(E,w,S,A){A<0&&E.x===1&&(s[w]=E.x-1),S.x===0&&S.z===0&&(s[w]=A/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.vertices,t.indices,t.radius,t.detail)}},Jo=class Mh extends zd{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Mh(t.radius,t.detail)}},Xa=class yh extends ei{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),c=o+1,h=l+1,p=t/o,u=i/l,g=[],x=[],y=[],m=[];for(let d=0;d<h;d++){let E=d*u-s;for(let w=0;w<c;w++){let S=w*p-n;x.push(S,-E,0),y.push(0,0,1),m.push(w/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){let w=E+c*d,S=E+c*(d+1),A=E+1+c*(d+1),R=E+1+c*d;g.push(w,S,R),g.push(S,A,R)}this.setIndex(g),this.setAttribute("position",new ut(x,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yh(t.width,t.height,t.widthSegments,t.heightSegments)}},Eh=class bh extends ei{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],c=[],h=[],p=t,u=(i-t)/a,g=new G,x=new it;for(let y=0;y<=a;y++){for(let m=0;m<=r;m++){let d=n+m/r*s;g.x=p*Math.cos(d),g.y=p*Math.sin(d),l.push(g.x,g.y,g.z),c.push(0,0,1),x.x=(g.x/i+1)/2,x.y=(g.y/i+1)/2,h.push(x.x,x.y)}p+=u}for(let y=0;y<a;y++){let m=y*(r+1);for(let d=0;d<r;d++){let E=d+m,w=E,S=E+r+1,A=E+r+2,R=E+1;o.push(w,S,R),o.push(S,A,R)}}this.setIndex(o),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Th=class wh extends ei{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),c=0,h=[],p=new G,u=new G,g=[],x=[],y=[],m=[];for(let d=0;d<=r;d++){let E=[],w=d/r,S=s+w*o,A=t*Math.cos(S),R=Math.sqrt(t*t-A*A),f=0;d===0&&s===0?f=.5/i:d===r&&l===Math.PI&&(f=-.5/i);for(let M=0;M<=i;M++){let L=M/i,N=a+L*n;p.x=-R*Math.cos(N),p.y=A,p.z=R*Math.sin(N),x.push(p.x,p.y,p.z),u.copy(p).normalize(),y.push(u.x,u.y,u.z),m.push(L+f,1-w),E.push(c++)}h.push(E)}for(let d=0;d<r;d++)for(let E=0;E<i;E++){let w=h[d][E+1],S=h[d][E],A=h[d+1][E],R=h[d+1][E+1];(d!==0||s>0)&&g.push(w,S,R),(d!==r-1||l<Math.PI)&&g.push(S,A,R)}this.setIndex(g),this.setAttribute("position",new ut(x,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};Gd={clone:pa,merge:$t},Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nr=class extends ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pa(e.uniforms),this.uniformsGroups=Hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(r.value);break;case"v2":this.uniforms[i].value=new it().fromArray(r.value);break;case"v3":this.uniforms[i].value=new G().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Et().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wd=class extends Nr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qo=class extends ma{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=Ho,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xd=class extends ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jd=class extends ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ja=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qd=class extends ja{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Pl:a=e,s=2*t-i;break;case Nl:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Pl:n=e,o=2*i-t;break;case Nl:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*c,this._offsetNext=n*c}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,u=this._weightNext,g=(i-t)/(r-t),x=g*g,y=x*g,m=-p*y+2*p*x-p*g,d=(1+p)*y+(-1.5-2*p)*x+(-.5+p)*g+1,E=(-1-u)*y+(1.5+u)*x+.5*g,w=u*y-u*x;for(let S=0;S!==s;++S)a[S]=m*n[c+S]+d*n[l+S]+E*n[o+S]+w*n[h+S];return a}},Yd=class extends ja{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(i-t)/(r-t),h=1-c;for(let p=0;p!==s;++p)a[p]=n[l+p]*h+n[o+p]*c;return a}},Kd=class extends ja{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zd=class extends ja{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this.inTangents,h=this.outTangents;if(!c||!h){let g=(i-t)/(r-t),x=1-g;for(let y=0;y!==s;++y)a[y]=n[l+y]*x+n[o+y]*g;return a}let p=s*2,u=e-1;for(let g=0;g!==s;++g){let x=n[l+g],y=n[o+g],m=u*p+g*2,d=h[m],E=h[m+1],w=e*p+g*2,S=c[w],A=c[w+1],R=Qd(i,t,d,S,r);a[g]=Rh(R,x,E,A,y)}return a}};Wi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kr(t,this.TimeBufferType),this.values=Kr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Kr(e.times,Array),values:Kr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Nn(e.settings)&&(i.settings={inTangents:Kr(e.settings.inTangents,Array),outTangents:Kr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Kd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Yn:t=this.InterpolantFactoryMethodDiscrete;break;case Do:t=this.InterpolantFactoryMethodLinear;break;case Ms:t=this.InterpolantFactoryMethodSmooth;break;case Cl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return je("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yn;case this.InterpolantFactoryMethodLinear:return Do;case this.InterpolantFactoryMethodSmooth:return Ms;case this.InterpolantFactoryMethodBezier:return Cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;Nn(this.settings)&&(rc(this.settings.inTangents,e),rc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Nn(this.settings)&&(ac(this.settings.inTangents,e),ac(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){qe("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){qe("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&ld(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){qe("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ms,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],c=e[s+1];if(l!==c&&(s!==1||l!==e[0]))if(r)o=!0;else{let h=s*i,p=h-i,u=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[p+g]||x!==t[u+g]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let h=s*i,p=n*i;for(let u=0;u!==i;++u)t[p+u]=t[h+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Nn(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};Wi.prototype.ValueTypeName="";Wi.prototype.TimeBufferType=Float32Array;Wi.prototype.ValueBufferType=Float32Array;Wi.prototype.DefaultInterpolation=Do;qa=class extends Wi{constructor(e,t,i){super(e,t,i)}};qa.prototype.ValueTypeName="bool";qa.prototype.ValueBufferType=Array;qa.prototype.DefaultInterpolation=Yn;qa.prototype.InterpolantFactoryMethodLinear=void 0;qa.prototype.InterpolantFactoryMethodSmooth=void 0;$d=class extends Wi{constructor(e,t,i,r){super(e,t,i,r)}};$d.prototype.ValueTypeName="color";ep=class extends Wi{constructor(e,t,i,r){super(e,t,i,r)}};ep.prototype.ValueTypeName="number";tp=class extends ja{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let c=l+s;l!==c;l+=4)Dr.slerpFlat(a,0,n,l-s,n,l,o);return a}},Ch=class extends Wi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new tp(this.times,this.values,this.getValueSize(),e)}};Ch.prototype.ValueTypeName="quaternion";Ch.prototype.InterpolantFactoryMethodSmooth=void 0;Ya=class extends Wi{constructor(e,t,i){super(e,t,i)}};Ya.prototype.ValueTypeName="string";Ya.prototype.ValueBufferType=Array;Ya.prototype.DefaultInterpolation=Yn;Ya.prototype.InterpolantFactoryMethodLinear=void 0;Ya.prototype.InterpolantFactoryMethodSmooth=void 0;ip=class extends Wi{constructor(e,t,i,r){super(e,t,i,r)}};ip.prototype.ValueTypeName="vector";rp=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){s++,a===!1&&r.onStart!==void 0&&r.onStart(c,n,s),a=!0},this.itemEnd=function(c){n++,r.onProgress!==void 0&&r.onProgress(c,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,p=l.length;h<p;h+=2){let u=l[h],g=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ap=new rp,np=class{constructor(e){this.manager=e!==void 0?e:ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};np.DEFAULT_MATERIAL_NAME="__DEFAULT";Lh=class extends Jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ph=class extends Lh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Xs=new Et,nc=new G,sc=new G,sp=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(nc),sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Xs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Xs,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===Va||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(Xs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},In=new G,Dn=new Dr,Fi=new G,Nh=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(In,Dn,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(In,Dn,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(In,Dn,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(In,Dn,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hr=new G,oc=new it,lc=new it,vi=class extends Nh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,oc,lc),t.subVectors(lc,oc)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Es*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ih=class extends Nh{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},op=class extends sp{constructor(){super(new Ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dh=class extends Lh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new op}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Zr=-90,Jr=1,Bo=class extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new vi(Zr,Jr,e,t);r.layers=this.layers,this.add(r);let a=new vi(Zr,Jr,e,t);a.layers=this.layers,this.add(a);let n=new vi(Zr,Jr,e,t);n.layers=this.layers,this.add(n);let s=new vi(Zr,Jr,e,t);s.layers=this.layers,this.add(s);let o=new vi(Zr,Jr,e,t);o.layers=this.layers,this.add(o);let l=new vi(Zr,Jr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,c]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,p,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},lp=class extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},$o="\\[\\]\\.:\\/",cp=new RegExp("["+$o+"]","g"),el="[^"+$o+"]",hp="[^"+$o.replace("\\.","")+"]",up=/((?:WC+[\/:])*)/.source.replace("WC",el),dp=/(WCOD+)?/.source.replace("WCOD",hp),pp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",el),fp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",el),mp=new RegExp("^"+up+dp+pp+fp+"$"),gp=["material","materials","bones","map"],_p=class{constructor(e,t,i){let r=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},At=class ea{constructor(t,i,r){this.path=i,this.parsedPath=r||ea.parseTrackName(i),this.node=ea.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new ea.Composite(t,i,r):new ea(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cp,"")}static parseTrackName(t){let i=mp.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);gp.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=ea.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=i.objectIndex;switch(r){case"materials":if(!t.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(c!==void 0){if(t[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[a];if(s===void 0){let c=i.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=_p;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];W_=new Float32Array(1),X_=(oa=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},oa.prototype.isMatrix2=!0,oa);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
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
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
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
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rp=`#ifdef USE_BATCHING
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
#endif`,Cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kp=`#define PI 3.141592653589793
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
} // validated`,Wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,of=`#ifdef USE_GRADIENTMAP
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
}`,lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,df=`#ifdef USE_ENVMAP
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
#endif`,pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_f=`PhysicalMaterial material;
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
#endif`,vf=`uniform sampler2D dfgLUT;
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
}`,xf=`
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
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lf=`#if defined( USE_POINTS_UV )
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
#endif`,Pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,If=`#ifdef USE_INSTANCING_MORPH
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
#endif`,Uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`#ifdef USE_MORPHTARGETS
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
#endif`,Ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
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
#endif`,Wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nm=`float getShadowMask() {
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
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`uniform float backgroundBlurriness;
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
}`,bm=`varying vec3 vWorldDirection;
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
}`,wm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`#define DISTANCE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Om=`#define LAMBERT
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
}`,Fm=`#define LAMBERT
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define MATCAP
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
}`,Hm=`#define NORMAL
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
}`,Gm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,km=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define STANDARD
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
}`,jm=`#define TOON
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
}`,qm=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Jm=`uniform vec3 color;
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
}`,Qm=`uniform float rotation;
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
}`,$m=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Sp,alphahash_pars_fragment:Mp,alphamap_fragment:yp,alphamap_pars_fragment:Ep,alphatest_fragment:bp,alphatest_pars_fragment:Tp,aomap_fragment:wp,aomap_pars_fragment:Ap,batching_pars_vertex:Rp,batching_vertex:Cp,begin_vertex:Lp,beginnormal_vertex:Pp,bsdfs:Np,iridescence_fragment:Ip,bumpmap_pars_fragment:Dp,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:Bp,color_fragment:zp,color_pars_fragment:Hp,color_pars_vertex:Gp,color_vertex:Vp,common:kp,defaultnormal_vertex:Wp,displacementmap_pars_vertex:Xp,displacementmap_vertex:jp,emissivemap_fragment:qp,emissivemap_pars_fragment:Yp,colorspace_fragment:Kp,colorspace_pars_fragment:Zp,envmap_fragment:Jp,envmap_common_pars_fragment:Qp,envmap_pars_fragment:$p,envmap_pars_vertex:ef,envmap_physical_pars_fragment:df,envmap_vertex:tf,fog_vertex:rf,fog_pars_vertex:af,fog_fragment:nf,fog_pars_fragment:sf,gradientmap_pars_fragment:of,lightmap_pars_fragment:lf,lights_lambert_fragment:cf,lights_lambert_pars_fragment:hf,lights_pars_begin:uf,lights_toon_fragment:pf,lights_toon_pars_fragment:ff,lights_phong_fragment:mf,lights_phong_pars_fragment:gf,lights_physical_fragment:_f,lights_physical_pars_fragment:vf,lights_fragment_begin:xf,lights_fragment_maps:Sf,lights_fragment_end:Mf,lightprobes_pars_fragment:yf,logdepthbuf_fragment:Ef,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:wf,map_fragment:Af,map_pars_fragment:Rf,map_particle_fragment:Cf,map_particle_pars_fragment:Lf,metalnessmap_fragment:Pf,metalnessmap_pars_fragment:Nf,morphinstance_vertex:If,morphcolor_vertex:Df,morphnormal_vertex:Uf,morphtarget_pars_vertex:Of,morphtarget_vertex:Ff,normal_fragment_begin:Bf,normal_fragment_maps:zf,normal_pars_fragment:Hf,normal_pars_vertex:Gf,normal_vertex:Vf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:Wf,clearcoat_normal_fragment_maps:Xf,clearcoat_pars_fragment:jf,iridescence_pars_fragment:qf,opaque_fragment:Yf,packing:Kf,premultiplied_alpha_fragment:Zf,project_vertex:Jf,dithering_fragment:Qf,dithering_pars_fragment:$f,roughnessmap_fragment:em,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:im,shadowmap_pars_vertex:rm,shadowmap_vertex:am,shadowmask_pars_fragment:nm,skinbase_vertex:sm,skinning_pars_vertex:om,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:hm,specularmap_pars_fragment:um,tonemapping_fragment:dm,tonemapping_pars_fragment:pm,transmission_fragment:fm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:_m,uv_vertex:vm,worldpos_vertex:xm,background_vert:Sm,background_frag:Mm,backgroundCube_vert:ym,backgroundCube_frag:Em,cube_vert:bm,cube_frag:Tm,depth_vert:wm,depth_frag:Am,distance_vert:Rm,distance_frag:Cm,equirect_vert:Lm,equirect_frag:Pm,linedashed_vert:Nm,linedashed_frag:Im,meshbasic_vert:Dm,meshbasic_frag:Um,meshlambert_vert:Om,meshlambert_frag:Fm,meshmatcap_vert:Bm,meshmatcap_frag:zm,meshnormal_vert:Hm,meshnormal_frag:Gm,meshphong_vert:Vm,meshphong_frag:km,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:jm,meshtoon_frag:qm,points_vert:Ym,points_frag:Km,shadow_vert:Zm,shadow_frag:Jm,sprite_vert:Qm,sprite_frag:$m},Ce={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},zi={basic:{uniforms:$t([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:$t([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:$t([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:$t([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:$t([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:$t([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:$t([Ce.points,Ce.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:$t([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:$t([Ce.common,Ce.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:$t([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:$t([Ce.sprite,Ce.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:$t([Ce.common,Ce.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:$t([Ce.lights,Ce.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};zi.physical={uniforms:$t([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};Un={r:0,b:0,g:0},eg=new Et,Oh=new Ze;Oh.set(-1,0,0,0,1,0,0,0,1);tl=class extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _r(5,5,5),a=new Nr({name:"CubemapFromEquirect",uniforms:pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:oi,blending:ta});a.uniforms.tEquirect.value=t;let n=new mt(r,a),s=t.minFilter;return t.minFilter===pr&&(t.minFilter=si),new Bo(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},hc=256,sg=3,og=20,Fh=256,Bh=16,lg=3,cg=new G,hg=new Ke,uc=class zh{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bo(1,10,null),this._boxMesh=new mt(new _r(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,r=.1,a=100,n={}){let{size:s=256,position:o=cg}=n,l=this._renderer;this._setSize(s);let c=this._allocateTarget(),h=this._getSourceTarget(!0);i>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,g=l.autoClearDepth,x=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(hg));let m=new Bo(r,a,h);return m.position.copy(o),m.update(l,t),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=g,l.autoClearStencil=x,t.background=y,i>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,i)),this._applyPMREM(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(hc,pd(t))}_fromTexture(t,i){t.mapping===la||t.mapping===Ha?this._setSize(t.image.length===0?hc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let r=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(r),r}_allocateTarget(){let t=this._cubeSize,i=dc(t,!1,!1),r=Math.log2(t)-sg;for(let a=0;a<=r;a++)i.texture.mipmaps.push({width:t>>a,height:t>>a});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){let i=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==i||t&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=dc(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,r){let a=this._boxMesh,n=this._cubeCamera;a.material=r,n.renderTarget=t,n.activeMipmapLevel=i;let s=t.width>>i;t.viewport.set(0,0,s,s),n.update(this._renderer,a),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===la||t.mapping===Ha?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pc()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ug(),this._integrationMaterial=dg());let i=this._cubeSize,r=t.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(i/Bh);for(let s=0;s<=r;s++){let o=zh.lodToRoughness(s,r);if(s>r-lg)n.roughness.value=o,this._renderCube(t,s,this._integrationMaterial);else{let l=o>0?Math.log2(i)+.5*Math.log2(6/(Fh*Math.pow(o,4)))+.5:0;a.roughness.value=o,a.lodBias.value=l,this._renderCube(t,s,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=pg());let r=this._blurMaterial,a=r.uniforms,n=this._sourceTarget;a.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,a.envMap.value=n.texture,this._renderCube(t,0,r),a.envMap.value=t.texture,this._renderCube(n,0,r)}};Mg={[Dc]:"LINEAR_TONE_MAPPING",[Uc]:"REINHARD_TONE_MAPPING",[Oc]:"CINEON_TONE_MAPPING",[Fc]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[Hc]:"NEUTRAL_TONE_MAPPING",[Bc]:"CUSTOM_TONE_MAPPING"};Hh=new Si,Gh=new da(1,1),Vh=new fh(1),kh=new Qc,Wh=new Md,Xh=new dh,mc=[],gc=[],_c=new Float32Array(16),vc=new Float32Array(9),xc=new Float32Array(4);c0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vg(t.type)}},h0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l0(t.type)}},u0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},js=/(\w+)(\])?(\[|\.)?/g;Xn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);d0(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};p0=37297,f0=0;yc=new Ze;v0={[Dc]:"Linear",[Uc]:"Reinhard",[Oc]:"Cineon",[Fc]:"ACESFilmic",[zc]:"AgX",[Hc]:"Neutral",[Bc]:"Custom"};On=new G;b0=/^[ \t]*#include +<([\w\d./]+)>/gm;w0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;R0={[Fn]:"SHADOWMAP_TYPE_PCF",[Oa]:"SHADOWMAP_TYPE_VSM"};L0={[Ha]:"ENVMAP_MODE_REFRACTION"};N0={[Ho]:"ENVMAP_BLENDING_MULTIPLY",[Ku]:"ENVMAP_BLENDING_MIX",[Zu]:"ENVMAP_BLENDING_ADD"};U0=0,O0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new F0(e),t.set(e,i)),i}},F0=class{constructor(e){this.id=U0++,this.code=e,this.usedTimes=0}};X0=0;K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`,J0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Q0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Pc=new Et,Ua=new G,qs=new G;r_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a_=`
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

}`,n_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new mh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Nr({vertexShader:r_,fragmentShader:a_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},s_=class extends Ir{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,c=null,h=null,p=null,u=null,g=null,x=typeof XRWebGLBinding<"u",y=new n_,m={},d=t.getContextAttributes(),E=null,w=null,S=[],A=[],R=new it,f=null,M=null,L=new vi;L.viewport=new Lt;let N=new vi;N.viewport=new Lt;let O=[L,N],C=new lp,Q=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=S[ee];return fe===void 0&&(fe=new Ls,S[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=S[ee];return fe===void 0&&(fe=new Ls,S[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=S[ee];return fe===void 0&&(fe=new Ls,S[ee]=fe),fe.getHandSpace()};function X(ee){let fe=A.indexOf(ee.inputSource);if(fe===-1)return;let Ne=S[fe];Ne!==void 0&&(Ne.update(ee.inputSource,ee.frame,l||n),Ne.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ae(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",W);for(let ee=0;ee<S.length;ee++){let fe=A[ee];fe!==null&&(A[ee]=null,S[ee].disconnect(fe))}Q=null,I=null,y.reset();for(let ee in m)delete m[ee];if(e.setRenderTarget(E),u=null,p=null,h=null,r=null,w=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(f),e.setSize(R.width,R.height,!1),M!==null){let ee=M.camera;ee.fov=M.fov,ee.zoom=M.zoom,ee.updateProjectionMatrix(),M=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){s=ee,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",W),d.xrCompatible!==!0&&await t.makeXRCompatible(),f=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ne=null,ze=null;d.depth&&(ze=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=d.stencil?fr:gr,Ne=d.stencil?ca:Vi);let Ge={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:a};h=this.getBinding(),p=h.createProjectionLayer(Ge),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new Gi(p.textureWidth,p.textureHeight,{format:Hi,type:fi,depthTexture:new da(p.textureWidth,p.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let fe={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new Gi(u.framebufferWidth,u.framebufferHeight,{format:Hi,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(ee){for(let fe=0;fe<ee.removed.length;fe++){let Ne=ee.removed[fe],ze=A.indexOf(Ne);ze>=0&&(A[ze]=null,S[ze].disconnect(Ne))}for(let fe=0;fe<ee.added.length;fe++){let Ne=ee.added[fe],ze=A.indexOf(Ne);if(ze===-1){for(let Ee=0;Ee<S.length;Ee++)if(Ee>=A.length){A.push(Ne),ze=Ee;break}else if(A[Ee]===null){A[Ee]=Ne,ze=Ee;break}if(ze===-1)break}let Ge=S[ze];Ge&&Ge.connect(Ne)}}function ye(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let fe=ee.near,Ne=ee.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(Ne=y.depthFar)),C.near=N.near=L.near=fe,C.far=N.far=L.far=Ne,(Q!==C.near||I!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),Q=C.near,I=C.far),C.layers.mask=ee.layers.mask|6,L.layers.mask=C.layers.mask&-5,N.layers.mask=C.layers.mask&-3;let ze=ee.parent,Ge=C.cameras;ye(C,ze);for(let Ee=0;Ee<Ge.length;Ee++)ye(Ge[Ee],ze);C.projectionMatrix.copy(L.projectionMatrix),C.projectionMatrixInverse.copy(L.projectionMatrixInverse),M===null&&ee.isPerspectiveCamera&&(M={camera:ee,fov:ee.fov,zoom:ee.zoom}),Z(ee,C,ze)};function Z(ee,fe,Ne){Ne===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Ne.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Oo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&u===null))return o},this.setFoveation=function(ee){o=ee,p!==null&&(p.fixedFoveation=ee),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(C)},this.getCameraTexture=function(ee){return m[ee]};let J=null;function ue(ee,fe){if(c=fe.getViewerPose(l||n),g=fe,c!==null){let Ne=c.views;u!==null&&(e.setRenderTargetFramebuffer(w,u.framebuffer),e.setRenderTarget(w));let ze=!1;Ne.length!==C.cameras.length&&(C.cameras.length=0,ze=!0);for(let Ee=0;Ee<Ne.length;Ee++){let Je=Ne[Ee],rt=null;if(u!==null)rt=u.getViewport(Je);else{let Rt=h.getViewSubImage(p,Je);rt=Rt.viewport,Ee===0&&(e.setRenderTargetTextures(w,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(w))}let De=O[Ee];De===void 0&&(De=new vi,De.layers.enable(Ee),De.viewport=new Lt,O[Ee]=De),De.matrix.fromArray(Je.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Je.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(rt.x,rt.y,rt.width,rt.height),Ee===0&&(C.matrix.copy(De.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ze===!0&&C.cameras.push(De)}let Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let Ee=h.getDepthInformation(Ne[0]);Ee&&Ee.isValid&&Ee.texture&&y.init(Ee,r.renderState)}if(Ge&&Ge.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Ee=0;Ee<Ne.length;Ee++){let Je=Ne[Ee].camera;if(Je){let rt=m[Je];rt||(rt=new mh,m[Je]=rt);let De=h.getCameraImage(Je);rt.sourceTexture=De}}}}for(let Ne=0;Ne<S.length;Ne++){let ze=A[Ne],Ge=S[Ne];ze!==null&&Ge!==void 0&&Ge.update(ze,fe,l||n)}J&&J(ee,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}let Ie=new Uh;Ie.setAnimationLoop(ue),this.setAnimationLoop=function(ee){J=ee},this.dispose=function(){}}},o_=new Et,jh=new Ze;jh.set(-1,0,0,0,1,0,0,0,1);h_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;qh=class{constructor(e={}){let{canvas:t=cd(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1,outputBufferType:u=fi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=n;let x=u,y=new Set([qo,jo,Xo]),m=new Set([fi,Vi,Ga,ca,Vo,ko]),d=new Uint32Array(4),E=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},S=null,A=null,R=[],f=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,N=!1,O=null,C=null,Q=null,I=null;this._outputColorSpace=_i;let X=0,ae=0,W=null,ye=-1,Z=null,J=new Lt,ue=new Lt,Ie=null,ee=new Ke(0),fe=0,Ne=t.width,ze=t.height,Ge=1,Ee=null,Je=null,rt=new Lt(0,0,Ne,ze),De=new Lt(0,0,Ne,ze),Rt=!1,Nt=new ka,Dt=new Bd,Tt=!1,zt=!1,Qt=new Et,wt=new G,Mt=new Lt,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function ai(){return W===null?Ge:1}let B=i;function hi(v,D){return t.getContext(v,D)}let ht,Ct,Re,dt,Ve,ke,Ut,T,_,V,ce,ie,Me,ve,F,ne,re,P,Y,se,pe,be,ge;try{let v={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",tt,!1),B===null){let D="webgl2";if(B=hi(D,v),B===null)throw hi(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(v){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),qe("WebGLRenderer: "+v.message),v}function Oe(){ht=new mg(B),ht.init(),pe=new i_(B,ht),Ct=new ag(B,ht,e,pe),Re=new e_(B,ht),Ct.reversedDepthBuffer&&p&&Re.buffers.depth.setReversed(!0),C=B.createFramebuffer(),Q=B.createFramebuffer(),I=B.createFramebuffer(),dt=new vg(B),Ve=new H0,ke=new t_(B,ht,Re,Ve,Ct,pe,dt),Ut=new fg(L),T=new xp(B),be=new ig(B,T),_=new gg(B,T,dt,be),V=new Sg(B,_,T,be,dt),P=new xg(B,Ct,ke),F=new ng(Ve),ce=new z0(L,Ut,ht,Ct,be,F),ie=new l_(L,Ve),Me=new V0,ve=new Y0(ht),re=new tg(L,Ut,Re,V,g,o),ne=new $0(L,V,Ct),ge=new c_(B,dt,Ct,Re),Y=new rg(B,ht,dt),se=new _g(B,ht,dt),dt.programs=ce.programs,L.capabilities=Ct,L.extensions=ht,L.properties=Ve,L.renderLists=Me,L.shadowMap=ne,L.state=Re,L.info=dt}x!==fi&&(M=new yg(x,t.width,t.height,s,r,a));let he=new s_(L,B);this.xr=he,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let v=ht.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ht.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(v){v!==void 0&&(Ge=v,this.setSize(Ne,ze,!1))},this.getSize=function(v){return v.set(Ne,ze)},this.setSize=function(v,D,q=!0){if(he.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=v,ze=D,t.width=Math.floor(v*Ge),t.height=Math.floor(D*Ge),q===!0&&(t.style.width=v+"px",t.style.height=D+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(Ne*Ge,ze*Ge).floor()},this.setDrawingBufferSize=function(v,D,q){Ne=v,ze=D,Ge=q,t.width=Math.floor(v*q),t.height=Math.floor(D*q),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(x===fi){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(J)},this.getViewport=function(v){return v.copy(rt)},this.setViewport=function(v,D,q,z){v.isVector4?rt.set(v.x,v.y,v.z,v.w):rt.set(v,D,q,z),Re.viewport(J.copy(rt).multiplyScalar(ai()).round())},this.getScissor=function(v){return v.copy(De)},this.setScissor=function(v,D,q,z){v.isVector4?De.set(v.x,v.y,v.z,v.w):De.set(v,D,q,z),Re.scissor(ue.copy(De).multiplyScalar(ai()).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(v){Re.setScissorTest(Rt=v)},this.setOpaqueSort=function(v){Ee=v},this.setTransparentSort=function(v){Je=v},this.getClearColor=function(v){return v.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,q=!0){let z=0;if(v){let k=!1;if(W!==null){let le=W.texture.format;k=y.has(le)}if(k){let le=W.texture.type,Ae=m.has(le),Te=re.getClearColor(),Pe=re.getClearAlpha(),Be=Te.r,Ye=Te.g,at=Te.b;Ae?(d[0]=Be,d[1]=Ye,d[2]=at,d[3]=Pe,B.clearBufferuiv(B.COLOR,0,d)):(E[0]=Be,E[1]=Ye,E[2]=at,E[3]=Pe,B.clearBufferiv(B.COLOR,0,E))}else z|=B.COLOR_BUFFER_BIT}D&&(z|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&B.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),re.dispose(),Me.dispose(),ve.dispose(),ke.dispose(),Ve.dispose(),Ut.dispose(),V.dispose(),_.dispose(),be.dispose(),ge.dispose(),ce.dispose(),he.dispose(),he.removeEventListener("sessionstart",nn),he.removeEventListener("sessionend",Mr),Xi.stop()};function We(v){v.preventDefault(),Ul("WebGLRenderer: Context Lost."),N=!0}function He(){Ul("WebGLRenderer: Context Restored."),N=!1;let v=dt.autoReset,D=ne.enabled,q=ne.autoUpdate,z=ne.needsUpdate,k=ne.type;Oe(),dt.autoReset=v,ne.enabled=D,ne.autoUpdate=q,ne.needsUpdate=z,ne.type=k}function tt(v){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function we(v){let D=v.target;D.removeEventListener("dispose",we),ot(D)}function ot(v){gt(v),Ve.remove(v)}function gt(v){let D=Ve.get(v).programs;D!==void 0&&(D.forEach(function(q){ce.releaseProgram(q)}),v.isShaderMaterial&&ce.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,q,z,k,le){D===null&&(D=qt);let Ae=k.isMesh&&k.matrixWorld.determinantAffine()<0,Te=br(v,D,q,z,k);Re.setMaterial(z,Ae);let Pe=q.index,Be=1;if(z.wireframe===!0){if(Pe=_.getWireframeAttribute(q),Pe===void 0)return;Be=2}let Ye=q.drawRange,at=q.attributes.position,Le=Ye.start*Be,et=(Ye.start+Ye.count)*Be;le!==null&&(Le=Math.max(Le,le.start*Be),et=Math.min(et,(le.start+le.count)*Be)),Pe!==null?(Le=Math.max(Le,0),et=Math.min(et,Pe.count)):at!=null&&(Le=Math.max(Le,0),et=Math.min(et,at.count));let _t=et-Le;if(_t<0||_t===1/0)return;be.setup(k,z,Te,q,Pe);let lt,pt=Y;if(Pe!==null&&(lt=T.get(Pe),pt=se,pt.setIndex(lt)),k.isMesh)z.wireframe===!0?(Re.setLineWidth(z.wireframeLinewidth*ai()),pt.setMode(B.LINES)):pt.setMode(B.TRIANGLES);else if(k.isLine){let yt=z.linewidth;yt===void 0&&(yt=1),Re.setLineWidth(yt*ai()),k.isLineSegments?pt.setMode(B.LINES):k.isLineLoop?pt.setMode(B.LINE_LOOP):pt.setMode(B.LINE_STRIP)}else k.isPoints?pt.setMode(B.POINTS):k.isSprite&&pt.setMode(B.TRIANGLES);if(k.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))pt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let yt=k._multiDrawStarts,Ue=k._multiDrawCounts,Vt=k._multiDrawCount,b=Pe?T.get(Pe).bytesPerElement:1,U=Ve.get(z).currentProgram.getUniforms();for(let H=0;H<Vt;H++)U.setValue(B,"_gl_DrawID",H),pt.render(yt[H]/b,Ue[H])}else if(k.isInstancedMesh)pt.renderInstances(Le,_t,k.count);else if(q.isInstancedBufferGeometry){let yt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ue=Math.min(q.instanceCount,yt);pt.renderInstances(Le,_t,Ue)}else pt.render(Le,_t)};function Sr(v,D,q,z){O!==null&&v.isNodeMaterial&&O.setObject(z,v),Tt===!0&&F.setState(v,q,!1),v.transparent===!0&&v.side===Ci&&v.forceSinglePass===!1?(v.side=oi,v.needsUpdate=!0,Er(v,D,z),v.side=Lr,v.needsUpdate=!0,Er(v,D,z),v.side=Ci):Er(v,D,z)}this.compile=function(v,D,q=null){q===null&&(q=v),O!==null&&O.renderStart(v,D,q),A=ve.get(q),A.init(D),f.push(A),q.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),v!==q&&v.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights(),O!==null&&O.updateLights(A.state.lightsArray),zt=this.localClippingEnabled,Tt=F.init(this.clippingPlanes,zt),Tt===!0&&F.setGlobalState(this.clippingPlanes,D),O!==null&&ne.render(A.state.shadowsArray,q,D);let z=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let le=k.material;if(le)if(Array.isArray(le))for(let Ae=0;Ae<le.length;Ae++){let Te=le[Ae];Sr(Te,q,D,k),z.add(Te)}else Sr(le,q,D,k),z.add(le)}),A=f.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(v,D,q=null){let z=this.compile(v,D,q);return new Promise(k=>{function le(){if(z.forEach(function(Ae){let Te=Ve.get(Ae).currentProgram;(Te===void 0||Te.isReady())&&z.delete(Ae)}),z.size===0){k(v);return}setTimeout(le,10)}ht.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ma=null;function an(v){Ma&&Ma(v)}function nn(){Xi.stop()}function Mr(){Xi.start()}let Xi=new Uh;Xi.setAnimationLoop(an),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(v){Ma=v,he.setAnimationLoop(v),v===null?Xi.stop():Xi.start()},he.addEventListener("sessionstart",nn),he.addEventListener("sessionend",Mr),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(v,D);let q=he.enabled===!0&&he.isPresenting===!0,z=M!==null&&(W===null||q)&&M.begin(L,W);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(D),D=he.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,D,W),A=ve.get(v,f.length),A.init(D),A.state.textureUnits=ke.getTextureUnits(),f.push(A),Qt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Dt.setFromArrayCamera(D):Nt.setFromProjectionMatrix(Qt,Pi,D.reversedDepth),zt=this.localClippingEnabled,Tt=F.init(this.clippingPlanes,zt),S=Me.get(v,R.length),S.init(),R.push(S),this.info.render.frame++,he.enabled===!0&&he.isPresenting===!0){let le=L.xr.getDepthSensingMesh();le!==null&&ya(le,D,-1/0,L.sortObjects)}ya(v,D,0,L.sortObjects),S.finish(),O!==null&&O.updateLights(A.state.lightsArray),L.sortObjects===!0&&S.sort(Ee,Je),Gt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Gt&&re.addToRenderList(S,v),this.info.autoReset===!0&&this.info.reset(),Tt===!0&&F.beginShadows();let k=A.state.shadowsArray;if(ne.render(k,v,D),Tt===!0&&F.endShadows(),(z&&M.hasRenderPass())===!1){let le=S.opaque,Ae=S.transmissive;if(A.setupLights(),D.isArrayCamera){let Te=D.cameras;if(Ae.length>0)for(let Pe=0,Be=Te.length;Pe<Be;Pe++){let Ye=Te[Pe];ji(le,Ae,v,Ye)}Gt&&re.render(v);for(let Pe=0,Be=Te.length;Pe<Be;Pe++){let Ye=Te[Pe];ar(S,v,Ye,Ye.viewport)}}else Ae.length>0&&ji(le,Ae,v,D),Gt&&re.render(v),ar(S,v,D)}W!==null&&ae===0&&(ke.updateMultisampleRenderTarget(W),ke.updateRenderTargetMipmap(W)),z&&M.end(L),v.isScene===!0&&v.onAfterRender(L,v,D),be.resetDefaultState(),ye=-1,Z=null,f.pop(),f.length>0?(A=f[f.length-1],ke.setTextureUnits(A.state.textureUnits),Tt===!0&&F.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,O!==null&&O.renderEnd()};function ya(v,D,q,z){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){let le=D.isArrayCamera?Dt:Nt;if(!v.frustumCulled||v.intersectsFrustum(le)){z&&Mt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Qt);let Ae=V.update(v),Te=v.material;Te.visible&&S.push(v,Ae,Te,q,Mt.z,null,D)}}else if(v.isMesh||v.isLine||v.isPoints){let le=D.isArrayCamera?Dt:Nt;if(!v.frustumCulled||v.intersectsFrustum(le)){let Ae=V.update(v),Te=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Mt.copy(v.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Mt.copy(Ae.boundingSphere.center)),Mt.applyMatrix4(v.matrixWorld).applyMatrix4(Qt)),Array.isArray(Te)){let Pe=Ae.groups;for(let Be=0,Ye=Pe.length;Be<Ye;Be++){let at=Pe[Be],Le=Te[at.materialIndex];Le&&Le.visible&&S.push(v,Ae,Le,q,Mt.z,at,D)}}else Te.visible&&S.push(v,Ae,Te,q,Mt.z,null,D)}}}let k=v.children;for(let le=0,Ae=k.length;le<Ae;le++)ya(k[le],D,q,z)}function ar(v,D,q,z){let{opaque:k,transmissive:le,transparent:Ae}=v;A.setupLightsView(q),Tt===!0&&F.setGlobalState(L.clippingPlanes,q),z&&Re.viewport(J.copy(z)),k.length>0&&yr(k,D,q),le.length>0&&yr(le,D,q),Ae.length>0&&yr(Ae,D,q),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function ji(v,D,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){let at=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new Gi(1,1,{generateMipmaps:!0,type:at?ki:fi,minFilter:pr,samples:Math.max(4,Ct.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let k=A.state.transmissionRenderTarget[z.id],le=z.viewport||J;k.setSize(le.z*L.transmissionResolutionScale,le.w*L.transmissionResolutionScale);let Ae=L.getRenderTarget(),Te=L.getActiveCubeFace(),Pe=L.getActiveMipmapLevel();L.setRenderTarget(k),L.getClearColor(ee),fe=L.getClearAlpha(),fe<1&&L.setClearColor(16777215,.5),L.clear(),Gt&&re.render(q);let Be=L.toneMapping;L.toneMapping=$i;let Ye=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),Tt===!0&&F.setGlobalState(L.clippingPlanes,z),yr(v,q,z),ke.updateMultisampleRenderTarget(k),ke.updateRenderTargetMipmap(k),ht.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Le=0,et=D.length;Le<et;Le++){let _t=D[Le],{object:lt,geometry:pt,material:yt,group:Ue}=_t;if(yt.side===Ci&&lt.layers.test(z.layers)){let Vt=yt.side;yt.side=oi,yt.needsUpdate=!0,bi(lt,q,z,pt,yt,Ue),yt.side=Vt,yt.needsUpdate=!0,at=!0}}at===!0&&(ke.updateMultisampleRenderTarget(k),ke.updateRenderTargetMipmap(k))}L.setRenderTarget(Ae,Te,Pe),L.setClearColor(ee,fe),Ye!==void 0&&(z.viewport=Ye),L.toneMapping=Be}function yr(v,D,q){let z=D.isScene===!0?D.overrideMaterial:null;for(let k=0,le=v.length;k<le;k++){let Ae=v[k],{object:Te,geometry:Pe,group:Be}=Ae,Ye=Ae.material;Ye.allowOverride===!0&&z!==null&&(Ye=z),Te.layers.test(q.layers)&&bi(Te,D,q,Pe,Ye,Be)}}function bi(v,D,q,z,k,le){O!==null&&k.isNodeMaterial&&O.setObject(v,k),v.onBeforeRender(L,D,q,z,k,le),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(L,D,q,z,v,le),k.transparent===!0&&k.side===Ci&&k.forceSinglePass===!1?(k.side=oi,k.needsUpdate=!0,L.renderBufferDirect(q,D,z,k,v,le),k.side=Lr,k.needsUpdate=!0,L.renderBufferDirect(q,D,z,k,v,le),k.side=Ci):L.renderBufferDirect(q,D,z,k,v,le),v.onAfterRender(L,D,q,z,k,le)}function Ea(v){let D=0;for(let q of v)q.texture!==null&&D++;return D}function Er(v,D,q){D.isScene!==!0&&(D=qt);let z=Ve.get(v),k=A.state.lights,le=A.state.shadowsArray,Ae=k.state.version,Te=ce.getParameters(v,k.state,le,D,q,A.state.lightProbeGridArray),Pe=ce.getProgramCacheKey(Te),Be=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let Ye=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=Ut.get(v.envMap||z.environment,Ye),z.envMapRotation=z.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Be===void 0&&(v.addEventListener("dispose",we),Be=new Map,z.programs=Be,z.programVariants=new Map);let at=Be.get(Pe);if(at!==void 0){if(z.currentProgram===at&&z.lightsStateVersion===Ae)return cs(v,Te),at}else Te.uniforms=ce.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,q,Te),v.onBeforeCompile(Te,L),at=ce.acquireProgram(Te,Pe),Be.set(Pe,at),z.uniforms=Te.uniforms;let Le=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Le.clippingPlanes=F.uniform),cs(v,Te),z.needsLights=Ti(v),z.lightsStateVersion=Ae,z.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.sunLights.value=k.state.sun,Le.sunLightShadows.value=k.state.sunShadow,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.sunShadowMatrix.value=k.state.sunShadowMatrix,Le.sunShadowCascade.value=k.state.sunShadowCascade,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),z.numLightProbeGrids=Ea(A.state.lightProbeGridArray),z.currentProgram=at,z.uniformsList=null,at}function ls(v,D,q,z,k){let le=Ve.get(v),Ae=le.currentProgram.id+","+z+","+k,Te=le.programVariants.get(Ae);return Te===void 0?(Te=Er(v,D,q),le.programVariants.set(Ae,Te)):(le.currentProgram=Te,le.uniformsList=null,le.outputColorSpace=z,le.toneMapping=k),Te}function sn(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=Xn.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function cs(v,D){let q=Ve.get(v);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function br(v,D,q,z,k){D.isScene!==!0&&(D=qt),ke.resetTextureUnits();let le=D.fog,Ae=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,Te=W===null?L.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:nt.workingColorSpace,Pe=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Be=Ut.get(z.envMap||Ae,Pe),Ye=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,at=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Le=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,_t=!!q.morphAttributes.color,lt=$i;z.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(lt=L.toneMapping);let pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,yt=pt!==void 0?pt.length:0,Ue=Ve.get(z),Vt=A.state.lights;if(Tt===!0&&(zt===!0||v!==Z)){let _e=v===Z&&z.id===ye;F.setState(z,v,_e)}let b=!1,U=!1;z.version===Ue.__version?Ue.needsLights&&Ue.lightsStateVersion!==Vt.state.version||k.isBatchedMesh&&Ue.batching===!1||!k.isBatchedMesh&&Ue.batching===!0||k.isBatchedMesh&&Ue.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Ue.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Ue.instancing===!1||!k.isInstancedMesh&&Ue.instancing===!0||k.isSkinnedMesh&&Ue.skinning===!1||!k.isSkinnedMesh&&Ue.skinning===!0||k.isInstancedMesh&&Ue.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ue.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ue.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ue.instancingMorph===!1&&k.morphTexture!==null||Ue.envMap!==Be||z.fog===!0&&Ue.fog!==le||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==F.numPlanes||Ue.numIntersection!==F.numIntersection)||Ue.vertexAlphas!==Ye||Ue.vertexTangents!==at||Ue.morphTargets!==Le||Ue.morphNormals!==et||Ue.morphColors!==_t||Ue.morphTargetsCount!==yt||Ue.numLightProbeGrids!==Ea(A.state.lightProbeGridArray)?b=!0:(Ue.outputColorSpace!==Te||Ue.toneMapping!==lt)&&(U=!0):(b=!0,Ue.__version=z.version);let H=Ue.currentProgram;(b===!0||U===!0)&&(H=U===!0?ls(z,D,k,Te,lt):Er(z,D,k),O&&z.isNodeMaterial&&O.onUpdateProgram(z,H,Ue));let te=!1,$=!1,oe=!1,K=H.getUniforms(),me=Ue.uniforms;if(Re.useProgram(H.program)&&(te=!0,$=!0,oe=!0),z.id!==ye&&(ye=z.id,$=!0),te||Z!==v){Re.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),K.setValue(B,"projectionMatrix",v.projectionMatrix),K.setValue(B,"viewMatrix",v.matrixWorldInverse);let _e=K.map.cameraPosition;_e!==void 0&&_e.setValue(B,wt.setFromMatrixPosition(v.matrixWorld)),Ct.logarithmicDepthBuffer&&K.setValue(B,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&K.setValue(B,"isOrthographic",v.isOrthographicCamera===!0),Z!==v&&(Z=v,$=!0,oe=!0)}if(Ue.needsLights&&(Vt.state.sunShadowMap.length>0&&K.setValue(B,"sunShadowMap",Vt.state.sunShadowMap,ke),Vt.state.directionalShadowMap.length>0&&K.setValue(B,"directionalShadowMap",Vt.state.directionalShadowMap,ke),Vt.state.spotShadowMap.length>0&&K.setValue(B,"spotShadowMap",Vt.state.spotShadowMap,ke),Vt.state.pointShadowMap.length>0&&K.setValue(B,"pointShadowMap",Vt.state.pointShadowMap,ke)),k.isSkinnedMesh){K.setOptional(B,k,"bindMatrix"),K.setOptional(B,k,"bindMatrixInverse");let _e=k.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),K.setValue(B,"boneTexture",_e.boneTexture,ke))}k.isBatchedMesh&&(K.setOptional(B,k,"batchingTexture"),K.setValue(B,"batchingTexture",k._matricesTexture,ke),K.setOptional(B,k,"batchingIdTexture"),K.setValue(B,"batchingIdTexture",k._indirectTexture,ke),K.setOptional(B,k,"batchingColorTexture"),k._colorsTexture!==null&&K.setValue(B,"batchingColorTexture",k._colorsTexture,ke));let xe=q.morphAttributes;if((xe.position!==void 0||xe.normal!==void 0||xe.color!==void 0)&&P.update(k,q,H),($||Ue.receiveShadow!==k.receiveShadow)&&(Ue.receiveShadow=k.receiveShadow,K.setValue(B,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(me.envMapIntensity.value=D.environmentIntensity),me.dfgLUT!==void 0&&(me.dfgLUT.value=u_()),$){if(K.setValue(B,"toneMappingExposure",L.toneMappingExposure),Ue.needsLights&&Di(me,oe),le&&z.fog===!0&&ie.refreshFogUniforms(me,le),ie.refreshMaterialUniforms(me,z,Ge,ze,A.state.transmissionRenderTarget[v.id]),Ue.needsLights&&Ue.numLightProbeGrids>0){let _e=w,de=0;for(let j of A.state.lightProbeGridArray)j.texture!==null&&(_e.textures[de]=j.texture,_e.min[de]=j.boundingBox.min,_e.max[de]=j.boundingBox.max,_e.resolution[de]=j.resolution,de++);for(let j in _e)_e[j].length=de;me.probesSH.value=_e.textures,me.probesMin.value=_e.min,me.probesMax.value=_e.max,me.probesResolution.value=_e.resolution}Xn.upload(B,sn(Ue),me,ke)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Xn.upload(B,sn(Ue),me,ke),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&K.setValue(B,"center",k.center),K.setValue(B,"modelViewMatrix",k.modelViewMatrix),K.setValue(B,"normalMatrix",k.normalMatrix),K.setValue(B,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let _e=z.uniformsGroups;for(let de=0,j=_e.length;de<j;de++){let Se=_e[de];ge.update(Se,H),ge.bind(Se,H)}}return H}function Di(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Ti(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(v,D,q){let z=Ve.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ve.get(v.texture).__webglTexture=D,Ve.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let q=Ve.get(v);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,q=0){W=v,X=D,ae=q;let z=null,k=!1,le=!1;if(v){let Ae=Ve.get(v);if(Ae.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(B.FRAMEBUFFER,Ae.__webglFramebuffer),J.copy(v.viewport),ue.copy(v.scissor),Ie=v.scissorTest,Re.viewport(J),Re.scissor(ue),Re.setScissorTest(Ie),ye=-1;return}else if(Ae.__webglFramebuffer===void 0)ke.setupRenderTarget(v);else if(Ae.__hasExternalTextures)ke.rebindTextures(v,Ve.get(v.texture).__webglTexture,Ve.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Be=v.depthTexture;if(Ae.__boundDepthTexture!==Be){if(Be!==null&&Ve.has(Be)&&(v.width!==Be.image.width||v.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(v)}}let Te=v.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(le=!0);let Pe=Ve.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pe[D])?z=Pe[D][q]:z=Pe[D],k=!0):v.samples>0&&ke.useMultisampledRTT(v)===!1?z=Ve.get(v).__webglMultisampledFramebuffer:Array.isArray(Pe)?z=Pe[q]:z=Pe,J.copy(v.viewport),ue.copy(v.scissor),Ie=v.scissorTest}else J.copy(rt).multiplyScalar(Ge).floor(),ue.copy(De).multiplyScalar(Ge).floor(),Ie=Rt;if(q!==0&&(z=C),Re.bindFramebuffer(B.FRAMEBUFFER,z)&&Re.drawBuffers(v,z),Re.viewport(J),Re.scissor(ue),Re.setScissorTest(Ie),k){let Ae=Ve.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ae.__webglTexture,q)}else if(le){let Ae=D;for(let Te=0;Te<v.textures.length;Te++){let Pe=Ve.get(v.textures[Te]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Te,Pe.__webglTexture,q,Ae)}}else if(v!==null&&q!==0){let Ae=Ve.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ae.__webglTexture,q)}ye=-1};function ba(v){let D=Ve.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=Ct.textureFormatReadable(v.format),D.__typeReadable=Ct.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,q,z,k,le,Ae,Te=0){if(!(v&&v.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ve.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){Re.bindFramebuffer(B.FRAMEBUFFER,Pe);try{let Be=v.textures[Te],Ye=Be.format,at=Be.type;v.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te);let Le=ba(Be);if(Le.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-z&&q>=0&&q<=v.height-k&&B.readPixels(D,q,z,k,pe.convert(Ye),pe.convert(at),le)}finally{let Be=W!==null?Ve.get(W).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(v,D,q,z,k,le,Ae,Te=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ve.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(D>=0&&D<=v.width-z&&q>=0&&q<=v.height-k){Re.bindFramebuffer(B.FRAMEBUFFER,Pe);let Be=v.textures[Te],Ye=Be.format,at=Be.type;v.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te);let Le=ba(Be);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,et),B.bufferData(B.PIXEL_PACK_BUFFER,le.byteLength,B.STREAM_READ),B.readPixels(D,q,z,k,pe.convert(Ye),pe.convert(at),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let _t=W!==null?Ve.get(W).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,_t);let lt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await hd(B,lt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,et),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,le),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(et),B.deleteSync(lt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,q=0){let z=Math.pow(2,-q),k=Math.floor(v.image.width*z),le=Math.floor(v.image.height*z),Ae=D!==null?D.x:0,Te=D!==null?D.y:0;ke.setTexture2D(v,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,Ae,Te,k,le),Re.unbindTexture()},this.copyTextureToTexture=function(v,D,q=null,z=null,k=0,le=0){let Ae,Te,Pe,Be,Ye,at,Le,et,_t,lt=v.isCompressedTexture?v.mipmaps[le]:v.image;if(q!==null)Ae=q.max.x-q.min.x,Te=q.max.y-q.min.y,Pe=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,Ye=q.min.y,at=q.isBox3?q.min.z:0;else{let K=Math.pow(2,-k);Ae=Math.floor(lt.width*K),Te=Math.floor(lt.height*K),v.isDataArrayTexture?Pe=lt.depth:v.isData3DTexture?Pe=Math.floor(lt.depth*K):Pe=1,Be=0,Ye=0,at=0}z!==null?(Le=z.x,et=z.y,_t=z.z):(Le=0,et=0,_t=0);let pt=pe.convert(D.format),yt=pe.convert(D.type),Ue;D.isData3DTexture?(ke.setTexture3D(D,0),Ue=B.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(ke.setTexture2DArray(D,0),Ue=B.TEXTURE_2D_ARRAY):(ke.setTexture2D(D,0),Ue=B.TEXTURE_2D),Re.activeTexture(B.TEXTURE0),Re.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,D.flipY),Re.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),Re.pixelStorei(B.UNPACK_ALIGNMENT,D.unpackAlignment);let Vt=Re.getParameter(B.UNPACK_ROW_LENGTH),b=Re.getParameter(B.UNPACK_IMAGE_HEIGHT),U=Re.getParameter(B.UNPACK_SKIP_PIXELS),H=Re.getParameter(B.UNPACK_SKIP_ROWS),te=Re.getParameter(B.UNPACK_SKIP_IMAGES);Re.pixelStorei(B.UNPACK_ROW_LENGTH,lt.width),Re.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt.height),Re.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),Re.pixelStorei(B.UNPACK_SKIP_ROWS,Ye),Re.pixelStorei(B.UNPACK_SKIP_IMAGES,at);let $=v.isDataArrayTexture||v.isData3DTexture,oe=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let K=Ve.get(v),me=Ve.get(D),xe=Ve.get(K.__renderTarget),_e=Ve.get(me.__renderTarget);Re.bindFramebuffer(B.READ_FRAMEBUFFER,xe.__webglFramebuffer),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let de=0;de<Pe;de++)$&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.get(v).__webglTexture,k,at+de),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.get(D).__webglTexture,le,_t+de)),B.blitFramebuffer(Be,Ye,Be+Ae,Ye+Te,Le,et,Le+Ae,et+Te,B.DEPTH_BUFFER_BIT,B.NEAREST);Re.bindFramebuffer(B.READ_FRAMEBUFFER,null),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||Ve.has(v)){let K=Ve.get(v),me=Ve.get(D);Re.bindFramebuffer(B.READ_FRAMEBUFFER,Q),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,I);for(let xe=0;xe<Pe;xe++)$?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.__webglTexture,k,at+xe):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,K.__webglTexture,k),oe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,me.__webglTexture,le,_t+xe):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,me.__webglTexture,le),k!==0?B.blitFramebuffer(Be,Ye,Be+Ae,Ye+Te,Le,et,Le+Ae,et+Te,B.COLOR_BUFFER_BIT,B.NEAREST):oe?B.copyTexSubImage3D(Ue,le,Le,et,_t+xe,Be,Ye,Ae,Te):B.copyTexSubImage2D(Ue,le,Le,et,Be,Ye,Ae,Te);Re.bindFramebuffer(B.READ_FRAMEBUFFER,null),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else oe?v.isDataTexture||v.isData3DTexture?B.texSubImage3D(Ue,le,Le,et,_t,Ae,Te,Pe,pt,yt,lt.data):D.isCompressedArrayTexture?B.compressedTexSubImage3D(Ue,le,Le,et,_t,Ae,Te,Pe,pt,lt.data):B.texSubImage3D(Ue,le,Le,et,_t,Ae,Te,Pe,pt,yt,lt):v.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,le,Le,et,Ae,Te,pt,yt,lt.data):v.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,le,Le,et,lt.width,lt.height,pt,lt.data):B.texSubImage2D(B.TEXTURE_2D,le,Le,et,Ae,Te,pt,yt,lt);Re.pixelStorei(B.UNPACK_ROW_LENGTH,Vt),Re.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),Re.pixelStorei(B.UNPACK_SKIP_PIXELS,U),Re.pixelStorei(B.UNPACK_SKIP_ROWS,H),Re.pixelStorei(B.UNPACK_SKIP_IMAGES,te),le===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&B.generateMipmap(Ue),Re.unbindTexture()},this.initRenderTarget=function(v){Ve.get(v).__webglFramebuffer===void 0&&ke.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ke.setTextureCube(v,0):v.isData3DTexture?ke.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ke.setTexture2DArray(v,0):ke.setTexture2D(v,0),Re.unbindTexture()},this.resetState=function(){X=0,ae=0,W=null,Re.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}});var iu={};Tu(iu,{createScene:()=>y_});function Za(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Ii(e,t){let i=Math.imul(e,374761393)+Math.imul(t,668265263)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967295}function en(e,t){let i=Math.floor(e),r=Math.floor(t),a=e-i,n=t-r,s=a*a*(3-2*a),o=n*n*(3-2*n),l=St(Ii(i,r),Ii(i+1,r),s),c=St(Ii(i,r+1),Ii(i+1,r+1),s);return St(l,c,o)*2-1}function Zh(e,t,i=4){let r=0,a=.5,n=1;for(let s=0;s<i;s+=1)r+=a*en(e*n+s*17.3,t*n-s*9.1),n*=2.03,a*=.5;return r}function f_(e,t,i,r,a,n){let s=a-i,o=n-r,l=ci(((e-i)*s+(t-r)*o)/(s*s+o*o||1),0,1);return Math.hypot(e-(i+s*l),t-(r+o*l))}function nl(e,t){let i=1/0;for(let r=1;r<Ja.length;r+=1)i=Math.min(i,f_(e,t,Ja[r-1][0],Ja[r-1][1],Ja[r][0],Ja[r][1]));return i}function tr(e,t,i,r){let n=Math.abs(e-i.x)-(i.rx-1.2),s=Math.abs(t-i.z)-(i.rz-1.2),o=Math.hypot(Math.max(n,0),Math.max(s,0))+Math.min(Math.max(n,s),0)-1.2;return 1-ri(0,r,o)}function sl(e,t){let i=Math.max($a.x0-e,e-$a.x1,$a.z0-t,t-$a.z1);return 1-ri(-.4,.6,i)}function m_(e,t){let i=(g,x,y,m,d,E,w)=>E*Math.pow(ci(1-Math.hypot((e-g)/y,(t-x)/m)/d,0,1),w),r=(g,x,y,m,d,E)=>E*ri(0,1,1-Math.hypot((e-g)/y,(t-x)/m)/d),a=r(-2,-34,1.2,1,32,25),n=r(-30,-26,1,1.1,22,19),s=r(27,-26,1,1.15,20,17),o=i(-20,-2,7.5,14,1,8.5,1.3),l=i(21,0,7.5,13,1,7,1.3),c=r(-30,12,1,1,13,8.5),h=r(-44,-6,1,1.2,15,12),p=i(28,18,8,8,1,4.5,1.4),u=vr(vr(a,vr(n,s,2),2),h,2);return vr(u,vr(vr(o,l,1.5),vr(c,p,1.5),1.5),2)}function __(e,t){return vr(m_(e,t),g_(e,t),2.5)*ol(e,t)}function v_(e,t){let i=__(e,t),r=ri(.5,6,i),a=Zh(e*.1+3.1,t*.1-1.7)*1.5*r*(.4+i/21),n=(Zh(e*.08-7,t*.08+2,2)+1)*.18*ol(e,t),s=Math.max(i+a,0)+n*(1-r),o=ri(6.5,9.5,t)*(1-ri(1,3.5,i));s=St(s,kt.village+n*.4,o),s=St(s,$a.y,sl(e,t)*(1-ri(1.5,3.5,i)));let l=1-ri(.6,1.6,nl(e,t));return s=St(s,Math.min(s,kt.village+.05),l*o),s=St(s,kt.gate.y,tr(e,t,kt.gate,1.8)),s=St(s,kt.yard.y,tr(e,t,kt.yard,.9)),s=St(s,kt.hall.y,tr(e,t,kt.hall,.6)),St(s,bt.bed,tu(e,t))}function al(e,t,i=0){return tr(e,t,kt.yard,1.2+i)>.01||tr(e,t,kt.hall,1.2+i)>.01||tr(e,t,kt.gate,2.4+i)>.01||Math.hypot((e-bt.x)/(bt.rx+1.6+i),(t-bt.z)/(bt.rz+1.6+i))<1||sl(e,t)>.01||nl(e,t)<1.8+i||Math.abs(e-vt.gate.x)<2.4&&t>1&&t<6?!0:xa.some(([r,a])=>Math.hypot(e-r,t-a)<2.4+i)}function Jh(e,t,i){return i<.9||i>15||en(e*.13-2,t*.13+8)<-.3||Math.hypot(e/42,(t+6)/34)>1?!1:!al(e,t)}function Qh(e,t,i,r,a){let n=e.attributes.position;for(let s=0;s<n.count;s+=1){let o=n.getY(s);if(o>.49)continue;let l=Math.round((Math.atan2(n.getZ(s),n.getX(s))+li)%li/li*t)%t,c=Math.round((.5-o)*10),h=1+(Ii(l,c+a)-.5)*i;n.setXYZ(s,n.getX(s)*h,o+(Ii(l,c+a+7)-.5)*r*(o+.5),n.getZ(s)*h)}return e.computeVertexNormals(),e}function ii(e,t,i,r){return new mt(new _r(e,t,i),r)}function x_(e,t,i,r,a=6){let n=new G().subVectors(t,e),s=n.length(),o=new mt(new Mi(i,i,s,a,1),r);return o.position.copy(e).addScaledVector(n,.5),o.quaternion.setFromUnitVectors(d_,n.normalize()),o}function Qa(e,t,i,r,a){let n=-e/2,s=e/2,o=t/2,l=-t/2,c=e*r/2,h={FL:[n,a,o],FR:[s,a,o],BR:[s,a,l],BL:[n,a,l],FM:[0,0,o],BM:[0,0,l],LM:[n,a*.35,0],RM:[s,a*.35,0],A:[-c,i,0],Bq:[c,i,0],C:[0,.02,0]},p=[["FL","FM","A"],["FM","Bq","A"],["FM","FR","Bq"],["BR","BM","Bq"],["BM","A","Bq"],["BM","BL","A"],["BL","LM","A"],["LM","FL","A"],["FR","RM","Bq"],["RM","BR","Bq"],["FL","FM","C"],["FM","FR","C"],["FR","RM","C"],["RM","BR","C"],["BR","BM","C"],["BM","BL","C"],["BL","LM","C"],["LM","FL","C"]],u=new G(0,i*.35,0),g=[],x=new G,y=new G,m=new G,d=new G,E=new G;p.forEach(([S,A,R],f)=>{x.fromArray(h[S]),y.fromArray(h[A]),m.fromArray(h[R]),d.subVectors(y,x).cross(m.clone().sub(x)),E.copy(x).add(y).add(m).divideScalar(3);let M=f>=10?new G(0,-1,0):E.clone().sub(u);d.dot(M)<0?g.push(...h[S],...h[R],...h[A]):g.push(...h[S],...h[A],...h[R])});let w=new ei;return w.setAttribute("position",new ut(g,3)),w.computeVertexNormals(),w}function S_(e){let i=document.createElement("canvas");i.width=32,i.height=32;let r=i.getContext("2d"),a=r.createImageData(32,32),n=Math.cos(.6),s=Math.sin(.6);for(let o=0;o<32;o+=1)for(let l=0;l<32;l+=1){let c=(l+.5-16)/16,h=(o+.5-32/2)/(32/2),p;e==="petal"?p=Math.hypot(c/.9,h/.62):e==="leaf"?p=Math.hypot((c*n-h*s)/.95,(c*s+h*n)/.48):p=Math.hypot(c,h);let u=(o*32+l)*4;a.data[u]=255,a.data[u+1]=255,a.data[u+2]=255,a.data[u+3]=Math.round(255*(1-ri(e==="round"?.35:.7,1,p)))}return r.putImageData(a,0,0),new ph(i)}async function y_(e){let{container:t,labelLayer:i,landmarks:r,canvasLabel:a,getFrame:n=()=>({}),durations:s,onSelect:o=()=>{},onInteract:l=()=>{},onZoomLimits:c=()=>{},onContextLost:h=()=>{},onContextRestored:p=()=>{}}=e,u=!!e.poster,g=nr[e.posterSize]?e.posterSize:"wide",x=window.matchMedia(`(min-width: ${wa.wide}px)`),y=()=>x.matches,m=e.quality||(u?nr[g].quality:y()?"high":"low"),d=e.motion!==!1,E=!!e.reduced,w=Yt[e.season]?e.season:"autumn",S=document.createElement("canvas");S.className="scene__canvas",S.setAttribute("role","img"),S.setAttribute("aria-label",a(w)),t.prepend(S);let A=new qh({canvas:S,antialias:m==="high",powerPreference:"high-performance"});A.shadowMap.enabled=!0;let R=new ah,f=new ih(Yt.autumn.sky,60,300);R.fog=f,R.background=new Ke(Yt.autumn.sky);let M=new vi(xt.fov,1,.5,3e3),L=(b,U={})=>new Qo({color:b,flatShading:!0,...U}),N={terrain:new Qo({vertexColors:!0,flatShading:!0}),valley:L(Yt.autumn.valley),farPeak:new ga({color:16777215}),pillar:L(Ot.pillar),band:L(Ot.band),plaster:L(Ot.plaster),timber:L(Ot.timber),granite:L(Ot.granite),ridge:L(Ot.ridge),bell:L(Ot.bell),tile:L(Yt.autumn.tile),thatch:L(Yt.autumn.thatch),trunk:L(Ot.trunk),leaves:L(16777215),pine:L(Ot.pine),pineCap:L(Yt.autumn.pineCap),water:L(Yt.autumn.water),lotus:L(Ot.lotus),bird:new ga({color:Ot.bird,side:Ci}),smoke:L(Ot.smoke,{transparent:!0,opacity:.7,depthWrite:!1}),blob:new ga({color:Ot.shadow,transparent:!0,opacity:.14,depthWrite:!1})},O=[],C=new Jt,Q=new xi;R.add(Q);let I=[],X=(b,U,H,te=yi(b,U))=>{let $=new mt(new Qn(H,12).rotateX(-Math.PI/2),N.blob);$.position.set(b,te+.04,U),Q.add($)},ae=new Ph(Yt.autumn.sky,Yt.autumn.ground,Yt.autumn.hemi);R.add(ae);let W=new Dh(Yt.autumn.key,Yt.autumn.keyIntensity);W.position.set(-30,40,26),W.target.position.set(0,0,2),R.add(W.target),W.shadow.mapSize.set(ni.shadowMapSize,ni.shadowMapSize),Object.assign(W.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:1,far:150}),W.shadow.bias=-6e-4,W.shadow.normalBias=.04,R.add(W);let ye=m==="high"?ni.terrainSegmentsHigh:ni.terrainSegmentsLow,Z=new Xa(ts.size,ts.size,ye,ye).rotateX(-Math.PI/2);Z.translate(0,0,ts.cz);let J=Z.attributes.position;for(let b=0;b<J.count;b+=1)J.setY(b,yi(J.getX(b),J.getZ(b)));let ue=Z.toNonIndexed();Z.dispose(),ue.computeVertexNormals(),ue.computeBoundingSphere();let Ie={ground:0,forest:1,rock:2,path:3,field:4,valley:5,pond:6},ee=ue.attributes.position.count/3,fe=new Uint8Array(ee),Ne=new Float32Array(ee);{let b=ue.attributes.position,U=new G,H=new G,te=new G,$=new G,oe=new G;for(let K=0;K<ee;K+=1){U.fromBufferAttribute(b,K*3),H.fromBufferAttribute(b,K*3+1),te.fromBufferAttribute(b,K*3+2);let me=$.subVectors(H,U).cross(oe.subVectors(te,U)).normalize().y,xe=(U.x+H.x+te.x)/3,_e=(U.z+H.z+te.z)/3,de=(U.y+H.y+te.y)/3,j=Ie.ground;tu(xe,_e)>.5?j=Ie.pond:tr(xe,_e,kt.yard,.5)>.5||tr(xe,_e,kt.hall,.5)>.5||tr(xe,_e,kt.gate,1)>.5||nl(xe,_e)<.9&&_e>5?j=Ie.path:sl(xe,_e)>.6?j=Ie.field:Math.abs(me)<.72&&de>1.5||de>15&&en(xe*.5,_e*.5)>.2?j=Ie.rock:Jh(xe,_e,de)?j=Ie.forest:(ol(xe,_e)<.6||Math.hypot(xe,(_e-4)*1.2)>40)&&(j=Ie.valley),fe[K]=j;let Se=j===Ie.field?(Ii(Math.floor(xe/2.4),Math.floor(_e/2.2))-.5)*.12:0,Xe=ri(30,44,Math.hypot(xe,(_e-4)*1.2)),ct=en(xe*.09+4,_e*.09-3)*.06*(1-Xe);Ne[K]=j===Ie.valley?1:1+((Ii(K,7)-.5)*.05+Se+ct)*(1-Xe)}}let ze=new Float32Array(ee*9);ue.setAttribute("color",new ut(ze,3));let Ge=ue.attributes.color.array,Ee=new mt(ue,N.terrain);Ee.receiveShadow=!0,R.add(Ee);let Je=new mt(new Xa(1600,1600).rotateX(-Math.PI/2),N.valley);Je.position.y=-.05,Je.receiveShadow=!0,R.add(Je);{let b=Za(5),U=Qh(new _a(1,1,9,3,!0),9,.5,.12,3),H=16,te=new ti(U,N.farPeak,H);for(let $=0;$<H;$+=1){let oe=$/H*li+b()*.25,K=190+b()*50,me=9+b()*9,xe=40+b()*20;C.position.set(Math.sin(oe)*K,me/2-1,-Math.cos(oe)*K),C.rotation.set(0,b()*li,0),C.scale.set(xe,me,xe),C.updateMatrix(),te.setMatrixAt($,C.matrix),te.setColorAt($,new Ke(Ot.farPeak).multiplyScalar(1.02+b()*.08))}C.scale.setScalar(1),C.rotation.set(0,0,0),te.frustumCulled=!1,R.add(te)}{let b=Za(17),U=Qh(new _a(1,1,9,3,!0),9,.45,.1,5),H=11,te=new ti(U,N.farPeak,H);for(let $=0;$<H;$+=1){let oe=St(-1.05,1.2,$/(H-1))+(b()-.5)*.15,K=122+b()*30,me=17+b()*11,xe=40+b()*18;C.position.set(Math.sin(oe)*K,me/2-2,-10-Math.cos(oe)*K),C.rotation.set(0,b()*li,0),C.scale.set(xe,me,xe),C.updateMatrix(),te.setMatrixAt($,C.matrix),te.setColorAt($,new Ke(Ot.farPeak).multiplyScalar(St(.82,.98,(K-122)/30)))}C.scale.setScalar(1),C.rotation.set(0,0,0),te.frustumCulled=!1,R.add(te)}let rt=[],De=(b,U,H,te,$,oe,K=0,me=0)=>rt.push({x:b,y:U,z:H,w:te,h:$,d:oe,rx:K,ry:me});De(-6.125,2.62,1.75,4.95,4.05,.6),De(4.625,2.62,1.75,11.95,4.05,.6),De(-4.65,5.37,-6.25,7.1,2.15,.6),De(4.65,5.37,-6.25,7.1,2.15,.6);for(let b=0;b<8;b+=1){let U=kt.gate.y+(b+1)*.45;De(vt.gate.x,(U+.6)/2,4.15-(b+.5)*.32,2.2,U-.6,.34)}for(let b=0;b<4;b+=1){let U=kt.yard.y+(b+1)*.45;De(0,(U+4.3)/2,-5.3-(b+.5)*.32,2.2,U-4.3,.34)}{let U=H=>[mi.z0+(mi.z1-mi.z0)*H,.28+mi.rise*Math.sin(Math.PI*H)];for(let H=0;H<10;H+=1){let[te,$]=U(H/10),[oe,K]=U((H+1)/10),me=Math.hypot(oe-te,K-$)+.06,xe=Math.atan2(K-$,te-oe),_e=(te+oe)/2,de=($+K)/2;De(mi.x,de,_e,mi.width,.36,me,xe),[-1,1].forEach(j=>De(mi.x+j*(mi.width/2-.08),de+.3,_e,.16,.28,me,xe))}De(mi.x,.2,mi.z0+.25,2.1,.6,.8),De(mi.x,.2,mi.z1-.25,2.1,.6,.8)}{let b=new ti(new _r(1,1,1),N.granite,rt.length);rt.forEach((U,H)=>{C.position.set(U.x,U.y,U.z),C.rotation.set(U.rx,U.ry,0),C.scale.set(U.w,U.h,U.d),C.updateMatrix(),b.setMatrixAt(H,C.matrix)}),C.scale.setScalar(1),C.rotation.set(0,0,0),b.frustumCulled=!1,R.add(b),I.push(b)}{let b=vt.hall,U=new xi;U.position.set(b.x,b.base,b.z);let H=ii(9.6,.7,5.8,N.granite);H.position.y=.35;let te=ii(2.6,.35,.45,N.granite);te.position.set(0,.175,3.12);let $=ii(8,2.35,4.2,N.plaster);$.position.y=.7+1.175;let oe=ii(7.4,1.95,.08,N.timber);oe.position.set(0,.7+1,2.12),U.add(H,te,$,oe),[-3.9,-2.34,-.78,.78,2.34,3.9].forEach(_e=>{let de=new mt(new Mi(.15,.17,2.35,6),N.pillar);de.position.set(_e,.7+1.175,2.24),U.add(de)}),[-3.9,3.9].forEach(_e=>{let de=new mt(new Mi(.15,.17,2.35,6),N.pillar);de.position.set(_e,.7+1.175,-2.2),U.add(de)});let K=ii(8.5,.34,4.7,N.band);K.position.y=.7+2.35+.1;let me=new mt(Qa(11.6,7.6,2.9,.42,.42),N.tile);me.position.y=.7+2.35+.25;let xe=ii(5.2,.32,.4,N.ridge);xe.position.y=me.position.y+2.9+.06,U.add(K,me,xe),R.add(U),I.push(U),X(b.x,b.z,5.2,b.base)}{let b=vt.pagoda,U=new xi;U.position.set(b.x,b.base,b.z);let H=0;[[2.8,.45],[2.2,.55]].forEach(([oe,K])=>{let me=ii(oe,K,oe,N.granite);me.position.y=H+K/2,U.add(me),H+=K}),[[1.15,.8,1,.55],[.95,.6,.86,.47],[.8,.5,.74,.4]].forEach(([oe,K,me,xe])=>{let _e=ii(oe,K,oe,N.granite);_e.position.y=H+K/2;let de=new mt(new Mi(xe*Math.SQRT2,me*Math.SQRT2,.28,4),N.granite);de.rotation.y=Math.PI/4,de.position.y=H+K+.14,U.add(_e,de),H+=K+.28});let te=new mt(new Mi(.06,.08,1,6),N.granite);te.position.y=H+.5;let $=new mt(new Th(.14,6,4),N.granite);$.position.y=H+1,U.add(te,$),R.add(U),I.push(U),X(b.x,b.z,1.9,b.base)}{let b=vt.bell,U=new xi;U.position.set(b.x,b.base,b.z),U.rotation.y=-.25;let H=ii(3.4,.45,3.4,N.granite);H.position.y=.225,U.add(H),[[-1.2,-1.2],[1.2,-1.2],[1.2,1.2],[-1.2,1.2]].forEach(([_e,de])=>{let j=new mt(new Mi(.13,.15,2.55,6),N.pillar);j.position.set(_e,.45+1.275,de),U.add(j)});let te=ii(2.9,.28,2.9,N.band);te.position.y=.45+2.55+.14;let $=new mt(Qa(4.8,4.8,1.9,.06,.4),N.tile);$.position.y=.45+2.55+.28;let oe=ii(.4,.26,.4,N.ridge);oe.position.y=$.position.y+1.9;let K=new mt(new Mi(.4,.56,1.15,10),N.bell);K.position.y=.45+2.55-.35-.575;let me=new mt(new Mi(.16,.4,.22,10),N.bell);me.position.y=K.position.y+.575+.11;let xe=x_(new G(0,me.position.y+.1,0),new G(0,.45+2.55,0),.05,N.ridge,4);U.add(te,$,oe,K,me,xe),R.add(U),I.push(U),X(b.x,b.z,2.4,b.base)}{let b=vt.gate,U=new xi;U.position.set(b.x,b.base,b.z),[[-1.25,-.55],[1.25,-.55],[1.25,.55],[-1.25,.55]].forEach(([oe,K])=>{let me=new mt(new Mi(.13,.15,2.3,6),N.pillar);me.position.set(oe,1.15,K),U.add(me)});let H=ii(2.9,.3,1.4,N.band);H.position.y=2.3+.15;let te=new mt(Qa(4.6,2.9,1.35,.55,.32),N.tile);te.position.y=2.3+.3;let $=ii(2.4,.22,.3,N.ridge);$.position.y=te.position.y+1.35+.04,U.add(H,te,$),[-1,1].forEach(oe=>{let K=ii(3.2,1.35,.36,N.plaster);K.position.set(oe*(1.35+1.6),.675,0);let me=ii(3.4,.22,.72,N.tile);me.position.set(oe*(1.35+1.6),1.35+.11,0),U.add(K,me)}),R.add(U),I.push(U),X(b.x,b.z,2.4,b.base)}let Rt=[];{let b=xa.length,U=new ti(new _r(1,1,1),N.plaster,b),H=xa.filter(j=>j[3]==="tile"),te=xa.filter(j=>j[3]==="thatch"),$=new ti(Qa(3.3,2.5,1.1,.5,.16),N.tile,H.length),oe=new ti(Qa(3.1,2.3,1.25,.3,0),N.thatch,te.length),K=new ti(new _r(.34,1,.34),N.granite,xa.filter(j=>j[4]).length),me=0,xe=0,_e=0;xa.forEach(([j,Se,Xe,ct,ui],Ui)=>{let Oi=.85+Ii(Ui,5)*.25,Ta=yi(j,Se);if(C.position.set(j,Ta+.6*Oi,Se),C.rotation.set(0,Xe,0),C.scale.set(2.6*Oi,1.25*Oi,1.7*Oi),C.updateMatrix(),U.setMatrixAt(Ui,C.matrix),C.position.set(j,Ta+1.2*Oi,Se),C.scale.setScalar(Oi),C.updateMatrix(),ct==="tile"?$.setMatrixAt(me++,C.matrix):oe.setMatrixAt(xe++,C.matrix),ui){let vl=1.15*Oi,xl=-1.15*Oi,Sl=j+vl*Math.cos(Xe)+xl*Math.sin(Xe),Ml=Se-vl*Math.sin(Xe)+xl*Math.cos(Xe),hs=1+.5*Oi;C.position.set(Sl,Ta+hs/2,Ml),C.rotation.set(0,Xe,0),C.scale.set(1,hs,1),C.updateMatrix(),K.setMatrixAt(_e++,C.matrix),Rt.push([Sl,Ta+hs+.15,Ml])}X(j,Se,1.7*Oi,Ta)}),C.scale.setScalar(1),C.rotation.set(0,0,0);let de=new xi;[U,$,oe,K].forEach(j=>{j.frustumCulled=!1,de.add(j)}),R.add(de),I.push(de)}let Nt=new mt(new Qn(1,28).rotateX(-Math.PI/2),N.water);Nt.scale.set(bt.rx*.98,1,bt.rz*.98),Nt.position.set(bt.x,bt.water,bt.z),Nt.receiveShadow=!0,R.add(Nt);let Dt=(()=>{let b=Za(33),U=[];for(let te=0;te<400&&U.length<12;te+=1){let $=b()*li,oe=Math.sqrt(b())*.82,K=bt.x+Math.cos($)*oe*bt.rx,me=bt.z+Math.sin($)*oe*bt.rz;Math.abs(K-mi.x)<1.4||U.some(xe=>Math.hypot(K-xe.x,me-xe.z)<.85)||U.push({x:K,z:me,s:.75+b()*.5,r:b()*li})}let H=new ti(new Qn(.45,7).rotateX(-Math.PI/2),N.lotus,U.length);return H.frustumCulled=!1,R.add(H),{apply(te){U.forEach(($,oe)=>{C.position.set($.x,bt.water+.03,$.z),C.rotation.set(0,$.r,0),C.scale.setScalar(Math.max(1e-4,$.s*te)),C.updateMatrix(),H.setMatrixAt(oe,C.matrix)}),C.scale.setScalar(1),C.rotation.set(0,0,0),H.instanceMatrix.needsUpdate=!0,H.visible=te>.02}}})(),Tt=[[-2.3,-.5,0],[2.2,.6,.38],[-1.6,1,.7]].map(([b,U,H])=>{let te=new ga({color:Ot.ripple,transparent:!0,opacity:0,depthWrite:!1});O.push(te);let $=new mt(new Eh(.86,1,24).rotateX(-Math.PI/2),te);return $.position.set(bt.x+b,bt.water+.02,bt.z+U),R.add($),{ring:$,mat:te,phase:H}}),zt=(()=>{let b=Za(21),U=(de,j)=>{let Se=yi(de+.5,j)-yi(de-.5,j),Xe=yi(de,j+.5)-yi(de,j-.5);return Math.hypot(Se,Xe)},H=(de,j)=>Math.hypot(de-vt.gate.x,j-vt.gate.z)<4.2||Math.hypot(de-vt.bell.x,j-vt.bell.z)<3,te=[{x:-3.4,z:16.8,s:2},{x:-7.8,z:.4,s:1.15},{x:-8,z:-5.3,s:1.2},{x:10,z:-5.6,s:1.1},{x:9.6,z:7.6,s:1.3},{x:2.8,z:9.6,s:1.2},{x:-12.6,z:9.4,s:1.4}].map(de=>({...de,y:yi(de.x,de.z),r:b()*li}));for(let de=0;de<12e3&&te.length<250;de+=1){let j=(b()*2-1)*38,Se=-34+b()*58,Xe=yi(j,Se),ct=Xe<1&&Se>8&&b()<.08;(Jh(j,Se,Xe)||ct&&!al(j,Se,.4))&&(U(j,Se)>1.25||H(j,Se)||te.some(ui=>Math.hypot(j-ui.x,Se-ui.z)<1.45)||te.push({x:j,z:Se,y:Xe,s:.8+b()*.45,r:b()*li}))}let $=[];for(let de=0;de<12e3&&$.length<220;de+=1){let j=(b()*2-1)*46,Se=-54+b()*60,Xe=yi(j,Se);Xe<6.5&&!(Xe>2.5&&en(j*.2,Se*.2)>.35)||Xe>24||U(j,Se)>1.5||al(j,Se,.6)||H(j,Se)||Math.hypot(j/48,(Se+20)/40)>1||$.some(ct=>Math.hypot(j-ct.x,Se-ct.z)<1.25)||te.some(ct=>Math.hypot(j-ct.x,Se-ct.z)<1.2)||$.push({x:j,z:Se,y:Xe,s:.8+b()*.5,r:b()*li})}let oe=new ti(new Mi(.12,.17,1.3,5,1,!0),N.trunk,te.length),K=new ti(new Jo(1,0),N.leaves,te.length);te.forEach((de,j)=>{C.position.set(de.x,de.y+.6*de.s,de.z),C.rotation.set(0,de.r,0),C.scale.setScalar(de.s),C.updateMatrix(),oe.setMatrixAt(j,C.matrix),de.pick=Math.floor(Ii(j,41)*4),de.shade=1+(Ii(j,43)-.5)*.12});let me=[[new _a(.85,1.6,6,1,!0),N.pine,.9],[new _a(.6,1.3,6,1,!0),N.pine,1.85],[new _a(.36,.8,6,1,!0),N.pineCap,2.55]].map(([de,j,Se])=>[new ti(de,j,$.length),Se]);$.forEach((de,j)=>{C.rotation.set(0,de.r,0),C.scale.setScalar(de.s),me.forEach(([Se,Xe])=>{C.position.set(de.x,de.y+Xe*de.s,de.z),C.updateMatrix(),Se.setMatrixAt(j,C.matrix)})}),C.scale.setScalar(1),C.rotation.set(0,0,0);let xe=new xi;[K,...me.map(([de])=>de)].forEach(de=>{de.frustumCulled=!1,xe.add(de)}),oe.frustumCulled=!1,R.add(xe,oe),I.push(xe),oe.receiveShadow=!0;let _e=new Ke;return{count:te.length+$.length,apply(de,j){te.forEach((Se,Xe)=>{let ct=Se.s*j;C.position.set(Se.x,Se.y+(1.3+.85)*Se.s,Se.z),C.rotation.set(0,Se.r,0),C.scale.set(1.25*ct,1.05*ct,1.25*ct),C.updateMatrix(),K.setMatrixAt(Xe,C.matrix),K.setColorAt(Xe,_e.setRGB(de[Xe*3],de[Xe*3+1],de[Xe*3+2]))}),C.scale.setScalar(1),C.rotation.set(0,0,0),K.instanceMatrix.needsUpdate=!0,K.instanceColor.needsUpdate=!0},colorsFor(de){let j=new Float32Array(te.length*3);return te.forEach((Se,Xe)=>{_e.set(de[Se.pick]).multiplyScalar(Se.shade),j[Xe*3]=_e.r,j[Xe*3+1]=_e.g,j[Xe*3+2]=_e.b}),j}}})(),Qt=(()=>{let b=oe=>{let K=new ei;return K.setAttribute("position",new ut([0,0,.22,0,0,-.2,oe*.85,0,-.08],3)),K.computeVertexNormals(),K},U=[0,1,2,3,4].map(oe=>({r:4.2+oe*.8,y:12.4+oe%3*.7,period:Aa.bird*(.8+oe*.12),phase:oe*1.3,dir:oe%2?1:-1})),H=new ti(b(-1),N.bird,U.length),te=new ti(b(1),N.bird,U.length);[H,te].forEach(oe=>{oe.frustumCulled=!1,R.add(oe)});let $=vt.bell;return{update(oe){U.forEach((K,me)=>{let xe=K.dir*(oe/K.period*li)+K.phase,_e=$.x+Math.cos(xe)*K.r,de=$.z+Math.sin(xe)*K.r,j=K.y+Math.sin(oe*.7+K.phase)*.3,Se=Math.atan2(-Math.sin(xe)*K.dir,Math.cos(xe)*K.dir),Xe=Math.sin(oe*9+K.phase*3)*.55;[[H,Xe],[te,-Xe]].forEach(([ct,ui])=>{C.position.set(_e,j,de),C.rotation.set(0,Se,ui,"YXZ"),C.updateMatrix(),ct.setMatrixAt(me,C.matrix)})}),C.rotation.set(0,0,0,"XYZ"),H.instanceMatrix.needsUpdate=!0,te.instanceMatrix.needsUpdate=!0}}})(),wt=(()=>{let U=new ti(new Jo(.5,0),N.smoke,Rt.length*6);return U.frustumCulled=!1,R.add(U),{update(H){Rt.forEach(([te,$,oe],K)=>{for(let me=0;me<6;me+=1){let xe=(H/Aa.smoke+me/6+K*.29)%1,_e=(.35+xe*1.1)*(1-ri(.72,1,xe));C.position.set(te+xe*2.2,$+xe*3.4,oe+xe*.9),C.rotation.set(xe*2+K,xe*3+me,0),C.scale.setScalar(Math.max(1e-4,_e)),C.updateMatrix(),U.setMatrixAt(K*6+me,C.matrix)}}),C.scale.setScalar(1),C.rotation.set(0,0,0),U.instanceMatrix.needsUpdate=!0}}})(),Mt={x:32,z0:-26,z1:28,top:22},qt={petal:{fall:[.35,.7],wind:.5,sway:.9,freq:.7,size:.68,shape:"petal"},leaf:{fall:[.6,1.1],wind:.35,sway:1.1,freq:.9,size:.72,shape:"leaf"},snow:{fall:[1,2],wind:.6,sway:.4,freq:.8,size:.7,shape:"round"}},Gt={value:ni.particleMaxPx},ai=[],B=rl.map((b,U)=>{let H=ni.particles[b].high,te=qt[b],$=new Float32Array(H*5),oe=new Float32Array(H*3),K=Za(91+U*7),me=Ot[b].map(Se=>new Ke(Se));for(let Se=0;Se<H;Se+=1){$.set([(K()*2-1)*Mt.x,St(Mt.z0,Mt.z1,K()),K()*Mt.top,St(te.fall[0],te.fall[1],K()),K()*li],Se*5);let Xe=me[Math.floor(K()*me.length)];oe.set([Xe.r,Xe.g,Xe.b],Se*3)}let xe=new ei;xe.setAttribute("position",new ut(new Float32Array(H*3),3)),xe.setAttribute("color",new ut(oe,3));let _e=S_(te.shape);ai.push(_e);let de=new Zo({size:te.size,map:_e,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1});de.onBeforeCompile=Se=>{Se.uniforms.maxPointSize=Gt,Se.vertexShader=`uniform float maxPointSize;
${Se.vertexShader.replace("#include <fog_vertex>",`gl_PointSize = min( gl_PointSize, maxPointSize );
#include <fog_vertex>`)}`},N[`particle_${b}`]=de;let j=new uh(xe,de);return j.frustumCulled=!1,j.visible=!1,R.add(j),{kind:b,m:te,seeds:$,geometry:xe,positions:xe.attributes.position.array,points:j,material:de}}),hi=b=>ni.particles[b][m==="high"?"high":"low"];function ht(b){let U=Mt.x*2;B.forEach(H=>{if(!H.points.visible)return;let te=hi(H.kind),{seeds:$,positions:oe,m:K}=H;for(let me=0;me<te;me+=1){let xe=me*5,_e=$[xe+4],de=($[xe+2]-$[xe+3]*b)%Mt.top;de<0&&(de+=Mt.top);let j=$[xe]+K.wind*b+Math.sin(b*K.freq+_e)*K.sway+Mt.x;j=(j%U+U)%U-Mt.x;let Se=$[xe+1]+Math.cos(b*K.freq*.8+_e)*K.sway*.6;oe[me*3]=j,oe[me*3+1]=de,oe[me*3+2]=Se}H.geometry.setDrawRange(0,te),H.geometry.attributes.position.needsUpdate=!0})}I.forEach(b=>{b.traverse(U=>{U.isMesh&&(U.castShadow=!0,U.receiveShadow=!0)})});function Ct(b){let U=Yt[b],H={};return il.forEach(te=>{H[te]=new Ke(U[te])}),eu.forEach(te=>{H[te]=U[te]}),rl.forEach(te=>{H[te]=U.particles[te]}),H.leafColors=zt.colorsFor(U.leaves),H}function Re(b){let U={...b};return il.forEach(H=>{U[H]=b[H].clone()}),U.leafColors=b.leafColors.slice(),U}function dt(b,U,H,te){il.forEach($=>te[$].copy(b[$]).lerp(U[$],H)),eu.forEach($=>{te[$]=St(b[$],U[$],H)}),rl.forEach($=>{te[$]=St(b[$],U[$],H)});for(let $=0;$<te.leafColors.length;$+=1)te.leafColors[$]=St(b.leafColors[$],U.leafColors[$],H)}let Ve=new Ke(Ot.pondBed),ke={near:40,far:250},Ut=1;function T(b){let U=[b.ground,b.forest,b.rock,b.path,b.field,b.valley,Ve],H=Ge;for(let te=0;te<ee;te+=1){let $=U[fe[te]],oe=Ne[te],K=$.r*oe,me=$.g*oe,xe=$.b*oe,_e=te*9;H[_e]=K,H[_e+1]=me,H[_e+2]=xe,H[_e+3]=K,H[_e+4]=me,H[_e+5]=xe,H[_e+6]=K,H[_e+7]=me,H[_e+8]=xe}ue.attributes.color.needsUpdate=!0}function _(b){R.background.copy(b.sky),f.color.copy(b.sky),ae.color.copy(b.sky),ae.groundColor.copy(b.ground),ae.intensity=b.hemi,W.color.copy(b.key),W.intensity=b.keyIntensity,W.shadow.intensity=b.shadow,ke.near=b.fogNear,ke.far=b.fogFar,T(b),N.valley.color.copy(b.valley),N.tile.color.copy(b.tile),N.thatch.color.copy(b.thatch),N.pineCap.color.copy(b.pineCap),N.water.color.copy(b.water),zt.apply(b.leafColors,b.leafScale),Dt.apply(b.lotus),Ut=b.ripple,B.forEach(U=>{U.material.opacity=b[U.kind],U.points.visible=U.material.opacity>.01})}let V=Ct(w);_(V);function ce(){let b=window.devicePixelRatio||1;return u?1:Math.min(b,m==="high"?ni.pixelRatioHigh:ni.pixelRatioLow)}function ie(){W.castShadow=m==="high",Q.visible=m!=="high"}ie();let Me=xt.elevationMin*Ni,ve=xt.elevationMax*Ni,F=xt.startAzimuth*Ni,ne=xt.homeDistance,re={az:F,el:xt.startElevation*Ni,dist:ne,mix:0,target:$h.clone()},P={zoom:1,ox:0,oy:0,focusOx:0,focusOy:0},Y=1,se=1,pe="",be=1,ge=0,Oe=20,he=ne*xt.maxDistanceFactor,We=!0,He=!1,tt=0,we=null,ot=null,gt="",Sr=b=>ci(b,Oe,he);function Ma(){let b=re.dist<=Oe+.01,U=re.dist>=he-.01,H=`${b}|${U}`;H!==gt&&(gt=H,c({atMin:b,atMax:U}))}function an(){let b=St(P.ox,P.focusOx,re.mix),U=St(P.oy,P.focusOy,re.mix),H=`${b.toFixed(2)}|${U.toFixed(2)}|${Y}|${se}|${P.zoom}`;H!==pe&&(pe=H,M.setViewOffset(Y,se,b,U,Y,se),M.updateProjectionMatrix())}function nn(){an();let{az:b,el:U,dist:H,target:te}=re;M.position.set(te.x+H*Math.cos(U)*Math.sin(b),te.y+H*Math.sin(U),te.z+H*Math.cos(U)*Math.cos(b));let $=yi(M.position.x,M.position.z)+xt.groundClearance;M.position.y<$&&(M.position.y=$),M.lookAt(te),f.near=H+ke.near,f.far=H+ke.far,Ma()}function Mr(b,U){let H={az:re.az+p_((b.az??re.az)-re.az),el:ci(b.el??re.el,Me,ve),dist:Sr(b.dist??re.dist),mix:b.mix??re.mix,target:(b.target??re.target).clone()};if(E||U<=0){re.az=H.az,re.el=H.el,re.dist=H.dist,re.mix=H.mix,re.target.copy(H.target),we=null,le();return}we={from:{az:re.az,el:re.el,dist:re.dist,mix:re.mix,target:re.target.clone()},to:H,start:performance.now(),duration:U},le()}function Xi(b){if(!we)return;let{from:U,to:H,start:te,duration:$}=we,oe=Kh(ci((b-te)/$,0,1));re.az=St(U.az,H.az,oe),re.el=St(U.el,H.el,oe),re.dist=St(U.dist,H.dist,oe),re.mix=St(U.mix,H.mix,oe),re.target.lerpVectors(U.target,H.target,oe),oe>=1&&(we=null)}function ya(b){if(!ot)return;let{from:U,to:H,start:te,duration:$}=ot,oe=Kh(ci((b-te)/$,0,1));dt(U,H,oe,V),_(V),oe>=1&&(ot=null)}function ar(){we=null,We=!1,He||(He=!0,l())}let ji=r.map(({id:b,name:U})=>{let H=document.createElement("button");H.type="button",H.className="marker is-hidden",H.tabIndex=-1,H.dataset.id=b;let te=document.createElement("span");te.className="marker__pill";let $=document.createElement("span");$.className="marker__text",$.textContent=U,te.append($),H.append(te),H.addEventListener("click",()=>o(b)),i.append(H);let oe=vt[b];return{id:b,el:H,anchor:new G(oe.x,oe.top,oe.z),priority:oe.priority||0,occluded:!1,shown:!1,current:!1,half:null,height:0,pillW:0,pillH:0}}),yr=!1,bi=new G,Ea=0;function Er(b){let H=M.position;for(let te=1;te<28;te+=1){let $=te/28,oe=St(H.x,b.x,$),K=St(H.y,b.y,$),me=St(H.z,b.z,$);if(K<yi(oe,me)-.25)return!0}return!1}let ls=e.avoid||[];function sn(b){if(!yr)return;let U=t.clientWidth,H=t.clientHeight,te=b-Ea>120;te&&(Ea=b),ji.forEach(j=>{j.half===null&&(j.half=j.el.offsetWidth/2,j.height=j.el.offsetHeight,j.pillW=j.el.firstElementChild.offsetWidth,j.pillH=j.el.firstElementChild.offsetHeight)});let $=t.getBoundingClientRect(),oe=ls.map(j=>j.getBoundingClientRect()).filter(j=>j.width>0&&j.height>0).map(j=>({l:j.left-$.left,t:j.top-$.top,r:j.right-$.left,b:j.bottom-$.top})),K=4,me=(j,Se)=>j.l<Se.r+K&&j.r>Se.l-K&&j.t<Se.b+K&&j.b>Se.t-K,xe=(j,Se,Xe)=>{let ct=Xe-j.height/2;return{l:Se-j.pillW/2,r:Se+j.pillW/2,t:ct-j.pillH/2,b:ct+j.pillH/2}},_e=ji.map(j=>{te&&(j.occluded=Er(j.anchor)),bi.copy(j.anchor).project(M);let Se=(bi.x*.5+.5)*U,Xe=bi.z<1&&Se>ge&&bi.x<1.02&&bi.y>-1.02&&bi.y<1.08,ct=ge+j.half+K,ui=ci(Se,ct,Math.max(ct,U-j.half-K)),Ui=ci((-bi.y*.5+.5)*H,j.height+K,Math.max(j.height+K,H-K));return{m:j,x:ui,y:Ui,depth:bi.z,candidate:Xe&&!j.occluded}});_e.sort((j,Se)=>Number(Se.m.current)-Number(j.m.current)||Se.m.priority-j.m.priority||j.depth-Se.depth);let de=[];_e.forEach(j=>{let{y:Se}=j,Xe=j.candidate;if(Xe){let ct=xe(j.m,j.x,Se),ui=j.m.current&&oe.find(Ui=>me(ct,Ui));ui&&(Se+=ui.t>H/2?ui.t-K*2-ct.b:ui.b+K*2-ct.t,Se=ci(Se,j.m.height+K,Math.max(j.m.height+K,H-K)),ct=xe(j.m,j.x,Se)),oe.some(Ui=>me(ct,Ui))||de.some(Ui=>me(ct,Ui))?Xe=!1:de.push(ct)}j.m.el.style.transform=`translate3d(${j.x.toFixed(1)}px, ${Se.toFixed(1)}px, 0) translate(-50%, -100%)`,Xe!==j.m.shown&&(j.m.shown=Xe,j.m.el.classList.toggle("is-hidden",!Xe))})}let br=7.4,Di=0,Ti=0,ba=!document.hidden,v=!0,D=!1,q=!1,z={warmUntil:0,frames:0,total:0,prev:0};function k(){return d&&!u}function le(){!Di&&ba&&v&&!D&&!q&&(Di=requestAnimationFrame(Be))}function Ae(b){b!==m&&(m=b,ie(),Ye())}function Te(b,U){if(!U||m!=="high"||u||e.quality){z.warmUntil=0,z.prev=0;return}if(!z.warmUntil){z.warmUntil=b+ni.warmupMs,z.frames=0,z.total=0,z.prev=b;return}let H=b-z.prev;z.prev=b,!(b<z.warmUntil)&&(z.frames+=1,z.total+=H,z.total>=ni.sampleWindowMs&&(z.total/z.frames>ni.slowFrameMs&&Ae("low"),z.frames=0,z.total=0))}function Pe(b){Tt.forEach(U=>{let H=(b/Aa.ripple+U.phase)%1;U.ring.scale.setScalar(.25+H*1.5),U.mat.opacity=.55*(1-H)*Ut,U.ring.visible=U.mat.opacity>.01})}function Be(b){Di=0;let U=Ti?Math.min((b-Ti)/1e3,.1):0;Ti=b;let H=k();H&&(br+=U,!He&&!E&&!we&&We&&(tt+=U,re.az=F+xt.swayDegrees*Ni*Math.sin(tt/Aa.sway*li))),Xi(b),ya(b),Qt.update(br),wt.update(br),Pe(br),ht(br),nn(),A.render(R,M),sn(b),Te(b,H),H||we||ot?le():Ti=0}function Ye(){let b=t.clientWidth,U=t.clientHeight;if(!b||!U)return;A.setPixelRatio(ce()),A.setSize(b,U,!1),Gt.value=ni.particleMaxPx*A.getPixelRatio(),M.aspect=b/U;let H=u?{}:n();P=u?gs(g):ms(b,U,H),M.zoom=P.zoom,Y=b,se=U,pe="",an(),ge=u?0:Math.min(H.inset||0,b*.6),be=(b-ge)/U,Oe=bl(P.zoom),ji.forEach(te=>{te.half=null}),We&&!we&&(re.dist=ne),re.dist=Sr(re.dist),Ti=0,le()}let at=new AbortController,{signal:Le}=at,et=new Map,_t=null,lt=()=>{let[b,U]=[...et.values()];return{d:Math.max(1,Math.hypot(b.x-U.x,b.y-U.y)),my:(b.y+U.y)/2}};S.addEventListener("pointerdown",b=>{b.pointerType==="mouse"&&b.button!==0||(ar(),et.set(b.pointerId,{x:b.clientX,y:b.clientY,type:b.pointerType}),b.pointerType==="mouse"&&S.setPointerCapture(b.pointerId),_t=et.size===2?lt():null)},{signal:Le}),S.addEventListener("pointermove",b=>{let U=et.get(b.pointerId);if(!U)return;let H=b.clientX-U.x,te=b.clientY-U.y;U.x=b.clientX,U.y=b.clientY;let $=Math.PI/Math.max(320,t.clientHeight);if(et.size===1)re.az-=H*$*1.3,(U.type==="mouse"||y())&&(re.el=ci(re.el+te*$,Me,ve));else if(et.size===2&&_t){let oe=lt();re.dist=Sr(re.dist*(_t.d/oe.d)),re.el=ci(re.el+(oe.my-_t.my)*$,Me,ve),_t=oe}le()},{signal:Le});let pt=b=>{et.delete(b.pointerId),_t=et.size===2?lt():null};S.addEventListener("pointerup",pt,{signal:Le}),S.addEventListener("pointercancel",pt,{signal:Le}),S.addEventListener("wheel",b=>{if(!y())return;b.preventDefault(),ar();let U=b.deltaMode===1?b.deltaY*16:b.deltaY;re.dist=Sr(re.dist*Math.exp(U*.0012)),le()},{passive:!1,signal:Le}),S.addEventListener("webglcontextlost",b=>{b.preventDefault(),D=!0,Di&&cancelAnimationFrame(Di),Di=0,h()},{signal:Le}),S.addEventListener("webglcontextrestored",()=>{D=!1,Ti=0,le(),p()},{signal:Le}),document.addEventListener("visibilitychange",()=>{ba=!document.hidden,Ti=0,le()},{signal:Le});let yt=new ResizeObserver(()=>Ye());yt.observe(t);let Ue=new IntersectionObserver(b=>{v=b.some(U=>U.isIntersecting),Ti=0,le()});Ue.observe(t),x.addEventListener("change",()=>Ye(),{signal:Le}),Ye(),await new Promise(b=>{requestAnimationFrame(U=>{Be(U),b()})}),yr=!0;let Vt=b=>Mr({az:F,el:xt.startElevation*Ni,dist:ne,mix:0,target:$h},b);return{canvas:S,relayout(){Ye()},focus(b){let U=M_[b];U&&(ar(),Mr({az:U.azimuth*Ni,el:U.elevation*Ni,dist:U.distance*P.zoom*ci(1.25/be,1,2),mix:1,target:new G(...U.target)},s.camera))},reset(){we=null,Vt(s.camera),We=!0},rotateStep(b){ar(),Mr({az:re.az+b*xt.stepRotate*Ni},s.cameraStep)},zoomStep(b){ar();let U=b>0?xt.stepZoom:1/xt.stepZoom;Mr({dist:re.dist*U},s.cameraStep)},setSelected(b){ji.forEach(U=>{U.current=U.id===b,U.el.classList.toggle("is-current",U.current),U.half=null}),le()},setSeason(b,U){if(!Yt[b])return;w=b,S.setAttribute("aria-label",a(w));let H=Ct(b);if(!U||E||!d){ot=null,dt(H,H,1,V),_(V),le();return}ot={from:Re(V),to:H,start:performance.now(),duration:s.seasonShift},le()},setMotion(b){d=b,Ti=0,le()},setReduced(b){E=b,le()},loseContextForTest(){A.forceContextLoss()},get quality(){return m},cameraState(){return{azimuth:re.az/Ni,elevation:re.el/Ni,distance:re.dist,minDistance:Oe,maxDistance:he,zoom:P.zoom,target:re.target.toArray(),tweening:!!we,seasonTweening:!!ot}},markerState(){return ji.map(b=>{let U=b.el.getBoundingClientRect(),H=t.getBoundingClientRect();return{id:b.id,shown:b.shown,x:U.left-H.left+U.width/2,y:U.bottom-H.top}})},stats(){return{calls:A.info.render.calls,triangles:A.info.render.triangles,points:A.info.render.points,trees:zt.count,quality:m,season:w}},dispose(){q=!0,Di&&cancelAnimationFrame(Di),at.abort(),yt.disconnect(),Ue.disconnect(),R.traverse(b=>{b.geometry&&b.geometry.dispose()}),Object.values(N).forEach(b=>b.dispose()),O.forEach(b=>b.dispose()),ai.forEach(b=>b.dispose()),A.dispose(),S.remove(),ji.forEach(b=>b.el.remove())}}}var Ni,li,d_,ci,St,Kh,p_,ri,vr,ts,bt,$a,mi,Ja,xa,tu,g_,ol,yi,M_,$h,il,eu,rl,ru=on(()=>{Yh();cn();_s();Ni=Math.PI/180,li=Math.PI*2,d_=new G(0,1,0),ci=(e,t,i)=>Math.min(i,Math.max(t,e)),St=(e,t,i)=>e+(t-e)*i,Kh=e=>1-Math.pow(1-e,3),p_=e=>Math.atan2(Math.sin(e),Math.cos(e)),ri=(e,t,i)=>{let r=ci((i-e)/(t-e),0,1);return r*r*(3-2*r)},vr=(e,t,i)=>{let r=ci(.5+.5*(e-t)/i,0,1);return St(t,e,r)+i*r*(1-r)};ts={size:112,cz:-8},bt={x:vt.pond.x,z:vt.pond.z,rx:4.2,rz:2.6,water:.06,bed:-.55},$a={x0:10.5,x1:20,z0:6,z1:14,y:.22},mi={x:bt.x,z0:14.9,z1:8.1,rise:1.35,width:1.7},Ja=[[2.5,24],[3.6,18.6],[6.5,15.4],[6.5,7.7],[3.6,6.1],[-.6,5.5],[-2.5,5.2]],xa=[[-9.5,12.6,.15,"tile",!0],[-13.2,15.4,-.2,"thatch",!1],[-7,16.2,.05,"thatch",!0],[-10.6,19,.25,"tile",!1],[-15.6,11.2,-.1,"thatch",!1],[-4.6,13,-.12,"tile",!1],[-1,19.6,.1,"thatch",!0],[-5.8,20.6,-.2,"tile",!1],[1.2,13.8,.18,"thatch",!1],[10.4,16.2,-.15,"tile",!0],[13.6,18.8,.1,"thatch",!1],[8.4,19.8,.2,"tile",!1],[16.2,15.8,-.25,"thatch",!1],[12.2,21.8,.05,"tile",!1],[-12.8,22.4,.1,"thatch",!1],[6.4,22.6,-.1,"thatch",!1]];tu=(e,t)=>1-ri(.9,1.15,Math.hypot((e-bt.x)/bt.rx,(t-bt.z)/bt.rz));g_=(e,t)=>8.2*ri(9.5,-13,t)*(1-ri(11,20,Math.abs(e-.5))),ol=(e,t)=>1-ri(40,54,Math.max(Math.abs(e),Math.abs(t-ts.cz)));yi=v_;M_={gate:{target:[vt.gate.x,2.8,vt.gate.z],distance:32,azimuth:28,elevation:22},hall:{target:[vt.hall.x,9.2,vt.hall.z],distance:38,azimuth:8,elevation:24},pagoda:{target:[vt.pagoda.x,7,vt.pagoda.z],distance:31,azimuth:-22,elevation:22},pond:{target:[vt.pond.x,.9,vt.pond.z],distance:32,azimuth:32,elevation:30},bell:{target:[vt.bell.x,7.2,vt.bell.z],distance:31,azimuth:48,elevation:22}},$h=new G(...xt.homeTarget),il=["sky","key","ground","forest","field","path","valley","rock","tile","thatch","pineCap","water"],eu=["keyIntensity","hemi","shadow","fogNear","fogFar","leafScale","lotus","ripple"],rl=["petal","leaf","snow"]});cn();_s();var Fr=document.documentElement,ir=new URLSearchParams(window.location.search),au=e=>us.includes(e)?e:null,jt={state:ir.get("state"),poster:au(ir.get("poster")),season:au(ir.get("season")),select:ir.get("select"),motion:ir.get("motion"),quality:["high","low"].includes(ir.get("quality"))?ir.get("quality"):void 0,size:["wide","medium","narrow"].includes(ir.get("size"))?ir.get("size"):"wide"},Xt=(e,t=document)=>t.querySelector(e),Or=(e,t=document)=>[...t.querySelectorAll(e)],Fe={scene:Xt("#scene"),labels:Xt(".scene__labels"),poster:Xt(".scene__poster"),posterImg:Xt(".scene__poster img"),posterSources:Or(".scene__poster source"),progress:Xt(".scene__progress"),controls:Xt(".scene__controls"),toggles:Xt(".scene__toggles"),motionBtn:Xt('[data-action="motion"]'),seasonInputs:Or('input[name="season"]'),zoomIn:Xt('[data-action="zoom-in"]'),zoomOut:Xt('[data-action="zoom-out"]'),bannerRegion:Xt(".banner-region"),landmarksHead:Xt("#landmarks"),announcer:Xt("[data-announcer]"),backdrop:Xt(".panel-backdrop"),landmarkButtons:Or(".landmark"),details:Or("[data-detail]")},uu=e=>getComputedStyle(Fr).getPropertyValue(e).trim(),rr=e=>parseFloat(uu(e))||0,xr={camera:rr("--ds-motion-camera"),cameraStep:rr("--ds-motion-camera-step"),seasonShift:rr("--ds-motion-season-shift"),crossfade:rr("--ds-motion-crossfade"),loadingDelay:rr("--ds-motion-loading-delay"),loadingMin:rr("--ds-motion-loading-min"),loadingSlow:rr("--ds-motion-loading-slow"),contextRestore:rr("--ds-motion-context-restore"),hintHold:rr("--ds-motion-hint-hold")},is="\uC0B0\uBB38, \uBCF8\uB2F9, \uC11D\uD0D1, \uC5F0\uBABB\uACFC \uB3CC\uB2E4\uB9AC, \uC885\uAC01\uC774 \uC788\uB294 3D \uC7A5\uBA74",Ei={progress:"\uC0B0\uC0AC\uB97C \uADF8\uB9AC\uB294 \uC911\uC774\uC5D0\uC694",slow:"\uC5F0\uACB0\uC774 \uB290\uB824 3D \uC7A5\uBA74 \uD30C\uC77C\uC744 \uBC1B\uB294 \uB370 \uC2DC\uAC04\uC774 \uAC78\uB824\uC694. \uBAA9\uB85D\uC740 \uC9C0\uAE08 \uBCFC \uC218 \uC788\uC5B4\uC694.",slowAction:"3D \uC5C6\uC774 \uBCF4\uAE30",failed:"\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 3D \uC7A5\uBA74\uC744 \uADF8\uB9B4 \uC218 \uC5C6\uC5B4\uC694. \uBAA9\uB85D\uC5D0\uC11C \uBA85\uC18C\uB97C \uACE0\uB974\uBA74 \uC124\uBA85\uC744 \uBCFC \uC218 \uC788\uC5B4\uC694.",lost:"3D \uC7A5\uBA74\uC774 \uBA48\uCDC4\uC5B4\uC694. \uB2E4\uC2DC \uADF8\uB9AC\uBA74 \uC774\uC5B4\uC11C \uBCFC \uC218 \uC788\uC5B4\uC694.",lostAction:"\uB2E4\uC2DC \uADF8\uB9AC\uAE30",closeBanner:"\uC54C\uB9BC \uB2EB\uAE30",viewing:e=>`${e} \uBCF4\uB294 \uC911`,alt:{spring:`\uBD04, \uAF43\uC774 \uD540 \uC0B0 \uC911\uD131\uC758 \uC624\uB798\uB41C \uC808\uACFC \uADF8 \uC544\uB798 \uB9C8\uC744. ${is}`,summer:`\uC5EC\uB984, \uC9D9\uC740 \uCD08\uB85D \uC232\uC5D0 \uB458\uB7EC\uC2F8\uC778 \uC0B0 \uC911\uD131\uC758 \uC624\uB798\uB41C \uC808\uACFC \uADF8 \uC544\uB798 \uB9C8\uC744. ${is}`,autumn:`\uAC00\uC744, \uB2E8\uD48D\uC774 \uB4E0 \uC0B0 \uC911\uD131\uC758 \uC624\uB798\uB41C \uC808\uACFC \uADF8 \uC544\uB798 \uB9C8\uC744. ${is}`,winter:`\uACA8\uC6B8, \uB208 \uB36E\uC778 \uC0B0 \uC911\uD131\uC758 \uC624\uB798\uB41C \uC808\uACFC \uADF8 \uC544\uB798 \uB9C8\uC744. ${is}`}},pl=Fe.landmarkButtons.map(e=>({id:e.dataset.id,name:Xt(".landmark__name",e).textContent.trim()})),E_=e=>pl.find(t=>t.id===e)?.name??"",as=window.matchMedia("(prefers-reduced-motion: reduce)"),du=window.matchMedia(`(min-width: ${wa.wide}px)`),b_=window.matchMedia(`(min-width: ${wa.medium}px)`),Qe={mode:"loading",selected:null,season:jt.poster||jt.season||ln,reduced:as.matches,motion:jt.motion!=="off"&&!as.matches&&!jt.poster},Pt=null,ll=null,tn=!1,ns=0,nu=!1,T_=new ResizeObserver(()=>{ul(),Pt?.relayout()}),pu=e=>new Promise(t=>setTimeout(t,e));function Sa(e){Qe.mode=e,Fr.dataset.mode=e,fu()}var su=(e,t)=>{t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")};function fu(){let e=Qe.mode==="ready";Or(".scene__canvas",Fe.scene).forEach(t=>su(t,!e)),su(Fe.poster,e)}function fl(e){Fe.announcer.textContent="",e&&requestAnimationFrame(()=>Fe.announcer.textContent=e)}function os(){if(jt.poster)return;let e=new URL(window.location.href);Qe.selected?e.searchParams.set("select",Qe.selected):e.searchParams.delete("select"),Qe.season!==ln?e.searchParams.set("season",Qe.season):e.searchParams.delete("season");try{window.history.replaceState(null,"",e)}catch{}}function ml(){Fe.landmarkButtons.forEach(t=>{t.dataset.id===Qe.selected?t.setAttribute("aria-current","true"):t.removeAttribute("aria-current")});let e=Qe.selected??"intro";Fe.details.forEach(t=>t.classList.toggle("is-current",t.dataset.detail===e)),Pt?.setSelected(Qe.selected)}function hl(e){pl.some(t=>t.id===e)&&(Qe.selected=e,ml(),os(),fl(Ei.viewing(E_(e))),Pt&&Qe.mode==="ready"&&Pt.focus(e))}function mu(){let e=Qe.selected!==null;Qe.selected=null,ml(),os(),Pt&&Qe.mode==="ready"&&Pt.reset(),e&&fl("")}function cl(){Fe.motionBtn.dataset.motion=Qe.motion?"on":"off",Pt?.setMotion(Qe.motion)}var ou=(e,t)=>`assets/poster-${e}-${t}.webp`,gu=e=>Ei.alt[e]??Ei.alt[ln];function w_(){Fe.posterSources.forEach(e=>{e.srcset=ou(Qe.season,e.dataset.size)}),Fe.posterImg.src=ou(Qe.season,"narrow"),Fe.posterImg.alt=gu(Qe.season)}function _u(e){Fr.dataset.season=Qe.season,Fe.seasonInputs.forEach(t=>{t.checked=t.value===Qe.season}),w_(),Pt?.setSeason(Qe.season,e)}function A_(e){!us.includes(e)||e===Qe.season||(Qe.season=e,_u(!0),os())}function R_(){return du.matches?"wide":b_.matches?"medium":"narrow"}function C_(){return!du.matches||jt.poster?0:Fe.backdrop.getBoundingClientRect().right-Fe.scene.getBoundingClientRect().left}function vu(){let e=Fe.scene.getBoundingClientRect(),t=parseFloat(getComputedStyle(Fe.toggles).top)||0,i=parseFloat(uu("--ds-size-touch"))*parseFloat(getComputedStyle(Fr).fontSize)*.8,r=Fe.toggles.getBoundingClientRect(),a=Fe.controls.getBoundingClientRect(),n=r.height?r.bottom-e.top+i:0,s=a.height?a.top-e.top-t:e.height;return{inset:C_(),top:n,bottom:s}}function ul(){if(jt.poster)return;let e=Fe.scene.clientWidth,t=Fe.scene.clientHeight;if(!e||!t)return;let i=R_(),r=Fe.posterImg;if(r.naturalWidth&&r.naturalWidth!==nr[i].width){Fe.poster.classList.remove("is-placed");return}let a=El(i,e,t,vu());Fe.poster.classList.toggle("is-placed",!!a),a&&Object.entries(a).forEach(([n,s])=>{Fe.poster.style.setProperty(`--poster-${n}`,`${s.toFixed(1)}px`)})}function L_(){return Or(".tooltip",Fe.controls).some(t=>getComputedStyle(t).visibility==="visible")?(Fe.controls.classList.add("is-tip-dismissed"),Or(".icon-btn.is-tip",Fe.controls).forEach(t=>t.classList.remove("is-tip")),!0):!1}function lu(e,t){let i=Xt(".tooltip",e);e.setAttribute("aria-disabled",t?"true":"false"),i.textContent=t?i.dataset.limit:e.getAttribute("aria-label"),t?e.setAttribute("aria-describedby",i.id):e.removeAttribute("aria-describedby")}function P_({atMin:e,atMax:t}){lu(Fe.zoomIn,e),lu(Fe.zoomOut,t)}function N_(e){!Pt||Qe.mode!=="ready"||(e==="rotate-left"?Pt.rotateStep(1):e==="rotate-right"?Pt.rotateStep(-1):e==="zoom-in"?Pt.zoomStep(1):e==="zoom-out"?Pt.zoomStep(-1):e==="reset"&&mu())}function cu(e,t){let i=document.createElement("button");return i.type="button",i.className=e,i.textContent=t,i}var hu=e=>e.getClientRects().length>0&&getComputedStyle(e).visibility!=="hidden";function xu(){if(!Fe.bannerRegion.contains(document.activeElement))return;([Fe.motionBtn,...Fe.seasonInputs.filter(i=>i.checked)].find(i=>hu(i)||i.type==="radio"&&hu(i.closest(".season")))??Fe.landmarksHead).focus()}function rn(){xu(),Fe.bannerRegion.replaceChildren()}function gl({text:e,action:t,onAction:i}){let r=document.createElement("div");r.className="banner";let a=document.createElement("div");a.className="banner__body";let n=document.createElement("p");if(n.className="banner__text",n.textContent=e,a.append(n),t){let o=cu("btn",t);o.addEventListener("click",i),a.append(o)}let s=cu("icon-btn icon-btn--plain","");s.setAttribute("aria-label",Ei.closeBanner),s.innerHTML='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',s.addEventListener("click",rn),r.append(a,s),xu(),Fe.bannerRegion.replaceChildren(r)}var dl=0,rs=0;function Su(){clearTimeout(dl),dl=setTimeout(()=>{Fe.progress.textContent=Ei.progress,rs=performance.now()},xr.loadingDelay)}async function _l(){if(clearTimeout(dl),rs){let e=xr.loadingMin-(performance.now()-rs);e>0&&await pu(e)}Fe.progress.textContent="",rs=0}function Mu(){Fe.poster.classList.remove("is-fading"),Fe.poster.hidden=!1}function yu(){Fe.poster.classList.add("is-fading"),setTimeout(()=>{Qe.mode==="ready"&&(Fe.poster.hidden=!0)},Qe.reduced?0:xr.crossfade)}function ss(e){Sa("fallback"),_l(),Mu(),e?gl({text:e}):rn()}function I_(){tn=!0,ss(null)}function D_(){Qe.mode==="loading"&&(_l(),gl({text:Ei.slow,action:Ei.slowAction,onAction:I_}))}function U_(){Sa("lost"),Mu(),clearTimeout(ns),ns=setTimeout(()=>{gl({text:Ei.lost,action:Ei.lostAction,onAction:F_})},xr.contextRestore)}function O_(){clearTimeout(ns),rn(),Sa("ready"),yu()}async function F_(){rn(),clearTimeout(ns),Pt?.dispose(),Pt=null,Sa("loading"),Su();try{await Eu()}catch(e){console.error(e),ss(Ei.failed)}}function B_(){try{let e=document.createElement("canvas").getContext("webgl2");return e?.getExtension("WEBGL_lose_context")?.loseContext(),!!e}catch{return!1}}async function Eu(){if(ll=ll||await Promise.resolve().then(()=>(ru(),iu)),tn)return;let e=await ll.createScene({container:Fe.scene,labelLayer:Fe.labels,landmarks:pl,canvasLabel:gu,getFrame:vu,durations:xr,season:Qe.season,motion:Qe.motion,reduced:Qe.reduced,poster:!!jt.poster,posterSize:jt.size,avoid:[Fe.toggles,Fe.controls],quality:jt.quality,onSelect:hl,onZoomLimits:P_,onContextLost:U_,onContextRestored:O_});if(tn){e.dispose();return}Pt=e,window.templeSeasons={scene:Pt,state:Qe},await _l(),rn(),Sa("ready"),Pt.setSelected(Qe.selected),Qe.selected&&Pt.focus(Qe.selected),yu(),jt.poster&&(Fr.dataset.posterReady="true"),jt.state==="lost"&&!nu&&(nu=!0,setTimeout(()=>Pt?.loseContextForTest(),800))}async function z_(){if(window.templeSeasonsBooted=!0,Fr.classList.add("js"),Sa("loading"),jt.poster&&Fr.classList.add("is-poster"),ml(),cl(),_u(!1),ul(),Fe.posterImg.addEventListener("load",ul),[Fe.scene,Fe.backdrop,Fe.toggles,Fe.controls].forEach(t=>T_.observe(t)),new MutationObserver(fu).observe(Fe.scene,{childList:!0}),jt.select&&hl(jt.select),os(),Fe.landmarkButtons.forEach(t=>{t.addEventListener("click",()=>hl(t.dataset.id))}),Fe.controls.addEventListener("click",t=>{if(t.target.closest(".tooltip"))return;let i=t.target.closest("[data-action]");if(i){if(i.getAttribute("aria-disabled")==="true"){let r=Xt(".tooltip",i);i.classList.add("is-tip"),fl(r.textContent),clearTimeout(i.tipTimer),i.tipTimer=setTimeout(()=>i.classList.remove("is-tip"),xr.hintHold);return}N_(i.dataset.action)}}),Fe.motionBtn.addEventListener("click",()=>{Qe.motion=!Qe.motion,cl()}),Fe.seasonInputs.forEach(t=>{t.addEventListener("change",()=>{t.checked&&A_(t.value)})}),document.addEventListener("keydown",t=>{t.key!=="Escape"||t.defaultPrevented||L_()||mu()}),Fe.controls.addEventListener("pointerleave",()=>Fe.controls.classList.remove("is-tip-dismissed")),Fe.controls.addEventListener("focusin",()=>Fe.controls.classList.remove("is-tip-dismissed")),as.addEventListener("change",()=>{Qe.reduced=as.matches,Pt?.setReduced(Qe.reduced),Qe.reduced&&(Qe.motion=!1,cl())}),jt.state==="nowebgl"||!B_()){ss(Ei.failed);return}Su();let e=setTimeout(D_,xr.loadingSlow);try{if(jt.state==="slow"&&await pu(xr.loadingSlow+3e4),tn)return;await Eu()}catch(t){console.error(t),tn||ss(Ei.failed)}finally{clearTimeout(e)}}z_();})();
