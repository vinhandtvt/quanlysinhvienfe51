// services chứa các file giao tiếp với backend

var SinhVienService = function (){
    // Phương thức giao tiếp backend qua api => lấy thông tin sinh viên từ server về 
    this.layDanhSachSinhVien = function(){
        var promise = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', // ĐƯỜNG dẫn backend cung cấp
            method: 'GET'
        });
        return promise
    }

    this.xoaSinhVien = function(maSinhVien) {
        var promise = axios({
            url:`http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,
            method: 'DELETE'
        });
        return promise;

    }
    this.layThongTinSinhVien = function(maSinhVien){
        var promise = axios({
            url:`http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSinhVien}`,
            method: 'GET'
        });
        return promise;
    }
    this.capNhatSinhVien = function(maSinhVien, sinhVienUpdate){
        var promise = axios({
            url:`http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${maSinhVien}`,
            method: 'PUT',
            data: sinhVienUpdate
        });
        return promise;
    }

    this.timKiemSinhVien = function (keyword) {
        console.log('chức năng tìm kiếm sinh viên.');
        return '';
    }
}