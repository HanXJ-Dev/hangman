"use strict";(self.webpackChunktiktok_hangman=self.webpackChunktiktok_hangman||[]).push([[517],{1399:function(e,a,r){r.d(a,{zx:function(){return W}});var t=r(5223),n=r(1340),i=r(6831),s=r(6198),l=r.n(s),o=r(2791),c=r(9611),m=r(2554),d={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},p=(0,n.m$)("span",{baseStyle:d});i.Ts&&(p.displayName="VisuallyHidden");var u=(0,n.m$)("input",{baseStyle:d});i.Ts&&(u.displayName="VisuallyHiddenInput");function f(){return f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},f.apply(this,arguments)}var v=["label","thickness","speed","emptyColor","className"],g=(0,m.keyframes)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),h=(0,n.Gp)((function(e,a){var r=(0,n.mq)("Spinner",e),t=(0,n.Lr)(e),s=t.label,l=void 0===s?"Loading...":s,c=t.thickness,m=void 0===c?"2px":c,d=t.speed,u=void 0===d?"0.45s":d,h=t.emptyColor,y=void 0===h?"transparent":h,b=t.className,x=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(t,v),N=(0,i.cx)("chakra-spinner",b),_=f({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:m,borderBottomColor:y,borderLeftColor:y,animation:g+" "+u+" linear infinite"},r);return o.createElement(n.m$.div,f({ref:a,__css:_,className:N},x),l&&o.createElement(p,null,l))}));function y(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}function b(){return b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},b.apply(this,arguments)}i.Ts&&(h.displayName="Spinner");var x=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],N=(0,c.kr)({strict:!1,name:"ButtonGroupContext"}),_=N[0],k=N[1],w=(0,n.Gp)((function(e,a){var r=e.size,t=e.colorScheme,s=e.variant,l=e.className,c=e.spacing,m=void 0===c?"0.5rem":c,d=e.isAttached,p=e.isDisabled,u=y(e,x),f=(0,i.cx)("chakra-button__group",l),v=o.useMemo((function(){return{size:r,colorScheme:t,variant:s,isDisabled:p}}),[r,t,s,p]),g={display:"inline-flex"};return g=b({},g,d?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:m}}),o.createElement(_,{value:v},o.createElement(n.m$.div,b({ref:a,role:"group",__css:g,className:f,"data-attached":d?"":void 0},u)))}));i.Ts&&(w.displayName="ButtonGroup");var E=["label","placement","spacing","children","className","__css"],T=function(e){var a=e.label,r=e.placement,t=e.spacing,s=void 0===t?"0.5rem":t,l=e.children,c=void 0===l?o.createElement(h,{color:"currentColor",width:"1em",height:"1em"}):l,m=e.className,d=e.__css,p=y(e,E),u=(0,i.cx)("chakra-button__spinner",m),f="start"===r?"marginEnd":"marginStart",v=o.useMemo((function(){var e;return b(((e={display:"flex",alignItems:"center",position:a?"relative":"absolute"})[f]=a?s:0,e.fontSize="1em",e.lineHeight="normal",e),d)}),[d,a,f,s]);return o.createElement(n.m$.div,b({className:u},p,{__css:v}),c)};i.Ts&&(T.displayName="ButtonSpinner");var S=["children","className"],C=function(e){var a=e.children,r=e.className,t=y(e,S),s=o.isValidElement(a)?o.cloneElement(a,{"aria-hidden":!0,focusable:!1}):a,l=(0,i.cx)("chakra-button__icon",r);return o.createElement(n.m$.span,b({display:"inline-flex",alignSelf:"center",flexShrink:0},t,{className:l}),s)};i.Ts&&(C.displayName="ButtonIcon");var G=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],W=(0,n.Gp)((function(e,a){var r=k(),s=(0,n.mq)("Button",b({},r,e)),c=(0,n.Lr)(e),m=c.isDisabled,d=void 0===m?null==r?void 0:r.isDisabled:m,p=c.isLoading,u=c.isActive,f=c.children,v=c.leftIcon,g=c.rightIcon,h=c.loadingText,x=c.iconSpacing,N=void 0===x?"0.5rem":x,_=c.type,w=c.spinner,E=c.spinnerPlacement,S=void 0===E?"start":E,C=c.className,W=c.as,B=y(c,G),$=o.useMemo((function(){var e,a=l()({},null!=(e=null==s?void 0:s._focus)?e:{},{zIndex:1});return b({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},s,!!r&&{_focus:a})}),[s,r]),j=function(e){var a=o.useState(!e),r=a[0],t=a[1];return{ref:o.useCallback((function(e){e&&t("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(W),I=j.ref,O=j.type,R={rightIcon:g,leftIcon:v,iconSpacing:N,children:f};return o.createElement(n.m$.button,b({disabled:d||p,ref:(0,t.qq)(a,I),as:W,type:null!=_?_:O,"data-active":(0,i.PB)(u),"data-loading":(0,i.PB)(p),__css:$,className:(0,i.cx)("chakra-button",C)},B),p&&"start"===S&&o.createElement(T,{className:"chakra-button__spinner--start",label:h,placement:"start",spacing:N},w),p?h||o.createElement(n.m$.span,{opacity:0},o.createElement(L,R)):o.createElement(L,R),p&&"end"===S&&o.createElement(T,{className:"chakra-button__spinner--end",label:h,placement:"end",spacing:N},w))}));function L(e){var a=e.leftIcon,r=e.rightIcon,t=e.children,n=e.iconSpacing;return o.createElement(o.Fragment,null,a&&o.createElement(C,{marginEnd:n},a),t,r&&o.createElement(C,{marginStart:n},r))}i.Ts&&(W.displayName="Button");var B=["icon","children","isRound","aria-label"],$=(0,n.Gp)((function(e,a){var r=e.icon,t=e.children,n=e.isRound,i=e["aria-label"],s=y(e,B),l=r||t,c=o.isValidElement(l)?o.cloneElement(l,{"aria-hidden":!0,focusable:!1}):null;return o.createElement(W,b({padding:"0",borderRadius:n?"full":void 0,ref:a,"aria-label":i},s),c)}));i.Ts&&($.displayName="IconButton")},3998:function(e,a,r){r.d(a,{M5:function(){return k},X6:function(){return O},Kq:function(){return ne},xv:function(){return oe}});var t=r(1340),n=r(7160),i=r(6831),s=r(2791);function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},l.apply(this,arguments)}var o=["as","viewBox","color","focusable","children","className","__css"],c={path:s.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},s.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),s.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),s.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},m=(0,t.Gp)((function(e,a){var r=e.as,n=e.viewBox,m=e.color,d=void 0===m?"currentColor":m,p=e.focusable,u=void 0!==p&&p,f=e.children,v=e.className,g=e.__css,h=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o),y={ref:a,focusable:u,className:(0,i.cx)("chakra-icon",v),__css:l({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:d},g)},b=null!=n?n:c.viewBox;if(r&&"string"!==typeof r)return s.createElement(t.m$.svg,l({as:r},y,h));var x=null!=f?f:c.path;return s.createElement(t.m$.svg,l({verticalAlign:"middle",viewBox:b},y,h),x)}));i.Ts&&(m.displayName="Icon");var d=r(9611);function p(){return p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},p.apply(this,arguments)}function u(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}var f=["ratio","children","className"],v=(0,t.Gp)((function(e,a){var r=e.ratio,n=void 0===r?4/3:r,l=e.children,o=e.className,c=u(e,f),m=s.Children.only(l),d=(0,i.cx)("chakra-aspect-ratio",o);return s.createElement(t.m$.div,p({ref:a,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:(0,i.XQ)(n,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},c),m)}));i.Ts&&(v.displayName="AspectRatio");var g=["className"],h=(0,t.Gp)((function(e,a){var r=(0,t.mq)("Badge",e),n=(0,t.Lr)(e);n.className;var l=u(n,g);return s.createElement(t.m$.span,p({ref:a,className:(0,i.cx)("chakra-badge",e.className)},l,{__css:p({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},r)}))}));i.Ts&&(h.displayName="Badge");var y=["size","centerContent"],b=["size"],x=(0,t.m$)("div");i.Ts&&(x.displayName="Box");var N=(0,t.Gp)((function(e,a){var r=e.size,t=e.centerContent,n=void 0===t||t,i=u(e,y),l=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return s.createElement(x,p({ref:a,boxSize:r,__css:p({},l,{flexShrink:0,flexGrow:0})},i))}));i.Ts&&(N.displayName="Square");var _=(0,t.Gp)((function(e,a){var r=e.size,t=u(e,b);return s.createElement(N,p({size:r,ref:a,borderRadius:"9999px"},t))}));i.Ts&&(_.displayName="Circle");var k=(0,t.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.Ts&&(k.displayName="Center");var w=["className"],E=(0,t.Gp)((function(e,a){var r=(0,t.mq)("Code",e),n=(0,t.Lr)(e);n.className;var l=u(n,w);return s.createElement(t.m$.code,p({ref:a,className:(0,i.cx)("chakra-code",e.className)},l,{__css:p({display:"inline-block"},r)}))}));i.Ts&&(E.displayName="Code");var T=["className","centerContent"],S=(0,t.Gp)((function(e,a){var r=(0,t.Lr)(e),n=r.className,l=r.centerContent,o=u(r,T),c=(0,t.mq)("Container",e);return s.createElement(t.m$.div,p({ref:a,className:(0,i.cx)("chakra-container",n)},o,{__css:p({},c,l&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));i.Ts&&(S.displayName="Container");var C=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],G=["className","orientation","__css"],W=(0,t.Gp)((function(e,a){var r=(0,t.mq)("Divider",e),n=r.borderLeftWidth,l=r.borderBottomWidth,o=r.borderTopWidth,c=r.borderRightWidth,m=r.borderWidth,d=r.borderStyle,f=r.borderColor,v=u(r,C),g=(0,t.Lr)(e),h=g.className,y=g.orientation,b=void 0===y?"horizontal":y,x=g.__css,N=u(g,G),_={vertical:{borderLeftWidth:n||c||m||"1px",height:"100%"},horizontal:{borderBottomWidth:l||o||m||"1px",width:"100%"}};return s.createElement(t.m$.hr,p({ref:a,"aria-orientation":b},N,{__css:p({},v,{border:"0",borderColor:f,borderStyle:d},_[b],x),className:(0,i.cx)("chakra-divider",h)}))}));i.Ts&&(W.displayName="Divider");var L=["direction","align","justify","wrap","basis","grow","shrink"],B=(0,t.Gp)((function(e,a){var r=e.direction,n=e.align,i=e.justify,l=e.wrap,o=e.basis,c=e.grow,m=e.shrink,d=u(e,L),f={display:"flex",flexDirection:r,alignItems:n,justifyContent:i,flexWrap:l,flexBasis:o,flexGrow:c,flexShrink:m};return s.createElement(t.m$.div,p({ref:a,__css:f},d))}));i.Ts&&(B.displayName="Flex");var $=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],j=(0,t.Gp)((function(e,a){var r=e.templateAreas,n=e.gap,i=e.rowGap,l=e.columnGap,o=e.column,c=e.row,m=e.autoFlow,d=e.autoRows,f=e.templateRows,v=e.autoColumns,g=e.templateColumns,h=u(e,$),y={display:"grid",gridTemplateAreas:r,gridGap:n,gridRowGap:i,gridColumnGap:l,gridAutoColumns:v,gridColumn:o,gridRow:c,gridAutoFlow:m,gridAutoRows:d,gridTemplateRows:f,gridTemplateColumns:g};return s.createElement(t.m$.div,p({ref:a,__css:y},h))}));i.Ts&&(j.displayName="Grid");var I=["className"],O=(0,t.Gp)((function(e,a){var r=(0,t.mq)("Heading",e),n=(0,t.Lr)(e);n.className;var l=u(n,I);return s.createElement(t.m$.h2,p({ref:a,className:(0,i.cx)("chakra-heading",e.className)},l,{__css:r}))}));i.Ts&&(O.displayName="Heading");var R=["className"],A=(0,t.Gp)((function(e,a){var r=(0,t.mq)("Kbd",e),n=(0,t.Lr)(e),l=n.className,o=u(n,R);return s.createElement(t.m$.kbd,p({ref:a,className:(0,i.cx)("chakra-kbd",l)},o,{__css:p({fontFamily:"mono"},r)}))}));i.Ts&&(A.displayName="Kbd");var D=["className","isExternal"],q=(0,t.Gp)((function(e,a){var r=(0,t.mq)("Link",e),n=(0,t.Lr)(e),l=n.className,o=n.isExternal,c=u(n,D);return s.createElement(t.m$.a,p({target:o?"_blank":void 0,rel:o?"noopener":void 0,ref:a,className:(0,i.cx)("chakra-link",l)},c,{__css:r}))}));i.Ts&&(q.displayName="Link");var z=["children","styleType","stylePosition","spacing"],X=["as"],M=["as"],P=(0,d.kr)({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in a `<*List />` "}),F=P[0],H=P[1],Q=(0,t.Gp)((function(e,a){var r,n=(0,t.jC)("List",e),i=(0,t.Lr)(e),l=i.children,o=i.styleType,c=void 0===o?"none":o,m=i.stylePosition,f=i.spacing,v=u(i,z),g=(0,d.WR)(l),h=f?((r={})["& > *:not(style) ~ *:not(style)"]={mt:f},r):{};return s.createElement(F,{value:n},s.createElement(t.m$.ul,p({ref:a,listStyleType:c,listStylePosition:m,role:"list",__css:p({},n.container,h)},v),g))}));i.Ts&&(Q.displayName="List");var Y=(0,t.Gp)((function(e,a){e.as;var r=u(e,X);return s.createElement(Q,p({ref:a,as:"ol",styleType:"decimal",marginStart:"1em"},r))}));i.Ts&&(Y.displayName="OrderedList");var V=(0,t.Gp)((function(e,a){e.as;var r=u(e,M);return s.createElement(Q,p({ref:a,as:"ul",styleType:"initial",marginStart:"1em"},r))}));i.Ts&&(V.displayName="UnorderedList");var K=(0,t.Gp)((function(e,a){var r=H();return s.createElement(t.m$.li,p({ref:a},e,{__css:r.item}))}));i.Ts&&(K.displayName="ListItem");var U=(0,t.Gp)((function(e,a){var r=H();return s.createElement(m,p({ref:a,role:"presentation"},e,{__css:r.icon}))}));i.Ts&&(U.displayName="ListIcon");var J=["columns","spacingX","spacingY","spacing","minChildWidth"],Z=(0,t.Gp)((function(e,a){var r,t,n=e.columns,l=e.spacingX,o=e.spacingY,c=e.spacing,m=e.minChildWidth,d=u(e,J),f=m?(t=m,(0,i.XQ)(t,(function(e){return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax("+(a=e,((0,i.hj)(a)?a+"px":a)+", 1fr))");var a}))):(r=n,(0,i.XQ)(r,(function(e){return(0,i.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return s.createElement(j,p({ref:a,gap:c,columnGap:l,rowGap:o,templateColumns:f},d))}));i.Ts&&(Z.displayName="SimpleGrid");var ee=(0,t.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.Ts&&(ee.displayName="Spacer");var ae="& > *:not(style) ~ *:not(style)";var re=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],te=function(e){return s.createElement(t.m$.div,p({className:"chakra-stack__item"},e,{__css:p({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},ne=(0,t.Gp)((function(e,a){var r,n=e.isInline,l=e.direction,o=e.align,c=e.justify,m=e.spacing,f=void 0===m?"0.5rem":m,v=e.wrap,g=e.children,h=e.divider,y=e.className,b=e.shouldWrapChildren,x=u(e,re),N=n?"row":null!=l?l:"column",_=s.useMemo((function(){return function(e){var a,r=e.spacing,t=e.direction,n={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return(a={flexDirection:t})[ae]=(0,i.XQ)(t,(function(e){return n[e]})),a}({direction:N,spacing:f})}),[N,f]),k=s.useMemo((function(){return function(e){var a=e.spacing,r=e.direction,t={column:{my:a,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:a,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:a,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:a,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,i.XQ)(r,(function(e){return t[e]}))}}({spacing:f,direction:N})}),[f,N]),w=!!h,E=!b&&!w,T=(0,d.WR)(g),S=E?T:T.map((function(e,a){var r="undefined"!==typeof e.key?e.key:a,t=a+1===T.length,n=b?s.createElement(te,{key:r},e):e;if(!w)return n;var i=t?null:s.cloneElement(h,{__css:k});return s.createElement(s.Fragment,{key:r},n,i)})),C=(0,i.cx)("chakra-stack",y);return s.createElement(t.m$.div,p({ref:a,display:"flex",alignItems:o,justifyContent:c,flexDirection:_.flexDirection,flexWrap:v,className:C,__css:w?{}:(r={},r[ae]=_[ae],r)},x),S)}));i.Ts&&(ne.displayName="Stack");var ie=(0,t.Gp)((function(e,a){return s.createElement(ne,p({align:"center"},e,{direction:"row",ref:a}))}));i.Ts&&(ie.displayName="HStack");var se=(0,t.Gp)((function(e,a){return s.createElement(ne,p({align:"center"},e,{direction:"column",ref:a}))}));i.Ts&&(se.displayName="VStack");var le=["className","align","decoration","casing"],oe=(0,t.Gp)((function(e,a){var r=(0,t.mq)("Text",e),n=(0,t.Lr)(e);n.className,n.align,n.decoration,n.casing;var l=u(n,le),o=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return s.createElement(t.m$.p,p({ref:a,className:(0,i.cx)("chakra-text",e.className)},o,l,{__css:r}))}));i.Ts&&(oe.displayName="Text");var ce=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],me=["className"];function de(e){return"number"===typeof e?e+"px":e}var pe=(0,t.Gp)((function(e,a){var r=e.spacing,l=void 0===r?"0.5rem":r,o=e.spacingX,c=e.spacingY,m=e.children,d=e.justify,f=e.direction,v=e.align,g=e.className,h=e.shouldWrapChildren,y=u(e,ce),b=s.useMemo((function(){var e={spacingX:o,spacingY:c},a=e.spacingX,r=void 0===a?l:a,t=e.spacingY,s=void 0===t?l:t;return{"--chakra-wrap-x-spacing":function(e){return(0,i.XQ)(r,(function(a){return de((0,n.fr)("space",a)(e))}))},"--chakra-wrap-y-spacing":function(e){return(0,i.XQ)(s,(function(a){return de((0,n.fr)("space",a)(e))}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:d,alignItems:v,flexDirection:f,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[l,o,c,d,v,f]),x=h?s.Children.map(m,(function(e,a){return s.createElement(ue,{key:a},e)})):m;return s.createElement(t.m$.div,p({ref:a,className:(0,i.cx)("chakra-wrap",g),overflow:"hidden"},y),s.createElement(t.m$.ul,{className:"chakra-wrap__list",__css:b},x))}));i.Ts&&(pe.displayName="Wrap");var ue=(0,t.Gp)((function(e,a){var r=e.className,n=u(e,me);return s.createElement(t.m$.li,p({ref:a,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",r)},n))}));i.Ts&&(ue.displayName="WrapItem")}}]);
//# sourceMappingURL=517.dac8df46.chunk.js.map