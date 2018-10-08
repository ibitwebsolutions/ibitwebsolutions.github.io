$(document).ready(function() {
  

    $('.search-label').on("click", (function(e) {
        $(".form-group").toggleClass("sb-search-open");
        $(".navbar-right").toggleClass("open");
        $(".socials > li:first-child").toggleClass("open");
        $(".searchForm  input[type='text']").focus();
        e.stopPropagation()
    }));
    $(document).on("click", function(e) {
        if ($(e.target).is(".form-group") === false && $(".form-control").val().length == 0) {
            // $(".form-group").removeClass("sb-search-open");
            // $(".navbar-right").removeClass("open");
            // e.stopPropagation()
           // $(".form-group input[type='text']").focus();
        }
    });
    $(".searchForm-submit").click(function(e) {
      $(".form-group").toggleClass("sb-search-open");
        $(".navbar-right").toggleClass("open");
        $(".socials > li:first-child").toggleClass("open");
        $(".searchForm  input[type='text']").focus();
        $(".searchForm .form-control").each(function() {
            if ($(".searchForm .form-control").val().length == 0) {
                $(".form-group input").val('');
                e.preventDefault();
            }
        })
    })
})