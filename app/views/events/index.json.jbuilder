json.array!(@events) do |event|
  json.extract! event, :id, :web_property_id, :type, :ip_address
  json.url event_url(event, format: :json)
end
