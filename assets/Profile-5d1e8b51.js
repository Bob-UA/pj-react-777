import{s as i,g as n,j as e,e as E,b as y,d as w,o as q,Q as B,r as Y}from"./index-1780ae76.js";import{u as J,B as _}from"./Button-63cf4852.js";import{t as G,C as Q,S as K,p as X}from"./DaySwitch.styled-ae05fe2e.js";import{c as Z,a as N,b as A,d as ee}from"./index.esm-a29ade9f.js";import{C as L}from"./ContainerStyled-bb0b3bf9.js";import{s as g}from"./sprite-446b26f4.js";import"./createClass-97638da9.js";const ie=i.form`
  padding-top: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 38px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 32px;
  }
`,te=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,ne=i.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
  }
`,S=i.div`
  width: 100%;
`,re=i.label`
  display: flex;
  align-items: center;

  color: #efede8;
  width: 100%;
  height: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${n.title};
  border-radius: 12px;
  padding: 13px;
  font-size: 14px;
  line-height: 1.29;
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }

  &:active {
    /* background-color: inherit; */
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;i.span`
  display: flex;
  align-items: center;
`;const P=i.div`
  display: flex;
  gap: 14px;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    width: 345px;
  }
`;i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @media screen and (min-width: 375px) {
    justify-content: flex-start;
    gap: 20px;
  }
`;i.div`
  display: flex;
  gap: 4px;
  @media screen and (min-width: 375px) {
    gap: 8px;
  }
`;const ae=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`,D=i.label`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0px;
  color: ${n.titleCards};
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`,I=i.input`
  outline: 0;
  outline-offset: 0;
  color: #efede8;
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${n.title};
  border-radius: 12px;
  padding: 14px;
  font-size: 14px;
  line-height: 1.29;
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }

  &:active {
    background-color: inherit;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,se=i.span`
  display: flex;
  align-items: center;
  color: ${n.title};
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${d=>d.theme.main};
  border-radius: 12px;
  padding: 14px;
  font-size: 14px;
  line-height: 1.29;
`,oe=i.span`
  display: block;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0px;
  color: ${n.titleCards};
  margin-bottom: 4px;
`;i.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
`;i.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;i.svg`
  fill: #000000;
  stroke: currentColor;
`;const le=i.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
  }
`,M=i.div`
  display: flex;
  gap: 8px;
  margin: 0;

  /* max-width: 300px; */
`,de=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`,s=i.div`
  /* margin-bottom: 20px; */
`,o=i.label`
  position: relative;
  /* margin-left: 32px; */
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`,a=i.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(99, 99, 102, 1);
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #333;
    transition: all 0.2s ease-in-out;
  }
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    &::before {
      width: 10px;
      height: 10px;
      margin: auto;
    }
  }
`,l=i.input`
  display: none;
  &:checked + ${a} {
    border-color: ${n.bgSecondary};
    &::before {
      background-color: ${n.bgSecondary};
      transform: translate(-50%, -50%) scale(1);
    }
  }
`,j=i.span`
  position: relative;
  margin-left: 32px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
  color: ${n.withe};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;i.div`
  width: 100%;
  display: flex;
  gap: 9px;
`;const F=i.span`
  margin-left: 32px;
  display: block;
  width: 260px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
  color: ${n.withe};
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;i.input`
  background-color: rgba(0, 0, 0, 1);
  /* width: 100px; */
  border: none;
  color: ${n.withe};
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
`;const ce=Z().shape({name:N().required("Name is required"),height:A().min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:A().min(35,"Weight must be at least 35 kg").required("Current weight is required"),desiredWeight:A().min(35,"Weight must be at least 35 kg").required("Desired weight is required"),birthday:ee().max(new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate()),"Must be at least 18 years old").required("Birthday is required"),blood:A().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:N().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:A().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),he=i.div`
  ${L};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1440px) {
    border-left: 1px solid ${n.bgCards};
    padding-left: 49px;
    padding-right: 0;
  }
`,xe=i.div`
  margin: 0 auto;

  position: relative;

  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,pe=i.img`
  width: 100%;
  height: 100%;
`,me=i.div`
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${n.acceptColor};
  border-radius: 50%;
  background-color: transparent;
  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,ge=i.button`
  position: absolute;
  bottom: -12px;
  left: 34px;

  @media screen and (min-width: 768px) {
    bottom: -18px;
    left: 60px;
  }

  background-color: transparent;
  border: none;
`,ue=i.div`
  padding-top: 32px;

  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }
`,fe=i.h3`
  margin-bottom: 4px;

  font-size: 18px;
  line-height: 1.11;
  color: ${n.withe};

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 1.16;
  }
`,be=i.p`
  margin-bottom: 40px;

  font-size: 14px;
  line-height: 1.28;
  color: ${n.titleCards};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 1.28;
  }
`,ve=i.div`
  margin-bottom: 40px;

  display: flex;
  gap: 14px;

  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }
