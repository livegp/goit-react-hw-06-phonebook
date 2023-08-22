import{s as o,N as j,L as v,j as e,b as k,r,a as L,O as y}from"./index-8829ef19.js";import{a as R,b as S}from"./index.esm-980082c3.js";import{Q as E}from"./react-toastify.esm-7a21454c.js";import{f as D}from"./fetch-5d12fe7f.js";import d from"./Loader-710b74d4.js";const O=o.div`
  display: grid;
  grid-template: auto auto 1fr auto auto / 1fr 3fr auto;
  gap: 25px;
  height: 100%;
  font-size: 16px;

  @media (width <= 576px) {
    grid-template: auto auto auto auto auto auto auto / 1fr auto;
  }
`,z=o.img`
  width: 100%;
  height: 100%;
  grid-row: 1 / 4;
  grid-column: 1 / 2;
  border-radius: 4px;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  object-fit: cover;

  @media (width <= 576px) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
`,B=o.h1`
  color: #3b5998;
  font-size: 20px;
  font-weight: bold;
  grid-row: 1 / 2;
  grid-column: 2 / 4;

  @media (width <= 576px) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
`,C=o.p`
  color: #3b5998;
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  @media (width <= 576px) {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
  }
`,_=o.p`
  display: flex;
  color: #3b5998;
  grid-row: 2 / 3;
  grid-column: 3 / 4;

  @media (width <= 576px) {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
  }
`,$=o.p`
  color: #3b5998;
  text-align: justify;
  line-height: 1.2;
  grid-row: 3 / 4;
  grid-column: 2 / 4;

  @media (width <= 576px) {
    grid-row: 4 / 5;
    grid-column: 1 / 3;
  }
`,A=o.ul`
  color: #3b5998;
  grid-row: 4 / 5;
  grid-column: 1 / 2;
  display: flex;
  gap: 25px;
  justify-content: space-between;

  li {
    width: 100%;
  }

  @media (width <= 576px) {
    grid-row: 5 / 6;
    grid-column: 1 / 3;
  }
`,p=o(j)`
  text-align: center;
  background-color: #dfe3ee;
  color: #3b5998;
  border-radius: 4px;
  padding: 8px 16px;
  display: block;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #3b5998;
    color: #dfe3ee;

    &.active {
      color: #f7f7f7;
    }
  }

  &.active {
    background-color: #3b5998;
    color: #dfe3ee;
  }
`,F=o(v)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 25px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  color: #8b9dc3;

  :hover {
    color: #3b5998;
  }
`,I=o.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;function P({to:i}){return e.jsx(F,{to:i,children:e.jsxs(I,{children:[e.jsx(R,{size:"24"}),e.jsx("p",{children:"Back"})]})})}const T="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";function U(){var c;const{id:i}=k(),[n,x]=r.useState(null),[g,a]=r.useState(!1),u=L(),m=r.useRef(((c=u.state)==null?void 0:c.from)??"/");if(r.useEffect(()=>{i&&(a(!0),D("movieDetails","","",i).then(t=>{x(t),a(!1)}).catch(t=>{E.error(`Error fetching data: ${t.message}`),a(!1)}))},[i]),!i)return null;if(g)return e.jsx(d,{});if(!n)return null;const{title:s,genres:f,vote_average:h,overview:b,poster_path:l}=n,w=l?`https://image.tmdb.org/t/p/w500${l}`:T;return e.jsxs(e.Fragment,{children:[e.jsx(P,{to:m.current}),e.jsxs(O,{children:[e.jsx(z,{src:w,alt:s}),e.jsx(B,{children:s}),e.jsx(C,{children:f.map(({name:t})=>t).join(", ")}),e.jsxs(_,{children:[e.jsx(S,{})," ",h.toFixed(1)]}),e.jsx($,{children:b}),e.jsxs(A,{children:[e.jsx("li",{children:e.jsx(p,{to:"cast",children:"Cast"})}),e.jsx("li",{children:e.jsx(p,{to:"reviews",children:"Reviews"})})]}),e.jsx(r.Suspense,{fallback:e.jsx(d,{}),children:e.jsx(y,{})})]})]})}function J(){return e.jsx(U,{})}export{J as default};
