Add this snippet to your application.js file: 

```
var sendTrackableEvent = function(web_property_id, type, location){
	var _bm_event = {
	  web_property_id: web_property_id,
	  type: type,
	  location: location
	}

	var _bm_request = $.ajax({
	  url: "http://localhost:4000/events",
	  method: "post",
	  data: {event: _bm_event}
	})
}
```

Now you need to decide what you want to track: clicks, page views, hovering, or something else.  I will show you how to track page views and clicks.  

To track page views you can simply add the following below your sendTrackableEvent snippet of code above.  

```
$(document).ready(function(){
	sendTrackableEvent("your-web-property-id", "page view", window.location.origin)
})
```

That's it!  With this you will see each page view. 

To view clicks you will need one additional step than the page views.  Add the folowing to your application.js file: 

```
$(document).ready(function(){
	$("a.trackable").click(function(){
			alert( "test" );
			sendTrackableEvent("your-web-property-id", "click", $(this).data("track"));
		}
	)
})
```

If you want to track both page views and links do this: 

```
$(document).ready(function(){
	sendTrackableEvent("your-web-property-id", "page view", window.location.origin)

	$("a.trackable").click(function(){
			alert( "test" );
			sendTrackableEvent("your-web-property-id", "click", $(this).data("track"));
		}
	)
})
```

Then you need to tag each link you want to track like this: 

```
<%# link_to "Link Name", link_path, class: "trackable", "data-track" => "whatever-you-want-to-identify-link" %>
```

That's all.