import{d as a,r as c,t as m,u as s,j as e}from"./index-c3c374c8.js";import{e as t}from"./exercisesSelectors-80adadd9.js";import{B as n,E as p}from"./CtegoryItem.style-8ba1b83f.js";import{L as x}from"./Loading-07917b2d.js";import"./Hourglass-55c27f9d.js";const l=()=>{const r=a();c.useEffect(()=>{r(m.getExercisesByEquipment())},[r]);const o=s(t.getFilterEquioment),i=s(t.getIsLoading);return s(t.getIsError),e.jsxs(n,{children:[i&&e.jsx(x,{}),!i&&o&&e.jsx(p,{exercises:o})]})};export{l as default};