(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a,c,r,o,i,s,d,b,j=n(1),l=n.n(j),p=n(5),x=n.n(p),u=(n(17),n(6)),h=n(7),g=n(8),O=n(11),f=n(10),v=n(2),k=n(3),m=k.a.div(a||(a=Object(v.a)(["\n  padding: 20px;\n  width: 800px;\n  height: auto;\n  margin: 0 auto;\n"]))),w=k.a.h1(c||(c=Object(v.a)(["\n  font-size: 28px;\n"]))),F=n(0),P=function(e){var t=e.title,n=e.children;return Object(F.jsxs)(m,{children:[Object(F.jsx)(w,{children:t}),n]})},y=k.a.div(r||(r=Object(v.a)(["\n  margin-top: 40px;\n  margin-left: 20px;\n  display: flex;\n"]))),z=k.a.button(o||(o=Object(v.a)(["\n  background-color: transparent;\n  border-radius: 4px;\n  border: none;\n  font-size: 18px;\n  padding: 5px 10px;\n  cursor: pointer;\n  text-transform: capitalize;\n  font-weight: 600;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 4px rgba(0, 0, 0, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);\n  &:not(:last-child) {\n    margin-right: 15px;\n  }\n"]))),T=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(F.jsx)(y,{children:t.map((function(e,t){return Object(F.jsx)(z,{type:"button",name:e,onClick:n,children:e},t)}))})},S=k.a.p(i||(i=Object(v.a)(["\n  font-weight: 600;\n  font-size: 24px;\n"]))),B=function(e){var t=e.message;return Object(F.jsx)(S,{children:t})},C=k.a.div(s||(s=Object(v.a)(["\n  margin-top: 30px;\n"]))),J=k.a.h2(d||(d=Object(v.a)(["\n  font-size: 28px;\n  margin-bottom: 30px;\n"]))),L=k.a.p(b||(b=Object(v.a)(["\n  font-weight: 500;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),N=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(F.jsxs)(C,{children:[Object(F.jsx)(J,{children:"Statistics"}),c?Object(F.jsxs)("div",{children:[Object(F.jsxs)(L,{children:["Good: ",Object(F.jsx)("span",{children:t})]}),Object(F.jsxs)(L,{children:["Neutral: ",Object(F.jsx)("span",{children:n})]}),Object(F.jsxs)(L,{children:["Bad: ",Object(F.jsx)("span",{children:a})]}),Object(F.jsxs)(L,{children:["Total: ",Object(F.jsx)("span",{children:c})]}),Object(F.jsxs)(L,{children:["Positive feedback: ",Object(F.jsx)("span",{children:r})]})]}):Object(F.jsx)(B,{message:"No feedback given"})]})},A=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(u.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return"".concat((t/e.countTotalFeedback()*100).toFixed(0),"%")},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(F.jsxs)(P,{title:"Please leave feedback",children:[Object(F.jsx)(T,{options:["good","neutral","bad"],onLeaveFeedback:this.handleFeedback}),Object(F.jsx)(N,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),n}(j.Component);x.a.render(Object(F.jsx)(l.a.StrictMode,{children:Object(F.jsx)(A,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.35da015c.chunk.js.map