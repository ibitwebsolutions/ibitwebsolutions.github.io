$(document).ready(function(){$(".search-label").on("click",function(o){$(".form-group").toggleClass("sb-search-open"),$(".navbar-right").toggleClass("open"),$(".socials > li:first-child").toggleClass("open"),$(".searchForm  input[type='text']").focus(),o.stopPropagation()}),$(document).on("click",function(o){!1===$(o.target).is(".form-group")&&$(".form-control").val().length}),$(".searchForm-submit").click(function(o){$(".form-group").toggleClass("sb-search-open"),$(".navbar-right").toggleClass("open"),$(".socials > li:first-child").toggleClass("open"),$(".searchForm  input[type='text']").focus(),$(".searchForm .form-control").each(function(){0==$(".searchForm .form-control").val().length&&($(".form-group input").val(""),o.preventDefault())})})});