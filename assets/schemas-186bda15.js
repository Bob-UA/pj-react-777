import{c as i,a as e,b as r,d as s}from"./Button-d7987ea6.js";const o=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,a="Please enter a valid email",m=i().shape({name:e().required("Error name"),email:e().matches(o,{message:a}).email(a).required("Error email"),password:e().min(6).required("Error password")}),t=i().shape({email:e().matches(o,{message:a}).email(a).required("Error email"),password:e().min(6).required("Error password")});i().shape({name:e().min(2,"Too Short!").max(50,"Too Long!").required("Required"),height:r().min(150,"Too Short!").required("Required"),currentWeight:r().min(35,"Too little weight").required("Required"),desiredWeight:r().min(35,"Too little weight").required("Required"),birthday:s().max(new Date(Date.now()-18*365*24*60*60*1e3)).required(),blood:r().oneOf([1,2,3,4]).required("Required"),sex:e().oneOf(["male","female"]).required("Required"),levelActivity:r().oneOf([1,2,3,4,5]).required("Required")});export{t as a,m as s};
