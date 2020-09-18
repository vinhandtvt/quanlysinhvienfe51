// Tạo ra mạng dữ liệu quản lý add sinh viên
var mangSinhVien = [];

var validate = new Validation();



// Định nghĩa sự kiện khi người dùng click vào nút thêm sinh viên

document.getElementById('btnThemSinhVien').onclick = function(){
    // Tạo đối tượng lưa trữ thông tin người dùng nhập vào
    var sv = new SinhVien();
    sv.maSinhVien = document.getElementById('maSinhVien').value;
    sv.tenSinhVien = document.getElementById('tenSinhVien').value;
    sv.email = document.getElementById('email').value;
    sv.diemToan = document.getElementById('diemToan').value;
    sv.diemLy = document.getElementById('diemLy').value;
    sv.diemHoa = document.getElementById('diemHoa').value;
    sv.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    sv.loaiSinhVien = document.getElementById('loaiSinhVien').value;
    

    // kiểm tra đối tưởng sinh viên 
    // console.log(sv);
    // Kiểm tra dữ liệu hợp lệ

    // var valid = true;
    // // Kiểm tra rỗng
    // valid &= validate.kiemTraRong(sv.maSinhVien, 'Mã sinh viên', '#err_maSinhVien_ktRong') & validate.kiemTraRong(sv.tenSinhVien, 'Tên sinh viên', '#err_tenSinhVien_ktRong') & validate.kiemTraRong(sv.email, 'Email', '#err_email_ktRong') & validate.kiemTraRong(sv.diemToan, 'Diem toan ', '#err_diemToan_ktRong')  & validate.kiemTraRong(sv.diemLy, 'Diem Ly ', '#err_diemLy_ktRong') & validate.kiemTraRong(sv.diemHoa, 'Diem Hoa ', '#err_diemHoa_ktRong') & validate.kiemTraRong(sv.diemRenLuyen, 'Diem Ren Luyen ', '#err_diemRenLuyen_ktRong');




    // // kiểm tra tất cả là ký tự 

    // valid &= validate.kiemTraChu(sv.tenSinhVien, 'Tên sinh viên', '#err_tenSinhVien_allLetters');

    // // Kiểm tra định dạng chuối
    // valid &= validate.kiemTraEmail(sv.email, 'Tên sinh viên', '#err_email_format');

    // valid &= validate.kiemTraSo(sv.maSinhVien, 'Mã sinh viên', '#err_maSinhVien_allNumber') & validate.kiemTraSo(sv.diemToan, 'Mã sinh viên', '#err_diemToan_allNumber') & validate.kiemTraSo(sv.diemLy, 'Mã sinh viên', '#err_diemLy_allNumber') & validate.kiemTraSo(sv.diemHoa, 'Mã sinh viên', '#err_diemRenLuyen_allNumber') & validate.kiemTraSo(sv.diemRenLuyen, 'Mã sinh viên', '#err_diemRenLuyen_allNumber');


    // valid &= validate.kiemTraDoDai(sv.maSinhVien, 'Mã sinh viên', '#err_maSinhVien_maxMinLength', 5, 10);


    // valid &= validate.kiemTraGiaTri(sv.diemToan, 'Diểm toán', '#err_diemToan_maxMinValue', 0, 10) & validate.kiemTraGiaTri(sv.diemLy, 'Diểm Lý', '#err_diemLy_maxMinValue', 0, 10) & validate.kiemTraGiaTri(sv.diemHoa, 'Diểm Hóa', '#err_diemHoa_maxMinValue', 0, 10) & validate.kiemTraGiaTri(sv.diemRenLuyen, 'Diểm Rèn luyện', '#err_diemRenLuyen_maxMinValue', 0, 10);








// // trim(): Loại bỏ khoảng trống đầu và cuối của chuối. 
//     if(sv.maSinhVien.trim() === ''){
//         document.getElementById('err_maSinhVien_ktRong').innerHTML = 'Mã sinh viên không được bỏ trống!';
//         // return; // lệnh trả về và không làm tiếp các đoạn cod phía sau
//         valid = false;
//     } else{
//         document.getElementById('err_maSinhVien_ktRong').innerHTML = '';
//     }
//     if(sv.tenSinhVien.trim() === ''){
//         document.getElementById('err_tenSinhVien_ktRong').innerHTML = 'Tên sinh viên không được bỏ trống!';
//         valid = false;
//     } else{
//         document.getElementById('err_tenSinhVien_ktRong').innerHTML = '';
//     }
//     if(sv.email === ''){
//         document.getElementById('err_email_ktRong').innerHTML = 'Email không được bỏ trống!';
//         valid = false;
//     } else{
//         document.getElementById('err_email_ktRong').innerHTML = '';
//     }
//     if(sv.diemToan === ''){
//         document.getElementById('err_diemToan_ktRong').innerHTML = 'diem Toan không được bỏ trống!';
//         valid = false;
//     } else{
//         document.getElementById('err_diemToan_ktRong').innerHTML = '';
//     }
//     if(sv.diemLy === ''){
//         document.getElementById('err_diemLy_ktRong').innerHTML = 'diem Ly không được bỏ trống!';
//         valid = false;
//     } else{
//         document.getElementById('err_diemLy_ktRong').innerHTML = '';
//     }
//     if(sv.diemHoa === ''){
//         document.getElementById('err_diemHoa_ktRong').innerHTML = 'diem Hoa không được bỏ trống!';
//         valid = false;
//     } else{
//         document.getElementById('err_diemHoa_ktRong').innerHTML = '';
//     }
//     if(sv.diemRenLuyen === ''){
//         document.getElementById('err_diemRenLuyen_ktRong').innerHTML = 'diem Ren Luyen không được bỏ trống!';
//         valid = false;
//     } else{
//         document.getElementById('err_diemRenLuyen_ktRong').innerHTML = '';
//     }

//     // kiểm tra tất cả là ký tự
//     var regexAllLetters = /^[A-Z a-z]+$/;
//     if(!regexAllLetters.test(sv.tenSinhVien)){
//         document.getElementById('err_tenSinhVien_allLetters').innerHTML = 'Tên sinh viên phải nhập chữ!';
//         valid = false;
//     } else{
//         document.getElementById('err_tenSinhVien_allLetters').innerHTML = '';
//     }


//     if(!valid){
//         return;
//     }

//     // kiểm tra định dạng của chuỗi regex
//     var regex = /cyberlearn/ig;
//     var inputString = 'frontendcyberlearnrnabc';

//     console.log(regex.test(inputString));


    mangSinhVien.push(sv);

    // Gọi hàm tạo mảng
    luaLocalStorage();
    taoBang(mangSinhVien);

    console.log('mangSinhVien', mangSinhVien);

   

    // tạo thẻ td chứa nội dung nhập vào
    var tdMaSinhVien = document.createElement('td');
    tdMaSinhVien.innerHTML = sv.maSinhVien;

    var tdTenSinhVien = document.createElement('td');
    tdTenSinhVien.innerHTML = sv.tenSinhVien;
    var tdEmai = document.createElement('td');
    tdEmai.innerHTML = sv.email;
    var tdDiemTrungBinh = document.createElement('td');
    tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh().toFixed(2);
    var tdLoaiSinhVien = document.createElement('td');
    tdLoaiSinhVien.innerHTML = sv.loaiSinhVien;
    var tdDiemRenLuyen = document.createElement('td');
    tdDiemRenLuyen.innerHTML = sv.diemRenLuyen;

    // tạo td chưa các nút chức năng xóa sửa
    var tdChucNang = document.createElement('td');
    // tạo các nut button xoa sửa
    var btnXoaSinhVien = document.createElement('button');
    btnXoaSinhVien.className ='btn btn-danger';
    btnXoaSinhVien.innerHTML = 'Xóa';
    btnXoaSinhVien.onclick = function(){
        // this = button#btnXoaSinhVien
        this.parentElement.parentElement.remove();
    }


    // Thêm vào tdChucNang nút xóa
    tdChucNang.appendChild(btnXoaSinhVien);


    //Tạo thẻ tr
    var trSinhVien = document.createElement('tr');
    // Thêm thẻ td và tr
    trSinhVien.appendChild(tdMaSinhVien);
    trSinhVien.appendChild(tdTenSinhVien);
    trSinhVien.appendChild(tdEmai);
    trSinhVien.appendChild(tdLoaiSinhVien);
    trSinhVien.appendChild(tdDiemTrungBinh);
    trSinhVien.appendChild(tdDiemRenLuyen);
    trSinhVien.appendChild(tdChucNang);

    var tbodySinhVien = document.getElementById('tblSinhVien');
    tbodySinhVien.appendChild(trSinhVien);


}

