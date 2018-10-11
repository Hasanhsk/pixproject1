var createViewModel = require("./main-view-model").createViewModel;
var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");


exports.loaded = function(args) {
    page = args.object;
    email=page.getViewById("email");
    password=page.getViewById("password");
    
    page.bindingContext = createViewModel();
};

exports.signIn= function(){

    var topmost =frameModule.topmost();
    topmost.navigate("view/dashboard/dashboard");

};


exports.signup= function(){

    var topmost =frameModule.topmost();
    topmost.navigate("views/signup/signup");

};
