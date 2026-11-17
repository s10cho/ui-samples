/* 생성물 — tools/build-app.mjs 가 js/ 와 vendor/three 로 만든다. 직접 고치지 않는다. */
(()=>{var hu=Object.defineProperty;var ma=(e,t)=>()=>(e&&(t=e(e=0)),t);var uu=(e,t)=>{for(var i in t)hu(e,i,{get:t[i],enumerable:!0})};var ga,st,lr,el,Ye,di,ht,Ar,tl,Rr,Ja=ma(()=>{ga={medium:600,wide:1024},st={bg:14605268,plaza:13617856,plazaPath:12828081,slabTop:15987180,slabSide:11117463,wall:16250353,wallTop:14473423,partition:15328992,glass:9345696,room:{lobby:15328215,shop:14935770,kids:15261138,life:15130059,pottery:14476002,media:14277600,paintings:14999251,special:14541530,garden:12175520,cafe:15129805},roomSelected:13624280,accent:3041871,hall:15526629,stairs:13157046,restroom:14081248,shaft:9212559,car:4147012,carFront:7174003,door:5988959,caseGlass:13227736,plinth:15328992,ink:5199699,wood:11044703,frame:7035722,art:[11895615,7310236,10248014,8294250],pot:[10251086,7310236,14142904,8022616],blocks:[13209434,8363954,12034906,9413498],screen:3752254,leaf:7245658,trunk:8021068,here:1844001,visitors:[5136759,9071189,6257244,10124111,7040626],instanceBase:16777215},lr={hemiSky:16777215,hemiGround:12104358,hemi:1.9,key:16774890,keyIntensity:1.7,keyPosition:[-14,30,20]},el=.75,Ye={floors:4,width:16,depth:10,slab:.3,wallLow:.9,wallFull:2.3,gap:{exploded:6.5,stacked:2.6},lift:{exploded:8,stacked:14},coreZ:-2.4,topContent:2.6},di={elevatorTravel:3,elevatorDwell:2,visitorSpeed:.6,visitorDwell:1.6,autoRotate:90},ht={fov:30,homeAzimuth:30,homeElevation:30,homeDistance:70,fitRadius:9.6,labelLift:1.2,homeShare:.96,floorView:{azimuth:20,elevation:55,share:.92},roomView:{azimuth:20,elevation:50,shareW:.7,shareH:.5},elevationMin:15,elevationMax:75,stepRotate:30,stepZoom:.75,closestRoom:5,closestShare:.5,maxDistanceFactor:1.5},Ar={tx:.27,ty:.28},tl={wide:{k:2400,width:1296,height:1344},medium:{k:1600,width:864,height:896},narrow:{k:1100,width:594,height:616}},Rr={pixelRatioHigh:2,pixelRatioLow:1.5,slowFrameMs:33,sampleWindowMs:2e3,warmupMs:1200}});function al(e,t){let i=Math.cos(e),r=Math.sin(e),a=Math.cos(t),n=Math.sin(t);return{b:[a*r,n,a*i],r:[i,0,-r],u:[-n*r,a,-n*i]}}function il(e,t,i,r){let a={minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0};return e.forEach(n=>{let s=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],o=r-Cr(s,i.b),l=Cr(s,i.r)/o,c=Cr(s,i.u)/o;a.minX=Math.min(a.minX,l),a.maxX=Math.max(a.maxX,l),a.minY=Math.min(a.minY,c),a.maxY=Math.max(a.maxY,c)}),a}function pu(e,t,i,r=32){let a=[];for(let n=0;n<r;n+=1){let s=n/r*Math.PI*2,o=Math.cos(s)*e,l=Math.sin(s)*e;a.push([o,t,l],[o,i,l])}return a}function nl(e){let t=(Ye.floors-1)*Ye.gap[e]+Ye.topContent+ht.labelLift;return[-Ye.slab,t]}function sl(e){let[t,i]=nl(e);return pu(ht.fitRadius,t,i)}function ol(e,t){let i=sl(e),[r,a]=nl(e),n=(r+a)/2;for(let o=0;o<8;o+=1){let l=il(i,[0,n,0],rl,t);n+=(l.minY+l.maxY)/2*t/Math.cos(Qa)}let s=il(i,[0,n,0],rl,t);return{target:[0,n,0],hx:Math.max(-s.minX,s.maxX),hy:Math.max(-s.minY,s.maxY)}}function $a(e){return Math.min(e.width/2/Xt.hx,e.height/2/Xt.hy)*ht.homeShare}function ll(e,t){return e*du/(t/2)}function en(e,t,i,r,a,n,s){let o=al(i,r),l=n/a,c=s/a,h=0;return e.forEach(f=>{let u=[f[0]-t[0],f[1]-t[1],f[2]-t[2]],_=Cr(u,o.b);h=Math.max(h,Math.abs(Cr(u,o.r))/l+_,Math.abs(Cr(u,o.u))/c+_)}),h}function cl(e,t){let i=ol("stacked",ht.homeDistance),r=e.width/2*ht.homeShare,a=e.height/2*ht.homeShare,n=en(sl("stacked"),i.target,es,Qa,t,r,a);return{target:i.target,distance:n}}function ts([e,t,i],[r,a,n]){let s=[];return[-1,1].forEach(o=>[-1,1].forEach(l=>[-1,1].forEach(c=>s.push([e+o*r/2,t+l*a/2,i+c*n/2])))),s}function hl(e,t){return ht.closestRoom*e/(ht.closestShare*t.height)}function ul(e,t){let i=2*Ar.tx*t,r=2*Ar.ty*t;return{left:e.cx-i/2,top:e.cy-r/2,width:i,height:r}}var $n,du,Cr,es,Qa,rl,Xt,is=ma(()=>{Ja();$n=Math.PI/180,du=Math.tan(ht.fov/2*$n),Cr=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];es=ht.homeAzimuth*$n,Qa=ht.homeElevation*$n,rl=al(es,Qa);Xt={azimuth:es,elevation:Qa,distance:ht.homeDistance,...ol("exploded",ht.homeDistance)}});function qu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Yu(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Hn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Ku(){let e=Hn("canvas");return e.style.display="block",e}function yl(...e){let t="THREE."+e.shift();ia?ia("log",t,...e):console.log(t,...e)}function Bc(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ue(...e){e=Bc(e);let t="THREE."+e.shift();if(ia)ia("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Fe(...e){e=Bc(e);let t="THREE."+e.shift();if(ia)ia("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Ln(...e){let t=e.join(" ");t in Ml||(Ml[t]=!0,Ue(...e))}function Zu(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}function Da(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vt[e&255]+Vt[e>>8&255]+Vt[e>>16&255]+Vt[e>>24&255]+"-"+Vt[t&255]+Vt[t>>8&255]+"-"+Vt[t>>16&15|64]+Vt[t>>24&255]+"-"+Vt[i&63|128]+Vt[i>>8&255]+"-"+Vt[i>>16&255]+Vt[i>>24&255]+Vt[r&255]+Vt[r>>8&255]+Vt[r>>16&255]+Vt[r>>24&255]).toLowerCase()}function Ze(e,t,i){return Math.max(t,Math.min(i,e))}function Qu(e,t){return(e%t+t)%t}function cs(e,t,i){return(1-i)*e+i*t}function $u(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Do(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ed(e,t){if(t.constructor===Float32Array)return e;let i=Do(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function td(e,t){if(t.constructor===Float32Array)return e;let i=Do(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}function id(){let e={enabled:!0,workingColorSpace:Bn,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===it&&(a.r=zi(a.r),a.g=zi(a.g),a.b=zi(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===it&&(a.r=Yr(a.r),a.g=Yr(a.g),a.b=Yr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===er?zn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[s].fromXYZ).multiply(this.spaces[n].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Bn]:{primaries:t,whitePoint:r,transfer:zn,toXYZ:Tl,fromXYZ:bl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:r,transfer:it,toXYZ:Tl,fromXYZ:bl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),e}function zi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Yr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function ds(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?rd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}function gs(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}function Ts(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){hr.fromArray(e,n);let o=a.x*Math.abs(hr.x)+a.y*Math.abs(hr.y)+a.z*Math.abs(hr.z),l=t.dot(hr),c=i.dot(hr),h=r.dot(hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function yd(e,t,i,r,a,n,s,o){let l;if(t.side===Zt?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===mr,o),l===null)return null;_n.copy(o),_n.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(_n);return c<i.near||c>i.far?null:{distance:c,point:_n.clone(),object:e}}function vn(e,t,i,r,a,n,s,o,l,c){e.getVertexPosition(o,pn),e.getVertexPosition(l,fn),e.getVertexPosition(c,mn);let h=yd(e,t,i,r,pn,fn,mn,Ol);if(h){let f=new k;va.getBarycoord(Ol,pn,fn,mn,f),a&&(h.uv=va.getInterpolatedAttribute(a,o,l,c,f,new Qe)),n&&(h.uv1=va.getInterpolatedAttribute(n,o,l,c,f,new Qe)),s&&(h.normal=va.getInterpolatedAttribute(s,o,l,c,f,new k),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new k,materialIndex:0};va.getNormal(pn,fn,mn,u.normal),h.face=u,h.barycoord=f}return h}function na(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Gl(a))a.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Gl(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function jt(e){let t={};for(let i=0;i<e.length;i++){let r=na(e[i]);for(let a in r)t[a]=r[a]}return t}function Gl(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function wd(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function sh(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ke.workingColorSpace}function Gr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Mn(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function lh(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function Fd(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function Bd(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=lh(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=Fd(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}function Vl(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function kl(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}function Kl(e,t){return e.distance-t.distance}function Eo(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)Eo(n[s],t,i,!0)}}function Zl(e,t,i,r){let a=ap(r);switch(i){case Dc:return e*t;case Co:return e*t/a.components*a.byteLength;case Po:return e*t/a.components*a.byteLength;case gr:return e*t*2/a.components*a.byteLength;case Lo:return e*t*2/a.components*a.byteLength;case Ic:return e*t*3/a.components*a.byteLength;case Ti:return e*t*4/a.components*a.byteLength;case No:return e*t*4/a.components*a.byteLength;case An:case Rn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Cn:case Pn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ks:case Xs:return Math.max(e,16)*Math.max(t,8)/4;case Vs:case Ws:return Math.max(e,8)*Math.max(t,8)/2;case js:case qs:case Ks:case Zs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ys:case Un:case Js:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $s:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case eo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case to:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case io:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ao:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case so:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case oo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case lo:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case co:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ho:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case uo:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case po:case fo:case mo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case go:case _o:return Math.ceil(e/4)*Math.ceil(t/4)*8;case On:case vo:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ap(e){switch(e){case ri:case Cc:return{byteLength:1,components:1};case Pa:case Pc:case Ai:return{byteLength:2,components:1};case Ao:case Ro:return{byteLength:2,components:4};case wi:case wo:case gi:return{byteLength:4,components:1};case Lc:case Nc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}function gh(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function np(e){let t=new WeakMap;function i(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let _;if(c instanceof Float32Array)_=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=e.HALF_FLOAT:_=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=e.SHORT;else if(c instanceof Uint32Array)_=e.UNSIGNED_INT;else if(c instanceof Int32Array)_=e.INT;else if(c instanceof Int8Array)_=e.BYTE;else if(c instanceof Uint8Array)_=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function r(o,l,c){let h=l.array,f=l.updateRanges;if(e.bindBuffer(c,o),f.length===0)e.bufferSubData(c,0,h);else{f.sort((_,S)=>_.start-S.start);let u=0;for(let _=1;_<f.length;_++){let S=f[u],M=f[_];M.start<=S.start+S.count+1?S.count=Math.max(S.count,M.start+M.count-S.start):(++u,f[u]=M)}f.length=u+1;for(let _=0,S=f.length;_<S;_++){let M=f[_];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}function Gm(e,t,i,r,a,n){let s=new ze(0),o=a===!0?0:1,l,c,h=null,f=0,u=null;function _(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let E=b.backgroundBlurriness>0;A=t.get(A,E)}return A}function S(b){let A=!1,E=_(b);E===null?m(s,o):E&&E.isColor&&(m(E,1),A=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,n):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(b,A){let E=_(A);E&&E.isCubeTexture?(c===void 0&&(c=new zt(new Oa(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:na(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,L,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_h),c.material.toneMapped=Ke.getTransfer(E.colorSpace)!==it,(h!==E||f!==E.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,u=e.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new zt(new ih(2,2),new _r({name:"BackgroundMaterial",uniforms:na(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(E.colorSpace)!==it,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=E,f=E.version,u=e.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,A){b.getRGB(Tn,sh(e)),i.buffers.color.setClear(Tn.r,Tn.g,Tn.b,A,n)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,A=1){s.set(b),o=A,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(s,o)},render:S,addToRenderList:M,dispose:d}}function Vm(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(U,B,Z,I,W){let ie=!1,G=f(U,I,Z,B);n!==G&&(n=G,c(n.object)),ie=_(U,I,Z,W),ie&&S(U,I,Z,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(ie||s)&&(s=!1,E(U,B,Z,I),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function h(U){return e.deleteVertexArray(U)}function f(U,B,Z,I){let W=I.wireframe===!0,ie=r[B.id];ie===void 0&&(ie={},r[B.id]=ie);let G=U.isInstancedMesh===!0?U.id:0,de=ie[G];de===void 0&&(de={},ie[G]=de);let Q=de[Z.id];Q===void 0&&(Q={},de[Z.id]=Q);let $=Q[W];return $===void 0&&($=u(l()),Q[W]=$),$}function u(U){let B=[],Z=[],I=[];for(let W=0;W<i;W++)B[W]=0,Z[W]=0,I[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:I,object:U,attributes:{},index:null}}function _(U,B,Z,I){let W=n.attributes,ie=B.attributes,G=0,de=Z.getAttributes();for(let Q in de)if(de[Q].location>=0){let $=W[Q],ce=ie[Q];if(ce===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(ce=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(ce=U.instanceColor)),$===void 0||$.attribute!==ce||ce&&$.data!==ce.data)return!0;G++}return n.attributesNum!==G||n.index!==I}function S(U,B,Z,I){let W={},ie=B.attributes,G=0,de=Z.getAttributes();for(let Q in de)if(de[Q].location>=0){let $=ie[Q];$===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&($=U.instanceColor));let ce={};ce.attribute=$,$&&$.data&&(ce.data=$.data),W[Q]=ce,G++}n.attributes=W,n.attributesNum=G,n.index=I}function M(){let U=n.newAttributes;for(let B=0,Z=U.length;B<Z;B++)U[B]=0}function m(U){d(U,0)}function d(U,B){let Z=n.newAttributes,I=n.enabledAttributes,W=n.attributeDivisors;Z[U]=1,I[U]===0&&(e.enableVertexAttribArray(U),I[U]=1),W[U]!==B&&(e.vertexAttribDivisor(U,B),W[U]=B)}function b(){let U=n.newAttributes,B=n.enabledAttributes;for(let Z=0,I=B.length;Z<I;Z++)B[Z]!==U[Z]&&(e.disableVertexAttribArray(Z),B[Z]=0)}function A(U,B,Z,I,W,ie,G){G===!0?e.vertexAttribIPointer(U,B,Z,W,ie):e.vertexAttribPointer(U,B,Z,I,W,ie)}function E(U,B,Z,I){M();let W=I.attributes,ie=Z.getAttributes(),G=B.defaultAttributeValues;for(let de in ie){let Q=ie[de];if(Q.location>=0){let $=W[de];if($===void 0&&(de==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),de==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),$!==void 0){let ce=$.normalized,Re=$.itemSize,K=t.get($);if(K===void 0)continue;let le=K.buffer,Ee=K.type,Me=K.bytesPerElement,Le=Ee===e.INT||Ee===e.UNSIGNED_INT||$.gpuType===wo;if($.isInterleavedBufferAttribute){let me=$.data,He=me.isInterleavedBuffer===!0?me.stride:me.itemSize,je=$.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Ce=0;Ce<Q.locationSize;Ce++)d(Q.location+Ce,me.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ce=0;Ce<Q.locationSize;Ce++)m(Q.location+Ce);e.bindBuffer(e.ARRAY_BUFFER,le);for(let Ce=0;Ce<Q.locationSize;Ce++)A(Q.location+Ce,Re/Q.locationSize,Ee,ce,He*Me,(je+Re/Q.locationSize*Ce)*Me,Le)}else{if($.isInstancedBufferAttribute){for(let me=0;me<Q.locationSize;me++)d(Q.location+me,$.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let me=0;me<Q.locationSize;me++)m(Q.location+me);e.bindBuffer(e.ARRAY_BUFFER,le);for(let me=0;me<Q.locationSize;me++)A(Q.location+me,Re/Q.locationSize,Ee,ce,Re*Me,Re/Q.locationSize*me*Me,Le)}}else if(G!==void 0){let ce=G[de];if(ce!==void 0)switch(ce.length){case 2:e.vertexAttrib2fv(Q.location,ce);break;case 3:e.vertexAttrib3fv(Q.location,ce);break;case 4:e.vertexAttrib4fv(Q.location,ce);break;default:e.vertexAttrib1fv(Q.location,ce)}}}}b()}function w(){C();for(let U in r){let B=r[U];for(let Z in B){let I=B[Z];for(let W in I){let ie=I[W];for(let G in ie)h(ie[G].object),delete ie[G];delete I[W]}}delete r[U]}}function L(U){if(r[U.id]===void 0)return;let B=r[U.id];for(let Z in B){let I=B[Z];for(let W in I){let ie=I[W];for(let G in ie)h(ie[G].object),delete ie[G];delete I[W]}}delete r[U.id]}function p(U){for(let B in r){let Z=r[B];for(let I in Z){let W=Z[I];if(W[U.id]===void 0)continue;let ie=W[U.id];for(let G in ie)h(ie[G].object),delete ie[G];delete W[U.id]}}}function y(U){for(let B in r){let Z=r[B],I=U.isInstancedMesh===!0?U.id:0,W=Z[I];if(W!==void 0){for(let ie in W){let G=W[ie];for(let de in G)h(G[de].object),delete G[de];delete W[ie]}delete Z[I],Object.keys(Z).length===0&&delete r[B]}}}function C(){V(),s=!0,n!==a&&(n=a,c(n.object))}function V(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:C,resetDefaultState:V,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfObject:y,releaseStatesOfProgram:p,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function km(e,t,i){let r;function a(l){r=l}function n(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function s(l,c,h){h!==0&&(e.drawArraysInstanced(r,l,c,h),i.update(c,r,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];i.update(f,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function Wm(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let p=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(p){return!(p!==Ti&&r.convert(p)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(p){let y=p===Ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(p!==ri&&p!==gi&&!y&&r.convert(p)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(p){if(p==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);h!==c&&(Ue("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.logarithmicDepthBuffer===!0&&f===!1;i.reversedDepthBuffer===!0&&f===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&f===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let _=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),L=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:_,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:E,maxSamples:w,samples:L}}function Xm(e){let t=this,i=null,r=0,a=!1,n=!1,s=new $i,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let _=f.length!==0||u||r!==0||a;return a=u,r=f.length,_},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(f,u){i=h(f,u,0)},this.setState=function(f,u,_){let S=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,d=e.get(f);if(!a||S===null||S.length===0||n&&!m)n?h(null):c();else{let b=n?0:r,A=b*4,E=d.clippingState||null;l.value=E,E=h(S,u,A,_);for(let w=0;w!==A;++w)E[w]=i[w];d.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function h(f,u,_,S){let M=f!==null?f.length:0,m=null;if(M!==0){if(m=l.value,S!==!0||m===null){let d=_+M*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,E=_;A!==M;++A,E+=4)s.copy(f[A]).applyMatrix4(b,o),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function $l(e,t,i){return new Ho(e,{minFilter:tr,generateMipmaps:t,type:Ai,colorSpace:Bn,depthBuffer:i})}function Ha(e,t,i){return new _r({name:e,uniforms:t,vertexShader:ke.cube_vert,fragmentShader:i,side:Zt,blending:qr,depthTest:!1,depthWrite:!1})}function Jm(){return Ha("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vh}u

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
	`)}function Qm(){return Ha("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:xh}},`

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
	`)}function $m(){return Ha("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${qm}
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
	`)}function ec(){return Ha("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function tc(){return Ha("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function eg(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,_=!1){return u==null?null:_?s(u):n(u)}function n(u){if(u&&u.isTexture){let _=u.mapping;if(_===rs||_===as)if(t.has(u)){let S=t.get(u).texture;return o(S,u.mapping)}else{let S=u.image;if(S&&S.height>0){let M=new Ho(S.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let _=u.mapping,S=_===rs||_===as,M=_===ea||_===Ca;if(S||M){let m=i.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return r===null&&(r=new Ql(e)),m=S?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return S&&b&&b.height>0||M&&b&&l(b)?(r===null&&(r=new Ql(e)),m=S?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,_){return _===rs?u.mapping=ea:_===as&&(u.mapping=Ca),u}function l(u){let _=0,S=6;for(let M=0;M<S;M++)u[M]!==void 0&&_++;return _===S}function c(u){let _=u.target;_.removeEventListener("dispose",c);let S=t.get(_);S!==void 0&&(t.delete(_),S.dispose())}function h(u){let _=u.target;_.removeEventListener("dispose",h);let S=i.get(_);S!==void 0&&(i.delete(_),S.dispose())}function f(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:f}}function tg(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Ln("WebGLRenderer: "+r+" extension not supported."),a}}}function ig(e,t,i,r){let a={},n=new WeakMap,s=new FinalizationRegistry(S=>delete a[S]);function o(S){l(S.target)}function l(S){S.index!==null&&t.remove(S.index);for(let m in S.attributes)t.remove(S.attributes[m]);S.removeEventListener("dispose",o),delete a[S.id],s.unregister(S);let M=n.get(S);M&&(t.remove(M),n.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function c(S,M){return a[M.id]!==void 0||(M.addEventListener("dispose",o),a[M.id]=new WeakRef(M),s.register(M,M.id,M),i.memory.geometries++),M}function h(S){let M=S.attributes;for(let m in M)t.update(M[m],e.ARRAY_BUFFER)}function f(S){let M=S.index,m=S.attributes.position,d=0;if(m===void 0)return;let b=M!==null?M.array.length:m.array.length/3-1,A=m.count>=65535?Wc:kc,E=new A(Math.ceil(b/3)*6,1),w=E.array;if(M!==null){let p=M.array;d=M.version;for(let y=0,C=0;y<b;y+=3){let V=p[y+0],U=p[y+1],B=p[y+2];w[C++]=V,w[C++]=U,w[C++]=U,w[C++]=B,w[C++]=B,w[C++]=V}}else{d=m.version;for(let p=0,y=0;p<b;p+=3){let C=p+0,V=p+1,U=p+2;w[y++]=C,w[y++]=V,w[y++]=V,w[y++]=U,w[y++]=U,w[y++]=C}}E.version=d;let L=n.get(S);L&&t.remove(L),n.set(S,E)}function u(S){let M=n.get(S);if(M){let m=S.index;m!==null&&M.version<m.version&&f(S)}else f(S);return n.get(S)}function _(){for(let S in a){let M=a[S].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:_}}function rg(e,t,i){let r;function a(f){r=f}let n,s;function o(f){n=f.type,s=f.bytesPerElement}function l(f,u){e.drawElements(r,u,n,f*s),i.update(u,r,1)}function c(f,u,_){_!==0&&(e.drawElementsInstanced(r,u,n,f*s,_),i.update(u,r,_))}function h(f,u,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,f,0,_);let S=0;for(let M=0;M<_;M++)S+=u[M];i.update(S,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ag(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Fe("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function ng(e,t,i){let r=new WeakMap,a=new xt;function n(s,o,l){let c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=r.get(o);if(u===void 0||u.count!==f){let _=function(){y.dispose(),r.delete(o),o.removeEventListener("dispose",_)};u!==void 0&&u.texture.dispose();let S=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],E=0;S===!0&&(E=1),M===!0&&(E=2),m===!0&&(E=3);let w=o.attributes.position.count*E,L=1;w>t.maxTextureSize&&(L=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let p=new Float32Array(w*L*4*f),y=new zc(p,w,L,f);y.type=gi,y.needsUpdate=!0;let C=E*4;for(let V=0;V<f;V++){let U=d[V],B=b[V],Z=A[V],I=w*L*4*V;for(let W=0;W<U.count;W++){let ie=W*C;S===!0&&(a.fromBufferAttribute(U,W),p[I+ie+0]=a.x,p[I+ie+1]=a.y,p[I+ie+2]=a.z,p[I+ie+3]=0),M===!0&&(a.fromBufferAttribute(B,W),p[I+ie+4]=a.x,p[I+ie+5]=a.y,p[I+ie+6]=a.z,p[I+ie+7]=0),m===!0&&(a.fromBufferAttribute(Z,W),p[I+ie+8]=a.x,p[I+ie+9]=a.y,p[I+ie+10]=a.z,p[I+ie+11]=Z.itemSize===4?a.w:1)}}u={count:f,texture:y,size:new Qe(w,L)},r.set(o,u),o.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let _=0;for(let M=0;M<c.length;M++)_+=c[M];let S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(e,"morphTargetBaseInfluence",S),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function sg(e,t,i,r,a){let n=new WeakMap;function s(c){let h=a.render.frame,f=c.geometry,u=t.get(c,f);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let _=c.skeleton;n.get(_)!==h&&(_.update(),n.set(_,h))}return u}function o(){n=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),r.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:o}}function lg(e,t,i,r,a,n){let s=new bi(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Hi;h.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ut([0,2,0,0,2,0],2));let f=new Pd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new zt(h,f),_=new ph(-1,1,1,-1,0,1),S=null,M=null,m=!1,d,b=null,A=[],E=!1;this.setSize=function(w,L){s.setSize(w,L),o!==null&&o.setSize(w,L),l!==null&&l.setSize(w,L);for(let p=0;p<A.length;p++){let y=A[p];y.setSize&&y.setSize(w,L)}},this.setEffects=function(w){A=w,E=A.length>0&&A[0].isRenderPass===!0;let L=s.width,p=s.height;A.length>0&&o===null&&(o=new bi(L,p,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),l=new bi(L,p,{type:Ai,depthBuffer:!1,stencilBuffer:!1}));let y=a===!0&&A.some(C=>C.needsDepthTexture===!0);y!==(s.depthTexture!==null)&&(y===!0&&c===null&&(c=new aa(L,p),n===!0&&(c.format=ir,c.type=ta)),s.dispose(),s.depthTexture=y?c:null,s.resolveDepthBuffer=y,s.storeMultisampledDepthBuffer=y);for(let C=0;C<A.length;C++){let V=A[C];V.setSize&&V.setSize(L,p),y&&V.needsDepthTexture===!0&&V.setDepthTexture&&V.setDepthTexture(c)}},this.begin=function(w,L){if(m||w.toneMapping===Bi&&A.length===0)return!1;if(b=L,L!==null){let p=L.width,y=L.height;(s.width!==p||s.height!==y)&&this.setSize(p,y)}return E===!1&&w.setRenderTarget(s),d=w.toneMapping,w.toneMapping=Bi,!0},this.hasRenderPass=function(){return E},this.end=function(w,L){w.toneMapping=d,m=!0;let p=s,y=o;for(let C=0;C<A.length;C++){let V=A[C];V.enabled!==!1&&(V.render(w,y,p,L),V.needsSwap!==!1&&(p=y,y=y===o?l:o))}if(S!==w.outputColorSpace||M!==w.toneMapping){S=w.outputColorSpace,M=w.toneMapping,f.defines={},Ke.getTransfer(S)===it&&(f.defines.SRGB_TRANSFER="");let C=og[M];C&&(f.defines[C]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=p.texture,w.setRenderTarget(b),w.render(u,_),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}function sa(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=ic[a];if(n===void 0&&(n=new Float32Array(a),ic[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function At(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Rt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Gn(e,t){let i=rc[t];i===void 0&&(i=new Int32Array(t),rc[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function cg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function hg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(At(i,t))return;e.uniform2fv(this.addr,t),Rt(i,t)}}function ug(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(At(i,t))return;e.uniform3fv(this.addr,t),Rt(i,t)}}function dg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(At(i,t))return;e.uniform4fv(this.addr,t),Rt(i,t)}}function pg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(At(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Rt(i,t)}else{if(At(i,r))return;sc.set(r),e.uniformMatrix2fv(this.addr,!1,sc),Rt(i,r)}}function fg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(At(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Rt(i,t)}else{if(At(i,r))return;nc.set(r),e.uniformMatrix3fv(this.addr,!1,nc),Rt(i,r)}}function mg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(At(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Rt(i,t)}else{if(At(i,r))return;ac.set(r),e.uniformMatrix4fv(this.addr,!1,ac),Rt(i,r)}}function gg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function _g(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(At(i,t))return;e.uniform2iv(this.addr,t),Rt(i,t)}}function vg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(At(i,t))return;e.uniform3iv(this.addr,t),Rt(i,t)}}function xg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(At(i,t))return;e.uniform4iv(this.addr,t),Rt(i,t)}}function Sg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Mg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(At(i,t))return;e.uniform2uiv(this.addr,t),Rt(i,t)}}function yg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(At(i,t))return;e.uniform3uiv(this.addr,t),Rt(i,t)}}function Eg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(At(i,t))return;e.uniform4uiv(this.addr,t),Rt(i,t)}}function Vn(e){return e.version===0&&(e.compareFunction=Fc,e.needsUpdate=!0),e}function Tg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?n=Vn(yh):n=Mh,i.setTexture2D(t||n,a)}function bg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||bh,a)}function wg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_CUBE_SHADOW?n=Vn(Eh):n=wh,i.setTextureCube(t||n,a)}function Ag(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Th,a)}function Rg(e){switch(e){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return pg;case 35675:return fg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return vg;case 35669:case 35673:return xg;case 5125:return Sg;case 36294:return Mg;case 36295:return yg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Cg(e,t){e.uniform1fv(this.addr,t)}function Pg(e,t){let i=sa(t,this.size,2);e.uniform2fv(this.addr,i)}function Lg(e,t){let i=sa(t,this.size,3);e.uniform3fv(this.addr,i)}function Ng(e,t){let i=sa(t,this.size,4);e.uniform4fv(this.addr,i)}function Dg(e,t){let i=sa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Ig(e,t){let i=sa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Ug(e,t){let i=sa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Og(e,t){e.uniform1iv(this.addr,t)}function Fg(e,t){e.uniform2iv(this.addr,t)}function Bg(e,t){e.uniform3iv(this.addr,t)}function zg(e,t){e.uniform4iv(this.addr,t)}function Hg(e,t){e.uniform1uiv(this.addr,t)}function Gg(e,t){e.uniform2uiv(this.addr,t)}function Vg(e,t){e.uniform3uiv(this.addr,t)}function kg(e,t){e.uniform4uiv(this.addr,t)}function Wg(e,t,i){let r=this.cache,a=t.length,n=Gn(i,a);At(r,n)||(e.uniform1iv(this.addr,n),Rt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=Vn(yh):s=Mh;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function Xg(e,t,i){let r=this.cache,a=t.length,n=Gn(i,a);At(r,n)||(e.uniform1iv(this.addr,n),Rt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||bh,n[s])}function jg(e,t,i){let r=this.cache,a=t.length,n=Gn(i,a);At(r,n)||(e.uniform1iv(this.addr,n),Rt(r,n));let s;this.type===e.SAMPLER_CUBE_SHADOW?s=Vn(Eh):s=wh;for(let o=0;o!==a;++o)i.setTextureCube(t[o]||s,n[o])}function qg(e,t,i){let r=this.cache,a=t.length,n=Gn(i,a);At(r,n)||(e.uniform1iv(this.addr,n),Rt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Th,n[s])}function Yg(e){switch(e){case 5126:return Cg;case 35664:return Pg;case 35665:return Lg;case 35666:return Ng;case 35674:return Dg;case 35675:return Ig;case 35676:return Ug;case 5124:case 35670:return Og;case 35667:case 35671:return Fg;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return Hg;case 36294:return Gg;case 36295:return Vg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return qg}}function oc(e,t){e.seq.push(t),e.map[t.id]=t}function Qg(e,t,i){let r=e.name,a=r.length;for(Ls.lastIndex=0;;){let n=Ls.exec(r),s=Ls.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){oc(i,c===void 0?new Kg(o,e,t):new Zg(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new Jg(o),oc(i,h)),i=h}}}function lc(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}function t0(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}function i0(e){Ke._getMatrix(cc,Ke.workingColorSpace,e);let t=`mat3( ${cc.elements.map(i=>i.toFixed(4))} )`;switch(Ke.getTransfer(e)){case zn:return[t,"LinearTransferOETF"];case it:return[t,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function hc(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+t0(e.getShaderSource(t),s)}else return a}function r0(e,t){let i=i0(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function n0(e,t){let i=a0[t];return i===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function s0(){Ke.getLuminanceCoefficients(bn);let e=bn.x.toFixed(4),t=bn.y.toFixed(4),i=bn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function l0(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function c0(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function wa(e){return e!==""}function uc(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function dc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function To(e){return e.replace(h0,u0)}function u0(e,t){let i=ke[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return To(i)}function pc(e){return e.replace(d0,p0)}function p0(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function fc(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function m0(e){return f0[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function _0(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":g0[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function x0(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":v0[e.combine]||"ENVMAP_BLENDING_NONE"}function S0(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=m0(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=_0(i),f=x0(i),u=o0(i),_=l0(n),S=a.createProgram(),M,m,d=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(wa).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(wa).join(`
`),m.length>0&&(m+=`
`)):(M=[fc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),m=[fc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+f:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Bi?"#define TONE_MAPPING":"",i.toneMapping!==Bi?ke.tonemapping_pars_fragment:"",i.toneMapping!==Bi?n0("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,r0("linearToOutputTexel",i.outputColorSpace),s0(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wa).join(`
`)),s=To(s),s=uc(s,i),s=dc(s,i),o=To(o),o=uc(o,i),o=dc(o,i),s=pc(s),o=pc(o),i.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",i.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=d+M+s,A=d+m+o,E=lc(a,a.VERTEX_SHADER,b),w=lc(a,a.FRAGMENT_SHADER,A);a.attachShader(S,E),a.attachShader(S,w),i.index0AttributeName!==void 0?a.bindAttribLocation(S,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function L(V){if(e.debug.checkShaderErrors){let U=a.getProgramInfoLog(S)||"",B=a.getShaderInfoLog(E)||"",Z=a.getShaderInfoLog(w)||"",I=U.trim(),W=B.trim(),ie=Z.trim(),G=!0,de=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,S,E,w);else{let Q=hc(a,E,"vertex"),$=hc(a,w,"fragment");Fe("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+I+`
`+Q+`
`+$)}else I!==""?Ue("WebGLProgram: Program Info Log:",I):(W===""||ie==="")&&(de=!1);de&&(V.diagnostics={runnable:G,programLog:I,vertexShader:{log:W,prefix:M},fragmentShader:{log:ie,prefix:m}})}a.deleteShader(E),a.deleteShader(w),p=new In(a,S),y=c0(a,S)}let p;this.getUniforms=function(){return p===void 0&&L(this),p};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(S,$g)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=e0++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=w,this}function T0(e){return e===gr||e===Un||e===On}function b0(e,t,i,r,a,n){let s=new Uo,o=new y0,l=new Set,c=[],h=new Map,f=r.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(p){return l.add(p),p===0?"uv":`uv${p}`}function S(p,y,C,V,U,B){let Z=V.fog,I=U.geometry,W=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?V.environment:null,ie=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,G=t.get(p.envMap||W,ie),de=u[p.type],Q=r.precision;p.precision!==null&&(Q=r.getMaxPrecision(p.precision),Q!==p.precision&&Ue("WebGLProgram.getParameters:",p.precision,"not supported, using",Q,"instead."));let $=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ce=$!==void 0?$.length:0,Re=0;I.morphAttributes.position!==void 0&&(Re=1),I.morphAttributes.normal!==void 0&&(Re=2),I.morphAttributes.color!==void 0&&(Re=3);let K,le,Ee,Me;if(de){let Te=Ei[de];K=Te.vertexShader,le=Te.fragmentShader}else{K=p.vertexShader,le=p.fragmentShader;let Te=o.getVertexShaderStage(p),ot=o.getFragmentShaderStage(p);o.update(p,Te,ot),Ee=Te.id,Me=ot.id}let Le=e.getRenderTarget(),me=e.state.buffers.depth.getReversed(),He=U.isInstancedMesh===!0,je=U.isBatchedMesh===!0,Ce=!!p.map,ct=!!p.matcap,St=!!G,Tt=St&&G.isPMREMTexture===!0,ft=!!p.aoMap,Ct=!!p.lightMap,Ft=!!p.bumpMap&&p.wireframe===!1,mt=!!p.normalMap,bt=!!p.displacementMap,Pt=!!p.emissiveMap,Ht=!!p.metalnessMap,Qt=!!p.roughnessMap,F=p.anisotropy>0,$t=p.clearcoat>0,$e=p.diffuseRoughness>0,gt=p.dispersion>0,te=p.retroreflectivity>0,Je=p.iridescence>0,Ae=p.sheen>0,Ie=p.transmission>0,vt=F&&!!p.anisotropyMap,T=$t&&!!p.clearcoatMap,v=$t&&!!p.clearcoatNormalMap,z=$t&&!!p.clearcoatRoughnessMap,ae=$e&&!!p.diffuseRoughnessMap,ee=Je&&!!p.iridescenceMap,ge=Je&&!!p.iridescenceThicknessMap,pe=Ae&&!!p.sheenColorMap,O=Ae&&!!p.sheenRoughnessMap,re=!!p.specularMap,ve=!!p.specularColorMap,P=!!p.specularIntensityMap,X=Ie&&!!p.transmissionMap,ne=Ie&&!!p.thicknessMap,oe=!!p.gradientMap,fe=!!p.alphaMap,ue=p.alphaTest>0,we=!!p.alphaHash,se=!!p.extensions,Oe=Bi;p.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(Oe=e.toneMapping);let Ne=Tt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Xe={shaderID:de,shaderType:p.type,shaderName:p.name,vertexShader:K,fragmentShader:le,defines:p.defines,customVertexShaderID:Ee,customFragmentShaderID:Me,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:Q,batching:je,batchingColor:je&&U._colorsTexture!==null,instancing:He,instancingColor:He&&U.instanceColor!==null,instancingMorph:He&&U.morphTexture!==null,outputColorSpace:Le===null?e.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:Ce,matcap:ct,envMap:St,envMapMode:St&&G.mapping,envMapPMREM:Tt,envMapMaxLod:Tt?Ne.length-1:null,envMapSize:Tt?Ne[0].width:null,aoMap:ft,lightMap:Ct,bumpMap:Ft,normalMap:mt,displacementMap:bt,emissiveMap:Pt,normalMapObjectSpace:mt&&p.normalMapType===zu,normalMapTangentSpace:mt&&p.normalMapType===So,packedNormalMap:mt&&p.normalMapType===So&&T0(p.normalMap.format),metalnessMap:Ht,roughnessMap:Qt,anisotropy:F,anisotropyMap:vt,clearcoat:$t,clearcoatMap:T,clearcoatNormalMap:v,clearcoatRoughnessMap:z,diffuseRoughness:$e,diffuseRoughnessMap:ae,dispersion:gt,retroreflection:te,iridescence:Je,iridescenceMap:ee,iridescenceThicknessMap:ge,sheen:Ae,sheenColorMap:pe,sheenRoughnessMap:O,specularMap:re,specularColorMap:ve,specularIntensityMap:P,transmission:Ie,transmissionMap:X,thicknessMap:ne,gradientMap:oe,opaque:p.transparent===!1&&p.blending===Aa&&p.alphaToCoverage===!1,alphaMap:fe,alphaTest:ue,alphaHash:we,combine:p.combine,mapUv:Ce&&_(p.map.channel),aoMapUv:ft&&_(p.aoMap.channel),lightMapUv:Ct&&_(p.lightMap.channel),bumpMapUv:Ft&&_(p.bumpMap.channel),normalMapUv:mt&&_(p.normalMap.channel),displacementMapUv:bt&&_(p.displacementMap.channel),emissiveMapUv:Pt&&_(p.emissiveMap.channel),metalnessMapUv:Ht&&_(p.metalnessMap.channel),roughnessMapUv:Qt&&_(p.roughnessMap.channel),anisotropyMapUv:vt&&_(p.anisotropyMap.channel),clearcoatMapUv:T&&_(p.clearcoatMap.channel),clearcoatNormalMapUv:v&&_(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&_(p.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&_(p.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&_(p.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&_(p.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(p.sheenColorMap.channel),sheenRoughnessMapUv:O&&_(p.sheenRoughnessMap.channel),specularMapUv:re&&_(p.specularMap.channel),specularColorMapUv:ve&&_(p.specularColorMap.channel),specularIntensityMapUv:P&&_(p.specularIntensityMap.channel),transmissionMapUv:X&&_(p.transmissionMap.channel),thicknessMapUv:ne&&_(p.thicknessMap.channel),alphaMapUv:fe&&_(p.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(mt||F),vertexNormals:!!I.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Ce||fe),fog:!!Z,useFog:p.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||I.attributes.normal===void 0&&mt===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Re,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:B.filter(Te=>Te.texture!==null).length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:p.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ce&&p.map.isVideoTexture===!0&&Ke.getTransfer(p.map.colorSpace)===it,decodeVideoTextureEmissive:Pt&&p.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(p.emissiveMap.colorSpace)===it,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Oi,flipSided:p.side===Zt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:se&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&p.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function M(p){let y=[];if(p.shaderID?y.push(p.shaderID):(y.push(p.customVertexShaderID),y.push(p.customFragmentShaderID)),p.defines!==void 0)for(let C in p.defines)y.push(C),y.push(p.defines[C]);return p.isRawShaderMaterial===!1&&(m(y,p),d(y,p),y.push(e.outputColorSpace)),y.push(p.customProgramCacheKey),y.join()}function m(p,y){p.push(y.precision),p.push(y.outputColorSpace),p.push(y.envMapMode),p.push(y.envMapPMREM),p.push(y.envMapMaxLod),p.push(y.envMapSize),p.push(y.mapUv),p.push(y.alphaMapUv),p.push(y.lightMapUv),p.push(y.aoMapUv),p.push(y.bumpMapUv),p.push(y.normalMapUv),p.push(y.displacementMapUv),p.push(y.emissiveMapUv),p.push(y.metalnessMapUv),p.push(y.roughnessMapUv),p.push(y.anisotropyMapUv),p.push(y.clearcoatMapUv),p.push(y.clearcoatNormalMapUv),p.push(y.clearcoatRoughnessMapUv),p.push(y.diffuseRoughnessMapUv),p.push(y.iridescenceMapUv),p.push(y.iridescenceThicknessMapUv),p.push(y.sheenColorMapUv),p.push(y.sheenRoughnessMapUv),p.push(y.specularMapUv),p.push(y.specularColorMapUv),p.push(y.specularIntensityMapUv),p.push(y.transmissionMapUv),p.push(y.thicknessMapUv),p.push(y.combine),p.push(y.fogExp2),p.push(y.sizeAttenuation),p.push(y.morphTargetsCount),p.push(y.numSunLights),p.push(y.numDirLights),p.push(y.numPointLights),p.push(y.numSpotLights),p.push(y.numSpotLightMaps),p.push(y.numHemiLights),p.push(y.numRectAreaLights),p.push(y.numSunLightShadows),p.push(y.numDirLightShadows),p.push(y.numPointLightShadows),p.push(y.numSpotLightShadows),p.push(y.numSpotLightShadowsWithMaps),p.push(y.numLightProbes),p.push(y.numLightProbeGrids),p.push(y.shadowMapType),p.push(y.toneMapping),p.push(y.numClippingPlanes),p.push(y.numClipIntersection),p.push(y.depthPacking)}function d(p,y){s.disableAll(),y.instancing&&s.enable(0),y.instancingColor&&s.enable(1),y.instancingMorph&&s.enable(2),y.matcap&&s.enable(3),y.envMap&&s.enable(4),y.normalMapObjectSpace&&s.enable(5),y.normalMapTangentSpace&&s.enable(6),y.clearcoat&&s.enable(7),y.iridescence&&s.enable(8),y.alphaTest&&s.enable(9),y.vertexColors&&s.enable(10),y.vertexAlphas&&s.enable(11),y.vertexUv1s&&s.enable(12),y.vertexUv2s&&s.enable(13),y.vertexUv3s&&s.enable(14),y.vertexTangents&&s.enable(15),y.anisotropy&&s.enable(16),y.alphaHash&&s.enable(17),y.batching&&s.enable(18),y.dispersion&&s.enable(19),y.retroreflection&&s.enable(24),y.diffuseRoughness&&s.enable(25),y.batchingColor&&s.enable(20),y.gradientMap&&s.enable(21),y.packedNormalMap&&s.enable(22),y.vertexNormals&&s.enable(23),p.push(s.mask),s.disableAll(),y.fog&&s.enable(0),y.useFog&&s.enable(1),y.flatShading&&s.enable(2),y.logarithmicDepthBuffer&&s.enable(3),y.reversedDepthBuffer&&s.enable(4),y.skinning&&s.enable(5),y.morphTargets&&s.enable(6),y.morphNormals&&s.enable(7),y.morphColors&&s.enable(8),y.premultipliedAlpha&&s.enable(9),y.shadowMapEnabled&&s.enable(10),y.doubleSided&&s.enable(11),y.flipSided&&s.enable(12),y.useDepthPacking&&s.enable(13),y.dithering&&s.enable(14),y.transmission&&s.enable(15),y.sheen&&s.enable(16),y.opaque&&s.enable(17),y.pointsUvs&&s.enable(18),y.decodeVideoTexture&&s.enable(19),y.decodeVideoTextureEmissive&&s.enable(20),y.alphaToCoverage&&s.enable(21),y.numLightProbeGrids>0&&s.enable(22),y.hasPositionAttribute&&s.enable(23),p.push(s.mask)}function b(p){let y=u[p.type],C;if(y){let V=Ei[y];C=Ad.clone(V.uniforms)}else C=p.uniforms;return C}function A(p,y){let C=h.get(y);return C!==void 0?++C.usedTimes:(C=new S0(e,y,p,a),c.push(C),h.set(y,C)),C}function E(p){if(--p.usedTimes===0){let y=c.indexOf(p);c[y]=c[c.length-1],c.pop(),h.delete(p.cacheKey),p.destroy()}}function w(p){o.remove(p)}function L(){o.dispose()}return{getParameters:S,getProgramCacheKey:M,getUniforms:b,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:L}}function w0(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function A0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function mc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function gc(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let _=0;return u.isInstancedMesh&&(_+=2),u.isSkinnedMesh&&(_+=1),_}function o(u,_,S,M,m,d){let b=e[t];return b===void 0?(b={id:u.id,object:u,geometry:_,material:S,materialVariant:s(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:d},e[t]=b):(b.id=u.id,b.object=u,b.geometry=_,b.material=S,b.materialVariant=s(u),b.groupOrder=M,b.renderOrder=u.renderOrder,b.z=m,b.group=d),t++,b}function l(u,_,S,M,m,d,b){b.reversedDepth===!0&&(m=-m);let A=o(u,_,S,M,m,d);S.transmission>0?r.push(A):S.transparent===!0?a.push(A):i.push(A)}function c(u,_,S,M,m,d){let b=o(u,_,S,M,m,d);S.transmission>0?r.unshift(b):S.transparent===!0?a.unshift(b):i.unshift(b)}function h(u,_){i.length>1&&i.sort(u||A0),r.length>1&&r.sort(_||mc),a.length>1&&a.sort(_||mc)}function f(){for(let u=t,_=e.length;u<_;u++){let S=e[u];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:c,finish:f,sort:h}}function R0(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new gc,e.set(r,[s])):a>=n.length?(s=new gc,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function C0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new k,color:new ze};break;case"SpotLight":i={position:new k,direction:new k,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new k,halfWidth:new k,halfHeight:new k};break}return e[t.id]=i,i}}}function P0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}function N0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function D0(e){let t=new C0,i=P0(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new k);let a=new k,n=new ut,s=new ut;function o(c){let h=0,f=0,u=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let _=0,S=0,M=0,m=0,d=0,b=0,A=0,E=0,w=0,L=0,p=0,y=0,C=0,V=0;c.sort(N0);for(let B=0,Z=c.length;B<Z;B++){let I=c[B],W=I.color,ie=I.intensity,G=I.distance,de=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===gr?de=I.shadow.map.texture:de=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=W.r*ie,f+=W.g*ie,u+=W.b*ie;else if(I.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(I.sh.coefficients[Q],ie);V++}else if(I.isSunLight){let Q=t.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,ce=i.get(I);ce.shadowIntensity=$.intensity,ce.shadowBias=$.bias,ce.shadowNormalBias=$.normalBias,ce.shadowRadius=$.radius,ce.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[S]=ce,r.sunShadowMap[S]=de;let Re=$.getViewportCount();for(let K=0;K<Re;K++)r.sunShadowMatrix[M+K]=$.getMatrix(K),r.sunShadowCascade[M+K]=$._cascadeData[K];M+=Re,S++}r.sun[_]=Q,_++}else if(I.isDirectionalLight){let Q=t.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,ce=i.get(I);ce.shadowIntensity=$.intensity,ce.shadowBias=$.bias,ce.shadowNormalBias=$.normalBias,ce.shadowRadius=$.radius,ce.shadowMapSize=$.mapSize,r.directionalShadow[m]=ce,r.directionalShadowMap[m]=de,r.directionalShadowMatrix[m]=I.shadow.matrix,w++}r.directional[m]=Q,m++}else if(I.isSpotLight){let Q=t.get(I);Q.position.setFromMatrixPosition(I.matrixWorld),Q.color.copy(W).multiplyScalar(ie),Q.distance=G,Q.coneCos=Math.cos(I.angle),Q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Q.decay=I.decay,r.spot[b]=Q;let $=I.shadow;if(I.map&&(r.spotLightMap[y]=I.map,y++,$.updateMatrices(I),I.castShadow&&C++),r.spotLightMatrix[b]=$.matrix,I.castShadow){let ce=i.get(I);ce.shadowIntensity=$.intensity,ce.shadowBias=$.bias,ce.shadowNormalBias=$.normalBias,ce.shadowRadius=$.radius,ce.shadowMapSize=$.mapSize,r.spotShadow[b]=ce,r.spotShadowMap[b]=de,p++}b++}else if(I.isRectAreaLight){let Q=t.get(I);Q.color.copy(W).multiplyScalar(ie),Q.halfWidth.set(I.width*.5,0,0),Q.halfHeight.set(0,I.height*.5,0),r.rectArea[A]=Q,A++}else if(I.isPointLight){let Q=t.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),Q.distance=I.distance,Q.decay=I.decay,I.castShadow){let $=I.shadow,ce=i.get(I);ce.shadowIntensity=$.intensity,ce.shadowBias=$.bias,ce.shadowNormalBias=$.normalBias,ce.shadowRadius=$.radius,ce.shadowMapSize=$.mapSize,ce.shadowCameraNear=$.camera.near,ce.shadowCameraFar=$.camera.far,r.pointShadow[d]=ce,r.pointShadowMap[d]=de,r.pointShadowMatrix[d]=I.shadow.matrix,L++}r.point[d]=Q,d++}else if(I.isHemisphereLight){let Q=t.get(I);Q.skyColor.copy(I.color).multiplyScalar(ie),Q.groundColor.copy(I.groundColor).multiplyScalar(ie),r.hemi[E]=Q,E++}}A>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=u;let U=r.hash;(U.sunLength!==_||U.directionalLength!==m||U.pointLength!==d||U.spotLength!==b||U.rectAreaLength!==A||U.hemiLength!==E||U.numSunShadows!==S||U.numDirectionalShadows!==w||U.numPointShadows!==L||U.numSpotShadows!==p||U.numSpotMaps!==y||U.numLightProbes!==V)&&(r.sun.length=_,r.directional.length=m,r.spot.length=b,r.rectArea.length=A,r.point.length=d,r.hemi.length=E,r.sunShadow.length=S,r.sunShadowMap.length=S,r.sunShadowMatrix.length=M,r.sunShadowCascade.length=M,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.directionalShadowMatrix.length=w,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=p,r.spotShadowMap.length=p,r.spotLightMatrix.length=p+y-C,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=V,U.sunLength=_,U.directionalLength=m,U.pointLength=d,U.spotLength=b,U.rectAreaLength=A,U.hemiLength=E,U.numSunShadows=S,U.numDirectionalShadows=w,U.numPointShadows=L,U.numSpotShadows=p,U.numSpotMaps=y,U.numLightProbes=V,r.version=L0++)}function l(c,h){let f=0,u=0,_=0,S=0,M=0,m=0,d=h.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){let E=c[b];if(E.isSunLight){let w=r.sun[f];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),f++}else if(E.isDirectionalLight){let w=r.directional[u];w.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(d),u++}else if(E.isSpotLight){let w=r.spot[S];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(d),S++}else if(E.isRectAreaLight){let w=r.rectArea[M];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),s.identity(),n.copy(E.matrixWorld),n.premultiply(d),s.extractRotation(n),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),M++}else if(E.isPointLight){let w=r.point[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),_++}else if(E.isHemisphereLight){let w=r.hemi[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:r}}function _c(e){let t=new D0(e),i=[],r=[],a=[];function n(f){h.camera=f,i.length=0,r.length=0,a.length=0}function s(f){f.isLightProbeGrid?a.push(f):i.push(f)}function o(f){r.push(f)}function l(){t.setup(i),a.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(i,f)}let h={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:h,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function I0(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new _c(e),t.set(a,[o])):n>=s.length?(o=new _c(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}function z0(e,t,i){let r=new Na,a=new Qe,n=new Qe,s=new xt,o=new Ld,l=new Nd,c={},h=i.maxTextureSize,f={[mr]:Zt,[Zt]:mr,[Oi]:Oi},u=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:U0,fragmentShader:O0}),_=u.clone();_.defines.HORIZONTAL_PASS=1;let S=new Hi;S.setAttribute("position",new rr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new zt(S,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wn;let d=this.type;this.render=function(L,p,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;this.type===gu&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wn);let C=e.getRenderTarget(),V=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),B=e.state;B.setBlending(qr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Z=d!==this.type;Z&&p.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(W=>W.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,W=L.length;I<W;I++){let ie=L[I],G=ie.shadow;if(G===void 0){Ue("WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);let de=G.getFrameExtents();a.multiply(de),n.copy(G.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/de.x),a.x=n.x*de.x,G.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/de.y),a.y=n.y*de.y,G.mapSize.y=n.y));let Q=e.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Q,G.map===null||Z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ba){if(ie.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new bi(a.x,a.y,{format:gr,type:Ai,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),G.map.texture.name=ie.name+".shadowMap",G.map.depthTexture=new aa(a.x,a.y,gi),G.map.depthTexture.name=ie.name+".shadowMapDepth",G.map.depthTexture.format=ar,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bt,G.map.depthTexture.magFilter=Bt}else ie.isPointLight?(G.map=new Ho(a.x),G.map.depthTexture=new Jc(a.x,wi)):(G.map=new bi(a.x,a.y),G.map.depthTexture=new aa(a.x,a.y,wi)),G.map.depthTexture.name=ie.name+".shadowMap",G.map.depthTexture.format=ar,this.type===wn?(G.map.depthTexture.compareFunction=Q?Oc:Uc,G.map.depthTexture.minFilter=Kt,G.map.depthTexture.magFilter=Kt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bt,G.map.depthTexture.magFilter=Bt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==a.x||G.map.height!==a.y)&&G.map.setSize(a.x,a.y);let $=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();ie.isPointLight!==!0&&G.updateMatrices(ie,y);let ce=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:y.layers;for(let Re=0;Re<$;Re++){let K=G.getCamera(Re);if(ie.isPointLight){let le=G.camera,Ee=G.matrix,Me=ie.distance||le.far;Me!==le.far&&(le.far=Me,le.updateProjectionMatrix()),Ta.setFromMatrixPosition(ie.matrixWorld),le.position.copy(Ta),Ns.copy(le.position),Ns.add(F0[Re]),le.up.copy(B0[Re]),le.lookAt(Ns),le.updateMatrixWorld(),Ee.makeTranslation(-Ta.x,-Ta.y,-Ta.z),vc.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),G._frustum.setFromProjectionMatrix(vc,le.coordinateSystem,le.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)e.setRenderTarget(G.map,Re),e.clear();else{Re===0&&(e.setRenderTarget(G.map),e.clear());let le=G.getViewport(Re);s.set(n.x*le.x,n.y*le.y,n.x*le.z,n.y*le.w),B.viewport(s)}r=G.getFrustum(Re),E(p,y,K,ie,ce,this.type)}G.isPointLightShadow!==!0&&this.type===ba&&b(G,y),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(C,V,U)};function b(L,p){let y=t.update(M);u.defines.VSM_SAMPLES!==L.blurSamples&&(u.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,u.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null?L.mapPass=new bi(a.x,a.y,{format:gr,type:Ai}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),u.uniforms.shadow_pass.value=L.map.depthTexture,u.uniforms.resolution.value.set(L.map.width,L.map.height),u.uniforms.radius.value=L.radius,e.setRenderTarget(L.mapPass),e.clear(),e.renderBufferDirect(p,null,y,u,M,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value.set(L.map.width,L.map.height),_.uniforms.radius.value=L.radius,e.setRenderTarget(L.map),e.clear(),e.renderBufferDirect(p,null,y,_,M,null)}function A(L,p,y,C){let V=null,U=y.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(U!==void 0)V=U;else if(V=y.isPointLight===!0?l:o,e.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0||p.alphaToCoverage===!0){let B=V.uuid,Z=p.uuid,I=c[B];I===void 0&&(I={},c[B]=I);let W=I[Z];W===void 0&&(W=V.clone(),I[Z]=W,p.addEventListener("dispose",w)),V=W}if(V.visible=p.visible,V.wireframe=p.wireframe,C===ba?V.side=p.shadowSide!==null?p.shadowSide:p.side:V.side=p.shadowSide!==null?p.shadowSide:f[p.side],V.alphaMap=p.alphaMap,V.alphaTest=p.alphaToCoverage===!0?.5:p.alphaTest,V.map=p.map,V.clipShadows=p.clipShadows,V.clippingPlanes=p.clippingPlanes,V.clipIntersection=p.clipIntersection,V.displacementMap=p.displacementMap,V.displacementScale=p.displacementScale,V.displacementBias=p.displacementBias,V.wireframeLinewidth=p.wireframeLinewidth,V.linewidth=p.linewidth,y.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let B=e.properties.get(V);B.light=y}return V}function E(L,p,y,C,V,U){if(L.visible===!1)return;if(L.layers.test(V)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&U===ba)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,L.matrixWorld);let Z=t.update(L),I=L.material;if(Array.isArray(I)){let W=Z.groups;for(let ie=0,G=W.length;ie<G;ie++){let de=W[ie],Q=I[de.materialIndex];if(Q&&Q.visible){let $=A(L,Q,C,U);L.onBeforeShadow(e,L,p,y,Z,$,de),e.renderBufferDirect(y,null,Z,$,L,de),L.onAfterShadow(e,L,p,y,Z,$,de)}}}else if(I.visible){let W=A(L,I,C,U);L.onBeforeShadow(e,L,p,y,Z,W,null),e.renderBufferDirect(y,null,Z,W,L,null),L.onAfterShadow(e,L,p,y,Z,W,null)}}let B=L.children;for(let Z=0,I=B.length;Z<I;Z++)E(B[Z],p,y,C,V,U)}function w(L){L.target.removeEventListener("dispose",w);for(let p in c){let y=c[p],C=L.target.uuid;C in y&&(y[C].dispose(),delete y[C])}}}function H0(e,t){function i(){let P=!1,X=new xt,ne=null,oe=new xt(0,0,0,0);return{setMask:function(fe){ne!==fe&&!P&&(e.colorMask(fe,fe,fe,fe),ne=fe)},setLocked:function(fe){P=fe},setClear:function(fe,ue,we,se,Oe){Oe===!0&&(fe*=se,ue*=se,we*=se),X.set(fe,ue,we,se),oe.equals(X)===!1&&(e.clearColor(fe,ue,we,se),oe.copy(X))},reset:function(){P=!1,ne=null,oe.set(-1,0,0,0)}}}function r(){let P=!1,X=!1,ne=null,oe=null,fe=null;return{setReversed:function(ue){if(X!==ue){let we=t.get("EXT_clip_control");ue?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),X=ue;let se=fe;fe=null,this.setClear(se)}},getReversed:function(){return X},setTest:function(ue){ue?me(e.DEPTH_TEST):He(e.DEPTH_TEST)},setMask:function(ue){ne!==ue&&!P&&(e.depthMask(ue),ne=ue)},setFunc:function(ue){if(X&&(ue=Ju[ue]),oe!==ue){switch(ue){case Ds:e.depthFunc(e.NEVER);break;case Is:e.depthFunc(e.ALWAYS);break;case Us:e.depthFunc(e.LESS);break;case Ra:e.depthFunc(e.LEQUAL);break;case Os:e.depthFunc(e.EQUAL);break;case Fs:e.depthFunc(e.GEQUAL);break;case Bs:e.depthFunc(e.GREATER);break;case zs:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}oe=ue}},setLocked:function(ue){P=ue},setClear:function(ue){fe!==ue&&(fe=ue,X&&(ue=1-ue),e.clearDepth(ue))},reset:function(){P=!1,ne=null,oe=null,fe=null,X=!1}}}function a(){let P=!1,X=null,ne=null,oe=null,fe=null,ue=null,we=null,se=null,Oe=null;return{setTest:function(Ne){P||(Ne?me(e.STENCIL_TEST):He(e.STENCIL_TEST))},setMask:function(Ne){X!==Ne&&!P&&(e.stencilMask(Ne),X=Ne)},setFunc:function(Ne,Xe,Te){(ne!==Ne||oe!==Xe||fe!==Te)&&(e.stencilFunc(Ne,Xe,Te),ne=Ne,oe=Xe,fe=Te)},setOp:function(Ne,Xe,Te){(ue!==Ne||we!==Xe||se!==Te)&&(e.stencilOp(Ne,Xe,Te),ue=Ne,we=Xe,se=Te)},setLocked:function(Ne){P=Ne},setClear:function(Ne){Oe!==Ne&&(e.clearStencil(Ne),Oe=Ne)},reset:function(){P=!1,X=null,ne=null,oe=null,fe=null,ue=null,we=null,se=null,Oe=null}}}let n=new i,s=new r,o=new a,l={},c=new WeakMap,h={},f={},u={},_=new WeakMap,S=[],M=null,m=!1,d=null,b=null,A=null,E=null,w=null,L=null,p=null,y=new ze(0,0,0),C=0,V=!1,U=null,B=null,Z=null,I=null,W=null,ie=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,de=0,Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=de>=1):Q.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=de>=2);let $=null,ce={},Re=e.getParameter(e.SCISSOR_BOX),K=e.getParameter(e.VIEWPORT),le=new xt().fromArray(Re),Ee=new xt().fromArray(K);function Me(P,X,ne,oe){let fe=new Uint8Array(4),ue=e.createTexture();e.bindTexture(P,ue),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let we=0;we<ne;we++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(X,0,e.RGBA,1,1,oe,0,e.RGBA,e.UNSIGNED_BYTE,fe):e.texImage2D(X+we,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,fe);return ue}let Le={};Le[e.TEXTURE_2D]=Me(e.TEXTURE_2D,e.TEXTURE_2D,1),Le[e.TEXTURE_CUBE_MAP]=Me(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[e.TEXTURE_2D_ARRAY]=Me(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Le[e.TEXTURE_3D]=Me(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(e.DEPTH_TEST),s.setFunc(Ra),Ft(!1),mt(dl),me(e.CULL_FACE),ft(qr);function me(P){h[P]!==!0&&(e.enable(P),h[P]=!0)}function He(P){h[P]!==!1&&(e.disable(P),h[P]=!1)}function je(P,X){return u[P]!==X?(e.bindFramebuffer(P,X),u[P]=X,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=X),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=X),!0):!1}function Ce(P,X){let ne=S,oe=!1;if(P){ne=_.get(X),ne===void 0&&(ne=[],_.set(X,ne));let fe=P.textures;if(ne.length!==fe.length||ne[0]!==e.COLOR_ATTACHMENT0){for(let ue=0,we=fe.length;ue<we;ue++)ne[ue]=e.COLOR_ATTACHMENT0+ue;ne.length=fe.length,oe=!0}}else ne[0]!==e.BACK&&(ne[0]=e.BACK,oe=!0);oe&&e.drawBuffers(ne)}function ct(P){return M!==P?(e.useProgram(P),M=P,!0):!1}let St={[Wr]:e.FUNC_ADD,[vu]:e.FUNC_SUBTRACT,[xu]:e.FUNC_REVERSE_SUBTRACT};St[Su]=e.MIN,St[Mu]=e.MAX;let Tt={[yu]:e.ZERO,[Eu]:e.ONE,[Tu]:e.SRC_COLOR,[xc]:e.SRC_ALPHA,[Pu]:e.SRC_ALPHA_SATURATE,[Ru]:e.DST_COLOR,[wu]:e.DST_ALPHA,[bu]:e.ONE_MINUS_SRC_COLOR,[Sc]:e.ONE_MINUS_SRC_ALPHA,[Cu]:e.ONE_MINUS_DST_COLOR,[Au]:e.ONE_MINUS_DST_ALPHA,[Lu]:e.CONSTANT_COLOR,[Nu]:e.ONE_MINUS_CONSTANT_COLOR,[Du]:e.CONSTANT_ALPHA,[Iu]:e.ONE_MINUS_CONSTANT_ALPHA};function ft(P,X,ne,oe,fe,ue,we,se,Oe,Ne){if(P===qr){m===!0&&(He(e.BLEND),m=!1);return}if(m===!1&&(me(e.BLEND),m=!0),P!==_u){if(P!==d||Ne!==V){if((b!==Wr||w!==Wr)&&(e.blendEquation(e.FUNC_ADD),b=Wr,w=Wr),Ne)switch(P){case Aa:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pl:e.blendFunc(e.ONE,e.ONE);break;case fl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ml:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Fe("WebGLState: Invalid blending: ",P);break}else switch(P){case Aa:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case fl:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ml:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",P);break}A=null,E=null,L=null,p=null,y.set(0,0,0),C=0,d=P,V=Ne}return}fe=fe||X,ue=ue||ne,we=we||oe,(X!==b||fe!==w)&&(e.blendEquationSeparate(St[X],St[fe]),b=X,w=fe),(ne!==A||oe!==E||ue!==L||we!==p)&&(e.blendFuncSeparate(Tt[ne],Tt[oe],Tt[ue],Tt[we]),A=ne,E=oe,L=ue,p=we),(se.equals(y)===!1||Oe!==C)&&(e.blendColor(se.r,se.g,se.b,Oe),y.copy(se),C=Oe),d=P,V=!1}function Ct(P,X){P.side===Oi?He(e.CULL_FACE):me(e.CULL_FACE);let ne=P.side===Zt;X&&(ne=!ne),Ft(ne),P.blending===Aa&&P.transparent===!1?ft(qr):ft(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),n.setMask(P.colorWrite);let oe=P.stencilWrite;o.setTest(oe),oe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Pt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?me(e.SAMPLE_ALPHA_TO_COVERAGE):He(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(P){U!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),U=P)}function mt(P){P!==fu?(me(e.CULL_FACE),P!==B&&(P===dl?e.cullFace(e.BACK):P===mu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):He(e.CULL_FACE),B=P}function bt(P){P!==Z&&(G&&e.lineWidth(P),Z=P)}function Pt(P,X,ne){P?(me(e.POLYGON_OFFSET_FILL),(I!==X||W!==ne)&&(I=X,W=ne,s.getReversed()&&(X=-X,ne=-ne),e.polygonOffset(X,ne))):He(e.POLYGON_OFFSET_FILL)}function Ht(P){P?me(e.SCISSOR_TEST):He(e.SCISSOR_TEST)}function Qt(P){P===void 0&&(P=e.TEXTURE0+ie-1),$!==P&&(e.activeTexture(P),$=P)}function F(P,X,ne){ne===void 0&&($===null?ne=e.TEXTURE0+ie-1:ne=$);let oe=ce[ne];oe===void 0&&(oe={type:void 0,texture:void 0},ce[ne]=oe),(oe.type!==P||oe.texture!==X)&&($!==ne&&(e.activeTexture(ne),$=ne),e.bindTexture(P,X||Le[P]),oe.type=P,oe.texture=X)}function $t(){let P=ce[$];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $e(){try{e.compressedTexImage2D(...arguments)}catch(P){Fe("WebGLState:",P)}}function gt(){try{e.compressedTexImage3D(...arguments)}catch(P){Fe("WebGLState:",P)}}function te(){try{e.texSubImage2D(...arguments)}catch(P){Fe("WebGLState:",P)}}function Je(){try{e.texSubImage3D(...arguments)}catch(P){Fe("WebGLState:",P)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(P){Fe("WebGLState:",P)}}function Ie(){try{e.compressedTexSubImage3D(...arguments)}catch(P){Fe("WebGLState:",P)}}function vt(){try{e.texStorage2D(...arguments)}catch(P){Fe("WebGLState:",P)}}function T(){try{e.texStorage3D(...arguments)}catch(P){Fe("WebGLState:",P)}}function v(){try{e.texImage2D(...arguments)}catch(P){Fe("WebGLState:",P)}}function z(){try{e.texImage3D(...arguments)}catch(P){Fe("WebGLState:",P)}}function ae(P){return f[P]!==void 0?f[P]:e.getParameter(P)}function ee(P,X){f[P]!==X&&(e.pixelStorei(P,X),f[P]=X)}function ge(P){le.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),le.copy(P))}function pe(P){Ee.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),Ee.copy(P))}function O(P,X){let ne=c.get(X);ne===void 0&&(ne=new WeakMap,c.set(X,ne));let oe=ne.get(P);oe===void 0&&(oe=e.getUniformBlockIndex(X,P.name),e.uniformBlockBinding(X,oe,oe),ne.set(P,oe))}function re(P,X,ne){let oe=c.get(X).get(P);l[oe]!==ne&&(e.bindBufferBase(e.UNIFORM_BUFFER,oe,ne),l[oe]=ne)}function ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},f={},$=null,ce={},u={},l={},_=new WeakMap,S=[],M=null,m=!1,d=null,b=null,A=null,E=null,w=null,L=null,p=null,y=new ze(0,0,0),C=0,V=!1,U=null,B=null,Z=null,I=null,W=null,le.set(0,0,e.canvas.width,e.canvas.height),Ee.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:me,disable:He,bindFramebuffer:je,drawBuffers:Ce,useProgram:ct,setBlending:ft,setMaterial:Ct,setFlipSided:Ft,setCullFace:mt,setLineWidth:bt,setPolygonOffset:Pt,setScissorTest:Ht,activeTexture:Qt,bindTexture:F,unbindTexture:$t,compressedTexImage2D:$e,compressedTexImage3D:gt,texImage2D:v,texImage3D:z,pixelStorei:ee,getParameter:ae,updateUBOMapping:O,uniformBlockBinding:re,texStorage2D:vt,texStorage3D:T,texSubImage2D:te,texSubImage3D:Je,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ie,scissor:ge,viewport:pe,reset:ve}}function G0(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,h=new WeakMap,f=new Set,u,_=new WeakMap,S=new Set,M=new FinalizationRegistry(T=>S.delete(T)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,v){return m?new OffscreenCanvas(T,v):Hn("canvas")}function b(T,v,z){let ae=1,ee=vt(T);if((ee.width>z||ee.height>z)&&(ae=z/Math.max(ee.width,ee.height)),ae<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ge=Math.floor(ae*ee.width),pe=Math.floor(ae*ee.height);u===void 0&&(u=d(ge,pe));let O=v?d(ge,pe):u;return O.width=ge,O.height=pe,O.getContext("2d").drawImage(T,0,0,ge,pe),Ue("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ge+"x"+pe+")."),O}else return"data"in T&&Ue("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function A(T){return T.generateMipmaps}function E(T){e.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function L(T,v,z,ae,ee,ge=!1){if(T!==null){if(e[T]!==void 0)return e[T];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let pe;ae&&(pe=t.get("EXT_texture_norm16"),pe||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=v;if(v===e.RED&&(z===e.FLOAT&&(O=e.R32F),z===e.HALF_FLOAT&&(O=e.R16F),z===e.UNSIGNED_BYTE&&(O=e.R8),z===e.UNSIGNED_SHORT&&pe&&(O=pe.R16_EXT),z===e.SHORT&&pe&&(O=pe.R16_SNORM_EXT)),v===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(O=e.R8UI),z===e.UNSIGNED_SHORT&&(O=e.R16UI),z===e.UNSIGNED_INT&&(O=e.R32UI),z===e.BYTE&&(O=e.R8I),z===e.SHORT&&(O=e.R16I),z===e.INT&&(O=e.R32I)),v===e.RG&&(z===e.FLOAT&&(O=e.RG32F),z===e.HALF_FLOAT&&(O=e.RG16F),z===e.UNSIGNED_BYTE&&(O=e.RG8),z===e.UNSIGNED_SHORT&&pe&&(O=pe.RG16_EXT),z===e.SHORT&&pe&&(O=pe.RG16_SNORM_EXT)),v===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(O=e.RG8UI),z===e.UNSIGNED_SHORT&&(O=e.RG16UI),z===e.UNSIGNED_INT&&(O=e.RG32UI),z===e.BYTE&&(O=e.RG8I),z===e.SHORT&&(O=e.RG16I),z===e.INT&&(O=e.RG32I)),v===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(O=e.RGB8UI),z===e.UNSIGNED_SHORT&&(O=e.RGB16UI),z===e.UNSIGNED_INT&&(O=e.RGB32UI),z===e.BYTE&&(O=e.RGB8I),z===e.SHORT&&(O=e.RGB16I),z===e.INT&&(O=e.RGB32I)),v===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(O=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(O=e.RGBA16UI),z===e.UNSIGNED_INT&&(O=e.RGBA32UI),z===e.BYTE&&(O=e.RGBA8I),z===e.SHORT&&(O=e.RGBA16I),z===e.INT&&(O=e.RGBA32I)),v===e.RGB&&(z===e.UNSIGNED_SHORT&&pe&&(O=pe.RGB16_EXT),z===e.SHORT&&pe&&(O=pe.RGB16_SNORM_EXT),z===e.UNSIGNED_INT_5_9_9_9_REV&&(O=e.RGB9_E5),z===e.UNSIGNED_INT_10F_11F_11F_REV&&(O=e.R11F_G11F_B10F)),v===e.RGBA){let re=ge?zn:Ke.getTransfer(ee);z===e.FLOAT&&(O=e.RGBA32F),z===e.HALF_FLOAT&&(O=e.RGBA16F),z===e.UNSIGNED_BYTE&&(O=re===it?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT&&pe&&(O=pe.RGBA16_EXT),z===e.SHORT&&pe&&(O=pe.RGBA16_SNORM_EXT),z===e.UNSIGNED_SHORT_4_4_4_4&&(O=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(O=e.RGB5_A1)}return(O===e.R16F||O===e.R32F||O===e.RG16F||O===e.RG32F||O===e.RGBA16F||O===e.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function p(T,v){let z;return T?v===null||v===wi||v===ta?z=e.DEPTH24_STENCIL8:v===gi?z=e.DEPTH32F_STENCIL8:v===Pa&&(z=e.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===wi||v===ta?z=e.DEPTH_COMPONENT24:v===gi?z=e.DEPTH_COMPONENT32F:v===Pa&&(z=e.DEPTH_COMPONENT16),z}function y(T,v){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Bt&&T.minFilter!==Kt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function C(T){let v=new WeakRef(T);r.get(T).__ref=v,S.add(v),M.register(T,v,v)}function V(T){let v=r.get(T).__ref;v!==void 0&&(S.delete(v),M.unregister(v))}function U(T){Z(T.target)}function B(T){I(T.target)}function Z(T){T.removeEventListener("dispose",U),V(T),ie(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}function I(T){T.removeEventListener("dispose",B),V(T),de(T)}function W(){for(let T of S){let v=T.deref();v!==void 0&&(v.isRenderTarget===!0?I(v):Z(v))}S.clear(),f.clear()}function ie(T){let v=r.get(T);if(v.__webglInit===void 0)return;let z=T.source,ae=_.get(z);if(ae){let ee=ae[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&G(T),Object.keys(ae).length===0&&_.delete(z)}r.remove(T)}function G(T){let v=r.get(T);e.deleteTexture(v.__webglTexture);let z=T.source,ae=_.get(z);delete ae[v.__cacheKey],s.memory.textures--}function de(T){let v=r.get(T);v.__depthDisposeCallback&&v.__depthDisposeCallback();let z=T.depthTexture;if(z&&z.renderTarget===T&&Z(z),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(v.__webglFramebuffer[ee]))for(let ge=0;ge<v.__webglFramebuffer[ee].length;ge++)e.deleteFramebuffer(v.__webglFramebuffer[ee][ge]);else e.deleteFramebuffer(v.__webglFramebuffer[ee]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[ee])}else{if(Array.isArray(v.__webglFramebuffer))for(let ee=0;ee<v.__webglFramebuffer.length;ee++)e.deleteFramebuffer(v.__webglFramebuffer[ee]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ee=0;ee<v.__webglColorRenderbuffer.length;ee++)v.__webglColorRenderbuffer[ee]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[ee]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ae=T.textures;for(let ee=0,ge=ae.length;ee<ge;ee++){let pe=r.get(ae[ee]);pe.__webglTexture&&(e.deleteTexture(pe.__webglTexture),s.memory.textures--),r.remove(ae[ee])}r.remove(T)}let Q=0;function $(){Q=0}function ce(){return Q}function Re(T){Q=T}function K(){let T=Q;return T>=a.maxTextures&&Ue("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+a.maxTextures),Q+=1,T}function le(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.mipmapsAutoUpdate),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Ee(T,v){let z=r.get(T);if(T.isVideoTexture&&Ae(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let ae=T.image;if(ae===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(z,T,v);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+v)}function Me(T,v){let z=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Ct(z,T,v);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+v)}function Le(T,v){let z=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Ct(z,T,v);return}i.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+v)}function me(T,v){let z=r.get(T);if(T.version>0&&z.__version!==T.version){Ft(z,T,v);return}i.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+v)}let He={[Hs]:e.REPEAT,[Fi]:e.CLAMP_TO_EDGE,[Gs]:e.MIRRORED_REPEAT},je={[Bt]:e.NEAREST,[Fu]:e.NEAREST_MIPMAP_NEAREST,[tn]:e.NEAREST_MIPMAP_LINEAR,[Kt]:e.LINEAR,[ns]:e.LINEAR_MIPMAP_NEAREST,[tr]:e.LINEAR_MIPMAP_LINEAR},Ce={[Gu]:e.NEVER,[Fc]:e.ALWAYS,[Vu]:e.LESS,[Uc]:e.LEQUAL,[ku]:e.EQUAL,[Oc]:e.GEQUAL,[Wu]:e.GREATER,[Xu]:e.NOTEQUAL};function ct(T,v){if(v.type===gi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Kt||v.magFilter===ns||v.magFilter===tn||v.magFilter===tr||v.minFilter===Kt||v.minFilter===ns||v.minFilter===tn||v.minFilter===tr)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,He[v.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,He[v.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,He[v.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,je[v.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,je[v.minFilter]),v.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,Ce[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Bt||v.minFilter!==tn&&v.minFilter!==tr||v.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||r.get(v).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy}}}function St(T,v){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",U),C(v));let ae=v.source,ee=_.get(ae);ee===void 0&&(ee={},_.set(ae,ee));let ge=le(v);if(ge!==T.__cacheKey){ee[ge]===void 0&&(ee[ge]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,z=!0),ee[ge].usedTimes++;let pe=ee[T.__cacheKey];pe!==void 0&&(ee[T.__cacheKey].usedTimes--,pe.usedTimes===0&&G(v)),T.__cacheKey=ge,T.__webglTexture=ee[ge].texture}return z}function Tt(T,v,z){return Math.floor(Math.floor(T/z)/v)}function ft(T,v,z,ae){let ee=T.updateRanges;if(ee.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,v.width,v.height,z,ae,v.data);else{ee.sort((ve,P)=>ve.start-P.start);let ge=0;for(let ve=1;ve<ee.length;ve++){let P=ee[ge],X=ee[ve],ne=P.start+P.count,oe=Tt(X.start,v.width,4),fe=Tt(P.start,v.width,4);X.start<=ne+1&&oe===fe&&Tt(X.start+X.count-1,v.width,4)===oe?P.count=Math.max(P.count,X.start+X.count-P.start):(++ge,ee[ge]=X)}ee.length=ge+1;let pe=i.getParameter(e.UNPACK_ROW_LENGTH),O=i.getParameter(e.UNPACK_SKIP_PIXELS),re=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,v.width);for(let ve=0,P=ee.length;ve<P;ve++){let X=ee[ve],ne=Math.floor(X.start/4),oe=Math.ceil(X.count/4),fe=ne%v.width,ue=Math.floor(ne/v.width),we=oe;i.pixelStorei(e.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(e.UNPACK_SKIP_ROWS,ue),i.texSubImage2D(e.TEXTURE_2D,0,fe,ue,we,1,z,ae,v.data)}T.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,pe),i.pixelStorei(e.UNPACK_SKIP_PIXELS,O),i.pixelStorei(e.UNPACK_SKIP_ROWS,re)}}function Ct(T,v,z){let ae=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ae=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ae=e.TEXTURE_3D);let ee=St(T,v),ge=v.source;i.bindTexture(ae,T.__webglTexture,e.TEXTURE0+z);let pe=r.get(ge);if(ge.version!==pe.__version||ee===!0){if(i.activeTexture(e.TEXTURE0+z),!(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)){let se=Ke.getPrimaries(Ke.workingColorSpace),Oe=v.colorSpace===er?null:Ke.getPrimaries(v.colorSpace),Ne=v.colorSpace===er||se===Oe?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}i.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment);let O=b(v.image,!1,a.maxTextureSize);O=Ie(v,O);let re=n.convert(v.format,v.colorSpace),ve=n.convert(v.type),P=L(v.internalFormat,re,ve,v.normalized,v.colorSpace,v.isVideoTexture);ct(ae,v);let X,ne=v.mipmaps,oe=v.isVideoTexture!==!0,fe=pe.__version===void 0||ee===!0,ue=ge.dataReady,we=y(v,O);if(v.isDepthTexture)P=p(v.format===ir,v.type),fe&&(oe?i.texStorage2D(e.TEXTURE_2D,1,P,O.width,O.height):i.texImage2D(e.TEXTURE_2D,0,P,O.width,O.height,0,re,ve,null));else if(v.isDataTexture)if(ne.length>0){oe&&fe&&i.texStorage2D(e.TEXTURE_2D,we,P,ne[0].width,ne[0].height);for(let se=0,Oe=ne.length;se<Oe;se++)X=ne[se],oe?ue&&i.texSubImage2D(e.TEXTURE_2D,se,0,0,X.width,X.height,re,ve,X.data):i.texImage2D(e.TEXTURE_2D,se,P,X.width,X.height,0,re,ve,X.data);v.generateMipmaps=!1}else oe?(fe&&i.texStorage2D(e.TEXTURE_2D,we,P,O.width,O.height),ue&&ft(v,O,re,ve)):i.texImage2D(e.TEXTURE_2D,0,P,O.width,O.height,0,re,ve,O.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){oe&&fe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,we,P,ne[0].width,ne[0].height,O.depth);for(let se=0,Oe=ne.length;se<Oe;se++)if(X=ne[se],v.format!==Ti)if(re!==null)if(oe){if(ue)if(v.layerUpdates.size>0){let Ne=Zl(X.width,X.height,v.format,v.type);for(let Xe of v.layerUpdates){let Te=X.data.subarray(Xe*Ne/X.data.BYTES_PER_ELEMENT,(Xe+1)*Ne/X.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,se,0,0,Xe,X.width,X.height,1,re,Te)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,se,0,0,0,X.width,X.height,O.depth,re,X.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,se,P,X.width,X.height,O.depth,0,X.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?ue&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,se,0,0,0,X.width,X.height,O.depth,re,ve,X.data):i.texImage3D(e.TEXTURE_2D_ARRAY,se,P,X.width,X.height,O.depth,0,re,ve,X.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{oe&&fe&&i.texStorage2D(e.TEXTURE_2D,we,P,ne[0].width,ne[0].height);for(let se=0,Oe=ne.length;se<Oe;se++)X=ne[se],v.format!==Ti?re!==null?oe?ue&&i.compressedTexSubImage2D(e.TEXTURE_2D,se,0,0,X.width,X.height,re,X.data):i.compressedTexImage2D(e.TEXTURE_2D,se,P,X.width,X.height,0,X.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?ue&&i.texSubImage2D(e.TEXTURE_2D,se,0,0,X.width,X.height,re,ve,X.data):i.texImage2D(e.TEXTURE_2D,se,P,X.width,X.height,0,re,ve,X.data)}else if(v.isDataArrayTexture)if(oe){if(fe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,we,P,O.width,O.height,O.depth),ue)if(v.layerUpdates.size>0){let se=Zl(O.width,O.height,v.format,v.type);for(let Oe of v.layerUpdates){let Ne=O.data.subarray(Oe*se/O.data.BYTES_PER_ELEMENT,(Oe+1)*se/O.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Oe,O.width,O.height,1,re,ve,Ne)}v.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,re,ve,O.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,P,O.width,O.height,O.depth,0,re,ve,O.data);else if(v.isData3DTexture)oe?(fe&&i.texStorage3D(e.TEXTURE_3D,we,P,O.width,O.height,O.depth),ue&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,re,ve,O.data)):i.texImage3D(e.TEXTURE_3D,0,P,O.width,O.height,O.depth,0,re,ve,O.data);else if(v.isFramebufferTexture){if(fe)if(oe)i.texStorage2D(e.TEXTURE_2D,we,P,O.width,O.height);else{let se=O.width,Oe=O.height;for(let Ne=0;Ne<we;Ne++)i.texImage2D(e.TEXTURE_2D,Ne,P,se,Oe,0,re,ve,null),se>>=1,Oe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in e){let se=e.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),O.parentNode!==se){se.appendChild(O),f.add(v),se.onpaint=Oe=>{let Ne=Oe.changedElements;for(let Xe of f)Ne.includes(Xe.image)&&(Xe.needsUpdate=!0)},se.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,O);else{let Oe=e.RGBA,Ne=e.RGBA,Xe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Oe,Ne,Xe,O)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ne.length>0){if(oe&&fe){let se=vt(ne[0]);i.texStorage2D(e.TEXTURE_2D,we,P,se.width,se.height)}for(let se=0,Oe=ne.length;se<Oe;se++)X=ne[se],oe?ue&&i.texSubImage2D(e.TEXTURE_2D,se,0,0,re,ve,X):i.texImage2D(e.TEXTURE_2D,se,P,re,ve,X);v.generateMipmaps=!1}else if(oe){if(fe){let se=vt(O);i.texStorage2D(e.TEXTURE_2D,we,P,se.width,se.height)}ue&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,re,ve,O)}else i.texImage2D(e.TEXTURE_2D,0,P,re,ve,O);A(v)&&v.mipmapsAutoUpdate===!0&&E(ae),pe.__version=ge.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Ft(T,v,z){if(v.image.length!==6)return;let ae=St(T,v),ee=v.source;i.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+z);let ge=r.get(ee);if(ee.version!==ge.__version||ae===!0){i.activeTexture(e.TEXTURE0+z);let pe=Ke.getPrimaries(Ke.workingColorSpace),O=v.colorSpace===er?null:Ke.getPrimaries(v.colorSpace),re=v.colorSpace===er||pe===O?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ve=v.isCompressedTexture||v.image[0].isCompressedTexture,P=v.image[0]&&v.image[0].isDataTexture,X=[];for(let Te=0;Te<6;Te++)!ve&&!P?X[Te]=b(v.image[Te],!0,a.maxCubemapSize):X[Te]=P?v.image[Te].image:v.image[Te],X[Te]=Ie(v,X[Te]);let ne=X[0],oe=n.convert(v.format,v.colorSpace),fe=n.convert(v.type),ue=L(v.internalFormat,oe,fe,v.normalized,v.colorSpace),we=v.isVideoTexture!==!0,se=ge.__version===void 0||ae===!0,Oe=ee.dataReady,Ne=y(v,ne);ct(e.TEXTURE_CUBE_MAP,v);let Xe;if(v.isDepthTexture){if(ue=p(v.format===ir,v.type),se)if(we)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,ue,ne.width,ne.height);else for(let Te=0;Te<6;Te++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ue,ne.width,ne.height,0,oe,fe,null)}else if(ve){we&&se&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Ne,ue,ne.width,ne.height);for(let Te=0;Te<6;Te++){Xe=X[Te].mipmaps;for(let ot=0;ot<Xe.length;ot++){let lt=Xe[ot];v.format!==Ti?oe!==null?we?Oe&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot,0,0,lt.width,lt.height,oe,lt.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot,ue,lt.width,lt.height,0,lt.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?Oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot,0,0,lt.width,lt.height,oe,fe,lt.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot,ue,lt.width,lt.height,0,oe,fe,lt.data)}}}else{if(Xe=v.mipmaps,we&&se){Xe.length>0&&Ne++;let Te=vt(X[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ne,ue,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(P){we?Oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,X[Te].width,X[Te].height,oe,fe,X[Te].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ue,X[Te].width,X[Te].height,0,oe,fe,X[Te].data);for(let ot=0;ot<Xe.length;ot++){let lt=Xe[ot].image[Te].image;we?Oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot+1,0,0,lt.width,lt.height,oe,fe,lt.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot+1,ue,lt.width,lt.height,0,oe,fe,lt.data)}}else{we?Oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,oe,fe,X[Te]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ue,oe,fe,X[Te]);for(let ot=0;ot<Xe.length;ot++){let lt=Xe[ot];we?Oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot+1,0,0,oe,fe,lt.image[Te]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot+1,ue,oe,fe,lt.image[Te])}}}A(v)&&v.mipmapsAutoUpdate===!0&&E(e.TEXTURE_CUBE_MAP),ge.__version=ee.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function mt(T,v,z,ae,ee,ge){let pe=n.convert(z.format,z.colorSpace),O=n.convert(z.type),re=L(z.internalFormat,pe,O,z.normalized,z.colorSpace),ve=r.get(v),P=r.get(z);if(P.__renderTarget=v,!ve.__hasExternalTextures){let X=Math.max(1,v.width>>ge),ne=Math.max(1,v.height>>ge);ee===e.TEXTURE_3D||ee===e.TEXTURE_2D_ARRAY?i.texImage3D(ee,ge,re,X,ne,v.depth,0,pe,O,null):i.texImage2D(ee,ge,re,X,ne,0,pe,O,null)}i.bindFramebuffer(e.FRAMEBUFFER,T),Je(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ae,ee,P.__webglTexture,0,te(v)):(ee===e.TEXTURE_2D||ee>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ae,ee,P.__webglTexture,ge),i.bindFramebuffer(e.FRAMEBUFFER,null)}function bt(T,v,z){if(e.bindRenderbuffer(e.RENDERBUFFER,T),v.depthBuffer){let ae=v.depthTexture,ee=ae&&ae.isDepthTexture?ae.type:null,ge=p(v.stencilBuffer,ee),pe=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Je(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,te(v),ge,v.width,v.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,te(v),ge,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,ge,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pe,e.RENDERBUFFER,T)}else{let ae=v.textures;for(let ee=0;ee<ae.length;ee++){let ge=ae[ee],pe=n.convert(ge.format,ge.colorSpace),O=n.convert(ge.type),re=L(ge.internalFormat,pe,O,ge.normalized,ge.colorSpace);Je(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,te(v),re,v.width,v.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,te(v),re,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,re,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Pt(T,v,z){let ae=v.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=r.get(v.depthTexture);ee.__renderTarget=v;let ge=ae?v.depthTexture.image[0]:v.depthTexture.image;(!ee.__webglTexture||ge.width!==v.width||ge.height!==v.height)&&(ge.width=v.width,ge.height=v.height,v.depthTexture.needsUpdate=!0),ae?me(v.depthTexture,0):Ee(v.depthTexture,0);let pe=ee.__webglTexture,O=te(v),re=ae?e.TEXTURE_CUBE_MAP_POSITIVE_X+z:e.TEXTURE_2D,ve=v.depthTexture.format===ir?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(v.depthTexture.format===ar)Je(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ve,re,pe,0,O):e.framebufferTexture2D(e.FRAMEBUFFER,ve,re,pe,0);else if(v.depthTexture.format===ir)Je(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ve,re,pe,0,O):e.framebufferTexture2D(e.FRAMEBUFFER,ve,re,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(T){let v=r.get(T),z=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let ae=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ae){let ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ae.removeEventListener("dispose",ee)};ae.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=ae}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let ae=0;ae<6;ae++)Pt(v.__webglFramebuffer[ae],T,ae);else T.texture.mipmaps.length>0?Pt(v.__webglFramebuffer[0],T,0):Pt(v.__webglFramebuffer,T,0);else if(z){v.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[ae]),v.__webglDepthbuffer[ae]===void 0)v.__webglDepthbuffer[ae]=e.createRenderbuffer(),bt(v.__webglDepthbuffer[ae],T,!1);else{let ee=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ge=v.__webglDepthbuffer[ae];e.bindRenderbuffer(e.RENDERBUFFER,ge),e.framebufferRenderbuffer(e.FRAMEBUFFER,ee,e.RENDERBUFFER,ge)}}else if(T.texture.mipmaps.length>0?i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),bt(v.__webglDepthbuffer,T,!1);else{let ae=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ee),e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,ee)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Qt(T,v,z){let ae=r.get(T);v!==void 0&&mt(ae.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&Ht(T)}function F(T){let v=T.texture,z=r.get(T),ae=r.get(v);T.addEventListener("dispose",B),C(T);let ee=T.textures,ge=T.isWebGLCubeRenderTarget===!0,pe=ee.length>1;if(pe||(ae.__webglTexture===void 0&&(ae.__webglTexture=e.createTexture()),ae.__version=v.version,s.memory.textures++),ge){z.__webglFramebuffer=[];for(let O=0;O<6;O++)if(v.mipmaps.length>0){z.__webglFramebuffer[O]=[];for(let re=0;re<v.mipmaps.length;re++)z.__webglFramebuffer[O][re]=e.createFramebuffer()}else z.__webglFramebuffer[O]=e.createFramebuffer()}else{if(v.mipmaps.length>0){z.__webglFramebuffer=[];for(let O=0;O<v.mipmaps.length;O++)z.__webglFramebuffer[O]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(pe)for(let O=0,re=ee.length;O<re;O++){let ve=r.get(ee[O]);ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture(),s.memory.textures++)}if(T.samples>0&&Je(T)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let O=0;O<ee.length;O++){let re=ee[O];z.__webglColorRenderbuffer[O]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[O]);let ve=n.convert(re.format,re.colorSpace),P=n.convert(re.type),X=L(re.internalFormat,ve,P,re.normalized,re.colorSpace,T.isXRRenderTarget===!0),ne=te(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,ne,X,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+O,e.RENDERBUFFER,z.__webglColorRenderbuffer[O])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),bt(z.__webglDepthRenderbuffer,T,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ge){i.bindTexture(e.TEXTURE_CUBE_MAP,ae.__webglTexture),ct(e.TEXTURE_CUBE_MAP,v);for(let O=0;O<6;O++)if(v.mipmaps.length>0)for(let re=0;re<v.mipmaps.length;re++)mt(z.__webglFramebuffer[O][re],T,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+O,re);else mt(z.__webglFramebuffer[O],T,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);A(v)?E(e.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),i.unbindTexture()}else if(pe){for(let O=0,re=ee.length;O<re;O++){let ve=ee[O],P=r.get(ve),X=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(X=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(X,P.__webglTexture),ct(X,ve),mt(z.__webglFramebuffer,T,ve,e.COLOR_ATTACHMENT0+O,X,0),A(ve)&&E(X)}i.unbindTexture()}else{let O=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(O=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(O,ae.__webglTexture),ct(O,v),v.mipmaps.length>0)for(let re=0;re<v.mipmaps.length;re++)mt(z.__webglFramebuffer[re],T,v,e.COLOR_ATTACHMENT0,O,re);else mt(z.__webglFramebuffer,T,v,e.COLOR_ATTACHMENT0,O,0);A(v)?E(O):v.mipmaps.length>0&&e.texParameteri(O,e.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),i.unbindTexture()}T.depthBuffer&&Ht(T)}function $t(T){let v=T.textures;for(let z=0,ae=v.length;z<ae;z++){let ee=v[z];if(A(ee)&&ee.mipmapsAutoUpdate===!0){let ge=w(T),pe=r.get(ee).__webglTexture;i.bindTexture(ge,pe),E(ge),i.unbindTexture()}}}let $e=[];function gt(T){if(T.samples>0){if(Je(T)===!1){let v=T.textures,z=T.width,ae=T.height,ee=e.COLOR_BUFFER_BIT,ge=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=r.get(T),O=v.length>1;if(O)for(let re=0;re<v.length;re++)i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let re=0;re<v.length;re++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=e.STENCIL_BUFFER_BIT)),O){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pe.__webglColorRenderbuffer[re]);let ve=r.get(v[re]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ve,0)}e.blitFramebuffer(0,0,z,ae,0,0,z,ae,ee,e.NEAREST),l===!0&&($e.length=0,$e.push(e.COLOR_ATTACHMENT0+re),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&$e.push(ge),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,$e))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),O)for(let re=0;re<v.length;re++){i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,pe.__webglColorRenderbuffer[re]);let ve=r.get(v[re]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,ve,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let v=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function te(T){return Math.min(a.maxSamples,T.samples)}function Je(T){let v=r.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ae(T){let v=s.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Ie(T,v){let z=T.colorSpace,ae=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Bn&&z!==er&&(Ke.getTransfer(z)===it?(ae!==Ti||ee!==ri)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",z)),v}function vt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.getTextureUnits=ce,this.setTextureUnits=Re,this.setTexture2D=Ee,this.setTexture2DArray=Me,this.setTexture3D=Le,this.setTextureCube=me,this.rebindTextures=Qt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Je,this.dispose=W}function V0(e,t){function i(r,a=er){let n,s=Ke.getTransfer(a);if(r===ri)return e.UNSIGNED_BYTE;if(r===Ao)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Ro)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Lc)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Nc)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Cc)return e.BYTE;if(r===Pc)return e.SHORT;if(r===Pa)return e.UNSIGNED_SHORT;if(r===wo)return e.INT;if(r===wi)return e.UNSIGNED_INT;if(r===gi)return e.FLOAT;if(r===Ai)return e.HALF_FLOAT;if(r===Dc)return e.ALPHA;if(r===Ic)return e.RGB;if(r===Ti)return e.RGBA;if(r===ar)return e.DEPTH_COMPONENT;if(r===ir)return e.DEPTH_STENCIL;if(r===Co)return e.RED;if(r===Po)return e.RED_INTEGER;if(r===gr)return e.RG;if(r===Lo)return e.RG_INTEGER;if(r===No)return e.RGBA_INTEGER;if(r===An||r===Rn||r===Cn||r===Pn)if(s===it)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===An)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===An)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vs||r===ks||r===Ws||r===Xs)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Vs)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ks)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ws)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xs)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===js||r===qs||r===Ys||r===Ks||r===Zs||r===Un||r===Js)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===js||r===qs)return s===it?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Ys)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ks)return n.COMPRESSED_R11_EAC;if(r===Zs)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Un)return n.COMPRESSED_RG11_EAC;if(r===Js)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Qs||r===$s||r===eo||r===to||r===io||r===ro||r===ao||r===no||r===so||r===oo||r===lo||r===co||r===ho||r===uo)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Qs)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$s)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===eo)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===to)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===io)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ro)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ao)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===no)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===so)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oo)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lo)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===co)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ho)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uo)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===po||r===fo||r===mo)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===po)return s===it?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fo)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===mo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===go||r===_o||r===On||r===vo)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===go)return n.COMPRESSED_RED_RGTC1_EXT;if(r===_o)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===On)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vo)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ta?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}function Y0(e,t){function i(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,sh(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,b,A,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?n(m,d):d.isMeshLambertMaterial?(n(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(n(m,d),f(m,d)):d.isMeshPhongMaterial?(n(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(n(m,d),u(m,d),d.isMeshPhysicalMaterial&&_(m,d,E)):d.isMeshMatcapMaterial?(n(m,d),S(m,d)):d.isMeshDepthMaterial?n(m,d):d.isMeshDistanceMaterial?(n(m,d),M(m,d)):d.isMeshNormalMaterial?n(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,i(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,i(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,i(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,i(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,i(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b=t.get(d),A=b.envMap,E=b.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(q0.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ah),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,i(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,i(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=A*.5,d.map&&(m.map.value=d.map,i(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,i(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,i(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function _(m,d,b){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,i(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,i(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,i(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,i(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,i(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,i(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,i(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,i(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,i(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,i(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,i(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,i(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,i(d.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){let b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function K0(e,t,i,r){let a={},n={};function s(b,A){let E=A.program;r.uniformBlockBinding(b,E,a[b.id])}function o(b,A){let E=a[b.id];E===void 0&&(S(b),E=l(b),a[b.id]=E,b.addEventListener("dispose",m));let w=A.program;r.updateUBOMapping(b,w);let L=t.render.frame;n[b.id]!==L&&(c(b),n[b.id]=L)}function l(b){let A=e.createBuffer(),E=b.__size,w=b.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,E,w),e.bindBuffer(e.UNIFORM_BUFFER,null),A}function c(b){let A=a[b.id],E=b.uniforms,w=b.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let L=0,p=E.length;L<p;L++){let y=E[L];if(Array.isArray(y))for(let C=0,V=y.length;C<V;C++)h(y[C],L,C,w);else h(y,L,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(b,A,E,w){if(u(b,A,E,w)===!0){let L=b.__offset,p=b.value;if(Array.isArray(p)){let y=0;for(let C=0;C<p.length;C++){let V=p[C],U=M(V,!0);f(V,b.__data,y),y+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else f(p,b.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,L,b.__data)}}function f(b,A,E){typeof b=="number"||typeof b=="boolean"?A[E]=b:b.isMatrix3?(A[E]=b.elements[0],A[E+1]=b.elements[1],A[E+2]=b.elements[2],A[E+3]=0,A[E+4]=b.elements[3],A[E+5]=b.elements[4],A[E+6]=b.elements[5],A[E+7]=0,A[E+8]=b.elements[6],A[E+9]=b.elements[7],A[E+10]=b.elements[8],A[E+11]=0):ArrayBuffer.isView(b)?A.set(b.subarray(0,A.length-E),E):b.toArray(A,E)}function u(b,A,E,w){let L=b.value,p=A+"_"+E;if(Array.isArray(L)){w[p]===void 0&&(w[p]=[]);let y=w[p],C=!1;for(let V=0;V<L.length;V++)_(L[V],y,V)===!0&&(C=!0);return C}return _(L,w,p)}function _(b,A,E){if(A[E]===void 0)return typeof b=="number"||typeof b=="boolean"?A[E]=b:ArrayBuffer.isView(b)?A[E]=b.slice():A[E]=b.clone(),!0;{let w=A[E];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return A[E]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(w.equals(b)===!1)return w.copy(b),!0}}return!1}function S(b){let A=b.uniforms,E=0,w=16;for(let p=0,y=A.length;p<y;p++){let C=Array.isArray(A[p])?A[p]:[A[p]];for(let V=0,U=C.length;V<U;V++){let B=C[V],Z=Array.isArray(B.value)?B.value:[B.value],I=Array.isArray(A[p])||Array.isArray(B.value),W=E;for(let G=0,de=Z.length;G<de;G++){let Q=Z[G],$=M(Q,I),ce=E%w,Re=ce%$.boundary,K=ce+Re;E+=Re,K!==0&&w-K<$.storage&&(E+=w-K),G===0&&(W=E),E+=$.storage}let ie=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new ie((E-W)/Float32Array.BYTES_PER_ELEMENT),B.__offset=W}}let L=E%w;return L>0&&(E+=w-L),b.__size=E,b.__cache={},this}function M(b,A){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=16,E.storage=48):b.isMatrix4?(E.boundary=16,E.storage=64):b.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(E.boundary=16,E.storage=b.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",b),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function m(b){let A=b.target;A.removeEventListener("dispose",m),e.deleteBuffer(a[A.id]),delete a[A.id],delete n[A.id]}function d(){for(let b in a)e.deleteBuffer(a[b]);a={},n={}}return{bind:s,update:o,dispose:d}}function J0(){return yi===null&&(yi=new qc(Z0,16,16,gr,Ai),yi.name="DFG_LUT",yi.minFilter=Kt,yi.magFilter=Kt,yi.wrapS=Fi,yi.wrapT=Fi,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var fu,dl,mu,wn,gu,ba,mr,Zt,Oi,qr,Aa,pl,fl,ml,_u,Wr,vu,xu,Su,Mu,yu,Eu,Tu,bu,xc,Sc,wu,Au,Ru,Cu,Pu,Lu,Nu,Du,Iu,Ds,Is,Us,Ra,Os,Fs,Bs,zs,bo,Uu,Ou,Bi,Mc,yc,Ec,Tc,bc,wc,Ac,Rc,ea,Ca,rs,as,Hs,Fi,Gs,Bt,Fu,tn,Kt,ns,tr,ri,Cc,Pc,Pa,wo,wi,gi,Ai,Ao,Ro,ta,Lc,Nc,Dc,Ic,Ti,ar,ir,Co,Po,gr,Lo,No,An,Rn,Cn,Pn,Vs,ks,Ws,Xs,js,qs,Ys,Ks,Zs,Un,Js,Qs,$s,eo,to,io,ro,ao,no,so,oo,lo,co,ho,uo,po,fo,mo,go,_o,On,vo,Fn,xo,ss,gl,_l,vl,xl,Bu,So,zu,er,li,Bn,zn,it,os,Hu,Gu,Vu,ku,Uc,Wu,Xu,Oc,Fc,ju,Sl,_i,La,Ml,ia,Ju,vr,Vt,ls,Mo,Kr,Qe,xr,Zr,k,hs,El,Jr,Be,us,Tl,bl,Ke,Pr,rd,ad,Io,nd,ps,vi,Qr,xt,sd,bi,zc,od,fr,ut,Lr,pi,ld,cd,Yi,rn,ti,wl,Al,ra,Uo,hd,Rl,Nr,Li,an,_a,ud,dd,Cl,Pl,Ll,Nl,pd,Dr,fs,Wt,pr,fd,ms,Gc,Ki,nn,ze,kt,Vc,fi,Ni,_s,Di,Ir,Ur,Dl,vs,xs,Ss,Ms,ys,Es,va,Sr,Ii,mi,sn,Or,Fr,Br,Zi,Ji,cr,xa,on,ln,hr,yt,cn,md,rr,kc,Wc,Ut,gd,Sa,bs,Ia,_d,oi,ws,zr,ii,Ma,It,Hi,As,vd,xd,$i,Sd,Ua,Ui,Rs,hn,un,jc,Md,Il,ur,dn,Ul,pn,fn,mn,Cs,gn,Ol,_n,zt,qc,Fl,Hr,Bl,xn,zl,Ed,ya,Ea,Yc,dr,Td,Sn,Na,Hl,bd,Zc,aa,Jc,Qc,Oa,Oo,Fo,ih,ah,Ad,Rd,Cd,_r,Pd,oh,Ld,Nd,Fa,Dd,Id,Ud,Od,Ri,Ba,zd,Hd,Gd,ch,za,Vd,kd,Wd,Xd,hh,uh,Ps,Wl,Xl,jd,yn,En,Mi,dh,Qi,jl,ql,ci,ph,qd,fh,Vr,kr,yo,Yd,Bo,Kd,zo,Zd,Jd,Qd,$d,ep,tp,ip,rp,_t,N_,Yl,mh,$r,D_,sp,op,lp,cp,hp,up,dp,pp,fp,mp,gp,_p,vp,xp,Sp,Mp,yp,Ep,Tp,bp,wp,Ap,Rp,Cp,Pp,Lp,Np,Dp,Ip,Up,Op,Fp,Bp,zp,Hp,Gp,Vp,kp,Wp,Xp,jp,qp,Yp,Kp,Zp,Jp,Qp,$p,ef,tf,rf,af,nf,sf,of,lf,cf,hf,uf,df,pf,ff,mf,gf,_f,vf,xf,Sf,Mf,yf,Ef,Tf,bf,wf,Af,Rf,Cf,Pf,Lf,Nf,Df,If,Uf,Of,Ff,Bf,zf,Hf,Gf,Vf,kf,Wf,Xf,jf,qf,Yf,Kf,Zf,Jf,Qf,$f,em,tm,im,rm,am,nm,sm,om,lm,cm,hm,um,dm,pm,fm,mm,gm,_m,vm,xm,Sm,Mm,ym,Em,Tm,bm,wm,Am,Rm,Cm,Pm,Lm,Nm,Dm,Im,Um,Om,Fm,Bm,zm,ke,xe,Ei,Tn,Hm,_h,Ho,Jl,jm,qm,vh,xh,Ym,Km,Zm,Ql,og,Mh,yh,Eh,Th,bh,wh,ic,rc,ac,nc,sc,Kg,Zg,Jg,Ls,In,$g,e0,cc,a0,bn,h0,d0,f0,g0,v0,M0,y0,E0,L0,U0,O0,F0,B0,vc,Ta,Ns,k0,W0,X0,j0,q0,Ah,Z0,yi,Rh,Ch=ma(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */fu=0,dl=1,mu=2,wn=1,gu=2,ba=3,mr=0,Zt=1,Oi=2,qr=0,Aa=1,pl=2,fl=3,ml=4,_u=5,Wr=100,vu=101,xu=102,Su=103,Mu=104,yu=200,Eu=201,Tu=202,bu=203,xc=204,Sc=205,wu=206,Au=207,Ru=208,Cu=209,Pu=210,Lu=211,Nu=212,Du=213,Iu=214,Ds=0,Is=1,Us=2,Ra=3,Os=4,Fs=5,Bs=6,zs=7,bo=0,Uu=1,Ou=2,Bi=0,Mc=1,yc=2,Ec=3,Tc=4,bc=5,wc=6,Ac=7,Rc=300,ea=301,Ca=302,rs=303,as=304,Hs=1e3,Fi=1001,Gs=1002,Bt=1003,Fu=1004,tn=1005,Kt=1006,ns=1007,tr=1008,ri=1009,Cc=1010,Pc=1011,Pa=1012,wo=1013,wi=1014,gi=1015,Ai=1016,Ao=1017,Ro=1018,ta=1020,Lc=35902,Nc=35899,Dc=1021,Ic=1022,Ti=1023,ar=1026,ir=1027,Co=1028,Po=1029,gr=1030,Lo=1031,No=1033,An=33776,Rn=33777,Cn=33778,Pn=33779,Vs=35840,ks=35841,Ws=35842,Xs=35843,js=36196,qs=37492,Ys=37496,Ks=37488,Zs=37489,Un=37490,Js=37491,Qs=37808,$s=37809,eo=37810,to=37811,io=37812,ro=37813,ao=37814,no=37815,so=37816,oo=37817,lo=37818,co=37819,ho=37820,uo=37821,po=36492,fo=36494,mo=36495,go=36283,_o=36284,On=36285,vo=36286,Fn=2300,xo=2301,ss=2302,gl=2303,_l=2400,vl=2401,xl=2402,Bu=3200,So=0,zu=1,er="",li="srgb",Bn="srgb-linear",zn="linear",it="srgb",os=7680,Hu=519,Gu=512,Vu=513,ku=514,Uc=515,Wu=516,Xu=517,Oc=518,Fc=519,ju=35044,Sl="300 es",_i=2e3,La=2001;Ml={},ia=null;Ju={[Ds]:Ds,[Us]:Bs,[Os]:Os,[Ra]:Fs,[Is]:Is,[Bs]:Us,[zs]:zs,[Fs]:Ra},vr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ls=Math.PI/180,Mo=180/Math.PI;Qe=(Kr=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ze(this.x,t.x,i.x),this.y=Ze(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ze(this.x,t,i),this.y=Ze(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ze(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kr.prototype.isVector2=!0,Kr),xr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],c=i[r+2],h=i[r+3],f=a[n+0],u=a[n+1],_=a[n+2],S=a[n+3];if(h!==S||o!==f||l!==u||c!==_){let M=o*f+l*u+c*_+h*S;M<0&&(f=-f,u=-u,_=-_,S=-S,M=-M);let m=1-s;if(M<.9995){let d=Math.acos(M),b=Math.sin(d);m=Math.sin(m*d)/b,s=Math.sin(s*d)/b,o=o*m+f*s,l=l*m+u*s,c=c*m+_*s,h=h*m+S*s}else{o=o*m+f*s,l=l*m+u*s,c=c*m+_*s,h=h*m+S*s;let d=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=d,l*=d,c*=d,h*=d}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],c=i[r+3],h=a[n],f=a[n+1],u=a[n+2],_=a[n+3];return e[t]=s*_+c*h+o*u-l*f,e[t+1]=o*_+c*f+l*h-s*u,e[t+2]=l*_+c*u+s*f-o*h,e[t+3]=c*_-s*h-o*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),c=s(r/2),h=s(a/2),f=o(i/2),u=o(r/2),_=o(a/2);switch(n){case"XYZ":this._x=f*c*h+l*u*_,this._y=l*u*h-f*c*_,this._z=l*c*_+f*u*h,this._w=l*c*h-f*u*_;break;case"YXZ":this._x=f*c*h+l*u*_,this._y=l*u*h-f*c*_,this._z=l*c*_-f*u*h,this._w=l*c*h+f*u*_;break;case"ZXY":this._x=f*c*h-l*u*_,this._y=l*u*h+f*c*_,this._z=l*c*_+f*u*h,this._w=l*c*h-f*u*_;break;case"ZYX":this._x=f*c*h-l*u*_,this._y=l*u*h+f*c*_,this._z=l*c*_-f*u*h,this._w=l*c*h+f*u*_;break;case"YZX":this._x=f*c*h+l*u*_,this._y=l*u*h+f*c*_,this._z=l*c*_-f*u*h,this._w=l*c*h-f*u*_;break;case"XZY":this._x=f*c*h-l*u*_,this._y=l*u*h-f*c*_,this._z=l*c*_+f*u*h,this._w=l*c*h+f*u*_;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10],f=i+s+h;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(c-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>h){let u=2*Math.sqrt(1+i-s-h);this._w=(c-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>h){let u=2*Math.sqrt(1+s-i-h);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+n*s+r*l-a*o,this._y=r*c+n*o+a*s-i*l,this._z=a*c+n*l+i*o-r*s,this._w=n*c-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=(Zr=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(El.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*r),h=2*(o*i-n*a),f=2*(n*r-s*i);return this.x=i+l*c+s*f-o*h,this.y=r+l*h+o*c-n*f,this.z=a+l*f+n*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ze(this.x,t.x,i.x),this.y=Ze(this.y,t.y,i.y),this.z=Ze(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ze(this.x,t,i),this.y=Ze(this.y,t,i),this.z=Ze(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return hs.copy(this).projectOnVector(t),this.sub(hs)}reflect(t){return this.sub(hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ze(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zr.prototype.isVector3=!0,Zr),hs=new k,El=new xr,Be=(Jr=class{constructor(t,i,r,a,n,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c)}set(t,i,r,a,n,s,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=i,h[4]=n,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],f=r[7],u=r[2],_=r[5],S=r[8],M=a[0],m=a[3],d=a[6],b=a[1],A=a[4],E=a[7],w=a[2],L=a[5],p=a[8];return n[0]=s*M+o*b+l*w,n[3]=s*m+o*A+l*L,n[6]=s*d+o*E+l*p,n[1]=c*M+h*b+f*w,n[4]=c*m+h*A+f*L,n[7]=c*d+h*E+f*p,n[2]=u*M+_*b+S*w,n[5]=u*m+_*A+S*L,n[8]=u*d+_*E+S*p,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*s*h-i*o*c-r*n*h+r*o*l+a*n*c-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*s-o*c,u=o*l-h*n,_=c*n-s*l,S=i*f+r*u+a*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/S;return t[0]=f*M,t[1]=(a*c-h*r)*M,t[2]=(o*r-a*s)*M,t[3]=u*M,t[4]=(h*i-a*l)*M,t[5]=(a*n-o*i)*M,t[6]=_*M,t[7]=(r*l-c*i)*M,t[8]=(s*i-r*n)*M,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+i,0,0,1),this}scale(t,i){return Ln("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(us.makeScale(t,i)),this}rotate(t){return Ln("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(us.makeRotation(-t)),this}translate(t,i){return Ln("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(us.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jr.prototype.isMatrix3=!0,Jr),us=new Be,Tl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke=id();rd=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pr===void 0&&(Pr=Hn("canvas")),Pr.width=e.width,Pr.height=e.height;let r=Pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Pr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=zi(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zi(t[i]/255)*255):t[i]=zi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ad=0,Io=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(ds(r[n].image)):a.push(ds(r[n]))}else a=ds(r);i.url=a}return t||(e.images[this.uuid]=i),i}};nd=0,ps=new k,vi=class Nn extends vr{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=Fi,a=Fi,n=Kt,s=tr,o=Ti,l=ri,c=Nn.DEFAULT_ANISOTROPY,h=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Da(),this.name="",this.source=new Io(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ps).x}get height(){return this.source.getSize(ps).y}get depth(){return this.source.getSize(ps).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ue(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Ue(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hs:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case Gs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hs:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case Gs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=Rc;vi.DEFAULT_ANISOTROPY=1;xt=(Qr=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],c=s[8],h=s[1],f=s[5],u=s[9],_=s[2],S=s[6],M=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-_)<.01&&Math.abs(u-S)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+_)<.1&&Math.abs(u+S)<.1&&Math.abs(o+f+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let d=(o+1)/2,b=(f+1)/2,A=(M+1)/2,E=(l+h)/4,w=(c+_)/4,L=(u+S)/4;return d>b&&d>A?d<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(d),a=E/r,n=w/r):b>A?b<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(b),r=E/a,n=L/a):A<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(A),r=w/n,a=L/n),this.set(r,a,n,i),this}let m=Math.sqrt((S-u)*(S-u)+(c-_)*(c-_)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(S-u)/m,this.y=(c-_)/m,this.z=(h-l)/m,this.w=Math.acos((o+f+M-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ze(this.x,t.x,i.x),this.y=Ze(this.y,t.y,i.y),this.z=Ze(this.z,t.z,i.z),this.w=Ze(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ze(this.x,t,i),this.y=Ze(this.y,t,i),this.z=Ze(this.z,t,i),this.w=Ze(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qr.prototype.isVector4=!0,Qr),sd=class extends vr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let r=i.count;for(let a=0;a<r;a++)this.textures[a]=new vi({width:e,height:t,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Io(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bi=class extends sd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},zc=class extends vi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},od=class extends vi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ut=(fr=class{constructor(t,i,r,a,n,s,o,l,c,h,f,u,_,S,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c,h,f,u,_,S,M,m)}set(t,i,r,a,n,s,o,l,c,h,f,u,_,S,M,m){let d=this.elements;return d[0]=t,d[4]=i,d[8]=r,d[12]=a,d[1]=n,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=_,d[7]=S,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Lr.setFromMatrixColumn(t,0).length(),n=1/Lr.setFromMatrixColumn(t,1).length(),s=1/Lr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),h=Math.cos(n),f=Math.sin(n);if(t.order==="XYZ"){let u=s*h,_=s*f,S=o*h,M=o*f;i[0]=l*h,i[4]=-l*f,i[8]=c,i[1]=_+S*c,i[5]=u-M*c,i[9]=-o*l,i[2]=M-u*c,i[6]=S+_*c,i[10]=s*l}else if(t.order==="YXZ"){let u=l*h,_=l*f,S=c*h,M=c*f;i[0]=u+M*o,i[4]=S*o-_,i[8]=s*c,i[1]=s*f,i[5]=s*h,i[9]=-o,i[2]=_*o-S,i[6]=M+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*h,_=l*f,S=c*h,M=c*f;i[0]=u-M*o,i[4]=-s*f,i[8]=S+_*o,i[1]=_+S*o,i[5]=s*h,i[9]=M-u*o,i[2]=-s*c,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*h,_=s*f,S=o*h,M=o*f;i[0]=l*h,i[4]=S*c-_,i[8]=u*c+M,i[1]=l*f,i[5]=M*c+u,i[9]=_*c-S,i[2]=-c,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,_=s*c,S=o*l,M=o*c;i[0]=l*h,i[4]=M-u*f,i[8]=S*f+_,i[1]=f,i[5]=s*h,i[9]=-o*h,i[2]=-c*h,i[6]=_*f+S,i[10]=u-M*f}else if(t.order==="XZY"){let u=s*l,_=s*c,S=o*l,M=o*c;i[0]=l*h,i[4]=-f,i[8]=c*h,i[1]=u*f+M,i[5]=s*h,i[9]=_*f-S,i[2]=S*f-_,i[6]=o*h,i[10]=M*f+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ld,t,cd)}lookAt(t,i,r){let a=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Yi.crossVectors(r,ti),Yi.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Yi.crossVectors(r,ti)),Yi.normalize(),rn.crossVectors(ti,Yi),a[0]=Yi.x,a[4]=rn.x,a[8]=ti.x,a[1]=Yi.y,a[5]=rn.y,a[9]=ti.y,a[2]=Yi.z,a[6]=rn.z,a[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],f=r[5],u=r[9],_=r[13],S=r[2],M=r[6],m=r[10],d=r[14],b=r[3],A=r[7],E=r[11],w=r[15],L=a[0],p=a[4],y=a[8],C=a[12],V=a[1],U=a[5],B=a[9],Z=a[13],I=a[2],W=a[6],ie=a[10],G=a[14],de=a[3],Q=a[7],$=a[11],ce=a[15];return n[0]=s*L+o*V+l*I+c*de,n[4]=s*p+o*U+l*W+c*Q,n[8]=s*y+o*B+l*ie+c*$,n[12]=s*C+o*Z+l*G+c*ce,n[1]=h*L+f*V+u*I+_*de,n[5]=h*p+f*U+u*W+_*Q,n[9]=h*y+f*B+u*ie+_*$,n[13]=h*C+f*Z+u*G+_*ce,n[2]=S*L+M*V+m*I+d*de,n[6]=S*p+M*U+m*W+d*Q,n[10]=S*y+M*B+m*ie+d*$,n[14]=S*C+M*Z+m*G+d*ce,n[3]=b*L+A*V+E*I+w*de,n[7]=b*p+A*U+E*W+w*Q,n[11]=b*y+A*B+E*ie+w*$,n[15]=b*C+A*Z+E*G+w*ce,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],_=t[14],S=t[3],M=t[7],m=t[11],d=t[15],b=l*_-c*u,A=o*_-c*f,E=o*u-l*f,w=s*_-c*h,L=s*u-l*h,p=s*f-o*h;return i*(M*b-m*A+d*E)-r*(S*b-m*w+d*L)+a*(S*A-M*w+d*p)-n*(S*E-M*L+m*p)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return i*(s*h-o*c)-r*(n*h-o*l)+a*(n*c-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],_=t[11],S=t[12],M=t[13],m=t[14],d=t[15],b=i*o-r*s,A=i*l-a*s,E=i*c-n*s,w=r*l-a*o,L=r*c-n*o,p=a*c-n*l,y=h*M-f*S,C=h*m-u*S,V=h*d-_*S,U=f*m-u*M,B=f*d-_*M,Z=u*d-_*m,I=b*Z-A*B+E*U+w*V-L*C+p*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/I;return t[0]=(o*Z-l*B+c*U)*W,t[1]=(a*B-r*Z-n*U)*W,t[2]=(M*p-m*L+d*w)*W,t[3]=(u*L-f*p-_*w)*W,t[4]=(l*V-s*Z-c*C)*W,t[5]=(i*Z-a*V+n*C)*W,t[6]=(m*E-S*p-d*A)*W,t[7]=(h*p-u*E+_*A)*W,t[8]=(s*B-o*V+c*y)*W,t[9]=(r*V-i*B-n*y)*W,t[10]=(S*L-M*E+d*b)*W,t[11]=(f*E-h*L-_*b)*W,t[12]=(o*C-s*U-l*y)*W,t[13]=(i*U-r*C+a*y)*W,t[14]=(M*A-S*w-m*b)*W,t[15]=(h*w-f*A+u*b)*W,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,c=n*s,h=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+r,h*l-a*s,0,c*l-a*o,h*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,c=n+n,h=s+s,f=o+o,u=n*c,_=n*h,S=n*f,M=s*h,m=s*f,d=o*f,b=l*c,A=l*h,E=l*f,w=r.x,L=r.y,p=r.z;return a[0]=(1-(M+d))*w,a[1]=(_+E)*w,a[2]=(S-A)*w,a[3]=0,a[4]=(_-E)*L,a[5]=(1-(u+d))*L,a[6]=(m+b)*L,a[7]=0,a[8]=(S+A)*p,a[9]=(m-b)*p,a[10]=(1-(u+M))*p,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=Lr.set(a[0],a[1],a[2]).length(),o=Lr.set(a[4],a[5],a[6]).length(),l=Lr.set(a[8],a[9],a[10]).length();n<0&&(s=-s),pi.copy(this);let c=1/s,h=1/o,f=1/l;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=f,pi.elements[9]*=f,pi.elements[10]*=f,i.setFromRotationMatrix(pi),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=_i,l=!1){let c=this.elements,h=2*n/(i-t),f=2*n/(r-a),u=(i+t)/(i-t),_=(r+a)/(r-a),S,M;if(l)S=n/(s-n),M=s*n/(s-n);else if(o===_i)S=-(s+n)/(s-n),M=-2*s*n/(s-n);else if(o===La)S=-s/(s-n),M=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=S,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=_i,l=!1){let c=this.elements,h=2/(i-t),f=2/(r-a),u=-(i+t)/(i-t),_=-(r+a)/(r-a),S,M;if(l)S=1/(s-n),M=s/(s-n);else if(o===_i)S=-2/(s-n),M=-(s+n)/(s-n);else if(o===La)S=-1/(s-n),M=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=S,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},fr.prototype.isMatrix4=!0,fr),Lr=new k,pi=new ut,ld=new k(0,0,0),cd=new k(1,1,1),Yi=new k,rn=new k,ti=new k,wl=new ut,Al=new xr,ra=class Hc{constructor(t=0,i=0,r=0,a=Hc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],f=a[2],u=a[6],_=a[10];switch(i){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,n),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,_),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,n)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,_),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Al.setFromEuler(this),this.setFromQuaternion(Al,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ra.DEFAULT_ORDER="XYZ";Uo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hd=0,Rl=new k,Nr=new xr,Li=new ut,an=new k,_a=new k,ud=new k,dd=new xr,Cl=new k(1,0,0),Pl=new k(0,1,0),Ll=new k(0,0,1),Nl={type:"added"},pd={type:"removed"},Dr={type:"childadded",child:null},fs={type:"childremoved",child:null},Wt=class Dn extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();let t=new k,i=new ra,r=new xr,a=new k(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ut},normalMatrix:{value:new Be}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(Cl,t)}rotateY(t){return this.rotateOnAxis(Pl,t)}rotateZ(t){return this.rotateOnAxis(Ll,t)}translateOnAxis(t,i){return Rl.copy(t).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Cl,t)}translateY(t){return this.translateOnAxis(Pl,t)}translateZ(t){return this.translateOnAxis(Ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?an.copy(t):an.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(_a,an,this.up):Li.lookAt(an,_a,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),Nr.setFromRotationMatrix(Li),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nl),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(pd),fs.child=t,this.dispatchEvent(fs),fs.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nl),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,t,ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];n(t.shapes,f)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),f=s(t.shapes),u=s(t.skeletons),_=s(t.animations),S=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),f.length>0&&(r.shapes=f),u.length>0&&(r.skeletons=u),_.length>0&&(r.animations=_),S.length>0&&(r.nodes=S)}return r.object=a,r;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wt.DEFAULT_UP=new k(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;pr=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fd={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let S of e.hand.values()){let M=t.getJointPose(S,i),m=this._getHandJoint(l,S);M!==null&&(m.matrix.fromArray(M.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=M.radius),m.visible=M!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=c.position.distanceTo(h.position),u=.02,_=.005;l.inputState.pinching&&f>u+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=u-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(fd)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},nn={h:0,s:0,l:0};ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Qu(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=gs(n,a,e+1/3),this.g=gs(n,a,e),this.b=gs(n,a,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=li){function i(a){a!==void 0&&parseFloat(a)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){let i=Gc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Ke.workingToColorSpace(kt.copy(this),e),Math.round(Ze(kt.r*255,0,255))*65536+Math.round(Ze(kt.g*255,0,255))*256+Math.round(Ze(kt.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(kt.copy(this),t);let i=kt.r,r=kt.g,a=kt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,c=(s+n)/2;if(s===n)o=0,l=0;else{let h=n-s;switch(l=c<=.5?h/(n+s):h/(2-n-s),n){case i:o=(r-a)/h+(r<a?6:0);break;case r:o=(a-i)/h+2;break;case a:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=li){Ke.workingToColorSpace(kt.copy(this),e);let t=kt.r,i=kt.g,r=kt.b;return e!==li?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(nn);let i=cs(Ki.h,nn.h,t),r=cs(Ki.s,nn.s,t),a=cs(Ki.l,nn.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kt=new ze;ze.NAMES=Gc;Vc=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fi=new k,Ni=new k,_s=new k,Di=new k,Ir=new k,Ur=new k,Dl=new k,vs=new k,xs=new k,Ss=new k,Ms=new xt,ys=new xt,Es=new xt,va=class Xr{constructor(t=new k,i=new k,r=new k){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),fi.subVectors(t,i),a.cross(fi);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){fi.subVectors(a,i),Ni.subVectors(r,i),_s.subVectors(t,i);let s=fi.dot(fi),o=fi.dot(Ni),l=fi.dot(_s),c=Ni.dot(Ni),h=Ni.dot(_s),f=s*c-o*o;if(f===0)return n.set(0,0,0),null;let u=1/f,_=(c*l-o*h)*u,S=(s*h-o*l)*u;return n.set(1-_-S,S,_)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Di.x),l.addScaledVector(s,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Ms.setScalar(0),ys.setScalar(0),Es.setScalar(0),Ms.fromBufferAttribute(t,i),ys.fromBufferAttribute(t,r),Es.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Ms,n.x),s.addScaledVector(ys,n.y),s.addScaledVector(Es,n.z),s}static isFrontFacing(t,i,r,a){return fi.subVectors(r,i),Ni.subVectors(t,i),fi.cross(Ni).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),fi.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Xr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Xr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Xr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Ir.subVectors(a,r),Ur.subVectors(n,r),vs.subVectors(t,r);let l=Ir.dot(vs),c=Ur.dot(vs);if(l<=0&&c<=0)return i.copy(r);xs.subVectors(t,a);let h=Ir.dot(xs),f=Ur.dot(xs);if(h>=0&&f<=h)return i.copy(a);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return s=l/(l-h),i.copy(r).addScaledVector(Ir,s);Ss.subVectors(t,n);let _=Ir.dot(Ss),S=Ur.dot(Ss);if(S>=0&&_<=S)return i.copy(n);let M=_*c-l*S;if(M<=0&&c>=0&&S<=0)return o=c/(c-S),i.copy(r).addScaledVector(Ur,o);let m=h*S-_*f;if(m<=0&&f-h>=0&&_-S>=0)return Dl.subVectors(n,a),o=(f-h)/(f-h+(_-S)),i.copy(a).addScaledVector(Dl,o);let d=1/(m+M+u);return s=M*d,o=u*d,i.copy(r).addScaledVector(Ir,s).addScaledVector(Ur,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Sr=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,mi):mi.fromBufferAttribute(a,n),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sn.copy(i.boundingBox)),sn.applyMatrix4(e.matrixWorld),this.union(sn)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),on.subVectors(this.max,xa),Or.subVectors(e.a,xa),Fr.subVectors(e.b,xa),Br.subVectors(e.c,xa),Zi.subVectors(Fr,Or),Ji.subVectors(Br,Fr),cr.subVectors(Or,Br);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-cr.z,cr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,cr.z,0,-cr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-cr.y,cr.x,0];return!Ts(t,Or,Fr,Br,on)||(t=[1,0,0,0,1,0,0,0,1],!Ts(t,Or,Fr,Br,on))?!1:(ln.crossVectors(Zi,Ji),t=[ln.x,ln.y,ln.z],Ts(t,Or,Fr,Br,on))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ii=[new k,new k,new k,new k,new k,new k,new k,new k],mi=new k,sn=new Sr,Or=new k,Fr=new k,Br=new k,Zi=new k,Ji=new k,cr=new k,xa=new k,on=new k,ln=new k,hr=new k;yt=new k,cn=new Qe,md=0,rr=class extends vr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:md++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ju,this.updateRanges=[],this.gpuType=gi,this.version=0,this._normalizationScale=e!==void 0?Do(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXY(t,cn.x,cn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ed(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):td(e,this.array)}},kc=class extends rr{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Wc=class extends rr{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ut=class extends rr{constructor(e,t,i){super(new Float32Array(e),t,i)}},gd=new Sr,Sa=new k,bs=new k,Ia=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):gd.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);let t=Sa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(bs)),this.expandByPoint(Sa.copy(e.center).sub(bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_d=0,oi=new ut,ws=new Wt,zr=new k,ii=new Sr,Ma=new Sr,It=new k,Hi=class Xc extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qu(t)?Wc:kc)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Be().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,i,r){return oi.makeTranslation(t,i,r),this.applyMatrix4(oi),this}scale(t,i,r){return oi.makeScale(t,i,r),this.applyMatrix4(oi),this}lookAt(t){return ws.lookAt(t),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ut(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];ii.setFromBufferAttribute(n),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ia);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let r=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Ma.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(ii.min,Ma.min),ii.expandByPoint(It),It.addVectors(ii.max,Ma.max),ii.expandByPoint(It)):(ii.expandByPoint(Ma.min),ii.expandByPoint(Ma.max))}ii.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)It.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(It));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)It.fromBufferAttribute(o,c),l&&(zr.fromBufferAttribute(t,c),It.add(zr)),a=Math.max(a,r.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new rr(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[],c=new Uint8Array(r.count);for(let C=0;C<r.count;C++)o[C]=new k,l[C]=new k;let h=new k,f=new k,u=new k,_=new Qe,S=new Qe,M=new Qe,m=new k,d=new k;function b(C,V,U){c[C]=c[V]=c[U]=1,h.fromBufferAttribute(r,C),f.fromBufferAttribute(r,V),u.fromBufferAttribute(r,U),_.fromBufferAttribute(n,C),S.fromBufferAttribute(n,V),M.fromBufferAttribute(n,U),f.sub(h),u.sub(h),S.sub(_),M.sub(_);let B=1/(S.x*M.y-M.x*S.y);isFinite(B)&&(m.copy(f).multiplyScalar(M.y).addScaledVector(u,-S.y).multiplyScalar(B),d.copy(u).multiplyScalar(S.x).addScaledVector(f,-M.x).multiplyScalar(B),o[C].add(m),o[V].add(m),o[U].add(m),l[C].add(d),l[V].add(d),l[U].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let C=0,V=A.length;C<V;++C){let U=A[C],B=U.start,Z=U.count;for(let I=B,W=B+Z;I<W;I+=3)b(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let E=new k,w=new k,L=new k,p=new k;function y(C){L.fromBufferAttribute(a,C),p.copy(L);let V=o[C];E.copy(V),E.sub(L.multiplyScalar(L.dot(V))).normalize(),w.crossVectors(p,V);let U=w.dot(l[C])<0?-1:1;s.setXYZW(C,E.x,E.y,E.z,U)}for(let C=0,V=r.count;C<V;++C)c[C]&&y(C);this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new rr(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,_=r.count;u<_;u++)r.setXYZ(u,0,0,0);let a=new k,n=new k,s=new k,o=new k,l=new k,c=new k,h=new k,f=new k;if(t)for(let u=0,_=t.count;u<_;u+=3){let S=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(i,S),n.fromBufferAttribute(i,M),s.fromBufferAttribute(i,m),h.subVectors(s,n),f.subVectors(a,n),h.cross(f),o.fromBufferAttribute(r,S),l.fromBufferAttribute(r,M),c.fromBufferAttribute(r,m),o.add(h),l.add(h),c.add(h),r.setXYZ(S,o.x,o.y,o.z),r.setXYZ(M,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,_=i.count;u<_;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),h.subVectors(s,n),f.subVectors(a,n),h.cross(f),r.setXYZ(u+0,h.x,h.y,h.z),r.setXYZ(u+1,h.x,h.y,h.z),r.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)It.fromBufferAttribute(t,i),It.normalize(),t.setXYZ(i,It.x,It.y,It.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),_=0,S=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?_=l[M]*o.data.stride+o.offset:_=l[M]*h;for(let d=0;d<h;d++)u[S++]=c[_++]}return new rr(u,h,f)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Xc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,r);i.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],_=t(u,r);l.push(_)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let _=c[f];h.push(_.toJSON(t.data))}h.length>0&&(a[l]=h,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(i))}let n=t.morphAttributes;for(let c in n){let h=[],f=n[c];for(let u=0,_=f.length;u<_;u++)h.push(f[u].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},As=new k,vd=new k,xd=new Be,$i=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=As.subVectors(i,t).cross(vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(As),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||xd.getNormalMatrix(e),r=this.coplanarPoint(As).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Sd=0,Ua=class extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=Aa,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=Sc,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new $i().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ui=new k,Rs=new k,hn=new k,un=new k,jc=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Rs.copy(e).add(t).multiplyScalar(.5),hn.copy(t).sub(e).normalize(),un.copy(this.origin).sub(Rs);let a=e.distanceTo(t)*.5,n=-this.direction.dot(hn),s=un.dot(this.direction),o=-un.dot(hn),l=un.lengthSq(),c=Math.abs(1-n*n),h,f,u,_;if(c>0)if(h=n*o-s,f=n*s-o,_=a*c,h>=0)if(f>=-_)if(f<=_){let S=1/c;h*=S,f*=S,u=h*(h+n*f+2*s)+f*(n*h+f+2*o)+l}else f=a,h=Math.max(0,-(n*f+s)),u=-h*h+f*(f+2*o)+l;else f=-a,h=Math.max(0,-(n*f+s)),u=-h*h+f*(f+2*o)+l;else f<=-_?(h=Math.max(0,-(-n*a+s)),f=h>0?-a:Math.min(Math.max(-a,-o),a),u=-h*h+f*(f+2*o)+l):f<=_?(h=0,f=Math.min(Math.max(-a,-o),a),u=f*(f+2*o)+l):(h=Math.max(0,-(n*a+s)),f=h>0?a:Math.min(Math.max(-a,-o),a),u=-h*h+f*(f+2*o)+l);else f=n>0?-a:a,h=Math.max(0,-(n*f+s)),u=-h*h+f*(f+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Rs).addScaledVector(hn,f),u}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);let i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),c>=0?(a=(e.min.y-f.y)*c,n=(e.max.y-f.y)*c):(a=(e.max.y-f.y)*c,n=(e.min.y-f.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),h>=0?(s=(e.min.z-f.z)*h,o=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,o=(e.min.z-f.z)*h),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,c=s.z,h=e.x-n.x,f=e.y-n.y,u=e.z-n.z,_=t.x-n.x,S=t.y-n.y,M=t.z-n.z,m=i.x-n.x,d=i.y-n.y,b=i.z-n.z,A=Math.abs(o),E=Math.abs(l),w=Math.abs(c),L,p,y,C,V,U,B,Z,I,W,ie,G;if(A>=E&&A>=w?(y=o,U=h,I=_,G=m,o>=0?(L=l,p=c,C=f,V=u,B=S,Z=M,W=d,ie=b):(L=c,p=l,C=u,V=f,B=M,Z=S,W=b,ie=d)):E>=w?(y=l,U=f,I=S,G=d,l>=0?(L=c,p=o,C=u,V=h,B=M,Z=_,W=b,ie=m):(L=o,p=c,C=h,V=u,B=_,Z=M,W=m,ie=b)):(y=c,U=u,I=M,G=b,c>=0?(L=o,p=l,C=h,V=f,B=_,Z=S,W=m,ie=d):(L=l,p=o,C=f,V=h,B=S,Z=_,W=d,ie=m)),y===0)return null;let de=L/y,Q=p/y,$=1/y,ce=C-de*U,Re=V-Q*U,K=B-de*I,le=Z-Q*I,Ee=W-de*G,Me=ie-Q*G,Le=Ee*le-Me*K,me=ce*Me-Re*Ee,He=K*Re-le*ce;if(r){if(Le<0||me<0||He<0)return null}else if((Le<0||me<0||He<0)&&(Le>0||me>0||He>0))return null;let je=Le+me+He;if(je===0)return null;let Ce=$*(Le*U+me*I+He*G);return(je>0?Ce<0:Ce>0)?null:this.at(Ce/je,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Md=class extends Ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Il=new ut,ur=new jc,dn=new Ia,Ul=new k,pn=new k,fn=new k,mn=new k,Cs=new k,gn=new k,Ol=new k,_n=new k,zt=class extends Wt{constructor(e=new Hi,t=new Md){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){gn.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let c=s[o],h=a[o];c!==0&&(Cs.fromBufferAttribute(h,e),n?gn.addScaledVector(Cs,c):gn.addScaledVector(Cs.sub(t),c))}t.add(gn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dn.copy(i.boundingSphere),dn.applyMatrix4(a),ur.copy(e.ray).recast(e.near),!(dn.containsPoint(ur.origin)===!1&&(ur.intersectSphere(dn,Ul)===null||ur.origin.distanceToSquared(Ul)>(e.far-e.near)**2))&&(Il.copy(a).invert(),ur.copy(e.ray).applyMatrix4(Il),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,h=a.attributes.normal,f=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let _=0,S=f.length;_<S;_++){let M=f[_],m=n[M.materialIndex],d=Math.max(M.start,u.start),b=Math.min(s.count,Math.min(M.start+M.count,u.start+u.count));for(let A=d,E=b;A<E;A+=3){let w=s.getX(A),L=s.getX(A+1),p=s.getX(A+2);r=vn(this,m,e,i,l,c,h,w,L,p),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{let _=Math.max(0,u.start),S=Math.min(s.count,u.start+u.count);for(let M=_,m=S;M<m;M+=3){let d=s.getX(M),b=s.getX(M+1),A=s.getX(M+2);r=vn(this,n,e,i,l,c,h,d,b,A),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let _=0,S=f.length;_<S;_++){let M=f[_],m=n[M.materialIndex],d=Math.max(M.start,u.start),b=Math.min(o.count,Math.min(M.start+M.count,u.start+u.count));for(let A=d,E=b;A<E;A+=3){let w=A,L=A+1,p=A+2;r=vn(this,m,e,i,l,c,h,w,L,p),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{let _=Math.max(0,u.start),S=Math.min(o.count,u.start+u.count);for(let M=_,m=S;M<m;M+=3){let d=M,b=M+1,A=M+2;r=vn(this,n,e,i,l,c,h,d,b,A),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}}};qc=class extends vi{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Bt,c=Bt,h,f){super(null,n,s,o,l,c,r,a,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fl=class extends rr{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hr=new ut,Bl=new ut,xn=[],zl=new Sr,Ed=new ut,ya=new zt,Ea=new Ia,Yc=class extends zt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ed)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hr),zl.copy(e.boundingBox).applyMatrix4(Hr),this.boundingBox.union(zl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ia),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hr),Ea.copy(e.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(Ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ya.geometry=this.geometry,ya.material=this.material,ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(i),e.ray.intersectsSphere(Ea)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Hr),Bl.multiplyMatrices(i,Hr),ya.matrixWorld=Bl,ya.raycast(e,xn);for(let n=0,s=xn.length;n<s;n++){let o=xn[n];o.instanceId=a,o.object=this,t.push(o)}xn.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new qc(new Float32Array(r*this.count),r,this.count,Co,gi));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},dr=new Ia,Td=new Qe(.5,.5),Sn=new k,Na=class{constructor(e=new $i,t=new $i,i=new $i,r=new $i,a=new $i,n=new $i){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_i,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],f=a[6],u=a[7],_=a[8],S=a[9],M=a[10],m=a[11],d=a[12],b=a[13],A=a[14],E=a[15];if(r[0].setComponents(l-n,u-c,m-_,E-d).normalize(),r[1].setComponents(l+n,u+c,m+_,E+d).normalize(),r[2].setComponents(l+s,u+h,m+S,E+b).normalize(),r[3].setComponents(l-s,u-h,m-S,E-b).normalize(),i)r[4].setComponents(o,f,M,A).normalize(),r[5].setComponents(l-o,u-f,m-M,E-A).normalize();else if(r[4].setComponents(l-o,u-f,m-M,E-A).normalize(),t===_i)r[5].setComponents(l+o,u+f,m+M,E+A).normalize();else if(t===La)r[5].setComponents(o,f,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);let t=Td.distanceTo(e.center);return dr.radius=.7071067811865476+t,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Sn.x=r.normal.x>0?e.max.x:e.min.x,Sn.y=r.normal.y>0?e.max.y:e.min.y,Sn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hl=new ut,bd=class Kc{constructor(){this.coordinateSystem=_i,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];Hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new Na),r[a].setFromProjectionMatrix(Hl,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new Na),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new Kc().copy(this)}},Zc=class extends vi{constructor(e=[],t=ea,i,r,a,n,s,o,l,c){super(e,t,i,r,a,n,s,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},aa=class extends vi{constructor(e,t,i=wi,r,a,n,s=Bt,o=Bt,l,c=ar,h=1){if(c!==ar&&c!==ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,a,n,s,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Jc=class extends aa{constructor(e,t=wi,i=ea,r,a,n=Bt,s=Bt,o,l=ar){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,s,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qc=class extends vi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Oa=class $c extends Hi{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=0,_=0;S("z","y","x",-1,-1,r,i,t,s,n,0),S("z","y","x",1,-1,r,i,-t,s,n,1),S("x","z","y",1,1,t,r,i,a,s,2),S("x","z","y",1,-1,t,r,-i,a,s,3),S("x","y","z",1,-1,t,i,r,a,n,4),S("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(f,2));function S(M,m,d,b,A,E,w,L,p,y,C){let V=E/p,U=w/y,B=E/2,Z=w/2,I=L/2,W=p+1,ie=y+1,G=0,de=0,Q=new k;for(let $=0;$<ie;$++){let ce=$*U-Z;for(let Re=0;Re<W;Re++){let K=Re*V-B;Q[M]=K*b,Q[m]=ce*A,Q[d]=I,c.push(Q.x,Q.y,Q.z),Q[M]=0,Q[m]=0,Q[d]=L>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(Re/p),f.push(1-$/y),G+=1}}for(let $=0;$<y;$++)for(let ce=0;ce<p;ce++){let Re=u+ce+W*$,K=u+ce+W*($+1),le=u+(ce+1)+W*($+1),Ee=u+(ce+1)+W*$;l.push(Re,K,Ee),l.push(K,le,Ee),de+=6}o.addGroup(_,de,C),_+=de,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Oo=class eh extends Hi{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),n=Math.floor(n);let h=[],f=[],u=[],_=[],S=0,M=[],m=r/2,d=0;b(),s===!1&&(t>0&&A(!0),i>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Ut(f,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(_,2));function b(){let E=new k,w=new k,L=0,p=(i-t)/r;for(let y=0;y<=n;y++){let C=[],V=y/n,U=V*(i-t)+t;for(let B=0;B<=a;B++){let Z=B/a,I=Z*l+o,W=Math.sin(I),ie=Math.cos(I);w.x=U*W,w.y=-V*r+m,w.z=U*ie,f.push(w.x,w.y,w.z),E.set(W,p,ie).normalize(),u.push(E.x,E.y,E.z),_.push(Z,1-V),C.push(S++)}M.push(C)}for(let y=0;y<a;y++)for(let C=0;C<n;C++){let V=M[C][y],U=M[C+1][y],B=M[C+1][y+1],Z=M[C][y+1];(t>0||C!==0)&&(h.push(V,U,Z),L+=3),(i>0||C!==n-1)&&(h.push(U,B,Z),L+=3)}c.addGroup(d,L,0),d+=L}function A(E){let w=S,L=new Qe,p=new k,y=0,C=E===!0?t:i,V=E===!0?1:-1;for(let B=1;B<=a;B++)f.push(0,m*V,0),u.push(0,V,0),_.push(.5,.5),S++;let U=S;for(let B=0;B<=a;B++){let Z=B/a*l+o,I=Math.cos(Z),W=Math.sin(Z);p.x=C*W,p.y=m*V,p.z=C*I,f.push(p.x,p.y,p.z),u.push(0,V,0),L.x=I*.5+.5,L.y=W*.5*V+.5,_.push(L.x,L.y),S++}for(let B=0;B<a;B++){let Z=w+B,I=U+B;E===!0?h.push(I,I+1,Z):h.push(I+1,I,Z),y+=3}c.addGroup(d,y,E===!0?1:2),d+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fo=class th extends Oo{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new th(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ih=class rh extends Hi{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),c=o+1,h=l+1,f=t/o,u=i/l,_=[],S=[],M=[],m=[];for(let d=0;d<h;d++){let b=d*u-s;for(let A=0;A<c;A++){let E=A*f-n;S.push(E,-b,0),M.push(0,0,1),m.push(A/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){let A=b+c*d,E=b+c*(d+1),w=b+1+c*(d+1),L=b+1+c*d;_.push(A,E,L),_.push(E,w,L)}this.setIndex(_),this.setAttribute("position",new Ut(S,3)),this.setAttribute("normal",new Ut(M,3)),this.setAttribute("uv",new Ut(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.width,t.height,t.widthSegments,t.heightSegments)}},ah=class nh extends Hi{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),c=0,h=[],f=new k,u=new k,_=[],S=[],M=[],m=[];for(let d=0;d<=r;d++){let b=[],A=d/r,E=s+A*o,w=t*Math.cos(E),L=Math.sqrt(t*t-w*w),p=0;d===0&&s===0?p=.5/i:d===r&&l===Math.PI&&(p=-.5/i);for(let y=0;y<=i;y++){let C=y/i,V=a+C*n;f.x=-L*Math.cos(V),f.y=w,f.z=L*Math.sin(V),S.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),m.push(C+p,1-A),b.push(c++)}h.push(b)}for(let d=0;d<r;d++)for(let b=0;b<i;b++){let A=h[d][b+1],E=h[d][b],w=h[d+1][b],L=h[d+1][b+1];(d!==0||s>0)&&_.push(A,E,L),(d!==r-1||l<Math.PI)&&_.push(E,w,L)}this.setIndex(_),this.setAttribute("position",new Ut(S,3)),this.setAttribute("normal",new Ut(M,3)),this.setAttribute("uv",new Ut(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};Ad={clone:na,merge:jt},Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_r=class extends Ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rd,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new Qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new k().fromArray(r.value);break;case"v4":this.uniforms[i].value=new xt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pd=class extends _r{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},oh=class extends Ua{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=bo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ld=class extends Ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nd=class extends Ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Fa=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dd=class extends Fa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_l,endingEnd:_l}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case vl:a=e,s=2*t-i;break;case xl:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case vl:n=e,o=2*i-t;break;case xl:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*c,this._offsetNext=n*c}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,u=this._weightNext,_=(i-t)/(r-t),S=_*_,M=S*_,m=-f*M+2*f*S-f*_,d=(1+f)*M+(-1.5-2*f)*S+(-.5+f)*_+1,b=(-1-u)*M+(1.5+u)*S+.5*_,A=u*M-u*S;for(let E=0;E!==s;++E)a[E]=m*n[c+E]+d*n[l+E]+b*n[o+E]+A*n[h+E];return a}},Id=class extends Fa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(i-t)/(r-t),h=1-c;for(let f=0;f!==s;++f)a[f]=n[l+f]*h+n[o+f]*c;return a}},Ud=class extends Fa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Od=class extends Fa{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this.inTangents,h=this.outTangents;if(!c||!h){let _=(i-t)/(r-t),S=1-_;for(let M=0;M!==s;++M)a[M]=n[l+M]*S+n[o+M]*_;return a}let f=s*2,u=e-1;for(let _=0;_!==s;++_){let S=n[l+_],M=n[o+_],m=u*f+_*2,d=h[m],b=h[m+1],A=e*f+_*2,E=c[A],w=c[A+1],L=Bd(i,t,d,E,r);a[_]=lh(L,S,b,w,M)}return a}};Ri=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gr(t,this.TimeBufferType),this.values=Gr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Gr(e.times,Array),values:Gr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Mn(e.settings)&&(i.settings={inTangents:Gr(e.settings.inTangents,Array),outTangents:Gr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Id(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Od(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fn:t=this.InterpolantFactoryMethodDiscrete;break;case xo:t=this.InterpolantFactoryMethodLinear;break;case ss:t=this.InterpolantFactoryMethodSmooth;break;case gl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ue("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fn;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return ss;case this.InterpolantFactoryMethodBezier:return gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;Mn(this.settings)&&(Vl(this.settings.inTangents,e),Vl(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Mn(this.settings)&&(kl(this.settings.inTangents,e),kl(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Fe("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Fe("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Yu(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Fe("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ss,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],c=e[s+1];if(l!==c&&(s!==1||l!==e[0]))if(r)o=!0;else{let h=s*i,f=h-i,u=h+i;for(let _=0;_!==i;++_){let S=t[h+_];if(S!==t[f+_]||S!==t[u+_]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let h=s*i,f=n*i;for(let u=0;u!==i;++u)t[f+u]=t[h+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Mn(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};Ri.prototype.ValueTypeName="";Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=xo;Ba=class extends Ri{constructor(e,t,i){super(e,t,i)}};Ba.prototype.ValueTypeName="bool";Ba.prototype.ValueBufferType=Array;Ba.prototype.DefaultInterpolation=Fn;Ba.prototype.InterpolantFactoryMethodLinear=void 0;Ba.prototype.InterpolantFactoryMethodSmooth=void 0;zd=class extends Ri{constructor(e,t,i,r){super(e,t,i,r)}};zd.prototype.ValueTypeName="color";Hd=class extends Ri{constructor(e,t,i,r){super(e,t,i,r)}};Hd.prototype.ValueTypeName="number";Gd=class extends Fa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let c=l+s;l!==c;l+=4)xr.slerpFlat(a,0,n,l-s,n,l,o);return a}},ch=class extends Ri{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Gd(this.times,this.values,this.getValueSize(),e)}};ch.prototype.ValueTypeName="quaternion";ch.prototype.InterpolantFactoryMethodSmooth=void 0;za=class extends Ri{constructor(e,t,i){super(e,t,i)}};za.prototype.ValueTypeName="string";za.prototype.ValueBufferType=Array;za.prototype.DefaultInterpolation=Fn;za.prototype.InterpolantFactoryMethodLinear=void 0;za.prototype.InterpolantFactoryMethodSmooth=void 0;Vd=class extends Ri{constructor(e,t,i,r){super(e,t,i,r)}};Vd.prototype.ValueTypeName="vector";kd=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){s++,a===!1&&r.onStart!==void 0&&r.onStart(c,n,s),a=!0},this.itemEnd=function(c){n++,r.onProgress!==void 0&&r.onProgress(c,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=l.length;h<f;h+=2){let u=l[h],_=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wd=new kd,Xd=class{constructor(e){this.manager=e!==void 0?e:Wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Xd.DEFAULT_MATERIAL_NAME="__DEFAULT";hh=class extends Wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},uh=class extends hh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ps=new ut,Wl=new k,Xl=new k,jd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),Xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Ps.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ps,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===La||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(Ps)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yn=new k,En=new xr,Mi=new k,dh=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yn,En,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yn,En,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(yn,En,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yn,En,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new k,jl=new Qe,ql=new Qe,ci=class extends dh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,jl,ql),t.subVectors(ql,jl)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ls*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ph=class extends dh{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qd=class extends jd{constructor(){super(new ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fh=class extends hh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new qd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Vr=-90,kr=1,yo=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ci(Vr,kr,e,t);r.layers=this.layers,this.add(r);let a=new ci(Vr,kr,e,t);a.layers=this.layers,this.add(a);let n=new ci(Vr,kr,e,t);n.layers=this.layers,this.add(n);let s=new ci(Vr,kr,e,t);s.layers=this.layers,this.add(s);let o=new ci(Vr,kr,e,t);o.layers=this.layers,this.add(o);let l=new ci(Vr,kr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===La)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=S,e.setRenderTarget(i,5,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,f,u),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Yd=class extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Bo="\\[\\]\\.:\\/",Kd=new RegExp("["+Bo+"]","g"),zo="[^"+Bo+"]",Zd="[^"+Bo.replace("\\.","")+"]",Jd=/((?:WC+[\/:])*)/.source.replace("WC",zo),Qd=/(WCOD+)?/.source.replace("WCOD",Zd),$d=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zo),ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zo),tp=new RegExp("^"+Jd+Qd+$d+ep+"$"),ip=["material","materials","bones","map"],rp=class{constructor(e,t,i){let r=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class jr{constructor(t,i,r){this.path=i,this.parsedPath=r||jr.parseTrackName(i),this.node=jr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new jr.Composite(t,i,r):new jr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kd,"")}static parseTrackName(t){let i=tp.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);ip.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=jr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=i.objectIndex;switch(r){case"materials":if(!t.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(c!==void 0){if(t[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[a];if(s===void 0){let c=i.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=rp;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];N_=new Float32Array(1),Yl=new ut,mh=class{constructor(e,t,i=0,r=1/0){this.ray=new jc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Fe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yl),this}intersectObject(e,t=!0,i=[]){return Eo(e,this,i,t),i.sort(Kl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Eo(e[r],this,i,t);return i.sort(Kl),i}};D_=($r=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},$r.prototype.isMatrix2=!0,$r);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
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
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dp=`#ifdef USE_AOMAP
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
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
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
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xp=`#ifdef USE_IRIDESCENCE
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
#endif`,Sp=`#ifdef USE_BUMPMAP
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cp=`#define PI 3.141592653589793
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
} // validated`,Pp=`vec3 transformedNormal = objectNormal;
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
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rf=`PhysicalMaterial material;
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
#endif`,af=`uniform sampler2D dfgLUT;
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
}`,nf=`
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
#endif`,sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,of=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gf=`#if defined( USE_POINTS_UV )
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
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sf=`#if defined( USE_MORPHCOLORS )
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
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`#ifdef USE_MORPHTARGETS
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
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cf=`#ifdef USE_NORMALMAP
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
#endif`,Pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,If=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xf=`float getShadowMask() {
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
}`,jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qf=`#ifdef USE_SKINNING
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
#endif`,Yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kf=`#ifdef USE_SKINNING
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
#endif`,Zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$f=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform float backgroundBlurriness;
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
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
}`,pm=`#if DEPTH_PACKING == 3200
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
}`,fm=`#define DISTANCE
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
}`,mm=`#define DISTANCE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
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
}`,xm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Mm=`uniform vec3 diffuse;
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
}`,ym=`#define LAMBERT
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
}`,Em=`#define LAMBERT
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
}`,Tm=`#define MATCAP
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
}`,bm=`#define MATCAP
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
}`,wm=`#define NORMAL
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
}`,Am=`#define NORMAL
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define PHONG
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
}`,Pm=`#define STANDARD
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
}`,Lm=`#define STANDARD
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
}`,Nm=`#define TOON
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
}`,Dm=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Fm=`uniform vec3 color;
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
}`,Bm=`uniform float rotation;
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
}`,zm=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:sp,alphahash_pars_fragment:op,alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:hp,alphatest_pars_fragment:up,aomap_fragment:dp,aomap_pars_fragment:pp,batching_pars_vertex:fp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:_p,bsdfs:vp,iridescence_fragment:xp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Tp,color_fragment:bp,color_pars_fragment:wp,color_pars_vertex:Ap,color_vertex:Rp,common:Cp,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Np,emissivemap_fragment:Dp,emissivemap_pars_fragment:Ip,colorspace_fragment:Up,colorspace_pars_fragment:Op,envmap_fragment:Fp,envmap_common_pars_fragment:Bp,envmap_pars_fragment:zp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:Jp,envmap_vertex:Gp,fog_vertex:Vp,fog_pars_vertex:kp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:jp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:Kp,lights_pars_begin:Zp,lights_toon_fragment:Qp,lights_toon_pars_fragment:$p,lights_phong_fragment:ef,lights_phong_pars_fragment:tf,lights_physical_fragment:rf,lights_physical_pars_fragment:af,lights_fragment_begin:nf,lights_fragment_maps:sf,lights_fragment_end:of,lightprobes_pars_fragment:lf,logdepthbuf_fragment:cf,logdepthbuf_pars_fragment:hf,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:df,map_fragment:pf,map_pars_fragment:ff,map_particle_fragment:mf,map_particle_pars_fragment:gf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:vf,morphinstance_vertex:xf,morphcolor_vertex:Sf,morphnormal_vertex:Mf,morphtarget_pars_vertex:yf,morphtarget_vertex:Ef,normal_fragment_begin:Tf,normal_fragment_maps:bf,normal_pars_fragment:wf,normal_pars_vertex:Af,normal_vertex:Rf,normalmap_pars_fragment:Cf,clearcoat_normal_fragment_begin:Pf,clearcoat_normal_fragment_maps:Lf,clearcoat_pars_fragment:Nf,iridescence_pars_fragment:Df,opaque_fragment:If,packing:Uf,premultiplied_alpha_fragment:Of,project_vertex:Ff,dithering_fragment:Bf,dithering_pars_fragment:zf,roughnessmap_fragment:Hf,roughnessmap_pars_fragment:Gf,shadowmap_pars_fragment:Vf,shadowmap_pars_vertex:kf,shadowmap_vertex:Wf,shadowmask_pars_fragment:Xf,skinbase_vertex:jf,skinning_pars_vertex:qf,skinning_vertex:Yf,skinnormal_vertex:Kf,specularmap_fragment:Zf,specularmap_pars_fragment:Jf,tonemapping_fragment:Qf,tonemapping_pars_fragment:$f,transmission_fragment:em,transmission_pars_fragment:tm,uv_pars_fragment:im,uv_pars_vertex:rm,uv_vertex:am,worldpos_vertex:nm,background_vert:sm,background_frag:om,backgroundCube_vert:lm,backgroundCube_frag:cm,cube_vert:hm,cube_frag:um,depth_vert:dm,depth_frag:pm,distance_vert:fm,distance_frag:mm,equirect_vert:gm,equirect_frag:_m,linedashed_vert:vm,linedashed_frag:xm,meshbasic_vert:Sm,meshbasic_frag:Mm,meshlambert_vert:ym,meshlambert_frag:Em,meshmatcap_vert:Tm,meshmatcap_frag:bm,meshnormal_vert:wm,meshnormal_frag:Am,meshphong_vert:Rm,meshphong_frag:Cm,meshphysical_vert:Pm,meshphysical_frag:Lm,meshtoon_vert:Nm,meshtoon_frag:Dm,points_vert:Im,points_frag:Um,shadow_vert:Om,shadow_frag:Fm,sprite_vert:Bm,sprite_frag:zm},xe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Ei={basic:{uniforms:jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:jt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:jt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new ze(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:jt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:jt([xe.points,xe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:jt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:jt([xe.common,xe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:jt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:jt([xe.sprite,xe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:jt([xe.common,xe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:jt([xe.lights,xe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Ei.physical={uniforms:jt([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};Tn={r:0,b:0,g:0},Hm=new ut,_h=new Be;_h.set(-1,0,0,0,1,0,0,0,1);Ho=class extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Oa(5,5,5),a=new _r({name:"CubemapFromEquirect",uniforms:na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:qr});a.uniforms.tEquirect.value=t;let n=new zt(r,a),s=t.minFilter;return t.minFilter===tr&&(t.minFilter=Kt),new yo(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},Jl=256,jm=3,qm=20,vh=256,xh=16,Ym=3,Km=new k,Zm=new ze,Ql=class Sh{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new yo(1,10,null),this._boxMesh=new zt(new Oa(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,r=.1,a=100,n={}){let{size:s=256,position:o=Km}=n,l=this._renderer;this._setSize(s);let c=this._allocateTarget(),h=this._getSourceTarget(!0);i>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,_=l.autoClearDepth,S=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(Zm));let m=new yo(r,a,h);return m.position.copy(o),m.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=_,l.autoClearStencil=S,t.background=M,i>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,i)),this._applyPMREM(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(Jl,$u(t))}_fromTexture(t,i){t.mapping===ea||t.mapping===Ca?this._setSize(t.image.length===0?Jl:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let r=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(r),r}_allocateTarget(){let t=this._cubeSize,i=$l(t,!1,!1),r=Math.log2(t)-jm;for(let a=0;a<=r;a++)i.texture.mipmaps.push({width:t>>a,height:t>>a});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){let i=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==i||t&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=$l(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,r){let a=this._boxMesh,n=this._cubeCamera;a.material=r,n.renderTarget=t,n.activeMipmapLevel=i;let s=t.width>>i;t.viewport.set(0,0,s,s),n.update(this._renderer,a),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===ea||t.mapping===Ca?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ec()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Jm(),this._integrationMaterial=Qm());let i=this._cubeSize,r=t.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(i/xh);for(let s=0;s<=r;s++){let o=Sh.lodToRoughness(s,r);if(s>r-Ym)n.roughness.value=o,this._renderCube(t,s,this._integrationMaterial);else{let l=o>0?Math.log2(i)+.5*Math.log2(6/(vh*Math.pow(o,4)))+.5:0;a.roughness.value=o,a.lodBias.value=l,this._renderCube(t,s,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=$m());let r=this._blurMaterial,a=r.uniforms,n=this._sourceTarget;a.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,a.envMap.value=n.texture,this._renderCube(t,0,r),a.envMap.value=t.texture,this._renderCube(n,0,r)}};og={[Mc]:"LINEAR_TONE_MAPPING",[yc]:"REINHARD_TONE_MAPPING",[Ec]:"CINEON_TONE_MAPPING",[Tc]:"ACES_FILMIC_TONE_MAPPING",[wc]:"AGX_TONE_MAPPING",[Ac]:"NEUTRAL_TONE_MAPPING",[bc]:"CUSTOM_TONE_MAPPING"};Mh=new vi,yh=new aa(1,1),Eh=new Jc(1),Th=new zc,bh=new od,wh=new Zc,ic=[],rc=[],ac=new Float32Array(16),nc=new Float32Array(9),sc=new Float32Array(4);Kg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rg(t.type)}},Zg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yg(t.type)}},Jg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Ls=/(\w+)(\])?(\[|\.)?/g;In=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);Qg(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};$g=37297,e0=0;cc=new Be;a0={[Mc]:"Linear",[yc]:"Reinhard",[Ec]:"Cineon",[Tc]:"ACESFilmic",[wc]:"AgX",[Ac]:"Neutral",[bc]:"Custom"};bn=new k;h0=/^[ \t]*#include +<([\w\d./]+)>/gm;d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;f0={[wn]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};g0={[Ca]:"ENVMAP_MODE_REFRACTION"};v0={[bo]:"ENVMAP_BLENDING_MULTIPLY",[Uu]:"ENVMAP_BLENDING_MIX",[Ou]:"ENVMAP_BLENDING_ADD"};M0=0,y0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new E0(e),t.set(e,i)),i}},E0=class{constructor(e){this.id=M0++,this.code=e,this.usedTimes=0}};L0=0;U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
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
}`,F0=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],B0=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],vc=new ut,Ta=new k,Ns=new k;k0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
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

}`,X0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Qc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new _r({vertexShader:k0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new ih(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},j0=class extends vr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,c=null,h=null,f=null,u=null,_=null,S=typeof XRWebGLBinding<"u",M=new X0,m={},d=t.getContextAttributes(),b=null,A=null,E=[],w=[],L=new Qe,p=null,y=null,C=new ci;C.viewport=new xt;let V=new ci;V.viewport=new xt;let U=[C,V],B=new Yd,Z=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=E[K];return le===void 0&&(le=new ms,E[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=E[K];return le===void 0&&(le=new ms,E[K]=le),le.getGripSpace()},this.getHand=function(K){let le=E[K];return le===void 0&&(le=new ms,E[K]=le),le.getHandSpace()};function W(K){let le=w.indexOf(K.inputSource);if(le===-1)return;let Ee=E[le];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,l||n),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function ie(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",G);for(let K=0;K<E.length;K++){let le=w[K];le!==null&&(w[K]=null,E[K].disconnect(le))}Z=null,I=null,M.reset();for(let K in m)delete m[K];if(e.setRenderTarget(b),u=null,f=null,h=null,r=null,A=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(p),e.setSize(L.width,L.height,!1),y!==null){let K=y.camera;K.fov=y.fov,K.zoom=y.zoom,K.updateProjectionMatrix(),y=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){s=K,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",G),d.xrCompatible!==!0&&await t.makeXRCompatible(),p=e.getPixelRatio(),e.getSize(L),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ee=null,Me=null;d.depth&&(Me=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=d.stencil?ir:ar,Ee=d.stencil?ta:wi);let Le={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};h=this.getBinding(),f=h.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new bi(f.textureWidth,f.textureHeight,{format:Ti,type:ri,depthTexture:new aa(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let le={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),A=new bi(u.framebufferWidth,u.framebufferHeight,{format:Ti,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(K){for(let le=0;le<K.removed.length;le++){let Ee=K.removed[le],Me=w.indexOf(Ee);Me>=0&&(w[Me]=null,E[Me].disconnect(Ee))}for(let le=0;le<K.added.length;le++){let Ee=K.added[le],Me=w.indexOf(Ee);if(Me===-1){for(let me=0;me<E.length;me++)if(me>=w.length){w.push(Ee),Me=me;break}else if(w[me]===null){w[me]=Ee,Me=me;break}if(Me===-1)break}let Le=E[Me];Le&&Le.connect(Ee)}}function de(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let le=K.near,Ee=K.far;M.texture!==null&&(M.depthNear>0&&(le=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),B.near=V.near=C.near=le,B.far=V.far=C.far=Ee,(Z!==B.near||I!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),Z=B.near,I=B.far),B.layers.mask=K.layers.mask|6,C.layers.mask=B.layers.mask&-5,V.layers.mask=B.layers.mask&-3;let Me=K.parent,Le=B.cameras;de(B,Me);for(let me=0;me<Le.length;me++)de(Le[me],Me);B.projectionMatrix.copy(C.projectionMatrix),B.projectionMatrixInverse.copy(C.projectionMatrixInverse),y===null&&K.isPerspectiveCamera&&(y={camera:K,fov:K.fov,zoom:K.zoom}),Q(K,B,Me)};function Q(K,le,Ee){Ee===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Mo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&u===null))return o},this.setFoveation=function(K){o=K,f!==null&&(f.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(B)},this.getCameraTexture=function(K){return m[K]};let $=null;function ce(K,le){if(c=le.getViewerPose(l||n),_=le,c!==null){let Ee=c.views;u!==null&&(e.setRenderTargetFramebuffer(A,u.framebuffer),e.setRenderTarget(A));let Me=!1;Ee.length!==B.cameras.length&&(B.cameras.length=0,Me=!0);for(let me=0;me<Ee.length;me++){let He=Ee[me],je=null;if(u!==null)je=u.getViewport(He);else{let ct=h.getViewSubImage(f,He);je=ct.viewport,me===0&&(e.setRenderTargetTextures(A,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(A))}let Ce=U[me];Ce===void 0&&(Ce=new ci,Ce.layers.enable(me),Ce.viewport=new xt,U[me]=Ce),Ce.matrix.fromArray(He.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(He.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(je.x,je.y,je.width,je.height),me===0&&(B.matrix.copy(Ce.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Me===!0&&B.cameras.push(Ce)}let Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();let me=h.getDepthInformation(Ee[0]);me&&me.isValid&&me.texture&&M.init(me,r.renderState)}if(Le&&Le.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let me=0;me<Ee.length;me++){let He=Ee[me].camera;if(He){let je=m[He];je||(je=new Qc,m[He]=je);let Ce=h.getCameraImage(He);je.sourceTexture=Ce}}}}for(let Ee=0;Ee<E.length;Ee++){let Me=w[Ee],Le=E[Ee];Me!==null&&Le!==void 0&&Le.update(Me,le,l||n)}$&&$(K,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}let Re=new gh;Re.setAnimationLoop(ce),this.setAnimationLoop=function(K){$=K},this.dispose=function(){}}},q0=new ut,Ah=new Be;Ah.set(-1,0,0,0,1,0,0,0,1);Z0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;Rh=class{constructor(e={}){let{canvas:t=Ku(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:u=ri}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=n;let S=u,M=new Set([No,Lo,Po]),m=new Set([ri,wi,Pa,ta,Ao,Ro]),d=new Uint32Array(4),b=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},E=null,w=null,L=[],p=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,V=!1,U=null,B=null,Z=null,I=null;this._outputColorSpace=li;let W=0,ie=0,G=null,de=-1,Q=null,$=new xt,ce=new xt,Re=null,K=new ze(0),le=0,Ee=t.width,Me=t.height,Le=1,me=null,He=null,je=new xt(0,0,Ee,Me),Ce=new xt(0,0,Ee,Me),ct=!1,St=new Na,Tt=new bd,ft=!1,Ct=!1,Ft=new ut,mt=new k,bt=new xt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function Qt(){return G===null?Le:1}let F=i;function $t(x,D){return t.getContext(x,D)}let $e,gt,te,Je,Ae,Ie,vt,T,v,z,ae,ee,ge,pe,O,re,ve,P,X,ne,oe,fe,ue;try{let x={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),F===null){let D="webgl2";if(F=$t(D,x),F===null)throw $t(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(x){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),Fe("WebGLRenderer: "+x.message),x}function we(){$e=new tg(F),$e.init(),oe=new V0(F,$e),gt=new Wm(F,$e,e,oe),te=new H0(F,$e),gt.reversedDepthBuffer&&f&&te.buffers.depth.setReversed(!0),B=F.createFramebuffer(),Z=F.createFramebuffer(),I=F.createFramebuffer(),Je=new ag(F),Ae=new w0,Ie=new G0(F,$e,te,Ae,gt,oe,Je),vt=new eg(C),T=new np(F),fe=new Vm(F,T),v=new ig(F,T,Je,fe),z=new sg(F,v,T,fe,Je),P=new ng(F,gt,Ie),O=new Xm(Ae),ae=new b0(C,vt,$e,gt,fe,O),ee=new Y0(C,Ae),ge=new R0,pe=new I0($e),ve=new Gm(C,vt,te,z,_,o),re=new z0(C,z,gt),ue=new K0(F,Je,gt,te),X=new km(F,$e,Je),ne=new rg(F,$e,Je),Je.programs=ae.programs,C.capabilities=gt,C.extensions=$e,C.properties=Ae,C.renderLists=ge,C.shadowMap=re,C.state=te,C.info=Je}S!==ri&&(y=new lg(S,t.width,t.height,s,r,a));let se=new j0(C,F);this.xr=se,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let x=$e.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=$e.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(x){x!==void 0&&(Le=x,this.setSize(Ee,Me,!1))},this.getSize=function(x){return x.set(Ee,Me)},this.setSize=function(x,D,q=!0){if(se.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=x,Me=D,t.width=Math.floor(x*Le),t.height=Math.floor(D*Le),q===!0&&(t.style.width=x+"px",t.style.height=D+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(Ee*Le,Me*Le).floor()},this.setDrawingBufferSize=function(x,D,q){Ee=x,Me=D,Le=q,t.width=Math.floor(x*q),t.height=Math.floor(D*q),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(S===ri){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy($)},this.getViewport=function(x){return x.copy(je)},this.setViewport=function(x,D,q,H){x.isVector4?je.set(x.x,x.y,x.z,x.w):je.set(x,D,q,H),te.viewport($.copy(je).multiplyScalar(Qt()).round())},this.getScissor=function(x){return x.copy(Ce)},this.setScissor=function(x,D,q,H){x.isVector4?Ce.set(x.x,x.y,x.z,x.w):Ce.set(x,D,q,H),te.scissor(ce.copy(Ce).multiplyScalar(Qt()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(x){te.setScissorTest(ct=x)},this.setOpaqueSort=function(x){me=x},this.setTransparentSort=function(x){He=x},this.getClearColor=function(x){return x.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,q=!0){let H=0;if(x){let g=!1;if(G!==null){let R=G.texture.format;g=M.has(R)}if(g){let R=G.texture.type,N=m.has(R),Y=ve.getClearColor(),J=ve.getClearAlpha(),he=Y.r,_e=Y.g,Pe=Y.b;N?(d[0]=he,d[1]=_e,d[2]=Pe,d[3]=J,F.clearBufferuiv(F.COLOR,0,d)):(b[0]=he,b[1]=_e,b[2]=Pe,b[3]=J,F.clearBufferiv(F.COLOR,0,b))}else H|=F.COLOR_BUFFER_BIT}D&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),U=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),ve.dispose(),ge.dispose(),pe.dispose(),Ie.dispose(),Ae.dispose(),vt.dispose(),z.dispose(),v.dispose(),fe.dispose(),ue.dispose(),ae.dispose(),se.dispose(),se.removeEventListener("sessionstart",hi),se.removeEventListener("sessionend",ni),xi.stop()};function Oe(x){x.preventDefault(),yl("WebGLRenderer: Context Lost."),V=!0}function Ne(){yl("WebGLRenderer: Context Restored."),V=!1;let x=Je.autoReset,D=re.enabled,q=re.autoUpdate,H=re.needsUpdate,g=re.type;we(),Je.autoReset=x,re.enabled=D,re.autoUpdate=q,re.needsUpdate=H,re.type=g}function Xe(x){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Te(x){let D=x.target;D.removeEventListener("dispose",Te),ot(D)}function ot(x){lt(x),Ae.remove(x)}function lt(x){let D=Ae.get(x).programs;D!==void 0&&(D.forEach(function(q){ae.releaseProgram(q)}),x.isShaderMaterial&&ae.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,q,H,g,R){D===null&&(D=Pt);let N=g.isMesh&&g.matrixWorld.determinantAffine()<0,Y=ui(x,D,q,H,g);te.setMaterial(H,N);let J=q.index,he=1;if(H.wireframe===!0){if(J=v.getWireframeAttribute(q),J===void 0)return;he=2}let _e=q.drawRange,Pe=q.attributes.position,Se=_e.start*he,Ge=(_e.start+_e.count)*he;R!==null&&(Se=Math.max(Se,R.start*he),Ge=Math.min(Ge,(R.start+R.count)*he)),J!==null?(Se=Math.max(Se,0),Ge=Math.min(Ge,J.count)):Pe!=null&&(Se=Math.max(Se,0),Ge=Math.min(Ge,Pe.count));let tt=Ge-Se;if(tt<0||tt===1/0)return;fe.setup(g,H,Y,q,J);let et,We=X;if(J!==null&&(et=T.get(J),We=ne,We.setIndex(et)),g.isMesh)H.wireframe===!0?(te.setLineWidth(H.wireframeLinewidth*Qt()),We.setMode(F.LINES)):We.setMode(F.TRIANGLES);else if(g.isLine){let Ve=H.linewidth;Ve===void 0&&(Ve=1),te.setLineWidth(Ve*Qt()),g.isLineSegments?We.setMode(F.LINES):g.isLineLoop?We.setMode(F.LINE_LOOP):We.setMode(F.LINE_STRIP)}else g.isPoints?We.setMode(F.POINTS):g.isSprite&&We.setMode(F.TRIANGLES);if(g.isBatchedMesh)if($e.get("WEBGL_multi_draw"))We.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else{let Ve=g._multiDrawStarts,j=g._multiDrawCounts,De=g._multiDrawCount,rt=J?T.get(J).bytesPerElement:1,Nt=Ae.get(H).currentProgram.getUniforms();for(let at=0;at<De;at++)Nt.setValue(F,"_gl_DrawID",at),We.render(Ve[at]/rt,j[at])}else if(g.isInstancedMesh)We.renderInstances(Se,tt,g.count);else if(q.isInstancedBufferGeometry){let Ve=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,j=Math.min(q.instanceCount,Ve);We.renderInstances(Se,tt,j)}else We.render(Se,tt)};function Ya(x,D,q,H){U!==null&&x.isNodeMaterial&&U.setObject(H,x),ft===!0&&O.setState(x,q,!1),x.transparent===!0&&x.side===Oi&&x.forceSinglePass===!1?(x.side=Zt,x.needsUpdate=!0,or(x,D,H),x.side=mr,x.needsUpdate=!0,or(x,D,H),x.side=Oi):or(x,D,H)}this.compile=function(x,D,q=null){q===null&&(q=x),U!==null&&U.renderStart(x,D,q),w=pe.get(q),w.init(D),p.push(w),q.traverseVisible(function(g){g.isLight&&g.layers.test(D.layers)&&(w.pushLight(g),g.castShadow&&w.pushShadow(g))}),x!==q&&x.traverseVisible(function(g){g.isLight&&g.layers.test(D.layers)&&(w.pushLight(g),g.castShadow&&w.pushShadow(g))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),Ct=this.localClippingEnabled,ft=O.init(this.clippingPlanes,Ct),ft===!0&&O.setGlobalState(this.clippingPlanes,D),U!==null&&re.render(w.state.shadowsArray,q,D);let H=new Set;return x.traverse(function(g){if(!(g.isMesh||g.isPoints||g.isLine||g.isSprite))return;let R=g.material;if(R)if(Array.isArray(R))for(let N=0;N<R.length;N++){let Y=R[N];Ya(Y,q,D,g),H.add(Y)}else Ya(R,q,D,g),H.add(R)}),w=p.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(x,D,q=null){let H=this.compile(x,D,q);return new Promise(g=>{function R(){if(H.forEach(function(N){let Y=Ae.get(N).currentProgram;(Y===void 0||Y.isReady())&&H.delete(N)}),H.size===0){g(x);return}setTimeout(R,10)}$e.get("KHR_parallel_shader_compile")!==null?R():setTimeout(R,10)})};let Er=null;function da(x){Er&&Er(x)}function hi(){xi.stop()}function ni(){xi.start()}let xi=new gh;xi.setAnimationLoop(da),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(x){Er=x,se.setAnimationLoop(x),x===null?xi.stop():xi.start()},se.addEventListener("sessionstart",hi),se.addEventListener("sessionend",ni),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;U!==null&&U.renderStart(x,D);let q=se.enabled===!0&&se.isPresenting===!0,H=y!==null&&(G===null||q)&&y.begin(C,G);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(D),D=se.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,D,G),w=pe.get(x,p.length),w.init(D),w.state.textureUnits=Ie.getTextureUnits(),p.push(w),Ft.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Tt.setFromArrayCamera(D):St.setFromProjectionMatrix(Ft,_i,D.reversedDepth),Ct=this.localClippingEnabled,ft=O.init(this.clippingPlanes,Ct),E=ge.get(x,L.length),E.init(),L.push(E),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let R=C.xr.getDepthSensingMesh();R!==null&&Tr(R,D,-1/0,C.sortObjects)}Tr(x,D,0,C.sortObjects),E.finish(),U!==null&&U.updateLights(w.state.lightsArray),C.sortObjects===!0&&E.sort(me,He),Ht=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ht&&ve.addToRenderList(E,x),this.info.autoReset===!0&&this.info.reset(),ft===!0&&O.beginShadows();let g=w.state.shadowsArray;if(re.render(g,x,D),ft===!0&&O.endShadows(),(H&&y.hasRenderPass())===!1){let R=E.opaque,N=E.transmissive;if(w.setupLights(),D.isArrayCamera){let Y=D.cameras;if(N.length>0)for(let J=0,he=Y.length;J<he;J++){let _e=Y[J];pa(R,N,x,_e)}Ht&&ve.render(x);for(let J=0,he=Y.length;J<he;J++){let _e=Y[J];br(E,x,_e,_e.viewport)}}else N.length>0&&pa(R,N,x,D),Ht&&ve.render(x),br(E,x,D)}G!==null&&ie===0&&(Ie.updateMultisampleRenderTarget(G),Ie.updateRenderTargetMipmap(G)),H&&y.end(C),x.isScene===!0&&x.onAfterRender(C,x,D),fe.resetDefaultState(),de=-1,Q=null,p.pop(),p.length>0?(w=p[p.length-1],Ie.setTextureUnits(w.state.textureUnits),ft===!0&&O.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,L.pop(),L.length>0?E=L[L.length-1]:E=null,U!==null&&U.renderEnd()};function Tr(x,D,q,H){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)q=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)w.pushLight(x),x.castShadow&&w.pushShadow(x);else if(x.isSprite){let R=D.isArrayCamera?Tt:St;if(!x.frustumCulled||x.intersectsFrustum(R)){H&&bt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ft);let N=z.update(x),Y=x.material;Y.visible&&E.push(x,N,Y,q,bt.z,null,D)}}else if(x.isMesh||x.isLine||x.isPoints){let R=D.isArrayCamera?Tt:St;if(!x.frustumCulled||x.intersectsFrustum(R)){let N=z.update(x),Y=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),bt.copy(x.boundingSphere.center)):(N.boundingSphere===null&&N.computeBoundingSphere(),bt.copy(N.boundingSphere.center)),bt.applyMatrix4(x.matrixWorld).applyMatrix4(Ft)),Array.isArray(Y)){let J=N.groups;for(let he=0,_e=J.length;he<_e;he++){let Pe=J[he],Se=Y[Pe.materialIndex];Se&&Se.visible&&E.push(x,N,Se,q,bt.z,Pe,D)}}else Y.visible&&E.push(x,N,Y,q,bt.z,null,D)}}}let g=x.children;for(let R=0,N=g.length;R<N;R++)Tr(g[R],D,q,H)}function br(x,D,q,H){let{opaque:g,transmissive:R,transparent:N}=x;w.setupLightsView(q),ft===!0&&O.setGlobalState(C.clippingPlanes,q),H&&te.viewport($.copy(H)),g.length>0&&wt(g,D,q),R.length>0&&wt(R,D,q),N.length>0&&wt(N,D,q),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function pa(x,D,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Pe=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new bi(1,1,{generateMipmaps:!0,type:Pe?Ai:ri,minFilter:tr,samples:Math.max(4,gt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let g=w.state.transmissionRenderTarget[H.id],R=H.viewport||$;g.setSize(R.z*C.transmissionResolutionScale,R.w*C.transmissionResolutionScale);let N=C.getRenderTarget(),Y=C.getActiveCubeFace(),J=C.getActiveMipmapLevel();C.setRenderTarget(g),C.getClearColor(K),le=C.getClearAlpha(),le<1&&C.setClearColor(16777215,.5),C.clear(),Ht&&ve.render(q);let he=C.toneMapping;C.toneMapping=Bi;let _e=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),ft===!0&&O.setGlobalState(C.clippingPlanes,H),wt(x,q,H),Ie.updateMultisampleRenderTarget(g),Ie.updateRenderTargetMipmap(g),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Se=0,Ge=D.length;Se<Ge;Se++){let tt=D[Se],{object:et,geometry:We,material:Ve,group:j}=tt;if(Ve.side===Oi&&et.layers.test(H.layers)){let De=Ve.side;Ve.side=Zt,Ve.needsUpdate=!0,Ka(et,q,H,We,Ve,j),Ve.side=De,Ve.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ie.updateMultisampleRenderTarget(g),Ie.updateRenderTargetMipmap(g))}C.setRenderTarget(N,Y,J),C.setClearColor(K,le),_e!==void 0&&(H.viewport=_e),C.toneMapping=he}function wt(x,D,q){let H=D.isScene===!0?D.overrideMaterial:null;for(let g=0,R=x.length;g<R;g++){let N=x[g],{object:Y,geometry:J,group:he}=N,_e=N.material;_e.allowOverride===!0&&H!==null&&(_e=H),Y.layers.test(q.layers)&&Ka(Y,D,q,J,_e,he)}}function Ka(x,D,q,H,g,R){U!==null&&g.isNodeMaterial&&U.setObject(x,g),x.onBeforeRender(C,D,q,H,g,R),x.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),g.onBeforeRender(C,D,q,H,x,R),g.transparent===!0&&g.side===Oi&&g.forceSinglePass===!1?(g.side=Zt,g.needsUpdate=!0,C.renderBufferDirect(q,D,H,g,x,R),g.side=mr,g.needsUpdate=!0,C.renderBufferDirect(q,D,H,g,x,R),g.side=Oi):C.renderBufferDirect(q,D,H,g,x,R),x.onAfterRender(C,D,q,H,g,R)}function Lt(x){let D=0;for(let q of x)q.texture!==null&&D++;return D}function or(x,D,q){D.isScene!==!0&&(D=Pt);let H=Ae.get(x),g=w.state.lights,R=w.state.shadowsArray,N=g.state.version,Y=ae.getParameters(x,g.state,R,D,q,w.state.lightProbeGridArray),J=ae.getProgramCacheKey(Y),he=H.programs;H.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;let _e=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;H.envMap=vt.get(x.envMap||H.environment,_e),H.envMapRotation=H.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,he===void 0&&(x.addEventListener("dispose",Te),he=new Map,H.programs=he,H.programVariants=new Map);let Pe=he.get(J);if(Pe!==void 0){if(H.currentProgram===Pe&&H.lightsStateVersion===N)return fa(x,Y),Pe}else Y.uniforms=ae.getUniforms(x),U!==null&&x.isNodeMaterial&&U.build(x,q,Y),x.onBeforeCompile(Y,C),Pe=ae.acquireProgram(Y,J),he.set(J,Pe),H.uniforms=Y.uniforms;let Se=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=O.uniform),fa(x,Y),H.needsLights=qi(x),H.lightsStateVersion=N,H.needsLights&&(Se.ambientLightColor.value=g.state.ambient,Se.lightProbe.value=g.state.probe,Se.sunLights.value=g.state.sun,Se.sunLightShadows.value=g.state.sunShadow,Se.directionalLights.value=g.state.directional,Se.directionalLightShadows.value=g.state.directionalShadow,Se.spotLights.value=g.state.spot,Se.spotLightShadows.value=g.state.spotShadow,Se.rectAreaLights.value=g.state.rectArea,Se.ltc_1.value=g.state.rectAreaLTC1,Se.ltc_2.value=g.state.rectAreaLTC2,Se.pointLights.value=g.state.point,Se.pointLightShadows.value=g.state.pointShadow,Se.hemisphereLights.value=g.state.hemi,Se.sunShadowMatrix.value=g.state.sunShadowMatrix,Se.sunShadowCascade.value=g.state.sunShadowCascade,Se.directionalShadowMatrix.value=g.state.directionalShadowMatrix,Se.spotLightMatrix.value=g.state.spotLightMatrix,Se.spotLightMap.value=g.state.spotLightMap,Se.pointShadowMatrix.value=g.state.pointShadowMatrix),H.numLightProbeGrids=Lt(w.state.lightProbeGridArray),H.currentProgram=Pe,H.uniformsList=null,Pe}function Za(x,D,q,H,g){let R=Ae.get(x),N=R.currentProgram.id+","+H+","+g,Y=R.programVariants.get(N);return Y===void 0?(Y=or(x,D,q),R.programVariants.set(N,Y)):(R.currentProgram=Y,R.uniformsList=null,R.outputColorSpace=H,R.toneMapping=g),Y}function ji(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=In.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function fa(x,D){let q=Ae.get(x);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function ui(x,D,q,H,g){D.isScene!==!0&&(D=Pt),Ie.resetTextureUnits();let R=D.fog,N=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,Y=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ke.workingColorSpace,J=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,he=vt.get(H.envMap||N,J),_e=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Pe=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Se=!!q.morphAttributes.position,Ge=!!q.morphAttributes.normal,tt=!!q.morphAttributes.color,et=Bi;H.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(et=C.toneMapping);let We=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ve=We!==void 0?We.length:0,j=Ae.get(H),De=w.state.lights;if(ft===!0&&(Ct===!0||x!==Q)){let nt=x===Q&&H.id===de;O.setState(H,x,nt)}let rt=!1,Nt=!1;H.version===j.__version?j.needsLights&&j.lightsStateVersion!==De.state.version||g.isBatchedMesh&&j.batching===!1||!g.isBatchedMesh&&j.batching===!0||g.isBatchedMesh&&j.batchingColor===!0&&g._colorsTexture===null||g.isBatchedMesh&&j.batchingColor===!1&&g._colorsTexture!==null||g.isInstancedMesh&&j.instancing===!1||!g.isInstancedMesh&&j.instancing===!0||g.isSkinnedMesh&&j.skinning===!1||!g.isSkinnedMesh&&j.skinning===!0||g.isInstancedMesh&&j.instancingColor===!0&&g.instanceColor===null||g.isInstancedMesh&&j.instancingColor===!1&&g.instanceColor!==null||g.isInstancedMesh&&j.instancingMorph===!0&&g.morphTexture===null||g.isInstancedMesh&&j.instancingMorph===!1&&g.morphTexture!==null||j.envMap!==he||H.fog===!0&&j.fog!==R||j.numClippingPlanes!==void 0&&(j.numClippingPlanes!==O.numPlanes||j.numIntersection!==O.numIntersection)||j.vertexAlphas!==_e||j.vertexTangents!==Pe||j.morphTargets!==Se||j.morphNormals!==Ge||j.morphColors!==tt||j.morphTargetsCount!==Ve||j.numLightProbeGrids!==Lt(w.state.lightProbeGridArray)?rt=!0:(j.outputColorSpace!==Y||j.toneMapping!==et)&&(Nt=!0):(rt=!0,j.__version=H.version);let at=j.currentProgram;(rt===!0||Nt===!0)&&(at=Nt===!0?Za(H,D,g,Y,et):or(H,D,g),U&&H.isNodeMaterial&&U.onUpdateProgram(H,at,j));let Yt=!1,Gt=!1,Pi=!1,qe=at.getUniforms(),Mt=j.uniforms;if(te.useProgram(at.program)&&(Yt=!0,Gt=!0,Pi=!0),H.id!==de&&(de=H.id,Gt=!0),Yt||Q!==x){te.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),qe.setValue(F,"projectionMatrix",x.projectionMatrix),qe.setValue(F,"viewMatrix",x.matrixWorldInverse);let nt=qe.map.cameraPosition;nt!==void 0&&nt.setValue(F,mt.setFromMatrixPosition(x.matrixWorld)),gt.logarithmicDepthBuffer&&qe.setValue(F,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&qe.setValue(F,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,Gt=!0,Pi=!0)}if(j.needsLights&&(De.state.sunShadowMap.length>0&&qe.setValue(F,"sunShadowMap",De.state.sunShadowMap,Ie),De.state.directionalShadowMap.length>0&&qe.setValue(F,"directionalShadowMap",De.state.directionalShadowMap,Ie),De.state.spotShadowMap.length>0&&qe.setValue(F,"spotShadowMap",De.state.spotShadowMap,Ie),De.state.pointShadowMap.length>0&&qe.setValue(F,"pointShadowMap",De.state.pointShadowMap,Ie)),g.isSkinnedMesh){qe.setOptional(F,g,"bindMatrix"),qe.setOptional(F,g,"bindMatrixInverse");let nt=g.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),qe.setValue(F,"boneTexture",nt.boneTexture,Ie))}g.isBatchedMesh&&(qe.setOptional(F,g,"batchingTexture"),qe.setValue(F,"batchingTexture",g._matricesTexture,Ie),qe.setOptional(F,g,"batchingIdTexture"),qe.setValue(F,"batchingIdTexture",g._indirectTexture,Ie),qe.setOptional(F,g,"batchingColorTexture"),g._colorsTexture!==null&&qe.setValue(F,"batchingColorTexture",g._colorsTexture,Ie));let ei=q.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&P.update(g,q,at),(Gt||j.receiveShadow!==g.receiveShadow)&&(j.receiveShadow=g.receiveShadow,qe.setValue(F,"receiveShadow",g.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(Mt.envMapIntensity.value=D.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=J0()),Gt){if(qe.setValue(F,"toneMappingExposure",C.toneMappingExposure),j.needsLights&&Si(Mt,Pi),R&&H.fog===!0&&ee.refreshFogUniforms(Mt,R),ee.refreshMaterialUniforms(Mt,H,Le,Me,w.state.transmissionRenderTarget[x.id]),j.needsLights&&j.numLightProbeGrids>0){let nt=A,Dt=0;for(let si of w.state.lightProbeGridArray)si.texture!==null&&(nt.textures[Dt]=si.texture,nt.min[Dt]=si.boundingBox.min,nt.max[Dt]=si.boundingBox.max,nt.resolution[Dt]=si.resolution,Dt++);for(let si in nt)nt[si].length=Dt;Mt.probesSH.value=nt.textures,Mt.probesMin.value=nt.min,Mt.probesMax.value=nt.max,Mt.probesResolution.value=nt.resolution}In.upload(F,ji(j),Mt,Ie)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(In.upload(F,ji(j),Mt,Ie),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&qe.setValue(F,"center",g.center),qe.setValue(F,"modelViewMatrix",g.modelViewMatrix),qe.setValue(F,"normalMatrix",g.normalMatrix),qe.setValue(F,"modelMatrix",g.matrixWorld),H.uniformsGroups!==void 0){let nt=H.uniformsGroups;for(let Dt=0,si=nt.length;Dt<si;Dt++){let $o=nt[Dt];ue.update($o,at),ue.bind($o,at)}}return at}function Si(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.sunLights.needsUpdate=D,x.sunLightShadows.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function qi(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(x,D,q){let H=Ae.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ae.get(x.texture).__webglTexture=D,Ae.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){let q=Ae.get(x);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,q=0){G=x,W=D,ie=q;let H=null,g=!1,R=!1;if(x){let N=Ae.get(x);if(N.__useDefaultFramebuffer!==void 0){te.bindFramebuffer(F.FRAMEBUFFER,N.__webglFramebuffer),$.copy(x.viewport),ce.copy(x.scissor),Re=x.scissorTest,te.viewport($),te.scissor(ce),te.setScissorTest(Re),de=-1;return}else if(N.__webglFramebuffer===void 0)Ie.setupRenderTarget(x);else if(N.__hasExternalTextures)Ie.rebindTextures(x,Ae.get(x.texture).__webglTexture,Ae.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let he=x.depthTexture;if(N.__boundDepthTexture!==he){if(he!==null&&Ae.has(he)&&(x.width!==he.image.width||x.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(x)}}let Y=x.texture;(Y.isData3DTexture||Y.isDataArrayTexture||Y.isCompressedArrayTexture)&&(R=!0);let J=Ae.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(J[D])?H=J[D][q]:H=J[D],g=!0):x.samples>0&&Ie.useMultisampledRTT(x)===!1?H=Ae.get(x).__webglMultisampledFramebuffer:Array.isArray(J)?H=J[q]:H=J,$.copy(x.viewport),ce.copy(x.scissor),Re=x.scissorTest}else $.copy(je).multiplyScalar(Le).floor(),ce.copy(Ce).multiplyScalar(Le).floor(),Re=ct;if(q!==0&&(H=B),te.bindFramebuffer(F.FRAMEBUFFER,H)&&te.drawBuffers(x,H),te.viewport($),te.scissor(ce),te.setScissorTest(Re),g){let N=Ae.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,N.__webglTexture,q)}else if(R){let N=D;for(let Y=0;Y<x.textures.length;Y++){let J=Ae.get(x.textures[Y]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Y,J.__webglTexture,q,N)}}else if(x!==null&&q!==0){let N=Ae.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,N.__webglTexture,q)}de=-1};function wr(x){let D=Ae.get(x);return(D.__readFormat!==x.format||D.__readType!==x.type)&&(D.__readFormat=x.format,D.__readType=x.type,D.__formatReadable=gt.textureFormatReadable(x.format),D.__typeReadable=gt.textureTypeReadable(x.type)),D}this.readRenderTargetPixels=function(x,D,q,H,g,R,N,Y=0){if(!(x&&x.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let J=Ae.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&N!==void 0&&(J=J[N],Array.isArray(J)&&(J=J[0])),J){te.bindFramebuffer(F.FRAMEBUFFER,J);try{let he=x.textures[Y],_e=he.format,Pe=he.type;x.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Y);let Se=wr(he);if(Se.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-H&&q>=0&&q<=x.height-g&&F.readPixels(D,q,H,g,oe.convert(_e),oe.convert(Pe),R)}finally{let he=G!==null?Ae.get(G).__webglFramebuffer:null;te.bindFramebuffer(F.FRAMEBUFFER,he)}}},this.readRenderTargetPixelsAsync=async function(x,D,q,H,g,R,N,Y=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let J=Ae.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&N!==void 0&&(J=J[N],Array.isArray(J)&&(J=J[0])),J)if(D>=0&&D<=x.width-H&&q>=0&&q<=x.height-g){te.bindFramebuffer(F.FRAMEBUFFER,J);let he=x.textures[Y],_e=he.format,Pe=he.type;x.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Y);let Se=wr(he);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ge=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ge),F.bufferData(F.PIXEL_PACK_BUFFER,R.byteLength,F.STREAM_READ),F.readPixels(D,q,H,g,oe.convert(_e),oe.convert(Pe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let tt=G!==null?Ae.get(G).__webglFramebuffer:null;te.bindFramebuffer(F.FRAMEBUFFER,tt);let et=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Zu(F,et,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ge),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,R),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ge),F.deleteSync(et),R}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,q=0){let H=Math.pow(2,-q),g=Math.floor(x.image.width*H),R=Math.floor(x.image.height*H),N=D!==null?D.x:0,Y=D!==null?D.y:0;Ie.setTexture2D(x,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,N,Y,g,R),te.unbindTexture()},this.copyTextureToTexture=function(x,D,q=null,H=null,g=0,R=0){let N,Y,J,he,_e,Pe,Se,Ge,tt,et=x.isCompressedTexture?x.mipmaps[R]:x.image;if(q!==null)N=q.max.x-q.min.x,Y=q.max.y-q.min.y,J=q.isBox3?q.max.z-q.min.z:1,he=q.min.x,_e=q.min.y,Pe=q.isBox3?q.min.z:0;else{let qe=Math.pow(2,-g);N=Math.floor(et.width*qe),Y=Math.floor(et.height*qe),x.isDataArrayTexture?J=et.depth:x.isData3DTexture?J=Math.floor(et.depth*qe):J=1,he=0,_e=0,Pe=0}H!==null?(Se=H.x,Ge=H.y,tt=H.z):(Se=0,Ge=0,tt=0);let We=oe.convert(D.format),Ve=oe.convert(D.type),j;D.isData3DTexture?(Ie.setTexture3D(D,0),j=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ie.setTexture2DArray(D,0),j=F.TEXTURE_2D_ARRAY):(Ie.setTexture2D(D,0),j=F.TEXTURE_2D),te.activeTexture(F.TEXTURE0),te.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),te.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),te.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);let De=te.getParameter(F.UNPACK_ROW_LENGTH),rt=te.getParameter(F.UNPACK_IMAGE_HEIGHT),Nt=te.getParameter(F.UNPACK_SKIP_PIXELS),at=te.getParameter(F.UNPACK_SKIP_ROWS),Yt=te.getParameter(F.UNPACK_SKIP_IMAGES);te.pixelStorei(F.UNPACK_ROW_LENGTH,et.width),te.pixelStorei(F.UNPACK_IMAGE_HEIGHT,et.height),te.pixelStorei(F.UNPACK_SKIP_PIXELS,he),te.pixelStorei(F.UNPACK_SKIP_ROWS,_e),te.pixelStorei(F.UNPACK_SKIP_IMAGES,Pe);let Gt=x.isDataArrayTexture||x.isData3DTexture,Pi=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){let qe=Ae.get(x),Mt=Ae.get(D),ei=Ae.get(qe.__renderTarget),nt=Ae.get(Mt.__renderTarget);te.bindFramebuffer(F.READ_FRAMEBUFFER,ei.__webglFramebuffer),te.bindFramebuffer(F.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let Dt=0;Dt<J;Dt++)Gt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.get(x).__webglTexture,g,Pe+Dt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.get(D).__webglTexture,R,tt+Dt)),F.blitFramebuffer(he,_e,he+N,_e+Y,Se,Ge,Se+N,Ge+Y,F.DEPTH_BUFFER_BIT,F.NEAREST);te.bindFramebuffer(F.READ_FRAMEBUFFER,null),te.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(g!==0||x.isRenderTargetTexture||Ae.has(x)){let qe=Ae.get(x),Mt=Ae.get(D);te.bindFramebuffer(F.READ_FRAMEBUFFER,Z),te.bindFramebuffer(F.DRAW_FRAMEBUFFER,I);for(let ei=0;ei<J;ei++)Gt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qe.__webglTexture,g,Pe+ei):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qe.__webglTexture,g),Pi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.__webglTexture,R,tt+ei):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mt.__webglTexture,R),g!==0?F.blitFramebuffer(he,_e,he+N,_e+Y,Se,Ge,Se+N,Ge+Y,F.COLOR_BUFFER_BIT,F.NEAREST):Pi?F.copyTexSubImage3D(j,R,Se,Ge,tt+ei,he,_e,N,Y):F.copyTexSubImage2D(j,R,Se,Ge,he,_e,N,Y);te.bindFramebuffer(F.READ_FRAMEBUFFER,null),te.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Pi?x.isDataTexture||x.isData3DTexture?F.texSubImage3D(j,R,Se,Ge,tt,N,Y,J,We,Ve,et.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(j,R,Se,Ge,tt,N,Y,J,We,et.data):F.texSubImage3D(j,R,Se,Ge,tt,N,Y,J,We,Ve,et):x.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,R,Se,Ge,N,Y,We,Ve,et.data):x.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,R,Se,Ge,et.width,et.height,We,et.data):F.texSubImage2D(F.TEXTURE_2D,R,Se,Ge,N,Y,We,Ve,et);te.pixelStorei(F.UNPACK_ROW_LENGTH,De),te.pixelStorei(F.UNPACK_IMAGE_HEIGHT,rt),te.pixelStorei(F.UNPACK_SKIP_PIXELS,Nt),te.pixelStorei(F.UNPACK_SKIP_ROWS,at),te.pixelStorei(F.UNPACK_SKIP_IMAGES,Yt),R===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&F.generateMipmap(j),te.unbindTexture()},this.initRenderTarget=function(x){Ae.get(x).__webglFramebuffer===void 0&&Ie.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ie.setTextureCube(x,0):x.isData3DTexture?Ie.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ie.setTexture2DArray(x,0):Ie.setTexture2D(x,0),te.unbindTexture()},this.resetState=function(){W=0,ie=0,G=null,te.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}});var oa,Ph,Go,qt,Lh,Nh,Dh=ma(()=>{oa={lobby:{floor:0,x0:-8,x1:2,z0:-2.4,z1:5},shop:{floor:0,x0:2,x1:8,z0:-2.4,z1:1.2},kids:{floor:0,x0:2,x1:8,z0:1.2,z1:5},life:{floor:1,x0:-8,x1:0,z0:-2.4,z1:5},pottery:{floor:1,x0:0,x1:8,z0:-2.4,z1:1.4},media:{floor:1,x0:0,x1:8,z0:1.4,z1:5},paintings:{floor:2,x0:-8,x1:.5,z0:-2.4,z1:5},special:{floor:2,x0:.5,x1:8,z0:-2.4,z1:5},garden:{floor:3,x0:-8,x1:1.5,z0:-2.4,z1:5},cafe:{floor:3,x0:1.5,x1:8,z0:-2.4,z1:5}},Ph=[[[-8,-2.4,-7.6,-2.4],[-5.8,-2.4,-1.4,-2.4],[1.4,-2.4,2.6,-2.4],[4,-2.4,5.4,-2.4],[2,-2.4,2,2.4],[2,3.8,2,5],[2,1.2,8,1.2]],[[-8,-2.4,-3.6,-2.4],[-2.2,-2.4,1.6,-2.4],[3,-2.4,5.4,-2.4],[0,-2.4,0,5],[0,1.4,3.4,1.4],[4.8,1.4,8,1.4]],[[-8,-2.4,-4,-2.4],[-2.6,-2.4,2.2,-2.4],[3.6,-2.4,5.4,-2.4],[.5,-2.4,.5,5]],[[-8,-2.4,-5,-2.4],[-1.6,-2.4,3.2,-2.4],[4.6,-2.4,8,-2.4],[1.5,-2.4,1.5,1.2],[1.5,2.6,1.5,5]]],Go=[0,1,2],qt={stairs:{x0:-8,x1:-5.4,z0:-5,z1:-2.4},elevator:{x0:-.9,x1:.9,z0:-4.95,z1:-3.3},restroom:{x0:5.4,x1:8,z0:-5,z1:-2.4,doorZ0:-4.3,doorZ1:-3.1},entrance:{x0:-4,x1:-2},here:[-3,5.9],desk:[-6,2.6]},Lh={stairs:[-6.7,1.9,-3.2],elevator:[0,1.9,-2.9],restroom:[6.7,1.9,-3.7],info:[qt.desk[0],1.6,qt.desk[1]]},Nh=[[[[-6,1],[-3,3.4],[0,2.6],[-1.5,-.6],[-5,-.9]],[[3.2,-1.4],[6.6,-1.2],[6.6,.3],[3.6,.4]],[[3.4,2.4],[6.6,2.6],[6.2,4.2],[3.6,4.2]]],[[[-6.8,-1.2],[-1.4,-1],[-1.6,3.8],[-6.6,3.8]],[[1.2,-1.4],[6.8,-.6],[5.6,.8],[1.6,.6]],[[2.2,3.6],[5.2,3],[3.4,4.2]]],[[[-7,-1.2],[-.6,-1.4],[-.8,3.8],[-6.8,4]],[[1.6,-1.4],[6.8,-1.4],[6.8,4],[1.8,3.6]]],[[[-6.6,-1.2],[.2,-.8],[0,3.8],[-6.4,4]],[[2.6,-1],[6.8,-.6],[6.6,3.6],[2.8,3.8]]]]});var Bh={};uu(Bh,{createScene:()=>c_});function Ga(){let e=[],t=[],i=new Wt,r=new ze,a=new ze;return{add(n,{x:s=0,y:o=0,z:l=0,ry:c=0,sx:h=1,sy:f=1,sz:u=1},_,S){i.position.set(s,o,l),i.rotation.set(0,c,0),i.scale.set(h,f,u),i.updateMatrix();let M=(n.index?n.toNonIndexed():n.clone()).applyMatrix4(i.matrix);M.computeVertexNormals();let m=M.attributes.position,d=M.attributes.normal;r.set(_),S!==void 0&&a.set(S);for(let b=0;b<m.count;b+=1){e.push(m.getX(b),m.getY(b),m.getZ(b));let A=S!==void 0&&d.getY(b)>.7?a:r;t.push(A.r,A.g,A.b)}M.dispose()},box(n,s,o,l,c,h,f,u,_=0){this.add(Xo,{x:n,y:s,z:o,sx:l,sy:c,sz:h,ry:_},f,u)},get empty(){return e.length===0},build(){let n=new Hi;return n.setAttribute("position",new Ut(e,3)),n.setAttribute("color",new Ut(t,3)),n.computeVertexNormals(),n}}}function i_(e,t){let i=e.map((a,n)=>{let s=e[(n+1)%e.length];return{from:a,to:s,time:Math.hypot(s[0]-a[0],s[1]-a[1])/di.visitorSpeed}}),r=i.reduce((a,n)=>a+n.time+di.visitorDwell,0);return(a,n)=>{let s=((a+t)%r+r)%r;for(let o of i){if(s<di.visitorDwell)return n[0]=o.from[0],n[1]=o.from[1],n;if(s-=di.visitorDwell,s<o.time){let l=Uh(s/o.time);return n[0]=Gi(o.from[0],o.to[0],l),n[1]=Gi(o.from[1],o.to[1],l),n}s-=o.time}return n[0]=e[0][0],n[1]=e[0][1],n}}function r_(e,t){let i=Ye.wallLow,r=st;e.box(0,0,-Mr+Ot/2,Ye.width,i,Ot,r.wall,r.wallTop),e.box(-Vi+Ot/2,0,0,Ot,i,Ye.depth,r.wall,r.wallTop),e.box(Vi-Ot/2,0,0,Ot,i,Ye.depth,r.wall,r.wallTop);let a=Mr-Ot/2;if(t===0){let{x0:n,x1:s}=qt.entrance;e.box((-Vi+n)/2,0,a,n+Vi,i,Ot,r.wall,r.wallTop),e.box((s+Vi)/2,0,a,Vi-s,i,Ot,r.wall,r.wallTop)}else e.box(0,0,a,Ye.width,i,Ot,r.wall,r.wallTop)}function a_(){let e=Ga(),t=st,i=Ye.wallFull-Ye.wallLow;return[[0,.3,t.wall],[.3,i-.3,t.glass],[i-.3,i,t.wall]].forEach(([a,n,s])=>{let o=n-a;e.box(0,a,-Mr+Ot/2,Ye.width,o,Ot,s,t.wallTop),e.box(0,a,Mr-Ot/2,Ye.width,o,Ot,s,t.wallTop),e.box(-Vi+Ot/2,a,0,Ot,o,Ye.depth,s,t.wallTop),e.box(Vi-Ot/2,a,0,Ot,o,Ye.depth,s,t.wallTop)}),e.build()}function n_(e,t){let i=Ye.wallLow;Ph[t].forEach(([r,a,n,s])=>{let o=(r+n)/2,l=(a+s)/2,c=Math.abs(n-r)||Va,h=Math.abs(s-a)||Va;e.box(o,0,l,c,i,h,st.partition,st.wallTop)})}function s_(e,t){let i=st;e.box(0,0,(-Mr+Ye.coreZ)/2,Ye.width-.1,.025,Mr+Ye.coreZ-.05,i.hall);let r=qt.stairs;for(let a=0;a<5;a+=1)e.box((r.x0+r.x1)/2+.05,0,r.z1-.35-a*.45,r.x1-r.x0-.3,.3*(a+1),.45,i.stairs);if(e.box(0,0,qt.elevator.z1+.35,1.8,.04,.6,i.door),Go.includes(t)){let a=qt.restroom;e.box((a.x0+a.x1)/2+.05,0,(a.z0+a.z1)/2,a.x1-a.x0-.1,.03,a.z1-a.z0-.1,i.restroom);let n=Ye.wallLow;e.box(a.x0,0,(a.z0+a.doorZ0)/2,Va,n,a.doorZ0-a.z0,i.partition,i.wallTop),e.box(a.x0,0,(a.doorZ1+a.z1)/2,Va,n,a.z1-a.doorZ1,i.partition,i.wallTop),e.box((a.x0+a.x1)/2,0,a.z1,a.x1-a.x0,n,Va,i.partition,i.wallTop),e.box(a.x1-.5,0,-3.7,.4,.6,1.2,i.plinth)}}function Wo(e,t,i,r,a){e.box(t,0,i,r,.55,a,st.plinth),e.box(t,.55,i,r*.92,.5,a*.92,st.caseGlass)}function kn(e,t,i,r=1){e.add(la,{x:t,z:i,sx:.1*r,sy:.7*r,sz:.1*r},st.trunk),e.add(Fh,{x:t,y:.5*r,z:i,sx:.62*r,sy:1.7*r,sz:.62*r},st.leaf)}function o_(e,t,i,r,a){e.add(Wn,{x:t,y:i+.24,z:r,sx:.2,sy:.24,sz:.2},a),e.add(la,{x:t,y:i+.4,z:r,sx:.09,sy:.14,sz:.09},a)}function l_(e,t){let i=st;if(t===0){let[r,a]=qt.desk;e.box(r,0,a,2.2,.8,.7,i.wood,i.ink),e.box(-4.4,0,0,1,.5,1,i.plinth),e.add(Fh,{x:-4.4,y:.5,z:0,sx:.36,sy:1.1,sz:.36},i.ink),e.box(-.8,0,1.6,2,.35,.5,i.wood),e.box(-.8,0,-.6,2,.35,.5,i.wood);let[n,s]=qt.here,o=-.32;e.add(ko,{x:n,y:o,z:s,sx:.55,sy:.04,sz:.55},i.here),e.add(la,{x:n,y:o,z:s,sx:.06,sy:1,sz:.06},i.here),e.add(Wn,{x:n,y:o+1.05,z:s,sx:.16,sy:.16,sz:.16},i.here),e.box(7.55,0,-.6,.45,1.1,2.6,i.wood),e.box(6,0,-1.95,2.2,1.1,.45,i.wood),e.box(4.4,0,-.5,1.4,.8,.8,i.plinth),e.box(3,0,.55,1.2,.8,.6,i.ink),e.add(ko,{x:5.2,z:3.2,sx:.8,sy:.4,sz:.8},i.wood),e.box(3.4,0,3.6,1.6,.03,1.4,i.blocks[1]),[[3,0,3.2,0],[3.5,0,3,1],[3.2,.35,3.1,2],[3.9,0,3.9,3]].forEach(([l,c,h,f])=>e.box(l,c,h,.35,.35,.35,i.blocks[f])),e.box(7.55,0,3.2,.45,.6,2.4,i.plinth)}else t===1?([-1.2,.8,2.8].forEach(r=>Wo(e,-7.35,r,.8,1.6)),Wo(e,-5,-1.85,2.2,.6),e.box(-4,0,1.8,1.8,.5,1.4,i.plinth),e.box(-4,.5,1.8,1,.45,.7,i.wood),e.add(t_,{x:-4,y:.95,z:1.8,sx:.8,sy:.5,sz:.6},i.pot[2]),[[1.6,-1.4,0],[3.4,-1.4,1],[5.2,-1.4,2],[3,.3,3],[5,.3,0]].forEach(([r,a,n])=>{e.add(la,{x:r,z:a,sx:.3,sy:.7,sz:.3},i.plinth),o_(e,r,.7,a,i.pot[n])}),Wo(e,7.35,-.5,.8,2.6),e.box(7.7,.1,3.2,.12,1.3,2.8,i.screen),[2.4,3.8,5.2].forEach(r=>e.box(r,0,3.2,.5,.35,2.4,i.wood))):t===2?(e.box(-7.45,0,1.3,.12,1.5,5,i.wall,i.wallTop),[-.4,1.3,3].forEach((r,a)=>e.box(-7.37,.5,r,.04,.75,1,i.art[a])),e.box(-4,0,4.5,5.6,1.5,.12,i.wall,i.wallTop),[-6,-4,-2].forEach((r,a)=>e.box(r,.5,4.42,1,.75,.04,i.art[(a+1)%4])),e.box(-4,0,1.2,2.4,.4,.6,i.wood),e.box(2.8,0,.6,.12,1.4,2.6,i.wall,i.wallTop,.5),e.box(5.2,0,2.8,.12,1.4,2.6,i.wall,i.wallTop,-.5),[[6.6,-1.3,0],[3.6,3.8,1],[6.8,4,2]].forEach(([r,a,n])=>{e.box(r,0,a,.8,.8,.8,i.plinth),e.add(Wn,{x:r,y:1.05,z:a,sx:.28,sy:.28,sz:.28},i.art[n])})):(kn(e,-6.6,-.8,1),kn(e,-6.3,3.4,1.1),kn(e,-.4,-1.1,.9),kn(e,-1,3.8,1),e.box(-3.6,0,-1.4,2.6,.4,.7,i.plinth),e.box(-3.6,.4,-1.4,2.3,.25,.45,i.leaf),e.box(-3.6,0,1.6,1.8,.35,.5,i.wood),e.box(6.4,0,-1.7,2.6,.9,.7,i.wood,i.ink),[[3,.6],[5,.6],[3,2.8],[5,2.8],[6.9,2.8]].forEach(([r,a])=>{e.add(ko,{x:r,z:a,sx:.42,sy:.7,sz:.42},i.plinth),e.box(r-.6,0,a,.35,.45,.35,i.wood),e.box(r+.6,0,a,.35,.45,.35,i.wood)}))}async function c_(e){let{container:t,labelLayer:i,floors:r,rooms:a,hereLabel:n,canvasLabel:s,getFreeRect:o,durations:l,onSelectFloor:c=()=>{},onSelectRoom:h=()=>{},onInteract:f=()=>{},onZoomLimits:u=()=>{},onContextLost:_=()=>{},onContextRestored:S=()=>{}}=e,M=!!e.poster,m=window.matchMedia(`(min-width: ${ga.wide}px)`),d=()=>m.matches,b=e.quality||(d()?"high":"low"),A=e.motion!==!1,E=!!e.reduced,w="exploded",L=e.facilities!==!1,p=null,y=null,C=document.createElement("canvas");C.className="scene__canvas",C.setAttribute("role","img"),C.setAttribute("aria-label",s(w)),t.prepend(C);let V=new Rh({canvas:C,antialias:!0,powerPreference:"high-performance"}),U=new Vc,B=new ze(st.bg);U.background=B;let Z=new ci(ht.fov,1,.5,400);U.add(new uh(lr.hemiSky,lr.hemiGround,lr.hemi));let I=new fh(lr.key,lr.keyIntensity);I.position.set(...lr.keyPosition),U.add(I);let W=g=>new oh({flatShading:!0,...g}),ie=[],G=g=>(ie.push(g),g),de=Ga();de.box(0,-.52,1.2,21,.2,15,st.plaza),de.box(qt.here[0],-.32,7,2.2,.02,3.4,st.plazaPath);let Q=new zt(de.build(),G(W({vertexColors:!0})));U.add(Q);let $=(()=>{let g=Ga();g.add(la,{sx:.16,sy:.56,sz:.16},st.instanceBase),g.add(Wn,{y:.72,sx:.14,sy:.14,sz:.14},st.instanceBase);let R=g.build();return R.deleteAttribute("color"),R})(),ce=a_(),Re=new Wt,K=r.map((g,R)=>{let N=new pr;U.add(N);let Y=Ga();Y.box(0,-Ye.slab,0,Ye.width,Ye.slab,Ye.depth,st.slabSide,st.slabTop),r_(Y,R),n_(Y,R),s_(Y,R),l_(Y,R);let J=G(W({vertexColors:!0})),he=new zt(Y.build(),J);N.add(he);let _e=null;R<Ye.floors-1&&(_e=new zt(ce,J),_e.position.y=Ye.wallLow,_e.scale.y=.001,_e.visible=!1,N.add(_e));let Pe=Object.entries(oa).filter(([,We])=>We.floor===R).map(([We,Ve])=>{let j=new ze(st.room[We]),De=G(W({color:j.clone()})),rt=new zt(Xo,De);return rt.scale.set(Ve.x1-Ve.x0-.06,.03,Ve.z1-Ve.z0-.06),rt.position.set((Ve.x0+Ve.x1)/2,0,(Ve.z0+Ve.z1)/2),N.add(rt),{id:We,mesh:rt,mat:De,base:j}}),Se=G(W({color:st.instanceBase})),Ge=Nh[R],tt=new Yc($,Se,Ge.length);Ge.forEach((We,Ve)=>tt.setColorAt(Ve,new ze(st.visitors[(R*3+Ve)%st.visitors.length]))),tt.frustumCulled=!1,N.add(tt);let et=Ge.map((We,Ve)=>i_(We,Ve*7.3+R*3.1));return{index:R,id:g.id,group:N,body:he,upper:_e,material:J,rooms:Pe,visitors:tt,visitorMat:Se,walkers:et,y:0,fade:0,wall:0}}),le=G(W({color:st.accent})),Ee=new pr;for(let g=0;g<4;g+=1)Ee.add(new zt(Xo,le));Ee.visible=!1;let Me=qt.elevator,Le=G(W({color:st.shaft})),me=[[Me.x0,Me.z0],[Me.x1,Me.z0],[Me.x0,Me.z1],[Me.x1,Me.z1]].map(([g,R])=>{let N=new zt(la,Le);return N.position.set(g,-Ye.slab,R),N.scale.set(.06,1,.06),U.add(N),N}),He=(()=>{let g=Ga();return g.box(0,.02,0,Me.x1-Me.x0-.3,1.7,Me.z1-Me.z0-.25,st.car),g.box(0,.15,(Me.z1-Me.z0)/2-.12,.9,1.4,.04,st.carFront),g.build()})(),je=new zt(He,G(W({vertexColors:!0})));je.position.set((Me.x0+Me.x1)/2,0,(Me.z0+Me.z1)/2),U.add(je);let Ce=(g,R=w,N=p)=>({y:g*Ye.gap[R]+(N!==null&&g>N?Ye.lift[R]:0),fade:N!==null&&g!==N?1:0,wall:R==="stacked"&&(N===null||g!==N)?1:0}),ct=null,St=new ze;function Tt(g){g.group.position.y=g.y;let R=el*g.fade;St.copy(B).multiplyScalar(R),g.material.color.setScalar(1-R),g.material.emissive.copy(St),g.visitorMat.color.setScalar(1-R),g.visitorMat.emissive.copy(St),g.rooms.forEach(N=>{let Y=N.id===y?ft:N.base;N.mat.color.copy(Y).multiplyScalar(1-R),N.mat.emissive.copy(St)}),g.upper&&(g.upper.scale.y=Math.max(.001,g.wall),g.upper.visible=g.wall>.01)}let ft=new ze(st.roomSelected);function Ct(){K.forEach(Tt);let g=K[K.length-1].y+1.8;me.forEach(R=>{R.scale.y=g+Ye.slab})}function Ft(g){let R=K.map(N=>Ce(N.index));if(!g||E||!A){ct=null,K.forEach((N,Y)=>Object.assign(N,R[Y])),Ct(),Lt();return}ct={from:K.map(N=>({y:N.y,fade:N.fade,wall:N.wall})),to:R,start:performance.now(),duration:l.floorShift},Lt()}function mt(g){if(!ct)return;let{from:R,to:N,start:Y,duration:J}=ct,he=Ih(Ci((g-Y)/J,0,1));K.forEach((_e,Pe)=>{_e.y=Gi(R[Pe].y,N[Pe].y,he),_e.fade=Gi(R[Pe].fade,N[Pe].fade,he),_e.wall=Gi(R[Pe].wall,N[Pe].wall,he)}),Ct(),he>=1&&(ct=null)}function bt(){let g=y?oa[y]:null;if(Ee.visible=!!g,!g)return;K[g.floor].group.add(Ee);let R=.1,N=.07,Y=g.x1-g.x0,J=g.z1-g.z0,he=(g.x0+g.x1)/2,_e=(g.z0+g.z1)/2,[Pe,Se,Ge,tt]=Ee.children;Pe.scale.set(Y,N,R),Pe.position.set(he,.02,g.z0+R/2+.03),Se.scale.set(Y,N,R),Se.position.set(he,.02,g.z1-R/2-.03),Ge.scale.set(R,N,J),Ge.position.set(g.x0+R/2+.03,.02,_e),tt.scale.set(R,N,J),tt.position.set(g.x1-R/2-.03,.02,_e)}let Pt=[0,0];function Ht(g){K.forEach(R=>{R.walkers.forEach((N,Y)=>{N(g,Pt),Re.position.set(Pt[0],0,Pt[1]),Re.updateMatrix(),R.visitors.setMatrixAt(Y,Re.matrix)}),R.visitors.instanceMatrix.needsUpdate=!0})}function Qt(g){let R=di.elevatorTravel+di.elevatorDwell,N=Vo.length,Y=(g%(R*N)+R*N)%(R*N),J=Math.floor(Y/R),he=Y-J*R,_e=K[Vo[J]].y,Pe=K[Vo[(J+1)%N]].y;je.position.y=he<di.elevatorDwell?_e:Gi(_e,Pe,Uh((he-di.elevatorDwell)/di.elevatorTravel))}function F(){let g=window.devicePixelRatio||1;return M?1:Math.min(g,b==="high"?Rr.pixelRatioHigh:Rr.pixelRatioLow)}function $t(g){g!==b&&(b=g,ji())}let $e=ht.elevationMin*ai,gt=ht.elevationMax*ai,te={az:Xt.azimuth,el:Xt.elevation,dist:Xt.distance,target:new k(...Xt.target)},Je={k:1,rect:{cx:0,cy:0,width:1,height:1},insetLeft:0},Ae=10,Ie=Xt.distance*ht.maxDistanceFactor,vt=!0,T=!1,v=null,z="",ae=g=>Ci(g,Ae,Ie);function ee(){let g=te.dist<=Ae+.01,R=te.dist>=Ie-.01,N=`${g}|${R}`;N!==z&&(z=N,u({atMin:g,atMax:R}))}function ge(){let{az:g,el:R,dist:N,target:Y}=te;Z.position.set(Y.x+N*Math.cos(R)*Math.sin(g),Y.y+N*Math.sin(R),Y.z+N*Math.cos(R)*Math.cos(g)),Z.lookAt(Y),ee()}function pe(){let{rect:g,k:R}=Je;if(y){let N=oa[y],Y=Ce(N.floor).y,J=ht.roomView,he=[(N.x0+N.x1)/2,Y+.5,(N.z0+N.z1)/2],_e=ts(he,[N.x1-N.x0,1.4,N.z1-N.z0]),Pe=en(_e,he,J.azimuth*ai,J.elevation*ai,R,g.width/2*J.shareW,g.height/2*J.shareH);return{az:J.azimuth*ai,el:J.elevation*ai,dist:Math.max(Pe,Ae),target:new k(...he)}}if(p!==null){let N=Ce(p).y,Y=ht.floorView,J=[0,N+.6,0],he=ts(J,[Ye.width,1.6,Ye.depth]),_e=en(he,J,Y.azimuth*ai,Y.elevation*ai,R,g.width/2*Y.share,g.height/2*Y.share);return{az:Y.azimuth*ai,el:Y.elevation*ai,dist:Math.max(_e,Ae),target:new k(...J)}}if(w==="stacked"){let N=cl(g,R);return{az:Xt.azimuth,el:Xt.elevation,dist:N.distance,target:new k(...N.target)}}return{az:Xt.azimuth,el:Xt.elevation,dist:Xt.distance,target:new k(...Xt.target)}}function O(g,R){let N={az:te.az+$0((g.az??te.az)-te.az),el:Ci(g.el??te.el,$e,gt),dist:ae(g.dist??te.dist),target:(g.target??te.target).clone()};if(E||R<=0){Object.assign(te,{az:N.az,el:N.el,dist:N.dist}),te.target.copy(N.target),v=null,Lt();return}v={from:{az:te.az,el:te.el,dist:te.dist,target:te.target.clone()},to:N,start:performance.now(),duration:R},Lt()}function re(g){if(!v)return;let{from:R,to:N,start:Y,duration:J}=v,he=Ih(Ci((g-Y)/J,0,1));te.az=Gi(R.az,N.az,he),te.el=Gi(R.el,N.el,he),te.dist=Gi(R.dist,N.dist,he),te.target.lerpVectors(R.target,N.target,he),he>=1&&(v=null)}function ve(g){vt=!0,O(pe(),g?l.camera:0)}function P(){v=null,vt=!1,T||(T=!0,f())}let X=[],ne=g=>`<svg class="icon icon--sm" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-${g}"></use></svg>`;function oe(g,R,N){let Y=document.createElement("button");Y.type="button",Y.className=`marker marker--${g} is-hidden`,Y.tabIndex=-1;let J=document.createElement("span");J.className="marker__pill";let he=document.createElement("span");return he.className="marker__text",he.textContent=R,J.append(he),Y.append(J),Y.addEventListener("click",N),i.append(Y),Y}K.forEach((g,R)=>{X.push({kind:"floor",floor:R,id:g.id,el:oe("floor",r[R].name,()=>c(g.id)),anchor:new k,corner:!0})}),Object.entries(a).forEach(([g,R])=>{let N=oa[g];N&&X.push({kind:"room",floor:N.floor,id:g,el:oe("room",R.name,()=>h(g)),local:[(N.x0+N.x1)/2,1.8,(N.z0+N.z1)/2],anchor:new k})}),X.push({kind:"here",floor:0,id:"here",el:oe("here",n,()=>c(K[0].id)),local:[qt.here[0],-.32,qt.here[1]],localTop:[qt.here[0],.9,qt.here[1]],anchor:new k,anchorTop:new k,below:!0}),K.forEach((g,R)=>{let N=["stairs","elevator"];Go.includes(R)&&N.push("restroom"),R===0&&N.push("info"),N.forEach(Y=>{let J=document.createElement("div");J.className="facility-badge is-hidden",J.innerHTML=ne(Y),i.append(J),X.push({kind:"facility",floor:R,id:`${Y}-${g.id}`,el:J,local:Lh[Y],anchor:new k,center:!0})})}),X.forEach(g=>Object.assign(g,{occluded:!1,shown:!1,current:!1,w:null,h:0,boxW:0,boxH:0}));let fe=!1,ue=new k,we=new k,se=new mh,Oe=0,Ne=e.avoid||[],Xe=K.flatMap(g=>g.upper?[g.body,g.upper]:[g.body]),Te={here:1,floor:2,room:2,facility:3};function ot(g){return g.kind==="floor"?p===null||g.floor===p&&!y:g.kind==="room"?p===g.floor:g.kind==="here"?p===null||p===0:L&&(p===null||p===g.floor)}function lt(){let g=Math.sign(Z.position.x)||1,R=Math.sign(Z.position.z)||1;X.forEach(N=>{let Y=K[N.floor].y;N.corner?N.anchor.set(g*(Vi+.15),Y+.05,R*(Mr+.15)):N.anchor.set(N.local[0],Y+N.local[1],N.local[2]),N.localTop&&N.anchorTop.set(N.localTop[0],Y+N.localTop[1],N.localTop[2])})}function Ya(g){if(!fe)return;let R=t.clientWidth,N=t.clientHeight,Y=g-Oe>120;Y&&(Oe=g),X.forEach(j=>{if(j.w===null){let De=j.center?j.el:j.el.firstElementChild;j.w=j.el.offsetWidth,j.h=j.el.offsetHeight,j.boxW=De.offsetWidth,j.boxH=De.offsetHeight}});let J=t.getBoundingClientRect(),he=Ne.map(j=>j.getBoundingClientRect()).filter(j=>j.width>0&&j.height>0).map(j=>({l:j.left-J.left,t:j.top-J.top,r:j.right-J.left,b:j.bottom-J.top})),_e=4,Pe=(j,De)=>j.l<De.r+_e&&j.r>De.l-_e&&j.t<De.b+_e&&j.b>De.t-_e,Se=(j,De,rt)=>{let Nt=j.center?rt:rt-j.h/2;return{l:De-j.boxW/2,r:De+j.boxW/2,t:Nt-j.boxH/2,b:Nt+j.boxH/2}};lt();let Ge=Je.insetLeft,tt=X.map(j=>{let De=ot(j);if(De&&Y){we.subVectors(j.anchor,Z.position);let Dt=we.length();se.set(Z.position,we.normalize()),se.far=Dt;let si=se.intersectObjects(Xe,!1);j.occluded=si.length>0&&si[0].distance<Dt-.6}ue.copy(j.anchor).project(Z);let rt=(ue.x*.5+.5)*R,Nt=(-ue.y*.5+.5)*N,at=ue.z<1&&rt>Ge&&rt<R&&Nt>0&&Nt<N,Yt=j.w/2,Gt=Ge+Yt+_e,Pi=Ci(rt,Gt,Math.max(Gt,R-Yt-_e)),qe=j.center?j.h/2+_e:j.h+_e,Mt=Ci(Nt,qe,Math.max(qe,N-_e-(j.center?j.h/2:0))),ei=ue.z,nt=Mt;return j.anchorTop&&(ue.copy(j.anchorTop).project(Z),nt=Ci((-ue.y*.5+.5)*N,j.h+_e,Math.max(j.h+_e,N-_e))),{m:j,x:Pi,y:j.below?Nt:Mt,yTop:nt,depth:ei,candidate:De&&at&&!j.occluded}}),et=j=>j.current?0:Te[j.kind];tt.sort((j,De)=>et(j.m)-et(De.m)||j.depth-De.depth);let We=[],Ve=j=>!he.some(De=>Pe(j,De))&&!We.some(De=>Pe(j,De));tt.forEach(j=>{let{y:De}=j,rt=j.candidate,Nt=j.m.center?"translate(-50%, -50%)":"translate(-50%, -100%)";if(j.m.below){let at={l:j.x-j.m.boxW/2,r:j.x+j.m.boxW/2,t:De+(j.m.h-j.m.boxH)/2,b:De+(j.m.h+j.m.boxH)/2},Yt=De+j.m.h<=N-_e;if(rt&&Yt&&Ve(at))We.push(at),Nt="translate(-50%, 0)";else{De=j.yTop;let Gt=Se(j.m,j.x,De);rt&&Ve(Gt)?We.push(Gt):rt=!1}}else if(rt){let at=Se(j.m,j.x,De),Yt=j.m.current&&he.find(Gt=>Pe(at,Gt));Yt&&(De+=Yt.t>N/2?Yt.t-_e*2-at.b:Yt.b+_e*2-at.t,De=Ci(De,j.m.h+_e,Math.max(j.m.h+_e,N-_e)),at=Se(j.m,j.x,De)),Ve(at)?We.push(at):rt=!1}j.m.el.style.transform=`translate3d(${j.x.toFixed(1)}px, ${De.toFixed(1)}px, 0) ${Nt}`,rt!==j.m.shown&&(j.m.shown=rt,j.m.el.classList.toggle("is-hidden",!rt))})}function Er(){X.forEach(g=>{let R=g.kind==="room"&&g.id===y||g.kind==="floor"&&g.floor===p&&!y;R!==g.current&&(g.current=R,g.el.classList.toggle("is-current",R),g.w=null)})}let da=e_,hi=0,ni=0,xi=!document.hidden,Tr=!0,br=!1,pa=!1,wt={warmUntil:0,frames:0,total:0,prev:0},Ka=()=>A&&!M;function Lt(){!hi&&xi&&Tr&&!br&&!pa&&(hi=requestAnimationFrame(Za))}function or(g,R){if(!R||b!=="high"||M||e.quality){wt.warmUntil=0,wt.prev=0;return}if(!wt.warmUntil){Object.assign(wt,{warmUntil:g+Rr.warmupMs,frames:0,total:0,prev:g});return}let N=g-wt.prev;wt.prev=g,!(g<wt.warmUntil)&&(wt.frames+=1,wt.total+=N,wt.total>=Rr.sampleWindowMs&&(wt.total/wt.frames>Rr.slowFrameMs&&$t("low"),wt.frames=0,wt.total=0))}function Za(g){hi=0;let R=ni?Math.min((g-ni)/1e3,.1):0;ni=g;let N=Ka();N&&(da+=R,!T&&!E&&!v&&p===null&&(te.az+=R/di.autoRotate*Q0)),re(g),mt(g),Qt(da),Ht(da),ge(),V.render(U,Z),Ya(g),or(g,N),N||v||ct?Lt():ni=0}function ji(){let g=t.clientWidth,R=t.clientHeight;if(!g||!R)return;V.setPixelRatio(F()),V.setSize(g,R,!1),Z.aspect=g/R;let N,Y;if(M)N={cx:g/2,cy:R/2,width:g,height:R},Y=Math.min(g/(2*Ar.tx),R/(2*Ar.ty));else{let J=o();N={cx:(J.left+J.right)/2,cy:(J.top+J.bottom)/2,width:Math.max(40,J.right-J.left),height:Math.max(40,J.bottom-J.top)},Y=$a(N),Je.insetLeft=J.insetLeft||0}if(Je={...Je,rect:N,k:Y},Z.zoom=ll(Y,R),Z.setViewOffset(g,R,g/2-N.cx,R/2-N.cy,g,R),Z.updateProjectionMatrix(),Ae=hl(Y,N),Ie=Xt.distance*ht.maxDistanceFactor,X.forEach(J=>{J.w=null}),vt){let J=pe();v?(v.to.dist=J.dist,v.to.target.copy(J.target)):(te.dist=J.dist,te.target.copy(J.target),(p!==null||T)&&(te.az=J.az,te.el=J.el))}else te.dist=ae(te.dist);ni=0,Lt()}let fa=new AbortController,{signal:ui}=fa,Si=new Map,qi=null,wr=()=>{let[g,R]=[...Si.values()];return{d:Math.max(1,Math.hypot(g.x-R.x,g.y-R.y)),my:(g.y+R.y)/2}};C.addEventListener("pointerdown",g=>{g.pointerType==="mouse"&&g.button!==0||(P(),Si.set(g.pointerId,{x:g.clientX,y:g.clientY,type:g.pointerType}),g.pointerType==="mouse"&&C.setPointerCapture(g.pointerId),qi=Si.size===2?wr():null)},{signal:ui}),C.addEventListener("pointermove",g=>{let R=Si.get(g.pointerId);if(!R)return;let N=g.clientX-R.x,Y=g.clientY-R.y;R.x=g.clientX,R.y=g.clientY;let J=Math.PI/Math.max(320,t.clientHeight);if(Si.size===1)te.az-=N*J*1.3,(R.type==="mouse"||d())&&(te.el=Ci(te.el+Y*J,$e,gt));else if(Si.size===2&&qi){let he=wr();te.dist=ae(te.dist*(qi.d/he.d)),te.el=Ci(te.el+(he.my-qi.my)*J,$e,gt),qi=he}Lt()},{signal:ui});let x=g=>{Si.delete(g.pointerId),qi=Si.size===2?wr():null};C.addEventListener("pointerup",x,{signal:ui}),C.addEventListener("pointercancel",x,{signal:ui}),C.addEventListener("wheel",g=>{if(!d())return;g.preventDefault(),P();let R=g.deltaMode===1?g.deltaY*16:g.deltaY;te.dist=ae(te.dist*Math.exp(R*.0012)),Lt()},{passive:!1,signal:ui}),C.addEventListener("webglcontextlost",g=>{g.preventDefault(),br=!0,hi&&cancelAnimationFrame(hi),hi=0,_()},{signal:ui}),C.addEventListener("webglcontextrestored",()=>{br=!1,ni=0,Lt(),S()},{signal:ui}),document.addEventListener("visibilitychange",()=>{xi=!document.hidden,ni=0,Lt()},{signal:ui});let D=new ResizeObserver(()=>ji());D.observe(t);let q=new IntersectionObserver(g=>{Tr=g.some(R=>R.isIntersecting),ni=0,Lt()});q.observe(t),m.addEventListener("change",()=>ji(),{signal:ui}),K.forEach(g=>Object.assign(g,Ce(g.index))),Ct(),ji(),await new Promise(g=>{requestAnimationFrame(R=>{Za(R),g()})}),fe=!0;let H=g=>K.findIndex(R=>R.id===g);return{canvas:C,relayout(){ji()},setSelection(g,R,N=!0){let Y=g===null?null:H(g),J=R&&oa[R]?R:null;Y===p&&J===y||((Y!==null||J)&&P(),p=Y<0?null:Y,y=J,bt(),Er(),Ft(N),ve(N))},reset(g=!0){p=null,y=null,bt(),Er(),Ft(g),v=null,ve(g)},setView(g,R=!0){g!==w&&(w=g,C.setAttribute("aria-label",s(w)),Ft(R),vt?ve(R):Lt())},setFacilities(g){L=g,Lt()},rotateStep(g){P(),O({az:te.az+g*ht.stepRotate*ai},l.cameraStep)},zoomStep(g){P();let R=g>0?ht.stepZoom:1/ht.stepZoom;O({dist:ae(te.dist*R)},l.cameraStep)},setMotion(g){A=g,ni=0,Lt()},setReduced(g){E=g,Lt()},loseContextForTest(){V.forceContextLoss()},get quality(){return b},cameraState(){return{azimuth:te.az/ai,elevation:te.el/ai,distance:te.dist,minDistance:Ae,maxDistance:Ie,zoom:Z.zoom,k:Je.k,rect:Je.rect,target:te.target.toArray(),tweening:!!(v||ct)}},stats(){return{calls:V.info.render.calls,triangles:V.info.render.triangles,quality:b,pixelRatio:V.getPixelRatio(),visitors:K.reduce((g,R)=>g+R.visitors.count,0),markers:X.filter(g=>g.shown).map(g=>g.id)}},dispose(){pa=!0,hi&&cancelAnimationFrame(hi),fa.abort(),D.disconnect(),q.disconnect(),U.traverse(g=>{g.geometry&&g.geometry.dispose()}),ie.forEach(g=>g.dispose()),V.dispose(),C.remove(),X.forEach(g=>g.el.remove())}}}var ai,Q0,Ci,Gi,Ih,Uh,$0,e_,Vo,Vi,Mr,Ot,Va,Xo,Oh,la,ko,t_,Fh,Wn,zh=ma(()=>{Ch();Ja();is();Dh();ai=Math.PI/180,Q0=Math.PI*2,Ci=(e,t,i)=>Math.min(i,Math.max(t,e)),Gi=(e,t,i)=>e+(t-e)*i,Ih=e=>1-Math.pow(1-e,3),Uh=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,$0=e=>Math.atan2(Math.sin(e),Math.cos(e)),e_=6,Vo=[0,1,2,3,2,1],Vi=Ye.width/2,Mr=Ye.depth/2,Ot=.2,Va=.12,Xo=new Oa(1,1,1).translate(0,.5,0),Oh=e=>new Oo(1,1,1,e,1).translate(0,.5,0),la=Oh(6),ko=Oh(10),t_=new Fo(1,1,4,1).rotateY(Math.PI/4).translate(0,.5,0),Fh=new Fo(1,1,7,1).translate(0,.5,0),Wn=new ah(1,8,6)});Ja();is();var sr=document.documentElement,Wi=new URLSearchParams(window.location.search),Jt={state:Wi.get("state"),poster:Wi.get("poster"),motion:Wi.get("motion"),quality:["high","low"].includes(Wi.get("quality"))?Wi.get("quality"):void 0,size:["wide","medium","narrow"].includes(Wi.get("size"))?Wi.get("size"):"wide"},dt=(e,t=document)=>t.querySelector(e),Xi=(e,t=document)=>[...t.querySelectorAll(e)],ye={scene:dt("#scene"),labels:dt(".scene__labels"),poster:dt(".scene__poster"),posterImg:dt(".scene__poster img"),progress:dt(".scene__progress"),toggles:dt(".scene__toggles"),picker:dt(".scene__floors"),controls:dt(".scene__controls"),motionBtn:dt('[data-action="motion"]'),viewBtn:dt('[data-action="view"]'),facilitiesBtn:dt('[data-action="facilities"]'),zoomIn:dt('[data-action="zoom-in"]'),zoomOut:dt('[data-action="zoom-out"]'),bannerRegion:dt(".banner-region"),floorsHead:dt("#floors"),announcer:dt("[data-announcer]"),backdrop:dt(".panel-backdrop"),panel:dt(".panel"),topbar:dt(".topbar"),floorGroups:Xi(".floor-group"),floorButtons:Xi(".floor"),roomButtons:Xi(".room"),pickerButtons:Xi(".floor-btn"),details:Xi("[data-detail]")},Zh=e=>getComputedStyle(sr).getPropertyValue(e).trim(),ki=e=>parseFloat(Zh(e))||0,Hh=e=>parseFloat(Zh(e))*parseFloat(getComputedStyle(sr).fontSize),nr={camera:ki("--ds-motion-camera"),cameraStep:ki("--ds-motion-camera-step"),floorShift:ki("--ds-motion-floor-shift"),crossfade:ki("--ds-motion-crossfade"),loadingDelay:ki("--ds-motion-loading-delay"),loadingMin:ki("--ds-motion-loading-min"),loadingSlow:ki("--ds-motion-loading-slow"),contextRestore:ki("--ds-motion-context-restore"),hintHold:ki("--ds-motion-hint-hold")},Et={motionStop:"\uC6C0\uC9C1\uC784 \uBA48\uCD94\uAE30",motionStart:"\uC6C0\uC9C1\uC784 \uB2E4\uC2DC \uCF1C\uAE30",toStacked:"\uC313\uC544 \uBCF4\uAE30",toExploded:"\uD3BC\uCCD0 \uBCF4\uAE30",facilitiesHide:"\uD3B8\uC758\uC2DC\uC124 \uC228\uAE30\uAE30",facilitiesShow:"\uD3B8\uC758\uC2DC\uC124 \uBCF4\uAE30",here:"\uC9C0\uAE08 \uC5EC\uAE30",progress:"\uAC74\uBB3C\uC744 \uADF8\uB9AC\uB294 \uC911\uC774\uC5D0\uC694",slow:"\uC5F0\uACB0\uC774 \uB290\uB824 3D \uC7A5\uBA74 \uD30C\uC77C\uC744 \uBC1B\uB294 \uB370 \uC2DC\uAC04\uC774 \uAC78\uB824\uC694. \uBAA9\uB85D\uC740 \uC9C0\uAE08 \uBCFC \uC218 \uC788\uC5B4\uC694.",slowAction:"3D \uC5C6\uC774 \uBCF4\uAE30",failed:"\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 3D \uC7A5\uBA74\uC744 \uADF8\uB9B4 \uC218 \uC5C6\uC5B4\uC694. \uBAA9\uB85D\uC5D0\uC11C \uCE35\uACFC \uC804\uC2DC\uC2E4\uC744 \uACE0\uB974\uBA74 \uC124\uBA85\uC744 \uBCFC \uC218 \uC788\uC5B4\uC694.",lost:"3D \uC7A5\uBA74\uC774 \uBA48\uCDC4\uC5B4\uC694. \uB2E4\uC2DC \uADF8\uB9AC\uBA74 \uC774\uC5B4\uC11C \uBCFC \uC218 \uC788\uC5B4\uC694.",lostAction:"\uB2E4\uC2DC \uADF8\uB9AC\uAE30",closeBanner:"\uC54C\uB9BC \uB2EB\uAE30",viewing:e=>`${e} \uBCF4\uB294 \uC911`,altExploded:"4\uAC1C \uCE35\uC744 \uC704\uC544\uB798\uB85C \uB744\uC6CC \uD3BC\uCE5C \uBC15\uBB3C\uAD00 3D \uC7A5\uBA74. 1\uCE35 \uB85C\uBE44\uC640 \uAE30\uB150\uD488 \uAC00\uAC8C\xB7\uC5B4\uB9B0\uC774 \uCCB4\uD5D8\uC2E4, 2\uCE35 \uC61B \uC0DD\uD65C\xB7\uB3C4\uC790\uAE30 \uC804\uC2DC\uC2E4\uACFC \uC601\uC0C1\uC2E4, 3\uCE35 \uADF8\uB9BC\xB7\uAE30\uD68D \uC804\uC2DC\uC2E4, 4\uCE35 \uC625\uC0C1 \uC815\uC6D0\uACFC \uCE74\uD398\uAC00 \uBCF4\uC5EC\uC694.",altStacked:"4\uAC1C \uCE35\uC744 \uC313\uC740 \uBC15\uBB3C\uAD00 \uAC74\uBB3C 3D \uC7A5\uBA74. \uBC14\uAE65\uBCBD\uACFC \uCC3D\uC774 \uBCF4\uC774\uACE0, \uC9C0\uBD95 \uC704 4\uCE35\uC5D0 \uC625\uC0C1 \uC815\uC6D0\uACFC \uCE74\uD398\uAC00 \uC788\uC5B4\uC694."},Qn=ye.floorButtons.map(e=>({id:e.dataset.floor,name:dt(".floor__name",e).textContent.trim()})).sort((e,t)=>Number(e.id)-Number(t.id)),ha=Object.fromEntries(ye.roomButtons.map(e=>[e.dataset.room,{name:dt(".room__name",e).textContent.trim(),floor:e.dataset.floor}])),h_=e=>Qn.find(t=>t.id===e)?.name??"",Yn=window.matchMedia("(prefers-reduced-motion: reduce)"),ja=window.matchMedia(`(min-width: ${ga.wide}px)`),u_=window.matchMedia(`(min-width: ${ga.medium}px)`);function Jh(e){let t=new URLSearchParams(e),i=ha[t.get("room")]?t.get("room"):null;return i?{floor:ha[i].floor,room:i}:{floor:Qn.some(a=>a.id===t.get("floor"))?t.get("floor"):null,room:null}}var Gh=Jh(window.location.search),be={mode:"loading",floor:Gh.floor,room:Gh.room,view:Wi.get("view")==="stacked"&&!Jt.poster?"stacked":"exploded",facilities:Wi.get("facilities")!=="off",reduced:Yn.matches,motion:Jt.motion!=="off"&&!Yn.matches&&!Jt.poster},pt=null,jo=null,Wa=!1,Kn=0,Vh=!1,d_=new ResizeObserver(()=>{Zn(),pt?.relayout()}),Qh=e=>new Promise(t=>setTimeout(t,e)),$h=e=>e.getClientRects().length>0&&getComputedStyle(e).visibility!=="hidden";function ua(e){be.mode=e,sr.dataset.mode=e,eu(),Zn()}var kh=(e,t)=>{t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")};function eu(){let e=be.mode==="ready";Xi(".scene__canvas",ye.scene).forEach(t=>kh(t,!e)),kh(ye.poster,e)}function Xn(e){ye.announcer.textContent="",e&&requestAnimationFrame(()=>ye.announcer.textContent=e)}var Wh=e=>e.room?2:e.floor?1:0;function tu(){ye.floorGroups.forEach(i=>i.classList.toggle("is-open",i.dataset.floor===be.floor)),ye.floorButtons.forEach(i=>{let r=i.dataset.floor===be.floor;i.setAttribute("aria-expanded",r?"true":"false"),r&&!be.room?i.setAttribute("aria-current","true"):i.removeAttribute("aria-current")}),ye.roomButtons.forEach(i=>{i.dataset.room===be.room?i.setAttribute("aria-current","true"):i.removeAttribute("aria-current")}),ye.pickerButtons.forEach(i=>{i.dataset.floor===be.floor?i.setAttribute("aria-current","true"):i.removeAttribute("aria-current")});let e=be.room??(be.floor?`floor-${be.floor}`:"intro");ye.details.forEach(i=>i.classList.toggle("is-current",i.dataset.detail===e));let t=document.activeElement;t?.classList.contains("room")&&!$h(t)&&dt(`.floor[data-floor="${t.dataset.floor}"]`)?.focus(),pt&&be.mode==="ready"&&pt.setSelection(be.floor,be.room)}function Zo(e=!1){if(!ja.matches)return;dt(".detail__item.is-current")?.scrollIntoView({block:"nearest",behavior:e||be.reduced?"auto":"smooth"}),Xa()}function Xa(){let e=ja.matches&&ye.panel.scrollTop>0,t=ye.bannerRegion.childElementCount>0;ye.topbar.classList.toggle("is-scrolled",e&&!t),ye.bannerRegion.classList.toggle("is-scrolled",e&&t)}function p_(e){let t=new URL(window.location.href);return t.searchParams.delete("floor"),t.searchParams.delete("room"),e.floor&&t.searchParams.set("floor",e.floor),e.room&&t.searchParams.set("room",e.room),be.view==="stacked"?t.searchParams.set("view","stacked"):t.searchParams.delete("view"),be.facilities?t.searchParams.delete("facilities"):t.searchParams.set("facilities","off"),t}function ca(e,t,i){try{window.history[e]({museumFloors:!0,idx:i},"",p_(t))}catch{}}var ka=()=>window.history.state?.museumFloors?window.history.state.idx:0,jn=null;function iu(e){let t=e.floor!==be.floor||e.room!==be.room;be.floor=e.floor,be.room=e.room,tu(),t&&(Zo(),e.room?Xn(Et.viewing(ha[e.room].name)):e.floor?Xn(Et.viewing(h_(e.floor))):Xn(""))}function yr(e){let t=Wh(be),i=Wh(e);if(e.floor===be.floor&&e.room===be.room)return;if(iu(e),i>t){ca("pushState",e,ka()+1);return}if(i===t){ca("replaceState",e,ka());return}let r=Math.min(t-i,ka());r>0?(jn=e,window.history.go(-r)):ca("replaceState",e,ka())}function Yo(e){Qn.some(t=>t.id===e)&&yr({floor:e,room:null})}function ru(e){ha[e]&&yr({floor:ha[e].floor,room:e})}function f_(){be.room?yr({floor:be.floor,room:null}):be.floor?yr({floor:null,room:null}):pt&&be.mode==="ready"&&pt.reset()}function m_(){be.floor?yr({floor:null,room:null}):pt&&be.mode==="ready"&&pt.reset()}window.addEventListener("popstate",e=>{if(jn){let t=jn;jn=null,ca("replaceState",t,e.state?.museumFloors?e.state.idx:0);return}iu(Jh(window.location.search))});function qo(){ye.motionBtn.textContent=be.motion?Et.motionStop:Et.motionStart,pt?.setMotion(be.motion)}function Xh(e){sr.dataset.view=be.view,ye.viewBtn.textContent=be.view==="stacked"?Et.toExploded:Et.toStacked,pt&&be.mode==="ready"&&pt.setView(be.view,e)}function jh(){sr.dataset.facilities=be.facilities?"on":"off",ye.facilitiesBtn.textContent=be.facilities?Et.facilitiesHide:Et.facilitiesShow,pt?.setFacilities(be.facilities)}var qh=()=>ca("replaceState",be,ka());function g_(){return ja.matches?"wide":u_.matches?"medium":"narrow"}function __(){return!ja.matches||Jt.poster?0:Math.max(0,ye.backdrop.getBoundingClientRect().right-ye.scene.getBoundingClientRect().left)}function au(){let e=ye.scene.getBoundingClientRect(),t=Hh("--ds-space-3"),i=o=>{let l=o.getBoundingClientRect();return l.width>0&&l.height>0?l:null},r=__(),a=i(ye.toggles),n=i(ye.picker),s=i(ye.controls);return{insetLeft:r,left:r?r+Hh("--ds-space-6"):t,top:a?a.bottom-e.top+t:t,right:n?n.left-e.left-t:e.width-t,bottom:s?s.top-e.top-t:e.height-t}}function Zn(){if(Jt.poster)return;let e=ye.scene.clientWidth,t=ye.scene.clientHeight;if(!e||!t)return;let i=g_(),r=ye.posterImg;if(r.naturalWidth&&r.naturalWidth!==tl[i].width){ye.poster.classList.remove("is-placed");return}let a=au(),n={cx:(a.left+a.right)/2,cy:(a.top+a.bottom)/2,width:Math.max(40,a.right-a.left),height:Math.max(40,a.bottom-a.top)},s=ul(n,$a(n));ye.poster.classList.add("is-placed"),Object.entries(s).forEach(([o,l])=>{ye.poster.style.setProperty(`--poster-${o}`,`${l.toFixed(1)}px`)})}function v_(){return Xi(".tooltip",ye.controls).some(t=>getComputedStyle(t).visibility==="visible")?(ye.controls.classList.add("is-tip-dismissed"),Xi(".icon-btn.is-tip",ye.controls).forEach(t=>t.classList.remove("is-tip")),!0):!1}function Yh(e,t){let i=dt(".tooltip",e);e.setAttribute("aria-disabled",t?"true":"false"),i.textContent=t?i.dataset.limit:e.getAttribute("aria-label"),t?e.setAttribute("aria-describedby",i.id):e.removeAttribute("aria-describedby")}function x_({atMin:e,atMax:t}){Yh(ye.zoomIn,e),Yh(ye.zoomOut,t)}function S_(e){!pt||be.mode!=="ready"||(e==="rotate-left"?pt.rotateStep(1):e==="rotate-right"?pt.rotateStep(-1):e==="zoom-in"?pt.zoomStep(1):e==="zoom-out"?pt.zoomStep(-1):e==="reset"&&m_())}function Kh(e,t){let i=document.createElement("button");return i.type="button",i.className=e,i.textContent=t,i}function nu(){if(!ye.bannerRegion.contains(document.activeElement))return;(Xi("button",ye.toggles).find($h)??ye.floorsHead).focus()}function qa(){nu(),ye.bannerRegion.replaceChildren(),Xa()}function Jo({text:e,action:t,onAction:i}){let r=document.createElement("div");r.className="banner";let a=document.createElement("div");a.className="banner__body";let n=document.createElement("p");if(n.className="banner__text",n.textContent=e,a.append(n),t){let o=Kh("btn",t);o.addEventListener("click",i),a.append(o)}let s=Kh("icon-btn icon-btn--plain banner__close","");s.setAttribute("aria-label",Et.closeBanner),s.innerHTML='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',s.addEventListener("click",qa),r.append(a,s),nu(),ye.bannerRegion.replaceChildren(r),be.floor&&Zo(!0),Xa()}var Ko=0,qn=0;function su(){clearTimeout(Ko),Ko=setTimeout(()=>{ye.progress.textContent=Et.progress,qn=performance.now()},nr.loadingDelay)}async function Qo(){if(clearTimeout(Ko),qn){let e=nr.loadingMin-(performance.now()-qn);e>0&&await Qh(e)}ye.progress.textContent="",qn=0}function ou(){ye.poster.classList.remove("is-fading"),ye.poster.hidden=!1}function lu(){ye.poster.classList.add("is-fading"),setTimeout(()=>{be.mode==="ready"&&(ye.poster.hidden=!0)},be.reduced?0:nr.crossfade)}function Jn(e){ua("fallback"),Qo(),ou(),e?Jo({text:e}):qa()}function M_(){Wa=!0,Jn(null)}function y_(){be.mode==="loading"&&(Qo(),Jo({text:Et.slow,action:Et.slowAction,onAction:M_}))}function E_(){ua("lost"),ou(),clearTimeout(Kn),Kn=setTimeout(()=>{Jo({text:Et.lost,action:Et.lostAction,onAction:b_})},nr.contextRestore)}function T_(){clearTimeout(Kn),qa(),ua("ready"),lu()}async function b_(){qa(),clearTimeout(Kn),pt?.dispose(),pt=null,ua("loading"),su();try{await cu()}catch(e){console.error(e),Jn(Et.failed)}}function w_(){try{let e=document.createElement("canvas").getContext("webgl2");return e?.getExtension("WEBGL_lose_context")?.loseContext(),!!e}catch{return!1}}async function cu(){if(jo=jo||await Promise.resolve().then(()=>(zh(),Bh)),Wa)return;let e=await jo.createScene({container:ye.scene,labelLayer:ye.labels,floors:Qn,rooms:ha,hereLabel:Et.here,canvasLabel:t=>t==="stacked"?Et.altStacked:Et.altExploded,getFreeRect:au,durations:nr,motion:be.motion,reduced:be.reduced,facilities:be.facilities,poster:!!Jt.poster,quality:Jt.poster?Jt.size==="wide"?"high":"low":Jt.quality,avoid:[ye.toggles,ye.picker,ye.controls],onSelectFloor:Yo,onSelectRoom:ru,onZoomLimits:x_,onContextLost:E_,onContextRestored:T_});if(Wa){e.dispose();return}pt=e,window.museumFloors={scene:pt,state:be},await Qo(),qa(),ua("ready"),pt.setView(be.view,!0),pt.setSelection(be.floor,be.room,!0),lu(),Jt.poster&&(sr.dataset.posterReady="true"),Jt.state==="lost"&&!Vh&&(Vh=!0,setTimeout(()=>pt?.loseContextForTest(),800))}async function A_(){if(window.museumFloorsBooted=!0,sr.classList.add("js"),ua("loading"),Jt.poster&&sr.classList.add("is-poster"),ca("replaceState",be,0),tu(),be.floor&&Zo(!0),qo(),Xh(!1),jh(),Zn(),ye.posterImg.addEventListener("load",Zn),ye.panel.addEventListener("scroll",Xa,{passive:!0}),ja.addEventListener("change",Xa),[ye.scene,ye.backdrop,ye.toggles,ye.picker,ye.controls].forEach(t=>d_.observe(t)),new MutationObserver(eu).observe(ye.scene,{childList:!0}),ye.floorButtons.forEach(t=>{t.addEventListener("click",()=>{let i=t.dataset.floor;be.floor===i?yr(be.room?{floor:i,room:null}:{floor:null,room:null}):Yo(i)})}),ye.roomButtons.forEach(t=>t.addEventListener("click",()=>ru(t.dataset.room))),ye.pickerButtons.forEach(t=>{t.addEventListener("click",()=>{let i=t.dataset.floor;be.floor===i&&be.room?yr({floor:i,room:null}):Yo(i)})}),ye.controls.addEventListener("click",t=>{if(t.target.closest(".tooltip"))return;let i=t.target.closest("[data-action]");if(i){if(i.getAttribute("aria-disabled")==="true"){let r=dt(".tooltip",i);i.classList.add("is-tip"),Xn(r.textContent),clearTimeout(i.tipTimer),i.tipTimer=setTimeout(()=>i.classList.remove("is-tip"),nr.hintHold);return}S_(i.dataset.action)}}),ye.motionBtn.addEventListener("click",()=>{be.motion=!be.motion,qo()}),ye.viewBtn.addEventListener("click",()=>{be.view=be.view==="stacked"?"exploded":"stacked",Xh(!0),qh()}),ye.facilitiesBtn.addEventListener("click",()=>{be.facilities=!be.facilities,jh(),qh()}),document.addEventListener("keydown",t=>{t.key!=="Escape"||t.defaultPrevented||v_()||f_()}),ye.controls.addEventListener("pointerleave",()=>ye.controls.classList.remove("is-tip-dismissed")),ye.controls.addEventListener("focusin",()=>ye.controls.classList.remove("is-tip-dismissed")),Yn.addEventListener("change",()=>{be.reduced=Yn.matches,pt?.setReduced(be.reduced),be.reduced&&(be.motion=!1,qo())}),Jt.state==="nowebgl"||!w_()){Jn(Et.failed);return}su();let e=setTimeout(y_,nr.loadingSlow);try{if(Jt.state==="slow"&&await Qh(nr.loadingSlow+3e4),Wa)return;await cu()}catch(t){console.error(t),Wa||Jn(Et.failed)}finally{clearTimeout(e)}}A_();})();
