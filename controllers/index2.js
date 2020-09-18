// Tạo ra mạng dữ liệu quản lý add sinh viên
var mangSinhVien = [];

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
    

    mangSinhVien.push(sv);

    // Gọi hàm tạo mảng

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
    btnXoaSinhVien.innerHTML = '<i class="fa fa-trash"></i>';
    btnXoaSinhVien.onclick = function(){
        // this = button#btnXoaSinhVien
        this.parentElement.parentElement.remove();
    }

    // Thêm vào tdChucNang nút xóa
    tdChucNang.appendChild(btnXoaSinhVien);

    // btn-save
    

    // End of btn-save 

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
       
        
        // Tạo thẻ tr + dồn vào nội dung contentTable
        contentTable += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.loaiSinhVien}</td>
                <td>${sv.tinhDiemTrungBinh()}</td>
                <td>${sv.diemRenLuyen}</td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')"><i class="fa fa-trash"></i></button></td>
                
            </tr>
        `
    }
    document.getElementById('tblSinhVien').innerHTML = contentTable;
}

var xoaSinhVien = function(maSV){
    alert(maSV);
    // mangSinhVien là biến cục bộ khai báo phía trên đầu file 
    for (var index = mangSinhVien.length - 1; index >= 0; index--) {
        // mỗi lần duyệt lấy ra 1 đối tượng sinhvien
        var sv = mangSinhVien[index];

        // kiểm tra từng phần tử sinhvien có mã = với maSV được click ở bút xóa hay không  ?
        if(sv.maSinhVien == maSV){
            mangSinhVien.splice(index, 1); // hàm xóa phần tử của mảng trong js, index: vị trí xóa, 1 là tại vị trí đó xóa 1 phần từ
        }
        
    }
    // sau khi xóa thì tạo lại bảng = mảng dữ liệu đã xóa
    taoBang(mangSinhVien);
}
