"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{2310:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(9434),r=n(6895),s={formFilterLabel:"Filter_formFilterLabel__gQ+h9",formFilterInput:"Filter_formFilterInput__eU8Ho"},c=n(184),o=function(){var e=(0,a.v9)((function(e){return e.filter})),t=(0,a.I0)();return(0,c.jsx)("form",{className:s.formFilter,children:(0,c.jsxs)("label",{className:s.formFilterLabel,children:["Find contacts by name:",(0,c.jsx)("input",{className:s.formFilterInput,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,value:e,onChange:function(e){t((0,r.h)(e.currentTarget.value))}})]})})},i=n(3871),l=n(2791),u="ContactList_contactList__UFVCg",m="ContactList_contactsItem__x8C9b",d="ContactList_contactName__wLcl6",f="ContactList_contactNumber__aD17w",_="ContactList_addContactBtn__pOeHR",h="ContactList_contactItemWrap__V7vtb",p="ContactList_loadingContacts__rwAHM",x=function(){var e=(0,a.v9)((function(e){return e.contacts.contacts})),t=(0,a.v9)((function(e){return e.filter})),n=(0,a.v9)((function(e){return e.contacts.isLoading})),r=(0,a.v9)((function(e){return e.contacts.error})),s=(0,a.I0)();(0,l.useEffect)((function(){s((0,i.yF)())}),[s]);var o=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,c.jsxs)(c.Fragment,{children:[n&&(0,c.jsx)("p",{className:p,children:"Loading contacts..."}),r&&(0,c.jsx)("p",{className:p,children:r}),(0,c.jsx)("ul",{className:u,children:o.map((function(e){return(0,c.jsx)("li",{className:m,id:e.id,children:(0,c.jsxs)("div",{className:h,children:[(0,c.jsxs)("p",{className:d,children:[e.name,":",(0,c.jsx)("span",{className:f,children:e.number})]}),(0,c.jsx)("button",{type:"button",className:_,onClick:function(){return s((0,i.GK)(e.id))},children:"Delete"})]})},e.id)}))})]})},j="ContactForm_formMaineLabel__Q5jHH",v="ContactForm_formMaine__vundt",C="ContactForm_inputMaine__WI0nF",N="ContactForm_formAddBtn__d8AZy";function b(){var e=(0,a.I0)(),t=(0,a.v9)((function(e){return e.contacts.contacts}));return(0,c.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.currentTarget,r={name:a.elements.name.value,number:a.elements.phone.value};if(t.filter((function(e){return e.name.toLowerCase()===r.name.toLowerCase()})).length)return alert("".concat(r.name," is already in contacts"));e((0,i.uK)(r)),a.reset()},className:v,children:[(0,c.jsxs)("label",{className:j,children:["Name",(0,c.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:C})]}),(0,c.jsxs)("label",{className:j,children:["Number",(0,c.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,className:C})]}),(0,c.jsx)("button",{type:"submit",className:N,children:" Add Contact "})]})}var L=n(1289);function F(){var e=(0,a.v9)((function(e){return e.contacts.isLoading})),t=(0,a.v9)((function(e){return e.contacts.error}));return(0,c.jsxs)("div",{className:L.Z.phonebookWrap,children:[(0,c.jsx)("h1",{className:L.Z.maineTitle,children:"Phonebook"}),(0,c.jsx)(b,{}),(0,c.jsx)(o,{}),(0,c.jsx)("h2",{className:L.Z.sectionTitle,children:"Contacts"}),(0,c.jsx)("div",{className:L.Z.requestText,children:t&&{error:t}}),(0,c.jsx)("div",{className:L.Z.requestText,children:e&&"Request in progress..."}),(0,c.jsx)(x,{})]})}}}]);
//# sourceMappingURL=310.7a343d9a.chunk.js.map