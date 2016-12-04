myApp.controller('HomeCtrl', ['Factory_DataService', 'SharedProperties', HomeCtrl]);

function HomeCtrl(DataService, SharedProperties) {
    var ho = this;
    ho.oLoginItem = SharedProperties.oLoginItem;

    ho.ShowHideLogin = function() {
        if (ho.oLoginItem.bLoggedIn) {
            DataService.Logout().then(function(data) {
                if (data.status) {
                    ho.oLoginItem.bLoggedIn = false;
                }
            });
        }
        else {
            ho.oLoginItem.bShow = !ho.oLoginItem.bShow;
        }
    }
}
