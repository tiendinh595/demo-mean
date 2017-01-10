/**
 * Created by Vu Tien Dinh on 1/5/2017.
 */
app.factory('AdminService', function ($http) {
    return {
        login: function (username, password) {
            return $http({
                        method: 'POST',
                        url: '/api/admin/login',
                        data: {username: username, password: password}
                    })
        }
    }
});