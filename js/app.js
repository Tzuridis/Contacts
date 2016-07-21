$(document).ready(function() {

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

            $('#ShowContact ul').append("<li class='Shown' data-index='" + (entireList.length - 1) + "' id='" + (entireList.length - 1) + "'>" + "<h1>" + save.FirstName + " " + save.LastName + "</h1>" + 'First Name:' + " " + save.FirstName + "</br>" + 'Last Name:' + " " + save.LastName + "</br>" + 'Phone Number:' + " " + " " + save.PhoneNumber + "</br>" + 'Address:' + " " + save.Address + "</br>" + 'City:' + " " + save.City + "</br>" + 'State:' + " " + save.State +
                '<div class="Edit"><button type="button" class="btn btn-default addButton"><i class="fa fa-pencil"></i></button></div><div class="Delete"><button type="button" class="btn btn-default addButton"><i class="fa fa-trash-o"></i></button></div>' +
                "</li>");

            // data-index='" + (entireList.length - 1) + "'

            $('#ContactsList ul').append("<li><a href='#' class='bottomlink linkListItem' data-index='" + (entireList.length - 1) + "'>" + contact.FirstName + " " + contact.LastName + "</a></li>");

            $('#FirstinputBox').val("");
            $('#LastinputBox').val("");
            $('#PhoneinputBox').val("");
            $('#AddressinputBox').val("");
            $('#CityinputBox').val("");
            $('#StateinputBox').val("");

            //clear input boxes

        }

    })

    $('body').on('click', '.bottomlink', function() {
        var index = $(this).data('index');
        $('li#' + index).show();
        $('li#' + index).siblings().hide();
        console.log(index)
    })

    var entireList = []; //this saves the input from var contact


    $('body').on('click', '.Edit button', function() {
        event.preventDefault();

        var Shownindex = $('#li + save.FirstName')
        console.log(Shownindex)

        $('#FirstinputBox').val();
        $('#LastinputBox').val();
        $('#PhoneinputBox').val();
        $('#AddressinputBox').val();
        $('#CityinputBox').val();
        $('#StateinputBox').val();

    });

    $('body').on('click', '.Delete button', function() {
        var deleteIndex = $(this).parent().parent().data('index');
        $(".linkListItem").trigger("customDelete", [deleteIndex]);
        $(this).parent().parent().remove();
    });


    $('body').on("customDelete", ".linkListItem", function(e, index) {
    	console.log(e)
        if ($(this).data('index') === index) {
        	console.log($(this)[0])
            $(this).parent().remove();

        }
    });



});