var taoBang = function(arrSinhVien){
    var contentTable = '';
    // Duyệt qua mảng sinhvien tạo ra các dòng tr
    for (var index = 0; index < arrSinhVien.length; index++) {
        // mỗi lần duyệt lấy ra 1 đối tượng sinhvien từ trong mảng
        var sv = arrSinhVien[index];

        var sinhVien = new SinhVien(sv.maSinhVien, sv.tenSinhVien, sv.email, sv.diemToan, sv.diemLy, sv.diemHoa, sv.diemRenLuyen, sv.loaiSinhVien);
        // sinhVien.maSinhVien = sv.maSinhVien;
        // sinhVien.tenSinhVien = sv.tenSinhVien;
        // sinhVien.email = sv.email;
        // sinhVien.diemToan = sv.diemToan;
        // sinhVien.diemHoa = sv.diemHoa;
        // sinhVien.diemLy = sv.diemLy;
        // sinhVien.diemRenLuyen = sv.diemRenLuyen;
        // sinhVien.loaiSinhVien = sv.loaiSinhVien;
       
        
        // Tạo thẻ tr + dồn vào nội dung contentTable
                        
        contentTable += `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.tinhDiemTrungBinh()}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td><button class="btn btn-primary" onclick="chinhSuaSinhVien('${sinhVien.maSinhVien}')">Chỉnh sửa</button></td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xóa</button></td>
                
            </tr>
        `
    }
    document.getElementById('tblSinhVien').innerHTML = contentTable;
}