`,O=i.div`
  width: 168px;
  min-height: 96px;
  padding: 14px;

  display: flex;
  flex-direction: column;
  gap: 28px;

  border-radius: 12px;
  border: 1px solid ${n.bgCards};

  background-color: ${n.acceptColor};
  font-size: 12px;
  line-height: 1.33;
  color: ${n.dashboardTextAccept};

  @media screen and (min-width: 768px) {
    width: 214px;
    min-height: 108px;
    padding: 14px 18px;
  }
`,V=i.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;
  color: ${n.withe};
  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.33;
  }
`,U=i.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,je=i.div`
  margin-bottom: 41px;
  max-width: 335px;

  display: flex;
  gap: 8px;

  font-size: 14px;
  line-height: 1.28;

  color: ${n.title};

  @media screen and (min-width: 768px) {
    margin: 0 auto 32px auto;
    max-width: 407px;

    font-size: 16px;
    line-height: 1.5;
  }
`,ye=i.button`
  margin-bottom: 18px;
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${n.withe};

  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;

    max-width: 407px;

    font-size: 16px;
    line-height: 1.5;
  }
`,u=i.svg`
  &.orange {
    fill: ${n.secondaryOrange};
  }
  @media screen and (min-width: 768px) {
    &.user {
      width: 102px;
      height: 102px;
    }
  }
  @media screen and (min-width: 768px) {
    &.mark {
      width: 32px;
      height: 32px;
    }
  }
  &.stroke-withe {
    stroke: ${n.withe};
    cursor: pointer;
  }
  &.lightOrange {
    fill: ${n.secondaryOrange};
  }
  &.stroke {
    stroke: ${n.secondaryOrange};
  }
`;i.span`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0px;
  color: ${n.titleCards};
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;i.label`
  display: flex;
  align-items: center;

  color: #efede8;
  width: 100%;
  height: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${n.title};
  border-radius: 12px;
  padding: 13px;
  font-size: 14px;
  line-height: 1.29;
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;const R=i.button`
  padding: 5px;
  font-weight: bold;
  color: white;
  background-color: inherit;
  border: 1px solid white;
  border-radius: 6px;
`,H=i.select`
  border: 1px solid white;
  border-radius: 6px;
  color: white;
  background-color: #ef8964;
  &:last-of-type {
    margin-left: 4px;
    margin-right: 4px;
  }
  &:first-of-type {
    margin-left: 4px;
  }
`,we=({selected:d,onChange:x})=>{const f=new Date().getFullYear(),k=((c,m)=>{let h=[];for(let r=m;c<r;r--)h.push(r);return h})(1900,f),p=["January","February","March","April","May","June","July","August","September","October","November","December"];return e.jsx(G,{selected:d,dateFormat:"dd.MM.yyyy",customInput:e.jsx(Q,{}),onChange:x,renderCustomHeader:({date:c,changeYear:m,changeMonth:h,decreaseMonth:r,increaseMonth:b,prevMonthButtonDisabled:z,nextMonthButtonDisabled:W})=>e.jsxs("div",{style:{margin:10,display:"flex",justifyContent:"center"},children:[e.jsx(R,{onClick:r,disabled:z,type:"button",children:"<"}),e.jsx(H,{value:c.getFullYear(),onChange:({target:{value:t}})=>m(t),children:k.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(H,{value:p[c.getMonth()],onChange:({target:{value:t}})=>h(p.indexOf(t)),children:p.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(R,{onClick:b,disabled:W,type:"button",children:">"})]})})},Ce=()=>{const d=E(),x=y(w.getUserName),f=y(w.getUserEmail),{height:C,currentWeight:k,desiredWeight:p,blood:c,sex:m,levelActivity:h,birthday:r}=y(w.getUserMetricData),b=v=>{const $=v.toISOString();t.setFieldValue("birthday",z($))};function z(v){return v.slice(0,10)}const W=z(r),t=J({initialValues:{name:x||"",height:C||"",currentWeight:k||"",desiredWeight:p||"",birthday:W||"",blood:c,sex:m||"",levelActivity:h},onSubmit:async v=>{try{await ce.validate(v,{abortEarly:!1}),d(q.updateUserMetricsData(v)),B.success("Successful!")}catch($){const T=$.response?$.response.data:$.message;B.error(T)}}});return e.jsx("div",{children:e.jsxs(ie,{onSubmit:t.handleSubmit,children:[e.jsx(D,{htmlFor:"name",children:"Basic info"}),e.jsxs(te,{children:[e.jsx(I,{name:"name",type:"text",id:"name",onChange:t.handleChange,value:t.values.name}),e.jsx(se,{children:f})]}),e.jsxs(ne,{children:[e.jsxs(P,{children:[e.jsxs(S,{children:[e.jsx(D,{htmlFor:"Height",children:"Height"}),e.jsx(I,{name:"height",type:"number",onChange:t.handleChange,value:t.values.height,placeholder:"0"})]}),e.jsxs(S,{children:[e.jsx(D,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(I,{name:"currentWeight",type:"number",onChange:t.handleChange,value:t.values.currentWeight,placeholder:"0"})]})]}),e.jsxs(P,{children:[e.jsxs(S,{children:[e.jsx(D,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(I,{name:"desiredWeight",type:"number",onChange:t.handleChange,value:t.values.desiredWeight,placeholder:"0"})]}),e.jsx(S,{children:e.jsx(K,{children:e.jsxs(re,{children:[e.jsx(we,{selected:r?X(t.values.birthday):Date.now(),onChange:b}),e.jsx(u,{width:18,height:18,className:"stroke-withe",children:e.jsx("use",{href:`${g}#icon-calendar`})})]})})})]})]}),e.jsx(oe,{children:"Blood"}),e.jsxs(le,{children:[e.jsxs(M,{children:[e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(l,{checked:t.values.blood===1,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",1)},value:1}),e.jsx(a,{}),e.jsx(j,{children:"1"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(l,{checked:t.values.blood===2,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",2)},value:2}),e.jsx(a,{}),e.jsx(j,{children:"2"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(l,{checked:t.values.blood===3,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",3)},value:3}),e.jsx(a,{}),e.jsx(j,{children:"3"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(l,{checked:t.values.blood===4,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",4)},value:4}),e.jsx(a,{}),e.jsx(j,{children:"4"})]})})]}),e.jsx(M,{children:e.jsxs(de,{children:[e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(l,{checked:t.values.sex==="male",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","male")},value:"male"}),e.jsx(a,{}),e.jsx(j,{children:"Male"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(l,{checked:t.values.sex==="female",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","female")},value:"female"}),e.jsx(a,{}),e.jsx(j,{children:"Female"})]})})]})})]}),e.jsxs(ae,{children:[e.jsx(s,{children:e.jsxs(o,{htmlFor:"levelActivity1",children:[e.jsx(l,{id:"levelActivity1",checked:t.values.levelActivity===1,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",1)},value:1}),e.jsx(a,{}),e.jsx(F,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(s,{children:e.jsxs(o,{htmlFor:"levelActivity2",children:[e.jsx(l,{id:"levelActivity2",checked:t.values.levelActivity===2,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",2)},value:2}),e.jsx(a,{}),e.jsx(F,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(s,{children:e.jsxs(o,{htmlFor:"levelActivity3",children:[e.jsx(l,{id:"levelActivity3",checked:t.values.levelActivity===3,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",3)},value:3}),e.jsx(a,{}),e.jsx(F,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(s,{children:e.jsxs(o,{htmlFor:"levelActivity4",children:[e.jsx(l,{id:"levelActivity4",checked:t.values.levelActivity===4,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",4)},value:4}),e.jsx(a,{}),e.jsx(F,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(s,{children:e.jsxs(o,{htmlFor:"levelActivity5",children:[e.jsx(l,{id:"levelActivity5",checked:t.values.levelActivity===5,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",5)},value:5}),e.jsx(a,{}),e.jsx(F,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(_,{tp:"submit",text:"Save"})]})})},ke=i.h2`
  margin-bottom: 40px;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;

  color: ${n.withe};
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 32px;
    line-height: 1.37;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,$e=({text:d,className:x})=>e.jsx(ke,{className:x,children:d}),Ae=i.div`
  ${L};
  padding-top: 101px;
  padding-bottom: 66px;
  @media (min-width: 768px) {
    padding-top: 156px;
    padding-bottom: 54px;
  }
  @media (min-width: 1440px) {
    padding-top: 156px;
    padding-bottom: 54px;
  }
`,Fe=i.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`,ze=()=>{const d=Y.useRef(null),x=y(w.getUserName),f=y(w.getUserAvatar),C=E(),{dailyIntakeCalories:k,dailyNormOfSport:p}=y(w.getUserMetricData),c=async h=>{try{const r=h.target.files[0];if(r){const b=new FormData;b.append("avatar",r),await C(q.updateUserAvatar(b))}}catch{B.error("An error occurred while uploading the photo")}},m=()=>{C(q.logOut())};return e.jsxs(he,{children:[e.jsxs(xe,{children:[e.jsx(me,{children:f?e.jsx(pe,{src:f,alt:"Avatar"}):e.jsx(u,{width:61,height:62,className:"user",children:e.jsx("use",{href:`${g}#icon-user`})})}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},ref:d,onChange:c}),e.jsxs(ge,{onClick:()=>d.current.click(),children:[" ",e.jsx(u,{width:24,height:24,className:"lightOrange mark",children:e.jsx("use",{href:`${g}#icon-check_mark`})})]})]})]}),e.jsxs(ue,{children:[e.jsx(fe,{children:x}),e.jsx(be,{children:"User"})]}),e.jsxs(ve,{children:[e.jsxs(O,{children:[e.jsxs(U,{children:[e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${g}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(V,{children:k})]}),e.jsxs(O,{children:[e.jsxs(U,{children:[" ",e.jsx(u,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${g}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsxs(V,{children:[p," min"]})]})]}),e.jsxs(je,{children:[e.jsxs("div",{children:[" ",e.jsx(u,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${g}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(ye,{type:"button",onClick:m,children:["Logout"," ",e.jsx(u,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${g}#icon-logout`})})]})]})},Pe=()=>e.jsxs(Ae,{children:[e.jsx($e,{text:"Profile Settings"}),e.jsxs(Fe,{children:[e.jsx(ze,{}),e.jsx(Ce,{})]})]});export{Pe as default};
