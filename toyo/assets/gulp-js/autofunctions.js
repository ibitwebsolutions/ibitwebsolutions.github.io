function changeOption(optionClass,data){
	$(".size-options > ul").remove();
	var collect = [];
	var count=0;
	for (var i=0; i<data.length; i++){
		count++;
		if(count%7===0){
			collect.push("<li><a href='#' class='"+optionClass+"'>"+data[i]+"</a></li>");

			$(".size-options").append(" <ul class='gp-"+count+"'></ul>");

			for(var x = 0; x < collect.length;x++){
				$(".size-options > ul.gp-"+count+"").append(collect[x]);
			}

			collect = [];
		}else{
			 if(data.length - 1 === i) {
			 	collect.push("<li><a href='#' class='"+optionClass+"'>"+data[i]+"</a></li>");
			 	$(".size-options").append(" <ul class='gp-"+count+"'></ul>");
			 	for(var y = 0; y < collect.length;y++){
					$(".size-options > ul.gp-"+count+"").append(collect[y]);
				}

				collect = [];

			 }else{
			 	collect.push("<li><a href='#' class='"+optionClass+"'>"+data[i]+"</a></li>");
			 }
		}
	};
}

function carSlide(carImg,carThumb){
	var CarsList = cars;
	var CarImg = carImg;
	var CarThumb = carThumb;

	for(var i=0;i<CarsList.length;i++){
		if (CarsList[i].maker==$('#maker').val()) {
			CarImg.slick('slickAdd',"<div><img data-lazy='assets/img/cars/"+CarsList[i].maker+"/"+CarsList[i].model+".png' data-maker='"+CarsList[i].maker+"' data-model='"+CarsList[i].model+"'/></div>");
			CarThumb.slick('slickAdd',"<div><img data-lazy='assets/img/cars/"+CarsList[i].maker+"/"+CarsList[i].model+".png' data-maker='"+CarsList[i].maker+"' data-model='"+CarsList[i].model+"'/></div>");

		}
	}
}

function carData(maker,model){
	var CarsList = cars;
	for(var i=0;i<CarsList.length;i++){
		maker.append("<option value='"+CarsList[i].maker+"' data-index='"+i+"'>"+CarsList[i].maker+"</option>");
	}
	model.append("<option value='"+CarsList[0].model+"'>"+CarsList[0].model+"</option>");
}