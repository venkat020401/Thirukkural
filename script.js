// create html elements in dom

let head = document.createElement("div");
head.setAttribute("class","top");
let left = document.createElement("p");
left.setAttribute("class","left"); left.innerHTML=`வாழ்க தமிழ் !<br>Long live, Tamil !`;
let right = document.createElement("p");
right.setAttribute("class","right"); right.innerHTML=`வெல்க தமிழர் !!<br>Achieve, Tamilians !!`
let h1 = document.createElement("h1");
h1.innerHTML="திருக்குறள்";
let img = document.createElement("img");
img.setAttribute("src","https://www.dlshq.org/wp-content/uploads/2021/07/thiruvalluvar-208x300.jpg");
let input = document.createElement("div");
input.setAttribute("class","input");
let input_box = document.createElement("input");
input_box.setAttribute("type","number"); input_box.setAttribute("placeholder","குறள் எண்: 1 to 1330"); input_box.setAttribute("id","input_box");
let button = document.createElement("button");
button.setAttribute("class","btn1");button.setAttribute("type","submit");button.setAttribute("onclick","okay()");
button.innerHTML="Search";
let card = document.createElement("div");
card.setAttribute("class","card border-success mb-3");
let card_header = document.createElement("div");
card_header.setAttribute("class","card-header bg-transparent border-success");card_header.setAttribute("id","line");
card_header.innerHTML=`<b>குறள் / Kural :</b>`;
let card_body = document.createElement("div");
card_body.setAttribute("class","card-body text-success");
let number = create_p("p","class","card-text","id","number","<b>குறள் எண் / No :</b>");
let section = create_p("p","class","card-text","id","section","<b>பிரிவு / Section :</b>");
let chapter = create_p("p","class","card-text","id","chapter","<b>அத்தியாயம் / Chapter :</b>");
let chapter_group = create_p("p","class","card-text","id","chapter_group","<b>இயல் / Chapter Group :</b>");
let footer = document.createElement("div");
footer.setAttribute("class","card-footer bg-transparent border-success");footer.setAttribute("id","meaning");
footer.innerHTML=`<b>பொருள் / Meaning :</b>`;

// function for create elements

function create_p (tag,att,attvalue,att1,attvalue1,content){
    var ele = document.createElement(tag);
    ele.setAttribute(att,attvalue);
    ele.setAttribute(att1,attvalue1);
    ele.innerHTML=content;
    return ele;
}

head.append(left,right,h1);
input.append(input_box,button,card);
card.append(card_header,card_body,footer);
card_body.append(number,section,chapter,chapter_group);
document.body.append(head,img,input);

// featch the data from the api using .then

function okay(){
let a = document.getElementById("input_box").value;

// set alert messages

if(a==""){
    alert("Please Enter the KURAL number below");
}
else if(a>1330){
    alert("We have only 1330 KURAL's")
}
else if(a<=0){
    alert("Enter the correct KURAL number")
}
else{
    fetch(`https://api-thirukkural.vercel.app/api?num=${a}`).then((data) => data.json()).then((data1) => {
    document.getElementById("line").innerHTML=`<b>குறள் :</b> <br>${data1.line1} <br> ${data1.line2} <br> <b>Kural :</b> <br> ${data1.eng}`;
    document.getElementById("number").innerHTML=`<b>குறள் எண் / No :</B> ${data1.number}`;
    document.getElementById("section").innerHTML=`<b>பிரிவு / Section :</B> ${data1.sect_tam} / ${data1.sect_eng}`;
    document.getElementById("chapter").innerHTML=`<b>அத்தியாயம் / Chapter :</B> ${data1.chap_tam} / ${data1.chap_eng}`;
    document.getElementById("chapter_group").innerHTML=`<b>இயல் / Chapter Group :</B> ${data1.chapgrp_tam} / ${data1.chapgrp_eng}`;
    document.getElementById("meaning").innerHTML=`<b>பொருள் :</b><br> ${data1.tam_exp}<br> <b>Meaning :</b><br>${data1.eng_exp}`;  
});
}
// clear the input value after click the search button

document.getElementById("input_box").value="";
}