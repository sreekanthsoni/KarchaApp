// SINCE WE ARE USING JQUERY MOBILE -- 
// WE WILL BE INITIATING LOGIN OBJECT, GET DATA OBJECT IN PAGE BEFORE CREATE EVENT
// ON PAGE CHANGE EVENT WE WILL BE DOING ALL THE MAGICS

var oLoginObject = null;
var oGetData = null;

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function(callback_function) {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        StatusBar.overlaysWebView(false);
    },
    
    receivedEvent : function(){
        //DeviceLoaded();
    },
};
$(document).on("pagecreate",function(){
    app.initialize(); 
});
$(document).on('pageshow',function(){
    oLoginObject = $.LoginObject();
    oGetData = $.GetData();
});



