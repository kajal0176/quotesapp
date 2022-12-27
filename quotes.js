

const quotes=document.getElementById("quotes");
const author=document.getElementById("author");
const newq=document.getElementById("newq");
let realdata="";
const getnewquotes=()=>{
    let num=Math.floor(Math.random()*10);
   quotes.innerText=`${realdata[num].text}`;
   author.innerText=`${realdata[num].author}`;
};
const getQuotes=async()=>{
    const api="https://type.fit/api/quotes/";
    try{
  let data=await fetch(api);
  realdata=await data.json();
  getnewquotes();
    }catch(error){}
};
newq.addEventListener("click",getnewquotes);
getQuotes();
