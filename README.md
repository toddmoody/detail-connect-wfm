## App Name 

Detail Connect Projects - Google Maps integration

##### Synopsis / Summary 

Detail Connect are a Steel Detailing compnay based in Tauranga, NZ. They required a web application to display their hero projects on a Google Map with advanced filtering (due to the complex nature of their wide variety of projects and service offering). The map will be integrated with the WorkFlowMax API in order to redner relevant projects and remain syncronised.  

###### Staging URL

https://toddmoody.github.io/detail-connect-wfm/ 

###### Key functionality
Integration with Google Maps API v3
Display of nationwide project portfolio
Filtering of projects and ability to apply multiple filter selections
JS code handles manipulation of data required so that data can be directly exported from workflow max and no manual editing is required
Further to above, given raw export can be used the app is effectively ready for API integration with WFM for automation of edits to projects (handled manually currently due to data sensitivity via the API)

###### Technology 

- HTML
- CSS / Flexbox
- JavaScript / ES6
- WorkFlowMax API integration (JSON-P)
- Webpack

###### Ideas for enhancement 

- [x] Potentially marker clustering.
- [x] Close infowindows when map is clicked.
- [x] In addition to full automation with the WorkflowMax API I'd like to refine the filtering further to also allow project weight based filtering i.e. display projects > 50 tonnes etc (this could also be expanded to more specific project data such as floor size and panel quantity).
- [ ] Additional stying to the standard google maps infowindow.




----

## App Name 

Right First Time (RFT) Engineering - React SPA.

##### Synopsis / Summary 

RFT Engineering required a website to start developing their digital presence and acquire new leads and customers (no existing digital presence). The main objectives were centered around promoting and clarifying their wide range of services (incl. non-standard Engineering Services available via third parties), and; using their extensive library of project photos effectively to showcase their projects. Organic search was also an important consideration over the longer-term.

###### Production URL

https://rftengineering.co.nz/

###### Key deliverables

- UI/UX design
- Front-End development
- Deployment 
- SEO (in progress)

###### Technology 

- NPM
- Sketch & Photoshop (UI/UX)
- HTML
- SASS
- Javascript (ES6) & React (project bootstrapped using create-react-app)
- Babel
- Webpack 

###### More on technical process

I decided to build in React (using Create-React-App). The current version of the website is largely static (with some use of state management to control the responsive nav). I certainly could have achieved a similar end result using standard markup, styling and vanilla JS and I'm really conscious as a developer not to always reach for the latest tools without good reason. However, in this case, I think there's a lot of opportunity to dial up the functionality of this site as future enhancements. I like knowing that by using React, I'll be in a good space to add features as and when required (rather than trying to integrate a front-end framework at a later date). Additionally, I'm really appreciating the workflow efficiencies provided by React (and in particular Create-React-App). 

On the styling side, I used SASS for this application as I think it works nicely with the component based nature of React. However, I prefer to maintain separate SASS files (usually separate ones for larger components). That may change in future as I understand React best-practices would recommend using style objects in the JS file. However for me, as I'm also maintaining a number of vanilla JS applications that don't support style objects, I'd prefer to stick separate files. Again, not specific to this project but I'm also just enjoying the nesting and variable capabilities of SASS.

Overall, this project was really smooth and it's always great to have a happy client. I feel like spending a solid amount of time on UI/IX, in particular solid wireframes was a big factor and the process of going from sketches, to low-fidelity wires, and then finally high-fidelity designs. 

###### Ideas for enhancement 

- [ ] An integration with Google Maps could be really useful here to really clarify the wide range of services offered by RFT and the fact that effectively work nationwide. It could also be a nicer, more interactive way to display the gallery images which are currently organised manually (weighted by importance).
- [ ] Integration with a back-end form service to capture inquires that are submitted would be a cleaner solution (currently using formspree which works to deploy emails to the client but is basic and has no database).
- [ ] Given a little more time I would like to revisit CSS transitions just to add a few more subtle interactions to the UX. 
