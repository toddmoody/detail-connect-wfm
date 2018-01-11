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
        dataList[i].category.push("consulting");
        }

        if(dataList[i].steel_detailing === "Yes"){
            dataList[i].category.push("steelDetailing");
        }

        if(dataList[i].structural_drafting === "Yes"){
            dataList[i].category.push("structuralDrafting");
        }

        if(dataList[i].precast_detailing === "Yes"){
            dataList[i].category.push("precastDetailing");
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
        '<h3>' + marker.name + '</h3>' + 
        '<img class="marker-thumb" src=' + marker.image + '>' +
        '<p><strong>Panel Quantity:</strong> ' + marker.panel_quantity + '</p>' + 
        '<p><strong>Total Weight:</strong> ' + marker.total_weight + '</p>' + 
        '<p><strong>Job Floor Area:</strong> ' + marker.job_floor_area + '</p>' +
        '<p><strong>Services:</strong> ' + marker.category + '</p>';

        const nonPrecastTooltip = 
        '<h3>' + marker.name + '</h3>' + 
        '<img class="marker-thumb" src=' + marker.image + '>' +
        '<p><strong>Total Weight:</strong> ' + marker.total_weight + '</p>' + 
        '<p><strong>Job Floor Area:</strong> ' + marker.job_floor_area + '</p>' +
        '<p><strong>Services:</strong> ' + marker.category + '</p>';

        const content = (marker.precast_detailing === "Yes") ? precastTooltip: nonPrecastTooltip;

        
        // marker.name + marker.job_floor_area;
        // maybe need to use a functoon here in order to display the relevant marker content and then invoke it below for setContent

        marker1 = new google.maps.Marker({
            title: title,
            position: pos,
            category: category,
            map: map
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