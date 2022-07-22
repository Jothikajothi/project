 const submit_btn=document.querySelector("#submit_user");
 var count_row = 1;

 submit_btn.addEventListener("click", function(event) {
     event.preventDefault();

     const user_name=document.querySelector("#fullname").value;
     const user_email=document.querySelector("#email").value;
     const user_phone=document.querySelector("#phone").value;
     

     
    genetate_new_row(user_name,user_email,user_phone);

     reset_form();
      

 });

  function genetate_new_row(user_name,user_email,user_phone){
    const user_body=document.querySelector("#user_table_body");
    let row=document.createElement("tr");
    row.innerHTML=`
    <td>${count_row}</td>
    <td>${user_name}</td>
    <td>${user_email}</td>
    <td>${user_phone}</td>
    <td>
        <a href="#" class="button-primary">Edit</a> |
        <a href="#" class="butto-primary">Delate</a>
    </td>
    `; 
    user_body.appendChild(row);
    count_row++;
  }


 function reset_form(){
     document.querySelector("#fullname").value= "";
    document.querySelector("#email").value= "";
     document.querySelector("#phone").value ="";
 }
 
 