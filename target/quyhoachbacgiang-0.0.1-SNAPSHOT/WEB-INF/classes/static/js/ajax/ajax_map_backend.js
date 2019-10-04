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

//get Table KH

function getTableBieu_CH01_CH04_CH05_Ch06_Ch07_CH08_CH09(data) {
    // Bieu_CH01_CH04_CH05_Ch06_Ch07_CH08_CH09 kh-ht qh-ht-huyen kh
    let viewTable = '';
    let dataViewTable = '';
    let viewThead = `<thead><tr>
                    <th rowspan="2">Chỉ tiêu sử dụng đất</th>
                    <th rowspan="2">Mã</th>
                    <th rowspan="2">Diện tích</th>
                    <th colspan=${data.dienTichTheoXas == null ? 0 :data.dienTichTheoXas.length}>Phân theo đơn vị hành chính</th>
                 </tr><tr>`;
    data.dienTichTheoXas.map(data1 => {
        viewThead += `<th>${data1.xa == null? "Xã ..." : data1.xa.tenXa}</th>`;
    })
    dataViewTable = `<td>${data.loaiDat.tenLoaiDat}</td><td>${data.loaiDat.maKyHieu}</td><td>${data.tongDienTich}</td>`;
    data.dienTichTheoXas.map(data1 => {
        dataViewTable += `<td>${data1.dienTich}</td>`
    })
    viewTable += `<table class="table table-bordered">
                        ${viewThead}
                        <tbody><tr>${dataViewTable}</tr></tbody>
                    </table>`;
    return viewTable;
}
//end get Table KH

//get Table QH_HUYEN
function getTableBieu_CH03(data) {
    // bieu_CH03 qh-huyen
    let viewTable = '';
    let dataViewTable = '';
    let viewThead = `<thead><tr>
                    <th rowspan="2">Chỉ tiêu</th>
                    <th rowspan="2">Mã</th>
                    <th rowspan="2">Cấp tỉnh phân bổ</th>
                    <th rowspan="2">Cấp huyện xác định</th>
                    <th rowspan="2">Tổng số</th>
                    <th colspan=${data.dienTichTheoXas == null ? 0 :data.dienTichTheoXas.length}>Phân theo đơn vị hành chính</th>
                 </tr><tr>`;
    data.dienTichTheoXas.map(data1 => {
        viewThead += `<th>${data1.xa == null ? "Xã ..." :data1.xa.tenXa}</th>`;
    })
    viewThead += "</tr></thead>";
    dataViewTable =`<td>${data.loaiDat.tenLoaiDat}</td>
                        <td>${data.loaiDat.maKyHieu}</td>
                        <td>${data.dienTichCapTinhPhanBo}</td>
                        <td>${data.dienTichCapHuyenXacDinh}</td>
                        <td>${data.tongDienTich}</td>`;
    data.dienTichTheoXas.map(data1 => {
        dataViewTable += `<td>${data1.dienTich}</td>`
    })

    viewTable = `<table class="table table-bordered">
                        ${viewThead}
                        <tbody><tr>${dataViewTable}</tr></tbody>
                    </table>`;
    return viewTable;
}
//end get Table QH_HUYEN

//get Table QH_Tinh
function getTableBieu_CT0308(data) {
    // Bieu_CT0308 qh-tinh
    let viewTable = '';
    let dataViewTable = '';
    let viewThead = `<thead><tr>
                    <th rowspan="2">Chỉ tiêu</th>
                    <th rowspan="2">Mã</th>
                    <th rowspan="2">Cấp quốc gia phân bổ</th>
                    <th rowspan="2">Cấp tỉnh xác định</th>
                    <th rowspan="2">Tổng số</th>
                    <th rowspan="2">Cơ Cấu (%)</th>
                    <th colspan=${data.dienTichTheoHuyens === null ? 0 : data.dienTichTheoHuyens.length}>Phân theo đơn vị hành chính</th>
                 </tr><tr>`;
    data.dienTichTheoHuyens.map(data => {
        viewThead += `<th>${data.huyen == null? "Huyện ..." :data.huyen.tenHuyen}</th>`;
    })
    viewThead += "</tr></thead>";

    dataViewTable =`<td>${data.loaiDat.tenLoaiDat}</td>
                        <td>${data.loaiDat.maKyHieu}</td>
                        <td>${data.dienTichCapQGPhanBo}</td>
                        <td>${data.dienTichCapTinhXD}</td>
                        <td>${data.tongDienTich}</td>
                        <td>${data.coCau === undefined ? "...": data.coCau === null ? "..." : data.coCau}</td>`;
    data.dienTichTheoHuyens.map(data => {
        dataViewTable += `<td>${data.dienTich}</td>`
    })

    viewTable = `<table class="table table-bordered">
                        ${viewThead}
                        <tbody><tr>${dataViewTable}</tr></tbody>
                    </table>`;
    return viewTable;
}
//end get Table QH_Tinh

//get Table HT_Tinh
function getTableBieu_CT01(data) {
    // bieu_CT01 ht-tinh
    let viewTable = '';
    let dataViewTable = '';
    let viewThead = `<thead><tr>
                    <th rowspan="2">Chỉ tiêu sử dụng đất</th>
                    <th rowspan="2">Mã</th>
                    <th rowspan="2">Diện tích</th>
                    <th rowspan="2">Cơ Cấu (%)</th>
                    <th colspan=${data.dienTichTheoHuyens === null ? 0 : data.dienTichTheoHuyens.length}>Phân theo đơn vị hành chính</th>
                 </tr><tr>`;
    data.dienTichTheoHuyens.map(data1 => {
        viewThead += `<th>${data1.huyen == null? "Huyện ..." : data1.huyen.tenHuyen}</th>`;
    })
    viewThead += `</tr></thead>`;
    dataViewTable = `<td>${data.loaiDat.tenLoaiDat}</td><td>${data.loaiDat.maKyHieu}</td><td>${data.tongDienTich}</td><td>${data.coCau}</td>`;
    data.dienTichTheoHuyens.map(data1 => {
        dataViewTable += `<td>${data1.dienTich}</td>`
    })
    viewTable += `<table class="table table-bordered">
                        ${viewThead}
                        <tbody><tr>${dataViewTable}</tr></tbody>
                    </table>`;
    return viewTable;
}
//end Table HT_Tinh