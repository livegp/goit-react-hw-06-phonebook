import{s as d,b as f,r as i,j as s}from"./index-063e9746.js";import{Q as l}from"./react-toastify.esm-56da6c7b.js";import{f as h}from"./fetch-0087ad7c.js";import g from"./Loader-f119d667.js";import{N as p}from"./NoDataMessage-35c07e2e.js";const u=d.ul`
  display: grid;
  gap: 25px;
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  color: #3b5998;
  text-align: justify;

  h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.2;
  }

  @media (width <= 576px) {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
  }
`;function R(){const{id:t}=f(),[e,a]=i.useState([]),[n,o]=i.useState(!0);return i.useEffect(()=>{t&&h("movieReviews","","",t).then(r=>{a(r.results),o(!1)}).catch(r=>{l.error(`Error fetching data: ${r.message}`),o(!1)})},[t]),n?s.jsx(g,{}):Array.isArray(e)&&e.length>0?s.jsx(u,{children:e.map(({id:r,author:m,content:c})=>s.jsxs("li",{children:[s.jsxs("h3",{children:[m,":"]}),s.jsx("p",{children:c})]},r))}):s.jsx(p,{})}export{R as default};
