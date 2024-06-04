function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(5.879886,-162.048665), //Set your latitude, longitude
      zoom: 19,
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      scrollwheel: false
    }

    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions); // get the div by id

    var ctaLayer = new google.maps.KmlLayer({
      url: 'https://earth.app.goo.gl/?apn=com.google.earth&isi=293622097&ius=googleearth&link=https%3a%2f%2fearth.google.com%2fweb%2fsearch%2fJohnston%2bAtoll,%2bIlhas%2bMenores%2bDistantes%2bdos%2bEstados%2bUnidos%2f%405.87318898,-162.02958718,1.99310595a,0d,60y,95.73430776h,85t,0r%2fdata%3dCigiJgokCVe7PW80MRhAESlEq1nVvxZAGZppYzf-PWTAIRIcGd20RWTAIjAKLEFGMVFpcE5ZNEl1SFdwTUhTMjU4dEdMai1xU2tZeE5fOHpBWDliZXB0dUZKEAUyKQonCiUKITFzN3F5TkEwTDVWMjd1bWRZSEtDTkhDQ293WlpfY1NMeCABOgMKATA' // Set the KML file
    });

    // attach the layer to the map
    ctaLayer.setMap(map);
}

// load the map
google.maps.event.addDomListener(window, 'load', initialize);