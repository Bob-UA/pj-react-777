import{d as i,r as c,v as x,u as s,j as e}from"./index-8637d798.js";import{B as m,E as n}from"./CtegoryItem.style-4517e3ab.js";import{e as t}from"./exercisesSelectors-80adadd9.js";import{L as p}from"./Loading-35df08ac.js";import"./Hourglass-2e25ca46.js";const E=()=>{const r=i();c.useEffect(()=>{r(x.getExercisesByMuscles())},[r]);const o=s(t.getFilterMuscles),a=s(t.getIsLoading);return s(t.getIsError),e.jsxs(m,{children:[a&&e.jsx(p,{}),!a&&o&&e.jsx(n,{exercises:o[0]})]})};export{E as default};