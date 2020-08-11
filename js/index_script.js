document.getElementById("activity_href").onclick = function () {
    location.href = "activities.html?email_id="+email;
    document.getElementById('tmp').innerHTML=email;
};

var email="";
function add_contact(){
	var isValid=true;
    var name=document.getElementById('name');
    email_id=document.getElementById('email_id');
    var contact_no=document.getElementById('contact_no');

    email=email_id.value;

// Validation
    if(name.value=="") { isValid=false; } if(email_id.value=="") {
    isValid=false; } if(contact_no.value=="") { isValid=false; }

	var dialogContent= document.getElementById("popup-body");
	if (!isValid) {
		dialogContent.innerHTML="Please fill all details";
	}
	else{
		dialogContent.innerHTML="Thank you for your interest! We will reach out to you shortly";
		
	}

}

function reload_fun(){
	var name=document.getElementById('name');
    var email_id=document.getElementById('email_id');
    var contact_no=document.getElementById('contact_no');
    name.value ="";
    email_id.value="";
    contact_no.value="";

}



function track_event(){
	var url_string = window.location.href
	var url = new URL(url_string);
	var email_id = url.searchParams.get("email_id");
	var sample_event_properties = {
    'title': 'High Intent - Purchase Request Button click',
    'email': email_id
  };

  freshsales.trackEvent('High Intent - Purchase Request Button click', sample_event_properties,function(response){
              console.log("Succeeded to push to Freshsales!!", response);
            }, function(response){
              console.log("Failed to push to Freshsales!!", response);
            });
            
	
}