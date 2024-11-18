import{d as Z,j as r,e as We,g as De,h as ke,f as M,u as _,a as D,B as R,c as T,r as U,p as he,U as Le,T as Fe,L as Me,i as oe,k as ze,l as V,m as $e,n as ye,o as Te,q as qe,s as Be,b as Oe}from"./index-DWCAuwA5.js";function Ve(s=null){const e=Z.createContext(s);return[({children:n,value:i})=>r.jsx(e.Provider,{value:i,children:n}),()=>Z.useContext(e)]}function Ze({value:s,defaultValue:e,finalValue:t,onChange:o=()=>{}}){const[n,i]=Z.useState(e!==void 0?e:t),a=(l,...m)=>{i(l),o==null||o(l,...m)};return s!==void 0?[s,o,!0]:[n,a,!1]}function Ue({classNames:s,styles:e,props:t,stylesCtx:o}){const n=We();return{resolvedClassNames:De({theme:n,classNames:s,props:t,stylesCtx:o||void 0}),resolvedStyles:ke({theme:n,styles:e,props:t,stylesCtx:o||void 0})}}var ne={root:"m_8d3f4000",icon:"m_8d3afb97",loader:"m_302b9fb1",group:"m_1a0f1b21"};const Ce={orientation:"horizontal"},Ge=T((s,{borderWidth:e})=>({group:{"--ai-border-width":U(e)}})),fe=M((s,e)=>{const t=_("ActionIconGroup",Ce,s),{className:o,style:n,classNames:i,styles:a,unstyled:l,orientation:m,vars:c,borderWidth:b,variant:v,mod:g,...h}=_("ActionIconGroup",Ce,s),d=D({name:"ActionIconGroup",props:t,classes:ne,className:o,style:n,classNames:i,styles:a,unstyled:l,vars:c,varsResolver:Ge,rootSelector:"group"});return r.jsx(R,{...d("group"),ref:e,variant:v,mod:[{"data-orientation":m},g],role:"group",...h})});fe.classes=ne;fe.displayName="@mantine/core/ActionIconGroup";const Je={},Xe=T((s,{size:e,radius:t,variant:o,gradient:n,color:i,autoContrast:a})=>{const l=s.variantColorResolver({color:i||s.primaryColor,theme:s,gradient:n,variant:o||"filled",autoContrast:a});return{root:{"--ai-size":oe(e,"ai-size"),"--ai-radius":t===void 0?void 0:ze(t),"--ai-bg":i||o?l.background:void 0,"--ai-hover":i||o?l.hover:void 0,"--ai-hover-color":i||o?l.hoverColor:void 0,"--ai-color":l.color,"--ai-bd":i||o?l.border:void 0}}}),ie=he((s,e)=>{const t=_("ActionIcon",Je,s),{className:o,unstyled:n,variant:i,classNames:a,styles:l,style:m,loading:c,loaderProps:b,size:v,color:g,radius:h,__staticSelector:d,gradient:y,vars:f,children:w,disabled:u,"data-disabled":p,autoContrast:x,mod:z,...C}=t,N=D({name:["ActionIcon",d],props:t,className:o,style:m,classes:ne,classNames:a,styles:l,unstyled:n,vars:f,varsResolver:Xe});return r.jsxs(Le,{...N("root",{active:!u&&!c&&!p}),...C,unstyled:n,variant:i,size:v,disabled:u||c,ref:e,mod:[{loading:c,disabled:u||p},z],children:[r.jsx(Fe,{mounted:!!c,transition:"slide-down",duration:150,children:A=>r.jsx(R,{component:"span",...N("loader",{style:A}),"aria-hidden":!0,children:r.jsx(Me,{color:"var(--ai-color)",size:"calc(var(--ai-size) * 0.55)",...b})})}),r.jsx(R,{component:"span",mod:{loading:c},...N("icon"),children:w})]})});ie.classes=ne;ie.displayName="@mantine/core/ActionIcon";ie.Group=fe;const[Ke,ae]=Ve({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var P={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};const we={},Ye=T((s,{size:e})=>({description:{"--input-description-size":e===void 0?void 0:`calc(${V(e)} - ${U(2)})`}})),le=M((s,e)=>{const t=_("InputDescription",we,s),{classNames:o,className:n,style:i,styles:a,unstyled:l,vars:m,size:c,__staticSelector:b,__inheritStyles:v=!0,variant:g,...h}=_("InputDescription",we,t),d=ae(),y=D({name:["InputWrapper",b],props:t,classes:P,className:n,style:i,classNames:o,styles:a,unstyled:l,rootSelector:"description",vars:m,varsResolver:Ye}),f=v&&(d==null?void 0:d.getStyles)||y;return r.jsx(R,{component:"p",ref:e,variant:g,size:c,...f("description",d!=null&&d.getStyles?{className:n,style:i}:void 0),...h})});le.classes=P;le.displayName="@mantine/core/InputDescription";const Qe={},He=T((s,{size:e})=>({error:{"--input-error-size":e===void 0?void 0:`calc(${V(e)} - ${U(2)})`}})),ce=M((s,e)=>{const t=_("InputError",Qe,s),{classNames:o,className:n,style:i,styles:a,unstyled:l,vars:m,size:c,__staticSelector:b,__inheritStyles:v=!0,variant:g,...h}=t,d=D({name:["InputWrapper",b],props:t,classes:P,className:n,style:i,classNames:o,styles:a,unstyled:l,rootSelector:"error",vars:m,varsResolver:He}),y=ae(),f=v&&(y==null?void 0:y.getStyles)||d;return r.jsx(R,{component:"p",ref:e,variant:g,size:c,...f("error",y!=null&&y.getStyles?{className:n,style:i}:void 0),...h})});ce.classes=P;ce.displayName="@mantine/core/InputError";const je={labelElement:"label"},es=T((s,{size:e})=>({label:{"--input-label-size":V(e),"--input-asterisk-color":void 0}})),de=M((s,e)=>{const t=_("InputLabel",je,s),{classNames:o,className:n,style:i,styles:a,unstyled:l,vars:m,labelElement:c,size:b,required:v,htmlFor:g,onMouseDown:h,children:d,__staticSelector:y,variant:f,mod:w,...u}=_("InputLabel",je,t),p=D({name:["InputWrapper",y],props:t,classes:P,className:n,style:i,classNames:o,styles:a,unstyled:l,rootSelector:"label",vars:m,varsResolver:es}),x=ae(),z=(x==null?void 0:x.getStyles)||p;return r.jsxs(R,{...z("label",x!=null&&x.getStyles?{className:n,style:i}:void 0),component:c,variant:f,size:b,ref:e,htmlFor:c==="label"?g:void 0,mod:[{required:v},w],onMouseDown:C=>{h==null||h(C),!C.defaultPrevented&&C.detail>1&&C.preventDefault()},...u,children:[d,v&&r.jsx("span",{...z("required"),"aria-hidden":!0,children:" *"})]})});de.classes=P;de.displayName="@mantine/core/InputLabel";const Ne={},Ie=M((s,e)=>{const t=_("InputPlaceholder",Ne,s),{classNames:o,className:n,style:i,styles:a,unstyled:l,vars:m,__staticSelector:c,variant:b,error:v,mod:g,...h}=_("InputPlaceholder",Ne,t),d=D({name:["InputPlaceholder",c],props:t,classes:P,className:n,style:i,classNames:o,styles:a,unstyled:l,rootSelector:"placeholder"});return r.jsx(R,{...d("placeholder"),mod:[{error:!!v},g],component:"span",variant:b,ref:e,...h})});Ie.classes=P;Ie.displayName="@mantine/core/InputPlaceholder";function ss(s,{hasDescription:e,hasError:t}){const o=s.findIndex(m=>m==="input"),n=s.slice(0,o),i=s.slice(o+1),a=e&&n.includes("description")||t&&n.includes("error");return{offsetBottom:e&&i.includes("description")||t&&i.includes("error"),offsetTop:a}}const ts={labelElement:"label",inputContainer:s=>s,inputWrapperOrder:["label","description","input","error"]},os=T((s,{size:e})=>({label:{"--input-label-size":V(e),"--input-asterisk-color":void 0},error:{"--input-error-size":e===void 0?void 0:`calc(${V(e)} - ${U(2)})`},description:{"--input-description-size":e===void 0?void 0:`calc(${V(e)} - ${U(2)})`}})),be=M((s,e)=>{const t=_("InputWrapper",ts,s),{classNames:o,className:n,style:i,styles:a,unstyled:l,vars:m,size:c,variant:b,__staticSelector:v,inputContainer:g,inputWrapperOrder:h,label:d,error:y,description:f,labelProps:w,descriptionProps:u,errorProps:p,labelElement:x,children:z,withAsterisk:C,id:N,required:A,__stylesApiProps:q,mod:B,...G}=t,k=D({name:["InputWrapper",v],props:q||t,classes:P,className:n,style:i,classNames:o,styles:a,unstyled:l,vars:m,varsResolver:os}),$={size:c,variant:b,__staticSelector:v},E=$e(N),Q=typeof C=="boolean"?C:A,J=(p==null?void 0:p.id)||`${E}-error`,X=(u==null?void 0:u.id)||`${E}-description`,I=E,O=!!y&&typeof y!="boolean",S=!!f,K=`${O?J:""} ${S?X:""}`,L=K.trim().length>0?K.trim():void 0,Y=(w==null?void 0:w.id)||`${E}-label`,pe=d&&r.jsx(de,{labelElement:x,id:Y,htmlFor:I,required:Q,...$,...w,children:d},"label"),H=S&&r.jsx(le,{...u,...$,size:(u==null?void 0:u.size)||$.size,id:(u==null?void 0:u.id)||X,children:f},"description"),ee=r.jsx(Z.Fragment,{children:g(z)},"input"),ue=O&&Z.createElement(ce,{...p,...$,size:(p==null?void 0:p.size)||$.size,key:"error",id:(p==null?void 0:p.id)||J},y),se=h.map(te=>{switch(te){case"label":return pe;case"input":return ee;case"description":return H;case"error":return ue;default:return null}});return r.jsx(Ke,{value:{getStyles:k,describedBy:L,inputId:I,labelId:Y,...ss(h,{hasDescription:S,hasError:O})},children:r.jsx(R,{ref:e,variant:b,size:c,mod:[{error:!!y},B],...k("root"),...G,children:se})})});be.classes=P;be.displayName="@mantine/core/InputWrapper";const rs={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},ns=T((s,e,t)=>({wrapper:{"--input-margin-top":t.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":t.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":oe(e.size,"input-height"),"--input-fz":V(e.size),"--input-radius":e.radius===void 0?void 0:ze(e.radius),"--input-left-section-width":e.leftSectionWidth!==void 0?U(e.leftSectionWidth):void 0,"--input-right-section-width":e.rightSectionWidth!==void 0?U(e.rightSectionWidth):void 0,"--input-padding-y":e.multiline?oe(e.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":e.leftSectionPointerEvents,"--input-right-section-pointer-events":e.rightSectionPointerEvents}})),j=he((s,e)=>{const t=_("Input",rs,s),{classNames:o,className:n,style:i,styles:a,unstyled:l,required:m,__staticSelector:c,__stylesApiProps:b,size:v,wrapperProps:g,error:h,disabled:d,leftSection:y,leftSectionProps:f,leftSectionWidth:w,rightSection:u,rightSectionProps:p,rightSectionWidth:x,rightSectionPointerEvents:z,leftSectionPointerEvents:C,variant:N,vars:A,pointer:q,multiline:B,radius:G,id:k,withAria:$,withErrorStyles:E,mod:Q,inputSize:J,...X}=t,{styleProps:I,rest:O}=ye(X),S=ae(),K={offsetBottom:S==null?void 0:S.offsetBottom,offsetTop:S==null?void 0:S.offsetTop},L=D({name:["Input",c],props:b||t,classes:P,className:n,style:i,classNames:o,styles:a,unstyled:l,stylesCtx:K,rootSelector:"wrapper",vars:A,varsResolver:ns}),Y=$?{required:m,disabled:d,"aria-invalid":!!h,"aria-describedby":S==null?void 0:S.describedBy,id:(S==null?void 0:S.inputId)||k}:{};return r.jsxs(R,{...L("wrapper"),...I,...g,mod:[{error:!!h&&E,pointer:q,disabled:d,multiline:B,"data-with-right-section":!!u,"data-with-left-section":!!y},Q],variant:N,size:v,children:[y&&r.jsx("div",{...f,"data-position":"left",...L("section",{className:f==null?void 0:f.className,style:f==null?void 0:f.style}),children:y}),r.jsx(R,{component:"input",...O,...Y,ref:e,required:m,mod:{disabled:d,error:!!h&&E},variant:N,__size:J,...L("input")}),u&&r.jsx("div",{...p,"data-position":"right",...L("section",{className:p==null?void 0:p.className,style:p==null?void 0:p.style}),children:u})]})});j.classes=P;j.Wrapper=be;j.Label=de;j.Error=ce;j.Description=le;j.Placeholder=Ie;j.displayName="@mantine/core/Input";function is(s,e,t){const o=_(s,e,t),{label:n,description:i,error:a,required:l,classNames:m,styles:c,className:b,unstyled:v,__staticSelector:g,__stylesApiProps:h,errorProps:d,labelProps:y,descriptionProps:f,wrapperProps:w,id:u,size:p,style:x,inputContainer:z,inputWrapperOrder:C,withAsterisk:N,variant:A,vars:q,mod:B,...G}=o,{styleProps:k,rest:$}=ye(G),E={label:n,description:i,error:a,required:l,classNames:m,className:b,__staticSelector:g,__stylesApiProps:h||o,errorProps:d,labelProps:y,descriptionProps:f,unstyled:v,styles:c,size:p,style:x,inputContainer:z,inputWrapperOrder:C,withAsterisk:N,variant:A,id:u,mod:B,...w};return{...$,classNames:m,styles:c,unstyled:v,wrapperProps:{...E,...k},inputProps:{required:l,classNames:m,styles:c,unstyled:v,size:p,__staticSelector:g,__stylesApiProps:h||o,error:a,variant:A,id:u}}}const as={__staticSelector:"InputBase",withAria:!0},re=he((s,e)=>{const{inputProps:t,wrapperProps:o,...n}=is("InputBase",as,s);return r.jsx(j.Wrapper,{...o,children:r.jsx(j,{...t,...n,ref:e})})});re.classes={...j.classes,...j.Wrapper.classes};re.displayName="@mantine/core/InputBase";const ls=({reveal:s})=>r.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:r.jsx("path",{d:s?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})});var ve={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};const cs={visibilityToggleIcon:ls},ds=T((s,{size:e})=>({root:{"--psi-icon-size":oe(e,"psi-icon-size"),"--psi-button-size":oe(e,"psi-button-size")}})),ge=M((s,e)=>{const t=_("PasswordInput",cs,s),{classNames:o,className:n,style:i,styles:a,unstyled:l,vars:m,required:c,error:b,leftSection:v,disabled:g,id:h,variant:d,inputContainer:y,description:f,label:w,size:u,errorProps:p,descriptionProps:x,labelProps:z,withAsterisk:C,inputWrapperOrder:N,wrapperProps:A,radius:q,rightSection:B,rightSectionWidth:G,rightSectionPointerEvents:k,leftSectionWidth:$,visible:E,defaultVisible:Q,onVisibilityChange:J,visibilityToggleIcon:X,visibilityToggleButtonProps:I,rightSectionProps:O,leftSectionProps:S,leftSectionPointerEvents:K,withErrorStyles:L,mod:Y,...pe}=t,H=$e(h),[ee,ue]=Ze({value:E,defaultValue:Q,finalValue:!1,onChange:J}),se=()=>ue(!ee),te=D({name:"PasswordInput",classes:ve,props:t,className:n,style:i,classNames:o,styles:a,unstyled:l,vars:m,varsResolver:ds}),{resolvedClassNames:me,resolvedStyles:_e}=Ue({classNames:o,styles:a,props:t}),{styleProps:Ee,rest:xe}=ye(pe),Ae=X,Re=r.jsx(ie,{...te("visibilityToggle"),disabled:g,radius:q,"aria-hidden":!I,tabIndex:-1,...I,variant:"subtle",color:"gray",unstyled:l,onTouchEnd:W=>{var F;W.preventDefault(),(F=I==null?void 0:I.onTouchEnd)==null||F.call(I,W),se()},onMouseDown:W=>{var F;W.preventDefault(),(F=I==null?void 0:I.onMouseDown)==null||F.call(I,W),se()},onKeyDown:W=>{var F;(F=I==null?void 0:I.onKeyDown)==null||F.call(I,W),W.key===" "&&(W.preventDefault(),se())},children:r.jsx(Ae,{reveal:ee})});return r.jsx(j.Wrapper,{required:c,id:H,label:w,error:b,description:f,size:u,classNames:me,styles:_e,__staticSelector:"PasswordInput",errorProps:p,descriptionProps:x,unstyled:l,withAsterisk:C,inputWrapperOrder:N,inputContainer:y,variant:d,labelProps:{...z,htmlFor:H},mod:Y,...te("root"),...Ee,...A,children:r.jsx(j,{component:"div",error:b,leftSection:v,size:u,classNames:{...me,input:Te(ve.input,me.input)},styles:_e,radius:q,disabled:g,__staticSelector:"PasswordInput",rightSectionWidth:G,rightSection:B??Re,variant:d,unstyled:l,leftSectionWidth:$,rightSectionPointerEvents:k||"all",rightSectionProps:O,leftSectionProps:S,leftSectionPointerEvents:K,withAria:!1,withErrorStyles:L,children:r.jsx("input",{required:c,"data-invalid":!!b||void 0,"data-with-left-section":!!v||void 0,...te("innerInput"),disabled:g,id:H,ref:e,...xe,autoComplete:xe.autoComplete||"off",type:ee?"text":"password"})})})});ge.classes={...re.classes,...ve};ge.displayName="@mantine/core/PasswordInput";const ps={},Se=M((s,e)=>{const t=_("TextInput",ps,s);return r.jsx(re,{component:"input",ref:e,...t,__staticSelector:"TextInput"})});Se.classes=re.classes;Se.displayName="@mantine/core/TextInput";const us="https://lxlvmpbsqfiqjdurdwig.supabase.co",ms="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bHZtcGJzcWZpcWpkdXJkd2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDI4NTMsImV4cCI6MjA0NzA3ODg1M30.EIRPhE0e2_0Azy6vT1YihblhqaFf9tU4DDvA3hQAW5k",vs=qe(us,ms),hs={backgroundColor:"#F59F00",marginTop:"40px",color:"black"},Pe={width:"690px",marginTop:"55px",color:"#364FC7"};function ys(){const[s,e]=Z.useState(""),[t,o]=Z.useState("");async function n(){console.log("sending to supabase",s,t);const{data:a,error:l}=await vs.auth.signInWithPassword({email:s,password:t});console.log("data",a),console.log("error",l)}const i=a=>{a.preventDefault(),console.log(s,t),n()};return r.jsxs("div",{children:[r.jsx("h1",{style:{color:"#364FC7"},children:"Login"}),r.jsxs("form",{children:[r.jsx(Se,{size:"xl",radius:"xs",label:"Mail",placeholder:"cph-business mail",type:"text",value:s,onChange:a=>e(a.target.value),style:Pe}),r.jsx(ge,{size:"xl",radius:"xs",label:"Adgangskode",placeholder:"Adgangskode",value:t,onChange:a=>o(a.target.value),type:"password",style:Pe}),r.jsx(Be,{type:"submit",onClick:i,variant:"filled",color:"#F08C00",size:"xl",radius:"md",style:hs,children:"LOGIN"})]})]})}const gs=Oe("/login")({component:Is}),fs={display:"flex",marginLeft:"138px",marginRight:"612px",marginTop:"181px",backgroundColor:"#D0EBFF"};function Is(){return r.jsx("div",{children:r.jsxs("container",{style:fs,children:[r.jsx(ys,{}),r.jsx("img",{style:{width:"449px",height:"427px",marginTop:"15px"},src:"../../public/img/login-illustation.png",alt:"Illustation"})]})})}export{gs as Route};
