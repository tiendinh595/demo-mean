/**
 * Created by Vu Tien Dinh on 1/4/2017.
 */
app.controller('AdminController', function ($scope, $rootScope, $stateParams, $http, AdminService, AuthenticationService, $cookies) {
    $rootScope.title = 'demo mean';

    $scope.form_login = {username:'', password:''};
    $scope.login = function () {
        if($scope.form_login.username.trim() == '' || $scope.form_login.username.trim() == '')
            toastr["warning"]("Nhập thiếu tên đăng nhập hoặc mật khẩu");
        else
        {
            $http({
                method: 'POST',
                url: '/api/admin/login',
                data: $scope.form_login
            }).then(function (res) {
                if(res.data.status == 0)
                    toastr["error"](res.data.data);
                else {
                    AuthenticationService.isLogged = true;
                    $cookies.put('admin', JSON.stringify(res.data.data));
                    toastr["success"]('Đăng nhập thành công');
                    window.location.href = '/admin';
                }
            })
        }

    };

});