angular.module('ui.bootstrap.demo', []);
angular.module('ui.bootstrap.demo').controller('PaginationDemoCtrl', function ($scope, $log) {
//    时间控件
        $('.dateTime').datepicker({
            format: "yyyy-mm-dd",
            todayBtn: "linked",
            language: "zh-CN",
            orientation: "auto",
            autoclose: true
        });
});


