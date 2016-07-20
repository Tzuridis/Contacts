$(document).ready(function() {
	$('#NewPhone').click(function(event){
		event.preventDefault();
		alert("")
	})
	$('#NewAddress').click(function(event){
		event.preventDefault();
		alert("")
	})
    $('#AddButton').click(function(event) {
        event.preventDefault();
        var contact = {
            FirstName: $('#FirstinputBox').val(),
            LastName: $('#LastinputBox').val(),
            PhoneNumber: [], 
            Address: [],
            City: $('#CityinputBox').val(),
            State: $('#StateinputBox').val(),
        };

        contact.PhoneNumber.push($('#PhoneinputBox').val())
        contact.Address.push($('#AddressinputBox').val())


        if (!$("#FirstinputBox:input").val() || !$("#PhoneinputBox:input").val()) { //Alert if first name or phone number isnt included
            alert("Please insert a First Name & Phone Number")
        } else {


            //Create a link to the contacts at the bottom which is saved in #ShowContact ul

            //+++-----Need to add link to saved object {save}----+++


            var save = {
                FirstName: contact.FirstName,
                LastName: contact.LastName,
                PhoneNumber: contact.PhoneNumber,
                Address: contact.Address,
                City: contact.City,
                State: contact.State
            };
            //save the entire new contact

            entireList.push(save);

             $('#ShowContact ul').append("<li id='" + (entireList.length - 1) + "'>" + "<h1>" +  save.FirstName + " " + save.LastName + "</h1>" + 'First Name:' + " " + save.FirstName + "</br>" + 'Last Name:' + " " + save.LastName + "</br>" + 'Phone Number:' + " " + " " + save.PhoneNumber + "</br>" + 'Address:' + " " + save.Address + "</br>" + 'City:' + " " + save.City + "</br>" + 'State:' + " " + save.State + "</li>");

            $('#ContactsList ul').append("<li><a href='#' data-index='" + (entireList.length - 1) + "'>" + contact.FirstName + " " + contact.LastName + "</a></li>");



            // push the saved object into the contact array of objects


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

    $('body').on('click', 'div#ContactsList ul li a', function() {
    	var index = $(this).data('index');
    	$('li#' + index).show();
    	$('li#' + index).siblings().hide();
    	console.log(index)
    })


});



var entireList = [];

//this saves the input from var contact