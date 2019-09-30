// ajax call khi click vao mot khoi dat quy hoach
//api cho bieu mau huyen qh
function callThongKeQuyHoach(mkh, idTinhHuyen) {
    let url = `v1/public/read-excel/bieu_CH03/find-by-mkh?mkh=${mkh}&id=${idTinhHuyen}`;
    return ajaxCallGet(url);
}

//api cho bieu mau huyen kh, ht-kh, ht-qh
function callThongKeKeHoach(mkh, idTinhHuyen) {
    let url = `v1/public/read-excel/bieu_CH01_CH04_CH05_Ch06_Ch07_CH08_CH09/find-by-mkh?mkh=${mkh}&id=${idTinhHuyen}`;
    return ajaxCallGet(url);
}

//api cho bieu mau tinh qh
function callThongKeQuyHoachTinh(mkh) {
    // bac giang id la 1;
    let url = `v1/public/read-excel/bieu_CT0308/find-by-mkh?mkh=${mkh}&id=1`;
    return ajaxCallGet(url);
}

//api cho bieu mau tinh qh-ht
function callThongKeQuyHoachHienTrangTinh(mkh) {
    // bac giang id la 1;
    let url = `v1/public/read-excel/bieu_CT01/find-by-mkh?mkh=${mkh}&id=1`;
    return ajaxCallGet(url);
}
// end ajax call khi click vao mot khoi quy hoach


