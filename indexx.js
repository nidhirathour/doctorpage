var toogle=true;
var div=document.getElementById("setIcons");

div.style.height="80%";
div.style.width="100%";
div.style.backgroundColor="rgba(82,132,181,0.8)";//"";
div.style.zIndex="1";//"";
 
div.style.position="fixed";
div.style.marginLeft="-200px";

let ul=document.createElement("ul");

let list1=document.createElement("li");  
list1.innerText="Home"; 
list1.style.color="white"
list1.style.paddingTop="100px"

let list2=document.createElement("li");
list2.innerText= "Our Service";
list2.style.color="white"
list2.style.paddingTop="100px"

let list3=document.createElement("li");
list3.innerText= "Find Doctors"
list3.style.color="white"
list3.style.paddingTop="100px"

let list4=document.createElement("li");
list4.innerText= "Login\Register"
list4.style.color="white"
list4.style.paddingTop="100px"

  
ul.appendChild(list1);
ul.appendChild(list2);
ul.appendChild(list3);
ul.appendChild(list4);

ul.style.listStyle="none";
ul.style.display="flex"; 
ul.style.flexDirection="column"; 
ul.style.paddingLeft="80px" 
// ul.style.marginBottom="40px";  


div.appendChild(ul);

const handleMenu = ()=>{
    console.log("ho")
 
    if(toogle===true){
        div.style.display="block";
         
        div.style.alignItems="center"; 
       
        toogle=false;
    }else{
        // div.removeAttribute(ul);
        div.style.display="none";
        console.log(div)
        toogle=true;
    } 
}








// var toogle=false;
// var div=document.getElementById("setIcons");

// let ul=document.createElement("ul");

// let list1=document.createElement("li");
// list1.innerText="Home"; 

// let list2=document.createElement("li");
// list2.innerText= "Our Service";

// let list3=document.createElement("li");
// list3.innerText= "Find Doctors"

// let list4=document.createElement("li");
// list4.innerText= "Login\Register"

// ul.appendChild(list1);
// ul.appendChild(list2);
// ul.appendChild(list3);
// ul.appendChild(list4);

// ul.style.listStyle="none";
 
// div.appendChild(ul);

// const handleMenu = ()=>{
//     console.log("ho")
 
//     if(toogle===true){
//         div.style.display="block";
         
//         div.style.alignItems="center"; 
       
//         toogle=false;
//     }else{
//         div.removeAttribute(ul);
//         div.style.display="none";
//         console.log(div)
//         toogle=true;
//     } 
// }