--- App Name ---

Detail Connect Projects - Google Maps integration

--- Synopsis / Summary ---

Detail Connect are a Steel Detailing compnay based in Tauranga, NZ. They required a web application to display their hero projects on a Google Map with advanced filtering (due to the complex nature of their wide variety of projects and service offering). The map will be integrated with the WorkFlowMax API in order to redner relevant projects and remain syncronised.  

--- Staging URL ---

https://toddmoody.github.io/detail-connect-wfm/

--- Key functionality ---

Integration with Google Maps API v3
Display of nationwide project portfolio
Filtering of projects and ability to apply multiple filter selections
JS code handles manipulation of data required so that data can be directly exported from workflow max and no manual editing is required
Further to above, given raw export can be used the app is effectively ready for API integration with WFM for automation of edits to projects (handled manually currently due to data sensitivity via the API)

--- Screenshots ---

Main view of app on desktop:

--- Technology ---

HTML
CSS
Flexbox
JavaScript 
WorkFlowMax API integration (JSON-P)

--- Ideas for enhancement ---

In addition to full automation with the WorkflowMax API I'd like to refine the filtering further to also allow project weight based filtering i.e. display projects > 50 tonnes etc (this could also be expanded to more specific project data such as floor size and panel quantity).

Potentially marker clustering however an important aspect of this map for the client is displaying bredth of projects across the country and I feel this is currently achieved better without using clustering. 

Additional stying to the standard google maps infowindow.

