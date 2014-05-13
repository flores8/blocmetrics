
var sendTrackableEvent = function(web_property_id, type){
	var _bm_event = {
	  web_property_id: web_property_id,
	  type: type
	}

	var _bm_request = $.ajax({
	  url: "http://localhost:4000/events",
	  method: "post",
	  data: {event: _bm_event}
	})

	// _bm_request.send(JSON.stringify(_bm_event));
}



//some other page
$("a").click({
	sendTrackableEvent(my_id, "click")
});

//jquery event handlers (page views (not sure... maybe .ready(), click (.click), on hover(.hover), )