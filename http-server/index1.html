let user_det=document.getElementById("form");
const tent=()=> {
    let ent=localStorage.getItem("User-details");
    if(ent){
        ent=JSON.parse(ent);
    }
    else{
        ent=[];
    }
    return ent;
}
let userDet=tent();
const spent=()=>{
    const ent=tent();
    let tableEntries='';
    for(const entry of ent){
        const nameCell=`<td>${entry.name}</td>`;
        const emailCell=`<td>${entry.email}</td>`;
        const passwordCell=`<td>${entry.password}</td>`;
        const dobCell = `<td>${entry.dob}</td>`;
        const acceptTermsCell=`<td>${entry.acceptTerms ? 'true' : 'false'}</td>`;

        const row =`<tr>${nameCell}${emailCell}${passwordCell}${dobCell}${acceptTermsCell}</tr>`;
        tableEntries +=row;
    } 
        const table=`<table><tr><th>Name</th><th>Email</th><th>Password</th><th>Dob</th><th>Accepted terms?</th></tr>${tableEntries}</table>`;
        let details = document.getElementById("User-details");
        details.innerHTML=table;
        console.log(table);
    }
  
const forms=(event) =>{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const acceptTerms=document.getElementById("acceptTerms").value;
    const entry={
    name,
    email,
    password, 
    dob,
    acceptTerms
    };
    userDet.push(entry);
    localStorage.setItem("User-details",JSON.stringify(userDet));
    spent();
}
user_det.addEventListener("submit",forms);
spent();