var chinhSuaSinhVien = function(maSV){
    // khóa nút chỉnh sửa mã sinh viên
    document.getElementById('maSinhVien').disabled = true;
    // TÌM sv có mã sinh viên trong mảng
    for (var index = 0; index < mangSinhVien.length; index++) {
        // mỗi lần duyệt lấy ra 1 sv
        var sv = mangSinhVien[index];
        // kiểm tra từng sinh viên  ==> xem sv nào có mã = msSV khi click --> gán lên control phía trên 
        if(sv.maSinhVien === maSV){
            document.getElementById('maSinhVien').value = sv.maSinhVien;
            document.getElementById('tenSinhVien').value = sv.tenSinhVien;
            document.getElementById('email').value = sv.email;
            document.getElementById('diemToan').value = sv.diemToan;
            document.getElementById('diemLy').value = sv.diemLy;
            document.getElementById('diemHoa').value = sv.diemHoa;
            document.getElementById('diemRenLuyen').value = sv.diemRenLuyen;
            document.getElementById('loaiSinhVien').value = sv.loaiSinhVien;
        }
        
    }

    // Gán thông tin sinh viên tìm được lên các control (thẻ input) phía trên
}

// xây dựng phương thức cập nhật sinh viên
document.getElementById('btnCapNhatSinhVien').onclick = function(){
    // Lấy thông tin người dùng nhập từ giao diện => gán cho đối tượng sinh viên
    var svUpdate = new SinhVien();
    svUpdate.maSinhVien = document.getElementById('maSinhVien').value;
    svUpdate.tenSinhVien = document.getElementById('tenSinhVien').value;
    svUpdate.email = document.getElementById('email').value;
    svUpdate.diemToan = document.getElementById('diemToan').value;
    svUpdate.diemLy = document.getElementById('diemLy').value;
    svUpdate.diemHoa = document.getElementById('diemHoa').value;
    svUpdate.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    svUpdate.loaiSinhVien = document.getElementById('loaiSinhVien').value;

    // Tìm svUpdate có mã trùng với maSV trong mảng ==> Gán dữ liệu sinhVien đó = svUpdate
    for (var index = 0; index < mangSinhVien.length; index++) {
        var sv = mangSinhVien[index];

        if(sv.maSinhVien === svUpdate.maSinhVien){
            sv.tenSinhVien = svUpdate.tenSinhVien;
            sv.maSinhVien = svUpdate.maSinhVien;
            sv.email = svUpdate.email;
            sv.diemToan = svUpdate.diemToan;
            sv.diemLy = svUpdate.diemLy;
            sv.diemHoa = svUpdate.diemHoa;
            sv.diemRenLuyen = svUpdate.diemRenLuyen;
            sv.loaiSinhVien = svUpdate.loaiSinhVien;

        }
        
    }
    // Gọi hàm tọa lại bảng
    taoBang(mangSinhVien);
    luaLocalStorage();

    // Clear tất cả thông tin và bật lại input mã
    document.getElementById('maSinhVien').disabled = false;
    var mangTheInput = document.querySelectorAll('input');
    for (var index = 0; index < mangTheInput.length; index++) {
        var tagInput = mangTheInput[index]
        // Gán lại value = rỗng cho từng thẻ 1
        tagInput.value = '';
        
    }

}




var xoaSinhVien = function(maSV){
    alert(maSV);
    // mangSinhVien là biến cục bộ khai báo phía trên đầu file 
    for (var index = mangSinhVien.length - 1; index >= 0; index--) {
        // mỗi lần duyệt lấy ra 1 đối tượng sinhvien
        var sv = mangSinhVien[index];

        // kiểm tra từng phần tử sinhvien có mã = với maSV được click ở bút xóa hay không  ?
        if(sv.maSinhVien === maSV){
            mangSinhVien.splice(index, 1); // hàm xóa phần tử của mảng trong js, index: vị trí xóa, 1 là tại vị trí đó xóa 1 phần từ
        }
        
    }
    // sau khi xóa thì tạo lại bảng = mảng dữ liệu đã xóa
    taoBang(mangSinhVien);
    // lưa localstorage sau khi xóa
    luaLocalStorage();
}

var luaLocalStorage = function () {
    // Các bước lưu trữ mảng sinh viên xuống localstorage
    var sMangSinhVien = JSON.stringify(mangSinhVien); // Biến mảng sinh viên thành chuối.
    


    localStorage.setItem('mangSinhVien', sMangSinhVien);

}
// kiểm tra dữ liệu có trong localstorage chưa ?
var layDuLieuLocalStorage = function(){
    // lấy dữ liệu từu localstorage 
    if(localStorage.getItem('mangSinhVien')){
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
    }

    mangSinhVien = JSON.parse(sMangSinhVien);

    // Gọi hàm tạo bảng == taom html
    taoBang(mangSinhVien);
    

}

// gọi hàm localstorage khi trình duyệt vừa load
layDuLieuLocalStorage();
