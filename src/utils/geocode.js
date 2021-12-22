const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZ29zZ2Fib3JhcyIsImEiOiJja3FxZTBvOW0wcTRoMnVxYWVtZ3hjMm1mIn0.Ggx9C_VeS9VdiB1Xv_Yq-Q&limit=1';
    request({url, json:true}, (error,{body}={}) => {
        if(error) {
            callback('unable to connect location services!', undefined)
        } else if(body.features.length === 0) {
            callback('unable to find location. Try another search', undefined)
        }else {
            callback(undefined, {
                lat:body.features[0].center[1],
                lng:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;