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
