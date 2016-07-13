var contactIndex=0;


  function Contact(){
         this.firstName=$('#firstName').val();
         this.lastName=$('#lastName').val();
         this.phoneNumber=$('#phoneNumber').val();
         this.street=$('#street').val();
         this.city=$('#city').val();
         this.state=$('#state').val();
  }


   //user supplies missing integers in sequence
  $('#submission').click(function(e) {
    e.preventDefault();
	var person = new Contact;
    console.log(person)
    contactIndex++;
    //return person[contactIndex];
         }
 

  });

