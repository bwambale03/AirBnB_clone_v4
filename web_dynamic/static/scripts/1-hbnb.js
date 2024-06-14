// Listens for changes on each INPUT checkbox tag
$(document).ready(function () {
    let amenities_list = []
    $('.popover li input[type="checkbox"]').change(function () {
        if ($(this).is(':checked')) {
            amenities_list.push($(this).data('id'));
            
        }
        else {
            amenities_list.pop($(this).data('id'));

        }
    });
});
