var contactIndex=0;
var person=[];
var contactMember;
var personID;

$(document).ready(function() {

  $('#submission').click(function(e) {
    e.preventDefault();
    person.push ( new Contact());
    $('#firstName').val("");
    $('#lastName').val("");
    $('#phoneNumber').val("");
    $('#street').val("");
    $('#city').val("");
    $('#state').val("");
    contactIndex++;
    //return person[contactIndex];
  });

  $(document).on("click","a.contact", (function() {
      personID=this.id;
      var contactInfo;
      contactInfo=person[personID];
          contactMember ="<p>"+contactInfo.firstName+" "+contactInfo.lastName+"</p>";
          contactMember =contactMember+"<p>"+contactInfo.street+"</p>";
          contactMember =contactMember+"<p>"+contactInfo.city+", "+contactInfo.state+"</p>";
          contactMember =contactMember+"<p>"+contactInfo.phoneNumber+"</p>";
          $('#selectedContact').html(contactMember);

  }));

});


  function Contact(){
        this.firstName=$('#firstName').val();
        this.lastName=$('#lastName').val();
        this.phoneNumber=$('#phoneNumber').val();
        this.street=$('#street').val();
        this.city=$('#city').val();
        this.state=$('#state').val();
        this.idNumber="contact"+contactIndex;
        contactMember =this.firstName+" "+this.lastName+"<br/>";
        contactMember =contactMember+this.street+"<br/>";
        contactMember =contactMember+this.city+", "+this.state+"<br/>";
        contactMember =contactMember+this.phoneNumber;
        $('#selectedContact').html("<p>"+contactMember+"</p>");
        $('#output').append("<li><a id='"+contactIndex+"' class='contact' href='#selectedContact'>"+this.firstName+" "+this.lastName+"</a></li>");
  };
