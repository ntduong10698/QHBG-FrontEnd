// ajax call khi click vao mot khoi dat quy hoach
function callThongKeQuyHoach(mkh, idTinhHuyen) {
    let url = `v1/public/read-excel/bieu_CH03/find-by-mkh?mkh=${mkh}&id=${idTinhHuyen}`;
    return ajaxCallGet(url);
}

function callThongKeKeHoach(mkh, idTinhHuyen) {
    let url = `v1/public/read-excel/bieu_CH01_CH04_CH05_Ch06_Ch07_CH08_CH09/find-by-mkh?mkh=${mkh}&id=${idTinhHuyen}&year=${year}`;
    return ajaxCallGet(url);
}
// end ajax call khi click vao mot khoi quy hoach
