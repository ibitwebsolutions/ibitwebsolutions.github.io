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