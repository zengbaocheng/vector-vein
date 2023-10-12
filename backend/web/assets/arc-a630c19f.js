import{w as ln,c as z}from"./path-53f90ab3.js";import{al as an,am as G,an as q,ao as rn,ap as y,$ as on,aq as K,ar as _,as as un,at as t,au as sn,av as tn,aw as fn}from"./TextOutput-bb816d11.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,I,D,v,A,B,a){var O=I-l,i=D-h,n=B-v,m=a-A,r=m*O-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*O,h+r*i]}function V(l,h,I,D,v,A,B){var a=l-I,O=h-D,i=(B?A:-A)/K(a*a+O*O),n=i*O,m=-i*a,r=l+n,s=h+m,f=I+n,c=D+m,C=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,w=r*c-f*s,S=(g<0?-1:1)*K(fn(0,T*T*R-w*w)),$=(w*g-p*S)/R,j=(-w*p-g*S)/R,P=(w*g+p*S)/R,d=(-w*p+g*S)/R,x=$-C,e=j-o,u=P-C,F=d-o;return x*x+e*e>u*u+F*F&&($=P,j=d),{cx:$,cy:j,x01:-n,y01:-m,x11:$*(v/T-1),y11:j*(v/T-1)}}function vn(){var l=cn,h=yn,I=z(0),D=null,v=gn,A=mn,B=pn,a=null,O=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,C=un(c-f),o=c>f;if(a||(a=n=O()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(C>on-y)a.moveTo(s*G(f),s*q(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*G(c),r*q(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,R=f,T=c,w=C,S=C,$=B.apply(this,arguments)/2,j=$>y&&(D?+D.apply(this,arguments):K(r*r+s*s)),P=_(un(s-r)/2,+I.apply(this,arguments)),d=P,x=P,e,u;if(j>y){var F=sn(j/r*q($)),L=sn(j/s*q($));(w-=F*2)>y?(F*=o?1:-1,R+=F,T-=F):(w=0,R=T=(f+c)/2),(S-=L*2)>y?(L*=o?1:-1,p+=L,g-=L):(S=0,p=g=(f+c)/2)}var H=s*G(p),J=s*q(p),M=r*G(T),N=r*q(T);if(P>y){var Q=s*G(g),U=s*q(g),W=r*G(R),X=r*q(R),E;if(C<an)if(E=dn(H,J,W,X,Q,U,M,N)){var Y=H-E[0],Z=J-E[1],k=Q-E[0],b=U-E[1],nn=1/q(tn((Y*k+Z*b)/(K(Y*Y+Z*Z)*K(k*k+b*b)))/2),en=K(E[0]*E[0]+E[1]*E[1]);d=_(P,(r-en)/(nn-1)),x=_(P,(s-en)/(nn+1))}else d=x=0}S>y?x>y?(e=V(W,X,H,J,s,x,o),u=V(Q,U,M,N,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<P?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(H,J),a.arc(0,0,s,p,g,!o)):a.moveTo(H,J),!(r>y)||!(w>y)?a.lineTo(M,N):d>y?(e=V(M,N,Q,U,r,-d,o),u=V(H,J,W,X,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<P?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[G(m)*n,q(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:z(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:z(+n),i):h},i.cornerRadius=function(n){return arguments.length?(I=typeof n=="function"?n:z(+n),i):I},i.padRadius=function(n){return arguments.length?(D=n==null?null:typeof n=="function"?n:z(+n),i):D},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:z(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:z(+n),i):A},i.padAngle=function(n){return arguments.length?(B=typeof n=="function"?n:z(+n),i):B},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
