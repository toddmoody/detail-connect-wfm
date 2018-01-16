const gmarkers1 = [];
const categoryRef = [];
const infowindow = new google.maps.InfoWindow({
    content: ''
});

// Generate markers based on dataList.js
// Separated in order to assist migration to externally hosted dataList
const markerCount = dataList.length

// Function to init map
const initMap = () => {
    const center = new google.maps.LatLng(-41.279957302831725, 174.77508519021308);
    const mapOptions = {
        zoom: 6,
        center: center,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    for (let i = 0; i < markerCount; i++) {
        addMarker(dataList[i]);
    }
}

// function to push an array of category(s) into the original dataList for filtering purposes 
const categoryPush = () => {
    for(let i = 0; i < dataList.length; i++){
        dataList[i].category = [];
        
        if(dataList[i].consulting === "Yes"){
        //    dataList[i].category = ["consuilting"];
        dataList[i].category.push("Consulting");
        }

        if(dataList[i].steel_detailing === "Yes"){
            dataList[i].category.push("Steel Detailing");
        }

        if(dataList[i].structural_drafting === "Yes"){
            dataList[i].category.push("Structural Drafting");
        }

        if(dataList[i].precast_detailing === "Yes"){
            dataList[i].category.push("Precast Detailing");
        }
    }
};

categoryPush();


// Function to add markers to the map
// Additional logic build in so that dataList can remain unedited (need to use direct WorkflowMax export)
const addMarker = (marker) => {
        const category = marker.category;
        const title = marker.name;
        const coords = marker.address.toString().split(",");
        const pos = new google.maps.LatLng(coords[0], coords[1]);
        
        const precastTooltip = 
        '<h3 class="info-title">' + marker.name + '</h3>' + 
        '<p class="info-sub">Panel Quantity: ' + marker.panel_quantity + '</p>' + 
        '<p class="info-sub">Total Weight: ' + marker.total_weight + ' (T)</p>' + 
        '<p class="info-sub">Job Floor Area: ' + marker.job_floor_area + ' (&#x33a1)</p>' +
        '<p class="info-sub">Services: ' + marker.category.toString().split(",").join(", ") + '</p>' + 
        '<img id="info-img" src=' + marker.image + '>';

        raw=1

        const nonPrecastTooltip = 
        '<h3 class="info-title">' + marker.name + '</h3>' + 
        '<p class="info-sub">Total Weight: ' + marker.total_weight + ' (T)</p>' +  
        '<p class="info-sub">Job Floor Area: ' + marker.job_floor_area + ' (&#x33a1)</p>' +
        '<p class="info-sub">Services: ' + marker.category.toString().split(",").join(", ") + '</p>' + 
        '<img id="info-img" src=' + marker.image.split("dl=0").join("raw=1") + '>';

        // const markerImg = (marker.image === "string") ? marker.image: no-image;
        const content = (marker.precast_detailing === "Yes") ? precastTooltip: nonPrecastTooltip;

        
        // marker.name + marker.job_floor_area;
        // maybe need to use a functoon here in order to display the relevant marker content and then invoke it below for setContent

        marker1 = new google.maps.Marker({
            title: title,
            position: pos,
            category: category,
            map: map,
            icon: "./img/blue-fat-marker.png"
        });

        gmarkers1.push(marker1);

        // Marker click listener
        google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
            return function () {
                console.log('Gmarker 1 gets pushed');
                infowindow.setContent(content);
                infowindow.open(map, marker1);
                map.panTo(this.getPosition());
                map.setZoom(10);    
                $("#Steel Detailing").change(function(){
                    console.log("You clicked Steel Detailing!");
                }); 
            }
        })(marker1, content));
    
}
// function to manage checkbox filtering in relation to job type. Filters are designed to handle multiple criteria.
const updateView = (element) => {	
  	if (element) {
        //Get array with names of the checked boxes
        checkedBoxes = ([...document.querySelectorAll('input[type=checkbox]:checked')]).map(function(o) { return o.id; });
        console.log(checkedBoxes);
        for (i = 0; i < markerCount; i++) {
                marker = gmarkers1[i];
                
                // close any active infowindows when any filter is toggled
                infowindow.close();
       
                //Filter to show any markers containing ALL of the selected options
        		if(checkedBoxes.every(function (o) {
                    return (marker.category).indexOf(o) >= 0;})){
            		marker.setVisible(true);
        		}
                else {
                    marker.setVisible(false);
                }
        }
  	}
  	else {
   		 console.log('No param given');
		}
}

// functioon to handle filter reset
const resetBtn = () => {
    document.getElementById("reset-btn").addEventListener("click", function(){
        location.reload();
    });
}

resetBtn();

// Init map
initMap();
