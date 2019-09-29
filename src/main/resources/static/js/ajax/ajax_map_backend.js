// ajax call khi click vao mot khoi dat quy hoach
function callThongKeQuyHoach(mkh, idTinhHuyen) {
    let url = `v1/public/read-excel/bieu_CH03/find-by-mkh?mkh=${mkh}&id=${idTinhHuyen}`;
    return ajaxCallGet(url);
}
// end ajax call khi click vao mot khoi quy hoach
