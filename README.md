## App Name 

Detail Connect Projects - Google Maps integration

##### Synopsis / Summary 

Detail Connect provide technical steel drafting and detailing services nationwide. The client needed an elegant solution to reinforce the breadth of their service offering, and showcase projects and related imagery. I decided to base this solution on a JavaScript integration with the Google Maps APIv3. The solution also needed to be future proofed in order to make an integration with WorkFlowMax as seamless as possible at a later date (more below). 

###### Staging URL

https://toddmoody.github.io/detail-connect-wfm/ 

###### Production URL

https://www.detailconnect.nz/projects/

###### Key deliverables

- UI/UX Design
- Front-End development 
- RESTful API integration
- Deployment & Hosting

###### Technology 

- Sketch / Photoshop (UI/UX)
- HTML
- CSS incl. Flexbox
- JavaScript / ES6
- Google Maps APIv3 & Marker Clusterer Library 
- WorkFlowMax API integration 'ready' (JSON-P)
- Webpack

###### More on technical process

The fundamental requirement of this project was to display project markers based on lat/long coordinates and related information (so an integration with Google Maps was an obvious choice to achieve this). The client had an existing WordPress website but after some extensive investigation there was nothing suitable on the plugin market that would meet their needs due to their very bespoke visual and filtering requirements. So, this was a great opportunity to get to know the Google Maps API and leverage some ES6. 

Here's a little bit more info on the core app features:

- Project data: The client’s project data (including lat/long coordinates) was extensive and stored in WorkFlow Max. Initially, the idea was to automate project data to the map via an integration with the WFM API, however following initial testing it was determined this could potentially be a security risk as a lot of commercially sensitive information was be accessible (pricing, proposals etc). In the interim, it was decided that I would develop the app to read the exact WFM JSON-P data schema in order to streamline a future integration which would be put if they apply tighter controls to their API (but initially the data would be manually imported and accessed via a JS object).
- Rendering of project data: We needed to display relevant project data for each individual project (i.e. project, services, project weight etc) incl. imagery that was stored in dropbox. I utilised the native Google Infowindow as the container for the data which would be presented to the user on-click. There were some challenges here, in particular, building logic specific to each client 'service' as the marker information/layout varied based on the service provided (and in some cases multiple services were provided). Displaying the imagery within the infowindow via Dropbox also posed some challenges. Using standard Dropbox URL’s was not possible as they would attempt to load within a dropbox container - and I needed full control of a raw hosted image. A simple regex based solution was applied to take the original URL query string and update it so the application had access to the raw image file (which was then further modified in the CSS). This also needed to be done without making any changes to the original data export so future data uploads could be made without modification and the integrity of the data format was retained/protected.
- Project filtering: The requirement here was to enable the user to filter based on 'service' and also allow them to select multiple 'service(s)' which would obviously update the map to display only relevant markers. Again, there was a degree of complexity mainly around the fact that some jobs needed to be displayed across multiple service selections e.g. a single job may be have included up to for different services and therefore would need to display across all of those filter selections. I also wanted users to be able to select multiple criteria for filtering which added a substantial more conditional logic. 
- Marker Clustering: Following the development of an MVP using vanilla Javascript that included all of the project data (90+ projects across the country) it was obvious that the UX would need to be improved so projects would be easier to find, in particular in areas with a high density of markers. Luckily Google offer the MarkerCluster library which allowed for a much clearer view by 'clustering' markers together that were located in a similar proximity to each other.

###### Ideas for enhancement 

- [x] Close infowindows when map is clicked.
- [ ] In addition to full automation with the WorkflowMax API (as above this is dependent on their developer adding an additional layer of security to their API).
- [ ] I'd like to refine the filtering further to also allow project weight based filtering i.e. display projects > 50 tonnes etc (this could also be expanded to more specific project data such as floor size and panel quantity).
- [ ] There's a lot more I could achieve by enhancing styling. Firstly, I'd like to update the CSS to SASS and a couple of initial ideas include updating the styling of the standard google maps infowindow to something more on-brand. I'd also like to improve the inputs for the toggles.
- [ ] Currently the map is displayed in WordPress using an iFrame which is far from ideal but I was restricted by the WordPress environment. If we were to fully automate with Workflow Max then I would like to revisit this from a general best practice and security perspective.




