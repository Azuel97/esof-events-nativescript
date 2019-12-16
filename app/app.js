const application = require("tns-core-modules/application");
const config = require("./config");
const MapAPI = config.google.map.provideAPIKey || "AIzaSyCuaTZ-vUIU76Yfw032umnabe_cp1y-EZc";

// Google Maps SDK - API KEY
if(application.ios){
    GMSServices.provideAPIKey(MapAPI);
}

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
