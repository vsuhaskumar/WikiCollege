//Factory
myApp.factory('Users', ['$resource',function($resource){
  return $resource('/users.json', {},{
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' }
  })
}]);

myApp.factory('User', ['$resource', function($resource){
  return $resource('/users/:id.json', {}, {
    show: { method: 'GET' },
    update: { method: 'PUT', params: {id: '@id'} },
    delete: { method: 'DELETE', params: {id: '@id'} }
  });
}]);

myApp
.factory('Factory_DataService', ['$http', 'Factory_Constants', 'Factory_CommonRoutines', DataService])

function DataService($http, Constants, CommonFactory) {
    var Helper = {
        app: "/",
        University: {
            controller: "university/",
            GetAllUniversities: function (oFilter) {
                return $http.post(Helper.app + Helper.University.controller + 'GetAllUniversities', { oFilter: oFilter })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            TestPost: function (oSaveItem) {
                return $http.post(Helper.app + Helper.University.controller + 'TestPost', { oSaveItem: oSaveItem })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },// Review History
            GetTest1: function (nPersonID) {
                return $http.get(Helper.app + Helper.University.controller + 'testme2?nUnivId=' + nPersonID)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            GetUniversityById: function (nId) {
                return $http.get(Helper.app + Helper.University.controller + 'GetUniversityById?nId=' + nId)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            SearchCity: function (sCity) {
                return $http.get(Helper.app + Helper.University.controller + 'SearchCity?sCity=' + sCity)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
        },
        Miscellaneous: {
            ReturnDataDotData: function (data) {
                return data.data;
            },
            FailedInService: function () {
                CommonFactory.Notification.ShowNotification(true, Constants.Miscellaneous.SomethingWentWrong, Constants.Miscellaneous.Notification.Type.Danger);
            }
        }
    }

    var oService = {
        // Univ
        GetAllUniversities: Helper.University.GetAllUniversities,
        GetUniversityById: Helper.University.GetUniversityById,
        
        // Testing part
        GetTest1: Helper.University.GetTest1,
        TestPost: Helper.University.TestPost,
        SearchCity: Helper.University.SearchCity
    }
    return oService;
}