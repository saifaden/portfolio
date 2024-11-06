function certifecate(title,certifics){
    let c1= `<article><div><h3>${title}</h3>`
    certifics.forEach(cer=>{
        c1+=`<img src="${cer}" alt="${title}" width="800px">`
    });
    let c2=`</div></article>`
    return c1+c2;
}
let info={
    "skills":["PHP","JavaScript","HTML","CSS","Python"],
    "databases":["MySQL","MongoDB"],
    "devTools":["Git","Docker"],
    "projects":[
        {
            "title":"مشروع 1",
            "dis":"انشاء سيستم لادارة معمل مستشفي",
            "link":"https://github.com/saifaden/System-Lab"
        },
        {
            "title":"مشروع 2",
            "dis":"to do list app",
            "link":"https://github.com/saifaden/ToDoList"
        },
    ],
    "certaficates":{
        "HTML & CSS":["assest/certifecate/html&css_mn.png","assest/certifecate/html&css_m.jpg"],
        "js":["assest/certifecate/JS_mn.png","assest/certifecate/AdvancedJS.png","assest/certifecate/AsynchronousJs.png","assest/certifecate/js_m.jpg","assest/certifecate/jsE6_m.jpg"],
        "PHP & mysql":["assest/certifecate/php&mysql.jpg"],
        "MEARN Stack":["assest/certifecate/nodeJs.jpg"],
        "Python":["assest/certifecate/Python.png"],
    }
}


let skills=document.querySelector("#skills");
let databases=document.querySelector("#databases");
let devTools=document.querySelector("#divTools");
let projects=document.querySelector("#projects ul");
let certaficates=document.querySelector("#certaficates");

info.skills.forEach(skill => {
    skills.innerHTML+=skill+" ، ";
});
info.databases.forEach(database => {
    databases.innerHTML+=database+" ، ";
});
info.devTools.forEach(tool => {
    devTools.innerHTML+=tool+" ، ";
});
info.projects.forEach(project => {
    projects.innerHTML+=`<li><h3> ${project.title} </h3><p>${project.dis}</p><a href="${project.link}">${project.link}</a></li>`;
});

for (const key in info.certaficates) {
    certaficates.innerHTML+=certifecate(key,info.certaficates[key])
}


