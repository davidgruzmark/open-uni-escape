(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jo="170",wc=0,ma=1,Ec=2,wl=1,El=2,_n=3,Gn=0,Re=1,Ke=2,Bn=0,Oi=1,ga=2,va=3,_a=4,Tc=5,ii=100,Ac=101,Cc=102,Rc=103,Pc=104,Lc=200,Dc=201,Ic=202,Uc=203,eo=204,no=205,Nc=206,Fc=207,Oc=208,zc=209,Bc=210,kc=211,Gc=212,Hc=213,Vc=214,io=0,so=1,ro=2,Hi=3,oo=4,ao=5,lo=6,co=7,Tl=0,Wc=1,Xc=2,kn=0,qc=1,Yc=2,$c=3,Al=4,Zc=5,Kc=6,Jc=7,Cl=300,Vi=301,Wi=302,ho=303,uo=304,dr=306,xs=1e3,ri=1001,fo=1002,sn=1003,jc=1004,Ds=1005,ln=1006,vr=1007,oi=1008,En=1009,Rl=1010,Pl=1011,Ms=1012,jo=1013,li=1014,Sn=1015,Ts=1016,Qo=1017,ta=1018,Xi=1020,Ll=35902,Dl=1021,Il=1022,nn=1023,Ul=1024,Nl=1025,zi=1026,qi=1027,Fl=1028,ea=1029,Ol=1030,na=1031,ia=1033,nr=33776,ir=33777,sr=33778,rr=33779,po=35840,mo=35841,go=35842,vo=35843,_o=36196,xo=37492,Mo=37496,yo=37808,So=37809,bo=37810,wo=37811,Eo=37812,To=37813,Ao=37814,Co=37815,Ro=37816,Po=37817,Lo=37818,Do=37819,Io=37820,Uo=37821,or=36492,No=36494,Fo=36495,zl=36283,Oo=36284,zo=36285,Bo=36286,Qc=3200,th=3201,Bl=0,eh=1,Mn="",Fe="srgb",Ki="srgb-linear",fr="linear",le="srgb",gi=7680,xa=519,nh=512,ih=513,sh=514,kl=515,rh=516,oh=517,ah=518,lh=519,Ma=35044,ya="300 es",bn=2e3,lr=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sa=1234567;const ps=Math.PI/180,ys=180/Math.PI;function fi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function sa(i,t){return(i%t+t)%t}function ch(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function hh(i,t,e){return i!==t?(e-i)/(t-i):0}function ms(i,t,e){return(1-e)*i+e*t}function uh(i,t,e,n){return ms(i,t,1-Math.exp(-e*n))}function dh(i,t=1){return t-Math.abs(sa(i,t*2)-t)}function fh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ph(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function mh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function gh(i,t){return i+Math.random()*(t-i)}function vh(i){return i*(.5-Math.random())}function _h(i){i!==void 0&&(Sa=i);let t=Sa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xh(i){return i*ps}function Mh(i){return i*ys}function yh(i){return(i&i-1)===0&&i!==0}function Sh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wh(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),h=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ae={DEG2RAD:ps,RAD2DEG:ys,generateUUID:fi,clamp:we,euclideanModulo:sa,mapLinear:ch,inverseLerp:hh,lerp:ms,damp:uh,pingpong:dh,smoothstep:fh,smootherstep:ph,randInt:mh,randFloat:gh,randFloatSpread:vh,seededRandom:_h,degToRad:xh,radToDeg:Mh,isPowerOfTwo:yh,ceilPowerOfTwo:Sh,floorPowerOfTwo:bh,setQuaternionFromProperEuler:wh,normalize:Le,denormalize:Ii};class Q{constructor(t=0,e=0){Q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],x=s[1],M=s[4],_=s[7],I=s[2],C=s[5],P=s[8];return r[0]=o*v+a*x+l*I,r[3]=o*m+a*M+l*C,r[6]=o*f+a*_+l*P,r[1]=c*v+u*x+d*I,r[4]=c*m+u*M+d*C,r[7]=c*f+u*_+d*P,r[2]=h*v+p*x+g*I,r[5]=h*m+p*M+g*C,r[8]=h*f+p*_+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=e*d+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=h*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_r.makeScale(t,e)),this}rotate(t){return this.premultiply(_r.makeRotation(-t)),this}translate(t,e){return this.premultiply(_r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new qt;function Gl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Eh(){const i=cr("canvas");return i.style.display="block",i}const ba={};function us(i){i in ba||(ba[i]=!0,console.warn(i))}function Th(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ah(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ch(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(i.r=wn(i.r),i.g=wn(i.g),i.b=wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mn?fr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const wa=[.64,.33,.3,.6,.15,.06],Ea=[.2126,.7152,.0722],Ta=[.3127,.329],Aa=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ca=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Ki]:{primaries:wa,whitePoint:Ta,transfer:fr,toXYZ:Aa,fromXYZ:Ca,luminanceCoefficients:Ea,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:wa,whitePoint:Ta,transfer:le,toXYZ:Aa,fromXYZ:Ca,luminanceCoefficients:Ea,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});let vi;class Rh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=cr("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ph=0;class Hl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xr(s[o].image)):r.push(xr(s[o]))}else r=xr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lh=0;class Ue extends Ji{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=ri,s=ri,r=ln,o=oi,a=nn,l=En,c=Ue.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=fi(),this.name="",this.source=new Hl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xs:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xs:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Cl;Ue.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,_=(p+1)/2,I=(f+1)/2,C=(u+h)/4,P=(d+v)/4,E=(g+m)/4;return M>_&&M>I?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=P/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=C/s,r=E/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=E/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-v)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dh extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Hl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Dh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vl extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ih extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==h||c!==p||u!==g){let m=1-a;const f=l*h+c*p+u*g+d*v,x=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const I=Math.sqrt(M),C=Math.atan2(I,f*x);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const _=a*x;if(l=l*m+h*_,c=c*m+p*_,u=u*m+g*_,d=d*m+v*_,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=I,c*=I,u*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*p-c*h,t[e+1]=l*g+u*h+c*d-a*p,t[e+2]=c*g+u*p+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ra.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ra.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new T,Ra=new As;class Cs{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),Us.subVectors(this.max,rs),_i.subVectors(t.a,rs),xi.subVectors(t.b,rs),Mi.subVectors(t.c,rs),Pn.subVectors(xi,_i),Ln.subVectors(Mi,xi),$n.subVectors(_i,Mi);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-$n.z,$n.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,$n.z,0,-$n.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-$n.y,$n.x,0];return!yr(e,_i,xi,Mi,Us)||(e=[1,0,0,0,1,0,0,0,1],!yr(e,_i,xi,Mi,Us))?!1:(Ns.crossVectors(Pn,Ln),e=[Ns.x,Ns.y,Ns.z],yr(e,_i,xi,Mi,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new T,new T,new T,new T,new T,new T,new T,new T],je=new T,Is=new Cs,_i=new T,xi=new T,Mi=new T,Pn=new T,Ln=new T,$n=new T,rs=new T,Us=new T,Ns=new T,Zn=new T;function yr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zn.fromArray(i,r);const a=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),u=n.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Uh=new Cs,os=new T,Sr=new T;class ra{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Uh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);const e=os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(Sr)),this.expandByPoint(os.copy(t.center).sub(Sr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new T,br=new T,Fs=new T,Dn=new T,wr=new T,Os=new T,Er=new T;class Nh{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){br.copy(t).add(e).multiplyScalar(.5),Fs.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(br);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Fs),a=Dn.dot(this.direction),l=-Dn.dot(Fs),c=Dn.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(br).addScaledVector(Fs,h),p}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){wr.subVectors(e,t),Os.subVectors(n,t),Er.crossVectors(wr,Os);let o=this.direction.dot(Er),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,t);const l=a*this.direction.dot(Os.crossVectors(Dn,Os));if(l<0)return null;const c=a*this.direction.dot(wr.cross(Dn));if(c<0||l+c>o)return null;const u=-a*Dn.dot(Er);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,s,r,o,a,l,c,u,d,h,p,g,v,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,d,h,p,g,v,m)}set(t,e,n,s,r,o,a,l,c,u,d,h,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),o=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,p=o*d,g=a*u,v=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=h-v*c,e[9]=-a*l,e[2]=v-h*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,p=l*d,g=c*u,v=c*d;e[0]=h+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=v+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,p=l*d,g=c*u,v=c*d;e[0]=h-v*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,p=o*d,g=a*u,v=a*d;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+v,e[1]=l*d,e[5]=v*c+h,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=v-h*d,e[8]=g*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*d+g,e[10]=h-v*d}else if(t.order==="XZY"){const h=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+v,e[5]=o*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fh,t,Oh)}lookAt(t,e,n){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),In.crossVectors(n,ke),In.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),In.crossVectors(n,ke)),In.normalize(),zs.crossVectors(ke,In),s[0]=In.x,s[4]=zs.x,s[8]=ke.x,s[1]=In.y,s[5]=zs.y,s[9]=ke.y,s[2]=In.z,s[6]=zs.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],x=n[3],M=n[7],_=n[11],I=n[15],C=s[0],P=s[4],E=s[8],S=s[12],y=s[1],R=s[5],B=s[9],F=s[13],V=s[2],q=s[6],X=s[10],tt=s[14],W=s[3],lt=s[7],dt=s[11],Mt=s[15];return r[0]=o*C+a*y+l*V+c*W,r[4]=o*P+a*R+l*q+c*lt,r[8]=o*E+a*B+l*X+c*dt,r[12]=o*S+a*F+l*tt+c*Mt,r[1]=u*C+d*y+h*V+p*W,r[5]=u*P+d*R+h*q+p*lt,r[9]=u*E+d*B+h*X+p*dt,r[13]=u*S+d*F+h*tt+p*Mt,r[2]=g*C+v*y+m*V+f*W,r[6]=g*P+v*R+m*q+f*lt,r[10]=g*E+v*B+m*X+f*dt,r[14]=g*S+v*F+m*tt+f*Mt,r[3]=x*C+M*y+_*V+I*W,r[7]=x*P+M*R+_*q+I*lt,r[11]=x*E+M*B+_*X+I*dt,r[15]=x*S+M*F+_*tt+I*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*a*h+n*c*h+s*a*p-n*l*p)+v*(+e*l*p-e*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*u-n*c*u)+f*(-s*a*u-e*l*d+e*a*h+s*o*d-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],x=d*m*c-v*h*c+v*l*p-a*m*p-d*l*f+a*h*f,M=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,_=u*v*c-g*d*c+g*a*p-o*v*p-u*a*f+o*d*f,I=g*d*l-u*v*l-g*a*h+o*v*h+u*a*m-o*d*m,C=e*x+n*M+s*_+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=x*P,t[1]=(v*h*r-d*m*r-v*s*p+n*m*p+d*s*f-n*h*f)*P,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*f+n*l*f)*P,t[3]=(d*l*r-a*h*r-d*s*c+n*h*c+a*s*p-n*l*p)*P,t[4]=M*P,t[5]=(u*m*r-g*h*r+g*s*p-e*m*p-u*s*f+e*h*f)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*P,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*p+e*l*p)*P,t[8]=_*P,t[9]=(g*d*r-u*v*r-g*n*p+e*v*p+u*n*f-e*d*f)*P,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*f+e*a*f)*P,t[11]=(u*a*r-o*d*r-u*n*c+e*d*c+o*n*p-e*a*p)*P,t[12]=I*P,t[13]=(u*v*s-g*d*s+g*n*h-e*v*h-u*n*m+e*d*m)*P,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*P,t[15]=(o*d*s-u*a*s+u*n*l-e*d*l-o*n*h+e*a*h)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,g=r*d,v=o*u,m=o*d,f=a*d,x=l*c,M=l*u,_=l*d,I=n.x,C=n.y,P=n.z;return s[0]=(1-(v+f))*I,s[1]=(p+_)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(p-_)*C,s[5]=(1-(h+f))*C,s[6]=(m+x)*C,s[7]=0,s[8]=(g+M)*P,s[9]=(m-x)*P,s[10]=(1-(h+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=yi.set(s[0],s[1],s[2]).length();const o=yi.set(s[4],s[5],s[6]).length(),a=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const c=1/r,u=1/o,d=1/a;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=u,Qe.elements[5]*=u,Qe.elements[6]*=u,Qe.elements[8]*=d,Qe.elements[9]*=d,Qe.elements[10]*=d,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=bn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s);let p,g;if(a===bn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===lr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=bn){const l=this.elements,c=1/(e-t),u=1/(n-s),d=1/(o-r),h=(e+t)*c,p=(n+s)*u;let g,v;if(a===bn)g=(o+r)*d,v=-2*d;else if(a===lr)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yi=new T,Qe=new pe,Fh=new T(0,0,0),Oh=new T(1,1,1),In=new T,zs=new T,ke=new T,Pa=new pe,La=new As;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return La.setFromEuler(this),this.setFromQuaternion(La,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Wl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zh=0;const Da=new T,Si=new As,mn=new pe,Bs=new T,as=new T,Bh=new T,kh=new As,Ia=new T(1,0,0),Ua=new T(0,1,0),Na=new T(0,0,1),Fa={type:"added"},Gh={type:"removed"},bi={type:"childadded",child:null},Tr={type:"childremoved",child:null};class Te extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new T,e=new hn,n=new As,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new qt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(Ia,t)}rotateY(t){return this.rotateOnAxis(Ua,t)}rotateZ(t){return this.rotateOnAxis(Na,t)}translateOnAxis(t,e){return Da.copy(t).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ia,t)}translateY(t){return this.translateOnAxis(Ua,t)}translateZ(t){return this.translateOnAxis(Na,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(as,Bs,this.up):mn.lookAt(Bs,as,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(mn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fa),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gh),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fa),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,Bh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,kh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new T(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new T,gn=new T,Ar=new T,vn=new T,wi=new T,Ei=new T,Oa=new T,Cr=new T,Rr=new T,Pr=new T,Lr=new ce,Dr=new ce,Ir=new ce;class en{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),gn.subVectors(n,e),Ar.subVectors(t,e);const o=tn.dot(tn),a=tn.dot(gn),l=tn.dot(Ar),c=gn.dot(gn),u=gn.dot(Ar),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Lr.setScalar(0),Dr.setScalar(0),Ir.setScalar(0),Lr.fromBufferAttribute(t,e),Dr.fromBufferAttribute(t,n),Ir.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lr,r.x),o.addScaledVector(Dr,r.y),o.addScaledVector(Ir,r.z),o}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),gn.subVectors(t,e),tn.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),tn.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;wi.subVectors(s,n),Ei.subVectors(r,n),Cr.subVectors(t,n);const l=wi.dot(Cr),c=Ei.dot(Cr);if(l<=0&&c<=0)return e.copy(n);Rr.subVectors(t,s);const u=wi.dot(Rr),d=Ei.dot(Rr);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(wi,o);Pr.subVectors(t,r);const p=wi.dot(Pr),g=Ei.dot(Pr);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ei,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Oa.subVectors(r,s),a=(d-u)/(d-u+(p-g)),e.copy(s).addScaledVector(Oa,a);const f=1/(m+v+h);return o=v*f,a=h*f,e.copy(n).addScaledVector(wi,o).addScaledVector(Ei,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Ur(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=sa(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ur(o,r,t+1/3),this.g=Ur(o,r,t),this.b=Ur(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=Xl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return te.fromWorkingColorSpace(Ce.copy(this),t),Math.round(we(Ce.r*255,0,255))*65536+Math.round(we(Ce.g*255,0,255))*256+Math.round(we(Ce.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Fe){te.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Un),this.setHSL(Un.h+t,Un.s+e,Un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Un),t.getHSL(ks);const n=ms(Un.h,ks.h,e),s=ms(Un.s,ks.s,e),r=ms(Un.l,ks.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new kt;kt.NAMES=Xl;let Hh=0;class Rs extends Ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=fi(),this.name="",this.blending=Oi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=no,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eo&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ve extends Rs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new T,Gs=new Q;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ma,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ma&&(t.usage=this.usage),t}}class ql extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yl extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vh=0;const $e=new pe,Nr=new Te,Ti=new T,Ge=new Cs,ls=new Cs,be=new T;class Pe extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gl(t)?Yl:ql)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return Nr.lookAt(t),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Ge.min,ls.min),Ge.expandByPoint(be),be.addVectors(Ge.max,ls.max),Ge.expandByPoint(be)):(Ge.expandByPoint(ls.min),Ge.expandByPoint(ls.max))}Ge.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)be.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(t,c),be.add(Ti)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new T,l[E]=new T;const c=new T,u=new T,d=new T,h=new Q,p=new Q,g=new Q,v=new T,m=new T;function f(E,S,y){c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[E].add(v),a[S].add(v),a[y].add(v),l[E].add(m),l[S].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let E=0,S=x.length;E<S;++E){const y=x[E],R=y.start,B=y.count;for(let F=R,V=R+B;F<V;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new T,_=new T,I=new T,C=new T;function P(E){I.fromBufferAttribute(s,E),C.copy(I);const S=a[E];M.copy(S),M.sub(I.multiplyScalar(I.dot(S))).normalize(),_.crossVectors(C,S);const R=_.dot(l[E])<0?-1:1;o.setXYZW(E,M.x,M.y,M.z,R)}for(let E=0,S=x.length;E<S;++E){const y=x[E],R=y.start,B=y.count;for(let F=R,V=R+B;F<V;F+=3)P(t.getX(F+0)),P(t.getX(F+1)),P(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,u=new T,d=new T;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new cn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const za=new pe,Kn=new Nh,Hs=new ra,Ba=new T,Vs=new T,Ws=new T,Xs=new T,Fr=new T,qs=new T,ka=new T,Ys=new T;class D extends Te{constructor(t=new Pe,e=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Fr.fromBufferAttribute(d,t),o?qs.addScaledVector(Fr,u):qs.addScaledVector(Fr.sub(e),u))}e.add(qs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(Hs.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Hs,Ba)===null||Kn.origin.distanceToSquared(Ba)>(t.far-t.near)**2))&&(za.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(za),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,I=M;_<I;_+=3){const C=a.getX(_),P=a.getX(_+1),E=a.getX(_+2);s=$s(this,f,t,n,c,u,d,C,P,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=$s(this,o,t,n,c,u,d,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,I=M;_<I;_+=3){const C=_,P=_+1,E=_+2;s=$s(this,f,t,n,c,u,d,C,P,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=m,M=m+1,_=m+2;s=$s(this,o,t,n,c,u,d,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Wh(i,t,e,n,s,r,o,a){let l;if(t.side===Re?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Gn,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:i}}function $s(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Vs),i.getVertexPosition(l,Ws),i.getVertexPosition(c,Xs);const u=Wh(i,t,e,n,Vs,Ws,Xs,ka);if(u){const d=new T;en.getBarycoord(ka,Vs,Ws,Xs,d),s&&(u.uv=en.getInterpolatedAttribute(s,a,l,c,d,new Q)),r&&(u.uv1=en.getInterpolatedAttribute(r,a,l,c,d,new Q)),o&&(u.normal=en.getInterpolatedAttribute(o,a,l,c,d,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new T,materialIndex:0};en.getNormal(Vs,Ws,Xs,h.normal),u.face=h,u.barycoord=d}return u}class Hn extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(d,2));function g(v,m,f,x,M,_,I,C,P,E,S){const y=_/P,R=I/E,B=_/2,F=I/2,V=C/2,q=P+1,X=E+1;let tt=0,W=0;const lt=new T;for(let dt=0;dt<X;dt++){const Mt=dt*R-F;for(let Nt=0;Nt<q;Nt++){const Qt=Nt*y-B;lt[v]=Qt*x,lt[m]=Mt*M,lt[f]=V,c.push(lt.x,lt.y,lt.z),lt[v]=0,lt[m]=0,lt[f]=C>0?1:-1,u.push(lt.x,lt.y,lt.z),d.push(Nt/P),d.push(1-dt/E),tt+=1}}for(let dt=0;dt<E;dt++)for(let Mt=0;Mt<P;Mt++){const Nt=h+Mt+q*dt,Qt=h+Mt+q*(dt+1),H=h+(Mt+1)+q*(dt+1),st=h+(Mt+1)+q*dt;l.push(Nt,Qt,st),l.push(Qt,H,st),W+=6}a.addGroup(p,W,S),p+=W,h+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=Yi(i[e]);for(const s in n)t[s]=n[s]}return t}function Xh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $l(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const qh={clone:Yi,merge:De};var Yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Rs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yh,this.fragmentShader=$h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=Xh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zl extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new T,Ga=new Q,Ha=new Q;class He extends Zl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Ga,Ha),e.subVectors(Ha,Ga)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ci=1;class Zh extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(Ai,Ci,t,e);s.layers=this.layers,this.add(s);const r=new He(Ai,Ci,t,e);r.layers=this.layers,this.add(r);const o=new He(Ai,Ci,t,e);o.layers=this.layers,this.add(o);const a=new He(Ai,Ci,t,e);a.layers=this.layers,this.add(a);const l=new He(Ai,Ci,t,e);l.layers=this.layers,this.add(l);const c=new He(Ai,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kl extends Ue{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Vi,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kh extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hn(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Bn});r.uniforms.tEquirect.value=e;const o=new D(s,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=ln),new Zh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Or=new T,Jh=new T,jh=new qt;class ei{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Or.subVectors(n,e).cross(Jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Or),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jh.getNormalMatrix(t),s=this.coplanarPoint(Or).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new ra,Zs=new T;class oa{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],x=s[13],M=s[14],_=s[15];if(n[0].setComponents(l-r,h-c,m-p,_-f).normalize(),n[1].setComponents(l+r,h+c,m+p,_+f).normalize(),n[2].setComponents(l+o,h+u,m+g,_+x).normalize(),n[3].setComponents(l-o,h-u,m-g,_-x).normalize(),n[4].setComponents(l-a,h-d,m-v,_-M).normalize(),e===bn)n[5].setComponents(l+a,h+d,m+v,_+M).normalize();else if(e===lr)n[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Zs.x=s.normal.x>0?t.max.x:t.min.x,Zs.y=s.normal.y>0?t.max.y:t.min.y,Zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Qh(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ie extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=t/a,h=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const x=f*h-o;for(let M=0;M<c;M++){const _=M*d-r;g.push(_,-x,0),v.push(0,0,1),m.push(M/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const M=x+c*f,_=x+c*(f+1),I=x+1+c*(f+1),C=x+1+c*f;p.push(M,_,C),p.push(_,I,C)}this.setIndex(p),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.width,t.height,t.widthSegments,t.heightSegments)}}var tu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eu=`#ifdef USE_ALPHAHASH
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
#endif`,nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,su=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
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
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lu=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,du=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fu=`#ifdef USE_IRIDESCENCE
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
#endif`,pu=`#ifdef USE_BUMPMAP
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
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bu=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,wu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eu=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Du=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Nu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ku=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gu=`#ifdef USE_GRADIENTMAP
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
}`,Hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xu=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,qu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ju=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ju=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qu=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,td=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,id=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cd=`#if defined( USE_POINTS_UV )
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
#endif`,hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,md=`#ifdef USE_MORPHTARGETS
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
#endif`,gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sd=`#ifdef USE_NORMALMAP
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
#endif`,bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ad=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ld=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ud=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kd=`#ifdef USE_SKINNING
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
#endif`,Gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hd=`#ifdef USE_SKINNING
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
#endif`,Vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yd=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$d=`#ifdef USE_TRANSMISSION
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tf=`uniform sampler2D t2D;
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
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`#include <common>
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
}`,af=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lf=`#define DISTANCE
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
}`,cf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`uniform float scale;
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
}`,ff=`uniform vec3 diffuse;
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
}`,pf=`#include <common>
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
}`,mf=`uniform vec3 diffuse;
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
}`,gf=`#define LAMBERT
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
}`,vf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_f=`#define MATCAP
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
}`,xf=`#define MATCAP
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
}`,Mf=`#define NORMAL
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
}`,yf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sf=`#define PHONG
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
}`,bf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wf=`#define STANDARD
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
}`,Ef=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Tf=`#define TOON
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
}`,Af=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Cf=`uniform float size;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Pf=`#include <common>
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
}`,Lf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Df=`uniform float rotation;
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
}`,If=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:tu,alphahash_pars_fragment:eu,alphamap_fragment:nu,alphamap_pars_fragment:iu,alphatest_fragment:su,alphatest_pars_fragment:ru,aomap_fragment:ou,aomap_pars_fragment:au,batching_pars_vertex:lu,batching_vertex:cu,begin_vertex:hu,beginnormal_vertex:uu,bsdfs:du,iridescence_fragment:fu,bumpmap_pars_fragment:pu,clipping_planes_fragment:mu,clipping_planes_pars_fragment:gu,clipping_planes_pars_vertex:vu,clipping_planes_vertex:_u,color_fragment:xu,color_pars_fragment:Mu,color_pars_vertex:yu,color_vertex:Su,common:bu,cube_uv_reflection_fragment:wu,defaultnormal_vertex:Eu,displacementmap_pars_vertex:Tu,displacementmap_vertex:Au,emissivemap_fragment:Cu,emissivemap_pars_fragment:Ru,colorspace_fragment:Pu,colorspace_pars_fragment:Lu,envmap_fragment:Du,envmap_common_pars_fragment:Iu,envmap_pars_fragment:Uu,envmap_pars_vertex:Nu,envmap_physical_pars_fragment:qu,envmap_vertex:Fu,fog_vertex:Ou,fog_pars_vertex:zu,fog_fragment:Bu,fog_pars_fragment:ku,gradientmap_pars_fragment:Gu,lightmap_pars_fragment:Hu,lights_lambert_fragment:Vu,lights_lambert_pars_fragment:Wu,lights_pars_begin:Xu,lights_toon_fragment:Yu,lights_toon_pars_fragment:$u,lights_phong_fragment:Zu,lights_phong_pars_fragment:Ku,lights_physical_fragment:Ju,lights_physical_pars_fragment:ju,lights_fragment_begin:Qu,lights_fragment_maps:td,lights_fragment_end:ed,logdepthbuf_fragment:nd,logdepthbuf_pars_fragment:id,logdepthbuf_pars_vertex:sd,logdepthbuf_vertex:rd,map_fragment:od,map_pars_fragment:ad,map_particle_fragment:ld,map_particle_pars_fragment:cd,metalnessmap_fragment:hd,metalnessmap_pars_fragment:ud,morphinstance_vertex:dd,morphcolor_vertex:fd,morphnormal_vertex:pd,morphtarget_pars_vertex:md,morphtarget_vertex:gd,normal_fragment_begin:vd,normal_fragment_maps:_d,normal_pars_fragment:xd,normal_pars_vertex:Md,normal_vertex:yd,normalmap_pars_fragment:Sd,clearcoat_normal_fragment_begin:bd,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:Td,opaque_fragment:Ad,packing:Cd,premultiplied_alpha_fragment:Rd,project_vertex:Pd,dithering_fragment:Ld,dithering_pars_fragment:Dd,roughnessmap_fragment:Id,roughnessmap_pars_fragment:Ud,shadowmap_pars_fragment:Nd,shadowmap_pars_vertex:Fd,shadowmap_vertex:Od,shadowmask_pars_fragment:zd,skinbase_vertex:Bd,skinning_pars_vertex:kd,skinning_vertex:Gd,skinnormal_vertex:Hd,specularmap_fragment:Vd,specularmap_pars_fragment:Wd,tonemapping_fragment:Xd,tonemapping_pars_fragment:qd,transmission_fragment:Yd,transmission_pars_fragment:$d,uv_pars_fragment:Zd,uv_pars_vertex:Kd,uv_vertex:Jd,worldpos_vertex:jd,background_vert:Qd,background_frag:tf,backgroundCube_vert:ef,backgroundCube_frag:nf,cube_vert:sf,cube_frag:rf,depth_vert:of,depth_frag:af,distanceRGBA_vert:lf,distanceRGBA_frag:cf,equirect_vert:hf,equirect_frag:uf,linedashed_vert:df,linedashed_frag:ff,meshbasic_vert:pf,meshbasic_frag:mf,meshlambert_vert:gf,meshlambert_frag:vf,meshmatcap_vert:_f,meshmatcap_frag:xf,meshnormal_vert:Mf,meshnormal_frag:yf,meshphong_vert:Sf,meshphong_frag:bf,meshphysical_vert:wf,meshphysical_frag:Ef,meshtoon_vert:Tf,meshtoon_frag:Af,points_vert:Cf,points_frag:Rf,shadow_vert:Pf,shadow_frag:Lf,sprite_vert:Df,sprite_frag:If},mt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},an={basic:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:De([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:De([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:De([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:De([mt.points,mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:De([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:De([mt.common,mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:De([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:De([mt.sprite,mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:De([mt.common,mt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:De([mt.lights,mt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};an.physical={uniforms:De([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Ks={r:0,b:0,g:0},jn=new hn,Uf=new pe;function Nf(i,t,e,n,s,r,o){const a=new kt(0);let l=r===!0?0:1,c,u,d=null,h=0,p=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function v(x){let M=!1;const _=g(x);_===null?f(a,l):_&&_.isColor&&(f(_,1),M=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const _=g(M);_&&(_.isCubeTexture||_.mapping===dr)?(u===void 0&&(u=new D(new Hn(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Yi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),jn.copy(M.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Uf.makeRotationFromEuler(jn)),u.material.toneMapped=te.getTransfer(_.colorSpace)!==le,(d!==_||h!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,p=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new D(new Ie(2,2),new Tn({name:"BackgroundMaterial",uniforms:Yi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=te.getTransfer(_.colorSpace)!==le,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,M){x.getRGB(Ks,$l(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:v,addToRenderList:m}}function Ff(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(y,R,B,F,V){let q=!1;const X=d(F,B,R);r!==X&&(r=X,c(r.object)),q=p(y,F,B,V),q&&g(y,F,B,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(y,R,B,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,R,B){const F=B.wireframe===!0;let V=n[y.id];V===void 0&&(V={},n[y.id]=V);let q=V[R.id];q===void 0&&(q={},V[R.id]=q);let X=q[F];return X===void 0&&(X=h(l()),q[F]=X),X}function h(y){const R=[],B=[],F=[];for(let V=0;V<e;V++)R[V]=0,B[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,R,B,F){const V=r.attributes,q=R.attributes;let X=0;const tt=B.getAttributes();for(const W in tt)if(tt[W].location>=0){const dt=V[W];let Mt=q[W];if(Mt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor)),dt===void 0||dt.attribute!==Mt||Mt&&dt.data!==Mt.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function g(y,R,B,F){const V={},q=R.attributes;let X=0;const tt=B.getAttributes();for(const W in tt)if(tt[W].location>=0){let dt=q[W];dt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));const Mt={};Mt.attribute=dt,dt&&dt.data&&(Mt.data=dt.data),V[W]=Mt,X++}r.attributes=V,r.attributesNum=X,r.index=F}function v(){const y=r.newAttributes;for(let R=0,B=y.length;R<B;R++)y[R]=0}function m(y){f(y,0)}function f(y,R){const B=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;B[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),V[y]!==R&&(i.vertexAttribDivisor(y,R),V[y]=R)}function x(){const y=r.newAttributes,R=r.enabledAttributes;for(let B=0,F=R.length;B<F;B++)R[B]!==y[B]&&(i.disableVertexAttribArray(B),R[B]=0)}function M(y,R,B,F,V,q,X){X===!0?i.vertexAttribIPointer(y,R,B,V,q):i.vertexAttribPointer(y,R,B,F,V,q)}function _(y,R,B,F){v();const V=F.attributes,q=B.getAttributes(),X=R.defaultAttributeValues;for(const tt in q){const W=q[tt];if(W.location>=0){let lt=V[tt];if(lt===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor)),lt!==void 0){const dt=lt.normalized,Mt=lt.itemSize,Nt=t.get(lt);if(Nt===void 0)continue;const Qt=Nt.buffer,H=Nt.type,st=Nt.bytesPerElement,Ct=H===i.INT||H===i.UNSIGNED_INT||lt.gpuType===jo;if(lt.isInterleavedBufferAttribute){const ct=lt.data,It=ct.stride,yt=lt.offset;if(ct.isInstancedInterleavedBuffer){for(let Pt=0;Pt<W.locationSize;Pt++)f(W.location+Pt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Pt=0;Pt<W.locationSize;Pt++)m(W.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Pt=0;Pt<W.locationSize;Pt++)M(W.location+Pt,Mt/W.locationSize,H,dt,It*st,(yt+Mt/W.locationSize*Pt)*st,Ct)}else{if(lt.isInstancedBufferAttribute){for(let ct=0;ct<W.locationSize;ct++)f(W.location+ct,lt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ct=0;ct<W.locationSize;ct++)m(W.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let ct=0;ct<W.locationSize;ct++)M(W.location+ct,Mt/W.locationSize,H,dt,Mt*st,Mt/W.locationSize*ct*st,Ct)}}else if(X!==void 0){const dt=X[tt];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(W.location,dt);break;case 3:i.vertexAttrib3fv(W.location,dt);break;case 4:i.vertexAttrib4fv(W.location,dt);break;default:i.vertexAttrib1fv(W.location,dt)}}}}x()}function I(){E();for(const y in n){const R=n[y];for(const B in R){const F=R[B];for(const V in F)u(F[V].object),delete F[V];delete R[B]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const B in R){const F=R[B];for(const V in F)u(F[V].object),delete F[V];delete R[B]}delete n[y.id]}function P(y){for(const R in n){const B=n[R];if(B[y.id]===void 0)continue;const F=B[y.id];for(const V in F)u(F[V].object),delete F[V];delete B[y.id]}}function E(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Of(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];e.update(p,n,1)}function l(c,u,d,h){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==nn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const E=P===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==En&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Sn&&!E)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:I,maxSamples:C}}function Bf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ei,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,M=x*4;let _=f.clippingState||null;l.value=_,_=u(g,h,M,p);for(let I=0;I!==M;++I)_[I]=e[I];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,_=p;M!==v;++M,_+=4)o.copy(d[M]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function kf(i){let t=new WeakMap;function e(o,a){return a===ho?o.mapping=Vi:a===uo&&(o.mapping=Wi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ho||a===uo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class jl extends Zl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ui=4,Va=[.125,.215,.35,.446,.526,.582],si=20,zr=new jl,Wa=new kt;let Br=null,kr=0,Gr=0,Hr=!1;const ni=(1+Math.sqrt(5))/2,Ri=1/ni,Xa=[new T(-ni,Ri,0),new T(ni,Ri,0),new T(-Ri,0,ni),new T(Ri,0,ni),new T(0,ni,-Ri),new T(0,ni,Ri),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class ko{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Br=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Br,kr,Gr),this._renderer.xr.enabled=Hr,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Br=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Ts,format:nn,colorSpace:Ki,depthBuffer:!1},s=qa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gf(r)),this._blurMaterial=Hf(r,t,e)}return s}_compileMaterial(t){const e=new D(this._lodPlanes[0],t);this._renderer.compile(e,zr)}_sceneToCubeUV(t,e,n,s){const a=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Wa),u.toneMapping=kn,u.autoClear=!1;const p=new ve({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new D(new Hn,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Wa),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const M=this._cubeSize;Js(s,x*M,f>2?M:0,M,M),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Vi||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new D(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,zr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xa[(s-r-1)%Xa.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new D(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*si-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):si;m>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const f=[];let x=0;for(let P=0;P<si;++P){const E=P/v,S=Math.exp(-E*E/2);f.push(S),P===0?x+=S:P<m&&(x+=2*S)}for(let P=0;P<f.length;P++)f[P]=f[P]/x;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const _=this._sizeLods[s],I=3*_*(s>M-Ui?s-M+Ui:0),C=4*(this._cubeSize-_);Js(e,I,C,3*_,2*_),l.setRenderTarget(e),l.render(d,zr)}}function Gf(i){const t=[],e=[],n=[];let s=i;const r=i-Ui+1+Va.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ui?l=Va[o-i+Ui-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,m=2,f=1,x=new Float32Array(v*g*p),M=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,E=C>2?0:-1,S=[P,E,0,P+2/3,E,0,P+2/3,E+1,0,P,E,0,P+2/3,E+1,0,P,E+1,0];x.set(S,v*g*C),M.set(h,m*g*C);const y=[C,C,C,C,C,C];_.set(y,f*g*C)}const I=new Pe;I.setAttribute("position",new cn(x,v)),I.setAttribute("uv",new cn(M,m)),I.setAttribute("faceIndex",new cn(_,f)),t.push(I),s>Ui&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qa(i,t,e){const n=new ci(i,t,e);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hf(i,t,e){const n=new Float32Array(si),s=new T(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ya(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function $a(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ho||l===uo,u=l===Vi||l===Wi;if(c||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new ko(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new ko(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Wf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xf(i,t,e,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let M=0,_=x.length;M<_;M+=3){const I=x[M+0],C=x[M+1],P=x[M+2];h.push(I,C,C,P,P,I)}}else if(g!==void 0){const x=g.array;v=g.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const I=M+0,C=M+1,P=M+2;h.push(I,C,C,P,P,I)}}else return;const m=new(Gl(h)?Yl:ql)(h,1);m.version=v;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function qf(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){i.drawElements(n,p,r,h*o),e.update(p,n,1)}function c(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,h*o,g),e.update(p,n,g))}function u(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(h,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,v,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*v[x];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Yf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $f(i,t,e){const n=new WeakMap,s=new ce;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let y=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let I=a.attributes.position.count*_,C=1;I>t.maxTextureSize&&(C=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const P=new Float32Array(I*C*4*d),E=new Vl(P,I,C,d);E.type=Sn,E.needsUpdate=!0;const S=_*4;for(let R=0;R<d;R++){const B=f[R],F=x[R],V=M[R],q=I*C*4*R;for(let X=0;X<B.count;X++){const tt=X*S;g===!0&&(s.fromBufferAttribute(B,X),P[q+tt+0]=s.x,P[q+tt+1]=s.y,P[q+tt+2]=s.z,P[q+tt+3]=0),v===!0&&(s.fromBufferAttribute(F,X),P[q+tt+4]=s.x,P[q+tt+5]=s.y,P[q+tt+6]=s.z,P[q+tt+7]=0),m===!0&&(s.fromBufferAttribute(V,X),P[q+tt+8]=s.x,P[q+tt+9]=s.y,P[q+tt+10]=s.z,P[q+tt+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:E,size:new Q(I,C)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Zf(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Ql extends Ue{constructor(t,e,n,s,r,o,a,l,c,u=zi){if(u!==zi&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zi&&(n=li),n===void 0&&u===qi&&(n=Xi),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tc=new Ue,Za=new Ql(1,1),ec=new Vl,nc=new Ih,ic=new Kl,Ka=[],Ja=[],ja=new Float32Array(16),Qa=new Float32Array(9),tl=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ka[s];if(r===void 0&&(r=new Float32Array(s),Ka[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pr(i,t){let e=Ja[t];e===void 0&&(e=new Int32Array(t),Ja[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function Qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function tp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;tl.set(n),i.uniformMatrix2fv(this.addr,!1,tl),Se(e,n)}}function ep(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Qa.set(n),i.uniformMatrix3fv(this.addr,!1,Qa),Se(e,n)}}function np(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;ja.set(n),i.uniformMatrix4fv(this.addr,!1,ja),Se(e,n)}}function ip(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function ap(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function up(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Za.compareFunction=kl,r=Za):r=tc,e.setTexture2D(t||r,s)}function dp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nc,s)}function fp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ic,s)}function pp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ec,s)}function mp(i){switch(i){case 5126:return Kf;case 35664:return Jf;case 35665:return jf;case 35666:return Qf;case 35674:return tp;case 35675:return ep;case 35676:return np;case 5124:case 35670:return ip;case 35667:case 35671:return sp;case 35668:case 35672:return rp;case 35669:case 35673:return op;case 5125:return ap;case 36294:return lp;case 36295:return cp;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return pp}}function gp(i,t){i.uniform1fv(this.addr,t)}function vp(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function _p(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function xp(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Mp(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yp(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sp(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bp(i,t){i.uniform1iv(this.addr,t)}function wp(i,t){i.uniform2iv(this.addr,t)}function Ep(i,t){i.uniform3iv(this.addr,t)}function Tp(i,t){i.uniform4iv(this.addr,t)}function Ap(i,t){i.uniform1uiv(this.addr,t)}function Cp(i,t){i.uniform2uiv(this.addr,t)}function Rp(i,t){i.uniform3uiv(this.addr,t)}function Pp(i,t){i.uniform4uiv(this.addr,t)}function Lp(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||tc,r[o])}function Dp(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nc,r[o])}function Ip(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ic,r[o])}function Up(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ec,r[o])}function Np(i){switch(i){case 5126:return gp;case 35664:return vp;case 35665:return _p;case 35666:return xp;case 35674:return Mp;case 35675:return yp;case 35676:return Sp;case 5124:case 35670:return bp;case 35667:case 35671:return wp;case 35668:case 35672:return Ep;case 35669:case 35673:return Tp;case 5125:return Ap;case 36294:return Cp;case 36295:return Rp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Up}}class Fp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mp(e.type)}}class Op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Np(e.type)}}class zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function el(i,t){i.seq.push(t),i.map[t.id]=t}function Bp(i,t,e){const n=i.name,s=n.length;for(Vr.lastIndex=0;;){const r=Vr.exec(n),o=Vr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){el(e,c===void 0?new Fp(a,i,t):new Op(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new zp(a),el(e,d)),e=d}}}class ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Bp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function nl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const kp=37297;let Gp=0;function Hp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const il=new qt;function Vp(i){te._getMatrix(il,te.workingColorSpace,i);const t=`mat3( ${il.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case fr:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Hp(i.getShaderSource(t),o)}else return s}function Wp(i,t){const e=Vp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xp(i,t){let e;switch(t){case qc:e="Linear";break;case Yc:e="Reinhard";break;case $c:e="Cineon";break;case Al:e="ACESFilmic";break;case Kc:e="AgX";break;case Jc:e="Neutral";break;case Zc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const js=new T;function qp(){te.getLuminanceCoefficients(js);const i=js.x.toFixed(4),t=js.y.toFixed(4),e=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function $p(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ds(i){return i!==""}function rl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ol(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(i){return i.replace(Kp,jp)}const Jp=new Map;function jp(i,t){let e=Yt[t];if(e===void 0){const n=Jp.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Go(e)}const Qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(i){return i.replace(Qp,t0)}function t0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ll(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function e0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===El?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function n0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Wi:t="ENVMAP_TYPE_CUBE";break;case dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function s0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tl:t="ENVMAP_BLENDING_MULTIPLY";break;case Wc:t="ENVMAP_BLENDING_MIX";break;case Xc:t="ENVMAP_BLENDING_ADD";break}return t}function r0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function o0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=e0(e),c=n0(e),u=i0(e),d=s0(e),h=r0(e),p=Yp(e),g=$p(r),v=s.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),f.length>0&&(f+=`
`)):(m=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),f=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==kn?Xp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Wp("linearToOutputTexel",e.outputColorSpace),qp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),o=Go(o),o=rl(o,e),o=ol(o,e),a=Go(a),a=rl(a,e),a=ol(a,e),o=al(o),a=al(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=x+m+o,_=x+f+a,I=nl(s,s.VERTEX_SHADER,M),C=nl(s,s.FRAGMENT_SHADER,_);s.attachShader(v,I),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(R){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(I).trim(),V=s.getShaderInfoLog(C).trim();let q=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,C);else{const tt=sl(s,I,"vertex"),W=sl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+tt+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||V==="")&&(X=!1);X&&(R.diagnostics={runnable:q,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:f}})}s.deleteShader(I),s.deleteShader(C),E=new ar(s,v),S=Zp(s,v)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,kp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=C,this}let a0=0;class l0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new c0(t),e.set(t,n)),n}}class c0{constructor(t){this.id=a0++,this.code=t,this.usedTimes=0}}function h0(i,t,e,n,s,r,o){const a=new Wl,l=new l0,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,R,B,F){const V=B.fog,q=F.geometry,X=S.isMeshStandardMaterial?B.environment:null,tt=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),W=tt&&tt.mapping===dr?tt.image.height:null,lt=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Mt=dt!==void 0?dt.length:0;let Nt=0;q.morphAttributes.position!==void 0&&(Nt=1),q.morphAttributes.normal!==void 0&&(Nt=2),q.morphAttributes.color!==void 0&&(Nt=3);let Qt,H,st,Ct;if(lt){const Kt=an[lt];Qt=Kt.vertexShader,H=Kt.fragmentShader}else Qt=S.vertexShader,H=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),Ct=l.getFragmentShaderID(S);const ct=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),yt=F.isInstancedMesh===!0,Pt=F.isBatchedMesh===!0,Xt=!!S.map,J=!!S.matcap,at=!!tt,L=!!S.aoMap,Lt=!!S.lightMap,it=!!S.bumpMap,St=!!S.normalMap,rt=!!S.displacementMap,Ot=!!S.emissiveMap,gt=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,G=S.clearcoat>0,$=S.dispersion>0,et=S.iridescence>0,K=S.sheen>0,Dt=S.transmission>0,pt=b&&!!S.anisotropyMap,bt=G&&!!S.clearcoatMap,Zt=G&&!!S.clearcoatNormalMap,ot=G&&!!S.clearcoatRoughnessMap,wt=et&&!!S.iridescenceMap,Ft=et&&!!S.iridescenceThicknessMap,Gt=K&&!!S.sheenColorMap,Et=K&&!!S.sheenRoughnessMap,$t=!!S.specularMap,Wt=!!S.specularColorMap,re=!!S.specularIntensityMap,N=Dt&&!!S.transmissionMap,ft=Dt&&!!S.thicknessMap,Y=!!S.gradientMap,j=!!S.alphaMap,vt=S.alphaTest>0,_t=!!S.alphaHash,Vt=!!S.extensions;let ue=kn;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ue=i.toneMapping);const xe={shaderID:lt,shaderType:S.type,shaderName:S.name,vertexShader:Qt,fragmentShader:H,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:Ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Pt,batchingColor:Pt&&F._colorsTexture!==null,instancing:yt,instancingColor:yt&&F.instanceColor!==null,instancingMorph:yt&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ki,alphaToCoverage:!!S.alphaToCoverage,map:Xt,matcap:J,envMap:at,envMapMode:at&&tt.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:Lt,bumpMap:it,normalMap:St,displacementMap:h&&rt,emissiveMap:Ot,normalMapObjectSpace:St&&S.normalMapType===eh,normalMapTangentSpace:St&&S.normalMapType===Bl,metalnessMap:gt,roughnessMap:A,anisotropy:b,anisotropyMap:pt,clearcoat:G,clearcoatMap:bt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:ot,dispersion:$,iridescence:et,iridescenceMap:wt,iridescenceThicknessMap:Ft,sheen:K,sheenColorMap:Gt,sheenRoughnessMap:Et,specularMap:$t,specularColorMap:Wt,specularIntensityMap:re,transmission:Dt,transmissionMap:N,thicknessMap:ft,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Oi&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:vt,alphaHash:_t,combine:S.combine,mapUv:Xt&&v(S.map.channel),aoMapUv:L&&v(S.aoMap.channel),lightMapUv:Lt&&v(S.lightMap.channel),bumpMapUv:it&&v(S.bumpMap.channel),normalMapUv:St&&v(S.normalMap.channel),displacementMapUv:rt&&v(S.displacementMap.channel),emissiveMapUv:Ot&&v(S.emissiveMap.channel),metalnessMapUv:gt&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:pt&&v(S.anisotropyMap.channel),clearcoatMapUv:bt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&v(S.sheenRoughnessMap.channel),specularMapUv:$t&&v(S.specularMap.channel),specularColorMapUv:Wt&&v(S.specularColorMap.channel),specularIntensityMapUv:re&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:ft&&v(S.thicknessMap.channel),alphaMapUv:j&&v(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(St||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(Xt||j),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:It,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Nt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:Xt&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===le,decodeVideoTextureEmissive:Ot&&S.emissiveMap.isVideoTexture===!0&&te.getTransfer(S.emissiveMap.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ke,flipSided:S.side===Re,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Vt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&S.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)y.push(R),y.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(x(y,S),M(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function x(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const y=g[S.type];let R;if(y){const B=an[y];R=qh.clone(B.uniforms)}else R=S.uniforms;return R}function I(S,y){let R;for(let B=0,F=u.length;B<F;B++){const V=u[B];if(V.cacheKey===y){R=V,++R.usedTimes;break}}return R===void 0&&(R=new o0(i,y,S,r),u.push(R)),R}function C(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function P(S){l.remove(S)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:I,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:E}}function u0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function d0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function cl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,h,p,g,v,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),t++,f}function a(d,h,p,g,v,m){const f=o(d,h,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,h,p,g,v,m){const f=o(d,h,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,h){e.length>1&&e.sort(d||d0),n.length>1&&n.sort(h||cl),s.length>1&&s.sort(h||cl)}function u(){for(let d=t,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function f0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new hl,i.set(n,[o])):s>=r.length?(o=new hl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function p0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new kt};break;case"SpotLight":e={position:new T,direction:new T,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function m0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let g0=0;function v0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _0(i){const t=new p0,e=m0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new pe,o=new pe;function a(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,x=0,M=0,_=0,I=0,C=0,P=0;c.sort(v0);for(let S=0,y=c.length;S<y;S++){const R=c[S],B=R.color,F=R.intensity,V=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=B.r*F,d+=B.g*F,h+=B.b*F;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],F);P++}else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const tt=R.shadow,W=e.get(R);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=R.shadow.matrix,x++}n.directional[p]=X,p++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(B).multiplyScalar(F),X.distance=V,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[v]=X;const tt=R.shadow;if(R.map&&(n.spotLightMap[I]=R.map,I++,tt.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[v]=tt.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=q,_++}v++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(B).multiplyScalar(F),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=X,m++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const tt=R.shadow,W=e.get(R);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=X,g++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(F),X.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[f]=X,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const E=n.hash;(E.directionalLength!==p||E.pointLength!==g||E.spotLength!==v||E.rectAreaLength!==m||E.hemiLength!==f||E.numDirectionalShadows!==x||E.numPointShadows!==M||E.numSpotShadows!==_||E.numSpotMaps!==I||E.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,E.directionalLength=p,E.pointLength=g,E.spotLength=v,E.rectAreaLength=m,E.hemiLength=f,E.numDirectionalShadows=x,E.numPointShadows=M,E.numSpotShadows=_,E.numSpotMaps=I,E.numLightProbes=P,n.version=g0++)}function l(c,u){let d=0,h=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const M=c[f];if(M.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(M.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function ul(i){const t=new _0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function x0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ul(i),t.set(s,[a])):r>=o.length?(a=new ul(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class M0 extends Rs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class y0 extends Rs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const S0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w0(i,t,e){let n=new oa;const s=new Q,r=new Q,o=new ce,a=new M0({depthPacking:th}),l=new y0,c={},u=e.maxTextureSize,d={[Gn]:Re,[Re]:Gn,[Ke]:Ke},h=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:S0,fragmentShader:b0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new D(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let f=this.type;this.render=function(C,P,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Bn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=f!==_n&&this.type===_n,V=f===_n&&this.type!==_n;for(let q=0,X=C.length;q<X;q++){const tt=C[q],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const lt=W.getFrameExtents();if(s.multiply(lt),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,W.mapSize.y=r.y)),W.map===null||F===!0||V===!0){const Mt=this.type!==_n?{minFilter:sn,magFilter:sn}:{};W.map!==null&&W.map.dispose(),W.map=new ci(s.x,s.y,Mt),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const dt=W.getViewportCount();for(let Mt=0;Mt<dt;Mt++){const Nt=W.getViewport(Mt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),B.viewport(o),W.updateMatrices(tt,Mt),n=W.getFrustum(),_(P,E,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===_n&&x(W,E),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,R)};function x(C,P){const E=t.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ci(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,E,h,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,E,p,v,null)}function M(C,P,E,S){let y=null;const R=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)y=R;else if(y=E.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const B=y.uuid,F=P.uuid;let V=c[B];V===void 0&&(V={},c[B]=V);let q=V[F];q===void 0&&(q=y.clone(),V[F]=q,P.addEventListener("dispose",I)),y=q}if(y.visible=P.visible,y.wireframe=P.wireframe,S===_n?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:d[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=E}return y}function _(C,P,E,S,y){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===_n)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const F=t.update(C),V=C.material;if(Array.isArray(V)){const q=F.groups;for(let X=0,tt=q.length;X<tt;X++){const W=q[X],lt=V[W.materialIndex];if(lt&&lt.visible){const dt=M(C,lt,S,y);C.onBeforeShadow(i,C,P,E,F,dt,W),i.renderBufferDirect(E,null,F,dt,C,W),C.onAfterShadow(i,C,P,E,F,dt,W)}}}else if(V.visible){const q=M(C,V,S,y);C.onBeforeShadow(i,C,P,E,F,q,null),i.renderBufferDirect(E,null,F,q,C,null),C.onAfterShadow(i,C,P,E,F,q,null)}}const B=C.children;for(let F=0,V=B.length;F<V;F++)_(B[F],P,E,S,y)}function I(C){C.target.removeEventListener("dispose",I);for(const E in c){const S=c[E],y=C.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const E0={[io]:so,[ro]:lo,[oo]:co,[Hi]:ao,[so]:io,[lo]:ro,[co]:oo,[ao]:Hi};function T0(i,t){function e(){let N=!1;const ft=new ce;let Y=null;const j=new ce(0,0,0,0);return{setMask:function(vt){Y!==vt&&!N&&(i.colorMask(vt,vt,vt,vt),Y=vt)},setLocked:function(vt){N=vt},setClear:function(vt,_t,Vt,ue,xe){xe===!0&&(vt*=ue,_t*=ue,Vt*=ue),ft.set(vt,_t,Vt,ue),j.equals(ft)===!1&&(i.clearColor(vt,_t,Vt,ue),j.copy(ft))},reset:function(){N=!1,Y=null,j.set(-1,0,0,0)}}}function n(){let N=!1,ft=!1,Y=null,j=null,vt=null;return{setReversed:function(_t){if(ft!==_t){const Vt=t.get("EXT_clip_control");ft?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const ue=vt;vt=null,this.setClear(ue)}ft=_t},getReversed:function(){return ft},setTest:function(_t){_t?ct(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(_t){Y!==_t&&!N&&(i.depthMask(_t),Y=_t)},setFunc:function(_t){if(ft&&(_t=E0[_t]),j!==_t){switch(_t){case io:i.depthFunc(i.NEVER);break;case so:i.depthFunc(i.ALWAYS);break;case ro:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case ao:i.depthFunc(i.GEQUAL);break;case lo:i.depthFunc(i.GREATER);break;case co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=_t}},setLocked:function(_t){N=_t},setClear:function(_t){vt!==_t&&(ft&&(_t=1-_t),i.clearDepth(_t),vt=_t)},reset:function(){N=!1,Y=null,j=null,vt=null,ft=!1}}}function s(){let N=!1,ft=null,Y=null,j=null,vt=null,_t=null,Vt=null,ue=null,xe=null;return{setTest:function(Kt){N||(Kt?ct(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(Kt){ft!==Kt&&!N&&(i.stencilMask(Kt),ft=Kt)},setFunc:function(Kt,ze,qe){(Y!==Kt||j!==ze||vt!==qe)&&(i.stencilFunc(Kt,ze,qe),Y=Kt,j=ze,vt=qe)},setOp:function(Kt,ze,qe){(_t!==Kt||Vt!==ze||ue!==qe)&&(i.stencilOp(Kt,ze,qe),_t=Kt,Vt=ze,ue=qe)},setLocked:function(Kt){N=Kt},setClear:function(Kt){xe!==Kt&&(i.clearStencil(Kt),xe=Kt)},reset:function(){N=!1,ft=null,Y=null,j=null,vt=null,_t=null,Vt=null,ue=null,xe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,f=null,x=null,M=null,_=null,I=null,C=null,P=new kt(0,0,0),E=0,S=!1,y=null,R=null,B=null,F=null,V=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,tt=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=tt>=2);let lt=null,dt={};const Mt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Qt=new ce().fromArray(Mt),H=new ce().fromArray(Nt);function st(N,ft,Y,j){const vt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(N,_t),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<Y;Vt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(ft+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return _t}const Ct={};Ct[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(Hi),it(!1),St(ma),ct(i.CULL_FACE),L(Bn);function ct(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function It(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function yt(N,ft){return d[N]!==ft?(i.bindFramebuffer(N,ft),d[N]=ft,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ft),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Pt(N,ft){let Y=p,j=!1;if(N){Y=h.get(ft),Y===void 0&&(Y=[],h.set(ft,Y));const vt=N.textures;if(Y.length!==vt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Vt=vt.length;_t<Vt;_t++)Y[_t]=i.COLOR_ATTACHMENT0+_t;Y.length=vt.length,j=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,j=!0);j&&i.drawBuffers(Y)}function Xt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const J={[ii]:i.FUNC_ADD,[Ac]:i.FUNC_SUBTRACT,[Cc]:i.FUNC_REVERSE_SUBTRACT};J[Rc]=i.MIN,J[Pc]=i.MAX;const at={[Lc]:i.ZERO,[Dc]:i.ONE,[Ic]:i.SRC_COLOR,[eo]:i.SRC_ALPHA,[Bc]:i.SRC_ALPHA_SATURATE,[Oc]:i.DST_COLOR,[Nc]:i.DST_ALPHA,[Uc]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[zc]:i.ONE_MINUS_DST_COLOR,[Fc]:i.ONE_MINUS_DST_ALPHA,[kc]:i.CONSTANT_COLOR,[Gc]:i.ONE_MINUS_CONSTANT_COLOR,[Hc]:i.CONSTANT_ALPHA,[Vc]:i.ONE_MINUS_CONSTANT_ALPHA};function L(N,ft,Y,j,vt,_t,Vt,ue,xe,Kt){if(N===Bn){v===!0&&(It(i.BLEND),v=!1);return}if(v===!1&&(ct(i.BLEND),v=!0),N!==Tc){if(N!==m||Kt!==S){if((f!==ii||_!==ii)&&(i.blendEquation(i.FUNC_ADD),f=ii,_=ii),Kt)switch(N){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ga:i.blendFunc(i.ONE,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _a:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ga:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _a:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,M=null,I=null,C=null,P.set(0,0,0),E=0,m=N,S=Kt}return}vt=vt||ft,_t=_t||Y,Vt=Vt||j,(ft!==f||vt!==_)&&(i.blendEquationSeparate(J[ft],J[vt]),f=ft,_=vt),(Y!==x||j!==M||_t!==I||Vt!==C)&&(i.blendFuncSeparate(at[Y],at[j],at[_t],at[Vt]),x=Y,M=j,I=_t,C=Vt),(ue.equals(P)===!1||xe!==E)&&(i.blendColor(ue.r,ue.g,ue.b,xe),P.copy(ue),E=xe),m=N,S=!1}function Lt(N,ft){N.side===Ke?It(i.CULL_FACE):ct(i.CULL_FACE);let Y=N.side===Re;ft&&(Y=!Y),it(Y),N.blending===Oi&&N.transparent===!1?L(Bn):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const j=N.stencilWrite;a.setTest(j),j&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function St(N){N!==wc?(ct(i.CULL_FACE),N!==R&&(N===ma?i.cullFace(i.BACK):N===Ec?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),R=N}function rt(N){N!==B&&(X&&i.lineWidth(N),B=N)}function Ot(N,ft,Y){N?(ct(i.POLYGON_OFFSET_FILL),(F!==ft||V!==Y)&&(i.polygonOffset(ft,Y),F=ft,V=Y)):It(i.POLYGON_OFFSET_FILL)}function gt(N){N?ct(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+q-1),lt!==N&&(i.activeTexture(N),lt=N)}function b(N,ft,Y){Y===void 0&&(lt===null?Y=i.TEXTURE0+q-1:Y=lt);let j=dt[Y];j===void 0&&(j={type:void 0,texture:void 0},dt[Y]=j),(j.type!==N||j.texture!==ft)&&(lt!==Y&&(i.activeTexture(Y),lt=Y),i.bindTexture(N,ft||Ct[N]),j.type=N,j.texture=ft)}function G(){const N=dt[lt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(N){Qt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Qt.copy(N))}function Et(N){H.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),H.copy(N))}function $t(N,ft){let Y=c.get(ft);Y===void 0&&(Y=new WeakMap,c.set(ft,Y));let j=Y.get(N);j===void 0&&(j=i.getUniformBlockIndex(ft,N.name),Y.set(N,j))}function Wt(N,ft){const j=c.get(ft).get(N);l.get(ft)!==j&&(i.uniformBlockBinding(ft,j,N.__bindingPointIndex),l.set(ft,j))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},lt=null,dt={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,f=null,x=null,M=null,_=null,I=null,C=null,P=new kt(0,0,0),E=0,S=!1,y=null,R=null,B=null,F=null,V=null,Qt.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:It,bindFramebuffer:yt,drawBuffers:Pt,useProgram:Xt,setBlending:L,setMaterial:Lt,setFlipSided:it,setCullFace:St,setLineWidth:rt,setPolygonOffset:Ot,setScissorTest:gt,activeTexture:A,bindTexture:b,unbindTexture:G,compressedTexImage2D:$,compressedTexImage3D:et,texImage2D:wt,texImage3D:Ft,updateUBOMapping:$t,uniformBlockBinding:Wt,texStorage2D:Zt,texStorage3D:ot,texSubImage2D:K,texSubImage3D:Dt,compressedTexSubImage2D:pt,compressedTexSubImage3D:bt,scissor:Gt,viewport:Et,reset:re}}function dl(i,t,e,n){const s=A0(n);switch(e){case Dl:return i*t;case Ul:return i*t;case Nl:return i*t*2;case Fl:return i*t/s.components*s.byteLength;case ea:return i*t/s.components*s.byteLength;case Ol:return i*t*2/s.components*s.byteLength;case na:return i*t*2/s.components*s.byteLength;case Il:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case ia:return i*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:case vo:return Math.max(i,16)*Math.max(t,8)/4;case po:case go:return Math.max(i,8)*Math.max(t,8)/2;case _o:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case To:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case or:case No:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zl:case Oo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function A0(i){switch(i){case En:case Rl:return{byteLength:1,components:1};case Ms:case Pl:case Ts:return{byteLength:2,components:1};case Qo:case ta:return{byteLength:2,components:4};case li:case jo:case Sn:return{byteLength:4,components:1};case Ll:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function C0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return p?new OffscreenCanvas(A,b):cr("canvas")}function v(A,b,G){let $=1;const et=gt(A);if((et.width>G||et.height>G)&&($=G/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor($*et.width),Dt=Math.floor($*et.height);d===void 0&&(d=g(K,Dt));const pt=b?g(K,Dt):d;return pt.width=K,pt.height=Dt,pt.getContext("2d").drawImage(A,0,0,K,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+Dt+")."),pt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,b,G,$,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=b;if(b===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),b===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RG8UI),G===i.UNSIGNED_SHORT&&(K=i.RG16UI),G===i.UNSIGNED_INT&&(K=i.RG32UI),G===i.BYTE&&(K=i.RG8I),G===i.SHORT&&(K=i.RG16I),G===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGB8UI),G===i.UNSIGNED_SHORT&&(K=i.RGB16UI),G===i.UNSIGNED_INT&&(K=i.RGB32UI),G===i.BYTE&&(K=i.RGB8I),G===i.SHORT&&(K=i.RGB16I),G===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),G===i.UNSIGNED_INT&&(K=i.RGBA32UI),G===i.BYTE&&(K=i.RGBA8I),G===i.SHORT&&(K=i.RGBA16I),G===i.INT&&(K=i.RGBA32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),b===i.RGBA){const Dt=et?fr:te.getTransfer($);G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=Dt===le?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(A,b){let G;return A?b===null||b===li||b===Xi?G=i.DEPTH24_STENCIL8:b===Sn?G=i.DEPTH32F_STENCIL8:b===Ms&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===li||b===Xi?G=i.DEPTH_COMPONENT24:b===Sn?G=i.DEPTH_COMPONENT32F:b===Ms&&(G=i.DEPTH_COMPONENT16),G}function I(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==ln?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function C(A){const b=A.target;b.removeEventListener("dispose",C),E(b),b.isVideoTexture&&u.delete(b)}function P(A){const b=A.target;b.removeEventListener("dispose",P),y(b)}function E(A){const b=n.get(A);if(b.__webglInit===void 0)return;const G=A.source,$=h.get(G);if($){const et=$[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(A),Object.keys($).length===0&&h.delete(G)}n.remove(A)}function S(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const G=A.source,$=h.get(G);delete $[b.__cacheKey],o.memory.textures--}function y(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let et=0;et<b.__webglFramebuffer[$].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[$][et]);else i.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)i.deleteFramebuffer(b.__webglFramebuffer[$]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=A.textures;for(let $=0,et=G.length;$<et;$++){const K=n.get(G[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[$])}n.remove(A)}let R=0;function B(){R=0}function F(){const A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function V(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function q(A,b){const G=n.get(A);if(A.isVideoTexture&&rt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(G,A,b);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function X(A,b){const G=n.get(A);if(A.version>0&&G.__version!==A.version){H(G,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function tt(A,b){const G=n.get(A);if(A.version>0&&G.__version!==A.version){H(G,A,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function W(A,b){const G=n.get(A);if(A.version>0&&G.__version!==A.version){st(G,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}const lt={[xs]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[fo]:i.MIRRORED_REPEAT},dt={[sn]:i.NEAREST,[jc]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[vr]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},Mt={[nh]:i.NEVER,[lh]:i.ALWAYS,[ih]:i.LESS,[kl]:i.LEQUAL,[sh]:i.EQUAL,[ah]:i.GEQUAL,[rh]:i.GREATER,[oh]:i.NOTEQUAL};function Nt(A,b){if(b.type===Sn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ln||b.magFilter===vr||b.magFilter===Ds||b.magFilter===oi||b.minFilter===ln||b.minFilter===vr||b.minFilter===Ds||b.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,lt[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,lt[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,lt[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Mt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===sn||b.minFilter!==Ds&&b.minFilter!==oi||b.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Qt(A,b){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",C));const $=b.source;let et=h.get($);et===void 0&&(et={},h.set($,et));const K=V(b);if(K!==A.__cacheKey){et[K]===void 0&&(et[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),et[K].usedTimes++;const Dt=et[A.__cacheKey];Dt!==void 0&&(et[A.__cacheKey].usedTimes--,Dt.usedTimes===0&&S(b)),A.__cacheKey=K,A.__webglTexture=et[K].texture}return G}function H(A,b,G){let $=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=i.TEXTURE_3D);const et=Qt(A,b),K=b.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+G);const Dt=n.get(K);if(K.version!==Dt.__version||et===!0){e.activeTexture(i.TEXTURE0+G);const pt=te.getPrimaries(te.workingColorSpace),bt=b.colorSpace===Mn?null:te.getPrimaries(b.colorSpace),Zt=b.colorSpace===Mn||pt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let ot=v(b.image,!1,s.maxTextureSize);ot=Ot(b,ot);const wt=r.convert(b.format,b.colorSpace),Ft=r.convert(b.type);let Gt=M(b.internalFormat,wt,Ft,b.colorSpace,b.isVideoTexture);Nt($,b);let Et;const $t=b.mipmaps,Wt=b.isVideoTexture!==!0,re=Dt.__version===void 0||et===!0,N=K.dataReady,ft=I(b,ot);if(b.isDepthTexture)Gt=_(b.format===qi,b.type),re&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Gt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Gt,ot.width,ot.height,0,wt,Ft,null));else if(b.isDataTexture)if($t.length>0){Wt&&re&&e.texStorage2D(i.TEXTURE_2D,ft,Gt,$t[0].width,$t[0].height);for(let Y=0,j=$t.length;Y<j;Y++)Et=$t[Y],Wt?N&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,wt,Ft,Et.data):e.texImage2D(i.TEXTURE_2D,Y,Gt,Et.width,Et.height,0,wt,Ft,Et.data);b.generateMipmaps=!1}else Wt?(re&&e.texStorage2D(i.TEXTURE_2D,ft,Gt,ot.width,ot.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,wt,Ft,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,ot.width,ot.height,0,wt,Ft,ot.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Wt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Gt,$t[0].width,$t[0].height,ot.depth);for(let Y=0,j=$t.length;Y<j;Y++)if(Et=$t[Y],b.format!==nn)if(wt!==null)if(Wt){if(N)if(b.layerUpdates.size>0){const vt=dl(Et.width,Et.height,b.format,b.type);for(const _t of b.layerUpdates){const Vt=Et.data.subarray(_t*vt/Et.data.BYTES_PER_ELEMENT,(_t+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,_t,Et.width,Et.height,1,wt,Vt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,ot.depth,wt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Gt,Et.width,Et.height,ot.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,ot.depth,wt,Ft,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Gt,Et.width,Et.height,ot.depth,0,wt,Ft,Et.data)}else{Wt&&re&&e.texStorage2D(i.TEXTURE_2D,ft,Gt,$t[0].width,$t[0].height);for(let Y=0,j=$t.length;Y<j;Y++)Et=$t[Y],b.format!==nn?wt!==null?Wt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Gt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?N&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,wt,Ft,Et.data):e.texImage2D(i.TEXTURE_2D,Y,Gt,Et.width,Et.height,0,wt,Ft,Et.data)}else if(b.isDataArrayTexture)if(Wt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Gt,ot.width,ot.height,ot.depth),N)if(b.layerUpdates.size>0){const Y=dl(ot.width,ot.height,b.format,b.type);for(const j of b.layerUpdates){const vt=ot.data.subarray(j*Y/ot.data.BYTES_PER_ELEMENT,(j+1)*Y/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ot.width,ot.height,1,wt,Ft,vt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,wt,Ft,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,ot.width,ot.height,ot.depth,0,wt,Ft,ot.data);else if(b.isData3DTexture)Wt?(re&&e.texStorage3D(i.TEXTURE_3D,ft,Gt,ot.width,ot.height,ot.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,wt,Ft,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,ot.width,ot.height,ot.depth,0,wt,Ft,ot.data);else if(b.isFramebufferTexture){if(re)if(Wt)e.texStorage2D(i.TEXTURE_2D,ft,Gt,ot.width,ot.height);else{let Y=ot.width,j=ot.height;for(let vt=0;vt<ft;vt++)e.texImage2D(i.TEXTURE_2D,vt,Gt,Y,j,0,wt,Ft,null),Y>>=1,j>>=1}}else if($t.length>0){if(Wt&&re){const Y=gt($t[0]);e.texStorage2D(i.TEXTURE_2D,ft,Gt,Y.width,Y.height)}for(let Y=0,j=$t.length;Y<j;Y++)Et=$t[Y],Wt?N&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,wt,Ft,Et):e.texImage2D(i.TEXTURE_2D,Y,Gt,wt,Ft,Et);b.generateMipmaps=!1}else if(Wt){if(re){const Y=gt(ot);e.texStorage2D(i.TEXTURE_2D,ft,Gt,Y.width,Y.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Ft,ot)}else e.texImage2D(i.TEXTURE_2D,0,Gt,wt,Ft,ot);m(b)&&f($),Dt.__version=K.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function st(A,b,G){if(b.image.length!==6)return;const $=Qt(A,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);const K=n.get(et);if(et.version!==K.__version||$===!0){e.activeTexture(i.TEXTURE0+G);const Dt=te.getPrimaries(te.workingColorSpace),pt=b.colorSpace===Mn?null:te.getPrimaries(b.colorSpace),bt=b.colorSpace===Mn||Dt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Zt=b.isCompressedTexture||b.image[0].isCompressedTexture,ot=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let j=0;j<6;j++)!Zt&&!ot?wt[j]=v(b.image[j],!0,s.maxCubemapSize):wt[j]=ot?b.image[j].image:b.image[j],wt[j]=Ot(b,wt[j]);const Ft=wt[0],Gt=r.convert(b.format,b.colorSpace),Et=r.convert(b.type),$t=M(b.internalFormat,Gt,Et,b.colorSpace),Wt=b.isVideoTexture!==!0,re=K.__version===void 0||$===!0,N=et.dataReady;let ft=I(b,Ft);Nt(i.TEXTURE_CUBE_MAP,b);let Y;if(Zt){Wt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,$t,Ft.width,Ft.height);for(let j=0;j<6;j++){Y=wt[j].mipmaps;for(let vt=0;vt<Y.length;vt++){const _t=Y[vt];b.format!==nn?Gt!==null?Wt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,0,0,_t.width,_t.height,Gt,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,$t,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,0,0,_t.width,_t.height,Gt,Et,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,$t,_t.width,_t.height,0,Gt,Et,_t.data)}}}else{if(Y=b.mipmaps,Wt&&re){Y.length>0&&ft++;const j=gt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,$t,j.width,j.height)}for(let j=0;j<6;j++)if(ot){Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,wt[j].width,wt[j].height,Gt,Et,wt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,wt[j].width,wt[j].height,0,Gt,Et,wt[j].data);for(let vt=0;vt<Y.length;vt++){const Vt=Y[vt].image[j].image;Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,0,0,Vt.width,Vt.height,Gt,Et,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,$t,Vt.width,Vt.height,0,Gt,Et,Vt.data)}}else{Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Gt,Et,wt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,Gt,Et,wt[j]);for(let vt=0;vt<Y.length;vt++){const _t=Y[vt];Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,0,0,Gt,Et,_t.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,$t,Gt,Et,_t.image[j])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),K.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Ct(A,b,G,$,et,K){const Dt=r.convert(G.format,G.colorSpace),pt=r.convert(G.type),bt=M(G.internalFormat,Dt,pt,G.colorSpace),Zt=n.get(b),ot=n.get(G);if(ot.__renderTarget=b,!Zt.__hasExternalTextures){const wt=Math.max(1,b.width>>K),Ft=Math.max(1,b.height>>K);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,K,bt,wt,Ft,b.depth,0,Dt,pt,null):e.texImage2D(et,K,bt,wt,Ft,0,Dt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,et,ot.__webglTexture,0,it(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,et,ot.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(A,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const $=b.depthTexture,et=$&&$.isDepthTexture?$.type:null,K=_(b.stencilBuffer,et),Dt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=it(b);St(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,K,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,A)}else{const $=b.textures;for(let et=0;et<$.length;et++){const K=$[et],Dt=r.convert(K.format,K.colorSpace),pt=r.convert(K.type),bt=M(K.internalFormat,Dt,pt,K.colorSpace),Zt=it(b);G&&St(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,bt,b.width,b.height):St(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,bt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,bt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const et=$.__webglTexture,K=it(b);if(b.depthTexture.format===zi)St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(b.depthTexture.format===qi)St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function yt(A){const b=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=$}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");It(b.__webglFramebuffer,A)}else if(G){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=i.createRenderbuffer(),ct(b.__webglDepthbuffer[$],A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ct(b.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(A,b,G){const $=n.get(A);b!==void 0&&Ct($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&yt(A)}function Xt(A){const b=A.texture,G=n.get(A),$=n.get(b);A.addEventListener("dispose",P);const et=A.textures,K=A.isWebGLCubeRenderTarget===!0,Dt=et.length>1;if(Dt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=b.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[pt]=[];for(let bt=0;bt<b.mipmaps.length;bt++)G.__webglFramebuffer[pt][bt]=i.createFramebuffer()}else G.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)G.__webglFramebuffer[pt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let pt=0,bt=et.length;pt<bt;pt++){const Zt=n.get(et[pt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&St(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pt=0;pt<et.length;pt++){const bt=et[pt];G.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[pt]);const Zt=r.convert(bt.format,bt.colorSpace),ot=r.convert(bt.type),wt=M(bt.internalFormat,Zt,ot,bt.colorSpace,A.isXRRenderTarget===!0),Ft=it(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,wt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,G.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)Ct(G.__webglFramebuffer[pt][bt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt);else Ct(G.__webglFramebuffer[pt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(b)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let pt=0,bt=et.length;pt<bt;pt++){const Zt=et[pt],ot=n.get(Zt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Nt(i.TEXTURE_2D,Zt),Ct(G.__webglFramebuffer,A,Zt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(Zt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,$.__webglTexture),Nt(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)Ct(G.__webglFramebuffer[bt],A,b,i.COLOR_ATTACHMENT0,pt,bt);else Ct(G.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,pt,0);m(b)&&f(pt),e.unbindTexture()}A.depthBuffer&&yt(A)}function J(A){const b=A.textures;for(let G=0,$=b.length;G<$;G++){const et=b[G];if(m(et)){const K=x(A),Dt=n.get(et).__webglTexture;e.bindTexture(K,Dt),f(K),e.unbindTexture()}}}const at=[],L=[];function Lt(A){if(A.samples>0){if(St(A)===!1){const b=A.textures,G=A.width,$=A.height;let et=i.COLOR_BUFFER_BIT;const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(A),pt=b.length>1;if(pt)for(let bt=0;bt<b.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let bt=0;bt<b.length;bt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[bt]);const Zt=n.get(b[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,G,$,0,0,G,$,et,i.NEAREST),l===!0&&(at.length=0,L.length=0,at.push(i.COLOR_ATTACHMENT0+bt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(at.push(K),L.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let bt=0;bt<b.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[bt]);const Zt=n.get(b[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function it(A){return Math.min(s.maxSamples,A.samples)}function St(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function rt(A){const b=o.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Ot(A,b){const G=A.colorSpace,$=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Ki&&G!==Mn&&(te.getTransfer(G)===le?($!==nn||et!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=W,this.rebindTextures=Pt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=St}function R0(i,t){function e(n,s=Mn){let r;const o=te.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rl)return i.BYTE;if(n===Pl)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===jo)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===Dl)return i.ALPHA;if(n===Il)return i.RGB;if(n===nn)return i.RGBA;if(n===Ul)return i.LUMINANCE;if(n===Nl)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Fl)return i.RED;if(n===ea)return i.RED_INTEGER;if(n===Ol)return i.RG;if(n===na)return i.RG_INTEGER;if(n===ia)return i.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===po||n===mo||n===go||n===vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_o||n===xo||n===Mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_o||n===xo)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yo||n===So||n===bo||n===wo||n===Eo||n===To||n===Ao||n===Co||n===Ro||n===Po||n===Lo||n===Do||n===Io||n===Uo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===To)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Co)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Po)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Io)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===or||n===No||n===Fo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===or)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zl||n===Oo||n===zo||n===Bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class P0 extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L0={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new At;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const D0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I0=`
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

}`;class U0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:D0,fragmentShader:I0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new Ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N0 extends Ji{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const v=new U0,m=e.getContextAttributes();let f=null,x=null;const M=[],_=[],I=new Q;let C=null;const P=new He;P.viewport=new ce;const E=new He;E.viewport=new ce;const S=[P,E],y=new P0;let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let st=M[H];return st===void 0&&(st=new Wr,M[H]=st),st.getTargetRaySpace()},this.getControllerGrip=function(H){let st=M[H];return st===void 0&&(st=new Wr,M[H]=st),st.getGripSpace()},this.getHand=function(H){let st=M[H];return st===void 0&&(st=new Wr,M[H]=st),st.getHandSpace()};function F(H){const st=_.indexOf(H.inputSource);if(st===-1)return;const Ct=M[st];Ct!==void 0&&(Ct.update(H.inputSource,H.frame,c||o),Ct.dispatchEvent({type:H.type,data:H.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",q);for(let H=0;H<M.length;H++){const st=_[H];st!==null&&(_[H]=null,M[H].disconnect(st))}R=null,B=null,v.reset(),t.setRenderTarget(f),p=null,h=null,d=null,s=null,x=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ci(p.framebufferWidth,p.framebufferHeight,{format:nn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Ct=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?qi:zi,Ct=m.stencil?Xi:li);const It={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};d=new XRWebGLBinding(s,e),h=d.createProjectionLayer(It),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new ci(h.textureWidth,h.textureHeight,{format:nn,type:En,depthTexture:new Ql(h.textureWidth,h.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(H){for(let st=0;st<H.removed.length;st++){const Ct=H.removed[st],ct=_.indexOf(Ct);ct>=0&&(_[ct]=null,M[ct].disconnect(Ct))}for(let st=0;st<H.added.length;st++){const Ct=H.added[st];let ct=_.indexOf(Ct);if(ct===-1){for(let yt=0;yt<M.length;yt++)if(yt>=_.length){_.push(Ct),ct=yt;break}else if(_[yt]===null){_[yt]=Ct,ct=yt;break}if(ct===-1)break}const It=M[ct];It&&It.connect(Ct)}}const X=new T,tt=new T;function W(H,st,Ct){X.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(Ct.matrixWorld);const ct=X.distanceTo(tt),It=st.projectionMatrix.elements,yt=Ct.projectionMatrix.elements,Pt=It[14]/(It[10]-1),Xt=It[14]/(It[10]+1),J=(It[9]+1)/It[5],at=(It[9]-1)/It[5],L=(It[8]-1)/It[0],Lt=(yt[8]+1)/yt[0],it=Pt*L,St=Pt*Lt,rt=ct/(-L+Lt),Ot=rt*-L;if(st.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ot),H.translateZ(rt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),It[10]===-1)H.projectionMatrix.copy(st.projectionMatrix),H.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const gt=Pt+rt,A=Xt+rt,b=it-Ot,G=St+(ct-Ot),$=J*Xt/A*gt,et=at*Xt/A*gt;H.projectionMatrix.makePerspective(b,G,$,et,gt,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function lt(H,st){st===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(st.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let st=H.near,Ct=H.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(Ct=v.depthFar)),y.near=E.near=P.near=st,y.far=E.far=P.far=Ct,(R!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,B=y.far),P.layers.mask=H.layers.mask|2,E.layers.mask=H.layers.mask|4,y.layers.mask=P.layers.mask|E.layers.mask;const ct=H.parent,It=y.cameras;lt(y,ct);for(let yt=0;yt<It.length;yt++)lt(It[yt],ct);It.length===2?W(y,P,E):y.projectionMatrix.copy(P.projectionMatrix),dt(H,y,ct)};function dt(H,st,Ct){Ct===null?H.matrix.copy(st.matrixWorld):(H.matrix.copy(Ct.matrixWorld),H.matrix.invert(),H.matrix.multiply(st.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(st.projectionMatrix),H.projectionMatrixInverse.copy(st.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ys*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Mt=null;function Nt(H,st){if(u=st.getViewerPose(c||o),g=st,u!==null){const Ct=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let ct=!1;Ct.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let yt=0;yt<Ct.length;yt++){const Pt=Ct[yt];let Xt=null;if(p!==null)Xt=p.getViewport(Pt);else{const at=d.getViewSubImage(h,Pt);Xt=at.viewport,yt===0&&(t.setRenderTargetTextures(x,at.colorTexture,h.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(x))}let J=S[yt];J===void 0&&(J=new He,J.layers.enable(yt),J.viewport=new ce,S[yt]=J),J.matrix.fromArray(Pt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Pt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),yt===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push(J)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const yt=d.getDepthInformation(Ct[0]);yt&&yt.isValid&&yt.texture&&v.init(t,yt,s.renderState)}}for(let Ct=0;Ct<M.length;Ct++){const ct=_[Ct],It=M[Ct];ct!==null&&It!==void 0&&It.update(ct,st,c||o)}Mt&&Mt(H,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const Qt=new Jl;Qt.setAnimationLoop(Nt),this.setAnimationLoop=function(H){Mt=H},this.dispose=function(){}}}const Qn=new hn,F0=new pe;function O0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,$l(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,M,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Re&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Re&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,Qn.copy(_),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),m.envMapRotation.value.setFromMatrix4(F0.makeRotationFromEuler(Qn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const _=M.program;n.uniformBlockBinding(x,_)}function c(x,M){let _=s[x.id];_===void 0&&(g(x),_=u(x),s[x.id]=_,x.addEventListener("dispose",m));const I=M.program;n.updateUBOMapping(x,I);const C=t.render.frame;r[x.id]!==C&&(h(x),r[x.id]=C)}function u(x){const M=d();x.__bindingPointIndex=M;const _=i.createBuffer(),I=x.__size,C=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const M=s[x.id],_=x.uniforms,I=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,P=_.length;C<P;C++){const E=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,y=E.length;S<y;S++){const R=E[S];if(p(R,C,S,I)===!0){const B=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let q=0;q<F.length;q++){const X=F[q],tt=v(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,B+V,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,V),V+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,M,_,I){const C=x.value,P=M+"_"+_;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{const E=I[P];if(typeof C=="number"||typeof C=="boolean"){if(E!==C)return I[P]=C,!0}else if(E.equals(C)===!1)return E.copy(C),!0}return!1}function g(x){const M=x.uniforms;let _=0;const I=16;for(let P=0,E=M.length;P<E;P++){const S=Array.isArray(M[P])?M[P]:[M[P]];for(let y=0,R=S.length;y<R;y++){const B=S[y],F=Array.isArray(B.value)?B.value:[B.value];for(let V=0,q=F.length;V<q;V++){const X=F[V],tt=v(X),W=_%I,lt=W%tt.boundary,dt=W+lt;_+=lt,dt!==0&&I-dt<tt.storage&&(_+=I-dt),B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=tt.storage}}}const C=_%I;return C>0&&(_+=I-C),x.__size=_,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class B0{constructor(t={}){const{canvas:e=Eh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=kn,this.toneMappingExposure=1;const _=this;let I=!1,C=0,P=0,E=null,S=-1,y=null;const R=new ce,B=new ce;let F=null;const V=new kt(0);let q=0,X=e.width,tt=e.height,W=1,lt=null,dt=null;const Mt=new ce(0,0,X,tt),Nt=new ce(0,0,X,tt);let Qt=!1;const H=new oa;let st=!1,Ct=!1;const ct=new pe,It=new pe,yt=new T,Pt=new ce,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function at(){return E===null?W:1}let L=n;function Lt(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jo}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),L===null){const O="webgl2";if(L=Lt(O,w),L===null)throw Lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let it,St,rt,Ot,gt,A,b,G,$,et,K,Dt,pt,bt,Zt,ot,wt,Ft,Gt,Et,$t,Wt,re,N;function ft(){it=new Wf(L),it.init(),Wt=new R0(L,it),St=new zf(L,it,t,Wt),rt=new T0(L,it),St.reverseDepthBuffer&&h&&rt.buffers.depth.setReversed(!0),Ot=new Yf(L),gt=new u0,A=new C0(L,it,rt,gt,St,Wt,Ot),b=new kf(_),G=new Vf(_),$=new Qh(L),re=new Ff(L,$),et=new Xf(L,$,Ot,re),K=new Zf(L,et,$,Ot),Gt=new $f(L,St,A),ot=new Bf(gt),Dt=new h0(_,b,G,it,St,re,ot),pt=new O0(_,gt),bt=new f0,Zt=new x0(it),Ft=new Nf(_,b,G,rt,K,p,l),wt=new w0(_,K,St),N=new z0(L,Ot,St,rt),Et=new Of(L,it,Ot),$t=new qf(L,it,Ot),Ot.programs=Dt.programs,_.capabilities=St,_.extensions=it,_.properties=gt,_.renderLists=bt,_.shadowMap=wt,_.state=rt,_.info=Ot}ft();const Y=new N0(_,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=it.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=it.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(X,tt,!1))},this.getSize=function(w){return w.set(X,tt)},this.setSize=function(w,O,k=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,tt=O,e.width=Math.floor(w*W),e.height=Math.floor(O*W),k===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(X*W,tt*W).floor()},this.setDrawingBufferSize=function(w,O,k){X=w,tt=O,W=k,e.width=Math.floor(w*k),e.height=Math.floor(O*k),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(Mt)},this.setViewport=function(w,O,k,z){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,O,k,z),rt.viewport(R.copy(Mt).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(Nt)},this.setScissor=function(w,O,k,z){w.isVector4?Nt.set(w.x,w.y,w.z,w.w):Nt.set(w,O,k,z),rt.scissor(B.copy(Nt).multiplyScalar(W).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(w){rt.setScissorTest(Qt=w)},this.setOpaqueSort=function(w){lt=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(w=!0,O=!0,k=!0){let z=0;if(w){let U=!1;if(E!==null){const nt=E.texture.format;U=nt===ia||nt===na||nt===ea}if(U){const nt=E.texture.type,ut=nt===En||nt===li||nt===Ms||nt===Xi||nt===Qo||nt===ta,Rt=Ft.getClearColor(),xt=Ft.getClearAlpha(),zt=Rt.r,Bt=Rt.g,Tt=Rt.b;ut?(g[0]=zt,g[1]=Bt,g[2]=Tt,g[3]=xt,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=zt,v[1]=Bt,v[2]=Tt,v[3]=xt,L.clearBufferiv(L.COLOR,0,v))}else z|=L.COLOR_BUFFER_BIT}O&&(z|=L.DEPTH_BUFFER_BIT),k&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),bt.dispose(),Zt.dispose(),gt.dispose(),b.dispose(),G.dispose(),K.dispose(),re.dispose(),N.dispose(),Dt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Vn),Y.removeEventListener("sessionend",ts),rn.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const w=Ot.autoReset,O=wt.enabled,k=wt.autoUpdate,z=wt.needsUpdate,U=wt.type;ft(),Ot.autoReset=w,wt.enabled=O,wt.autoUpdate=k,wt.needsUpdate=z,wt.type=U}function _t(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Vt(w){const O=w.target;O.removeEventListener("dispose",Vt),ue(O)}function ue(w){xe(w),gt.remove(w)}function xe(w){const O=gt.get(w).programs;O!==void 0&&(O.forEach(function(k){Dt.releaseProgram(k)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,k,z,U,nt){O===null&&(O=Xt);const ut=U.isMesh&&U.matrixWorld.determinant()<0,Rt=gr(w,O,k,z,U);rt.setMaterial(z,ut);let xt=k.index,zt=1;if(z.wireframe===!0){if(xt=et.getWireframeAttribute(k),xt===void 0)return;zt=2}const Bt=k.drawRange,Tt=k.attributes.position;let Jt=Bt.start*zt,oe=(Bt.start+Bt.count)*zt;nt!==null&&(Jt=Math.max(Jt,nt.start*zt),oe=Math.min(oe,(nt.start+nt.count)*zt)),xt!==null?(Jt=Math.max(Jt,0),oe=Math.min(oe,xt.count)):Tt!=null&&(Jt=Math.max(Jt,0),oe=Math.min(oe,Tt.count));const de=oe-Jt;if(de<0||de===1/0)return;re.setup(U,z,Rt,k,xt);let Ne,ne=Et;if(xt!==null&&(Ne=$.get(xt),ne=$t,ne.setIndex(Ne)),U.isMesh)z.wireframe===!0?(rt.setLineWidth(z.wireframeLinewidth*at()),ne.setMode(L.LINES)):ne.setMode(L.TRIANGLES);else if(U.isLine){let Ut=z.linewidth;Ut===void 0&&(Ut=1),rt.setLineWidth(Ut*at()),U.isLineSegments?ne.setMode(L.LINES):U.isLineLoop?ne.setMode(L.LINE_LOOP):ne.setMode(L.LINE_STRIP)}else U.isPoints?ne.setMode(L.POINTS):U.isSprite&&ne.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ne.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ne.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ut=U._multiDrawStarts,dn=U._multiDrawCounts,ie=U._multiDrawCount,Je=xt?$.get(xt).bytesPerElement:1,mi=gt.get(z).currentProgram.getUniforms();for(let Be=0;Be<ie;Be++)mi.setValue(L,"_gl_DrawID",Be),ne.render(Ut[Be]/Je,dn[Be])}else if(U.isInstancedMesh)ne.renderInstances(Jt,de,U.count);else if(k.isInstancedBufferGeometry){const Ut=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,dn=Math.min(k.instanceCount,Ut);ne.renderInstances(Jt,de,dn)}else ne.render(Jt,de)};function Kt(w,O,k){w.transparent===!0&&w.side===Ke&&w.forceSinglePass===!1?(w.side=Re,w.needsUpdate=!0,Xn(w,O,k),w.side=Gn,w.needsUpdate=!0,Xn(w,O,k),w.side=Ke):Xn(w,O,k)}this.compile=function(w,O,k=null){k===null&&(k=w),f=Zt.get(k),f.init(O),M.push(f),k.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),w!==k&&w.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const z=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const nt=U.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){const Rt=nt[ut];Kt(Rt,k,U),z.add(Rt)}else Kt(nt,k,U),z.add(nt)}),M.pop(),f=null,z},this.compileAsync=function(w,O,k=null){const z=this.compile(w,O,k);return new Promise(U=>{function nt(){if(z.forEach(function(ut){gt.get(ut).currentProgram.isReady()&&z.delete(ut)}),z.size===0){U(w);return}setTimeout(nt,10)}it.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let ze=null;function qe(w){ze&&ze(w)}function Vn(){rn.stop()}function ts(){rn.start()}const rn=new Jl;rn.setAnimationLoop(qe),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(w){ze=w,Y.setAnimationLoop(w),w===null?rn.stop():rn.start()},Y.addEventListener("sessionstart",Vn),Y.addEventListener("sessionend",ts),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,O,E),f=Zt.get(w,M.length),f.init(O),M.push(f),It.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H.setFromProjectionMatrix(It),Ct=this.localClippingEnabled,st=ot.init(this.clippingPlanes,Ct),m=bt.get(w,x.length),m.init(),x.push(m),Y.enabled===!0&&Y.isPresenting===!0){const nt=_.xr.getDepthSensingMesh();nt!==null&&pi(nt,O,-1/0,_.sortObjects)}pi(w,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(lt,dt),J=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,J&&Ft.addToRenderList(m,w),this.info.render.frame++,st===!0&&ot.beginShadows();const k=f.state.shadowsArray;wt.render(k,w,O),st===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(f.setupLights(),O.isArrayCamera){const nt=O.cameras;if(U.length>0)for(let ut=0,Rt=nt.length;ut<Rt;ut++){const xt=nt[ut];Ps(z,U,w,xt)}J&&Ft.render(w);for(let ut=0,Rt=nt.length;ut<Rt;ut++){const xt=nt[ut];es(m,w,xt,xt.viewport)}}else U.length>0&&Ps(z,U,w,O),J&&Ft.render(w),es(m,w,O);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(_,w,O),re.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(f=M[M.length-1],st===!0&&ot.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function pi(w,O,k,z){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){z&&Pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(It);const ut=K.update(w),Rt=w.material;Rt.visible&&m.push(w,ut,Rt,k,Pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||H.intersectsObject(w))){const ut=K.update(w),Rt=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pt.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Pt.copy(ut.boundingSphere.center)),Pt.applyMatrix4(w.matrixWorld).applyMatrix4(It)),Array.isArray(Rt)){const xt=ut.groups;for(let zt=0,Bt=xt.length;zt<Bt;zt++){const Tt=xt[zt],Jt=Rt[Tt.materialIndex];Jt&&Jt.visible&&m.push(w,ut,Jt,k,Pt.z,Tt)}}else Rt.visible&&m.push(w,ut,Rt,k,Pt.z,null)}}const nt=w.children;for(let ut=0,Rt=nt.length;ut<Rt;ut++)pi(nt[ut],O,k,z)}function es(w,O,k,z){const U=w.opaque,nt=w.transmissive,ut=w.transparent;f.setupLightsView(k),st===!0&&ot.setGlobalState(_.clippingPlanes,k),z&&rt.viewport(R.copy(z)),U.length>0&&Wn(U,O,k),nt.length>0&&Wn(nt,O,k),ut.length>0&&Wn(ut,O,k),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Ps(w,O,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new ci(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Ts:En,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const nt=f.state.transmissionRenderTarget[z.id],ut=z.viewport||R;nt.setSize(ut.z,ut.w);const Rt=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(V),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),J&&Ft.render(k);const xt=_.toneMapping;_.toneMapping=kn;const zt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),st===!0&&ot.setGlobalState(_.clippingPlanes,z),Wn(w,k,z),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Tt=0,Jt=O.length;Tt<Jt;Tt++){const oe=O[Tt],de=oe.object,Ne=oe.geometry,ne=oe.material,Ut=oe.group;if(ne.side===Ke&&de.layers.test(z.layers)){const dn=ne.side;ne.side=Re,ne.needsUpdate=!0,ns(de,k,z,Ne,ne,Ut),ne.side=dn,ne.needsUpdate=!0,Bt=!0}}Bt===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}_.setRenderTarget(Rt),_.setClearColor(V,q),zt!==void 0&&(z.viewport=zt),_.toneMapping=xt}function Wn(w,O,k){const z=O.isScene===!0?O.overrideMaterial:null;for(let U=0,nt=w.length;U<nt;U++){const ut=w[U],Rt=ut.object,xt=ut.geometry,zt=z===null?ut.material:z,Bt=ut.group;Rt.layers.test(k.layers)&&ns(Rt,O,k,xt,zt,Bt)}}function ns(w,O,k,z,U,nt){w.onBeforeRender(_,O,k,z,U,nt),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(_,O,k,z,w,nt),U.transparent===!0&&U.side===Ke&&U.forceSinglePass===!1?(U.side=Re,U.needsUpdate=!0,_.renderBufferDirect(k,O,z,U,w,nt),U.side=Gn,U.needsUpdate=!0,_.renderBufferDirect(k,O,z,U,w,nt),U.side=Ke):_.renderBufferDirect(k,O,z,U,w,nt),w.onAfterRender(_,O,k,z,U,nt)}function Xn(w,O,k){O.isScene!==!0&&(O=Xt);const z=gt.get(w),U=f.state.lights,nt=f.state.shadowsArray,ut=U.state.version,Rt=Dt.getParameters(w,U.state,nt,O,k),xt=Dt.getProgramCacheKey(Rt);let zt=z.programs;z.environment=w.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(w.isMeshStandardMaterial?G:b).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,zt===void 0&&(w.addEventListener("dispose",Vt),zt=new Map,z.programs=zt);let Bt=zt.get(xt);if(Bt!==void 0){if(z.currentProgram===Bt&&z.lightsStateVersion===ut)return An(w,Rt),Bt}else Rt.uniforms=Dt.getUniforms(w),w.onBeforeCompile(Rt,_),Bt=Dt.acquireProgram(Rt,xt),zt.set(xt,Bt),z.uniforms=Rt.uniforms;const Tt=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=ot.uniform),An(w,Rt),z.needsLights=Yn(w),z.lightsStateVersion=ut,z.needsLights&&(Tt.ambientLightColor.value=U.state.ambient,Tt.lightProbe.value=U.state.probe,Tt.directionalLights.value=U.state.directional,Tt.directionalLightShadows.value=U.state.directionalShadow,Tt.spotLights.value=U.state.spot,Tt.spotLightShadows.value=U.state.spotShadow,Tt.rectAreaLights.value=U.state.rectArea,Tt.ltc_1.value=U.state.rectAreaLTC1,Tt.ltc_2.value=U.state.rectAreaLTC2,Tt.pointLights.value=U.state.point,Tt.pointLightShadows.value=U.state.pointShadow,Tt.hemisphereLights.value=U.state.hemi,Tt.directionalShadowMap.value=U.state.directionalShadowMap,Tt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Tt.spotShadowMap.value=U.state.spotShadowMap,Tt.spotLightMatrix.value=U.state.spotLightMatrix,Tt.spotLightMap.value=U.state.spotLightMap,Tt.pointShadowMap.value=U.state.pointShadowMap,Tt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Bt,z.uniformsList=null,Bt}function qn(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=ar.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function An(w,O){const k=gt.get(w);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function gr(w,O,k,z,U){O.isScene!==!0&&(O=Xt),A.resetTextureUnits();const nt=O.fog,ut=z.isMeshStandardMaterial?O.environment:null,Rt=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ki,xt=(z.isMeshStandardMaterial?G:b).get(z.envMap||ut),zt=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Bt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Tt=!!k.morphAttributes.position,Jt=!!k.morphAttributes.normal,oe=!!k.morphAttributes.color;let de=kn;z.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(de=_.toneMapping);const Ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=Ne!==void 0?Ne.length:0,Ut=gt.get(z),dn=f.state.lights;if(st===!0&&(Ct===!0||w!==y)){const Ye=w===y&&z.id===S;ot.setState(z,w,Ye)}let ie=!1;z.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==dn.state.version||Ut.outputColorSpace!==Rt||U.isBatchedMesh&&Ut.batching===!1||!U.isBatchedMesh&&Ut.batching===!0||U.isBatchedMesh&&Ut.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ut.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ut.instancing===!1||!U.isInstancedMesh&&Ut.instancing===!0||U.isSkinnedMesh&&Ut.skinning===!1||!U.isSkinnedMesh&&Ut.skinning===!0||U.isInstancedMesh&&Ut.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ut.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ut.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ut.instancingMorph===!1&&U.morphTexture!==null||Ut.envMap!==xt||z.fog===!0&&Ut.fog!==nt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ot.numPlanes||Ut.numIntersection!==ot.numIntersection)||Ut.vertexAlphas!==zt||Ut.vertexTangents!==Bt||Ut.morphTargets!==Tt||Ut.morphNormals!==Jt||Ut.morphColors!==oe||Ut.toneMapping!==de||Ut.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Ut.__version=z.version);let Je=Ut.currentProgram;ie===!0&&(Je=Xn(z,O,U));let mi=!1,Be=!1,is=!1;const fe=Je.getUniforms(),on=Ut.uniforms;if(rt.useProgram(Je.program)&&(mi=!0,Be=!0,is=!0),z.id!==S&&(S=z.id,Be=!0),mi||y!==w){rt.buffers.depth.getReversed()?(ct.copy(w.projectionMatrix),Ah(ct),Ch(ct),fe.setValue(L,"projectionMatrix",ct)):fe.setValue(L,"projectionMatrix",w.projectionMatrix),fe.setValue(L,"viewMatrix",w.matrixWorldInverse);const Cn=fe.map.cameraPosition;Cn!==void 0&&Cn.setValue(L,yt.setFromMatrixPosition(w.matrixWorld)),St.logarithmicDepthBuffer&&fe.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&fe.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Be=!0,is=!0)}if(U.isSkinnedMesh){fe.setOptional(L,U,"bindMatrix"),fe.setOptional(L,U,"bindMatrixInverse");const Ye=U.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),fe.setValue(L,"boneTexture",Ye.boneTexture,A))}U.isBatchedMesh&&(fe.setOptional(L,U,"batchingTexture"),fe.setValue(L,"batchingTexture",U._matricesTexture,A),fe.setOptional(L,U,"batchingIdTexture"),fe.setValue(L,"batchingIdTexture",U._indirectTexture,A),fe.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&fe.setValue(L,"batchingColorTexture",U._colorsTexture,A));const ss=k.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&Gt.update(U,k,Je),(Be||Ut.receiveShadow!==U.receiveShadow)&&(Ut.receiveShadow=U.receiveShadow,fe.setValue(L,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(on.envMap.value=xt,on.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&O.environment!==null&&(on.envMapIntensity.value=O.environmentIntensity),Be&&(fe.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ut.needsLights&&Ls(on,is),nt&&z.fog===!0&&pt.refreshFogUniforms(on,nt),pt.refreshMaterialUniforms(on,z,W,tt,f.state.transmissionRenderTarget[w.id]),ar.upload(L,qn(Ut),on,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ar.upload(L,qn(Ut),on,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&fe.setValue(L,"center",U.center),fe.setValue(L,"modelViewMatrix",U.modelViewMatrix),fe.setValue(L,"normalMatrix",U.normalMatrix),fe.setValue(L,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ye=z.uniformsGroups;for(let Cn=0,Rn=Ye.length;Cn<Rn;Cn++){const pa=Ye[Cn];N.update(pa,Je),N.bind(pa,Je)}}return Je}function Ls(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Yn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,O,k){gt.get(w.texture).__webglTexture=O,gt.get(w.depthTexture).__webglTexture=k;const z=gt.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const k=gt.get(w);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,k=0){E=w,C=O,P=k;let z=!0,U=null,nt=!1,ut=!1;if(w){const xt=gt.get(w);if(xt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(xt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(xt.__hasExternalTextures)A.rebindTextures(w,gt.get(w.texture).__webglTexture,gt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Tt=w.depthTexture;if(xt.__boundDepthTexture!==Tt){if(Tt!==null&&gt.has(Tt)&&(w.width!==Tt.image.width||w.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const zt=w.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(ut=!0);const Bt=gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Bt[O])?U=Bt[O][k]:U=Bt[O],nt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?U=gt.get(w).__webglMultisampledFramebuffer:Array.isArray(Bt)?U=Bt[k]:U=Bt,R.copy(w.viewport),B.copy(w.scissor),F=w.scissorTest}else R.copy(Mt).multiplyScalar(W).floor(),B.copy(Nt).multiplyScalar(W).floor(),F=Qt;if(rt.bindFramebuffer(L.FRAMEBUFFER,U)&&z&&rt.drawBuffers(w,U),rt.viewport(R),rt.scissor(B),rt.setScissorTest(F),nt){const xt=gt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,xt.__webglTexture,k)}else if(ut){const xt=gt.get(w.texture),zt=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.__webglTexture,k||0,zt)}S=-1},this.readRenderTargetPixels=function(w,O,k,z,U,nt,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(Rt=Rt[ut]),Rt){rt.bindFramebuffer(L.FRAMEBUFFER,Rt);try{const xt=w.texture,zt=xt.format,Bt=xt.type;if(!St.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-z&&k>=0&&k<=w.height-U&&L.readPixels(O,k,z,U,Wt.convert(zt),Wt.convert(Bt),nt)}finally{const xt=E!==null?gt.get(E).__webglFramebuffer:null;rt.bindFramebuffer(L.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(w,O,k,z,U,nt,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(Rt=Rt[ut]),Rt){const xt=w.texture,zt=xt.format,Bt=xt.type;if(!St.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-z&&k>=0&&k<=w.height-U){rt.bindFramebuffer(L.FRAMEBUFFER,Rt);const Tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.bufferData(L.PIXEL_PACK_BUFFER,nt.byteLength,L.STREAM_READ),L.readPixels(O,k,z,U,Wt.convert(zt),Wt.convert(Bt),0);const Jt=E!==null?gt.get(E).__webglFramebuffer:null;rt.bindFramebuffer(L.FRAMEBUFFER,Jt);const oe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Th(L,oe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,nt),L.deleteBuffer(Tt),L.deleteSync(oe),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,k=0){w.isTexture!==!0&&(us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const z=Math.pow(2,-k),U=Math.floor(w.image.width*z),nt=Math.floor(w.image.height*z),ut=O!==null?O.x:0,Rt=O!==null?O.y:0;A.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,ut,Rt,U,nt),rt.unbindTexture()},this.copyTextureToTexture=function(w,O,k=null,z=null,U=0){w.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],O=arguments[2],U=arguments[3]||0,k=null);let nt,ut,Rt,xt,zt,Bt,Tt,Jt,oe;const de=w.isCompressedTexture?w.mipmaps[U]:w.image;k!==null?(nt=k.max.x-k.min.x,ut=k.max.y-k.min.y,Rt=k.isBox3?k.max.z-k.min.z:1,xt=k.min.x,zt=k.min.y,Bt=k.isBox3?k.min.z:0):(nt=de.width,ut=de.height,Rt=de.depth||1,xt=0,zt=0,Bt=0),z!==null?(Tt=z.x,Jt=z.y,oe=z.z):(Tt=0,Jt=0,oe=0);const Ne=Wt.convert(O.format),ne=Wt.convert(O.type);let Ut;O.isData3DTexture?(A.setTexture3D(O,0),Ut=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Ut=L.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Ut=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const dn=L.getParameter(L.UNPACK_ROW_LENGTH),ie=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Je=L.getParameter(L.UNPACK_SKIP_PIXELS),mi=L.getParameter(L.UNPACK_SKIP_ROWS),Be=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xt),L.pixelStorei(L.UNPACK_SKIP_ROWS,zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Bt);const is=w.isDataArrayTexture||w.isData3DTexture,fe=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const on=gt.get(w),ss=gt.get(O),Ye=gt.get(on.__renderTarget),Cn=gt.get(ss.__renderTarget);rt.bindFramebuffer(L.READ_FRAMEBUFFER,Ye.__webglFramebuffer),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Rn=0;Rn<Rt;Rn++)is&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.get(w).__webglTexture,U,Bt+Rn),w.isDepthTexture?(fe&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.get(O).__webglTexture,U,oe+Rn),L.blitFramebuffer(xt,zt,nt,ut,Tt,Jt,nt,ut,L.DEPTH_BUFFER_BIT,L.NEAREST)):fe?L.copyTexSubImage3D(Ut,U,Tt,Jt,oe+Rn,xt,zt,nt,ut):L.copyTexSubImage2D(Ut,U,Tt,Jt,oe+Rn,xt,zt,nt,ut);rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else fe?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Ut,U,Tt,Jt,oe,nt,ut,Rt,Ne,ne,de.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Ut,U,Tt,Jt,oe,nt,ut,Rt,Ne,de.data):L.texSubImage3D(Ut,U,Tt,Jt,oe,nt,ut,Rt,Ne,ne,de):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Tt,Jt,nt,ut,Ne,ne,de.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Tt,Jt,de.width,de.height,Ne,de.data):L.texSubImage2D(L.TEXTURE_2D,U,Tt,Jt,nt,ut,Ne,ne,de);L.pixelStorei(L.UNPACK_ROW_LENGTH,dn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ie),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Je),L.pixelStorei(L.UNPACK_SKIP_ROWS,mi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be),U===0&&O.generateMipmaps&&L.generateMipmap(Ut),rt.unbindTexture()},this.copyTextureToTexture3D=function(w,O,k=null,z=null,U=0){return w.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,w=arguments[2],O=arguments[3],U=arguments[4]||0),us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,k,z,U)},this.initRenderTarget=function(w){gt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),rt.unbindTexture()},this.resetState=function(){C=0,P=0,E=null,rt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class ki{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new ki(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sc extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class k0 extends Ue{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Q:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,s=[],r=[],o=[],a=new T,l=new pe;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(we(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(we(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class la extends un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Q){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class G0 extends la{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ca(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,s(o,a,h,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Qs=new T,Xr=new ca,qr=new ca,Yr=new ca;class $i extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Qs.subVectors(s[0],s[1]).add(s[0]),c=Qs);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Xr.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,v,m),qr.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,v,m),Yr.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Xr.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),qr.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Yr.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Xr.calc(l),qr.calc(l),Yr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function fl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function H0(i,t){const e=1-i;return e*e*t}function V0(i,t){return 2*(1-i)*i*t}function W0(i,t){return i*i*t}function gs(i,t,e,n){return H0(i,t)+V0(i,e)+W0(i,n)}function X0(i,t){const e=1-i;return e*e*e*t}function q0(i,t){const e=1-i;return 3*e*e*i*t}function Y0(i,t){return 3*(1-i)*i*i*t}function $0(i,t){return i*i*i*t}function vs(i,t,e,n,s){return X0(i,t)+q0(i,e)+Y0(i,n)+$0(i,s)}class rc extends un{constructor(t=new Q,e=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Q){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,s.x,r.x,o.x,a.x),vs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Z0 extends un{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,s.x,r.x,o.x,a.x),vs(t,s.y,r.y,o.y,a.y),vs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class oc extends un{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K0 extends un{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ac extends un{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gs(t,s.x,r.x,o.x),gs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lc extends un{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gs(t,s.x,r.x,o.x),gs(t,s.y,r.y,o.y),gs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cc extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(fl(a,l.x,c.x,u.x,d.x),fl(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Q().fromArray(s))}return this}}var hr=Object.freeze({__proto__:null,ArcCurve:G0,CatmullRomCurve3:$i,CubicBezierCurve:rc,CubicBezierCurve3:Z0,EllipseCurve:la,LineCurve:oc,LineCurve3:K0,QuadraticBezierCurve:ac,QuadraticBezierCurve3:lc,SplineCurve:cc});class J0 extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new hr[s.type]().fromJSON(s))}return this}}class Ho extends J0{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new oc(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ac(this.currentPoint.clone(),new Q(t,e),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new rc(this.currentPoint.clone(),new Q(t,e),new Q(n,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new cc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new la(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class hi extends Pe{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=we(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,d=new T,h=new Q,p=new T,g=new T,v=new T;let m=0,f=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let x=0;x<=e;x++){const M=n+x*u*s,_=Math.sin(M),I=Math.cos(M);for(let C=0;C<=t.length-1;C++){d.x=t[C].x*_,d.y=t[C].y,d.z=t[C].x*I,o.push(d.x,d.y,d.z),h.x=x/e,h.y=C/(t.length-1),a.push(h.x,h.y);const P=l[3*C+0]*_,E=l[3*C+1],S=l[3*C+0]*I;c.push(P,E,S)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const _=M+x*t.length,I=_,C=_+t.length,P=_+t.length+1,E=_+1;r.push(I,C,E),r.push(P,E,C)}this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(a,2)),this.setAttribute("normal",new ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.points,t.segments,t.phiStart,t.phiLength)}}class Ee extends hi{constructor(t=1,e=1,n=4,s=8){const r=new Ho;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Ee(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ni extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new T,u=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const p=n+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class me extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let g=0;const v=[],m=n/2;let f=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(p,2));function x(){const _=new T,I=new T;let C=0;const P=(e-t)/n;for(let E=0;E<=r;E++){const S=[],y=E/r,R=y*(e-t)+t;for(let B=0;B<=s;B++){const F=B/s,V=F*l+a,q=Math.sin(V),X=Math.cos(V);I.x=R*q,I.y=-y*n+m,I.z=R*X,d.push(I.x,I.y,I.z),_.set(q,P,X).normalize(),h.push(_.x,_.y,_.z),p.push(F,1-y),S.push(g++)}v.push(S)}for(let E=0;E<s;E++)for(let S=0;S<r;S++){const y=v[S][E],R=v[S+1][E],B=v[S+1][E+1],F=v[S][E+1];(t>0||S!==0)&&(u.push(y,R,F),C+=3),(e>0||S!==r-1)&&(u.push(R,B,F),C+=3)}c.addGroup(f,C,0),f+=C}function M(_){const I=g,C=new Q,P=new T;let E=0;const S=_===!0?t:e,y=_===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*y,0),h.push(0,y,0),p.push(.5,.5),g++;const R=g;for(let B=0;B<=s;B++){const V=B/s*l+a,q=Math.cos(V),X=Math.sin(V);P.x=S*X,P.y=m*y,P.z=S*q,d.push(P.x,P.y,P.z),h.push(0,y,0),C.x=q*.5+.5,C.y=X*.5*y+.5,p.push(C.x,C.y),g++}for(let B=0;B<s;B++){const F=I+B,V=R+B;_===!0?u.push(V,V+1,F):u.push(V+1,V,F),E+=3}c.addGroup(f,E,_===!0?1:2),f+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ai extends me{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ai(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ha extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new T,_=new T,I=new T;for(let C=0;C<e.length;C+=3)p(e[C+0],M),p(e[C+1],_),p(e[C+2],I),l(M,_,I,x)}function l(x,M,_,I){const C=I+1,P=[];for(let E=0;E<=C;E++){P[E]=[];const S=x.clone().lerp(_,E/C),y=M.clone().lerp(_,E/C),R=C-E;for(let B=0;B<=R;B++)B===0&&E===C?P[E][B]=S:P[E][B]=S.clone().lerp(y,B/R)}for(let E=0;E<C;E++)for(let S=0;S<2*(C-E)-1;S++){const y=Math.floor(S/2);S%2===0?(h(P[E][y+1]),h(P[E+1][y]),h(P[E][y])):(h(P[E][y+1]),h(P[E+1][y+1]),h(P[E+1][y]))}}function c(x){const M=new T;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(x),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function u(){const x=new T;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const _=m(x)/2/Math.PI+.5,I=f(x)/Math.PI+.5;o.push(_,1-I)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){const M=o[x+0],_=o[x+2],I=o[x+4],C=Math.max(M,_,I),P=Math.min(M,_,I);C>.9&&P<.1&&(M<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),I<.2&&(o[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function p(x,M){const _=x*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const x=new T,M=new T,_=new T,I=new T,C=new Q,P=new Q,E=new Q;for(let S=0,y=0;S<r.length;S+=9,y+=6){x.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),C.set(o[y+0],o[y+1]),P.set(o[y+2],o[y+3]),E.set(o[y+4],o[y+5]),I.copy(x).add(M).add(_).divideScalar(3);const R=m(I);v(C,y+0,x,R),v(P,y+2,M,R),v(E,y+4,_,R)}}function v(x,M,_,I){I<0&&x.x===1&&(o[M]=x.x-1),_.x===0&&_.z===0&&(o[M]=I/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.vertices,t.indices,t.radius,t.details)}}class hc extends Ho{constructor(t){super(t),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ho().fromJSON(s))}return this}}const j0={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=uc(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,d,h,p;if(n&&(r=im(i,t,r,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let g=e;g<s;g+=e)d=i[g],h=i[g+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ss(r,o,e,a,l,p,0),o}};function uc(i,t,e,n,s){let r,o;if(s===pm(i,t,e,n)>0)for(r=t;r<e;r+=n)o=pl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=pl(r,i[r],i[r+1],o);return o&&mr(o,o.next)&&(ws(o),o=o.next),o}function ui(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mr(e,e.next)||ge(e.prev,e,e.next)===0)){if(ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ss(i,t,e,n,s,r,o){if(!i)return;!o&&r&&lm(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?tm(i,n,s,r):Q0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),ws(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=em(ui(i),t,e),Ss(i,t,e,n,s,r,2)):o===2&&nm(i,t,e,n,s,r):Ss(ui(i),t,e,n,s,r,1);break}}}function Q0(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,h=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=p&&Fi(s,a,r,l,o,c,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ge(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<d?u<h?u:h:d<h?d:h,v=a>l?a>c?a:c:l>c?l:c,m=u>d?u>h?u:h:d>h?d:h,f=Vo(p,g,t,e,n),x=Vo(v,m,t,e,n);let M=i.prevZ,_=i.nextZ;for(;M&&M.z>=f&&_&&_.z<=x;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Fi(a,u,l,d,c,h,M.x,M.y)&&ge(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Fi(a,u,l,d,c,h,_.x,_.y)&&ge(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Fi(a,u,l,d,c,h,M.x,M.y)&&ge(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=x;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Fi(a,u,l,d,c,h,_.x,_.y)&&ge(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function em(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!mr(s,r)&&dc(s,n,n.next,r)&&bs(s,r)&&bs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ws(n),ws(n.next),n=i=r),n=n.next}while(n!==i);return ui(n)}function nm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&um(o,a)){let l=fc(o,a);o=ui(o,o.next),l=ui(l,l.next),Ss(o,t,e,n,s,r,0),Ss(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function im(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=uc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(hm(c));for(s.sort(sm),r=0;r<s.length;r++)e=rm(s[r],e);return e}function sm(i,t){return i.x-t.x}function rm(i,t){const e=om(i,t);if(!e)return t;const n=fc(e,i);return ui(n,n.next),ui(e,e.next)}function om(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Fi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),bs(e,i)&&(d<u||d===u&&(e.x>s.x||e.x===s.x&&am(s,e)))&&(s=e,u=d)),e=e.next;while(e!==a);return s}function am(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function lm(i,t,e,n){let s=i;do s.z===0&&(s.z=Vo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cm(s)}function cm(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Vo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function hm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function um(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!dm(i,t)&&(bs(i,t)&&bs(t,i)&&fm(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||mr(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mr(i,t){return i.x===t.x&&i.y===t.y}function dc(i,t,e,n){const s=er(ge(i,t,e)),r=er(ge(i,t,n)),o=er(ge(e,n,i)),a=er(ge(e,n,t));return!!(s!==r&&o!==a||s===0&&tr(i,e,t)||r===0&&tr(i,n,t)||o===0&&tr(e,i,n)||a===0&&tr(e,t,n))}function tr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function er(i){return i>0?1:i<0?-1:0}function dm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&dc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function bs(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function fm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function fc(i,t){const e=new Wo(i.i,i.x,i.y),n=new Wo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function pl(i,t,e,n){const s=new Wo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ws(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class _s{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return _s.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ml(t),gl(n,t);let o=t.length;e.forEach(ml);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,gl(n,e[l]);const a=j0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ml(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ua extends Pe{constructor(t=new hc([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:mm;let M,_=!1,I,C,P,E;f&&(M=f.getSpacedPoints(u),_=!0,h=!1,I=f.computeFrenetFrames(u,!1),C=new T,P=new T,E=new T),h||(m=0,p=0,g=0,v=0);const S=a.extractPoints(c);let y=S.shape;const R=S.holes;if(!_s.isClockWise(y)){y=y.reverse();for(let J=0,at=R.length;J<at;J++){const L=R[J];_s.isClockWise(L)&&(R[J]=L.reverse())}}const F=_s.triangulateShape(y,R),V=y;for(let J=0,at=R.length;J<at;J++){const L=R[J];y=y.concat(L)}function q(J,at,L){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(at,L)}const X=y.length,tt=F.length;function W(J,at,L){let Lt,it,St;const rt=J.x-at.x,Ot=J.y-at.y,gt=L.x-J.x,A=L.y-J.y,b=rt*rt+Ot*Ot,G=rt*A-Ot*gt;if(Math.abs(G)>Number.EPSILON){const $=Math.sqrt(b),et=Math.sqrt(gt*gt+A*A),K=at.x-Ot/$,Dt=at.y+rt/$,pt=L.x-A/et,bt=L.y+gt/et,Zt=((pt-K)*A-(bt-Dt)*gt)/(rt*A-Ot*gt);Lt=K+rt*Zt-J.x,it=Dt+Ot*Zt-J.y;const ot=Lt*Lt+it*it;if(ot<=2)return new Q(Lt,it);St=Math.sqrt(ot/2)}else{let $=!1;rt>Number.EPSILON?gt>Number.EPSILON&&($=!0):rt<-Number.EPSILON?gt<-Number.EPSILON&&($=!0):Math.sign(Ot)===Math.sign(A)&&($=!0),$?(Lt=-Ot,it=rt,St=Math.sqrt(b)):(Lt=rt,it=Ot,St=Math.sqrt(b/2))}return new Q(Lt/St,it/St)}const lt=[];for(let J=0,at=V.length,L=at-1,Lt=J+1;J<at;J++,L++,Lt++)L===at&&(L=0),Lt===at&&(Lt=0),lt[J]=W(V[J],V[L],V[Lt]);const dt=[];let Mt,Nt=lt.concat();for(let J=0,at=R.length;J<at;J++){const L=R[J];Mt=[];for(let Lt=0,it=L.length,St=it-1,rt=Lt+1;Lt<it;Lt++,St++,rt++)St===it&&(St=0),rt===it&&(rt=0),Mt[Lt]=W(L[Lt],L[St],L[rt]);dt.push(Mt),Nt=Nt.concat(Mt)}for(let J=0;J<m;J++){const at=J/m,L=p*Math.cos(at*Math.PI/2),Lt=g*Math.sin(at*Math.PI/2)+v;for(let it=0,St=V.length;it<St;it++){const rt=q(V[it],lt[it],Lt);ct(rt.x,rt.y,-L)}for(let it=0,St=R.length;it<St;it++){const rt=R[it];Mt=dt[it];for(let Ot=0,gt=rt.length;Ot<gt;Ot++){const A=q(rt[Ot],Mt[Ot],Lt);ct(A.x,A.y,-L)}}}const Qt=g+v;for(let J=0;J<X;J++){const at=h?q(y[J],Nt[J],Qt):y[J];_?(P.copy(I.normals[0]).multiplyScalar(at.x),C.copy(I.binormals[0]).multiplyScalar(at.y),E.copy(M[0]).add(P).add(C),ct(E.x,E.y,E.z)):ct(at.x,at.y,0)}for(let J=1;J<=u;J++)for(let at=0;at<X;at++){const L=h?q(y[at],Nt[at],Qt):y[at];_?(P.copy(I.normals[J]).multiplyScalar(L.x),C.copy(I.binormals[J]).multiplyScalar(L.y),E.copy(M[J]).add(P).add(C),ct(E.x,E.y,E.z)):ct(L.x,L.y,d/u*J)}for(let J=m-1;J>=0;J--){const at=J/m,L=p*Math.cos(at*Math.PI/2),Lt=g*Math.sin(at*Math.PI/2)+v;for(let it=0,St=V.length;it<St;it++){const rt=q(V[it],lt[it],Lt);ct(rt.x,rt.y,d+L)}for(let it=0,St=R.length;it<St;it++){const rt=R[it];Mt=dt[it];for(let Ot=0,gt=rt.length;Ot<gt;Ot++){const A=q(rt[Ot],Mt[Ot],Lt);_?ct(A.x,A.y+M[u-1].y,M[u-1].x+L):ct(A.x,A.y,d+L)}}}H(),st();function H(){const J=s.length/3;if(h){let at=0,L=X*at;for(let Lt=0;Lt<tt;Lt++){const it=F[Lt];It(it[2]+L,it[1]+L,it[0]+L)}at=u+m*2,L=X*at;for(let Lt=0;Lt<tt;Lt++){const it=F[Lt];It(it[0]+L,it[1]+L,it[2]+L)}}else{for(let at=0;at<tt;at++){const L=F[at];It(L[2],L[1],L[0])}for(let at=0;at<tt;at++){const L=F[at];It(L[0]+X*u,L[1]+X*u,L[2]+X*u)}}n.addGroup(J,s.length/3-J,0)}function st(){const J=s.length/3;let at=0;Ct(V,at),at+=V.length;for(let L=0,Lt=R.length;L<Lt;L++){const it=R[L];Ct(it,at),at+=it.length}n.addGroup(J,s.length/3-J,1)}function Ct(J,at){let L=J.length;for(;--L>=0;){const Lt=L;let it=L-1;it<0&&(it=J.length-1);for(let St=0,rt=u+m*2;St<rt;St++){const Ot=X*St,gt=X*(St+1),A=at+Lt+Ot,b=at+it+Ot,G=at+it+gt,$=at+Lt+gt;yt(A,b,G,$)}}}function ct(J,at,L){l.push(J),l.push(at),l.push(L)}function It(J,at,L){Pt(J),Pt(at),Pt(L);const Lt=s.length/3,it=x.generateTopUV(n,s,Lt-3,Lt-2,Lt-1);Xt(it[0]),Xt(it[1]),Xt(it[2])}function yt(J,at,L,Lt){Pt(J),Pt(at),Pt(Lt),Pt(at),Pt(L),Pt(Lt);const it=s.length/3,St=x.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);Xt(St[0]),Xt(St[1]),Xt(St[3]),Xt(St[1]),Xt(St[2]),Xt(St[3])}function Pt(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Xt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new hr[s.type]().fromJSON(s)),new ua(n,t.options)}}const mm={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new Q(r,o),new Q(a,l),new Q(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],p=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-d),new Q(h,1-g),new Q(v,1-f)]:[new Q(a,1-l),new Q(u,1-d),new Q(p,1-g),new Q(m,1-f)]}};function gm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Zi extends ha{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zi(t.radius,t.detail)}}class jt extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new T,h=new T,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const x=[],M=f/n;let _=0;f===0&&o===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){const C=I/e;d.x=-t*Math.cos(s+C*r)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(s+C*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(C+_,1-M),x.push(c++)}u.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const M=u[f][x+1],_=u[f][x],I=u[f+1][x],C=u[f+1][x+1];(f!==0||o>0)&&p.push(M,_,C),(f!==n-1||l<Math.PI)&&p.push(_,I,C)}this.setIndex(p),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oe extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new T,d=new T,h=new T;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,x=(s+1)*p+g;o.push(v,m,x),o.push(m,f,x)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ur extends Pe{constructor(t=new lc(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,l=new T,c=new Q;let u=new T;const d=[],h=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(p,2));function v(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),x(),f()}function m(M){u=t.getPointAt(M/e,u);const _=o.normals[M],I=o.binormals[M];for(let C=0;C<=s;C++){const P=C/s*Math.PI*2,E=Math.sin(P),S=-Math.cos(P);l.x=S*_.x+E*I.x,l.y=S*_.y+E*I.y,l.z=S*_.z+E*I.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){const I=(s+1)*(M-1)+(_-1),C=(s+1)*M+(_-1),P=(s+1)*M+_,E=(s+1)*(M-1)+_;g.push(I,C,E),g.push(C,P,E)}}function x(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)c.x=M/e,c.y=_/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ur(new hr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class di extends Rs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class da extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vm extends da{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $r=new pe,vl=new T,_l=new T;class pc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(vl),_l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_l),e.updateMatrixWorld(),$r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xl=new pe,cs=new T,Zr=new T;class _m extends pc{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cs.setFromMatrixPosition(t.matrixWorld),n.position.copy(cs),Zr.copy(n.position),Zr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zr),n.updateMatrixWorld(),s.makeTranslation(-cs.x,-cs.y,-cs.z),xl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl)}}class xm extends da{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _m}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Mm extends pc{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kr extends da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Mm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);const Xo={badgeText:"מוקד שירות",parodyOrgShort:"אוני׳ ההפתעה",appearance:{skinTone:13209194,hairColor:986643,hairHighlightColor:2499632,sweaterColor:15229261,sweaterRibColor:12731186,jeansColor:3497100,jeansSeamColor:6063544,shoeColor:16777215,shoeSoleColor:15659767,backpackColor:16103227,lanyardColor:1920728,headsetColor:2237999,headsetAccentColor:3718648}},qo={gameTitleEn:"OPEN UNIVERSITY ESCAPE",gameSubtitleHe:"הבריחה מהפתוחה",portalNameHe:"מערכת שאילתא־פאניקה"},ym=["אני לא יכולה יותר!","שמו לי משמרת בשישי?!","משמרת בשישי בבוקר?! אני לא יכולה יותר!","לא עובדת בשישי, ביי!","רק תנו לי לשתות תה בשקט! 🍵","די, אני בורחת מהפתוחה!"],Ht={laneX:[-2.4,0,2.4],trackTotalWidth:8.6,segmentLength:24,activeSegmentsAhead:9,despawnZ:28,baseSpeed:13.5,maxSpeed:31.5,speedRampPerSec:.085,turboSpeedMultiplier:1.78,jumpVelocity:14,gravity:-38.5,fastFallGravityMultiplier:2.4,slideDuration:.68,jumpBufferSec:.13,coyoteTimeSec:.08},mc={magnet:9,shield:11,turbo:5.5,silent:8},gc={magnet:{title:"מגנט תה",icon:"🍵",color:"#10b981"},shield:{title:"מגן ימי חופש",icon:"🛡️",color:"#10b981"},turbo:{title:"טורבו חופשה",icon:"✈️",color:"#38bdf8"},silent:{title:"מצב שקט",icon:"🔇",color:"#a855f7"}},Me=[{id:"call_center",order:0,nameHe:"מוקד השירות",nameEn:"THE CALL CENTER",subtitleHe:"שלוחה 1 לפניות, שלוחה 2 לבריחה",startDistance:0,endDistance:260,floorColor:14410735,floorAccentColor:3900150,wallColor:15725819,trimColor:1982639,skyColor:13362175,fogColor:14281215,ambientColor:16054271,sunColor:16774885,bossTitleHe:"טלפון הברזל המתגלגל",bossWarningHe:"זהירות! הטלפון הענק של המוקד רודף אחרייך!",quotes:["שמו לי משמרת בשישי?!","אני לא יכולה יותר!","שיבצו אותך גם לשישי בבוקר!","רק שאלה קטנה...","אפשר לדבר עם מנהל?","אני כבר שלוש פעמים מתקשר!","רגע, אל תנתקי!","הפנייה שלך בטיפול.","אבל בצ׳אט כתבו לי אחרת!"],obstacleKinds:["swivel_chair","ringing_desk","spitting_printer","document_cart","cable_barrier","call_center_student"],zoneCollectibles:["vacation_day","sick_note","call_headset"]},{id:"registration",order:1,nameHe:"מחלקת ההרשמה",nameEn:"REGISTRATION DEPT.",subtitleHe:"תביאי טופס חתום בשלושה העתקים",startDistance:260,endDistance:560,floorColor:15134697,floorAccentColor:889992,wallColor:15857909,trimColor:1013358,skyColor:13234404,fogColor:14284268,ambientColor:15925243,sunColor:16774102,bossTitleHe:"נרשם הרגע האחרון",bossWarningHe:"בוס מחלקה! סטודנט מנסה להירשם אחרי הדדליין!",quotes:["ההרשמה נסגרה אתמול!","אבל אמרו לי שאפשר...","חסר לך מסמך אחד.","אפשר להירשם בלי לשלם כרגע?","שלחתי פקס, לא קיבלתם?"],obstacleKinds:["form_stack","student_docs","revolving_door","paper_printer_gate","queue_barrier"],zoneCollectibles:["reg_form","payment_approval","signed_doc"]},{id:"achievements",order:2,nameHe:"מחלקת הישגים לימודיים",nameEn:"ACADEMIC ACHIEVEMENTS",subtitleHe:"ממתינים להזנת ציונים...",startDistance:560,endDistance:900,floorColor:15591927,floorAccentColor:8141549,wallColor:16184319,trimColor:5972406,skyColor:14670079,fogColor:15262463,ambientColor:16250111,sunColor:16773350,bossTitleHe:"מתקפת מסכי הטעינה",bossWarningHe:"אזהרה! סטודנט מרפרש ציונים ותוקע את המסדרון!",quotes:["מתי מתפרסמים הציונים?","הגשתי ערעור לפני חודש.","איך יכול להיות שקיבלתי 59?","אני צריך אישור זכאות דחוף!","חסרה לי נקודת זכות אחת לתואר!"],obstacleKinds:["falling_exam","flying_books","grade_sheet_arch","grade_student","giant_hourglass"],zoneCollectibles:["grade_100","credit_points","eligibility_cert","honor_cert"]},{id:"departments",order:3,nameHe:"המחלקות האקדמיות",nameEn:"ACADEMIC DEPARTMENTS",subtitleHe:"אזור הספרייה וחדרי המרצים",startDistance:900,endDistance:1280,floorColor:16116444,floorAccentColor:11817737,wallColor:16578028,trimColor:7877903,skyColor:16771272,fogColor:16444375,ambientColor:16775149,sunColor:16770229,bossTitleHe:"מגדל הספרים של המרצה",bossWarningHe:"המרצה חוסם את המסדרון עם ערימת ספרים אימתנית!",quotes:["צריך לבדוק מול המחלקה האקדמית.","המרצה עדיין לא ענה.","שינו את דרישות הקורס.","מי אחראי על הקורס הזה?","זה מופיע בסילבוס, עמוד 47!"],obstacleKinds:["falling_bookshelf","crossing_lecturer","moving_whiteboard","paper_pile","swinging_door"],zoneCollectibles:["credit_points","vacation_day","exit_ticket"]},{id:"counseling",order:4,nameHe:"מערך הייעוץ",nameEn:"ACADEMIC COUNSELING",subtitleHe:"רק לבנות תוכנית לימודים מהירה",startDistance:1280,endDistance:1680,floorColor:14938617,floorAccentColor:165063,wallColor:15792639,trimColor:223649,skyColor:12773119,fogColor:14348543,ambientColor:15792639,sunColor:16774614,bossTitleHe:"סופת תוכניות הלימודים",bossWarningHe:"בוס ייעוץ! לוחות זמנים וקורסים עפים מכל כיוון!",quotes:["אני עדיין לא יודע מה ללמוד.","איזה קורס כדאי לקחת?","אפשר לסיים תואר בשנה?","אני רוצה לדבר עם יועץ עכשיו.","אפשר לבנות לי תוכנית לימודים?"],obstacleKinds:["giant_planner","schedule_beam","indecisive_student","spinning_clock","curriculum_stack"],zoneCollectibles:["vacation_day","sick_note","exit_ticket"]},{id:"freedom",order:5,nameHe:"הדרך לחופש",nameEn:"FREEDOM RUN",subtitleHe:"שערי האוניברסיטה ומסלול ההמראה!",startDistance:1680,endDistance:2100,floorColor:4147030,floorAccentColor:16347926,wallColor:6583435,trimColor:16096779,skyColor:16747359,fogColor:16757642,ambientColor:16768968,sunColor:16757606,bossTitleHe:"המרדף האחרון למטוס",bossWarningHe:"מנהל המוקד והטלפון האחרון בעקבותייך — רוצי למטוס!",quotes:["שמו לי משמרת בשישי?! ביי!!","אני לא יכולה יותר!","רק שאלה אחרונה!","איפה את הולכת באמצע משמרת?!","הלקוח עדיין על הקו!","המטוס מחכה בקצה המסלול!"],obstacleKinds:["last_phone","chasing_manager_block","last_question_student"],zoneCollectibles:["vacation_day","exit_ticket","credit_points"]}],fs=Me.reduce((i,t)=>(i[t.id]=t,i),{}),Gi=[{id:"classic",name:"עובדת מוקד קלאסית",description:"סוודר נעים, ג׳ינס, נעליים לבנות ואוזניית מוקד.",price:0,sweaterColor:14245192,sweaterRibColor:12142131,jeansColor:3101824,shoeColor:16251130,backpackColor:15906891},{id:"picnic",name:"הלוק האמיתי (פיקניק)",description:"חולצה שחורה צמודה, טרנינג אפור בהיר, שרשרת כסף ונעליים לבנות — בול כמו בתמונה!",price:0,sweaterColor:1579037,sweaterRibColor:2565934,jeansColor:12765652,shoeColor:16777215,backpackColor:1976635},{id:"vacation",name:"עובדת בחופשה",description:"סוודר טורקיז קליל, שרשרת פרחים ומצב רוח של נתב״ג.",price:60,sweaterColor:1357990,sweaterRibColor:1013358,jeansColor:3894440,shoeColor:16777215,backpackColor:16478597,hasVacationLei:!0,hasSunglasses:!0},{id:"pajamas",name:"עובדת עם פיג׳מה",description:"משמרת בוקר מהבית עם פיג׳מת פסטל ונעלי בית לבנות.",price:110,sweaterColor:12616956,sweaterRibColor:9647082,jeansColor:10980346,shoeColor:16710083,backpackColor:16020150,isPajama:!0},{id:"sunglasses",name:"עובדת עם משקפי שמש",description:"לא רואה את תור השיחות, לא שומעת תלונות.",price:150,sweaterColor:2450411,sweaterRibColor:1920728,jeansColor:1981023,shoeColor:16317180,backpackColor:16498468,hasSunglasses:!0},{id:"crown",name:"עובדת עם כתר",description:"מלכת המוקד ששרדה מאה פניות ביום אחד.",price:240,sweaterColor:14362487,sweaterRibColor:10295117,jeansColor:2968183,shoeColor:16777215,backpackColor:16638023,hasCrown:!0},{id:"pilot",name:"עובדת עם מדי טייסת",description:"מוכנה להטיס את עצמה רחוק מהאוניברסיטה.",price:350,sweaterColor:1976635,sweaterRibColor:16096779,jeansColor:988970,shoeColor:16317180,backpackColor:3718648,hasPilotCap:!0,hasSunglasses:!0},{id:"stewardess",name:"מדי דיילת אוויר",description:"ז׳קט כחול-תעופה אלגנטי, מטפחת צוואר אדומה וכובע דיילת.",price:180,sweaterColor:1981066,sweaterRibColor:15680580,jeansColor:1516884,shoeColor:988970,backpackColor:14427686,hasStewardessCap:!0}],Sm=[{id:"loose_curls",name:"תלתלים גולשים",description:"תלתלים טבעיים שופעים גולשים אל מעבר לכתפיים."},{id:"spiral_curls",name:"תלתלי ספירלה",description:"תלתלי בקבוקים וספירלות הדוקות עם קפיציות גבוהה."},{id:"afro_curls",name:"תלתלי נפח",description:"שיער מתולתל עשיר, מלא נפח ונוכחות."},{id:"beach_waves",name:"גלי ים ארוכים",description:"שיער ארוך גלי וחלק יותר עם פיתולים רכים."}],Yo=[{id:"call_disconnected",title:"השיחה נותקה",description:"שרדת 60 שניות של בריחה רצופה",rewardCoins:25,icon:"📵"},{id:"no_idea_who",title:"אין לי מושג מי מטפל בזה",description:"עברת בין כל 5 המחלקות של האוניברסיטה",rewardCoins:45,icon:"🤷‍♀️"},{id:"exit_permit",title:"אישור יציאה",description:"אספת 100 ימי חופש במצטבר",rewardCoins:60,icon:"🌴"},{id:"agent_of_month",title:"מוקדנית החודש",description:"הגעת ל-10,000 נקודות בריצה אחת",rewardCoins:50,icon:"🏆"},{id:"no_callbacks",title:"בלי שיחות חוזרות",description:"התחמקת מ-20 מכשולים ברצף בלי להיפגע",rewardCoins:35,icon:"⚡"},{id:"unavailable_now",title:"לא זמינה כרגע",description:"שרדת 5 דקות (300 שניות) בריצה אחת",rewardCoins:100,icon:"✈️"},{id:"transferred_dept",title:"העבירו אותי למחלקה אחרת",description:"ביקרת בכל האזורים עד הדרך לחופש",rewardCoins:65,icon:"🏃‍♀️"},{id:"finally_free",title:"סוף סוף חופש",description:"עלית על המטוס והשלמת את ריצת הסיום",rewardCoins:150,icon:"🎉"}],$o=[{id:"m_dist_300",title:"רוצי 300 מטר בריצה אחת",target:300,type:"distance_run",rewardCoins:20},{id:"m_coins_25",title:"אספי 25 כוסות תה בריצה אחת",target:25,type:"coins_run",rewardCoins:25},{id:"m_nearmiss_5",title:"בצעי 5 התחמקויות של הרגע האחרון",target:5,type:"near_miss_run",rewardCoins:30},{id:"m_streak_30",title:"עקפי 30 מכשולים ברצף",target:30,type:"streak_run",rewardCoins:35},{id:"m_zones_4",title:"הגיעי ל-4 מחלקות בריצה אחת",target:4,type:"zones_run",rewardCoins:45},{id:"m_vac_10",title:"אספי 10 ימי חופש במצטבר",target:10,type:"vacation_total",rewardCoins:40}],bm={low:{maxDpr:1.25,shadows:!1,shadowMapSize:512,particleMultiplier:.5,decorDensity:.55,fogFar:95},medium:{maxDpr:1.75,shadows:!0,shadowMapSize:1024,particleMultiplier:.85,decorDensity:.85,fogFar:115},high:{maxDpr:2,shadows:!0,shadowMapSize:2048,particleMultiplier:1,decorDensity:1,fogFar:135}},se={introWaiting:"הודעה דחופה מהמנהל: שיבצנו אותך למשמרת בשישי! 📅",introRing:"שיבוץ משמרת שישי! 📞",introLeave:"שמו לי משמרת בשישי?! אני לא יכולה יותר!",btnStart:"התחלת בריחה",btnWardrobe:"ארון בגדים",btnAchievements:"הישגים",btnSettings:"הגדרות",btnResume:"המשך משחק",btnRestart:"ניסיון נוסף",btnMenu:"תפריט ראשי",btnMenuShort:"חזרה לתפריט",btnClose:"סגירה",btnContinueEndless:"המשך לסיבוב אינסופי (×2 ניקוד!)",pauseTitle:"הפסקת תה קצרה",pauseSub:"הסטודנטים עדיין ממתינים על הקו...",gameOverTitle:"נתפסת! חזרי למוקד.",gameOverNewRecord:"שיא אישי חדש! 🏆",victoryTitleEn:"YOU ARE FREE!",victorySubtitle:"ברכות! הצלחת לברוח מהאוניברסיטה הפתוחה.",victoryLine1:"סוף סוף אין לך שיחות ממתינות.",victoryLine2:"נותרו 0 פניות פתוחות.",nearMissToast:"כמעט! על הקשקש! ⚡",shieldSavedToast:"אישור מחלה הציל אותך! 🛡️",controlsHintTouch:"החליקי שמאלה / ימינה / למעלה / למטה כדי לשלוט",controlsHintDesktop:"חצים / WASD לתזוזה, קפיצה והחלקה • Esc להפסקה"},Zo=new Map;function Ve(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const s=typeof navigator<"u"&&navigator.userAgent.includes("jsdom")?null:e.getContext("2d");if(s)return[e,s];const r=()=>{},o={addColorStop:r},a=new Proxy({fillStyle:"#000",strokeStyle:"#000",lineWidth:1,lineCap:"round",lineJoin:"round",globalAlpha:1,direction:"rtl",textAlign:"center",textBaseline:"middle",font:"16px sans-serif",createLinearGradient:()=>o,createRadialGradient:()=>o},{get(l,c){return c in l?l[c]:r}});return[e,a]}function We(i,t,e=1,n=1,s=!0){const r=new k0(t);return r.colorSpace=s?Fe:Mn,(e!==1||n!==1)&&(r.wrapS=xs,r.wrapT=xs,r.repeat.set(e,n)),r.anisotropy=4,r.needsUpdate=!0,Zo.set(i,r),r}function Xe(i,t){const e=Zo.get(i);if(e)return e;const n=t();return Zo.set(i,n),n}function vc(i,t){const e=`sweater_${i}_${t}`;return Xe(e,()=>{const[n,s]=Ve(128,128);s.fillStyle=`#${i.toString(16).padStart(6,"0")}`,s.fillRect(0,0,128,128);const r=`#${t.toString(16).padStart(6,"0")}`;s.strokeStyle=r,s.lineWidth=2,s.globalAlpha=.42;for(let o=0;o<128;o+=8)for(let a=0;a<128;a+=12)s.beginPath(),s.moveTo(a,o),s.lineTo(a+5,o+6),s.lineTo(a+10,o),s.stroke();return s.globalAlpha=1,We(e,n,3,3)})}function _c(i,t){const e=`denim_${i}_${t}`;return Xe(e,()=>{const[n,s]=Ve(128,128);s.fillStyle=`#${i.toString(16).padStart(6,"0")}`,s.fillRect(0,0,128,128),s.strokeStyle=`#${t.toString(16).padStart(6,"0")}`,s.globalAlpha=.25,s.lineWidth=1.5;for(let r=-128;r<256;r+=6)s.beginPath(),s.moveTo(r,0),s.lineTo(r+128,128),s.stroke();return s.globalAlpha=1,We(e,n,2,2)})}function wm(i=Xo.badgeText){const t=`badge_${i}`;return Xe(t,()=>{const[e,n]=Ve(256,160);return n.fillStyle="#ffffff",n.fillRect(0,0,256,160),n.fillStyle="#1d4ed8",n.fillRect(0,0,256,42),n.direction="rtl",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#ffffff",n.font='bold 24px "Heebo", "Rubik", "Arial", sans-serif',n.fillText(Xo.parodyOrgShort,128,22),n.fillStyle="#0f172a",n.font='bold 34px "Heebo", "Rubik", "Arial", sans-serif',n.fillText(i,128,86),n.fillStyle="#ef4444",n.font='bold 20px "Heebo", "Rubik", "Arial", sans-serif',n.fillText("שלוחה 1 • דחוף",128,130),n.strokeStyle="#1e3a8a",n.lineWidth=6,n.strokeRect(3,3,250,154),We(t,e)})}function On(i,t,e,n,s){const r=`sign_${i}_${t}_${e}`;return Xe(r,()=>{const[o,a]=Ve(512,192);return a.fillStyle=e,a.fillRect(0,0,512,192),a.fillStyle=s,a.fillRect(0,0,512,20),a.fillRect(0,172,512,20),a.direction="rtl",a.textAlign="center",a.textBaseline="middle",a.fillStyle=n,a.font='900 54px "Heebo", "Rubik", "Arial", sans-serif',a.fillText(i,256,76,470),t&&(a.font='800 30px "Heebo", "Rubik", "Arial", sans-serif',a.globalAlpha=.92,a.fillText(t,256,136,470),a.globalAlpha=1),a.strokeStyle=s,a.lineWidth=8,a.strokeRect(8,8,496,176),We(r,o)})}function Ml(i,t,e){const n=`floor_v2_${i}_${t}_${e}`;return Xe(n,()=>{const[s,r]=Ve(512,512),o=`#${t.toString(16).padStart(6,"0")}`,a=`#${e.toString(16).padStart(6,"0")}`;if(r.fillStyle=o,r.fillRect(0,0,512,512),i==="freedom"){const l=r.createLinearGradient(0,0,512,0);l.addColorStop(0,"#334155"),l.addColorStop(.5,"#475569"),l.addColorStop(1,"#334155"),r.fillStyle=l,r.fillRect(0,0,512,512),r.fillStyle="rgba(255,255,255,0.06)";for(let c=0;c<480;c++)r.fillRect(c*73%512,c*137%512,3,3);r.fillStyle="#f59e0b",r.fillRect(10,0,18,512),r.fillRect(484,0,18,512),r.fillStyle="#fef08a",r.fillRect(32,0,5,512),r.fillRect(475,0,5,512),r.fillStyle="#f8fafc";for(let c=16;c<512;c+=96)r.fillRect(166,c,10,54),r.fillRect(336,c,10,54)}else{const l=r.createLinearGradient(0,0,512,0);l.addColorStop(0,"rgba(15, 23, 42, 0.08)"),l.addColorStop(.18,"rgba(255, 255, 255, 0.14)"),l.addColorStop(.5,"rgba(255, 255, 255, 0.22)"),l.addColorStop(.82,"rgba(255, 255, 255, 0.14)"),l.addColorStop(1,"rgba(15, 23, 42, 0.08)"),r.fillStyle=l,r.fillRect(0,0,512,512);for(let c=0;c<=512;c+=64)r.strokeStyle="rgba(15, 23, 42, 0.08)",r.lineWidth=3,r.beginPath(),r.moveTo(c,0),r.lineTo(c,512),r.stroke(),r.strokeStyle="rgba(255, 255, 255, 0.25)",r.lineWidth=1.5,r.beginPath(),r.moveTo(c+2,0),r.lineTo(c+2,512),r.stroke();for(let c=0;c<=512;c+=64)r.strokeStyle="rgba(15, 23, 42, 0.08)",r.lineWidth=3,r.beginPath(),r.moveTo(0,c),r.lineTo(512,c),r.stroke(),r.strokeStyle="rgba(255, 255, 255, 0.25)",r.lineWidth=1.5,r.beginPath(),r.moveTo(0,c+2),r.lineTo(512,c+2),r.stroke();r.fillStyle=a,r.globalAlpha=.34,r.fillRect(164,0,10,512),r.fillRect(338,0,10,512),r.globalAlpha=.14;for(const c of[92,256,420])for(let u=80;u<512;u+=192)r.beginPath(),r.moveTo(c-22,u+18),r.lineTo(c,u),r.lineTo(c+22,u+18),r.lineTo(c+15,u+24),r.lineTo(c,u+11),r.lineTo(c-15,u+24),r.closePath(),r.fill();r.globalAlpha=.72,r.fillRect(6,0,16,512),r.fillRect(490,0,16,512),r.globalAlpha=1}return We(n,s,1,3)})}function xc(i=0){const t=`monitor_v2_${i}`;return Xe(t,()=>{const[e,n]=Ve(320,200);if(n.fillStyle="#0f172a",n.fillRect(0,0,320,200),n.fillStyle=i===1?"#dc2626":i===0?"#1d4ed8":"#0d9488",n.fillRect(0,0,320,44),n.direction="rtl",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#ffffff",n.font='bold 21px "Heebo", "Arial", sans-serif',n.fillText(i===1?"⚠️ התראת משמרת דחופה!":qo.portalNameHe,160,22,300),i===1)n.fillStyle="#fef08a",n.font='900 25px "Heebo", "Arial", sans-serif',n.fillText("שיבוץ חדש: משמרת שישי!",160,88,300),n.fillStyle="#fca5a5",n.font='bold 21px "Heebo", "Arial", sans-serif',n.fillText("יום שישי 08:00–14:00 📅",160,126,290),n.fillStyle="#ef4444",n.fillRect(36,154,248,24),n.fillStyle="#ffffff",n.font='bold 16px "Heebo", "Arial", sans-serif',n.fillText("אין שחרור — המוקד פתוח!",160,166,240);else{n.fillStyle="#f8fafc",n.font='bold 24px "Heebo", "Arial", sans-serif';const s=i===0?"47 שיחות ממתינות!":"הפנייה בטיפול... (99+)";n.fillText(s,160,102,290),n.fillStyle="#38bdf8",n.fillRect(34,146,252,20),n.fillStyle="#fbbf24",n.fillRect(34,146,165,20)}return We(t,e)})}function Pi(i){const t=`paper_${i}`;return Xe(t,()=>{const[e,n]=Ve(256,320);if(n.fillStyle="#fffdf7",n.fillRect(0,0,256,320),n.direction="rtl",n.textAlign="center",i==="grade100")n.strokeStyle="#16a34a",n.lineWidth=10,n.strokeRect(10,10,236,300),n.fillStyle="#15803d",n.font='900 92px "Heebo", "Arial", sans-serif',n.fillText("100",128,150),n.font='bold 28px "Heebo", "Arial", sans-serif',n.fillText("ציון סופי!",128,225);else if(i==="exam"){n.fillStyle="#1e293b",n.font='bold 30px "Heebo", "Arial", sans-serif',n.fillText("מבחן מועד א׳",128,54),n.fillStyle="#dc2626",n.font='900 54px "Heebo", "Arial", sans-serif',n.fillText("59!",128,145),n.fillStyle="#64748b";for(let s=195;s<285;s+=22)n.fillRect(36,s,184,7)}else if(i==="calendar")n.fillStyle="#dc2626",n.fillRect(0,0,256,72),n.fillStyle="#ffffff",n.font='bold 32px "Heebo", "Arial", sans-serif',n.fillText("לוח ייעוץ",128,46),n.fillStyle="#0f172a",n.font='900 90px "Heebo", "Arial", sans-serif',n.fillText("08",128,185),n.font='bold 24px "Heebo", "Arial", sans-serif',n.fillStyle="#ef4444",n.fillText("תפוס לגמרי!",128,260);else if(i==="whiteboard")n.fillStyle="#ffffff",n.fillRect(0,0,256,320),n.strokeStyle="#94a3b8",n.lineWidth=10,n.strokeRect(5,5,246,310),n.fillStyle="#2563eb",n.font='bold 28px "Heebo", "Arial", sans-serif',n.fillText("סילבוס מעודכן",128,65),n.fillStyle="#dc2626",n.font='bold 24px "Heebo", "Arial", sans-serif',n.fillText("שינוי בדרישות!",128,130),n.strokeStyle="#0f172a",n.lineWidth=4,n.beginPath(),n.moveTo(40,200),n.lineTo(120,175),n.lineTo(215,235),n.stroke();else{n.fillStyle="#0f766e",n.fillRect(0,0,256,52),n.fillStyle="#ffffff",n.font='bold 26px "Heebo", "Arial", sans-serif',n.fillText("טופס 104-ב׳",128,35),n.fillStyle="#334155";for(let s=85;s<270;s+=26)n.fillRect(32,s,192,9);n.strokeStyle="#dc2626",n.lineWidth=5,n.strokeRect(54,210,148,52),n.fillStyle="#dc2626",n.font='bold 24px "Heebo", "Arial", sans-serif',n.fillText("חסרה חתימה",128,244)}return We(t,e)})}function Em(){const i="loading_wall";return Xe(i,()=>{const[t,e]=Ve(384,384);return e.fillStyle="#1e1b4b",e.fillRect(0,0,384,384),e.strokeStyle="#8b5cf6",e.lineWidth=12,e.strokeRect(8,8,368,368),e.strokeStyle="#38bdf8",e.lineWidth=18,e.beginPath(),e.arc(192,140,58,0,Math.PI*1.55),e.stroke(),e.direction="rtl",e.textAlign="center",e.fillStyle="#ffffff",e.font='900 40px "Heebo", "Arial", sans-serif',e.fillText("טוען ציונים...",192,260),e.fillStyle="#fbbf24",e.font='bold 24px "Heebo", "Arial", sans-serif',e.fillText("נא לרענן שוב (99%)",192,316),We(i,t)})}function Tm(){const i="blob_shadow";return Xe(i,()=>{const[t,e]=Ve(128,128),n=e.createRadialGradient(64,64,6,64,64,60);return n.addColorStop(0,"rgba(15, 23, 42, 0.45)"),n.addColorStop(.55,"rgba(15, 23, 42, 0.22)"),n.addColorStop(1,"rgba(15, 23, 42, 0.0)"),e.fillStyle=n,e.fillRect(0,0,128,128),We(i,t,1,1,!1)})}function Am(i,t){const e=`hair_strand_v3_${i}_${t}`;return Xe(e,()=>{const[n,s]=Ve(256,256),r=`#${i.toString(16).padStart(6,"0")}`,o=`#${t.toString(16).padStart(6,"0")}`;s.fillStyle=r,s.fillRect(0,0,256,256);for(let l=0;l<256;l+=4)s.fillStyle=o,s.globalAlpha=.2+l*17%10*.025,s.fillRect(l,0,2,256);const a=s.createLinearGradient(0,0,0,256);return a.addColorStop(0,"rgba(10, 10, 16, 0.28)"),a.addColorStop(.3,"rgba(74, 72, 92, 0.18)"),a.addColorStop(.6,"rgba(16, 15, 22, 0.08)"),a.addColorStop(.82,"rgba(64, 62, 82, 0.14)"),a.addColorStop(1,"rgba(10, 10, 16, 0.24)"),s.globalAlpha=1,s.fillStyle=a,s.fillRect(0,0,256,256),We(e,n,2,1)})}function yl(i,t,e){const n=`wall_panel_${i}_${t}_${e}`;return Xe(n,()=>{const[s,r]=Ve(512,512),o=`#${i.toString(16).padStart(6,"0")}`,a=`#${t.toString(16).padStart(6,"0")}`,l=`#${e.toString(16).padStart(6,"0")}`;r.fillStyle=o,r.fillRect(0,0,512,512),r.fillStyle=l,r.globalAlpha=.18,r.fillRect(0,320,512,192),r.globalAlpha=1,r.fillStyle=a,r.fillRect(0,308,512,18),r.fillRect(0,488,512,24);for(const c of[34,274]){r.fillStyle=a,r.fillRect(c-8,42,212,232);const u=r.createLinearGradient(0,50,0,266);u.addColorStop(0,"#bae6fd"),u.addColorStop(.55,"#e0f2fe"),u.addColorStop(1,"#fff7ed"),r.fillStyle=u,r.fillRect(c,50,196,216),r.fillStyle="rgba(255, 255, 255, 0.42)",r.beginPath(),r.moveTo(c+20,50),r.lineTo(c+75,50),r.lineTo(c+25,266),r.lineTo(c,266),r.closePath(),r.fill(),r.fillStyle=a,r.fillRect(c+94,50,8,216),r.fillRect(c,152,196,8)}return We(n,s,3,1)})}function Mc(i,t){const e=`heroine_face_v4_${i}_${t?1:0}`;return Xe(e,()=>{const[r,o]=Ve(1024,512),a=1024/2;o.fillStyle="#c98e6a",o.fillRect(0,0,1024,512);const l=o.createRadialGradient(a,244,14,a,250,170);l.addColorStop(0,"rgba(235, 186, 152, 0.22)"),l.addColorStop(.6,"rgba(220, 165, 130, 0.1)"),l.addColorStop(1,"rgba(201, 142, 106, 0)"),o.fillStyle=l,o.fillRect(a-220,120,440,260);const c=o.createLinearGradient(0,340,0,450);c.addColorStop(0,"rgba(155, 96, 62, 0)"),c.addColorStop(.6,"rgba(155, 96, 62, 0.22)"),c.addColorStop(1,"rgba(138, 82, 50, 0.34)"),o.fillStyle=c,o.fillRect(0,340,1024,172);for(const v of[-1,1]){const m=a+v*68,f=280;o.save(),o.translate(m,f),o.scale(42/28,24/28);const x=o.createRadialGradient(0,0,2,0,0,28);x.addColorStop(0,"rgba(228, 96, 104, 0.28)"),x.addColorStop(.55,"rgba(228, 96, 104, 0.12)"),x.addColorStop(1,"rgba(228, 96, 104, 0)"),o.fillStyle=x,o.beginPath(),o.arc(0,0,28,0,Math.PI*2),o.fill(),o.restore()}o.fillStyle="#0f0e13",o.fillRect(0,0,a-268,512),o.fillRect(a+268,0,1024-(a+268),512),o.beginPath(),o.moveTo(0,0),o.lineTo(1024,0),o.lineTo(1024,172),o.quadraticCurveTo(a+210,162,a,114),o.quadraticCurveTo(a-210,162,0,172),o.closePath(),o.fill();const u=o.createRadialGradient(a,266,1,a,266,8);u.addColorStop(0,"rgba(248, 212, 184, 0.34)"),u.addColorStop(1,"rgba(248, 212, 184, 0)"),o.fillStyle=u,o.beginPath(),o.arc(a,266,8,0,Math.PI*2),o.fill();const d=o.createRadialGradient(a,276,1,a,276,12);d.addColorStop(0,"rgba(145, 82, 52, 0.3)"),d.addColorStop(1,"rgba(145, 82, 52, 0)"),o.fillStyle=d,o.beginPath(),o.arc(a,276,12,0,Math.PI*2),o.fill(),o.strokeStyle="rgba(130, 72, 46, 0.28)",o.lineWidth=1.6,o.lineCap="round";for(const v of[-1,1])o.beginPath(),o.arc(a+v*6.5,274.5,3.2,v<0?Math.PI*.2:Math.PI*.8,v<0?Math.PI*.75:Math.PI*.25,v>0),o.stroke();const h=i==="neutral"||i==="happy";for(const v of[-1,1]){const m=a+v*54,f=240;if(t){o.strokeStyle="#100b0c",o.lineWidth=5,o.lineCap="round",o.beginPath(),o.moveTo(m-v*26,f+2),o.quadraticCurveTo(m,f+13,m+v*28,f),o.stroke(),o.lineWidth=3.2,o.beginPath(),o.moveTo(m+v*23,f+1),o.lineTo(m+v*32,f-6),o.stroke();continue}if(i==="dizzy"){o.fillStyle="#fffdfa",o.beginPath(),o.ellipse(m,f,25,23,0,0,Math.PI*2),o.fill(),o.strokeStyle="#100b0c",o.lineWidth=3.5,o.stroke(),o.beginPath();for(let P=0;P<Math.PI*3.5;P+=.2){const E=P*1.65,S=m+Math.cos(P*v)*E,y=f+Math.sin(P)*E;P===0?o.moveTo(S,y):o.lineTo(S,y)}o.lineWidth=2.8,o.stroke();continue}o.strokeStyle="rgba(138, 78, 48, 0.55)",o.lineWidth=2,o.lineCap="round",o.beginPath(),o.moveTo(m-v*23,f-22),o.quadraticCurveTo(m,f-33,m+v*27,f-21),o.stroke();const x=()=>{const P=m-v*28,E=f+2,S=m+v*29,y=f-4,R=h?22:27;o.beginPath(),o.moveTo(P,E),o.bezierCurveTo(m-v*12,f-30,m+v*16,f-28,S,y),o.bezierCurveTo(m+v*14,f+R,m-v*12,f+R+1,P,E),o.closePath()};o.save(),x(),o.fillStyle="#fffdfa",o.fill(),o.clip();const M=o.createLinearGradient(0,f-26,0,f-4);M.addColorStop(0,"rgba(95, 78, 92, 0.3)"),M.addColorStop(1,"rgba(95, 78, 92, 0)"),o.fillStyle=M,o.fillRect(m-32,f-28,64,24);const _=m-v*1.5,I=f-1.5,C=o.createLinearGradient(0,I-17,0,I+17);C.addColorStop(0,"#120804"),C.addColorStop(.55,"#33180b"),C.addColorStop(1,"#592e16"),o.fillStyle=C,o.beginPath(),o.ellipse(_,I,16.5,17,0,0,Math.PI*2),o.fill(),o.fillStyle="#080403",o.beginPath(),o.arc(_,I,9.5,0,Math.PI*2),o.fill(),o.fillStyle="#ffffff",o.beginPath(),o.ellipse(_+6,I-6.5,5.4,4,-.38,0,Math.PI*2),o.fill(),o.fillStyle="rgba(255, 248, 238, 0.9)",o.beginPath(),o.arc(_-5.5,I+5.5,2.5,0,Math.PI*2),o.fill(),o.restore(),o.strokeStyle="#100b0c",o.lineWidth=5.4,o.lineCap="round",o.beginPath(),o.moveTo(m-v*28,f+2),o.bezierCurveTo(m-v*12,f-30,m+v*16,f-28,m+v*29,f-4),o.stroke(),o.lineWidth=3,o.beginPath(),o.moveTo(m+v*24,f-10),o.lineTo(m+v*34,f-16),o.moveTo(m+v*27,f-5),o.lineTo(m+v*36,f-9),o.stroke(),o.strokeStyle="rgba(42, 24, 18, 0.34)",o.lineWidth=1.6,o.beginPath(),o.moveTo(m-v*18,f+(h?16:20)),o.quadraticCurveTo(m,f+(h?19:25),m+v*22,f+(h?13:16)),o.stroke()}o.fillStyle="#141013";for(const v of[-1,1]){const m=a+v*54;let f=202,x=190,M=203;i==="happy"||i==="surprised"?(f-=i==="surprised"?12:4,x-=i==="surprised"?14:6,M-=i==="surprised"?9:4):i==="determined"?(f+=3,x-=2,M-=4):i==="annoyed"?(f+=7,x-=1,M-=6):i==="dizzy"&&(f+=v<0?5:-5,M+=v<0?-4:5),o.beginPath(),o.moveTo(m-v*24,f+4.5),o.quadraticCurveTo(m-v*28,f,m-v*23,f-4.5),o.quadraticCurveTo(m+v*6,x-4.2,m+v*29,M),o.quadraticCurveTo(m+v*5,x+3.2,m-v*24,f+4.5),o.closePath(),o.fill()}const p=a,g=312;if(i==="surprised")o.fillStyle="#8b2434",o.beginPath(),o.ellipse(p,g+2,11,13,0,0,Math.PI*2),o.fill(),o.strokeStyle="#c46069",o.lineWidth=3.5,o.stroke();else if(i==="dizzy")o.strokeStyle="#993444",o.lineWidth=3.6,o.lineCap="round",o.beginPath(),o.moveTo(p-20,g+2),o.bezierCurveTo(p-7,g-7,p+7,g+11,p+20,g),o.stroke();else if(i==="annoyed")o.strokeStyle="#a64352",o.lineWidth=3.8,o.lineCap="round",o.beginPath(),o.moveTo(p-20,g+5),o.quadraticCurveTo(p,g-2,p+20,g+4),o.stroke();else if(i==="determined")o.fillStyle="#b55961",o.beginPath(),o.moveTo(p-28,g+1),o.quadraticCurveTo(p-10,g-8,p,g-4),o.quadraticCurveTo(p+10,g-8,p+28,g),o.quadraticCurveTo(p,g+5,p-28,g+1),o.closePath(),o.fill(),o.fillStyle="#cf6e78",o.beginPath(),o.moveTo(p-28+4,g+2),o.quadraticCurveTo(p,g+16,p+28-3,g+1),o.quadraticCurveTo(p,g+5,p-28+4,g+2),o.closePath(),o.fill();else{const v=i==="happy"?40:35,m=i==="happy"?24:20,f=g-5;o.strokeStyle="rgba(145, 78, 52, 0.2)",o.lineWidth=2,o.lineCap="round";for(const x of[-1,1])o.beginPath(),o.moveTo(p+x*(v+4),g-12),o.quadraticCurveTo(p+x*(v+9),g-2,p+x*(v+3),g+9),o.stroke();o.save(),o.beginPath(),o.moveTo(p-v,f),o.quadraticCurveTo(p,g-1,p+v,f),o.bezierCurveTo(p+v*.65,g+m,p-v*.65,g+m,p-v,f),o.closePath(),o.fillStyle="#6e1f2d",o.fill(),o.clip(),o.fillStyle="#fffdfa",o.beginPath(),o.moveTo(p-v+2,f-1),o.quadraticCurveTo(p,g-2,p+v-2,f-1),o.quadraticCurveTo(p+v*.6,g+m*.56,p,g+m*.62),o.quadraticCurveTo(p-v*.6,g+m*.56,p-v+2,f-1),o.closePath(),o.fill(),o.restore(),o.fillStyle="#b55961",o.beginPath(),o.moveTo(p-v,f),o.quadraticCurveTo(p-v*.42,g-11,p,g-7),o.quadraticCurveTo(p+v*.42,g-11,p+v,f),o.quadraticCurveTo(p,g+1,p-v,f),o.closePath(),o.fill(),o.fillStyle="#cf6e78",o.beginPath(),o.moveTo(p-v+3,f+1.5),o.bezierCurveTo(p-v*.6,g+m-1,p+v*.6,g+m-1,p+v-3,f+1.5),o.bezierCurveTo(p+v*.55,g+m+11,p-v*.55,g+m+11,p-v+3,f+1.5),o.closePath(),o.fill(),o.fillStyle="rgba(255, 236, 240, 0.34)",o.beginPath(),o.ellipse(p,g+m+1.5,11,2.6,0,0,Math.PI*2),o.fill()}return We(e,r)})}function Cm(i,t){const e=`npc_face_v2_${i}_${t}`;return Xe(e,()=>{const[r,o]=Ve(512,256),a=512/2;o.fillStyle=`#${t.toString(16).padStart(6,"0")}`,o.fillRect(0,0,512,256),o.fillStyle="rgba(235, 110, 110, 0.22)",o.beginPath(),o.arc(a-28,144,15,0,Math.PI*2),o.arc(a+28,144,15,0,Math.PI*2),o.fill();for(const l of[-1,1]){const c=a+l*22,u=120;o.fillStyle="#ffffff",o.beginPath(),o.ellipse(c,u,11,12,0,0,Math.PI*2),o.fill(),o.fillStyle=i==="manager"?"#1e293b":"#334155",o.beginPath(),o.arc(c,u,6.2,0,Math.PI*2),o.fill(),o.fillStyle="#ffffff",o.beginPath(),o.arc(c+2.2,u-2.2,2.2,0,Math.PI*2),o.fill()}o.strokeStyle=i==="lecturer"?"#cbd5e1":"#1e1b18",o.lineWidth=i==="manager"?4:3,o.lineCap="round";for(const l of[-1,1]){const c=a+l*22;o.beginPath(),i==="manager"?(o.moveTo(c-l*11,106),o.lineTo(c+l*11,98)):i==="stressed_student"?(o.moveTo(c-l*11,96),o.lineTo(c+l*11,103)):(o.moveTo(c-11,101),o.quadraticCurveTo(c,96,c+11,101)),o.stroke()}return i==="lecturer"&&(o.strokeStyle="#1e293b",o.lineWidth=3,o.beginPath(),o.arc(a-22,120,15,0,Math.PI*2),o.stroke(),o.beginPath(),o.arc(a+22,120,15,0,Math.PI*2),o.stroke(),o.beginPath(),o.moveTo(a-7,120),o.lineTo(a+7,120),o.stroke()),i==="stressed_student"&&(o.fillStyle="#38bdf8",o.beginPath(),o.moveTo(a+42,92),o.quadraticCurveTo(a+50,104,a+42,108),o.quadraticCurveTo(a+34,104,a+42,92),o.fill()),o.strokeStyle="#7f1d1d",o.lineWidth=3,o.beginPath(),i==="manager"?(o.moveTo(a-14,156),o.quadraticCurveTo(a,148,a+14,156)):i==="stressed_student"||i==="question_student"?(o.ellipse(a,154,7,8,0,0,Math.PI*2),o.fillStyle="#7f1d1d",o.fill()):(o.moveTo(a-13,152),o.quadraticCurveTo(a,157,a+13,152)),o.stroke(),We(e,r)})}const hs=new T;function Ze(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;hs.copy(t),hs[n]=0,hs.normalize();const c=.5*o/(o+a),u=1-hs.angleTo(i)/l;return Math.sign(hs[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Rm extends Hn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new T,l=new T,c=new T(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,p=u.length/6,g=new T,v=.5/s;for(let m=0,f=0;m<u.length;m+=3,f+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*r,u[m+1]=c.y*Math.sign(a.y)+l.y*r,u[m+2]=c.z*Math.sign(a.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),h[f+0]=Ze(g,l,"z","y",r,n),h[f+1]=1-Ze(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),h[f+0]=1-Ze(g,l,"z","y",r,n),h[f+1]=1-Ze(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),h[f+0]=1-Ze(g,l,"x","z",r,t),h[f+1]=Ze(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),h[f+0]=1-Ze(g,l,"x","z",r,t),h[f+1]=1-Ze(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),h[f+0]=1-Ze(g,l,"x","y",r,t),h[f+1]=1-Ze(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),h[f+0]=Ze(g,l,"x","y",r,t),h[f+1]=1-Ze(g,l,"y","x",r,e);break}}}class Pm extends sc{constructor(){super();const t=new Hn;t.deleteAttribute("uv");const e=new di({side:Re}),n=new di,s=new xm(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new D(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new D(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new D(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new D(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new D(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new D(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new D(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const h=new D(t,Li(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const p=new D(t,Li(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new D(t,Li(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new D(t,Li(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new D(t,Li(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new D(t,Li(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Li(i){const t=new ve;return t.color.setScalar(i),t}function ht(i,t,e,n,s=3){const r=Math.min(i,t,e),o=Math.min(n??r*.18,r*.45);return new Rm(i,t,e,s,Math.max(.002,o))}function Z(i){const{lift:t=.04,...e}=i,n=new di({roughness:.48,metalness:.04,...e});return e.emissive===void 0&&t>0&&(e.color!==void 0?(n.emissive=new kt(e.color),n.emissiveIntensity=t):e.map&&(n.emissive=new kt(16777215),n.emissiveIntensity=t*.65)),n}function Lm(i,t){try{const e=new ko(i),n=new Pm,s=e.fromScene(n,.04);t.environment=s.texture,t.environmentIntensity=.55,n.dispose(),e.dispose()}catch{}}function Dm(){const i=new At,t={uTopColor:{value:new kt(6333946)},uHorizonColor:{value:new kt(14412542)},uBottomColor:{value:new kt(16317180)}},e=new jt(145,24,16),n=new Tn({uniforms:t,side:Re,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vWorldPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform vec3 uTopColor;
      uniform vec3 uHorizonColor;
      uniform vec3 uBottomColor;
      varying vec3 vWorldPos;
      void main() {
        float h = clamp(normalize(vWorldPos).y, -0.35, 1.0);
        vec3 col = mix(uBottomColor, uHorizonColor, smoothstep(-0.2, 0.08, h));
        col = mix(col, uTopColor, smoothstep(0.08, 0.65, h));
        gl_FragColor = vec4(col, 1.0);
      }
    `}),s=new D(e,n);i.add(s);const r=new ve({color:16777215,transparent:!0,opacity:.92,fog:!1}),o=new jt(1,14,12),a=[];for(let d=0;d<10;d++){const h=new At,p=[[0,.4,0,2.2],[-1.8,.1,.2,1.65],[1.8,.15,-.1,1.75],[-.85,.75,.15,1.4],[.95,.65,-.15,1.45]];for(const[x,M,_,I]of p){const C=new D(o,r);C.position.set(x,M,_),C.scale.set(I*1.15,I*.78,I*.9),h.add(C)}const g=(d%2===0?-1:1)*(16+d*11%34)+(d-4.5)*4,v=26+d*5%19,m=-110+d*9,f=.85+d%3*.35;h.position.set(g,v,m),h.scale.setScalar(f),i.add(h),a.push({mesh:h,baseX:g,speed:.25+d%4*.12,phase:d*1.3})}const l=new kt,c=new kt,u=new kt;return{group:i,setColors(d,h,p){t.uTopColor.value.setHex(d),t.uHorizonColor.value.setHex(h),t.uBottomColor.value.setHex(p)},lerpColors(d,h,p,g){l.setHex(d),c.setHex(h),u.setHex(p),t.uTopColor.value.lerp(l,g),t.uHorizonColor.value.lerp(c,g),t.uBottomColor.value.lerp(u,g)},update(d){for(const h of a)h.phase+=d*h.speed,h.mesh.position.x=h.baseX+Math.sin(h.phase*.4)*4.5}}}const Sl=[15843995,14196594,12090194,15251603];function ti(i,t=0){const e=new At,n=Sl[t%Sl.length],s=Z({color:n,roughness:.56,lift:.05});let r=3900150,o=1976635,a=2694422;switch(i){case"stressed_student":r=16096779,o=3359061,a=2037523;break;case"lecturer":r=10105874,o=4472892,a=14078929;break;case"manager":r=1976635,o=988970,a=1973016;break;case"admin_clerk":r=889992,o=3621201,a=4528643;break;case"question_student":r=15680580,o=1920728,a=2696484;break}const l=Z({color:r,roughness:.62}),c=Z({color:o,roughness:.72}),u=Z({color:a,roughness:.45}),d=Z({color:1579035,roughness:.38}),h=new D(ht(.4,.54,.28,.1,3),l);if(h.position.y=1.08,h.castShadow=!0,e.add(h),i==="manager"){const E=new D(ht(.06,.34,.035,.012,2),Z({color:15680580,roughness:.35}));E.position.set(0,1.06,.145),e.add(E)}const p=Z({map:Cm(i,n),color:16777215,roughness:.52,lift:.07}),g=new D(new jt(.215,28,22),p);g.position.y=1.56,g.rotation.y=-Math.PI/2,g.castShadow=!0,e.add(g);const v=new D(new jt(.228,24,16,0,Math.PI*2,0,Math.PI*.62),u);v.position.set(0,1.59,-.025),v.rotation.x=-.25,e.add(v);const m=new D(new jt(.02,10,8),s);m.position.set(0,1.545,.212),e.add(m);const f=E=>{const S=new At;S.position.set(E,1.28,0);const y=new D(new Ee(.056,.34,8,12),l);y.position.y=-.2,y.castShadow=!0;const R=new D(new jt(.052,10,10),s);return R.position.y=-.43,S.add(y,R),e.add(S),S},x=f(-.26),M=f(.26),_=E=>{const S=new At;S.position.set(E,.78,0);const y=new D(new Ee(.07,.52,8,12),c);y.position.y=-.34,y.castShadow=!0;const R=new D(ht(.13,.1,.24,.032,2),d);return R.position.set(0,-.71,.04),S.add(y,R),e.add(S),S},I=_(-.11),C=_(.11),P=new At;if(e.add(P),i==="stressed_student"){x.rotation.x=-.9,M.rotation.x=-.9;const E=[16708551,16777215,14742270,16704226];for(let S=0;S<6;S++){const y=new D(ht(.42,.055,.34,.015,2),Z({color:E[S%E.length],roughness:.65}));y.position.set(S%2===0?.02:-.02,1.05+S*.06,.34),y.rotation.y=(S-2.5)*.08,P.add(y)}}else if(i==="lecturer"){x.rotation.x=-.85,M.rotation.x=-.85;const E=[10033947,1982639,417606,8138002];for(let S=0;S<4;S++){const y=new D(ht(.38,.09,.28,.02,2),Z({color:E[S],roughness:.55}));y.position.set(0,1.02+S*.095,.32),y.rotation.y=(S%2===0?1:-1)*.06,P.add(y)}}else if(i==="admin_clerk"){M.rotation.x=-.7;const E=new D(ht(.12,.38,.32,.024,2),Z({color:2450411,roughness:.45}));E.position.set(.3,1,.25),P.add(E)}else i==="question_student"&&(M.rotation.x=-2.4,x.rotation.x=-.4);return{group:e,leftArm:x,rightArm:M,leftLeg:I,rightLeg:C,propGroup:P}}class yn{static createIntroWorkstation(){const t=new At,e=Z({color:16049099,roughness:.48}),n=Z({color:4674921,roughness:.35,metalness:.4}),s=Z({color:3900150,roughness:.65}),r=new D(ht(2.15,.11,1.08,.038,3),e);r.position.set(0,.76,-.75),r.castShadow=!0,r.receiveShadow=!0,t.add(r);for(const S of[-.95,.95])for(const y of[-.3,-1.2]){const R=new D(new Ee(.04,.66,6,12),n);R.position.set(S,.37,y),t.add(R)}const o=new D(ht(.1,1.48,2.25,.036,3),s);o.position.set(-1.35,.74,-.35),t.add(o);const a=Z({map:On("מוקד שירות","שיבוץ חדש: משמרת שישי!","#ffffff","#1e3a8a","#ef4444"),color:16777215,roughness:.4,lift:.06}),l=new D(new Ie(1.5,.52),a);l.position.set(-1.29,1.15,-.35),l.rotation.y=Math.PI/2,t.add(l);const c=Z({color:1976635,roughness:.3});for(const S of[-.44,.44]){const y=new D(ht(.08,.2,.08,.02,2),c);y.position.set(S,.88,-.95);const R=new D(new me(.14,.16,.03,18),c);R.position.set(S,.82,-.95);const B=new D(ht(.7,.46,.05,.02,2),c);B.position.set(S,1.09,-.95);const F=new D(new Ie(.64,.4),new ve({map:xc(S<0?0:1)}));F.position.set(S,1.09,-.922),t.add(y,R,B,F)}const u=new At;u.position.set(.78,.82,-.52);const d=new D(new me(.06,.052,.13,18),Z({color:1096065,roughness:.25}));d.position.y=.065;const h=new D(new Ni(.052,16),Z({color:9584654,roughness:.2}));h.rotation.x=-Math.PI/2,h.position.y=.131;const p=new D(new Oe(.035,.01,8,14,Math.PI),Z({color:1096065,roughness:.25}));p.position.set(.058,.068,0),p.rotation.z=-Math.PI/2,u.add(d,h,p),t.add(u);const g=new At;g.position.set(-.72,.82,-.52);const v=Z({color:14427686,roughness:.28,lift:.05}),m=new D(ht(.25,.1,.22,.032,3),v),f=new At;f.position.y=.085;const x=new D(ht(.29,.055,.075,.022,3),Z({color:15680580,roughness:.28,lift:.05}));f.add(x),g.add(m,f),t.add(g);const M=new At;M.position.set(0,0,.08);const _=Z({color:1976635,roughness:.52}),I=new D(ht(.56,.11,.52,.04,3),_);I.position.y=.46;const C=new D(ht(.52,.56,.11,.04,3),Z({color:3359061,roughness:.52}));C.position.set(0,.76,.24);const P=new D(new me(.042,.042,.36,12),n);P.position.y=.25;const E=new D(new me(.28,.3,.045,5),n);return E.position.y=.05,M.add(I,C,P,E),t.add(M),{group:t,phoneReceiver:f,chair:M}}static createObstacle(t){const e=new At;let n=1.3,s=1.4,r=1,o=0,a;switch(t){case"swivel_chair":{const l=new At,c=Z({color:2450411,roughness:.42}),u=Z({color:9741240,metalness:.65,roughness:.28}),d=new D(ht(.76,.16,.72,.05,3),c);d.position.y=.6;const h=new D(ht(.7,.76,.15,.05,3),c);h.position.set(0,.98,.3);const p=new D(new me(.055,.055,.5,12),u);p.position.y=.32;const g=new D(new me(.45,.48,.08,12),u);g.position.y=.06,l.add(d,h,p,g),e.add(l),a=l,n=1.05,s=1.25,r=.95;break}case"ringing_desk":{const l=new D(ht(1.75,.85,.95,.065,3),Z({color:14596231,roughness:.55}));l.position.y=.425,l.castShadow=!0;const c=new At;c.position.set(0,1.02,0);const u=new D(ht(.58,.32,.45,.06,3),Z({color:14427686,roughness:.26,lift:.05})),d=new D(ht(.68,.14,.18,.05,3),Z({color:15680580,roughness:.26,lift:.05}));d.position.y=.22,c.add(u,d),e.add(l,c),a=c,n=1.75,s=1.4,r=.95;break}case"spitting_printer":{const l=new D(ht(1.4,1.1,1.05,.08,3),Z({color:14870768,roughness:.38}));l.position.y=.55,l.castShadow=!0;const c=new D(ht(1.1,.12,.4,.03,2),Z({color:3359061,roughness:.42}));c.position.set(0,.95,.58);const u=new D(new Ie(.6,.72),new ve({map:Pi("form"),side:Ke}));u.position.set(0,1.35,.2),e.add(l,c,u),a=u,n=1.4,s=1.25,r=1.05;break}case"document_cart":{const l=new D(ht(1.45,.9,1.15,.065,3),Z({color:6583435,metalness:.35,roughness:.4}));l.position.y=.52,l.castShadow=!0;for(let c=0;c<4;c++){const u=new D(ht(.55,.32,.45,.03,2),Z({color:c%2===0?16777215:16708551,roughness:.65}));u.position.set(c<2?-.35:.35,1.12+c%2*.3,0),u.rotation.y=(c-1.5)*.15,e.add(u)}e.add(l),n=1.45,s=1.7,r=1.15;break}case"cable_barrier":{const l=new D(ht(2.05,.38,.48,.08,3),Z({color:16436245,roughness:.35,lift:.05}));l.position.y=.2;const c=new D(new Ee(.11,1.88,6,12),Z({color:1976635,roughness:.42}));c.rotation.z=Math.PI/2,c.position.y=.42,e.add(l,c),n=2,s=.62,r=.55;break}case"call_center_student":case"student_docs":case"grade_student":case"indecisive_student":case"last_question_student":{const c=ti(t==="last_question_student"||t==="call_center_student"?"question_student":"stressed_student",t.length);e.add(c.group),a=c.group,n=1.05,s=1.85,r=.85;break}case"form_stack":case"paper_pile":case"curriculum_stack":{const l=[16777215,16708551,14412542,16574451];for(let c=0;c<6;c++){const u=new D(ht(1.3-c*.05,.28,1.05-c*.04,.04,2),Z({color:l[c%l.length],roughness:.65}));u.position.set((c%2===0?1:-1)*.04,.14+c*.28,0),u.rotation.y=(c-2.5)*.09,u.castShadow=!0,e.add(u)}n=1.35,s=1.75,r=1.05;break}case"revolving_door":{const l=new At,c=Z({color:1013358,metalness:.35,roughness:.35}),u=Z({color:10090212,transparent:!0,opacity:.55,roughness:.12}),d=new D(new me(.11,.11,2.2,16),c);d.position.y=1.1,l.add(d);for(let h=0;h<4;h++){const p=new D(ht(1.7,1.9,.075,.025,2),u);p.position.y=1,p.rotation.y=h*Math.PI/2,l.add(p)}e.add(l),a=l,n=1.75,s=2.1,r=1.75;break}case"paper_printer_gate":case"grade_sheet_arch":case"schedule_beam":{const l=new D(new Ee(.1,2.5,6,12),Z({color:4674921,roughness:.42}));l.position.set(-1.02,1.35,0);const c=l.clone();c.position.x=1.02;const u=t==="grade_sheet_arch"?On("לוח ציונים!","להתכופף מהר!","#5b21b6","#ffffff","#f59e0b"):t==="schedule_beam"?On("מערכת שעות","תור לייעוץ!","#0369a1","#ffffff","#38bdf8"):On("טפסים דחופים","זהירות - תתכופפי!","#0f766e","#ffffff","#fbbf24"),d=new D(ht(2.1,1.15,.35,.07,3),Z({map:u,color:16777215,roughness:.4,lift:.06}));d.position.y=1.75,d.castShadow=!0,e.add(l,c,d),n=1.95,s=1.25,r=.5,o=1.05;break}case"queue_barrier":{const l=Z({color:9741240,metalness:.65,roughness:.25}),c=Z({color:15680580,roughness:.42,lift:.05});for(const d of[-.95,.95]){const h=new D(new me(.06,.09,.78,12),l);h.position.set(d,.39,0);const p=new D(new jt(.075,10,8),l);p.position.set(d,.8,0),e.add(h,p)}const u=new D(ht(1.9,.16,.09,.03,2),c);u.position.y=.62,e.add(u),n=1.95,s=.76,r=.35;break}case"falling_exam":{const l=new D(ht(1.35,1.55,.24,.045,2),Z({map:Pi("exam"),color:16777215,roughness:.48,lift:.05}));l.position.y=.95,l.castShadow=!0,e.add(l),a=l,n=1.35,s=1.65,r=.4;break}case"flying_books":{const l=new At;l.position.y=1.65;const c=new D(ht(1.25,.32,.9,.06,3),Z({color:8141549,roughness:.42})),u=new D(ht(1.18,.22,.84,.03,2),Z({color:16710888,roughness:.65}));l.add(c,u),e.add(l),a=l,n=1.35,s=.65,r=.9,o=1.25;break}case"giant_hourglass":{const l=Z({color:12891645,transparent:!0,opacity:.65}),c=Z({color:16096779,roughness:.7}),u=Z({color:5774471,roughness:.45}),d=new D(new ai(.65,.9,20),l);d.rotation.x=Math.PI,d.position.y=1.45;const h=new D(new ai(.65,.9,20),c);h.position.y=.55;const p=new D(new me(.75,.75,.14,20),u);p.position.y=1.95;const g=p.clone();g.position.y=.08,e.add(d,h,p,g),n=1.3,s=2,r=1.3;break}case"falling_bookshelf":{const l=Z({color:7877903,roughness:.6}),c=new D(ht(1.65,2.2,.7,.06,3),l);c.position.y=1.1,c.castShadow=!0,e.add(c);const u=[14427686,2450411,1483594,14251782];for(let d=0;d<3;d++)for(let h=0;h<5;h++){const p=new D(ht(.24,.42,.35,.025,2),Z({color:u[(d+h)%u.length]}));p.position.set(-.56+h*.28,.42+d*.68,.24),e.add(p)}n=1.65,s=2.2,r=.75;break}case"crossing_lecturer":{const l=ti("lecturer",2);e.add(l.group),a=l.group,n=1.05,s=1.9,r=.85;break}case"moving_whiteboard":{const l=new At,c=new D(ht(1.85,.12,.75,.03,2),Z({color:4674921}));c.position.y=.08;const u=new D(ht(1.8,1.35,.14,.035,2),Z({map:Pi("whiteboard"),color:16777215,roughness:.32,lift:.06}));u.position.y=1.25,u.castShadow=!0,l.add(c,u),e.add(l),a=l,n=1.8,s=1.95,r=.7;break}case"swinging_door":{const l=new D(ht(1.55,2.2,.16,.035,2),Z({color:9584654,roughness:.48}));l.position.y=1.1,l.castShadow=!0;const c=new D(new Ie(1.1,.4),new ve({map:On("חדר מרצה","נא לא להפריע","#fef3c7","#78350f","#b45309")}));c.position.set(0,1.5,.09),l.add(c),e.add(l),a=l,n=1.55,s=2.2,r=.5;break}case"giant_planner":{const l=new D(ht(1.55,1.65,.35,.06,3),Z({map:Pi("calendar"),color:16777215,roughness:.4,lift:.05}));l.position.y=.85,l.castShadow=!0,e.add(l),n=1.55,s=1.7,r=.45;break}case"spinning_clock":{const l=new At;l.position.y=1.05;const c=new D(new me(.85,.85,.25,28),Z({color:165063,roughness:.3}));c.rotation.x=Math.PI/2;const u=new D(new me(.72,.72,.28,28),Z({color:16777215,roughness:.35}));u.rotation.x=Math.PI/2;const d=new D(ht(.08,.55,.32,.025,2),Z({color:15680580}));d.position.y=.2,l.add(c,u,d),e.add(l),a=l,n=1.6,s=1.85,r=.45;break}case"last_phone":{const l=new At,c=new D(ht(1.5,1.2,1.2,.18,3),Z({color:14427686,roughness:.26,lift:.05}));c.position.y=.65;const u=new D(ht(1.75,.32,.45,.12,3),Z({color:15680580,roughness:.26,lift:.05}));u.position.y=1.4,l.add(c,u),e.add(l),a=l,n=1.65,s=1.6,r=1.2;break}case"chasing_manager_block":{const l=ti("manager",0);e.add(l.group),a=l.group,n=1.15,s=1.9,r=.9;break}}return{mesh:e,width:n,height:s,depth:r,baseY:o,animatedPart:a}}static createCollectible(t){const e=new At;if(t==="coffee_coin"){const a=Z({color:16777215,roughness:.2,lift:.06}),l=[new Q(.01,-.22),new Q(.16,-.22),new Q(.21,-.05),new Q(.24,.19),new Q(.255,.22),new Q(.21,.22)],c=new D(new hi(l,22),a),u=new D(new Ni(.215,20),Z({color:9584654,roughness:.15,lift:.05}));u.rotation.x=-Math.PI/2,u.position.y=.18;const d=new D(new jt(.06,10,8),Z({color:1096065,roughness:.35}));d.scale.set(1.4,.25,.8),d.position.set(.03,.19,.02);const h=new D(new me(.23,.2,.17,22,1,!0),Z({color:366185,roughness:.48,side:Ke,lift:.05}));h.position.y=-.01;const p=new D(new Oe(.115,.028,10,18,Math.PI),a);p.position.set(-.21,.01,0),p.rotation.z=Math.PI/2;const g=new D(ht(.075,.1,.02,.005,2),Z({color:16638023,roughness:.3,lift:.08}));g.position.set(.24,.06,0),g.rotation.z=-.26;const v=new D(new Oe(.32,.022,8,22),new ve({color:16707722,transparent:!0,opacity:.55}));return e.add(c,u,d,h,p,g,v),e}let n=2278750,s=null;t==="vacation_day"?n=1357990:t==="credit_points"?n=6514417:t==="sick_note"?n=1096065:t==="call_headset"?n=3718648:t==="exit_ticket"?n=16096779:t==="grade_100"||t==="honor_cert"||t==="eligibility_cert"?(n=2278750,s="grade100"):(t==="reg_form"||t==="payment_approval"||t==="signed_doc")&&(n=889992,s="form");const r=new D(ht(.55,.65,.12,.03,2),Z(s?{map:Pi(s),color:16777215,roughness:.3,lift:.08}:{color:n,emissive:n,emissiveIntensity:.35,roughness:.25})),o=new D(new Oe(.45,.04,10,24),new ve({color:16707722}));return e.add(r,o),e}static createPowerUpOrb(t){const e=new At,s={magnet:1096065,shield:1357990,turbo:3718648,silent:11032055}[t],r=new D(new jt(.42,20,16),new di({color:s,emissive:s,emissiveIntensity:.55,transparent:!0,opacity:.85,roughness:.15})),o=new D(new Oe(.58,.055,10,26),new ve({color:16777215}));o.rotation.x=Math.PI/3;const a=new D(new Zi(.24),new di({color:16777215,emissive:16777215,emissiveIntensity:.6}));return e.add(r,o,a),e}static createBossEntity(t){const e=new At;if(t==="call_center"){const s=new At,r=new D(ht(2.1,1.35,1.75,.22,3),Z({color:14427686,roughness:.26,lift:.05}));r.position.y=.85,r.castShadow=!0;const o=new D(new me(.45,.45,.2,22),Z({color:16708551,roughness:.35}));o.rotation.x=Math.PI/2,o.position.set(0,.88,.85);const a=new D(ht(2.35,.38,.55,.14,3),Z({color:15680580,roughness:.26,lift:.05}));return a.position.y=1.68,s.add(r,o,a),e.add(s),{group:e,animatedPart:a,width:2.1,height:1.8,depth:1.75}}if(t==="registration"){const s=ti("stressed_student",1);for(let r=0;r<12;r++){const o=new D(ht(.95,.14,.72,.025,2),Z({color:r%2===0?16777215:13761253}));o.position.set(Math.sin(r)*.08,1.2+r*.15,.45),s.propGroup.add(o)}return e.add(s.group),{group:e,animatedPart:s.propGroup,width:1.6,height:2.5,depth:1.2}}if(t==="achievements"){const s=new D(ht(2.2,2.3,.35,.1,3),Z({map:Em(),color:16777215,roughness:.22,lift:.08}));return s.position.y=1.2,s.castShadow=!0,e.add(s),{group:e,animatedPart:s,width:2.1,height:2.3,depth:.5}}if(t==="departments"){const s=ti("lecturer",0);for(let r=0;r<9;r++){const o=new D(ht(1.1,.22,.75,.04,2),Z({color:[10033947,1981066,417606,11817737][r%4]}));o.position.set(0,1.1+r*.22,.38),o.rotation.y=(r%2===0?1:-1)*.1,s.propGroup.add(o)}return e.add(s.group),{group:e,animatedPart:s.propGroup,width:1.65,height:2.5,depth:1.2}}if(t==="counseling"){const s=ti("question_student",3),r=new At;r.position.y=1.3;for(let o=0;o<6;o++){const a=o/6*Math.PI*2,l=new D(ht(.55,.7,.06,.018,2),Z({map:Pi("calendar"),color:16777215,lift:.05}));l.position.set(Math.cos(a)*.95,Math.sin(a*2)*.25,Math.sin(a)*.95),r.add(l)}return e.add(s.group,r),{group:e,animatedPart:r,width:1.9,height:2.1,depth:1.6}}const n=ti("manager",0);return n.group.scale.setScalar(1.2),e.add(n.group),{group:e,animatedPart:n.group,width:1.5,height:2.1,depth:1.1}}static createEscapeAirplane(){const t=new At,e=Z({color:16707722,roughness:.25,lift:.06}),n=Z({color:15680580,roughness:.28,lift:.05}),s=Z({color:16777215,roughness:.28,lift:.05}),r=Z({color:3718648,roughness:.1,metalness:.5}),o=[new Q(.01,-3.55),new Q(.45,-3.25),new Q(.84,-2.5),new Q(.92,-.8),new Q(.86,.8),new Q(.54,2.4),new Q(.28,3.1),new Q(.01,3.25)],a=new hi(o,24);a.rotateX(Math.PI/2);const l=new D(a,e);l.position.y=1.55,l.castShadow=!0,t.add(l);const c=new D(new ai(.46,.72,20),n);c.rotation.x=-Math.PI/2,c.position.set(0,1.55,-3.55),t.add(c);const u=new D(new jt(.76,18,14),r);u.scale.set(.95,.75,1.4),u.position.set(0,2.2,-.5),t.add(u);const d=new D(ht(7.2,.16,1.45,.06,3),s);d.position.set(0,1.65,-.4),d.castShadow=!0,t.add(d);const h=new D(ht(.16,1.4,1.1,.05,3),n);h.position.set(0,2.35,2.15);const p=new D(ht(2.6,.14,.8,.04,3),s);p.position.set(0,1.8,2.2),t.add(h,p);const g=new D(new Ie(2.4,.7),new ve({map:On("חופש מוחלט!","טיסה 001 לנתב״ג","#1d4ed8","#ffffff","#fbbf24")}));g.position.set(.92,1.55,.25),g.rotation.y=Math.PI/2,t.add(g);const v=new At;v.position.set(0,1.55,-3.92);const m=Z({color:1976635,roughness:.35}),f=new D(ht(2.1,.18,.06,.025,2),m),x=new D(ht(.18,2.1,.06,.025,2),m);v.add(f,x),t.add(v);const M=Z({color:988970});for(const _ of[-1.1,1.1]){const I=new D(new Ee(.06,.78,6,10),m);I.position.set(_,.9,-.8);const C=new D(new me(.28,.28,.16,18),M);C.rotation.z=Math.PI/2,C.position.set(_,.35,-.8),t.add(I,C)}return{group:t,propeller:v}}static createUniversityExitGate(){const t=new At,e=Z({color:15857145,roughness:.4}),n=Z({color:1920728,roughness:.35}),s=Z({color:16096779,roughness:.25,metalness:.45});for(const a of[-4.8,4.8]){const l=new D(ht(1.1,4.6,1.1,.12,3),e);l.position.set(a,2.3,0),l.castShadow=!0;const c=new D(ht(1.3,.35,1.3,.08,3),s);c.position.set(a,4.75,0),t.add(l,c)}const r=new D(ht(10.8,1.35,.9,.14,3),n);r.position.set(0,4.2,0),t.add(r);const o=new D(new Ie(7.2,1.05),new ve({map:On("יציאה לחופש!","שער האוניברסיטה - המסלול למטוס","#1e3a8a","#fde047","#f59e0b")}));return o.position.set(0,4.2,.48),t.add(o),t}static createSunsetHorizon(){const t=new At,e=new D(new Ni(14,32),new ve({color:16638023,fog:!1}));e.position.set(0,12,-135);const n=new D(new Ni(21,32),new ve({color:16347926,transparent:!0,opacity:.38,fog:!1}));return n.position.set(0,12,-136),t.add(n,e),t}}const Im=.194,Um=.231,Nm=.209;function Qi(i,t,e=0,n=0){let s=i.x,r=i.y+e,o=i.z+n;if(o<-.02&&r<.15&&r>-.24){const a=ae.smoothstep(-o,.02,.1),l=ae.smoothstep(.15-r,0,.08),c=ae.smoothstep(r+.24,0,.06),u=a*l*c,d=(.186+t)*u;u>0&&Math.abs(s)<d&&(s=(s>=0?1:-1)*d)}if(r>-.22){const a=Im+t,l=Um+t,c=Nm+t,u=Math.hypot(s/a,r/l,o/c);if(u<1&&u>1e-4){const d=1/u;s*=d,r*=d,o*=d}}if(r<=-.23&&r>-.66){const a=.162+t,l=.128+t,c=Math.hypot(s/a,o/l);if(c<1&&c>1e-4){const u=1/c;s*=u,o*=u}}if(r<=-.24&&r>-.68&&o>.08){const a=.225+t;Math.abs(s)<.155&&o<a&&(o=a)}return new T(s,r-e,o-n)}function Fm(i,t,e,n,s=.62,r=0,o=0,a=!0){const l=new $i(i),c=[],u=[];for(let E=0;E<=t;E++){const S=E/t,y=Math.max(.006,n(S));let R=l.getPoint(S);if(a){const B=E===0?.008:y*s+.012;R=Qi(R,B,r,o)}c.push(R),u.push(y)}const d=[],h=[],p=[];for(let E=0;E<=t;E++){const S=c[Math.max(0,E-1)],y=c[Math.min(t,E+1)],R=new T().subVectors(y,S);R.lengthSq()<1e-8?R.set(0,-1,0):R.normalize(),d.push(R);const B=new T(c[E].x,.15,c[E].z+o).normalize();let F;if(E===0)F=B.clone().addScaledVector(R,-B.dot(R)),F.lengthSq()<1e-6&&F.set(0,0,1).cross(R),F.normalize();else{const q=h[E-1];F=q.clone().addScaledVector(R,-q.dot(R)),F.lengthSq()<1e-6&&F.copy(B),F.normalize()}const V=new T().crossVectors(R,F).normalize();h.push(F),p.push(V)}const g=[],v=[],m=[];for(let E=0;E<=t;E++){const S=E/t,y=c[E],R=h[E],B=p[E],F=u[E],V=F*s;for(let q=0;q<=e;q++){const X=q/e,tt=X*Math.PI*2,W=Math.cos(tt),lt=Math.sin(tt);g.push(y.x+R.x*(W*V)+B.x*(lt*F),y.y+R.y*(W*V)+B.y*(lt*F),y.z+R.z*(W*V)+B.z*(lt*F)),v.push(X,S)}}const f=e+1;for(let E=0;E<t;E++)for(let S=0;S<e;S++){const y=E*f+S,R=(E+1)*f+S,B=(E+1)*f+(S+1),F=E*f+(S+1);m.push(y,R,F),m.push(R,B,F)}const x=c[t],M=d[t],_=u[t],I=g.length/3;g.push(x.x+M.x*_*.75,x.y+M.y*_*.75,x.z+M.z*_*.75),v.push(.5,1);const C=t*f;for(let E=0;E<e;E++)m.push(C+E,I,C+E+1);const P=new Pe;return P.setAttribute("position",new ee(g,3)),P.setAttribute("uv",new ee(v,2)),P.setIndex(m),P.computeVertexNormals(),P}function Jr(i=1){const t=Math.PI*.74,e=new jt(1,48,32,0,Math.PI*2,0,t),n=e.attributes.position,s=new T;for(let r=0;r<n.count;r++){const o=n.getX(r),a=n.getY(r),l=n.getZ(r),u=Math.acos(ae.clamp(a,-1,1))/t,d=Math.hypot(o,l),h=d>1e-4?o/d:0,p=d>1e-4?l/d:0,g=ae.clamp(-p,0,1),v=Math.exp(-o*o*18)*.065,m=ae.lerp(.85*Math.PI,.285*Math.PI-v,Math.pow(g,1.25)),f=u*m,x=ae.smoothstep(u,.78,1),M=Math.sin(Math.min(1,Math.abs(o)*1.8)*Math.PI)*Math.max(0,a)*.02,_=Math.sin(h*14+f*10)*.005*(1-x),I=ae.lerp(.214*i,.198,x*g)+_,C=ae.lerp(.246*i,.233,x*g)+M,P=ae.lerp(.228*i,.212,x*g)+_;s.set(h*Math.sin(f)*I,Math.cos(f)*C+.008*(1-x),p*Math.sin(f)*P+.012*(1-g));const E=ae.lerp(.008,.003,x*g),S=Qi(s,E);n.setXYZ(r,S.x,S.y,S.z)}return e.computeVertexNormals(),e}function jr(i,t=!1){const e=new jt(1,32,26),n=e.attributes.position,s=new T,r=new $i([new T(i*.16,.165,-.04),new T(i*.232,-.06,-.035),new T(i*.215,-.26,-.095),new T(i*.162,-.455,-.148)]),o=t?.45:1;for(let a=0;a<n.count;a++){s.fromBufferAttribute(n,a);const l=(1-s.y)*.5,c=r.getPoint(l),u=l<.45?ae.lerp(.062,.092,l/.45):ae.lerp(.092,.066,(l-.45)/.55),d=ae.lerp(.095,.065,l),h=Math.min(1,Math.hypot(s.x,s.z)*2.4),p=(Math.sin(l*24+s.x*7*i)*.015+Math.cos(l*15-s.z*8)*.012)*o*h,g=new T(c.x+s.x*(u+p),c.y,c.z+s.z*(d+p*.85)),v=Qi(g,.01);n.setXYZ(a,v.x,v.y,v.z)}return e.computeVertexNormals(),e}function Fn(i,t,e,n,s,r,o,a){const l=new jt(1,48,36),c=l.attributes.position,u=new T;for(let d=0;d<c.count;d++){u.fromBufferAttribute(c,d);const h=(1-u.y)*.5,p=ae.lerp(i,t,Math.sin(h*Math.PI*.72)),g=Math.sin(h*Math.PI*s)*r,v=Math.min(1,Math.hypot(u.x,u.z)*2.4)*Math.sin(h*Math.PI),m=(Math.sin(h*16+u.x*9)*.012+Math.cos(h*12-u.x*7)*.008)*v,f=-h*e,x=Math.abs(u.x)*.09,M=new T(u.x*p,f+.04,u.z*(n+Math.abs(m)*.5)+h*.055+g+m-x+.04),_=Qi(M,.016,o,a);c.setXYZ(d,_.x,_.y,_.z)}return l.computeVertexNormals(),l}function Om(){const i=new jt(.31,64,48),t=i.attributes.position,e=new T;for(let n=0;n<t.count;n++){e.fromBufferAttribute(t,n);const s=e.clone().normalize(),r=Math.sin(s.x*13+s.y*9)*Math.cos(s.z*11-s.y*8),o=Math.cos(s.y*19+s.z*14)*Math.sin(s.x*15-s.z*7),a=Math.abs(r)*.024+o*.012;if(e.multiplyScalar(1+a/.31),e.x*=1.05,e.y+=.068,e.z+=.068,e.z<-.02&&e.y<.138){const c=ae.clamp((.138-e.y)/.3,0,1);Math.abs(e.x)<.192&&(e.z=Math.max(e.z,-.02+c*.065),e.y<.134&&(e.x=(e.x>=0?1:-1)*Math.max(Math.abs(e.x),.202)))}const l=Qi(e,.012);t.setXYZ(n,l.x,l.y,l.z)}return i.computeVertexNormals(),i}function Di(i,t,e,n,s,r,o,a){const l=new $i(i),c=Math.max(20,Math.round(t*10)),u=[];for(let d=0;d<=c;d++){const h=d/c,p=l.getPoint(h),g=l.getTangent(h),v=new T(p.x,0,p.z+a);v.lengthSq()<1e-4&&v.set(0,0,1),v.normalize();const m=new T().crossVectors(g,v).normalize(),f=r+h*Math.PI*2*t*(s||1),x=ae.lerp(e,n,h)*Math.sin(Math.min(1,h*2.5)*Math.PI*.5),M=p.clone().addScaledVector(v,Math.cos(f)*x+x*.45).addScaledVector(m,Math.sin(f)*x);u.push(Qi(M,.022,o,a))}return u}function Qr(i){for(;i.children.length>0;){const t=i.children[0];i.remove(t),t instanceof D&&t.geometry&&t.geometry.dispose()}}function yc(i,t,e,n,s,r="loose_curls"){Qr(i),Qr(t),Qr(e);const o=t.position.y,a=t.position.z,l=o+e.position.y,c=a+e.position.z,u=(v,m,f,x,M,_,I=0,C=0)=>{const P=Fm(m,f,10,S=>{const y=S<.14?.78+S/.14*.22:1,R=1-Math.pow(S,2.2)*.52;return x*y*R},M,I,C,!0),E=new D(P,_);E.castShadow=!0,v.add(E)};if(r==="spiral_curls"){const v=new D(Jr(1.03),n);v.castShadow=!0,i.add(v);for(const x of[-1,1]){const M=new D(jr(x,!1),n);M.scale.set(.88,1,.9),M.castShadow=!0,i.add(M)}const m=new D(Fn(.27,.315,.29,.06,1.8,.022,o,a),n);t.add(m);const f=new D(Fn(.295,.255,.34,.055,2,.025,l,c),n);e.add(f);for(const x of[-1,1])[{pts:[new T(x*.03,.23,-.055),new T(x*.145,.165,-.095),new T(x*.205,0,-.055),new T(x*.195,-.22,-.105),new T(x*.15,-.43,-.15)],turns:3.8,amp0:.015,amp1:.024,rad:.028,hi:!0,phase:.5},{pts:[new T(x*.13,.175,0),new T(x*.225,0,-.025),new T(x*.215,-.23,-.09),new T(x*.172,-.45,-.145)],turns:4.2,amp0:.018,amp1:.027,rad:.029,hi:!1,phase:1.7},{pts:[new T(x*.16,.11,.07),new T(x*.23,-.1,.05),new T(x*.21,-.35,-.02)],turns:3.6,amp0:.017,amp1:.025,rad:.028,hi:!0,phase:2.9}].forEach(_=>{const I=Di(_.pts,_.turns,_.amp0,_.amp1,x,_.phase,0,0);u(i,I,32,_.rad,.88,_.hi?s:n)});for(let x=0;x<8;x++){const M=-.2+x/7*.4,_=x%2*.022,I=Di([new T(M*.85,.03,.02+_),new T(M*1.05,-.13,.05+_),new T(M*.98,-.28,.07+_)],2.8,.018,.026,x%2===0?1:-1,x*.9,o,a);u(t,I,24,.032,.88,x%2===0?n:s,o,a);const C=Di([new T(M*.95,.01,.03+_),new T(M*1.08,-.16,.06+_),new T(M*.92,-.34,.07+_)],3.1,.018,.026,x%2===0?-1:1,x*1.1,l,c);u(e,C,24,.029,.88,x%2===0?s:n,l,c)}return}if(r==="afro_curls"){const v=new D(Om(),n);v.castShadow=!0,i.add(v);const m=new D(Fn(.265,.285,.24,.095,2,.022,o,a),n);t.add(m);const f=new D(Fn(.26,.21,.22,.085,2,.022,l,c),s);e.add(f);return}if(r==="beach_waves"){const v=new D(Jr(1.01),n);v.castShadow=!0,i.add(v);for(const x of[-1,1]){const M=new D(jr(x,!0),n);M.castShadow=!0,i.add(M)}const m=new D(Fn(.27,.315,.3,.068,2.2,.032,o,a),n);m.castShadow=!0,t.add(m);const f=new D(Fn(.295,.255,.42,.062,2.6,.036,l,c),n);f.castShadow=!0,e.add(f);for(const x of[-1,1])u(i,[new T(x*.025,.232,-.055),new T(x*.135,.175,-.105),new T(x*.205,.04,-.05),new T(x*.21,-.13,-.065),new T(x*.185,-.31,-.125),new T(x*.155,-.47,-.158)],26,.038,.48,x<0?s:n),u(i,[new T(x*.145,.16,.015),new T(x*.225,-.02,0),new T(x*.205,-.22,-.05),new T(x*.18,-.42,-.115)],20,.04,.5,x<0?n:s);for(let x=0;x<6;x++){const M=-.17+x/5*.34;u(t,[new T(M*.85,.04,.035),new T(M*1.05,-.12,.075),new T(M*.96,-.26,.055)],14,.045,.48,x%2===0?s:n,o,a),u(e,[new T(M*.96,.02,.045),new T(M*1.06,-.16,.08),new T(M*.88,-.34,.06)],16,.04,.48,x%2===0?n:s,l,c)}return}const d=new D(Jr(1.03),n);d.castShadow=!0,i.add(d);for(const v of[-1,1]){const m=new D(jr(v,!1),n);m.castShadow=!0,i.add(m)}const h=new D(Fn(.275,.325,.29,.072,2.2,.028,o,a),n);h.castShadow=!0,t.add(h);const p=new D(Fn(.305,.265,.35,.066,2.5,.03,l,c),n);p.castShadow=!0,e.add(p);for(const v of[-1,1])[{pts:[new T(v*.025,.235,-.055),new T(v*.135,.185,-.11),new T(v*.205,.06,-.055),new T(v*.215,-.09,-.045),new T(v*.195,-.25,-.11),new T(v*.155,-.42,-.155)],turns:2.4,amp0:.012,amp1:.02,rad:.034,flatness:.72,hi:v<0,phase:.4},{pts:[new T(v*.11,.21,-.075),new T(v*.205,.11,-.045),new T(v*.235,-.06,-.04),new T(v*.215,-.24,-.105),new T(v*.172,-.44,-.162)],turns:2.8,amp0:.016,amp1:.024,rad:.032,flatness:.8,hi:v>0,phase:1.3},{pts:[new T(v*.15,.16,.01),new T(v*.245,.02,-.01),new T(v*.255,-.14,-.035),new T(v*.225,-.31,-.095),new T(v*.185,-.46,-.14)],turns:3,amp0:.018,amp1:.026,rad:.033,flatness:.82,hi:!0,phase:2.2},{pts:[new T(v*.175,.11,.06),new T(v*.24,-.06,.045),new T(v*.235,-.23,-.03),new T(v*.195,-.39,-.11)],turns:2.7,amp0:.016,amp1:.024,rad:.033,flatness:.82,hi:!1,phase:3.1},{pts:[new T(v*.17,.06,.12),new T(v*.235,-.1,.11),new T(v*.235,-.28,.08),new T(v*.205,-.42,.04)],turns:2.4,amp0:.015,amp1:.022,rad:.036,flatness:.78,hi:v<0,phase:.9}].forEach((f,x)=>{const M=Di(f.pts,f.turns,f.amp0,f.amp1,x%2===0?v:-v,f.phase,0,0);u(i,M,28,f.rad,f.flatness,f.hi?s:n)});[-.21,-.14,-.07,0,.07,.14,.21].forEach((v,m)=>{const f=.045+m%2*.018,x=Di([new T(v*.85,.04,.03),new T(v*1.04,-.1,f+.028),new T(v*.98,-.25,f+.018)],2.2,.016,.024,m%2===0?1:-1,m*.85,o,a);u(t,x,20,.044,.72,m%2===0?n:s,o,a);const M=Di([new T(v*.95,.01,f),new T(v*1.06,-.15,f+.032),new T(v*.94,-.32,f+.028)],2.5,.016,.024,m%2===0?-1:1,m*1.05,l,c);u(e,M,22,.04,.74,m%2===0?s:n,l,c)})}function zm(){const i=new jt(.216,56,42),t=i.attributes.position,e=new T;for(let n=0;n<t.count;n++){if(e.fromBufferAttribute(t,n),e.z*=.89,e.y*=1.06,e.x*=.96,e.y<-.02){const s=ae.clamp((-e.y-.02)/.2,0,1);e.z*=1-.19*s*s,e.x<0&&(e.x*=1-.12*s),e.y-=.012*s*s}if(e.x>.04&&e.y<.01&&e.y>-.095&&Math.abs(e.z)>.055&&Math.abs(e.z)<.155){const s=Math.exp(-Math.pow((e.y+.038)/.036,2))*Math.exp(-Math.pow((Math.abs(e.z)-.102)/.034,2));e.x+=.006*s}if(e.x>.1){const s=Math.exp(-Math.pow((e.y+.02)/.016,2))*Math.exp(-Math.pow(e.z/.017,2)),r=Math.exp(-Math.pow((e.y-.006)/.022,2))*Math.exp(-Math.pow(e.z/.011,2));e.x+=s*.015+r*.007}t.setXYZ(n,e.x,e.y,e.z)}return i.computeVertexNormals(),i}function Bm(){const i=[new Q(.01,-.02),new Q(.132,-.01),new Q(.138,.03),new Q(.118,.135),new Q(.136,.255),new Q(.156,.365),new Q(.136,.455),new Q(.068,.49),new Q(.01,.49)],t=new hi(i,32);return t.computeVertexNormals(),t}function km(){const i=[new Q(.01,-.095),new Q(.122,-.08),new Q(.148,-.01),new Q(.142,.06),new Q(.128,.09),new Q(.01,.09)],t=new hi(i,28);return t.computeVertexNormals(),t}function Gm(i="classic"){const t=Xo.appearance,e=new At;e.name="MainCharacterRoot";const n=new Ie(1.15,1.15),s=new ve({map:Tm(),transparent:!0,depthWrite:!1,opacity:.72}),r=new D(n,s);r.rotation.x=-Math.PI/2,r.position.y=.025,e.add(r);const o=new At;e.add(o);const a=Z({color:t.skinTone,roughness:.54,metalness:.02,lift:.03}),l=Z({map:Mc("neutral",!1),color:16777215,roughness:.56,metalness:0,lift:.015});l.envMapIntensity=.18;const c=Am(t.hairColor,t.hairHighlightColor),u=Z({map:c,color:16777215,roughness:.56,metalness:.04,lift:.008});u.envMapIntensity=.3;const d=Z({map:c,color:9736355,roughness:.46,metalness:.06,lift:.012});d.envMapIntensity=.36;const h=Z({map:vc(t.sweaterColor,t.sweaterRibColor),color:16777215,roughness:.72,lift:.04}),p=Z({color:t.sweaterRibColor,roughness:.78,lift:.04}),g=Z({map:_c(t.jeansColor,t.jeansSeamColor),color:16777215,roughness:.68,lift:.04}),v=Z({color:t.shoeColor,roughness:.35,lift:.05}),m=Z({color:t.shoeSoleColor,roughness:.45,lift:.04}),f=Z({color:t.backpackColor,roughness:.52,lift:.04}),x=[h],M=[p],_=[g],I=[v],C=new At;C.position.y=.82,o.add(C);const P=new D(km(),g);P.scale.set(1.04,1,.78),P.castShadow=!0,C.add(P);const E=new At;E.position.y=.06,C.add(E);const S=new D(Bm(),h);S.scale.set(1.04,1,.76),S.castShadow=!0,E.add(S);const y=new D(new Oe(.136,.022,12,28),p);y.rotation.x=Math.PI/2,y.scale.set(1.04,.76,1),y.position.y=.015,E.add(y);const R=new D(new Oe(.076,.02,14,28),p);R.rotation.x=Math.PI/2,R.scale.set(1.04,.85,1),R.position.y=.482,E.add(R);const B=new hc;B.moveTo(-.062,.056),B.quadraticCurveTo(0,.05,.062,.056),B.lineTo(0,-.06),B.closePath();const F=new ua(B,{depth:.036,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:2});F.translate(0,0,-.036);const V=new D(F,a);V.position.set(0,.442,-.078),V.rotation.x=.5,V.visible=!1,E.add(V);const q=Z({color:14870768,roughness:.16,metalness:.88,lift:.08}),X=new At;X.position.set(0,.474,-.024);const tt=new D(new Oe(.072,.0042,8,28),q);tt.rotation.x=Math.PI/2+.36;const W=new D(new jt(.0095,12,10),q);W.scale.set(1,1.4,.75),W.position.set(0,-.036,-.096),X.add(tt,W),E.add(X);const lt=new At,dt=Z({color:t.lanyardColor,roughness:.45}),Mt=new D(ht(.016,.24,.01,.004,2),dt);Mt.position.set(-.036,.365,-.118),Mt.rotation.set(.14,0,-.16),lt.add(Mt);const Nt=new D(ht(.016,.24,.01,.004,2),dt);Nt.position.set(.036,.365,-.118),Nt.rotation.set(.14,0,.16),lt.add(Nt);const Qt=Z({map:wm(),color:16777215,roughness:.3,lift:.08}),H=new D(ht(.112,.076,.014,.005,2),Qt);H.position.set(0,.235,-.13),H.rotation.y=Math.PI,lt.add(H),E.add(lt);const st=new At;st.position.set(0,.255,.138),E.add(st);const Ct=new D(ht(.22,.27,.115,.04,3),f);Ct.castShadow=!0,st.add(Ct);const ct=new D(ht(.165,.115,.042,.016,2),Z({color:16707722,roughness:.55}));ct.position.set(0,-.052,.058),st.add(ct);const It=new D(ht(.028,.014,.014,.004,2),Z({color:16436245,roughness:.2,metalness:.7}));It.position.set(0,-.012,.08),st.add(It);const yt=new At;yt.position.set(0,.452,0),yt.visible=!1;const Pt=[16007006,16498468,3718648,11032055,2278750];for(let k=0;k<12;k++){const z=k/12*Math.PI*2,U=new D(new jt(.029,12,10),Z({color:Pt[k%Pt.length],roughness:.4}));U.scale.set(1.1,.65,1.1),U.position.set(Math.cos(z)*.115,-Math.sin(z)*.018-.018,Math.sin(z)*.102),yt.add(U)}E.add(yt);const Xt=new At;Xt.position.set(0,.482,0),Xt.visible=!1;const J=Z({color:15680580,roughness:.28,metalness:.1,lift:.06}),at=new D(new Oe(.072,.022,14,28),J);at.rotation.x=Math.PI/2;const L=new D(new jt(.028,12,10),J);L.position.set(-.058,-.015,-.085);const Lt=new D(ht(.032,.13,.012,.005,2),J);Lt.position.set(-.076,-.078,-.096),Lt.rotation.z=-.35;const it=new D(ht(.028,.105,.012,.005,2),J);it.position.set(-.045,-.072,-.102),it.rotation.z=.22,Xt.add(at,L,Lt,it),E.add(Xt);const St=new D(new Ee(.044,.065,10,16),a);St.position.y=.528,E.add(St);const rt=new At;rt.position.y=.715,E.add(rt);const Ot=new D(zm(),l);Ot.rotation.y=Math.PI/2,Ot.castShadow=!0,rt.add(Ot);const gt=Z({color:16436245,roughness:.22,metalness:.78,lift:.05});for(const k of[-1,1]){const z=new D(new jt(.028,12,10),a);z.scale.set(.46,.85,.72),z.position.set(k*.186,-.016,.014),rt.add(z);const U=new D(new jt(.009,10,8),gt);U.position.set(k*.193,-.038,.01),rt.add(U)}const A=new At;rt.add(A);const b=new At;b.position.set(0,.06,.16),rt.add(b);const G=new At;G.position.set(0,-.24,.05),b.add(G),yc(A,b,G,u,d,"loose_curls");const $=new At;rt.add($);const et=Z({color:t.headsetColor,roughness:.3,metalness:.45,lift:.02}),K=new $i([new T(-.188,.028,.018),new T(-.198,.038,.036),new T(-.204,.012,.044),new T(-.198,-.014,.024)]),Dt=new D(new ur(K,10,.0045,8,!1),et);$.add(Dt);const pt=new D(new Ee(.018,.022,8,12),et);pt.rotation.x=Math.PI/2,pt.position.set(-.196,-.012,.012),$.add(pt);const bt=new $i([new T(-.198,-.014,.008),new T(-.194,-.048,-.055),new T(-.17,-.074,-.118),new T(-.125,-.085,-.165)]),Zt=new D(new ur(bt,12,.004,8,!1),et);$.add(Zt);const ot=new D(new jt(.009,10,8),et);ot.scale.set(1.15,.85,.9),ot.position.set(-.125,-.085,-.165),$.add(ot);const wt=new D(new jt(.006,10,8),new di({color:t.headsetAccentColor,emissive:t.headsetAccentColor,emissiveIntensity:.9}));wt.position.set(-.212,-.01,.006),$.add(wt);const Ft=new At;Ft.position.set(0,.016,-.214),Ft.visible=!1;const Gt=Z({color:988970,roughness:.08,metalness:.72,lift:.02}),Et=new D(ht(.072,.044,.015,.015,2),Gt);Et.position.x=-.056;const $t=new D(new Oe(.036,.0048,8,20),gt);$t.scale.set(1.15,.78,1),$t.position.set(-.056,0,-.004);const Wt=Et.clone();Wt.position.x=.056;const re=$t.clone();re.position.x=.056;const N=new D(ht(.04,.01,.014,.004,2),gt);N.position.y=.01,Ft.add(Et,$t,Wt,re,N),rt.add(Ft);const ft=new At;ft.position.set(0,.262,-.005),ft.visible=!1;const Y=new D(new me(.098,.086,.05,18),gt);ft.add(Y);for(let k=0;k<5;k++){const z=k/5*Math.PI*2,U=new D(new ai(.02,.064,10),gt);U.position.set(Math.cos(z)*.076,.052,Math.sin(z)*.076);const nt=new D(new jt(.011,8,8),Z({color:16007006,roughness:.15,lift:.15}));nt.position.set(Math.cos(z)*.088,.01,Math.sin(z)*.088),ft.add(U,nt)}rt.add(ft);const j=new At;j.position.set(0,.234,-.02),j.scale.setScalar(.94),j.visible=!1;const vt=Z({color:988970,roughness:.38}),_t=new D(new me(.185,.16,.068,22),vt),Vt=new D(new jt(.185,20,12),vt);Vt.scale.set(1,.32,1),Vt.position.y=.03;const ue=new D(ht(.21,.018,.13,.008,2),vt);ue.position.set(0,-.024,-.145),ue.rotation.x=.12;const xe=new D(new Zi(.032),gt);xe.position.set(0,.012,-.175),j.add(_t,Vt,ue,xe),rt.add(j);const Kt=new At;Kt.position.set(.075,.242,-.012),Kt.rotation.z=-.22,Kt.visible=!1;const ze=Z({color:1981066,roughness:.4}),qe=new D(new me(.11,.1,.072,22),ze);qe.scale.set(1.16,1,.9);const Vn=new D(new Oe(.103,.009,10,24),J);Vn.rotation.x=Math.PI/2,Vn.scale.set(1.16,.9,1),Vn.position.y=-.025;const ts=new D(ht(.074,.021,.014,.005,2),gt);ts.position.set(0,.008,-.094),Kt.add(qe,Vn,ts),rt.add(Kt);const rn=k=>{const z=new At;z.position.set(k*.178,.422,0),E.add(z);const U=new D(new jt(.044,14,12),h);U.castShadow=!0,z.add(U);const nt=new D(new Ee(.039,.16,10,16),h);nt.position.y=-.098,nt.castShadow=!0,z.add(nt);const ut=new At;ut.position.y=-.195,z.add(ut);const Rt=new D(new jt(.037,12,10),h);ut.add(Rt);const xt=new D(new Ee(.034,.145,10,16),h);xt.position.y=-.09,xt.castShadow=!0,ut.add(xt);const zt=new D(new Oe(.036,.012,10,18),p);zt.rotation.x=Math.PI/2,zt.position.y=-.172,ut.add(zt);const Bt=new D(new Ee(.031,.02,8,14),a);Bt.scale.set(.9,1,.76),Bt.position.y=-.216,ut.add(Bt);const Tt=new D(new Ee(.012,.02,6,10),a);return Tt.position.set(-k*.024,-.208,-.02),Tt.rotation.z=k*.55,ut.add(Tt),{shoulder:z,forearm:ut}},pi=rn(-1),es=rn(1),Ps=Z({color:16007006,roughness:.4}),Wn=k=>{const z=new At;z.position.set(k*.082,-.03,0),C.add(z);const U=new D(new Ee(.059,.25,10,18),g);U.position.y=-.16,U.castShadow=!0,z.add(U);const nt=new At;nt.position.y=-.325,z.add(nt);const ut=new D(new jt(.052,14,12),g);nt.add(ut);const Rt=new D(new Ee(.048,.25,10,18),g);Rt.position.y=-.18,Rt.castShadow=!0,nt.add(Rt);const xt=new At;xt.position.set(0,-.382,-.032),nt.add(xt);const zt=new D(ht(.106,.086,.198,.03,3),v);zt.position.set(0,-.008,.004),zt.castShadow=!0,xt.add(zt);const Bt=new D(new jt(.053,16,12),v);Bt.scale.set(1,.65,1.16),Bt.position.set(0,-.018,-.086),xt.add(Bt);const Tt=new D(ht(.062,.042,.036,.011,2),v);Tt.position.set(0,.034,-.032),Tt.rotation.x=-.35,xt.add(Tt);const Jt=new D(ht(.108,.03,.05,.009,2),Ps);Jt.position.set(0,.009,.07),xt.add(Jt);const oe=new D(ht(.114,.035,.228,.013,2),m);return oe.position.set(0,-.048,-.01),xt.add(oe),{thigh:z,shin:nt}},ns=Wn(-1),Xn=Wn(1),qn=new D(new jt(1.15,24,18),new di({color:1096065,emissive:366185,emissiveIntensity:.4,transparent:!0,opacity:.24,roughness:.1}));qn.position.y=.95,qn.visible=!1,e.add(qn);const An=new At;An.position.set(0,.95,.38),An.visible=!1;const gr=new ve({color:3718648,transparent:!0,opacity:.72}),Ls=new D(new ai(.28,1.1,14),gr);Ls.rotation.x=Math.PI/2,An.add(Ls),e.add(An);const Yn=new At;Yn.position.y=1.92,Yn.visible=!1;const w=new ve({color:16436245});for(let k=0;k<4;k++){const z=k/4*Math.PI*2,U=new D(new Zi(.075),w);U.position.set(Math.cos(z)*.34,0,Math.sin(z)*.34),Yn.add(U)}o.add(Yn);const O={root:e,visualRoot:o,hips:C,torso:E,headGroup:rt,headMaterial:l,leftArm:pi.shoulder,rightArm:es.shoulder,leftForearm:pi.forearm,rightForearm:es.forearm,leftLeg:ns.thigh,rightLeg:Xn.thigh,leftShin:ns.shin,rightShin:Xn.shin,hairCrown:A,hairBackUpper:b,hairBackLower:G,hairMat:u,hairHighlightMat:d,headsetLed:wt,callCenterHeadset:$,callCenterLanyard:lt,collar:R,vNeckSkin:V,necklace:X,backpack:st,sunglasses:Ft,crown:ft,pilotCap:j,stewardessCap:Kt,stewardessScarf:Xt,vacationLei:yt,shieldBubble:qn,turboFlame:An,dizzyStars:Yn,shadowBlob:r,sweaterMaterials:x,sweaterRibMaterials:M,jeansMaterials:_,shoeMaterials:I,backpackMaterial:f};return zn(O,i),O}function zn(i,t,e){const n=Gi.find(a=>a.id===t)??Gi[0],s=vc(n.sweaterColor,n.sweaterRibColor);for(const a of i.sweaterMaterials)a.map=s,a.emissive.setHex(n.sweaterColor),a.emissiveIntensity=.04,a.needsUpdate=!0;for(const a of i.sweaterRibMaterials)a.color.setHex(n.sweaterRibColor),a.emissive.setHex(n.sweaterRibColor);const r=new kt(n.jeansColor).multiplyScalar(.84).getHex(),o=_c(n.jeansColor,r);for(const a of i.jeansMaterials)a.map=o,a.emissive.setHex(n.jeansColor),a.emissiveIntensity=.04,a.needsUpdate=!0;for(const a of i.shoeMaterials)a.color.setHex(n.shoeColor),a.emissive.setHex(n.shoeColor);i.backpackMaterial.color.setHex(n.backpackColor),i.backpackMaterial.emissive.setHex(n.backpackColor),i.callCenterLanyard.visible=t==="classic",i.callCenterHeadset.visible=t==="classic",i.vNeckSkin.visible=t==="picnic",i.collar.visible=t!=="picnic",i.necklace.visible=!n.hasStewardessCap&&!n.hasVacationLei,i.sunglasses.visible=!!n.hasSunglasses,i.crown.visible=!!n.hasCrown,i.pilotCap.visible=!!n.hasPilotCap,i.stewardessCap.visible=!!n.hasStewardessCap,i.stewardessScarf.visible=!!n.hasStewardessCap,i.vacationLei.visible=!!n.hasVacationLei,e&&yc(i.hairCrown,i.hairBackUpper,i.hairBackLower,i.hairMat,i.hairHighlightMat,e)}function he(i,t,e,n){return ae.lerp(i,t,1-Math.exp(-e*n))}class Hm{rig;runPhase=0;blinkTimer=2.6;isBlinking=!1;blinkDurationLeft=0;currentExpression="neutral";hairSpringAngle=0;hairSpringVel=0;hairSwayAngle=0;wasAirborne=!1;landSquash=0;prevState="idle";constructor(t){this.rig=t}setExpression(t){this.currentExpression!==t&&(this.currentExpression=t,this.syncFaceTexture())}syncFaceTexture(){const t=Mc(this.currentExpression,this.isBlinking);this.rig.headMaterial.map!==t&&(this.rig.headMaterial.map=t,this.rig.headMaterial.needsUpdate=!0)}update(t,e,n,s,r,o){const a=this.rig,l=Math.min(t,.05);this.updateBlink(l,e==="collision");const c=Math.max(.45,1-o*.22);a.shadowBlob.scale.setScalar(c),a.shadowBlob.material.opacity=Math.max(.2,.72-o*.18),a.dizzyStars.visible=e==="collision",e==="collision"&&(a.dizzyStars.rotation.y+=l*5.2);const u=e==="jump"||e==="fall";this.wasAirborne&&!u&&e!=="slide"&&e!=="collision"&&(this.landSquash=.16),this.wasAirborne=u,this.landSquash=Math.max(0,this.landSquash-l*1.15);let d=.82,h=0,p=0,g=0,v=0,m=0,f=0,x=0,M=0,_=0,I=0,C=0,P=0,E=0,S=0,y=0,R=-.14,B=0,F=.14,V=.35,q=.35,X=0,tt=0,W=0,lt=1,dt=.12,Mt=-s*.55,Nt=16;if(e==="desk_sit")Nt=24,d=.53,v=-.08,f=.06,x=Math.sin(performance.now()*.002)*.08,_=1.45,C=1.45,E=-1.42,S=-1.42,y=.88,B=.88,R=-.18,F=.18,V=.62,q=.62,dt=.06;else if(e==="intro_standup")Nt=14,d=.85,v=-.12,f=.1,x=.22,_=.25,C=-.2,E=-.15,S=-.2,y=.65,B=-.35,R=-.32,F=.32,V=.7,q=.7,dt=.35;else if(e==="idle"||e==="victory"){Nt=12;const yt=performance.now()*.0028;tt=e==="victory"?Math.sin(yt*.6)*.14:.04,d=.82+Math.sin(yt*2)*.02,v=-.04,m=Math.sin(yt)*.045,f=Math.sin(yt*1.4)*.035,x=Math.sin(yt*.7)*.08,M=e==="idle"?.055+Math.sin(yt*.8)*.018:0,_=-.05,I=-.04,C=.05,P=.04,E=-.06,S=-.06,e==="victory"?(y=2.45,B=2.45,R=-.35,F=.35,V=.35,q=.35):(y=-.06,B=.06,R=-.1,F=.1,V=.22,q=.22),dt=.05}else if(e==="slide")Nt=22,W=s*.28,d=.33,h=.82,v=.22,f=-.78,_=.55,C=.15,I=-.08,P=.08,E=-.15,S=-1.15,y=-.45,B=-.45,R=-.45,F=.45,V=.3,q=.3,dt=.65;else if(e==="jump"||e==="fall"){Nt=18;const yt=r>0;W=-s*.45,d=.85,v=yt?-.16:-.04,f=yt?.15:-.08,_=yt?.92:.38,C=yt?-.48:-.22,E=yt?-1.1:-.42,S=yt?-.68:-.28,y=1.25,B=-.65,R=-.28,F=.28,V=.58,q=.58,lt=yt?1.07:.97,dt=yt?.52:.85}else if(e==="collision")Nt=18,X=.36,W=.14,d=.56,v=.2,f=-.22,x=Math.sin(performance.now()*.015)*.25,_=.5,C=.25,I=-.18,P=.18,E=-.7,S=-.5,y=.7,B=.7,R=-.55,F=.55,dt=.5;else{Nt=24;const yt=e==="turbo"?18:Math.max(10.5,n*.76);this.runPhase+=l*yt;const Pt=Math.sin(this.runPhase),Xt=Math.cos(this.runPhase),J=Math.abs(Xt);lt=(1+(J-.5)*.09)*(1-this.landSquash),W=-s*.58,d=.82+J*.1,p=Pt*.12,g=Xt*.035+s*.24;const at=e==="turbo"?-.36:-.2;v=at+Math.sin(this.runPhase*2)*.04,m=-Pt*.14,f=-at*.75+J*.04,x=Pt*.05,M=-s*.25;const L=e==="turbo"?1.15:.98;_=Pt*L,C=-Pt*L,E=-Math.max(.12,-Pt*1.1+.42),S=-Math.max(.12,Pt*1.1+.42),y=-Pt*1.05,B=Pt*1.05,R=-.18,F=.18,V=.95+Math.max(0,-Pt)*.3,q=.95+Math.max(0,Pt)*.3,dt=.32+J*.22+(e==="turbo"?.38:0),Mt=-s*.8+Pt*.12}const Qt=this.prevState!==e&&(e==="desk_sit"||e==="idle");this.prevState=e;const H=Qt?100:Nt,st=1/Math.sqrt(Math.max(.75,lt));a.visualRoot.scale.set(he(a.visualRoot.scale.x,st,H,l),he(a.visualRoot.scale.y,lt,H,l),he(a.visualRoot.scale.z,st,H,l)),a.visualRoot.rotation.set(he(a.visualRoot.rotation.x,X,H,l),he(a.visualRoot.rotation.y,tt,H,l),he(a.visualRoot.rotation.z,W,H,l)),a.hips.position.y=he(a.hips.position.y,d,H,l),a.hips.rotation.set(he(a.hips.rotation.x,h,H,l),he(a.hips.rotation.y,p,H,l),he(a.hips.rotation.z,g,H,l)),a.torso.rotation.set(he(a.torso.rotation.x,v,H,l),he(a.torso.rotation.y,m,H,l),0),a.headGroup.rotation.set(he(a.headGroup.rotation.x,f,H,l),he(a.headGroup.rotation.y,x,H,l),he(a.headGroup.rotation.z,M,H,l)),a.leftLeg.rotation.set(he(a.leftLeg.rotation.x,_,H,l),0,he(a.leftLeg.rotation.z,I,H,l)),a.rightLeg.rotation.set(he(a.rightLeg.rotation.x,C,H,l),0,he(a.rightLeg.rotation.z,P,H,l)),a.leftShin.rotation.x=he(a.leftShin.rotation.x,E,H,l),a.rightShin.rotation.x=he(a.rightShin.rotation.x,S,H,l),a.leftArm.rotation.set(he(a.leftArm.rotation.x,y,H,l),0,he(a.leftArm.rotation.z,R,H,l)),a.rightArm.rotation.set(he(a.rightArm.rotation.x,B,H,l),0,he(a.rightArm.rotation.z,F,H,l)),a.leftForearm.rotation.x=he(a.leftForearm.rotation.x,V,H,l),a.rightForearm.rotation.x=he(a.rightForearm.rotation.x,q,H,l);const It=(dt-this.hairSpringAngle)*92-this.hairSpringVel*13;this.hairSpringVel+=It*l,this.hairSpringAngle=ae.clamp(this.hairSpringAngle+this.hairSpringVel*l,0,.95),this.hairSwayAngle+=(Mt-this.hairSwayAngle)*Math.min(1,l*12),a.hairBackUpper.rotation.x=-this.hairSpringAngle*.55,a.hairBackUpper.rotation.z=this.hairSwayAngle*.55,a.hairBackLower.rotation.x=-this.hairSpringAngle*.5,a.hairBackLower.rotation.z=this.hairSwayAngle*.7,a.headsetLed.scale.setScalar(.92+Math.sin(performance.now()*.008)*.16)}updateBlink(t,e){if(e){this.isBlinking&&(this.isBlinking=!1,this.syncFaceTexture());return}if(this.isBlinking){this.blinkDurationLeft-=t,this.blinkDurationLeft<=0&&(this.isBlinking=!1,this.syncFaceTexture());return}this.blinkTimer-=t,this.blinkTimer<=0&&(this.isBlinking=!0,this.blinkDurationLeft=.13,this.blinkTimer=2.4+Math.random()*2.4,this.syncFaceTexture())}}class Vm{group=new At;items=[];qualityMultiplier=1;sphereGeo=new jt(.12,6,6);planeGeo=new Ie(.24,.3);starGeo=new Zi(.11);constructor(t=140){for(let e=0;e<t;e++){const n=new ve({color:16777215,transparent:!0,opacity:1,side:Ke}),s=new D(this.sphereGeo,n);s.visible=!1,this.group.add(s),this.items.push({mesh:s,vx:0,vy:0,vz:0,rotSpeed:0,life:0,maxLife:1,gravity:0,active:!1})}}setQualityMultiplier(t){this.qualityMultiplier=t}spawn(t,e,n,s,r,o,a,l,c,u,d="sphere"){const h=this.items.find(v=>!v.active);if(!h)return;h.active=!0,h.life=c,h.maxLife=c,h.vx=s,h.vy=r,h.vz=o,h.gravity=u,h.rotSpeed=(Math.random()-.5)*9;const p=d==="paper"?this.planeGeo:d==="star"?this.starGeo:this.sphereGeo;h.mesh.geometry!==p&&(h.mesh.geometry=p);const g=h.mesh.material;g.color.setHex(a),g.opacity=1,h.mesh.position.set(t,e,n),h.mesh.scale.setScalar(l),h.mesh.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),h.mesh.visible=!0}emitRunDust(t,e){Math.random()>.65*this.qualityMultiplier||this.spawn(t+(Math.random()-.5)*.3,.08,e+.25,(Math.random()-.5)*.8,.7+Math.random()*.6,1.8+Math.random()*1.2,14870768,.55+Math.random()*.35,.34,-.8,"sphere")}emitCoinBurst(t,e,n,s=16498468){const r=Math.max(3,Math.round(7*this.qualityMultiplier));for(let o=0;o<r;o++){const a=o/r*Math.PI*2;this.spawn(t,e,n,Math.cos(a)*2.5,2+Math.random()*2,Math.sin(a)*2.5,s,.7,.45,-6.5,"star")}}emitCollisionBurst(t,e,n){const s=Math.max(8,Math.round(16*this.qualityMultiplier));for(let r=0;r<s;r++){const o=r%2===0;this.spawn(t+(Math.random()-.5)*.5,e+.6,n,(Math.random()-.5)*6,3.5+Math.random()*4.5,(Math.random()-.5)*5,o?16777215:16436245,o?1.1:.8,.95,-9.5,o?"paper":"star")}}emitFlyingPaper(t,e,n){Math.random()>this.qualityMultiplier||this.spawn(t,e,n,(Math.random()-.5)*2.2,2.2+Math.random()*1.8,3.5+Math.random()*2,16710888,.95,.85,-3,"paper")}emitConfetti(t,e,n){const s=[15680580,16498468,2278750,3900150,11032055],r=Math.max(10,Math.round(24*this.qualityMultiplier));for(let o=0;o<r;o++)this.spawn(t+(Math.random()-.5)*2.5,e+1.5,n+(Math.random()-.5)*2,(Math.random()-.5)*7,4+Math.random()*5,(Math.random()-.5)*7,s[o%s.length],.85,1.5,-6,"paper")}update(t){for(const e of this.items){if(!e.active)continue;if(e.life-=t,e.life<=0){e.active=!1,e.mesh.visible=!1;continue}e.vy+=e.gravity*t,e.mesh.position.x+=e.vx*t,e.mesh.position.y+=e.vy*t,e.mesh.position.z+=e.vz*t,e.mesh.rotation.x+=e.rotSpeed*t,e.mesh.rotation.y+=e.rotSpeed*t;const n=e.life/e.maxLife,s=e.mesh.material;s.opacity=n}}clear(){for(const t of this.items)t.active=!1,t.mesh.visible=!1}}class Wm{root;cb;modal="none";saveSnapshot;previewSkin="classic";currentState="menu";scoreEl=null;distEl=null;coinsEl=null;powerupContainer=null;turboOverlay=null;bannerTimer=null;bubbleTimer=null;toastTimer=null;floatingLayer;constructor(t,e,n){this.root=t,this.cb=e,this.saveSnapshot=n,this.previewSkin=n.equippedSkin,this.floatingLayer=document.createElement("div"),this.floatingLayer.id="floating-layer",document.body.appendChild(this.floatingLayer)}updateSave(t){this.saveSnapshot=t}get activeModal(){return this.modal}renderState(t,e,n=[],s=!1){if(this.currentState=t,this.root.innerHTML="",this.scoreEl=null,this.distEl=null,this.coinsEl=null,this.powerupContainer=null,this.turboOverlay=null,t==="menu"){this.modal==="wardrobe"?this.renderWardrobe():this.modal==="achievements"?this.renderAchievementsModal():this.modal==="settings"?this.renderSettingsModal():this.renderMenu();return}if(t==="intro"){this.renderIntroOverlay(se.introWaiting,se.introRing);return}if(t==="playing"){this.renderHUD(e);return}if(t==="paused"){this.renderHUD(e),this.renderPauseModal();return}if(t==="gameover"){this.renderGameOverModal(e,n,s);return}t==="victory"&&this.renderVictoryModal(e,n,s)}renderMenu(){const t=document.createElement("div");t.className="screen-center",t.innerHTML=`
      <div class="logo-header ui-interactive">
        <div class="logo-title-en">${qo.gameTitleEn}</div>
        <div class="logo-sub-he">${qo.gameSubtitleHe}</div>
      </div>

      <div class="menu-bottom-panel ui-interactive">
        <div class="best-strip">
          <span>שיא אישי: <strong data-testid="menu-best-score">${this.saveSnapshot.highScore.toLocaleString("he-IL")}</strong></span>
          <span>🍵 תה: <strong data-testid="menu-wallet-coins">${this.saveSnapshot.walletCoins}</strong></span>
        </div>
        <button class="btn btn-primary" data-action="start">${se.btnStart} 🏃‍♀️</button>
        <div class="menu-grid">
          <button class="btn btn-secondary" data-action="wardrobe">👗<br>${se.btnWardrobe}</button>
          <button class="btn btn-secondary" data-action="achievements">🏆<br>${se.btnAchievements}</button>
          <button class="btn btn-secondary" data-action="settings">⚙️<br>${se.btnSettings}</button>
        </div>
      </div>
    `,t.querySelector('[data-action="start"]')?.addEventListener("click",()=>this.cb.onStartRun()),t.querySelector('[data-action="wardrobe"]')?.addEventListener("click",()=>{this.modal="wardrobe",this.previewSkin=this.saveSnapshot.equippedSkin,this.cb.onOpenWardrobe(!0),this.renderWardrobe()}),t.querySelector('[data-action="achievements"]')?.addEventListener("click",()=>{this.modal="achievements",this.renderAchievementsModal()}),t.querySelector('[data-action="settings"]')?.addEventListener("click",()=>{this.modal="settings",this.renderSettingsModal()}),this.root.appendChild(t)}renderWardrobe(){this.root.innerHTML="";const t=document.createElement("div");t.className="wardrobe-shell";const e=document.createElement("div");e.className="hud-top",e.innerHTML=`
      <div class="hud-pill ui-interactive">
        <span class="hud-pill-label">כוסות תה</span>
        <span class="hud-pill-val coin-val">🍵 ${this.saveSnapshot.walletCoins}</span>
      </div>
      <button class="btn btn-secondary ui-interactive" data-action="close-wardrobe">${se.btnClose}</button>
    `,e.querySelector('[data-action="close-wardrobe"]')?.addEventListener("click",()=>{this.modal="none",this.cb.onOpenWardrobe(!1),this.cb.onSelectSkin(this.saveSnapshot.equippedSkin),this.renderState("menu",{distance:0,score:0,coins:0,vacationDays:0,creditPoints:0,specialItems:0,dodgedObstacles:0,currentStreak:0,bestStreak:0,nearMisses:0,durationSec:0,zonesVisited:["call_center"],completedEscape:!1,endlessLoops:0})});const n=document.createElement("div");n.className="wardrobe-panel";const s=Gi.find(c=>c.id===this.previewSkin)??Gi[0],r=this.saveSnapshot.unlockedSkins.includes(s.id),o=this.saveSnapshot.equippedSkin===s.id;let a="בחרי תחפושת";o?a="מצוידת כעת ✓":r?a="הלבישי סקין זה":a=`פתחי תמורת ${s.price} 🍵`;const l=this.saveSnapshot.equippedHair??"loose_curls";n.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
        <div>
          <strong style="font-size:17px;">${s.name}</strong>
          <div style="font-size:12px;color:#cbd5e1;">${s.description}</div>
        </div>
        <button class="btn ${o?"btn-success":"btn-primary"}" style="padding:10px 14px;font-size:14px;" data-action="equip-skin">
          ${a}
        </button>
      </div>
      <div style="font-size:12px;font-weight:800;color:#38bdf8;margin-top:8px;">סגנון תלתלים ושיער (לשינוי חופשי):</div>
      <div class="hair-pill-row">
        ${Sm.map(c=>`
            <button class="hair-pill-btn ${l===c.id?"active":""}" data-hair-id="${c.id}" title="${c.description}">
              <span>💇‍♀️ ${c.name}</span>
            </button>
          `).join("")}
      </div>

      <div style="font-size:12px;font-weight:800;color:#fde047;margin-top:10px;">בחירת תלבושת / סקין:</div>
      <div class="skin-list">
        ${Gi.map(c=>{const u=this.saveSnapshot.unlockedSkins.includes(c.id),d=this.saveSnapshot.equippedSkin===c.id,h=this.previewSkin===c.id;return`
            <button class="skin-card ${d?"equipped":""} ${h?"selected":""}" data-skin-id="${c.id}">
              <span style="font-weight:800;font-size:13px;">${c.name}</span>
              <span style="font-size:11px;color:${u?"#6ee7b7":"#fde047"};">
                ${d?"בשימוש":u?"פתוח":`🍵 ${c.price}`}
              </span>
            </button>
          `}).join("")}
      </div>
    `,n.querySelectorAll("[data-hair-id]").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.hairId;this.cb.onSelectHair(u),this.renderWardrobe()})}),n.querySelectorAll("[data-skin-id]").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.skinId;this.previewSkin=u,this.cb.onSelectSkin(u),this.renderWardrobe()})}),n.querySelector('[data-action="equip-skin"]')?.addEventListener("click",()=>{this.cb.onBuyOrEquipSkin(this.previewSkin),this.renderWardrobe()}),t.append(e,n),this.root.appendChild(t)}renderAchievementsModal(){this.root.innerHTML="";const t=document.createElement("div");t.className="modal-backdrop ui-interactive";const e=new Set(this.saveSnapshot.unlockedAchievements);t.innerHTML=`
      <div class="modal-card">
        <div class="modal-title">🏆 הישגים ומשימות</div>
        <div class="modal-subtitle">משימות פעילות</div>
        <div class="list-stack">
          ${this.saveSnapshot.activeMissions.map(n=>`
                <div class="list-item ${n.completed?"unlocked":""}">
                  <div>
                    <div style="font-weight:800;font-size:14px;">${this.getMissionTitle(n.id)}</div>
                    <div style="font-size:12px;color:#cbd5e1;">התקדמות: ${n.progress} / ${this.getMissionTarget(n.id)}</div>
                  </div>
                  <span>${n.completed?"✅":"🎯"}</span>
                </div>
              `).join("")}
        </div>
        <div class="modal-subtitle">הישגי המוקד (${e.size} / ${Yo.length})</div>
        <div class="list-stack">
          ${Yo.map(n=>{const s=e.has(n.id);return`
              <div class="list-item ${s?"unlocked":""}">
                <div>
                  <div style="font-weight:800;font-size:14px;">${n.icon} ${n.title}</div>
                  <div style="font-size:12px;color:#cbd5e1;">${n.description}</div>
                </div>
                <div style="font-size:12px;font-weight:800;color:${s?"#6ee7b7":"#fde047"};">
                  ${s?"הושג!":`+${n.rewardCoins} 🍵`}
                </div>
              </div>
            `}).join("")}
        </div>
        <button class="btn btn-secondary" data-action="close-modal">${se.btnClose}</button>
      </div>
    `,t.querySelector('[data-action="close-modal"]')?.addEventListener("click",()=>{this.modal="none",this.renderState("menu",{distance:0,score:0,coins:0,vacationDays:0,creditPoints:0,specialItems:0,dodgedObstacles:0,currentStreak:0,bestStreak:0,nearMisses:0,durationSec:0,zonesVisited:["call_center"],completedEscape:!1,endlessLoops:0})}),this.root.appendChild(t)}renderSettingsModal(){this.root.innerHTML="";const t=this.saveSnapshot.settings,e=document.createElement("div");e.className="modal-backdrop ui-interactive",e.innerHTML=`
      <div class="modal-card">
        <div class="modal-title">⚙️ הגדרות</div>
        <div class="setting-row">
          <label>
            <span>השתקת כל הסאונד</span>
            <input type="checkbox" data-setting="mute" ${t.muted?"checked":""} />
          </label>
        </div>
        <div class="setting-row">
          <label>
            <span>עוצמת מוזיקה</span>
            <span data-label="music">${Math.round(t.musicVolume*100)}%</span>
          </label>
          <input type="range" min="0" max="100" value="${Math.round(t.musicVolume*100)}" data-setting="music" />
        </div>
        <div class="setting-row">
          <label>
            <span>עוצמת אפקטים</span>
            <span data-label="sfx">${Math.round(t.sfxVolume*100)}%</span>
          </label>
          <input type="range" min="0" max="100" value="${Math.round(t.sfxVolume*100)}" data-setting="sfx" />
        </div>
        <div class="setting-row">
          <label>
            <span>רמת גרפיקה</span>
            <select data-setting="quality" style="background:#0f172a;color:#fff;border:1px solid #475569;border-radius:8px;padding:4px 8px;">
              <option value="auto" ${t.quality==="auto"?"selected":""}>אוטומטי</option>
              <option value="low" ${t.quality==="low"?"selected":""}>נמוכה (חוסך סוללה)</option>
              <option value="medium" ${t.quality==="medium"?"selected":""}>בינונית</option>
              <option value="high" ${t.quality==="high"?"selected":""}>גבוהה</option>
            </select>
          </label>
        </div>
        <button class="btn btn-danger" data-action="reset-save">איפוס שיאים והתקדמות</button>
        <button class="btn btn-secondary" data-action="close-modal">${se.btnClose}</button>
      </div>
    `,e.querySelector('[data-setting="mute"]')?.addEventListener("change",()=>{this.cb.onToggleMute()}),e.querySelector('[data-setting="music"]')?.addEventListener("input",s=>{const r=Number(s.target.value)/100,o=e.querySelector('[data-label="music"]');o&&(o.textContent=`${Math.round(r*100)}%`),this.cb.onSetMusicVol(r)}),e.querySelector('[data-setting="sfx"]')?.addEventListener("input",s=>{const r=Number(s.target.value)/100,o=e.querySelector('[data-label="sfx"]');o&&(o.textContent=`${Math.round(r*100)}%`),this.cb.onSetSfxVol(r)}),e.querySelector('[data-setting="quality"]')?.addEventListener("change",s=>{this.cb.onSetQuality(s.target.value)});let n=!1;e.querySelector('[data-action="reset-save"]')?.addEventListener("click",s=>{const r=s.currentTarget;if(!n){n=!0,r.textContent="בטוחה? לחצי שוב לאישור מחיקה";return}this.cb.onResetProgress(),this.modal="none",this.renderMenu()}),e.querySelector('[data-action="close-modal"]')?.addEventListener("click",()=>{this.modal="none",this.renderState("menu",{distance:0,score:0,coins:0,vacationDays:0,creditPoints:0,specialItems:0,dodgedObstacles:0,currentStreak:0,bestStreak:0,nearMisses:0,durationSec:0,zonesVisited:["call_center"],completedEscape:!1,endlessLoops:0})}),this.root.appendChild(e)}renderIntroOverlay(t,e){const n=document.createElement("div");n.className="intro-overlay",n.innerHTML=`
      <div class="intro-phone-box ui-interactive" data-testid="intro-callout">
        <div class="ring-badge">📞 ${e}</div>
        <p>${t}</p>
      </div>
      <button class="btn btn-secondary ui-interactive" style="padding:8px 16px;font-size:13px;" data-action="skip-intro">דלגי ישר לבריחה ⏩</button>
    `,n.querySelector('[data-action="skip-intro"]')?.addEventListener("click",()=>this.cb.onSkipIntro()),this.root.appendChild(n)}updateIntroText(t,e){const n=this.root.querySelector('[data-testid="intro-callout"]');if(!n)return;const s=n.querySelector(".ring-badge"),r=n.querySelector("p");s&&(s.textContent=`📞 ${e}`),r&&(r.textContent=t)}renderHUD(t){const e=document.createElement("div");e.className="hud-top",e.innerHTML=`
      <div class="hud-stats">
        <div class="hud-pill">
          <span class="hud-pill-label">ניקוד</span>
          <span class="hud-pill-val" data-hud="score">${Math.floor(t.score)}</span>
        </div>
        <div class="hud-pill">
          <span class="hud-pill-label">מרחק</span>
          <span class="hud-pill-val" data-hud="dist">${Math.floor(t.distance)} מ׳</span>
        </div>
        <div class="hud-pill">
          <span class="hud-pill-label">תה</span>
          <span class="hud-pill-val coin-val" data-hud="coins">🍵 ${t.coins}</span>
        </div>
      </div>
      <div class="hud-actions ui-interactive">
        <button class="icon-btn" data-action="mute" aria-label="השתקה">${this.saveSnapshot.settings.muted?"🔇":"🔊"}</button>
        <button class="icon-btn" data-action="pause" aria-label="הפסקה">⏸️</button>
      </div>
    `,e.querySelector('[data-action="pause"]')?.addEventListener("click",()=>this.cb.onPause()),e.querySelector('[data-action="mute"]')?.addEventListener("click",o=>{this.cb.onToggleMute(),o.currentTarget.textContent=this.saveSnapshot.settings.muted?"🔇":"🔊"});const n=document.createElement("div");n.className="hud-powerups";const s=document.createElement("div");s.className="controls-hint";const r="ontouchstart"in window||navigator.maxTouchPoints>0;s.textContent=r?se.controlsHintTouch:se.controlsHintDesktop,this.root.append(e,n,s),this.scoreEl=e.querySelector('[data-hud="score"]'),this.distEl=e.querySelector('[data-hud="dist"]'),this.coinsEl=e.querySelector('[data-hud="coins"]'),this.powerupContainer=n}updateHUD(t,e){if(this.currentState!=="playing")return;this.scoreEl&&(this.scoreEl.textContent=Math.floor(t.score).toLocaleString("he-IL")),this.distEl&&(this.distEl.textContent=`${Math.floor(t.distance)} מ׳`),this.coinsEl&&(this.coinsEl.textContent=`🍵 ${t.coins}`);const n=(e.turbo??0)>0;if(n&&!this.turboOverlay?(this.turboOverlay=document.createElement("div"),this.turboOverlay.className="turbo-vignette",document.body.appendChild(this.turboOverlay)):!n&&this.turboOverlay&&(this.turboOverlay.remove(),this.turboOverlay=null),this.powerupContainer){const s=Object.entries(e).filter(([,r])=>(r??0)>0);s.length===0?this.powerupContainer.childElementCount>0&&(this.powerupContainer.innerHTML=""):this.powerupContainer.innerHTML=s.map(([r,o])=>{const a=gc[r],l=Math.min(100,Math.max(0,o/mc[r]*100));return`
              <div class="powerup-chip" style="border-color:${a.color};">
                <span style="font-size:20px;">${a.icon}</span>
                <div style="flex:1;">
                  <div style="font-size:12px;font-weight:800;">${a.title}</div>
                  <div class="powerup-chip-bar"><div class="powerup-chip-fill" style="width:${l}%;"></div></div>
                </div>
              </div>
            `}).join("")}}renderPauseModal(){const t=document.createElement("div");t.className="modal-backdrop ui-interactive",t.innerHTML=`
      <div class="modal-card">
        <div class="modal-title">${se.pauseTitle}</div>
        <div class="modal-subtitle">${se.pauseSub}</div>
        <button class="btn btn-primary" data-action="resume">${se.btnResume}</button>
        <button class="btn btn-secondary" data-action="restart">הפעלה מחדש</button>
        <button class="btn btn-secondary" data-action="menu">${se.btnMenuShort}</button>
      </div>
    `,t.querySelector('[data-action="resume"]')?.addEventListener("click",()=>this.cb.onResume()),t.querySelector('[data-action="restart"]')?.addEventListener("click",()=>this.cb.onRestart()),t.querySelector('[data-action="menu"]')?.addEventListener("click",()=>this.cb.onReturnMenu()),this.root.appendChild(t)}renderGameOverModal(t,e,n){this.clearTurboVignette();const s=document.createElement("div");s.className="modal-backdrop ui-interactive",s.innerHTML=`
      <div class="modal-card" data-testid="gameover-modal">
        <div class="modal-title" style="color:#fca5a5;">${se.gameOverTitle}</div>
        ${n?`<div class="new-record-badge">${se.gameOverNewRecord}</div>`:""}
        <div class="stat-grid">
          <div class="stat-box">
            <div class="stat-box-label">ניקוד בריצה</div>
            <div class="stat-box-val">${Math.floor(t.score).toLocaleString("he-IL")}</div>
          </div>
          <div class="stat-box">
            <div class="stat-box-label">מרחק</div>
            <div class="stat-box-val">${Math.floor(t.distance)} מ׳</div>
          </div>
          <div class="stat-box">
            <div class="stat-box-label">כוסות תה</div>
            <div class="stat-box-val">🍵 ${t.coins}</div>
          </div>
          <div class="stat-box">
            <div class="stat-box-label">שיא אישי</div>
            <div class="stat-box-val">${this.saveSnapshot.highScore.toLocaleString("he-IL")}</div>
          </div>
        </div>
        ${e.length>0?`<div class="list-stack">
                <div style="font-size:13px;font-weight:800;color:#6ee7b7;">הישגים שנפתחו בריצה זו:</div>
                ${e.map(r=>`<div class="list-item unlocked"><span>${r.icon} ${r.title}</span><span>+${r.rewardCoins} 🍵</span></div>`).join("")}
               </div>`:""}
        <button class="btn btn-primary" data-action="restart">${se.btnRestart}</button>
        <button class="btn btn-secondary" data-action="menu">${se.btnMenu}</button>
      </div>
    `,s.querySelector('[data-action="restart"]')?.addEventListener("click",()=>this.cb.onRestart()),s.querySelector('[data-action="menu"]')?.addEventListener("click",()=>this.cb.onReturnMenu()),this.root.appendChild(s)}renderVictoryModal(t,e,n){this.clearTurboVignette();const s=document.createElement("div");s.className="modal-backdrop ui-interactive",s.innerHTML=`
      <div class="modal-card" data-testid="victory-modal" style="border-color:#fde047;">
        <div class="victory-title-en">${se.victoryTitleEn}</div>
        <div style="text-align:center;font-size:18px;font-weight:800;color:#6ee7b7;">${se.victorySubtitle}</div>
        <div style="text-align:center;font-size:14px;color:#e2e8f0;line-height:1.5;">
          <div>${se.victoryLine1}</div>
          <div>${se.victoryLine2}</div>
        </div>
        ${n?`<div class="new-record-badge">${se.gameOverNewRecord}</div>`:""}
        <div class="stat-grid">
          <div class="stat-box">
            <div class="stat-box-label">ניקוד סופי</div>
            <div class="stat-box-val">${Math.floor(t.score).toLocaleString("he-IL")}</div>
          </div>
          <div class="stat-box">
            <div class="stat-box-label">תה שנאסף</div>
            <div class="stat-box-val">🍵 ${t.coins}</div>
          </div>
        </div>
        ${e.length>0?`<div class="list-stack">
                ${e.map(r=>`<div class="list-item unlocked"><span>${r.icon} ${r.title}</span><span>+${r.rewardCoins} 🍵</span></div>`).join("")}
               </div>`:""}
        <button class="btn btn-success" data-action="endless">${se.btnContinueEndless}</button>
        <button class="btn btn-primary" data-action="restart">בריחה חדשה מהתחלה</button>
        <button class="btn btn-secondary" data-action="menu">${se.btnMenu}</button>
      </div>
    `,s.querySelector('[data-action="endless"]')?.addEventListener("click",()=>this.cb.onContinueEndless()),s.querySelector('[data-action="restart"]')?.addEventListener("click",()=>this.cb.onRestart()),s.querySelector('[data-action="menu"]')?.addEventListener("click",()=>this.cb.onReturnMenu()),this.root.appendChild(s)}showZoneBanner(t,e){this.floatingLayer.querySelector(".zone-banner")?.remove();const n=document.createElement("div");n.className="zone-banner",n.innerHTML=`<h3>${t}</h3><p>${e}</p>`,this.floatingLayer.appendChild(n),this.bannerTimer&&window.clearTimeout(this.bannerTimer),this.bannerTimer=window.setTimeout(()=>n.remove(),2600)}showComicBubble(t){this.floatingLayer.querySelector(".comic-bubble")?.remove();const e=document.createElement("div");e.className="comic-bubble",e.textContent=`💬 "${t}"`,this.floatingLayer.appendChild(e),this.bubbleTimer&&window.clearTimeout(this.bubbleTimer),this.bubbleTimer=window.setTimeout(()=>e.remove(),2200)}showAchievementToast(t){this.floatingLayer.querySelector(".achievement-toast")?.remove();const e=document.createElement("div");e.className="achievement-toast",e.innerHTML=`
      <span style="font-size:26px;">${t.icon}</span>
      <div>
        <div style="font-size:11px;color:#fde047;font-weight:800;">הישג נפתח! (+${t.rewardCoins} 🍵)</div>
        <div style="font-size:15px;font-weight:900;">${t.title}</div>
      </div>
    `,this.floatingLayer.appendChild(e),this.toastTimer&&window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>e.remove(),3200)}clearFloating(){this.floatingLayer.innerHTML="",this.clearTurboVignette()}clearTurboVignette(){this.turboOverlay&&(this.turboOverlay.remove(),this.turboOverlay=null)}getMissionTitle(t){switch(t){case"m_dist_300":return"רוצי 300 מטר בריצה אחת";case"m_coins_25":return"אספי 25 כוסות תה בריצה אחת";case"m_nearmiss_5":return"בצעי 5 התחמקויות של הרגע האחרון";case"m_streak_30":return"עקפי 30 מכשולים ברצף";case"m_zones_4":return"הגיעי ל-4 מחלקות בריצה אחת";case"m_vac_10":return"אספי 10 ימי חופש במצטבר";default:return t}}getMissionTarget(t){switch(t){case"m_dist_300":return 300;case"m_coins_25":return 25;case"m_nearmiss_5":return 5;case"m_streak_30":return 30;case"m_zones_4":return 4;case"m_vac_10":return 10;default:return 1}}}class Xm{ctx=null;masterGain=null;musicGain=null;sfxGain=null;muted=!1;musicVol=.65;sfxVol=.85;musicPlaying=!1;musicTimer=null;stepIndex=0;speedFactor=1;melodyNotes=[523.25,659.25,783.99,659.25,880,783.99,659.25,587.33,523.25,659.25,783.99,1046.5,880,783.99,698.46,587.33];bassNotes=[130.81,130.81,196,196,174.61,174.61,146.83,196];ensureContext(){if(this.ctx)return this.ctx;const t=window.AudioContext||window.webkitAudioContext;return t?(this.ctx=new t,this.masterGain=this.ctx.createGain(),this.musicGain=this.ctx.createGain(),this.sfxGain=this.ctx.createGain(),this.musicGain.connect(this.masterGain),this.sfxGain.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.applyGains(),this.ctx):null}unlock(){const t=this.ensureContext();t&&t.state==="suspended"&&t.resume()}setSettings(t,e,n){this.muted=t,this.musicVol=e,this.sfxVol=n,this.applyGains()}applyGains(){if(!this.ctx||!this.masterGain||!this.musicGain||!this.sfxGain)return;const t=this.ctx.currentTime;this.masterGain.gain.setTargetAtTime(this.muted?0:1,t,.02),this.musicGain.gain.setTargetAtTime(this.musicVol*.28,t,.03),this.sfxGain.gain.setTargetAtTime(this.sfxVol*.65,t,.02)}setSpeedFactor(t){this.speedFactor=Math.max(.85,Math.min(1.55,t))}startMusic(){this.musicPlaying||(this.ensureContext(),this.musicPlaying=!0,this.scheduleNextBeat())}stopMusic(){this.musicPlaying=!1,this.musicTimer!==null&&(window.clearTimeout(this.musicTimer),this.musicTimer=null)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}scheduleNextBeat(){if(!this.musicPlaying)return;const t=Math.round(185/this.speedFactor);if(this.ctx&&this.musicGain&&this.ctx.state==="running"&&!this.muted){const e=this.ctx.currentTime,n=this.melodyNotes[this.stepIndex%this.melodyNotes.length],s=this.bassNotes[Math.floor(this.stepIndex/2)%this.bassNotes.length];this.playTone(n,"triangle",.11,.22,e,this.musicGain),this.stepIndex%2===0&&this.playTone(s,"sine",.14,.32,e,this.musicGain),this.stepIndex%2===1&&this.playNoise(.035,.07,4500,e,this.musicGain)}this.stepIndex+=1,this.musicTimer=window.setTimeout(()=>this.scheduleNextBeat(),t)}playTone(t,e,n,s,r,o,a){if(!this.ctx)return;const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=e,l.frequency.setValueAtTime(t,r),a!==void 0&&l.frequency.exponentialRampToValueAtTime(Math.max(20,a),r+n),c.gain.setValueAtTime(1e-4,r),c.gain.exponentialRampToValueAtTime(s,r+.012),c.gain.exponentialRampToValueAtTime(1e-4,r+n),l.connect(c),c.connect(o),l.start(r),l.stop(r+n+.02)}playNoise(t,e,n,s,r){if(!this.ctx)return;const o=Math.max(1,Math.floor(this.ctx.sampleRate*t)),a=this.ctx.createBuffer(1,o,this.ctx.sampleRate),l=a.getChannelData(0);for(let h=0;h<o;h++)l[h]=Math.random()*2-1;const c=this.ctx.createBufferSource();c.buffer=a;const u=this.ctx.createBiquadFilter();u.type="highpass",u.frequency.setValueAtTime(n,s);const d=this.ctx.createGain();d.gain.setValueAtTime(e,s),d.gain.exponentialRampToValueAtTime(1e-4,s+t),c.connect(u),u.connect(d),d.connect(r),c.start(s)}playPhoneRing(){const t=this.ensureContext();if(!t||!this.sfxGain||this.muted)return;const e=t.currentTime;for(let n=0;n<4;n++){const s=e+n*.07;this.playTone(960,"sine",.06,.25,s,this.sfxGain),this.playTone(1240,"sine",.06,.2,s,this.sfxGain)}}playCoin(t=0){const e=this.ensureContext();if(!e||!this.sfxGain||this.muted)return;const n=e.currentTime,s=780+Math.min(8,t)*45;this.playTone(s,"sine",.09,.28,n,this.sfxGain),this.playTone(s*1.5,"triangle",.12,.22,n+.05,this.sfxGain)}playJump(){const t=this.ensureContext();!t||!this.sfxGain||this.muted||this.playTone(250,"sine",.18,.28,t.currentTime,this.sfxGain,660)}playSlide(){const t=this.ensureContext();if(!t||!this.sfxGain||this.muted)return;const e=t.currentTime;this.playTone(340,"triangle",.16,.2,e,this.sfxGain,120),this.playNoise(.14,.14,900,e,this.sfxGain)}playLaneSwitch(){const t=this.ensureContext();!t||!this.sfxGain||this.muted||this.playTone(420,"sine",.06,.12,t.currentTime,this.sfxGain,520)}playCollision(){const t=this.ensureContext();if(!t||!this.sfxGain||this.muted)return;const e=t.currentTime;this.playTone(220,"sawtooth",.26,.35,e,this.sfxGain,70),this.playNoise(.24,.28,300,e,this.sfxGain)}playNearMiss(){const t=this.ensureContext();!t||!this.sfxGain||this.muted||this.playTone(620,"sine",.12,.22,t.currentTime,this.sfxGain,980)}playPowerUp(){const t=this.ensureContext();if(!t||!this.sfxGain||this.muted)return;const e=t.currentTime;[523.25,659.25,783.99,1046.5].forEach((s,r)=>{this.playTone(s,"triangle",.16,.25,e+r*.055,this.sfxGain)})}playAchievement(){const t=this.ensureContext();if(!t||!this.sfxGain||this.muted)return;const e=t.currentTime;[587.33,739.99,880,1174.66].forEach((s,r)=>{this.playTone(s,"triangle",.22,.3,e+r*.08,this.sfxGain)})}playBossWarning(){const t=this.ensureContext();if(!t||!this.sfxGain||this.muted)return;const e=t.currentTime;this.playTone(440,"sawtooth",.14,.22,e,this.sfxGain,330),this.playTone(440,"sawtooth",.18,.22,e+.18,this.sfxGain,300)}playAirplaneTakeoff(){const t=this.ensureContext();if(!t||!this.sfxGain||this.muted)return;const e=t.currentTime;this.playTone(110,"sawtooth",1.1,.25,e,this.sfxGain,260),this.playNoise(.9,.18,450,e,this.sfxGain),[523.25,659.25,783.99,1046.5].forEach((n,s)=>{this.playTone(n,"triangle",.35,.25,e+.25+s*.11,this.sfxGain)})}destroy(){this.stopMusic(),this.ctx&&(this.ctx.close(),this.ctx=null)}}class qm{camera;shakeTimer=0;shakeIntensity=0;currentX=0;currentY=3.5;currentZ=6.2;targetFov=62;wardrobeAngle=.35;constructor(t){this.camera=new He(62,t,.1,180),this.camera.position.set(0,3.5,6.2),this.camera.lookAt(0,1.3,-6)}resize(t,e){this.camera.aspect=t/Math.max(1,e),this.targetFov=this.camera.aspect<.75?68:58,this.camera.fov=this.targetFov,this.camera.updateProjectionMatrix()}triggerShake(t=.28,e=.35){this.shakeIntensity=Math.max(this.shakeIntensity,t),this.shakeTimer=Math.max(this.shakeTimer,e)}snapToMenu(){this.currentX=.36,this.currentY=1.4,this.currentZ=-2.65,this.camera.position.set(this.currentX,this.currentY,this.currentZ),this.camera.lookAt(.04,1,.04)}snapToWardrobe(){this.wardrobeAngle=.22,this.updateWardrobe(0)}snapToIntro(){this.updateIntro(0)}updateMenu(t){const e=performance.now()*6e-4,n=.36+Math.sin(e)*.18,s=1.4,r=-2.65;this.currentX+=(n-this.currentX)*Math.min(1,t*6),this.currentY+=(s-this.currentY)*Math.min(1,t*6),this.currentZ+=(r-this.currentZ)*Math.min(1,t*6),this.camera.position.set(this.currentX,this.currentY,this.currentZ),this.camera.lookAt(.04,1,.04)}updateWardrobe(t){this.wardrobeAngle+=t*.38;const e=2.42,n=Math.sin(this.wardrobeAngle)*e,s=-Math.cos(this.wardrobeAngle)*e;this.camera.position.set(n,1.44,s),this.camera.lookAt(0,.86,0)}updateIntro(t){if(t<.55){const e=t/.55,n=ae.lerp(.95,.35,e),s=ae.lerp(1.55,1.48,e),r=ae.lerp(-2.55,-2.25,e);this.camera.position.set(n,s,r),this.camera.lookAt(0,.92,-.25)}else{const e=(t-.55)/.45,n=e*e*(3-2*e);this.camera.position.set(ae.lerp(.35,0,n),ae.lerp(1.48,3.65,n),ae.lerp(-2.25,6.4,n)),this.camera.lookAt(0,ae.lerp(.92,1.35,n),ae.lerp(-.25,-8,n))}this.currentX=this.camera.position.x,this.currentY=this.camera.position.y,this.currentZ=this.camera.position.z}updateGameplay(t,e,n,s){const r=e*.55,o=3.85+n*.45,a=s?6.8:5.9,l=1-Math.exp(-10*t);this.currentX+=(r-this.currentX)*l,this.currentY+=(o-this.currentY)*l,this.currentZ+=(a-this.currentZ)*l;let c=0,u=0;if(this.shakeTimer>0){this.shakeTimer-=t;const p=Math.max(0,this.shakeTimer*2.5);c=(Math.random()-.5)*this.shakeIntensity*p,u=(Math.random()-.5)*this.shakeIntensity*p}else this.shakeIntensity=0;const d=this.camera.aspect<.75?68:58,h=s?d+9:d;Math.abs(this.camera.fov-h)>.05&&(this.camera.fov+=(h-this.camera.fov)*Math.min(1,t*8),this.camera.updateProjectionMatrix()),this.camera.position.set(this.currentX+c,this.currentY+u,this.currentZ),this.camera.lookAt(e*.42,1.25+n*.25,-8.5)}updateVictory(t,e){const n=t.x+4.5,s=t.y+3.2,r=t.z+9.5,o=1-Math.exp(-4.5*e);this.currentX+=(n-this.currentX)*o,this.currentY+=(s-this.currentY)*o,this.currentZ+=(r-this.currentZ)*o,this.camera.position.set(this.currentX,this.currentY,this.currentZ),this.camera.lookAt(t.x,t.y+1.4,t.z-2)}}class fa{factory;resetFn;free=[];activeSet=new Set;constructor(t,e,n=0){this.factory=t,this.resetFn=e;for(let s=0;s<n;s++){const r=this.factory();this.resetFn(r),this.free.push(r)}}acquire(){const t=this.free.length>0?this.free.pop():this.factory();return this.activeSet.add(t),t}release(t){this.activeSet.has(t)&&(this.activeSet.delete(t),this.resetFn(t),this.free.push(t))}releaseAll(){for(const t of this.activeSet)this.resetFn(t),this.free.push(t);this.activeSet.clear()}getActive(){return this.activeSet}get activeCount(){return this.activeSet.size}get freeCount(){return this.free.length}get totalCount(){return this.activeSet.size+this.free.length}}function Es(i,t){return i.minX<=t.maxX&&i.maxX>=t.minX&&i.minY<=t.maxY&&i.maxY>=t.minY&&i.minZ<=t.maxZ&&i.maxZ>=t.minZ}function Ko(i){const t=i.width*.42,e=i.depth*.42;return{minX:i.x-t,maxX:i.x+t,minY:i.y+i.baseY,maxY:i.y+i.baseY+i.height,minZ:i.z-e,maxZ:i.z+e}}class Ym{group=new At;pools=new Map;active=[];getPool(t){let e=this.pools.get(t);return e||(e=new fa(()=>{const n=yn.createObstacle(t);return n.mesh.visible=!1,this.group.add(n.mesh),n},n=>{n.mesh.visible=!1,n.mesh.position.set(0,0,-999),n.mesh.rotation.set(0,0,0)},2),this.pools.set(t,e)),e}spawnFromPattern(t,e){for(const n of e){const s=this.getPool(n.kind).acquire(),r=Ht.laneX[n.lane],o=t+n.zOffset;s.mesh.position.set(r,0,o),s.mesh.visible=!0,this.active.push({kind:n.kind,clearance:n.clearance,lane:n.lane,x:r,y:0,z:o,width:s.width,height:s.height,depth:s.depth,baseY:s.baseY,spec:s,passed:!1,nearMissAwarded:!1,movePhase:Math.random()*Math.PI*2,moveDir:Math.random()<.5?-1:1})}}update(t,e,n,s,r,o,a,l,c){const u=performance.now()*.001;for(let d=this.active.length-1;d>=0;d--){const h=this.active[d];if(h.z+=e*t,r&&h.z>-28&&h.z<5&&(h.kind.includes("student")||h.kind.includes("phone")||h.kind.includes("printer")||h.kind.includes("lecturer")||h.kind==="ringing_desk"||h.kind==="spinning_clock")){c?.(h),this.releaseAt(d);continue}if(h.kind==="crossing_lecturer"||h.kind==="moving_whiteboard"?(h.movePhase+=t*1.45,h.x=Math.sin(h.movePhase)*2.15):h.kind==="swivel_chair"&&h.spec.animatedPart?h.spec.animatedPart.rotation.y+=t*4.2:h.kind==="revolving_door"&&h.spec.animatedPart?h.spec.animatedPart.rotation.y+=t*2.6:h.kind==="ringing_desk"&&h.spec.animatedPart?(h.spec.animatedPart.position.y=1.02+Math.abs(Math.sin(u*18))*.14,h.spec.animatedPart.rotation.z=Math.sin(u*24)*.18):h.kind==="spitting_printer"&&h.spec.animatedPart?(h.spec.animatedPart.position.y=1.2+(u*2+h.movePhase)%1*1.1,h.spec.animatedPart.rotation.x=u*4):h.kind==="flying_books"&&h.spec.animatedPart?(h.spec.animatedPart.position.y=1.6+Math.sin(u*5+h.movePhase)*.16,h.spec.animatedPart.rotation.z=Math.sin(u*8)*.12):h.kind==="spinning_clock"&&h.spec.animatedPart?h.spec.animatedPart.rotation.z+=t*2.8:h.kind==="swinging_door"&&h.spec.animatedPart&&(h.spec.animatedPart.rotation.y=Math.sin(u*2.5+h.movePhase)*.55),h.spec.mesh.position.set(h.x,h.y,h.z),h.z>-2.5&&h.z<2.2){const p=Ko(h);if(s&&h.clearance==="slide"&&(p.minY=Math.max(p.minY,.95)),Es(n,p)){l(h),this.releaseAt(d);continue}}if(!h.passed&&h.z>.85){h.passed=!0,o(h);const p=Math.abs((n.minX+n.maxX)*.5-h.x),g=n.minY>h.y+h.baseY+h.height*.7||s&&h.clearance==="slide";!h.nearMissAwarded&&(p<h.width*.88+.65||g)&&(h.nearMissAwarded=!0,a(h))}h.z>Ht.despawnZ&&this.releaseAt(d)}}releaseAt(t){const e=this.active[t];this.active.splice(t,1),this.getPool(e.kind).release(e.spec)}clearNearPlayer(t=6){for(let e=this.active.length-1;e>=0;e--)Math.abs(this.active[e].z)<=t&&this.releaseAt(e)}reset(){for(let t=this.active.length-1;t>=0;t--)this.releaseAt(t)}}class $m{group=new At;pools=new Map;active=[];getPool(t){let e=this.pools.get(t);return e||(e=new fa(()=>{const n=yn.createCollectible(t);return n.visible=!1,this.group.add(n),n},n=>{n.visible=!1,n.position.set(0,0,-999),n.rotation.set(0,0,0)},t==="coffee_coin"?24:2),this.pools.set(t,e)),e}spawnFromPattern(t,e){for(const n of e){const s=this.getPool(n.kind).acquire(),r=Ht.laneX[n.lane],o=t+n.zOffset;s.position.set(r,n.y,o),s.visible=!0,this.active.push({kind:n.kind,mesh:s,x:r,y:n.y,z:o,spinPhase:Math.random()*Math.PI*2})}}update(t,e,n,s,r,o,a){const l=performance.now()*.003;for(let c=this.active.length-1;c>=0;c--){const u=this.active[c];if(u.z+=e*t,o&&u.z>-18&&u.z<3.5){const h=n-u.x,p=s+.85-u.y,g=0-u.z,v=Math.hypot(h,p,g);if(v<14&&v>.01){const m=Math.min(1,t*13);u.x+=h*m,u.y+=p*m,u.z+=g*m*.6}}const d=Math.sin(l+u.spinPhase)*.1;if(u.mesh.position.set(u.x,u.y+d,u.z),u.mesh.rotation.y+=t*3,u.z>-1.8&&u.z<1.8){const h={minX:u.x-.55,maxX:u.x+.55,minY:u.y-.55,maxY:u.y+.65,minZ:u.z-.55,maxZ:u.z+.55};if(Es(r,h)){a(u),this.releaseAt(c);continue}}u.z>Ht.despawnZ&&this.releaseAt(c)}}releaseAt(t){const e=this.active[t];this.active.splice(t,1),this.getPool(e.kind).release(e.mesh)}reset(){for(let t=this.active.length-1;t>=0;t--)this.releaseAt(t)}}class Zm{canvas;onAction;onAnyGesture;touchStartX=0;touchStartY=0;touchId=null;swipeTriggered=!1;swipeThresholdPx=26;boundTouchStart;boundTouchMove;boundTouchEnd;boundPointerDown;boundPointerMove;boundPointerUp;boundKeyDown;pointerActive=!1;pointerStartX=0;pointerStartY=0;pointerTriggered=!1;constructor(t,e,n){this.canvas=t,this.onAction=e,this.onAnyGesture=n,this.boundTouchStart=this.handleTouchStart.bind(this),this.boundTouchMove=this.handleTouchMove.bind(this),this.boundTouchEnd=this.handleTouchEnd.bind(this),this.boundPointerDown=this.handlePointerDown.bind(this),this.boundPointerMove=this.handlePointerMove.bind(this),this.boundPointerUp=this.handlePointerUp.bind(this),this.boundKeyDown=this.handleKeyDown.bind(this),this.canvas.addEventListener("touchstart",this.boundTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this.boundTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this.boundTouchEnd,{passive:!0}),this.canvas.addEventListener("touchcancel",this.boundTouchEnd,{passive:!0}),this.canvas.addEventListener("pointerdown",this.boundPointerDown),window.addEventListener("pointermove",this.boundPointerMove),window.addEventListener("pointerup",this.boundPointerUp),window.addEventListener("keydown",this.boundKeyDown)}handleTouchStart(t){if(this.onAnyGesture?.(),t.changedTouches.length===0)return;const e=t.changedTouches[0];this.touchId=e.identifier,this.touchStartX=e.clientX,this.touchStartY=e.clientY,this.swipeTriggered=!1}handleTouchMove(t){if(t.preventDefault(),!(this.swipeTriggered||this.touchId===null))for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches[e];if(n.identifier!==this.touchId)continue;const s=n.clientX-this.touchStartX,r=n.clientY-this.touchStartY;(Math.abs(s)>=this.swipeThresholdPx||Math.abs(r)>=this.swipeThresholdPx)&&(this.swipeTriggered=!0,this.emitSwipe(s,r));break}}handleTouchEnd(t){for(let e=0;e<t.changedTouches.length;e++)if(t.changedTouches[e].identifier===this.touchId){this.touchId=null,this.swipeTriggered=!1;break}}handlePointerDown(t){this.onAnyGesture?.(),t.pointerType!=="touch"&&(this.pointerActive=!0,this.pointerStartX=t.clientX,this.pointerStartY=t.clientY,this.pointerTriggered=!1)}handlePointerMove(t){if(!this.pointerActive||this.pointerTriggered||t.pointerType==="touch")return;const e=t.clientX-this.pointerStartX,n=t.clientY-this.pointerStartY;(Math.abs(e)>=this.swipeThresholdPx||Math.abs(n)>=this.swipeThresholdPx)&&(this.pointerTriggered=!0,this.emitSwipe(e,n))}handlePointerUp(){this.pointerActive=!1,this.pointerTriggered=!1}emitSwipe(t,e){Math.abs(t)>Math.abs(e)?this.onAction(t<0?"left":"right"):this.onAction(e<0?"up":"down")}handleKeyDown(t){if(this.onAnyGesture?.(),!t.repeat)switch(t.code){case"ArrowLeft":case"KeyA":t.preventDefault(),this.onAction("left");break;case"ArrowRight":case"KeyD":t.preventDefault(),this.onAction("right");break;case"ArrowUp":case"KeyW":case"Space":t.preventDefault(),this.onAction("up");break;case"ArrowDown":case"KeyS":t.preventDefault(),this.onAction("down");break;case"Escape":case"KeyP":t.preventDefault(),this.onAction("pause");break}}destroy(){this.canvas.removeEventListener("touchstart",this.boundTouchStart),this.canvas.removeEventListener("touchmove",this.boundTouchMove),this.canvas.removeEventListener("touchend",this.boundTouchEnd),this.canvas.removeEventListener("touchcancel",this.boundTouchEnd),this.canvas.removeEventListener("pointerdown",this.boundPointerDown),window.removeEventListener("pointermove",this.boundPointerMove),window.removeEventListener("pointerup",this.boundPointerUp),window.removeEventListener("keydown",this.boundKeyDown)}}const xn=Me[Me.length-1].endDistance;class Km{group=new At;currentZone=Me[0];endlessMode=!1;endlessLoops=0;targetSky=new kt(Me[0].skyColor);targetFog=new kt(Me[0].fogColor);targetAmbient=new kt(Me[0].ambientColor);targetSun=new kt(Me[0].sunColor);triggeredBosses=new Set;activeBoss=null;exitGate=null;exitGateSpawned=!1;sunsetHorizon;quoteTimer=5.5;escapePlane;planeSpawned=!1;constructor(){this.sunsetHorizon=yn.createSunsetHorizon(),this.sunsetHorizon.visible=!1,this.group.add(this.sunsetHorizon),this.escapePlane=yn.createEscapeAirplane(),this.escapePlane.group.visible=!1,this.group.add(this.escapePlane.group)}get activeZone(){return this.currentZone}get isEndlessMode(){return this.endlessMode}get loopCount(){return this.endlessLoops}enableEndlessLoop(){this.endlessMode=!0,this.endlessLoops+=1,this.triggeredBosses.clear(),this.exitGateSpawned=!1,this.planeSpawned=!1,this.escapePlane.group.visible=!1,this.sunsetHorizon.visible=!1,this.exitGate&&(this.exitGate.visible=!1)}reset(){this.currentZone=Me[0],this.endlessMode=!1,this.endlessLoops=0,this.triggeredBosses.clear(),this.clearBoss(),this.exitGateSpawned=!1,this.planeSpawned=!1,this.escapePlane.group.visible=!1,this.escapePlane.group.position.set(0,0,-90),this.escapePlane.group.rotation.set(0,0,0),this.sunsetHorizon.visible=!1,this.exitGate&&(this.exitGate.visible=!1),this.quoteTimer=5,this.setTargetZoneColors(this.currentZone)}getZoneForDistance(t){const e=this.endlessMode?t%xn:Math.min(t,xn-1);for(let n=Me.length-1;n>=0;n--)if(e>=Me[n].startDistance)return Me[n];return Me[0]}getZoneAtSpawnAhead(t){return this.getZoneForDistance(t+95)}setTargetZoneColors(t){this.targetSky.setHex(t.skyColor),this.targetFog.setHex(t.fogColor),this.targetAmbient.setHex(t.ambientColor),this.targetSun.setHex(t.sunColor)}jumpToZone(t){const e=fs[t];return this.currentZone=e,this.setTargetZoneColors(e),this.clearBoss(),this.sunsetHorizon.visible=t==="freedom",e.startDistance+5}triggerZoneBossNow(t){this.spawnBossForZone(t)}clearBoss(){this.activeBoss&&(this.group.remove(this.activeBoss.group),this.activeBoss.secondaryMesh&&this.group.remove(this.activeBoss.secondaryMesh),this.activeBoss=null)}spawnBossForZone(t){this.clearBoss();const e=yn.createBossEntity(t),n=Math.floor(Math.random()*3),s=Ht.laneX[n];let r="single_lane",o,a;if(t==="achievements"){r="dual_gate";const l=n,c=[0,1,2].filter(d=>d!==l),u=yn.createBossEntity(t);u.group.position.set(Ht.laneX[c[1]],0,-68),this.group.add(u.group),o=u.group,a=Ht.laneX[c[1]],e.group.position.set(Ht.laneX[c[0]],0,-68),this.group.add(e.group),this.activeBoss={zoneId:t,group:e.group,animatedPart:e.animatedPart,x:Ht.laneX[c[0]],y:0,z:-68,width:e.width,height:e.height,depth:e.depth,phase:0,mode:r,secondaryMesh:o,secondaryX:a};return}e.group.position.set(s,0,-72),this.group.add(e.group),this.activeBoss={zoneId:t,group:e.group,animatedPart:e.animatedPart,x:s,y:0,z:-72,width:e.width,height:e.height,depth:e.depth,phase:0,mode:r}}update(t,e,n,s,r,o,a,l,c,u){const d=this.getZoneForDistance(n);d.id!==this.currentZone.id&&(this.currentZone=d,this.setTargetZoneColors(d),this.sunsetHorizon.visible=d.id==="freedom",c.onZoneChange(d),d.id==="freedom"&&!this.exitGateSpawned&&(this.exitGateSpawned=!0,this.exitGate||(this.exitGate=yn.createUniversityExitGate(),this.group.add(this.exitGate)),this.exitGate.position.set(0,0,-52),this.exitGate.visible=!0));const h=Math.min(1,t*1.8);o.background instanceof kt&&o.background.lerp(this.targetSky,h),o.fog instanceof ki&&o.fog.color.lerp(this.targetFog,h),a.color.lerp(this.targetAmbient,h),l.color.lerp(this.targetSun,h),u&&(this.currentZone.id==="freedom"?u.lerpColors(3223169,16347926,16638023,h):u.lerpColors(3718648,this.currentZone.skyColor,16317180,h)),this.exitGate&&this.exitGate.visible&&(this.exitGate.position.z+=e*t,this.exitGate.position.z>Ht.despawnZ&&(this.exitGate.visible=!1));const p=this.endlessMode?n%xn:n,g=this.currentZone.startDistance+(this.currentZone.endDistance-this.currentZone.startDistance)*.58,v=`${this.endlessLoops}_${this.currentZone.id}`;if(p>=g&&!this.triggeredBosses.has(v)&&(this.triggeredBosses.add(v),this.spawnBossForZone(this.currentZone.id),c.onBossWarning(this.currentZone)),this.activeBoss){const m=this.activeBoss;if(m.phase+=t*3.5,m.z+=e*(m.zoneId==="call_center"?1.15:.92)*t,(m.zoneId==="registration"||m.zoneId==="counseling")&&(m.x=Math.sin(m.phase*.7)*2.2),m.zoneId==="call_center"?m.animatedPart.position.y=1.68+Math.abs(Math.sin(m.phase*4))*.22:m.zoneId==="counseling"?m.animatedPart.rotation.y+=t*3.5:m.animatedPart.rotation.z=Math.sin(m.phase*1.5)*.08,m.group.position.set(m.x,m.y,m.z),m.secondaryMesh&&m.secondaryX!==void 0&&m.secondaryMesh.position.set(m.secondaryX,0,m.z),!r&&m.z>-2.5&&m.z<2.2){const f=Ko({x:m.x,y:m.y,z:m.z,width:m.width,height:m.height,depth:m.depth,baseY:0});let x=Es(s,f);if(!x&&m.secondaryMesh&&m.secondaryX!==void 0){const M=Ko({x:m.secondaryX,y:0,z:m.z,width:m.width,height:m.height,depth:m.depth,baseY:0});x=Es(s,M)}if(x){this.clearBoss(),c.onBossHit();return}}m.z>Ht.despawnZ&&this.clearBoss()}if(!this.endlessMode&&n>=xn-65&&(this.planeSpawned?this.escapePlane.group.position.z=-(xn-n):(this.planeSpawned=!0,this.escapePlane.group.visible=!0,this.escapePlane.group.position.set(0,0,-(xn-n))),this.escapePlane.propeller.rotation.z+=t*26,n>=xn)){c.onReachAirplane();return}if(this.quoteTimer-=t,this.quoteTimer<=0){this.quoteTimer=5.5+Math.random()*4;const f=Math.random()<.4?ym:this.currentZone.quotes;c.onQuote(f[Math.floor(Math.random()*f.length)])}}}class Jm{rig;animator;lane=1;targetX=0;x=0;y=0;z=0;vy=0;isGrounded=!0;isSliding=!1;slideTimer=0;jumpBufferTimer=0;coyoteTimer=0;fastFalling=!1;invulnerableTimer=0;laneTilt=0;animState="idle";expressionTimer=0;get currentExpression(){return this.expression}expression="neutral";constructor(t){this.rig=t,this.animator=new Hm(t)}reset(){this.lane=1,this.targetX=Ht.laneX[1],this.x=0,this.y=0,this.z=0,this.vy=0,this.isGrounded=!0,this.isSliding=!1,this.slideTimer=0,this.jumpBufferTimer=0,this.coyoteTimer=0,this.fastFalling=!1,this.invulnerableTimer=0,this.laneTilt=0,this.animState="run",this.setExpression("determined",0),this.rig.root.position.set(0,0,0),this.rig.root.visible=!0}setAnimPose(t,e="neutral"){this.animState=t,this.setExpression(e,0),this.animator.update(.016,t,0,0,0,this.y)}setExpression(t,e=1.2){this.expression=t,this.expressionTimer=e,this.animator.setExpression(t)}grantInvulnerability(t){this.invulnerableTimer=Math.max(this.invulnerableTimer,t)}get isInvulnerable(){return this.invulnerableTimer>0}handleAction(t){let e=!1,n=!1,s=!1;return t==="left"?this.lane>0&&(this.lane=this.lane-1,this.targetX=Ht.laneX[this.lane],s=!0):t==="right"?this.lane<2&&(this.lane=this.lane+1,this.targetX=Ht.laneX[this.lane],s=!0):t==="up"?this.isGrounded||this.coyoteTimer>0?(this.executeJump(),e=!0):this.jumpBufferTimer=Ht.jumpBufferSec:t==="down"&&(this.isGrounded||(this.fastFalling=!0,this.vy=Math.min(this.vy,-15)),this.startSlide(),n=!0),{jumped:e,slid:n,laneChanged:s}}executeJump(){this.isGrounded=!1,this.isSliding=!1,this.slideTimer=0,this.fastFalling=!1,this.coyoteTimer=0,this.jumpBufferTimer=0,this.vy=Ht.jumpVelocity}startSlide(){this.isSliding=!0,this.slideTimer=Ht.slideDuration}updateRunning(t,e,n,s){const r=this.x,o=1-Math.exp(-18*t);this.x+=(this.targetX-this.x)*o,Math.abs(this.targetX-this.x)<.005&&(this.x=this.targetX);const a=t>0?(this.x-r)/t:0,l=ae.clamp(a*.04,-.35,.35);if(this.laneTilt+=(l-this.laneTilt)*Math.min(1,t*16),this.jumpBufferTimer>0&&(this.jumpBufferTimer-=t),this.isGrounded)this.coyoteTimer=Ht.coyoteTimeSec;else{this.coyoteTimer=Math.max(0,this.coyoteTimer-t);const c=this.fastFalling?Ht.gravity*Ht.fastFallGravityMultiplier:Ht.gravity;this.vy+=c*t,this.y+=this.vy*t,this.y<=0&&(this.y=0,this.vy=0,this.isGrounded=!0,this.fastFalling=!1,this.jumpBufferTimer>0&&this.executeJump())}if(this.isSliding&&(this.slideTimer-=t,this.slideTimer<=0&&(this.isSliding=!1,this.slideTimer=0)),this.invulnerableTimer>0?(this.invulnerableTimer=Math.max(0,this.invulnerableTimer-t),this.rig.visualRoot.visible=Math.floor(this.invulnerableTimer*18)%2===0):this.rig.visualRoot.visible=!0,this.expressionTimer>0&&(this.expressionTimer-=t,this.expressionTimer<=0&&this.setExpression(n?"happy":"determined",0)),this.rig.shieldBubble.visible=s,s){this.rig.shieldBubble.rotation.y+=t*1.6;const c=1+Math.sin(performance.now()*.006)*.04;this.rig.shieldBubble.scale.setScalar(c)}this.rig.turboFlame.visible=n,n&&this.rig.turboFlame.scale.set(1+Math.sin(performance.now()*.03)*.15,1,1+Math.cos(performance.now()*.03)*.2),this.isSliding?this.animState="slide":this.isGrounded?n?this.animState="turbo":this.laneTilt<-.08?this.animState="dodge_left":this.laneTilt>.08?this.animState="dodge_right":this.animState="run":this.animState=this.vy>0?"jump":"fall",this.rig.root.position.set(this.x,this.y,this.z),this.animator.update(t,this.animState,e,this.laneTilt,this.vy,this.y)}updateStaticPose(t,e){this.animState=e,this.rig.shieldBubble.visible=!1,this.rig.turboFlame.visible=!1,this.rig.visualRoot.visible=!0,this.animator.update(t,e,0,0,0,this.y)}getAABB(){const n=this.isSliding?.56:1.58;return{minX:this.x-.34,maxX:this.x+.34,minY:this.y+.05,maxY:this.y+n,minZ:this.z-.34,maxZ:this.z+.34}}}class jm{group=new At;pools=new Map;orbs=[];activeTimers={};getPool(t){let e=this.pools.get(t);return e||(e=new fa(()=>{const n=yn.createPowerUpOrb(t);return n.visible=!1,this.group.add(n),n},n=>{n.visible=!1,n.position.set(0,0,-999),n.rotation.set(0,0,0)},2),this.pools.set(t,e)),e}spawnFromPattern(t,e){for(const n of e){const s=this.getPool(n.type).acquire(),r=Ht.laneX[n.lane],o=1.05,a=t+n.zOffset;s.position.set(r,o,a),s.visible=!0,this.orbs.push({type:n.type,mesh:s,x:r,y:o,z:a})}}activate(t,e){this.activeTimers[t]=Math.max(this.activeTimers[t]??0,e??mc[t])}isActive(t){return(this.activeTimers[t]??0)>0}consumeShield(){return this.isActive("shield")?(delete this.activeTimers.shield,!0):!1}update(t,e,n,s){for(const o of Object.keys(this.activeTimers)){const a=(this.activeTimers[o]??0)-t;a<=0?delete this.activeTimers[o]:this.activeTimers[o]=a}const r=performance.now()*.004;for(let o=this.orbs.length-1;o>=0;o--){const a=this.orbs[o];a.z+=e*t;const l=Math.sin(r+o)*.14;if(a.mesh.position.set(a.x,a.y+l,a.z),a.mesh.rotation.y+=t*2.4,a.z>-1.8&&a.z<1.8){const c={minX:a.x-.65,maxX:a.x+.65,minY:a.y-.65,maxY:a.y+.65,minZ:a.z-.65,maxZ:a.z+.65};if(Es(n,c)){this.activate(a.type),s(a.type,{x:a.x,y:a.y,z:a.z}),this.releaseAt(o);continue}}a.z>Ht.despawnZ&&this.releaseAt(o)}}releaseAt(t){const e=this.orbs[t];this.orbs.splice(t,1),this.getPool(e.type).release(e.mesh)}reset(){for(const t of Object.keys(this.activeTimers))delete this.activeTimers[t];for(let t=this.orbs.length-1;t>=0;t--)this.releaseAt(t)}}const Qm="oue_save_v1";function bl(){return{version:1,highScore:0,bestDistance:0,totalRuns:0,totalCoins:0,walletCoins:0,totalVacationDays:0,totalDistance:0,zonesCompletedCount:0,unlockedSkins:["classic","picnic"],equippedSkin:"classic",equippedHair:"loose_curls",unlockedAchievements:[],activeMissions:$o.slice(0,3).map(i=>({id:i.id,progress:0,completed:!1})),completedMissionIds:[],settings:{muted:!1,musicVolume:.65,sfxVolume:.85,quality:"auto"}}}class tg{storageKey;constructor(t=Qm){this.storageKey=t}load(){const t=bl();try{const e=window.localStorage.getItem(this.storageKey);if(!e)return t;const n=JSON.parse(e);if(!n||typeof n!="object")return t;const s=Array.isArray(n.unlockedSkins)&&n.unlockedSkins.length>0?n.unlockedSkins:t.unlockedSkins;return{...t,...n,unlockedSkins:Array.from(new Set([...s,"classic","picnic"])),equippedHair:n.equippedHair??"loose_curls",unlockedAchievements:Array.isArray(n.unlockedAchievements)?n.unlockedAchievements:[],activeMissions:Array.isArray(n.activeMissions)&&n.activeMissions.length>0?n.activeMissions:t.activeMissions,completedMissionIds:Array.isArray(n.completedMissionIds)?n.completedMissionIds:[],settings:{...t.settings,...n.settings??{}}}}catch{return t}}save(t){try{window.localStorage.setItem(this.storageKey,JSON.stringify(t))}catch{}}reset(){const t=bl();return this.save(t),t}}class eg{saveMgr;data;constructor(t=new tg){this.saveMgr=t,this.data=this.saveMgr.load()}save(){this.saveMgr.save(this.data)}resetAll(){return this.data=this.saveMgr.reset(),this.data}checkLiveAchievements(t){const e=[],n=r=>{if(this.data.unlockedAchievements.includes(r))return;const o=Yo.find(a=>a.id===r);o&&(this.data.unlockedAchievements.push(r),this.data.walletCoins+=o.rewardCoins,e.push(o))};return t.durationSec>=60&&n("call_disconnected"),t.durationSec>=300&&n("unavailable_now"),t.score>=1e4&&n("agent_of_month"),t.bestStreak>=20&&n("no_callbacks"),["call_center","registration","achievements","departments","counseling"].every(r=>t.zonesVisited.includes(r))&&n("no_idea_who"),(t.zonesVisited.length>=6||t.zonesVisited.includes("freedom"))&&n("transferred_dept"),this.data.totalVacationDays+t.vacationDays>=100&&n("exit_permit"),t.completedEscape&&n("finally_free"),e.length>0&&this.save(),e}finalizeRun(t){const e=Math.floor(t.score),n=Math.floor(t.distance),s=e>this.data.highScore&&e>0;e>this.data.highScore&&(this.data.highScore=e),n>this.data.bestDistance&&(this.data.bestDistance=n),this.data.totalRuns+=1,this.data.totalCoins+=t.coins,this.data.walletCoins+=t.coins,this.data.totalVacationDays+=t.vacationDays,this.data.totalDistance+=n,this.data.zonesCompletedCount+=Math.max(0,t.zonesVisited.length-1);const r=this.checkLiveAchievements(t);return this.updateMissions(t),this.save(),{isNewRecord:s,newlyUnlocked:r}}updateMissions(t){for(let e=0;e<this.data.activeMissions.length;e++){const n=this.data.activeMissions[e];if(n.completed)continue;const s=$o.find(o=>o.id===n.id);if(!s)continue;let r=n.progress;switch(s.type){case"distance_run":r=Math.max(r,Math.floor(t.distance));break;case"coins_run":r=Math.max(r,t.coins);break;case"near_miss_run":r=Math.max(r,t.nearMisses);break;case"streak_run":r=Math.max(r,t.bestStreak);break;case"zones_run":r=Math.max(r,t.zonesVisited.length);break;case"vacation_total":r=this.data.totalVacationDays;break}if(n.progress=Math.min(s.target,r),n.progress>=s.target){n.completed=!0,this.data.walletCoins+=s.rewardCoins,this.data.completedMissionIds.includes(s.id)||this.data.completedMissionIds.push(s.id);const o=new Set(this.data.activeMissions.map(l=>l.id)),a=$o.find(l=>!o.has(l.id)&&!this.data.completedMissionIds.includes(l.id));a&&(this.data.activeMissions[e]={id:a.id,progress:a.type==="vacation_total"?this.data.totalVacationDays:0,completed:!1})}}}buyOrEquipSkin(t){const e=Gi.find(n=>n.id===t);return e?this.data.unlockedSkins.includes(t)?(this.data.equippedSkin=t,this.save(),{success:!0}):this.data.walletCoins<e.price?{success:!1,reason:"not_enough_coins"}:(this.data.walletCoins-=e.price,this.data.unlockedSkins.push(t),this.data.equippedSkin=t,this.save(),{success:!0}):{success:!1,reason:"unknown_skin"}}equipHair(t){this.data.equippedHair=t,this.save()}}class ng{stats=this.createEmptyStats();createEmptyStats(){return{distance:0,score:0,coins:0,vacationDays:0,creditPoints:0,specialItems:0,dodgedObstacles:0,currentStreak:0,bestStreak:0,nearMisses:0,durationSec:0,zonesVisited:["call_center"],completedEscape:!1,endlessLoops:0}}reset(){this.stats=this.createEmptyStats()}addDistance(t,e=1){this.stats.distance+=t,this.stats.score+=t*10*e}addTime(t){this.stats.durationSec+=t}addCoffeeCoin(t=1){this.stats.coins+=1,this.stats.score+=25*t}addSpecialItem(t,e=1){this.stats.specialItems+=1,t==="vacation_day"?(this.stats.vacationDays+=1,this.stats.score+=60*e):t==="credit_points"?(this.stats.creditPoints+=4,this.stats.score+=120*e):this.stats.score+=85*e}recordObstacleDodged(t=1){this.stats.dodgedObstacles+=1,this.stats.currentStreak+=1,this.stats.currentStreak>this.stats.bestStreak&&(this.stats.bestStreak=this.stats.currentStreak),this.stats.score+=15*t}resetStreak(){this.stats.currentStreak=0}recordNearMiss(t=1){this.stats.nearMisses+=1,this.stats.score+=50*t}recordZoneVisit(t){return this.stats.zonesVisited.includes(t)?!1:(this.stats.zonesVisited.push(t),!0)}getRoundedScore(){return Math.floor(this.stats.score)}getRoundedDistance(){return Math.floor(this.stats.distance)}}function to(i){switch(i){case"cable_barrier":case"queue_barrier":return"jump";case"paper_printer_gate":case"grade_sheet_arch":case"schedule_beam":case"flying_books":return"slide";case"crossing_lecturer":case"moving_whiteboard":case"swivel_chair":case"revolving_door":case"swinging_door":return"moving";default:return"dodge"}}function ig(i){return i<220?"easy":i<680?"medium":i<1300?"hard":"expert"}class sg{decorFactor=1;patternCount=0;floorGeo=new Ie(Ht.trackTotalWidth,Ht.segmentLength);wallGeo=new Hn(.35,2.15,Ht.segmentLength);curbGeo=ht(.35,.25,Ht.segmentLength,.08,2);generateSegmentPattern(t,e,n=Math.random,s=!0){const r=fs[t],o=ig(e),a=[],l=[],c=[];if(this.patternCount+=1,!s){for(let h=0;h<4;h++)l.push({lane:1,zOffset:-6-h*3.5,y:.75,kind:"coffee_coin"});return{zoneId:t,tier:o,obstacles:a,collectibles:l,powerUps:c}}const u=o==="easy"?[-12]:[-6.5,-18.5];let d=Math.floor(n()*3);for(const h of u){const p=d===0?[0,1]:d===2?[1,2]:[0,1,2],g=p[Math.floor(n()*p.length)],v=o==="easy"?1:o==="medium"?n()<.65?2:1:n()<.8?2:1,m=[0,1,2].filter(x=>x!==g),f=v===1?[m[Math.floor(n()*m.length)]]:m;for(const x of f){const M=r.obstacleKinds,_=M[Math.floor(n()*M.length)];a.push({lane:x,zOffset:h,kind:_,clearance:to(_)})}if((o==="hard"||o==="expert")&&n()<.32){const x=r.obstacleKinds.filter(M=>{const _=to(M);return _==="jump"||_==="slide"});if(x.length>0){const M=x[Math.floor(n()*x.length)],_=to(M);if(a.push({lane:g,zOffset:h,kind:M,clearance:_}),_==="jump")for(let I=-1;I<=1;I++)l.push({lane:g,zOffset:h+I*1.4,y:I===0?1.85:1.35,kind:"coffee_coin"});else l.push({lane:g,zOffset:h,y:.48,kind:"coffee_coin"})}}else for(let x=-1;x<=1;x++)l.push({lane:g,zOffset:h+x*2.1,y:.78,kind:"coffee_coin"});d=g}if(this.patternCount%3===0){const h=[...r.zoneCollectibles,"vacation_day","credit_points"],p=h[Math.floor(n()*h.length)];l.push({lane:d,zOffset:-12.5,y:.9,kind:p})}if(this.patternCount%7===0){const h=["magnet","shield","turbo","silent"],p=h[Math.floor(n()*h.length)];c.push({lane:(d+1)%3,zOffset:-12.5,type:p})}return{zoneId:t,tier:o,obstacles:a,collectibles:l,powerUps:c}}createSegmentMesh(t){const e=new At,n=fs[t],s=Z({map:Ml(n.id,n.floorColor,n.floorAccentColor),color:16777215,roughness:.65,metalness:.05,lift:.04}),r=new D(this.floorGeo,s);r.rotation.x=-Math.PI/2,r.position.set(0,0,-24/2),r.receiveShadow=!0,e.add(r);const o=Z({map:yl(n.wallColor,n.trimColor,n.floorAccentColor),color:16777215,roughness:.72,lift:.05}),a=new D(this.wallGeo,o);a.position.set(-8.6/2-.4,1.075,-24/2),a.receiveShadow=!0;const l=new D(this.wallGeo,o);l.position.set(Ht.trackTotalWidth/2+.4,1.075,-24/2),l.receiveShadow=!0;const c=Z({color:n.trimColor,roughness:.48}),u=new D(this.curbGeo,c);u.position.set(-8.6/2+.15,.125,-24/2);const d=new D(this.curbGeo,c);d.position.set(Ht.trackTotalWidth/2-.15,.125,-24/2);const h=new At;e.add(a,l,u,d,h);const p={group:e,floorMesh:r,leftWall:a,rightWall:l,leftCurb:u,rightCurb:d,decorGroup:h,zoneId:t,z:0};return this.populateDecor(p),p}styleSegmentForZone(t,e){if(t.zoneId===e)return;t.zoneId=e;const n=fs[e],s=t.floorMesh.material;s.map=Ml(n.id,n.floorColor,n.floorAccentColor),s.needsUpdate=!0;const r=t.leftWall.material,o=yl(n.wallColor,n.trimColor,n.floorAccentColor);r.map=o,r.needsUpdate=!0;const a=t.rightWall.material;a.map=o,a.needsUpdate=!0,t.leftCurb.material.color.setHex(n.trimColor),t.rightCurb.material.color.setHex(n.trimColor);const l=e==="freedom";t.leftWall.visible=!l,t.rightWall.visible=!l,t.leftCurb.visible=!l,t.rightCurb.visible=!l,this.populateDecor(t)}populateDecor(t){for(;t.decorGroup.children.length>0;)t.decorGroup.remove(t.decorGroup.children[0]);const e=fs[t.zoneId];if(t.zoneId==="freedom"){const l=Z({color:3359061}),c=new ve({color:16638023}),u=Z({color:7877903}),d=Z({color:1483594,lift:.05});for(const h of[-1,1]){for(const v of[-5,-13,-20]){const m=new D(new me(.11,.16,.45,12),l);m.position.set(h*4.5,.22,v);const f=new D(new jt(.24,12,10),c);f.position.set(h*4.5,.56,v),t.decorGroup.add(m,f)}const p=new D(new Ee(.2,2.5,6,12),u);p.position.set(h*6.3,1.35,-12),p.rotation.z=h*-.08;const g=new At;g.position.set(h*6.4,3,-12);for(let v=0;v<5;v++){const m=v/5*Math.PI*2,f=new D(new jt(.85,12,10),d);f.scale.set(1.3,.55,.75),f.position.set(Math.cos(m)*.75,Math.sin(v)*.15,Math.sin(m)*.75),f.rotation.y=-m,g.add(f)}t.decorGroup.add(p,g)}return}const n=Z({map:On(e.nameHe,e.subtitleHe,"#ffffff",`#${e.trimColor.toString(16).padStart(6,"0")}`,`#${e.floorAccentColor.toString(16).padStart(6,"0")}`),color:16777215,lift:.06}),s=new D(new Ie(3.2,1.15),n);s.position.set(-8.6/2-.18,2.35,-12),s.rotation.y=Math.PI/2;const r=new D(new Ie(3.2,1.15),n);r.position.set(Ht.trackTotalWidth/2+.18,2.35,-12),r.rotation.y=-Math.PI/2,t.decorGroup.add(s,r);const o=Z({color:e.trimColor,roughness:.45}),a=new ve({color:16777215});for(const l of[-4,-16]){const c=new D(ht(Ht.trackTotalWidth+1.1,.24,.38,.08,2),o);c.position.set(0,5.2,l);const u=new D(ht(3.4,.09,.2,.03,2),a);u.position.set(0,5.05,l);const d=new D(ht(.32,5.2,.32,.08,2),o);d.position.set(-8.6/2-.22,2.6,l);const h=d.clone();h.position.x=Ht.trackTotalWidth/2+.22,t.decorGroup.add(c,u,d,h)}if(this.decorFactor>.4){const l=Z({color:14251782,roughness:.55}),c=Z({color:2278750,roughness:.45,lift:.04});for(const u of[-1,1]){const d=u*(Ht.trackTotalWidth/2-.35),h=new D(new me(.24,.18,.42,12),l);h.position.set(d,.21,-2);const p=new D(new jt(.34,12,10),c);if(p.position.set(d,.62,-2),t.decorGroup.add(h,p),t.zoneId==="call_center"){const g=new D(ht(.75,.82,1.5,.07,2),Z({color:14865596,roughness:.55}));g.position.set(d,.41,-7);const v=new D(ht(.12,.45,.72,.03,2),new ve({map:xc(u>0?0:1)}));v.position.set(d,1.05,-7),t.decorGroup.add(g,v)}else if(t.zoneId==="registration"){const g=new D(ht(.8,1.15,2.6,.08,2),Z({color:889992,roughness:.48}));g.position.set(d,.58,-16);const v=new D(ht(.45,.55,.45,.04,2),Z({color:16777215,roughness:.6}));v.position.set(d,1.42,-16),t.decorGroup.add(g,v)}else if(t.zoneId==="achievements"){const g=new D(ht(.16,1.5,2.5,.04,2),Z({color:5972406,roughness:.45}));g.position.set(d,1.85,-18);const v=new D(ht(.18,.95,.75,.04,2),Z({color:16708551,roughness:.45}));v.position.set(d,1.85,-6),t.decorGroup.add(g,v)}else if(t.zoneId==="departments"){const g=new D(ht(.65,2.5,2.2,.07,2),Z({color:7877903,roughness:.6}));g.position.set(d,1.25,-6);const v=g.clone();v.position.z=-18,t.decorGroup.add(g,v)}else if(t.zoneId==="counseling"){const g=new D(new me(.5,.5,.14,20),Z({color:165063,roughness:.35}));g.rotation.z=Math.PI/2,g.position.set(d,2.15,-18);const v=new D(ht(.75,.85,1.4,.07,2),Z({color:12248829,roughness:.5}));v.position.set(d,.42,-7),t.decorGroup.add(g,v)}}}}}class rg{canvas;renderer;scene;ambientLight;dirLight;progressMgr;audioMgr;characterRig;player;cameraCtrl;inputMgr;segmentGen;obstacleMgr;collectibleMgr;powerUpMgr;levelMgr;scoreMgr;particles;ui;segments=[];introWorkstation;skyDome;state="menu";wardrobeMode=!1;introTimer=0;introPhase=0;introRing2Played=!1;victoryAnimTimer=0;victoryModalShown=!1;worldSpeed=Ht.baseSpeed;gameOverDelay=0;lastRunUnlocked=[];lastRunNewRecord=!1;lastTime=0;rafId=0;achievementCheckAccum=0;coinCombo=0;constructor(t,e){this.canvas=t,this.progressMgr=new eg,this.audioMgr=new Xm;const n=this.progressMgr.data.settings;this.audioMgr.setSettings(n.muted,n.musicVolume,n.sfxVolume),this.renderer=new B0({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Fe,this.renderer.toneMapping=Al,this.renderer.toneMappingExposure=1.03,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=El;const s=Me[0];this.scene=new sc,this.scene.background=new kt(s.skyColor),this.scene.fog=new ki(s.fogColor,38,125),Lm(this.renderer,this.scene),this.ambientLight=new vm(s.ambientColor,16770508,1.18),this.scene.add(this.ambientLight),this.dirLight=new Kr(s.sunColor,1.45),this.dirLight.position.set(10,18,12),this.dirLight.castShadow=!0,this.dirLight.shadow.camera.near=1,this.dirLight.shadow.camera.far=55,this.dirLight.shadow.camera.left=-12,this.dirLight.shadow.camera.right=12,this.dirLight.shadow.camera.top=18,this.dirLight.shadow.camera.bottom=-18,this.scene.add(this.dirLight);const r=new Kr(16774891,.6);r.position.set(-5,6,-10),this.scene.add(r);const o=new Kr(14742270,.65);o.position.set(4,7,10),this.scene.add(o),this.skyDome=Dm(),this.skyDome.setColors(3718648,s.skyColor,16317180),this.scene.add(this.skyDome.group),this.characterRig=Gm(this.progressMgr.data.equippedSkin),zn(this.characterRig,this.progressMgr.data.equippedSkin,this.progressMgr.data.equippedHair),this.scene.add(this.characterRig.root),this.player=new Jm(this.characterRig),this.cameraCtrl=new qm(window.innerWidth/Math.max(1,window.innerHeight)),this.segmentGen=new sg,this.obstacleMgr=new Ym,this.scene.add(this.obstacleMgr.group),this.collectibleMgr=new $m,this.scene.add(this.collectibleMgr.group),this.powerUpMgr=new jm,this.scene.add(this.powerUpMgr.group),this.levelMgr=new Km,this.scene.add(this.levelMgr.group),this.particles=new Vm(150),this.scene.add(this.particles.group),this.scoreMgr=new ng,this.introWorkstation=yn.createIntroWorkstation(),this.scene.add(this.introWorkstation.group),this.buildInitialTrack(),this.inputMgr=new Zm(this.canvas,a=>this.handleInput(a),()=>this.audioMgr.unlock()),this.ui=new Wm(e,{onStartRun:()=>{this.audioMgr.unlock(),this.startNewRun()},onPause:()=>this.pause(),onResume:()=>this.resume(),onRestart:()=>{this.audioMgr.unlock(),this.startNewRun()},onReturnMenu:()=>this.goToMenu(),onContinueEndless:()=>this.continueEndless(),onToggleMute:()=>{this.progressMgr.data.settings.muted=!this.progressMgr.data.settings.muted,this.syncAudioSettings(),this.progressMgr.save(),this.ui.updateSave(this.progressMgr.data)},onSetMusicVol:a=>{this.progressMgr.data.settings.musicVolume=a,this.syncAudioSettings(),this.progressMgr.save()},onSetSfxVol:a=>{this.progressMgr.data.settings.sfxVolume=a,this.syncAudioSettings(),this.progressMgr.save()},onSetQuality:a=>this.applyQuality(a),onResetProgress:()=>{const a=this.progressMgr.resetAll();zn(this.characterRig,a.equippedSkin,a.equippedHair),this.syncAudioSettings(),this.ui.updateSave(a)},onOpenWardrobe:a=>{this.audioMgr.unlock(),this.wardrobeMode=a,this.introWorkstation.group.visible=!a,this.player.setAnimPose("idle",a?"happy":"neutral"),a?this.cameraCtrl.snapToWardrobe():this.cameraCtrl.snapToMenu()},onSelectSkin:a=>{this.audioMgr.unlock(),zn(this.characterRig,a,this.progressMgr.data.equippedHair)},onBuyOrEquipSkin:a=>{this.audioMgr.unlock(),this.progressMgr.buyOrEquipSkin(a).success?(this.audioMgr.playPowerUp(),zn(this.characterRig,a,this.progressMgr.data.equippedHair),this.ui.updateSave(this.progressMgr.data)):this.ui.showComicBubble("חסרות כוסות תה! רוצי ואספי עוד 🍵")},onSelectHair:a=>{this.audioMgr.unlock(),this.progressMgr.equipHair(a),zn(this.characterRig,this.progressMgr.data.equippedSkin,a),this.ui.updateSave(this.progressMgr.data)},onSkipIntro:()=>{this.audioMgr.unlock(),this.beginRunningPhase()}},this.progressMgr.data),this.applyQuality(this.progressMgr.data.settings.quality),this.handleResize(),window.addEventListener("resize",()=>this.handleResize()),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.state==="playing"&&this.pause(),this.audioMgr.suspend())}),window.addEventListener("blur",()=>{this.state==="playing"&&this.pause()}),this.installQAHooks(),this.goToMenu(),this.lastTime=performance.now(),this.loop(this.lastTime)}syncAudioSettings(){const t=this.progressMgr.data.settings;this.audioMgr.setSettings(t.muted,t.musicVolume,t.sfxVolume)}applyQuality(t){this.progressMgr.data.settings.quality=t,this.progressMgr.save();const e=window.innerWidth<768||navigator.maxTouchPoints>0,s=bm[t==="auto"?e?"medium":"high":t];this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,s.maxDpr)),this.renderer.shadowMap.enabled=s.shadows,this.particles.setQualityMultiplier(s.particleMultiplier),this.scene.fog instanceof ki&&(this.scene.fog.far=s.fogFar)}handleResize(){const t=window.innerWidth,e=Math.max(1,window.innerHeight);this.renderer.setSize(t,e,!1),this.cameraCtrl.resize(t,e)}buildInitialTrack(){for(const t of this.segments)this.scene.remove(t.group);this.segments.length=0;for(let t=0;t<Ht.activeSegmentsAhead+1;t++){const e=this.segmentGen.createSegmentMesh("call_center");e.z=12-t*Ht.segmentLength,e.group.position.z=e.z,this.scene.add(e.group),this.segments.push(e)}}resetTrackForRun(){this.obstacleMgr.reset(),this.collectibleMgr.reset(),this.powerUpMgr.reset(),this.levelMgr.reset(),this.particles.clear(),this.coinCombo=0;const t=Me[0];this.scene.background instanceof kt&&this.scene.background.setHex(t.skyColor),this.scene.fog instanceof ki&&this.scene.fog.color.setHex(t.fogColor),this.ambientLight.color.setHex(t.ambientColor),this.dirLight.color.setHex(t.sunColor);for(let e=0;e<this.segments.length;e++){const n=this.segments[e];if(this.segmentGen.styleSegmentForZone(n,"call_center"),n.z=12-e*Ht.segmentLength,n.group.position.z=n.z,e>=2){const s=this.segmentGen.generateSegmentPattern("call_center",0,Math.random,!0);this.obstacleMgr.spawnFromPattern(n.z,s.obstacles),this.collectibleMgr.spawnFromPattern(n.z,s.collectibles),this.powerUpMgr.spawnFromPattern(n.z,s.powerUps)}else if(e===1){const s=this.segmentGen.generateSegmentPattern("call_center",0,Math.random,!1);this.collectibleMgr.spawnFromPattern(n.z,s.collectibles)}}}goToMenu(){this.state="menu",this.wardrobeMode=!1,this.audioMgr.stopMusic(),this.ui.clearFloating(),this.resetTrackForRun();const t=Me[0];this.skyDome.setColors(3718648,t.skyColor,16317180),this.introWorkstation.group.visible=!0,this.introWorkstation.group.position.set(1.95,0,1.35),this.introWorkstation.group.rotation.y=-.4,zn(this.characterRig,this.progressMgr.data.equippedSkin,this.progressMgr.data.equippedHair),this.player.reset(),this.player.setAnimPose("idle","happy"),this.cameraCtrl.snapToMenu(),this.ui.updateSave(this.progressMgr.data),this.ui.renderState("menu",this.scoreMgr.stats)}startNewRun(){this.wardrobeMode=!1,this.ui.clearFloating(),this.scoreMgr.reset(),this.resetTrackForRun(),this.worldSpeed=Ht.baseSpeed,this.gameOverDelay=0,this.victoryAnimTimer=0,this.victoryModalShown=!1,this.lastRunUnlocked=[],this.lastRunNewRecord=!1,this.achievementCheckAccum=0,this.state="intro",this.introTimer=0,this.introPhase=0,this.introRing2Played=!1;const t=Me[0];this.skyDome.setColors(3718648,t.skyColor,16317180),this.introWorkstation.group.visible=!0,this.introWorkstation.group.position.set(0,0,0),this.introWorkstation.group.rotation.y=0,zn(this.characterRig,this.progressMgr.data.equippedSkin,this.progressMgr.data.equippedHair),this.player.reset(),this.player.setAnimPose("desk_sit","annoyed"),this.cameraCtrl.snapToIntro(),this.audioMgr.playPhoneRing(),this.ui.renderState("intro",this.scoreMgr.stats)}beginRunningPhase(){this.state="playing",this.introWorkstation.group.visible=!1,this.player.reset(),this.player.setExpression("determined",0),this.audioMgr.startMusic(),this.ui.renderState("playing",this.scoreMgr.stats),this.ui.showZoneBanner(Me[0].nameHe,Me[0].subtitleHe)}continueEndless(){this.levelMgr.enableEndlessLoop(),this.scoreMgr.stats.endlessLoops=this.levelMgr.loopCount,this.state="playing",this.victoryModalShown=!1,this.player.reset(),this.obstacleMgr.clearNearPlayer(16),this.audioMgr.startMusic(),this.ui.renderState("playing",this.scoreMgr.stats),this.ui.showZoneBanner("סיבוב אינסופי ×2!","הבריחה ממשיכה במהירות כפולה!")}pause(){this.state==="playing"&&(this.state="paused",this.ui.clearFloating(),this.audioMgr.suspend(),this.ui.renderState("paused",this.scoreMgr.stats))}resume(){this.state==="paused"&&(this.state="playing",this.lastTime=performance.now(),this.audioMgr.resume(),this.ui.renderState("playing",this.scoreMgr.stats))}handleInput(t){if(t==="pause"){this.state==="playing"?this.pause():this.state==="paused"&&this.resume();return}if((t==="up"||t==="down"||t==="left"||t==="right")&&this.state==="intro"){this.beginRunningPhase();return}if(this.state!=="playing")return;const e=this.player.handleAction(t);e.jumped?this.audioMgr.playJump():e.slid?this.audioMgr.playSlide():e.laneChanged&&this.audioMgr.playLaneSwitch()}loop(t){this.rafId=requestAnimationFrame(n=>this.loop(n));const e=Math.min(.05,Math.max(.001,(t-this.lastTime)/1e3));this.lastTime=t,this.state==="menu"?(this.player.updateStaticPose(e,"idle"),this.wardrobeMode?this.cameraCtrl.updateWardrobe(e):this.cameraCtrl.updateMenu(e)):this.state==="intro"?this.updateIntro(e):this.state==="playing"?this.updatePlaying(e):this.state==="gameover"?this.gameOverDelay>0?(this.gameOverDelay-=e,this.player.updateStaticPose(e,"collision"),this.cameraCtrl.updateGameplay(e,this.player.x,this.player.y,!1),this.gameOverDelay<=0&&this.ui.renderState("gameover",this.scoreMgr.stats,this.lastRunUnlocked,this.lastRunNewRecord)):this.player.updateStaticPose(e,"collision"):this.state==="victory"&&this.updateVictory(e),this.skyDome.update(e),this.particles.update(e),this.renderer.render(this.scene,this.cameraCtrl.camera)}updateVictory(t){this.victoryAnimTimer+=t;const e=this.levelMgr.escapePlane;e.propeller.rotation.z+=t*32,e.group.position.z-=t*16,e.group.position.y=Math.max(0,(this.victoryAnimTimer-.5)*4.2),e.group.rotation.x=Math.min(.24,Math.max(0,(this.victoryAnimTimer-.4)*.14)),this.cameraCtrl.updateVictory(e.group.position,t),this.victoryAnimTimer>=1.8&&!this.victoryModalShown&&(this.victoryModalShown=!0,this.ui.renderState("victory",this.scoreMgr.stats,this.lastRunUnlocked,this.lastRunNewRecord))}updateIntro(t){this.introTimer+=t;const e=2.6,n=Math.min(1,this.introTimer/e);this.introWorkstation.phoneReceiver.position.y=.08+Math.abs(Math.sin(this.introTimer*26))*.04,this.introWorkstation.phoneReceiver.rotation.z=Math.sin(this.introTimer*35)*.16,this.introTimer>=.9&&!this.introRing2Played&&(this.introRing2Played=!0,this.audioMgr.playPhoneRing()),this.introTimer<1.15?this.player.updateStaticPose(t,"desk_sit"):(this.introPhase===0&&(this.introPhase=1,this.player.setExpression("surprised",1.2),this.ui.updateIntroText(se.introLeave,se.introRing)),this.player.updateStaticPose(t,"intro_standup")),this.cameraCtrl.updateIntro(n),this.introTimer>=e&&this.beginRunningPhase()}updatePlaying(t){const e=this.powerUpMgr.isActive("turbo"),n=this.powerUpMgr.isActive("shield"),s=this.powerUpMgr.isActive("magnet"),r=this.powerUpMgr.isActive("silent"),o=this.levelMgr.isEndlessMode?2:1,a=e?Ht.turboSpeedMultiplier:1,l=Ht.baseSpeed+this.scoreMgr.stats.durationSec*Ht.speedRampPerSec+(this.levelMgr.activeZone.id==="freedom"?3.5:0);this.worldSpeed=Math.min(Ht.maxSpeed,l)*a,this.audioMgr.setSpeedFactor(this.worldSpeed/Ht.baseSpeed);const c=this.worldSpeed*t;this.scoreMgr.addTime(t),this.scoreMgr.addDistance(c,o*(e?2:1)),this.player.updateRunning(t,this.worldSpeed,e,n),this.player.isGrounded&&(!this.player.isSliding||Math.random()<.35)&&this.particles.emitRunDust(this.player.x,this.player.z);let u=1/0;for(const h of this.segments)h.z+=c,h.group.position.z=h.z,h.z<u&&(u=h.z);for(const h of this.segments)if(h.z-Ht.segmentLength>Ht.despawnZ){h.z=u-Ht.segmentLength,h.group.position.z=h.z,u=h.z;const p=this.levelMgr.getZoneAtSpawnAhead(this.scoreMgr.stats.distance);this.segmentGen.styleSegmentForZone(h,p.id);const g=this.levelMgr.isEndlessMode||this.scoreMgr.stats.distance<xn-110,v=this.segmentGen.generateSegmentPattern(p.id,this.scoreMgr.stats.distance,Math.random,g);this.obstacleMgr.spawnFromPattern(h.z,v.obstacles),this.collectibleMgr.spawnFromPattern(h.z,v.collectibles),this.powerUpMgr.spawnFromPattern(h.z,v.powerUps)}const d=this.player.getAABB();if(this.levelMgr.update(t,this.worldSpeed,this.scoreMgr.stats.distance,d,r||e||this.player.isInvulnerable,this.scene,this.ambientLight,this.dirLight,{onZoneChange:h=>{this.scoreMgr.recordZoneVisit(h.id),this.particles.emitConfetti(this.player.x,2.2,-4),this.audioMgr.playPowerUp(),this.ui.showZoneBanner(h.nameHe,h.subtitleHe)},onQuote:h=>{this.ui.showComicBubble(h)},onBossWarning:h=>{this.audioMgr.playBossWarning(),this.ui.showZoneBanner(`⚠️ ${h.bossTitleHe}`,h.bossWarningHe)},onBossHit:()=>{this.handlePlayerHit()},onReachAirplane:()=>{this.triggerVictory()}},this.skyDome),this.state==="playing"&&(this.collectibleMgr.update(t,this.worldSpeed,this.player.x,this.player.y,d,s||e,h=>{if(this.particles.emitCoinBurst(h.x,h.y,h.z),this.coinCombo=(this.coinCombo+1)%10,this.audioMgr.playCoin(this.coinCombo),h.kind==="coffee_coin")this.scoreMgr.addCoffeeCoin(o);else if(h.kind==="vacation_day")this.scoreMgr.addSpecialItem("vacation_day",o),this.ui.showComicBubble("יום חופש מאושר! 🌴");else if(h.kind==="credit_points")this.scoreMgr.addSpecialItem("credit_points",o),this.ui.showComicBubble("+4 נקודות זכות! 🎓");else if(h.kind==="sick_note")this.scoreMgr.addSpecialItem("other",o),this.powerUpMgr.activate("shield",7),this.ui.showComicBubble("אישור מחלה — מגן זמני! 🩺");else if(h.kind==="call_headset")this.scoreMgr.addSpecialItem("other",o),this.powerUpMgr.activate("silent",6),this.ui.showComicBubble("אוזניות חוסמות רעש! 🎧");else if(h.kind==="exit_ticket"){for(let p=0;p<10;p++)this.scoreMgr.addCoffeeCoin(o);this.scoreMgr.addSpecialItem("other",o),this.ui.showComicBubble("כרטיס יציאה נדיר! +10 🍵")}else this.scoreMgr.addSpecialItem("other",o)}),this.powerUpMgr.update(t,this.worldSpeed,d,(h,p)=>{this.particles.emitCoinBurst(p.x,p.y,p.z,3718648),this.audioMgr.playPowerUp(),this.player.setExpression("happy",1.4);const g=gc[h];this.ui.showComicBubble(`${g.icon} ${g.title} הופעל!`)}),this.obstacleMgr.update(t,this.worldSpeed,d,this.player.isSliding,r,()=>{this.scoreMgr.recordObstacleDodged(o)},()=>{this.scoreMgr.recordNearMiss(o),this.audioMgr.playNearMiss(),this.ui.showComicBubble(se.nearMissToast)},h=>{if(e){this.particles.emitCollisionBurst(h.x,.8,h.z),this.scoreMgr.recordObstacleDodged(o*2);return}this.player.isInvulnerable||this.handlePlayerHit()},h=>{this.particles.emitFlyingPaper(h.x,1,h.z)}),this.state==="playing")){if(this.achievementCheckAccum+=t,this.achievementCheckAccum>=.5){this.achievementCheckAccum=0;const h=this.progressMgr.checkLiveAchievements(this.scoreMgr.stats);for(const p of h)this.lastRunUnlocked.push(p),this.audioMgr.playAchievement(),this.particles.emitConfetti(this.player.x,2.5,-2),this.ui.showAchievementToast(p),this.ui.updateSave(this.progressMgr.data)}this.cameraCtrl.updateGameplay(t,this.player.x,this.player.y,e),this.ui.updateHUD(this.scoreMgr.stats,this.powerUpMgr.activeTimers)}}handlePlayerHit(){if(this.powerUpMgr.consumeShield()){this.player.grantInvulnerability(1.3),this.obstacleMgr.clearNearPlayer(8),this.cameraCtrl.triggerShake(.22,.25),this.particles.emitCoinBurst(this.player.x,1,this.player.z,1096065),this.audioMgr.playPowerUp(),this.ui.showComicBubble(se.shieldSavedToast),this.scoreMgr.resetStreak();return}this.triggerGameOver()}triggerGameOver(){this.state="gameover",this.gameOverDelay=.65,this.ui.clearFloating(),this.audioMgr.stopMusic(),this.audioMgr.playCollision(),this.player.setExpression("dizzy",2),this.cameraCtrl.triggerShake(.45,.45),this.particles.emitCollisionBurst(this.player.x,this.player.y+.6,this.player.z);const t=this.progressMgr.finalizeRun(this.scoreMgr.stats);this.lastRunNewRecord=t.isNewRecord,this.lastRunUnlocked.push(...t.newlyUnlocked),this.ui.updateSave(this.progressMgr.data)}triggerVictory(){this.state="victory",this.victoryAnimTimer=0,this.victoryModalShown=!1,this.ui.clearFloating(),this.scoreMgr.stats.completedEscape=!0,this.audioMgr.stopMusic(),this.audioMgr.playAirplaneTakeoff(),this.obstacleMgr.reset(),this.collectibleMgr.reset(),this.powerUpMgr.reset(),this.characterRig.root.visible=!1,this.particles.emitConfetti(0,1.5,-2);const t=this.progressMgr.finalizeRun(this.scoreMgr.stats);this.lastRunNewRecord=t.isNewRecord,this.lastRunUnlocked.push(...t.newlyUnlocked),this.ui.updateSave(this.progressMgr.data)}installQAHooks(){window.__GAME_QA__={getState:()=>({state:this.state,wardrobeMode:this.wardrobeMode,player:{lane:this.player.lane,x:this.player.x,y:this.player.y,isGrounded:this.player.isGrounded,isSliding:this.player.isSliding},zone:{id:this.levelMgr.activeZone.id,nameHe:this.levelMgr.activeZone.nameHe},stats:{...this.scoreMgr.stats},worldSpeed:this.worldSpeed,activePowerUps:{...this.powerUpMgr.activeTimers},saveData:this.progressMgr.data,sceneChildren:this.scene.children.length,segmentsCount:this.segments.length,obstaclesActive:this.obstacleMgr.active.length,collectiblesActive:this.collectibleMgr.active.length}),jumpToZone:t=>{this.state!=="playing"&&this.beginRunningPhase(),this.player.reset(),this.player.grantInvulnerability(1.5);const e=this.levelMgr.jumpToZone(t);this.scoreMgr.stats.distance=e,this.scoreMgr.recordZoneVisit(t),this.obstacleMgr.reset(),this.collectibleMgr.reset(),this.powerUpMgr.reset();for(let s=0;s<this.segments.length;s++){const r=this.segments[s];if(this.segmentGen.styleSegmentForZone(r,t),s>=2){const o=this.segmentGen.generateSegmentPattern(t,e,Math.random,!0);this.obstacleMgr.spawnFromPattern(r.z,o.obstacles),this.collectibleMgr.spawnFromPattern(r.z,o.collectibles)}}const n=this.levelMgr.activeZone;n.id==="freedom"?this.skyDome.setColors(3223169,16347926,16638023):this.skyDome.setColors(3718648,n.skyColor,16317180),this.ui.showZoneBanner(n.nameHe,n.subtitleHe)},triggerBoss:t=>{this.levelMgr.triggerZoneBossNow(t);const e=this.levelMgr.activeZone;this.ui.showZoneBanner(`⚠️ ${e.bossTitleHe}`,e.bossWarningHe)},triggerVictory:()=>{this.state!=="playing"&&this.beginRunningPhase(),this.scoreMgr.stats.distance=xn,this.triggerVictory()},triggerGameOver:()=>{this.state!=="playing"&&this.beginRunningPhase(),this.triggerGameOver()},grantCoins:t=>{this.progressMgr.data.walletCoins+=t,this.progressMgr.save(),this.ui.updateSave(this.progressMgr.data)}}}destroy(){cancelAnimationFrame(this.rafId),this.inputMgr.destroy(),this.audioMgr.destroy(),this.renderer.dispose()}}const Sc=document.getElementById("game-canvas"),bc=document.getElementById("ui-root");if(!Sc||!bc)throw new Error("Missing #game-canvas or #ui-root element in index.html");new rg(Sc,bc);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});
