import{d as c,r as i,l as x,u as s,j as e}from"./index-2fc245cc.js";import{B as n,E as p}from"./CtegoryItem.style-f324faad.js";import{e as t,L as m}from"./Loading-b55e16a4.js";import"./Hourglass-4e4731f9.js";const E=()=>{const r=c();i.useEffect(()=>{r(x.getExercisesByMuscles())},[r]);const a=s(t.getExercisesData),o=s(t.getIsLoading);return s(t.getIsError),e.jsxs(n,{children:[o&&e.jsx(m,{}),!o&&a&&e.jsx(p,{exercises:a})]})};export{E as default};