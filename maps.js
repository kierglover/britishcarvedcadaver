                                function initMap() {
                        var mapDiv = document.getElementById('map-two');
                        var map = new google.maps.Map(mapDiv, {
                        center: {lat: 50.854826, lng: -0.553953},
                        zoom: 8,
                        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
                            });
                            
                            // JOHN //
                             
                        var contentString = '<div id="content">'+
                            '<div id="siteNotice">'+
                            '</div>'+
                            '<h1 id="firstHeading" class="firstHeading">John Fritzalan</h1>'+
                            '<div id="bodyContent">'+
                            '<p class="lead-other-para"><b>John Fritzalan</b> Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et.</p>'+
                            '<a class=navy href="#item1">find out more</a>'
                            '</div>'+
                            '</div>';
                            
                            var infowindow = new google.maps.InfoWindow({
                            content: contentString
                            });
                            
                            var marker = new google.maps.Marker({
                            position: {lat: 50.854826, lng: -0.553953},
                            map: map,
                            title: 'John Fitzalan (Fitzalan Chapel)'
                            });
        
                            marker.addListener('click', function() {
                            infowindow.open(map, marker);
                            });
                            
                            // BISHOP PAUL BUSH //
                            
                            var contentString2 = '<div id="content">'+
                            '<div id="siteNotice">'+
                            '</div>'+
                            '<h1 id="firstHeading" class="firstHeading">Bishop Paul Bush</h1>'+
                            '<div id="bodyContent">'+
                            '<p class="lead-other-para"><b>Bishop Paul Bush</b> Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et.</p>'+
                            '<a class=navy href="#item1">find out more</a>'
                            '</div>'+
                            '</div>';
                            
                            var infowindow2 = new google.maps.InfoWindow({
                            content: contentString2
                            });
                        
                            var bishopPaulBush = new google.maps.Marker({
                            position: {lat: 51.451745, lng: -2.600725},
                            map: map,
                            title: 'BishopPaulBush'
                            });
                            
                            bishopPaulBush.addListener('click', function() {
                            infowindow2.open(map, marker);
                            });
                            
                        
                        }