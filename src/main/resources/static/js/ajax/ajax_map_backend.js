// ajax call khi click vao mot khoi dat quy hoach
function callThongKeQuyHoach(mkh, idTinhHuyen) {
    let url = `v1/public/read-excel/bieu_CH03/find-by-mkh?mkh=${mkh}&id=${idTinhHuyen}`;
    return ajaxCallGet(url);
}

callThongKeQuyHoach('ONT',7).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
// end ajax call khi click vao mot khoi quy hoach
