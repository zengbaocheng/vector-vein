import{U as ee,r as j,a5 as te,a6 as ae,q as R,b as le,D as oe,P as d,e as u,f as C,c as t,x as e,X as h,u as l,R as c,H as n,K as i,F as q,I as b,G as se}from"./index-52f19034.js";import{_ as re}from"./UploaderFieldUse-1cc806ad.js";import{_ as de}from"./QuestionPopover-b389e778.js";import{d as ne,a as ue}from"./database-0a67dc78.js";import{_ as ce}from"./_plugin-vue_export-helper-c27b6911.js";import{C as _e}from"./CheckOutlined-29035a12.js";import{C as ie,D as be}from"./DatabaseOutlined-3e0f1365.js";import{F as me}from"./FileOutlined-4973362b.js";import{C as pe}from"./CloseOutlined-ea05eb73.js";const fe={key:0,class:"loading-container"},ke={key:1,class:"dataspace-container"},ve={href:"objectInfo.source_url",target:"_blank"},je={__name:"DatabaseObjectCreate",setup(we){const{t:a}=ee(),w=j(!0),N=te(),P=ae(),O=N.params.databaseId,g=j({}),o=R({add_method:"url",use_oversea_crawler:!1,source_url:"",files:[],title:"",content:""}),_=R({split_method:"general",chunk_length:1e3,delimiter:"\\n",remove_url_and_email:!1}),m=j(0),A=j([{title:a("workspace.databaseObjectCreate.add_object"),content:"First-content"},{title:a("workspace.databaseObjectCreate.process_rules"),content:"Second-content"},{title:a("workspace.databaseObjectCreate.finish"),content:"Last-content"}]),H=le(()=>{if(m.value==0)return o.add_method=="url"?o.source_url=="":o.add_method=="files"?o.files.length==0:o.title==""||o.content=="";m.value==1}),z=async()=>{const v=await ne("get",{vid:O});v.status==200?g.value=v.data:h.error(v.msg)};oe(async()=>{w.value=!0,await z(),w.value=!1});const y=j(!1),E=async()=>{if(o.add_method=="text"&&o.content.length==0){h.error(a("workspace.databaseObjectCreate.content_empty"));return}y.value=!0,(await ue("create",{vid:O,...o,process_rules:_})).status===200?h.success(a("workspace.databaseObjectCreate.create_success")):h.error(a("workspace.databaseObjectCreate.create_failed")),y.value=!1,await P.push(`/data/${O}`)};return(v,s)=>{const G=d("a-spin"),$=d("router-link"),x=d("a-breadcrumb-item"),K=d("a-breadcrumb"),U=d("a-col"),L=d("a-steps"),k=d("a-radio-button"),V=d("a-radio-group"),p=d("a-form-item"),S=d("a-checkbox"),D=d("a-input"),M=d("a-textarea"),B=d("a-form"),T=d("a-input-number"),f=d("a-descriptions-item"),X=d("a-list-item-meta"),J=d("a-list-item"),Q=d("a-list"),W=d("a-descriptions"),F=d("a-row"),I=d("a-button"),Y=d("a-space"),Z=d("a-card");return w.value?(u(),C("div",fe,[t(G)])):(u(),C("div",ke,[t(F,{justify:"center",gutter:[16,16]},{default:e(()=>[t(U,{xl:16,lg:18,md:20,sm:22,xs:24},{default:e(()=>[t(K,null,{default:e(()=>[t(x,null,{default:e(()=>[t($,{to:"/data"},{default:e(()=>[t(l(ie)),c(" "+n(l(a)("components.layout.basicHeader.data_space")),1)]),_:1})]),_:1}),t(x,null,{default:e(()=>[t($,{to:`/data/${g.value.vid}`},{default:e(()=>[t(l(be)),c(" "+n(g.value.name),1)]),_:1},8,["to"])]),_:1}),t(x,null,{default:e(()=>[c(n(l(a)("workspace.databaseObjectCreate.add_object")),1)]),_:1})]),_:1})]),_:1}),t(U,{xl:16,lg:18,md:20,sm:22,xs:24},{default:e(()=>[t(Z,{loading:w.value},{title:e(()=>[t(l(me)),c(" "+n(l(a)("workspace.databaseObjectCreate.add_object")),1)]),default:e(()=>[t(L,{current:m.value,items:A.value,style:{"margin-bottom":"30px"}},null,8,["current","items"]),m.value==0?(u(),i(B,{key:0,"label-col":{span:6}},{default:e(()=>[t(p,{label:l(a)("workspace.databaseObjectCreate.add_method")},{default:e(()=>[t(V,{value:o.add_method,"onUpdate:value":s[0]||(s[0]=r=>o.add_method=r)},{default:e(()=>[t(k,{value:"url"},{default:e(()=>[c(n(l(a)("workspace.databaseObjectCreate.add_method_url")),1)]),_:1}),t(k,{value:"files"},{default:e(()=>[c(n(l(a)("workspace.databaseObjectCreate.add_method_files")),1)]),_:1}),t(k,{value:"text"},{default:e(()=>[c(n(l(a)("workspace.databaseObjectCreate.add_method_text")),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),o.add_method=="url"?(u(),C(q,{key:0},[o.add_method=="url"?(u(),i(p,{key:0,label:l(a)("workspace.databaseObjectCreate.use_oversea_crawler")},{default:e(()=>[t(S,{checked:o.use_oversea_crawler,"onUpdate:checked":s[1]||(s[1]=r=>o.use_oversea_crawler=r)},null,8,["checked"])]),_:1},8,["label"])):b("",!0),t(p,{label:l(a)("workspace.databaseObjectCreate.object_source_url")},{default:e(()=>[t(D,{value:o.source_url,"onUpdate:value":s[2]||(s[2]=r=>o.source_url=r)},null,8,["value"])]),_:1},8,["label"])],64)):b("",!0),o.add_method=="files"?(u(),i(re,{key:1,modelValue:o.files,"onUpdate:modelValue":s[3]||(s[3]=r=>o.files=r),multiple:!0,style:{"margin-bottom":"30px"}},null,8,["modelValue"])):b("",!0),o.add_method=="text"?(u(),C(q,{key:2},[t(p,{label:l(a)("workspace.databaseObjectCreate.object_title")},{default:e(()=>[t(D,{value:o.title,"onUpdate:value":s[4]||(s[4]=r=>o.title=r)},null,8,["value"])]),_:1},8,["label"]),t(p,{label:l(a)("workspace.databaseObjectCreate.object_content")},{default:e(()=>[t(M,{value:o.content,"onUpdate:value":s[5]||(s[5]=r=>o.content=r),"auto-size":!0,"show-count":!0},null,8,["value"])]),_:1},8,["label"])],64)):b("",!0)]),_:1})):b("",!0),m.value==1?(u(),i(B,{key:1,"label-col":{span:6}},{default:e(()=>[t(p,{label:l(a)("workspace.databaseObjectCreate.split_method")},{default:e(()=>[t(V,{value:_.split_method,"onUpdate:value":s[6]||(s[6]=r=>_.split_method=r)},{default:e(()=>[t(k,{value:"general"},{default:e(()=>[c(n(l(a)("workspace.databaseObjectCreate.split_method_general")),1)]),_:1}),t(k,{value:"delimeter"},{default:e(()=>[c(n(l(a)("workspace.databaseObjectCreate.split_method_delimeter")),1)]),_:1}),t(k,{value:"markdown"},{default:e(()=>[c(n(l(a)("workspace.databaseObjectCreate.split_method_markdown")),1)]),_:1}),t(k,{value:"table"},{default:e(()=>[c(n(l(a)("workspace.databaseObjectCreate.split_method_table")),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),["delimeter","table"].includes(_.split_method)?b("",!0):(u(),i(p,{key:0},{label:e(()=>[c(n(l(a)("workspace.databaseObjectCreate.chunk_length"))+" ",1),t(de,{contents:[l(a)("workspace.databaseObjectCreate.question.chunk_length.1"),l(a)("workspace.databaseObjectCreate.question.chunk_length.2"),l(a)("workspace.databaseObjectCreate.question.chunk_length.3")]},null,8,["contents"])]),default:e(()=>[t(T,{value:_.chunk_length,"onUpdate:value":s[7]||(s[7]=r=>_.chunk_length=r)},null,8,["value"])]),_:1})),_.split_method=="delimeter"?(u(),i(p,{key:1,label:l(a)("workspace.databaseObjectCreate.delimiter")},{default:e(()=>[t(D,{value:_.delimiter,"onUpdate:value":s[8]||(s[8]=r=>_.delimiter=r),style:{width:"200px"}},null,8,["value"])]),_:1},8,["label"])):b("",!0),t(p,{label:l(a)("workspace.databaseObjectCreate.remove_url_and_email")},{default:e(()=>[t(S,{checked:_.remove_url_and_email,"onUpdate:checked":s[9]||(s[9]=r=>_.remove_url_and_email=r)},null,8,["checked"])]),_:1},8,["label"])]),_:1})):b("",!0),t(F,{align:"center",gutter:[16,16]},{default:e(()=>[t(U,{xl:16,md:24},{default:e(()=>[m.value==2?(u(),i(W,{key:0,bordered:""},{default:e(()=>[t(f,{label:l(a)("workspace.databaseObjectCreate.add_method"),span:3},{default:e(()=>[c(n(l(a)(`workspace.databaseObjectCreate.add_method_${o.add_method}`)),1)]),_:1},8,["label"]),o.add_method=="url"?(u(),i(f,{key:0,label:l(a)("workspace.databaseObjectCreate.object_source_url"),span:3},{default:e(()=>[se("a",ve,n(o.source_url),1)]),_:1},8,["label"])):b("",!0),o.add_method=="files"?(u(),i(f,{key:1,label:l(a)("workspace.databaseObjectCreate.object_files"),span:3},{default:e(()=>[t(Q,{dataSource:o.files},{renderItem:e(({item:r})=>[t(J,null,{default:e(()=>[t(X,{title:r},null,8,["title"])]),_:2},1024)]),_:1},8,["dataSource"])]),_:1},8,["label"])):b("",!0),o.add_method=="text"?(u(),i(f,{key:2,label:l(a)("workspace.databaseObjectCreate.object_title"),span:1},{default:e(()=>[c(n(o.title),1)]),_:1},8,["label"])):b("",!0),o.add_method=="text"?(u(),i(f,{key:3,label:l(a)("workspace.databaseObjectCreate.object_content"),span:2},{default:e(()=>[c(n(o.content),1)]),_:1},8,["label"])):b("",!0),t(f,{label:l(a)("workspace.databaseObjectCreate.split_method")},{default:e(()=>[c(n(l(a)(`workspace.databaseObjectCreate.split_method_${_.split_method}`)),1)]),_:1},8,["label"]),_.split_method!="delimeter"?(u(),i(f,{key:4,label:l(a)("workspace.databaseObjectCreate.chunk_length")},{default:e(()=>[c(n(_.chunk_length),1)]),_:1},8,["label"])):b("",!0),_.split_method=="delimeter"?(u(),i(f,{key:5,label:l(a)("workspace.databaseObjectCreate.delimiter")},{default:e(()=>[c(n(_.delimiter),1)]),_:1},8,["label"])):b("",!0),t(f,{label:l(a)("workspace.databaseObjectCreate.remove_url_and_email")},{default:e(()=>[_.remove_url_and_email?(u(),i(l(_e),{key:0})):(u(),i(l(pe),{key:1}))]),_:1},8,["label"])]),_:1})):b("",!0)]),_:1})]),_:1}),t(Y,{style:{float:"right"}},{default:e(()=>[t(I,{disabled:m.value==0,onClick:s[10]||(s[10]=r=>m.value-=1)},{default:e(()=>[c(n(l(a)("common.previous_step")),1)]),_:1},8,["disabled"]),m.value<2?(u(),i(I,{key:0,type:"primary",disabled:H.value,onClick:s[11]||(s[11]=r=>m.value+=1)},{default:e(()=>[c(n(l(a)("common.next_step")),1)]),_:1},8,["disabled"])):b("",!0),m.value==2?(u(),i(I,{key:1,type:"primary",loading:y.value,onClick:E},{default:e(()=>[c(n(l(a)("workspace.databaseObjectCreate.finish")),1)]),_:1},8,["loading"])):b("",!0)]),_:1})]),_:1},8,["loading"])]),_:1})]),_:1})]))}}},$e=ce(je,[["__scopeId","data-v-6623fed1"]]);export{$e as default};
