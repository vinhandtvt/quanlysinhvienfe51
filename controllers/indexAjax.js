// console.log(axios);

// Tạo ra 1 object chứa các thông tin backend cung cấp 
// var objectGetSinhVien = {
//     url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', // ĐƯỜNG dẫn backend cung cấp
//     method: 'GET'
// }

// Khai báo service
var svService = new SinhVienService();

var layThongTinSinhVien = function(){
    var promise = svService.layDanhSachSinhVien(); // gọi service lấy dữ liệu từ backend về
    promise.then(function(result) {// Hàm xử lý khi kết quả trả về thành công
        var content = '';

        // tạo dữ liệu table
        for (var index = 0; index < result.data.length; index++) {
            // lấy ra từng sv từ kết quả server trả về 
            var sv = result.data[index];
    
            // tạo đối tượng sinh viên chưa dữ liệu
            var sinhVien = new SinhVien();
            sinhVien.maSinhVien = sv.maSinhVien;
            sinhVien.tenSinhVien = sv.tenSinhVien;
            sinhVien.email = sv.email;
            sinhVien.loaiSinhVien = sv.loaiSinhVien;
            sinhVien.diemRenLuyen = sv.diemRenLuyen;
            sinhVien.diemToan = sv.diemToan;
            sinhVien.diemLy = sv.diemLy;
            sinhVien.diemHoa = sv.diemHoa;
            content += ` <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.tinhDiemTrungBinh().toFixed(2)}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xóa</button></td>
                <td><button class="btn btn-success" onclick="chinhSua('${sinhVien.maSinhVien}')">Chỉnh sửa</button></td>
                
            </tr>
            `
        }
        document.getElementById('tblSinhVien').innerHTML = content;
    }).catch(function(err) {
        console.log(err.response.data)
    })
}

// Dùng thư viện axios gửi yêu cầu đến server

// var promise = axios(objectGetSinhVien);

//Phương thức then(callback): nhận vào 1 hàm có 1 tham số là kết quả trả về thành công từ phía server (TRả về dữ liệu)
// Phương thức .catch(callback): nhận vào 1 hàm có 1 tham số là kết quả trả về từ phía server thất bại (trả lỗi)
layThongTinSinhVien();



//------------------------------------------------
//---------POST: chức năng thêm sinh viên vào server

document.getElementById('btnThemSinhVien').onclick = function(){
    // Lấy thông tin người dùng nhập vào từ giao diện
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    console.log('Sinh vien', sv);

    // tạo ra object backend cần
    //....

    axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
        method: 'POST', // phương thức backend yêu cầu
        data: sv // Định dạng theo backend yêu cầu
    }).then(function(result){
        console.log('Kết quả', result.data)
        // cách 1 : location.reload ==> load lại file script => gọi lại api lấy danh sách sinh viên mới về lại
        // location.reload();
        // cách 2: gọi lại api layDanhSachSinhVien tại đây
        layThongTinSinhVien(); // không load lại trang, chỉ load lại bảng
    }).catch(function(err){
        console.log('Kết quả', err.response.data)
    })
}

var xoaSinhVien = function (maSinhVien) {
    var promise = svService.xoaSinhVien(maSinhVien);
    // Dùng promise xử lý thành công hoặc thất bại
    promise.then(function(result){
        console.log(result.data);

        // load lại api thấy thông tin sinh viên
        layThongTinSinhVien();
    }).catch(function(err){
        console.log(err.response.data)
    })
}



var chinhSua = function(maSinhVien) {
    // Gọi api lấy về thông tin sinh viên từ server
    var promise = svService.layThongTinSinhVien(maSinhVien);

    promise.then(function(result){
        var sinhVien = result.data;

        document.getElementById('maSinhVien').value = sinhVien.maSinhVien;
        document.getElementById('tenSinhVien').value = sinhVien.tenSinhVien;
        document.getElementById('loaiSinhVien').value = sinhVien.loaiSinhVien;
        document.getElementById('email').value = sinhVien.email;
        document.getElementById('diemToan').value = sinhVien.diemToan;
        document.getElementById('diemLy').value = sinhVien.diemLy;
        document.getElementById('diemHoa').value = sinhVien.diemHoa;
        document.getElementById('diemRenLuyen').value = sinhVien.diemRenLuyen;

    }).catch(function(err){

    })
}
document.getElementById('btnCapNhatSinhVien').onclick = function(){
    // Lấy thông tin  từ người dùng sua khi đã chỉnh sửa
    var sinhVienUpdate = new SinhVien();
    sinhVienUpdate.maSinhVien = document.getElementById('maSinhVien').value;
    sinhVienUpdate.tenSinhVien = document.getElementById('tenSinhVien').value;
    sinhVienUpdate.loaiSinhVien = document.getElementById('loaiSinhVien').value;
    sinhVienUpdate.email = document.getElementById('email').value;
    sinhVienUpdate.diemToan = document.getElementById('diemToan').value;
    sinhVienUpdate.diemLy = document.getElementById('diemLy').value;
    sinhVienUpdate.diemHoa = document.getElementById('diemHoa').value;
    sinhVienUpdate.diemRenLuyen = document.getElementById('diemRenLuyen').value;


    // ọi api cập nhật sinh viên từ backend cung cấp
    var promise = svService.capNhatSinhVien(sinhVienUpdate.maSinhVien, sinhVienUpdate);
    
    promise.then(function(result){
        console.log(result.data)
        // Xử lý khi cập nhật thành công
        layThongTinSinhVien();
    }).catch(function(err){
        console.log(err.response.data);
    })
    

}

