const application = require("tns-core-modules/application");
const firebase = require("nativescript-plugin-firebase");

// Google Maps SDK - API KEY
if(application.ios){
    GMSServices.provideAPIKey("AIzaSyCuaTZ-vUIU76Yfw032umnabe_cp1y-EZc");
}


firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    iOSEmulatorFlush: true,  // Risolve bug del simulatore iOS (obbligatoria)
    persist: false,  // Disabilità proprietà offline (non-obbligatorio)
    onAuthStateChanged: function(data) {
        console.log(data.loggedIn ? "Logged" : "Logged out")
        if(data.loggedIn){
            console.log("INIT USER", data)
        }
    }
  }).then(
      function () {
        console.log("firebase.init done");
      },
      function (error) {
        console.log("firebase.init error: " + error);
      }
  );




application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
