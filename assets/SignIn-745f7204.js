import{L as b,e as f,b as w,d as S,j as e,o as y,r as C,f as z}from"./index-c09e4bb8.js";import{n as i}from"./emotion-styled.browser.esm-01af0747.js";import{b as _,a as B,c as I,d as $,T as E}from"./Title-6a616157.js";import{b as L,a as F}from"./main_bg_desktop-12717d49.js";import{C as T}from"./ContainerStyled-bb0b3bf9.js";import{u as V,B as P}from"./Button-3dd6e7f6.js";import{a as D}from"./schemas-29fda9cc.js";import{L as R}from"./Loader-8cfbc2bc.js";import{s as m}from"./sprite-3ca393e6.js";import{g as Q,V as G,C as M}from"./CaloriesContainer-51d65cc1.js";import"./index.esm-c0cff38f.js";import"./Hourglass-ee26f6cc.js";const U=i.section`
  padding-top: 127px;
  padding-bottom: 40px;
  background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${_});
  background-repeat: no-repeat;
  background-position: calc(50% + 38.5px) calc(50% + 120.5px);
  background-size: 298px;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${B});
    background-repeat: no-repeat;
    background-position: calc(50% + 38.5px) calc(50% + 120.5px);
    background-size: 298px;
  }

  @media screen and (min-width: 768px) {
    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${I});
    background-position: calc(50% + 165.5px) calc(50% + 65.5px);
    background-repeat: no-repeat;
    background-size: 437px;
    padding-top: 189px;
    padding-bottom: 48px;

    @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2),
      screen and (min-width: 768px) and (min-resolution: 192dpi),
      screen and (min-width: 768px) and (min-resolution: 2dppx) {
      background: linear-gradient(
          170deg,
          #040404 3.66%,
          rgba(4, 4, 4, 0) 19.15%
        ),
        linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
        url(${$});
      background-position: calc(50% + 165.5px) calc(50% + 65.5px);
      background-repeat: no-repeat;
      background-size: 437px;
    }

    @media screen and (min-width: 1440px) {
      background: linear-gradient(
          80deg,
          #040404 -2.45%,
          rgba(4, 4, 4, 0) 68.17%
        ),
        url(${L});
      padding-top: 200px;
      padding-bottom: 210px;
      background-repeat: no-repeat;
      background-position: calc(50% + 385px) 50%;
      background-size: 670px;
    }

    @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2),
      screen and (min-width: 1440px) and (min-resolution: 192dpi),
      screen and (min-width: 1440px) and (min-resolution: 2dppx) {
      background: linear-gradient(
          80deg,
          #040404 -2.45%,
          rgba(4, 4, 4, 0) 68.17%
        ),
        url(${F});
      background-repeat: no-repeat;
      background-position: calc(50% + 335px) calc(50% + 65.5px);
      background-size: 670px;
    }
  }
`,W=i.div`
  ${T}
  position: relative;
`,q=i.p`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    width: 496px;
    font-size: 16px;
    line-height: 1.5;
    margin-top: 16px;
  }
`,A=i.div`
  display: flex;
  font-size: 12px;
  line-height: 1.5;
  padding-top: 12px;
  @media screen and (min-width: 768px) {
    padding-left: 15px;
  }
`,H=i.p`
  color: rgba(239, 237, 232, 0.3);
`,J=i(b)`
  margin-left: 4px;
  color: #efede8;
  text-decoration: underline;
`,K=i.form`
  margin-top: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 404px;
  }
`,N=i.div`
  padding-right: 40px;
`,c=i.input`
  outline: 0;
  outline-offset: 0;
  color: #efede8;
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${r=>r.theme.main};
  border-radius: 12px;
  padding: 13px;
  font-size: 14px;
  line-height: 1.29;
  &:not(:first-of-type) {
    margin-top: 18px;
  }
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    &:not(:first-of-type) {
      margin-top: 20px;
    }
  }
`;c.defaultProps={theme:{main:"rgba(239, 237, 232, 0.3)"}};const h=i.label`
  margin: -1px;
  padding: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`,O=i.div`
  display: flex;
  position: relative;
  padding-top: 28px;
  @media screen and (min-width: 768px) {
    padding-top: 64px;
  }
`;i.div``;const u=i.div`
  display: inline-flex;
  margin-top: 4px;
`;i(b)`
  margin-left: 14px;
  position: relative;
  display: inline-block;
  font-size: 16px;
  line-height: 1.17;
  background-color: inherit;
  color: #efede8;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 11px 45px 11px 39px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  &:disabled {
    border-color: rgba(230, 83, 60, 1);
  }
  @media screen and (min-width: 768px) {
    padding: 16px 68px 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`;i.svg`
  position: absolute;
  right: 19px;
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
    &.setG {
      right: 32px;
      width: 28px;
      height: 28px;
    }
  }
`;const X=i.svg`
  margin-right: 4px;
  width: 16px;
  height: 16px;
`,Y=i.p`
  color: rgba(216, 0, 39, 1);
  font-size: 12px;
  line-height: 1.5;
`,Z=i.svg`
  margin-right: 4px;
  width: 16px;
  height: 16px;
`,ee=i.p`
  color: rgba(60, 191, 97, 1);
  font-size: 12px;
  line-height: 1.5;
`,ie=()=>{const r=f(),s=w(S.getIsLoading),d=async(o,v)=>{r(y.logIn(o)),v.resetForm()},{values:t,errors:n,touched:a,isSubmitting:k,handleChange:l,handleBlur:g,handleSubmit:j}=V({initialValues:{email:"",password:""},validationSchema:D,onSubmit:d}),p=o=>e.jsxs(u,{children:[e.jsx(X,{children:e.jsx("use",{href:`${m}#icon-error`})}),e.jsx(Y,{children:o})]}),x=o=>e.jsxs(u,{children:[e.jsx(Z,{children:e.jsx("use",{href:`${m}#icon-successes`})}),e.jsxs(ee,{children:["Success ",o]})]});return e.jsxs(K,{onSubmit:j,children:[e.jsxs(N,{children:[n.name&&a.name&&p(n.name),e.jsx(h,{htmlFor:"email",children:"Email"}),e.jsx(c,{value:t.email,onChange:l,type:"email",id:"email",name:"email",placeholder:"Email",onBlur:g,theme:a.email&&(n.email?{main:"rgba(216, 0, 39, 1)"}:{main:"rgba(60, 191, 97, 1)"})}),a.email&&(n.email?p(n.email):x("email")),e.jsx(h,{htmlFor:"password",children:"Password"}),e.jsx(c,{value:t.password,onChange:l,type:"password",id:"password",name:"password",placeholder:"Password",onBlur:g,theme:a.password&&(n.password?{main:"rgba(216, 0, 39, 1)"}:{main:"rgba(60, 191, 97, 1)"})}),a.password&&(n.password?p(n.password):x("password"))]}),e.jsx(O,{children:s?e.jsx(R,{cls:"yellowBtn"}):e.jsx(P,{disabled:k,type:"submit",text:"Sign In"})})]})},me=()=>{const r=w(Q),s=r.totalBurnedCalories.toString().slice(0,2),d=r.totalBurnedCalories.toString().slice(2,6),t=r.exercisesQuantity,n=f();return C.useEffect(()=>{!r.totalBurnedCalories&&n(z())},[]),e.jsx(U,{children:e.jsxs(W,{children:[e.jsx(E,{text:"Sign In",cls:"sign-page"}),e.jsx(q,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(ie,{}),e.jsxs(A,{children:[e.jsx(H,{children:"Don't have an account?"}),e.jsx(J,{to:"/signup",children:"Sign Up"})]}),e.jsx(G,{cls:"sign-in",video:t}),e.jsx(M,{val1:s,val2:d})]})})};export{me as default};
