var sendTrackableEvent = function(web_property_id, type){
	var _bm_event = {
	  web_property_id: web_property_id,
	  type: type
	}

	var _bm_request = $.ajax({
	  url: "http://lauralee-blocmetrics.herokuapp.com/events",
	  method: "post",
	  data: {event: _bm_event}
	})

	// _bm_request.send(JSON.stringify(_bm_event));
}






$(document).ready(function() {
	var ctx = $("#myBarChart").get(0).getContext("2d");
	var myNewChart = new Chart(ctx);

	//Bar Graph
	var data = {
	labels : JSON.parse($("#count-date").html()),
	datasets : [
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			data : JSON.parse($("#count").html())
		}
	]}
	new Chart(ctx).Bar(data);
})