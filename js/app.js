$(document).ready(function() {
    $('.PhoneNumberPlus').click(function(event) {
        event.preventDefault();
        if ($('#ShowContact ul').hide()) {
            prompt("Insert another Phone Number:")
            var NewPhoneSave = $('#PhoneinputBox').val()
            contact.PhoneNumber.push(NewPhoneSave)
        } else {
            null
        }
    })
    $('.AddressPlus').click(function(event) {
        event.preventDefault();
        if ($('#ShowContact ul').hide()) {
            prompt("Insert another Address:")
            var NewAddressSave = $('#PhoneinputBox').val()
            contact.Address.push(NewAddressSave)
        } else {
            null
        }

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


        if (!$("#FirstinputBox:input").val() || !$("#PhoneinputBox:input").val()) { //Alert if first name or phone number isnt included
            alert("Please insert a First Name & Phone Number")
        } else {

            var save = {
                FirstName: contact.FirstName,
                LastName: contact.LastName,
                PhoneNumber: contact.PhoneNumber,
                Address: contact.Address,
                City: contact.City,
                State: contact.State
            };


            entireList.push(save); //save the entire new contact

            $('#ShowContact ul').append("<li id='" + (entireList.length - 1) + "'>" + "<h1>" + save.FirstName + " " + save.LastName + "</h1>" + 'First Name:' + " " + save.FirstName + "</br>" + 'Last Name:' + " " + save.LastName + "</br>" + 'Phone Number:' + " " + " " + save.PhoneNumber + "</br>" + 'Address:' + " " + save.Address + "</br>" + 'City:' + " " + save.City + "</br>" + 'State:' + " " + save.State + "</li>");

            $('#ContactsList ul').append("<li><a href='#' data-index='" + (entireList.length - 1) + "'>" + contact.FirstName + " " + contact.LastName + "</a></li>");

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
        document.getElementById('Edit').style.display = 'inline-block';
        document.getElementById('Delete').style.display = 'inline-block';
        console.log(index)
    })

    var entireList = []; //this saves the input from var contact

$('#Edit').on('click', 'button i.fa-fa', function() {
    event.preventDefault();
    $('#FirstinputBox').val();
    $('#LastinputBox').val();
    $('#PhoneinputBox').val();
    $('#AddressinputBox').val();
    $('#CityinputBox').val();
    $('#StateinputBox').val();
});

$('#Delete').on('click', 'button i.fa-fa-trash-o', function() {
    $('div#ContactsList ul li a').remove();

})


});

