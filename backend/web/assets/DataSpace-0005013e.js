import{j as T,r as g,I as j,e as C,L as q,N as f,l as s,n as l,s as u,c as r,q as t,aD as G,x as _,y as m,u as p,F as h,D as w,p as b,aE as P,v as z}from"./index-da6e4bc1.js";import{u as H}from"./userDatabase-069560a1.js";import{d as v}from"./database-3244ebc1.js";const J={class:"dataspace-container"},K={key:1},Q={key:2},W={key:3},ea={__name:"DataSpace",setup(X){const{t:a}=T(),x=g(!0),D=j(),N=H(),d=C({columns:[{name:a("workspace.dataSpace.database_name"),dataIndex:"name",key:"name"},{title:a("common.status"),dataIndex:"status",key:"status",width:"200px"},{title:a("common.tags"),key:"tags",dataIndex:"tags",width:"200px"},{title:a("common.action"),key:"action",width:"200px"}],data:[],hoverRowVid:null,customRow:n=>({style:{cursor:"pointer"},onClick:async e=>{(e.target.classList.contains("ant-table-cell")||e.target.classList.contains("database-title"))&&await D.push(`/data/${n.vid}`)},onMouseenter:e=>{d.hoverRowVid=n.vid},onMouseleave:e=>{d.hoverRowVid=null}})}),y=async()=>{const n=await v("list",{});n.status==200?(N.setUserDatabases(n.data),d.data=n.data.map(e=>({...e,color:G[e.status],tags:[]})),x.value=!1):f.error(n.msg)};q(async()=>{await y()});const o=C({open:g(!1),creating:g(!1),create:async()=>{o.creating=!0,(await v("create",{name:o.databaseName})).status===200?f.success(a("workspace.dataSpace.create_success")):f.error(a("workspace.dataSpace.create_failed")),await y(),o.creating=!1,o.open=!1}}),R=async n=>{(await v("delete",{vid:n})).status===200?f.success(a("workspace.dataSpace.delete_success")):f.error(a("workspace.dataSpace.delete_failed")),await y()};return(n,e)=>{const L=s("a-button"),I=s("a-input"),V=s("a-form-item"),M=s("a-modal"),U=s("a-typography-text"),S=s("a-tag"),B=s("a-typography-link"),$=s("a-popconfirm"),E=s("a-table"),O=s("a-card"),A=s("a-col"),F=s("a-row");return l(),u("div",J,[r(F,{align:"center",gutter:[16,16]},{default:t(()=>[r(A,{xl:16,lg:18,md:20,sm:22,xs:24},{default:t(()=>[r(O,{loading:x.value},{extra:t(()=>[r(L,{type:"primary",onClick:e[0]||(e[0]=c=>o.open=!0)},{default:t(()=>[_(m(p(a)("workspace.dataSpace.create")),1)]),_:1}),r(M,{open:o.open,"onUpdate:open":e[2]||(e[2]=c=>o.open=c),title:p(a)("workspace.dataSpace.create"),onOk:o.create,confirmLoading:o.creating},{default:t(()=>[r(V,{label:p(a)("workspace.dataSpace.database_name")},{default:t(()=>[r(I,{value:o.databaseName,"onUpdate:value":e[1]||(e[1]=c=>o.databaseName=c)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["open","title","onOk","confirmLoading"])]),default:t(()=>[r(E,{columns:d.columns,customRow:d.customRow,"data-source":d.data},{headerCell:t(({column:c})=>[c.key==="name"?(l(),u(h,{key:0},[_(m(p(a)("workspace.dataSpace.database_name")),1)],64)):w("",!0)]),bodyCell:t(({column:c,record:i})=>[c.key==="name"?(l(),b(U,{key:0,class:"database-title"},{default:t(()=>[_(m(i.name),1)]),_:2},1024)):c.key==="status"?(l(),u("span",K,[r(S,{color:i.color},{default:t(()=>[i.status==="CREATING"?(l(),b(p(P),{key:0})):w("",!0),_(" "+m(p(a)(`workspace.dataSpace.status_${i.status.toLowerCase()}`)),1)]),_:2},1032,["color"])])):c.key==="tags"?(l(),u("span",Q,[(l(!0),u(h,null,z(i.tags,k=>(l(),b(S,{key:k},{default:t(()=>[_(m(k.toUpperCase()),1)]),_:2},1024))),128))])):c.key==="action"?(l(),u("span",W,[r($,{title:p(a)("workspace.dataSpace.delete_confirm"),onConfirm:k=>R(i.vid)},{default:t(()=>[r(B,{type:"danger"},{default:t(()=>[_(m(p(a)("common.delete")),1)]),_:1})]),_:2},1032,["title","onConfirm"])])):w("",!0)]),_:1},8,["columns","customRow","data-source"])]),_:1},8,["loading"])]),_:1})]),_:1})])}}};export{ea as default};
