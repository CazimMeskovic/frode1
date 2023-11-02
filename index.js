function sendMail() {
    var params = {
      contact: document.getElementById("name").value,
    
    };
  
   /*  const serviceID = "service_b02bkjl"; */   ////   moji kodovi
  /*   const templateID = "template_6tq542d"; */
   
  // frodovi kodovi
   const serviceID = "service_8wyi8x2";
   const templateID = "template_2w8nqvk";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

 