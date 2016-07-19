$(document).ready(function() {

    var record = 0

    $('#AddButton').click(function(event) {
        event.preventDefault();
        var contact = [{
            FirstName: $('#FirstinputBox').val(),
            LastName: $('#LastinputBox').val(),
            PhoneNumber: [$('#PhoneinputBox').val()],
            Address: [$('#AddressinputBox').val()],
            City: $('#CityinputBox').val(),
            State: $('#StateinputBox').val(),
        }];

        if(!$("#FirstinputBox:input").val() || !$("#PhoneinputBox:input").val()) { //Alert if first name or phone number isnt included
        		alert("Please insert a First Name & Phone Number")
        	} else {

        for (var i = 0; i < contact.length; i++) {
        	

            $('#ContactsList ul').append("<li>" + contact[i].FirstName + " " + contact[i].LastName + "</li>") //Create a link to the contacts at the bottom which is saved in #ShowContact ul

            //+Need to add link to saved object {save}
  

            var save = {
                FirstName: contact[i].FirstName,
                LastName: contact[i].LastName,
                PhoneNumber: contact[i].PhoneNumber,
                Address: contact[i].Address,
                City: contact[i].City,
                State: contact[i].State
            };
        //save the entire new contact

        }

        function pushIt() {
            contact.push(save);
        }
        pushIt();

        // push the saved object into the contact array of objects
    	
    	$('#ShowContact ul').append("<li>" + save + "</li>");

    	//save the new contact in #ShowContact ul
  
        $('#FirstinputBox').val("");
        $('#LastinputBox').val("");
        $('#PhoneinputBox').val("");
        $('#AddressinputBox').val("");
        $('#CityinputBox').val("");
        $('#StateinputBox').val("");

        //clear input boxes

    }



    })


});