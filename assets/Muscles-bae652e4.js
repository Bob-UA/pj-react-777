import{d as c,r as i,z as x,u as a,j as s,A as n}from"./index-59a48b20.js";import{B as u,E as l}from"./CtegoryItem.style-e0d3786c.js";import{e as o}from"./exercisesSelectors-80adadd9.js";const g=()=>{const e=c();i.useEffect(()=>{e(x.getExercisesByMuscles())},[e]);const t=a(o.getFilterMuscles),r=a(o.getIsLoading);return s.jsxs(u,{children:[r&&s.jsx(n,{}),!r&&t&&s.jsx(l,{exercises:t})]})};export{g as default};