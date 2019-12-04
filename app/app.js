const application = require("tns-core-modules/application");

// Google Maps SDK - API KEY
if(application.ios){
    GMSServices.provideAPIKey("AIzaSyCuaTZ-vUIU76Yfw032umnabe_cp1y-EZc");
}

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
