"use strict";

//Asynchronus Background image loading
var img1 = document.createElement("img");

$('body').css('background-image', "url("+bgTemp+")");

$(img1).attr('src', 'assets/img/bg.jpg').on('load', function() {
   $(this).remove();
   $('body').css('background-image', 'url(assets/img/bg.jpg)');
});

//Tire select by size Script
var orig = document.getElementById("chart");
var aspectRatioIMG = document.createElement("img");
var rimIMG = document.createElement("img");
var sizeSet = [];

aspectRatioIMG.src = "assets/img/2.png";
rimIMG.src = "assets/img/3.png";


changeOption("tire-width",Twidth);

$(".tire-width").click(function(e){
	e.preventDefault();
	sizeSet.push({"width":$(this).html()});
	changeOption("tire-ratio",Tratio);
	orig.src = aspectRatioIMG.src;
	$('#skip').attr('style','display: inline-block');
});

$(".size-options").on("click", "a.tire-ratio", function(){
    sizeSet.push({"ratio":$(this).html()});
	changeOption("tire-rim",Trim);
	orig.src = rimIMG.src;
	$('#skip').attr('style','display: none');
});

$(".size-options").on("click", "a.tire-rim", function(){
    sizeSet.push({"rim":$(this).html()});
    console.log(sizeSet);
});

$('#skip').click(function(){
	sizeSet.push({"ratio":""});
	changeOption("tire-rim",Trim);
	orig.src = rimIMG.src;
	$('#skip').attr('style','display: none');
});

$(document).ready(function(){

  	$('.car-select').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: $(".left-nav"),
      nextArrow: $(".right-nav"),
	  fade: true,
	  asNavFor: '.car-thumb'
	});

	$('.car-thumb').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  lazyLoad: 'ondemand',
	  arrows: false,
	  asNavFor: '.car-select',
	  dots: true,
	  centerMode: false,
	  focusOnSelect: true
	});

	

	$('#maker').change(function(e){
		var CarsList = cars;
		var index = $(this).find(':selected').data('index');
		$(this).val='';
		$("#model").children('option').remove();

		for(var x=0;x<CarsList[index].models.length;x++){
			$('#model').append("<option value='"+CarsList[index].models[x].model[0].name+"' data-index='"+x+"'>"+CarsList[index].models[x].model[0].name+"</option>");
		}

		$('.car-thumb').slick('slickRemove');

		carSlide($('.car-select'),$('.car-thumb'),index);

	});

	$('#model').change(function(e){
		var CarsList = cars;
		var index = $(this).find(':selected').data('index');

		var slideno = index + 1;
		$('.car-thumb').slick('slickGoTo', slideno - 1);
	});


	$('.news-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		lazyLoad: 'ondemand',
		prevArrow: $(".prev"),
		nextArrow: $(".next"),
		fade: false,
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		adaptiveHeight: true
	});

	$('.result-slide').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		lazyLoad: 'ondemand',
		prevArrow: $(".prev"),
		nextArrow: $(".next"),
		fade: false,
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		adaptiveHeight: true
	});

	carData($('#maker'),$('#model'));//First load
	carSlide($('.car-select'),$('.car-thumb'),0);//Second load
}); 