'use strict'

function initMap() {
const centre = { lat: -41.279957302831725, lng: 174.77508519021308 };
const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: centre,
        mapTypeId: 'satellite'
});
const data = dataListCon;
const marker = new google.maps.Marker({
    position: centre,
    map: map

});

    for(let i = 0; i < data.length; i++) {
        
        const pincolors = [];
        let tooltip = "";
        const coords = data[i].address.toString().split(",");
        const latLng = new google.maps.LatLng(coords[0], coords[1]);

        //variables to manage filtering of jobs across all combinations of services
        const sD_sTRDR_cO_cK = document.querySelector("input[name=sD_sTRDR_cO_cK]");
        const sD_pD_sTRDR_cK = document.querySelector("input[name=sD_pD_sTRDR_cK]");
        const sD_cO_cK = document.querySelector("input[name=sD_cO_cK]");
        const sD_sTRDR_cK = document.querySelector("input[name=sD_sTRDR_cK]");
        const sD_pD_cK = document.querySelector("input[name=sD_pD_cK]");
        const sD_cK = document.querySelector("input[name=sD_cK]");
        const pD_cK = document.querySelector("input[name=pD_cK]");

        //function to handle filtering of jobs via checkbox(s) listener
        const checkboxHandler = (scope) => {
            scope.addEventListener( 'change', function() {
                if(this.checked) {
                    marker.setVisible(true);
                } else {
                    marker.setVisible(false);
                }
            });
        }

        const jobType = () => {
            if(data[i].steel_detailing === "Yes" && data[i].structural_drafting === "Yes" && data[i].consulting === "Yes"){
                tooltip = '<h3>' + data[i].name + '</h3><p>Total Weight: ' + data[i].total_weight + ' (T)</p><p>Floor area: ' + data[i].job_floor_area + ' (m2)</p><p><strong>Services:</strong></p><ul><li>Steel Detailing</li><li>Structural Drafting</li><li>Consulting</li></ul>';
                pincolors[i] = '293db6';
                checkboxHandler(sD_sTRDR_cO_cK);
            } 
            else if(data[i].steel_detailing === "Yes" && data[i].precast_detailing === "Yes" && data[i].structural_drafting === "Yes"){
                 tooltip = '<h3>' + data[i].name + '</h3><p>Panel Count: ' + data[i].panel_quantity + ' (T)</p><p>Total Weight: ' + data[i].total_weight + ' (T)</p><p>Floor area: ' + data[i].job_floor_area + ' (m2)</p><p><strong>Services:</strong></p><ul><li>Steel Detailing</li><li>Precast Detailing</li><li>Structural Drafting</li></ul>';
                 pincolors[i] = '4c5bb6';
                 checkboxHandler(sD_pD_sTRDR_cK);
             } 
            else if(data[i].steel_detailing === "Yes" && data[i].consulting === "Yes"){
                tooltip = '<h3>' + data[i].name + '</h3><p>Total Weight: ' + data[i].total_weight + ' (T)</p><p>Floor area: ' + data[i].job_floor_area + ' (m2)</p><p><strong>Services:</strong></p><ul><li>Steel Detailing</li><li>Consulting</li></ul>';
                pincolors[i] = '636fb6';
                checkboxHandler(sD_cO_cK);
            } 
            else if(data[i].steel_detailing === "Yes" && data[i].structural_drafting === "Yes"){
                tooltip = '<h3>' + data[i].name + '</h3><p>Total Weight: ' + data[i].total_weight + ' (T)</p><p>Floor area: ' + data[i].job_floor_area + ' (m2)</p><p><strong>Services:</strong></p><ul><li>Steel Detailing</li><li>Structrual Drafting</li></ul>';
                pincolors[i] = '7b84b7';
                checkboxHandler(sD_sTRDR_cK);
            } 
            else if(data[i].steel_detailing === "Yes" && data[i].precast_detailing === "Yes"){
                tooltip = '<h3>' + data[i].name + '</h3><p>Panel Count: ' + data[i].panel_quantity + ' (T)</p><p>Total Weight: ' + data[i].total_weight + ' (T)</p><p>Floor area: ' + data[i].job_floor_area + ' (m2)</p><p><strong>Services:</strong></p><ul><li>Steel Detailing</li><li>Precast Detailing</li></ul>';
                pincolors[i] = '959ab8';
                checkboxHandler(sD_pD_cK);
            }
            else if(data[i].steel_detailing === "Yes"){
                tooltip = '<h3>' + data[i].name + '</h3><p>Total Weight: ' + data[i].total_weight + ' (T)</p><p>Floor area: ' + data[i].job_floor_area + ' (m2)</p><p><strong>Services:</strong></p><ul><li>Steel Detailing</li></ul>';
                pincolors[i] = 'adadad';
                checkboxHandler(sD_cK);
            }
            else if(data[i].precast_detailing === "Yes"){
                tooltip = '<h3>' + data[i].name + '</h3><p>Panel Count: ' + data[i].panel_quantity + ' (T)</p><p>Total Weight: ' + data[i].total_weight + ' (T)</p><p>Floor area: ' + data[i].job_floor_area + ' (m2)</p><p><strong>Services:</strong></p><ul><li>Precast Detailing</li></ul>';
                pincolors[i] = 'a2a5b6';
                checkboxHandler(pD_cK);
            }
            else {
            console.log(data[i]);
            }
        }

        jobType();

        const marker = new google.maps.Marker({
            position: latLng,
            map: map,
            entireObject: data[i],
            icon: new google.maps.MarkerImage('http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=•|' + pincolors[i]) 
        });

        const infowindow = new google.maps.InfoWindow({
            content: tooltip
        });

        marker.addListener('mouseout', function(){
            if (infowindow) {
                infowindow.close();
            }
        });

        marker.addListener('mouseover', function(){
            infowindow.open(map, marker);
        });
    }

        //position the map legend & pull in the checkboxes for filtering
        map.controls[google.maps.ControlPosition.RIGHT_TOP].push
        (document.getElementById('legend'));   

} 
