$(document).ready(function() {
    $(".category-button").click(function() {
        var filterValue = $(this).data('filter');

        // Remove 'active' class from all buttons and add it to the clicked button
        $(".category-button").removeClass("active");
        $(this).addClass("active");

        // Show/hide items based on the selected category
        if (filterValue === 'all') {
            $(".col-sm-3").show("slow");
        } else {
            $(".col-sm-3").hide("slow");
            $("." + filterValue).show("slow");
        }
    });
});
