var SinhVien = function(masv, tensv, email, diemtoan, diemly, diemhoa, diemrenluyen, loaisinhvien){ // lớp đối tưởng sinh viên
    this.maSinhVien = masv; // các thuộc tính của class SinhVie
    this.tenSinhVien = tensv;
    this.email = email;
    this.diemToan = diemtoan;
    this.diemLy = diemly;
    this.diemHoa = diemhoa;
    this.diemRenLuyen = diemrenluyen;
    this.loaiSinhVien = loaisinhvien;

    this.tinhDiemTrungBinh = function(){
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return dtb;
    }
}