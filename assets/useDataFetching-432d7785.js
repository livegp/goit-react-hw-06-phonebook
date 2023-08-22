import{s as u,P as e,a as L,j as t,L as T,T as S,C as w,r as c}from"./index-8829ef19.js";import E from"./Loader-710b74d4.js";import{Q as P}from"./react-toastify.esm-7a21454c.js";import{f as _}from"./fetch-5d12fe7f.js";const v=u.li`
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow:
      0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.03);
      cursor: pointer;
    }
  }
`,$="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";function g({post:r}){const{id:s,poster_path:o,title:l}=r,n=L(),i=o?`https://image.tmdb.org/t/p/w500${o}`:$;return t.jsx(v,{children:t.jsx(T,{to:`/movies/${s}`,state:{from:n},children:t.jsx("img",{src:i,width:250,alt:l,role:"presentation"})})})}g.propTypes={post:e.shape({id:e.number.isRequired,poster_path:e.string,title:e.string.isRequired}).isRequired};const k=u.button`
  display: flex;
  margin: 25px auto 0;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #3b5998;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #dfe3ee;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  max-width: 180px;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #dfe3ee;
    color: #3b5998;
  }
`;function f({onLoadMore:r}){return t.jsx(k,{onClick:r,children:"Load more"})}f.propTypes={onLoadMore:e.func.isRequired};function C({results:r,title:s,loading:o,onLoadMore:l,total:n}){const p=Array.isArray(r)&&r.length>0;return t.jsxs(t.Fragment,{children:[t.jsx(S,{children:s}),p&&t.jsx(w,{children:r.map(i=>t.jsx(g,{post:i},i.id))}),o&&t.jsx(E,{}),!o&&r.length<n&&t.jsx(f,{onLoadMore:l})]})}C.propTypes={results:e.arrayOf(e.shape({id:e.number.isRequired,poster_path:e.string,title:e.string.isRequired}).isRequired).isRequired,title:e.string.isRequired,loading:e.bool.isRequired,onLoadMore:e.func.isRequired,total:e.number.isRequired};const O=(r,s,o=1)=>{const[l,n]=c.useState([]),[p,i]=c.useState(o),[h,m]=c.useState(0),[b,d]=c.useState(!1),[x,R]=c.useState(s),j=()=>{d(!0),_(r,x,p).then(a=>{m(a.total_results),n(y=>p===1?a.results:[...y,...a.results]),d(!1)}).catch(a=>{P.error(`Error fetching data: ${a.message}`),d(!1)})},q=()=>{i(a=>a+1)};return c.useEffect(()=>{x!==s&&(i(1),n([]),R(s)),j()},[s,p,x]),{results:l,loading:b,total:h,handleLoadMore:q}};export{C as G,O as u};
