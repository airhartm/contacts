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

  });

  $(document).on("click","a.contact", (function() {
      personID=this.id;
      var contactInfo;
      contactInfo=person[personID];
          contactMember ="<p>Name: "+contactInfo.firstName+" "+contactInfo.lastName+"</p>";
          contactMember =contactMember+"<p>Phone number: "+contactInfo.phoneNumber+"</p>";
          contactMember =contactMember+"<p>Addresses:</p>";
          contactMember =contactMember+"<ul>";
          contactMember=contactMember+"<li>"+contactInfo.street+", "+contactInfo.city+", "+contactInfo.state+"</li>";
          contactMember =contactMember+"</ul>";
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
          contactMember ="<p>Name: "+this.firstName+" "+this.lastName+"</p>";
          contactMember =contactMember+"<p>Phone number: "+this.phoneNumber+"</p>";
          contactMember =contactMember+"<p>Addresses:</p>";
          contactMember =contactMember+"<ul>";
          contactMember=contactMember+"<li>"+this.street+", "+this.city+", "+this.state+"</li>";
          contactMember =contactMember+"</ul>";
          $('#selectedContact').html(contactMember);
        $('#output').append("<li><a id='"+contactIndex+"' class='contact' href='#selectedContact'>"+this.firstName+" "+this.lastName+"</a></li>");
  };
