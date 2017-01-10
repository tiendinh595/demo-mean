/**
 * Created by Vu Tien Dinh on 1/4/2017.
 */
'use strict';

app.controller('PostController', function ($scope, $rootScope, $stateParams, $http, Upload) {
    $rootScope.title = 'Post Page';

    $scope.post = {};
    $scope.thumb = null;
    $scope.add = function () {
        if ($scope.thumb != null) {

        }
        Upload.upload({
            url: '/api/admin/post/upload',
            file: $scope.thumb
        }).progress(function (e) {
        }).then(function (data, status, headers, config) {
            $scope.post.thumb = data.data.thumb;
            $http.post('/api/admin/post/add', $scope.post).then(function (res) {
                if (res.data.status == 0) {
                    for (var err in res.data.data.errors) {
                        toastr["error"](res.data.data.errors[err].message);
                    }
                }
                else {
                    toastr["success"]('Thêm bài viêt thành công');
                    $scope.post = {};
                }
            })
        });
    };

    $scope.getAllCate = function () {
        $http.get('/api/admin/category/all').then(function (res) {
            $scope.categories = res.data;
        })
    };

    $scope.onChaneFile = function ($files) {
        $scope.thumb = $files[0];
    };

    $scope.getDetailPost = function () {
        $scope.getAllCate();
        $http.get('/api/admin/post/detail/' + $stateParams.id).then(function (res) {
            if (res.data.length == 0)
                toastr["error"]('Bài viết không tồn tại');
            else
                $scope.post = res.data;
        })
    };

    $scope.save = function () {
        if ($scope.thumb == null) {
            $http.post('/api/admin/post/update/' + $stateParams.id, $scope.post).then(function (res) {
                if (res.data.status == 0) {
                    toastr["error"]('Có lỗi xảy ra, vui lòng kiểm tra lại');
                }
                else {
                    toastr["success"]('Cập nhật bài viêt thành công');
                }
            })
        } else {
            Upload.upload({
                url: '/api/admin/post/upload',
                file: $scope.thumb
            }).progress(function (e) {
            }).then(function (data, status, headers, config) {
                $scope.post.thumb = data.data.thumb;
                $http.post('/api/admin/post/update/' + $stateParams.id, $scope.post).then(function (res) {
                    if (res.data.status == 0) {
                        toastr["error"]('Có lỗi xảy ra, vui lòng kiểm tra lại');
                    }
                    else {
                        toastr["success"]('Cập nhật bài viêt thành công');
                    }
                })
            });
        }

    };

    $scope.changePage = function (page) {
        $http.get('/api/admin/post/all?p='+page).then(function (res) {
            $scope.posts = res.data;
        })
    };

    $scope.delete = function (id) {
        alertify.confirm("Message", function () {
            $http.get('/api/admin/post/delete/'+id).then(function (res) {
                if(res.data.status == 0)
                    toastr["error"]('Xóa thất bại');
                else {
                    toastr["success"]('Xóa thành công');
                    $('#'+id).fadeOut();
                }
            })
        }, function() {
            // user clicked "cancel"
        });
    }
});