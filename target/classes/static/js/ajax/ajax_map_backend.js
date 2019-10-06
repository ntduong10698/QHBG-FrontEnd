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

//api cho bieu Bieu_QG02_CT02_CH02_QP02
function callBieu_QG02_CT02_CH02_QP02(mkh, idMap) {
    // tinh bang giang id = 0
    let url = `v1/public/read-excel/bieu_QG02_CT02_CH02_QP02/find-by-mkh?mkh=${mkh}&id=${idMap}`;
    return ajaxCallGet(url);
}

function getTableBieu_QG02_CT02_CH02_QP02(data) {
    let viewTable = '';
    let dataViewTable = '';
    let viewThead = `<thead><tr>
                        <th rowspan="4">Chỉ tiêu sử dụng đất</th>
                        <th rowspan="4">Mã</th>
                        <th rowspan="4">Diện tích quy hoạch/ kế hoạch được phê duyệt(ha)</th>
                    </tr>
                    <tr>
                        <th colspan="3">Kết quả thực hiện</th>
                    </tr>
                    <tr>
                        <th rowspan="2">Diện tích (ha)</th>
                        <th colspan="2">So sánh</th>
                    </tr>
                    <tr>
                        <th>Tăng (+), giảm(-) ha</th>
                        <th>Tỷ lệ (%)</th>
                    </tr>`;
    dataViewTable = `<td>${data.loaiDat.tenLoaiDat}</td>
                    <td>${data.loaiDat.maKyHieu}</td>
                    <td>${data.dienTich_QH_KH_DuocDuyet}</td>
                    <td>${data.ketQuaDienTich}</td>
                    <td>${data.ketQuaTangGiam}</td>
                    <td>${data.ketQuaTyLe}</td>`;
    viewTable += `<table class="table table-bordered">
                        ${viewThead}
                        <tbody><tr>${dataViewTable}</tr></tbody>
                    </table>`;
    return viewTable;
}
//end api Bieu_QG02_CT02_CH02_QP02

//api cho bieu Bieu_QG04_CT04_QP04
function callBieu_QG04_CT04_QP04(mkh, idMap) {
    // tinh bang giang id = 0
    let url = `v1/public/read-excel/bieu_QG04_CT04_QP04/find-by-mkh?mkh=${mkh}&id=${idMap}`;
    return ajaxCallGet(url);
}

function getTableBieu_QG04_CT04_QP04(data) {
    let viewTable = '';
    let dataViewTable = '';
    let viewThead = `<thead><tr>
                        <th rowspan="5">Chỉ tiêu sử dụng đất</th>
                        <th rowspan="5">Mã</th>
                    </tr>
                    <tr>
                        <th colspan="2" rowspan="3">Năm hiện trang</th>
                    </tr>
                    <tr>
                        <th colspan="4">Năm cuối kỳ kế hoạch</th>
                    </tr>
                    <tr>
                        <th colspan="2">Năm 2015</th>
                        <th colspan="2">Năm 2020</th>
                    </tr>
                    <tr>
                        <th>Diện tích (ha)</th>
                        <th>Cơ cấu (%)</th>
                        <th>Diện tích (ha)</th>
                        <th>Cơ cấu (%)</th>
                        <th>Diện tích (ha)</th>
                        <th>Cơ cấu (%)</th>
                    </tr>`;
    dataViewTable = `<td>${data.loaiDat.tenLoaiDat}</td>
                    <td>${data.loaiDat.maKyHieu}</td>
                    <td>${data.dienTichCoCauTheoNams[0].dienTich}</td>
                    <td>${data.dienTichCoCauTheoNams[0].coCau}</td>
                    <td>${data.dienTichCoCauTheoNams[1].dienTich}</td>
                    <td>${data.dienTichCoCauTheoNams[1].coCau}</td>
                    <td>${data.dienTichCoCauTheoNams[2].dienTich}</td>
                    <td>${data.dienTichCoCauTheoNams[2].coCau}</td>`;
    viewTable += `<table class="table table-bordered">
                        ${viewThead}
                        <tbody><tr>${dataViewTable}</tr></tbody>
                    </table>`;
    return viewTable;
}
// end api bieu Bieu_QG04_CT04_QP04

//api cho bieu Bieu_QG08_CT07_QP06
function callBieu_QG08_CT07_QP06(mkh, idMap) {
    // tinh bang giang id = 0
    let url = `v1/public/read-excel/bieu_QG08_CT07_QP06/find-by-mkh?mkh=${mkh}&id=${idMap}`;
    return ajaxCallGet(url);
}

function getTableBieu_QG08_CT07_QP06(data) {
    let viewTable = '';
    let dataViewTable = '';
    let viewThead = `<thead><tr>
                        <th rowspan="3">Chỉ tiêu sử dụng đất</th>
                        <th rowspan="3">Mã</th>
                        <th rowspan="3" rowspan="3">Năm hiện trang</th>
                    </tr>
                    <tr>
                        <th colspan="5">Các năm kế hoạch</th>
                    </tr>
                    <tr>
                        <th>${data.dienTichTheoNams[0].nam}</th>
                        <th>${data.dienTichTheoNams[1].nam}</th>
                        <th>${data.dienTichTheoNams[2].nam}</th>
                        <th>${data.dienTichTheoNams[3].nam}</th>
                        <th>${data.dienTichTheoNams[4].nam}</th>                        
                    </tr>`;
    dataViewTable = `<td>${data.loaiDat.tenLoaiDat}</td>
                    <td>${data.loaiDat.maKyHieu}</td>
                    <td>${data.namHienTrang}</td>
                    <td>${data.dienTichTheoNams[0].dienTich}</td>
                    <td>${data.dienTichTheoNams[1].dienTich}</td>
                    <td>${data.dienTichTheoNams[2].dienTich}</td>
                    <td>${data.dienTichTheoNams[3].dienTich}</td>
                    <td>${data.dienTichTheoNams[4].dienTich}</td>`;
    viewTable += `<table class="table table-bordered">
                        ${viewThead}
                        <tbody><tr>${dataViewTable}</tr></tbody>
                    </table>`;
    return viewTable;
}

//end api bieu Bieu_QG08_CT07_QP06

//api cho bieu Bieu_QG0911_CT0911_QP08
function callBieu_QG0911_CT0911_QP08(mkh, idMap) {
    // tinh bang giang id = 0
    let url = `v1/public/read-excel/bieu_QG0911_CT0911_QP08/find-by-mkh?mkh=${mkh}&id=${idMap}`;
    return ajaxCallGet(url);
}

function getTableBieu_QG0911_CT0911_QP08(data) {
    let viewTable = '';
    let dataViewTable = '';
    let viewThead = `<thead><tr>
                        <th rowspan="3">Chỉ tiêu sử dụng đất</th>
                        <th rowspan="3">Mã</th>
                        <th rowspan="3" rowspan="3">Tổng diện tích</th>
                    </tr>
                    <tr>
                        <th colspan="5">Các năm kế hoạch</th>
                    </tr>
                    <tr>
                        <th>${data.dienTichTheoNams[0].nam}</th>
                        <th>${data.dienTichTheoNams[1].nam}</th>
                        <th>${data.dienTichTheoNams[2].nam}</th>
                        <th>${data.dienTichTheoNams[3].nam}</th>
                        <th>${data.dienTichTheoNams[4].nam}</th>                        
                    </tr>`;
    dataViewTable = `<td>${data.loaiDat.tenLoaiDat}</td>
                    <td>${data.loaiDat.maKyHieu}</td>
                    <td>${data.tongDienTich}</td>
                    <td>${data.dienTichTheoNams[0].dienTich}</td>
                    <td>${data.dienTichTheoNams[1].dienTich}</td>
                    <td>${data.dienTichTheoNams[2].dienTich}</td>
                    <td>${data.dienTichTheoNams[3].dienTich}</td>
                    <td>${data.dienTichTheoNams[4].dienTich}</td>`;
    viewTable += `<table class="table table-bordered">
                        ${viewThead}
                        <tbody><tr>${dataViewTable}</tr></tbody>
                    </table>`;
    return viewTable;
}

//end api cho biet Bieu_QG0911_CT0911_QP08

//api cho bieu Bieu_QG0506_CT0506_QP05
function callBieu_QG0506_CT0506_QP05(mkh, idMap) {
    // tinh bang giang id = 0
    let url = `v1/public/read-excel/bieu_QG0506_CT0506_QP05/find-by-mkh?mkh=${mkh}&id=${idMap}`;
    return ajaxCallGet(url);
}

function getTableBieu_QG0506_CT0506_QP05(data) {
    let viewTable = '';
    let dataViewTable = '';
    let viewThead = `<thead><tr>
                        <th rowspan="3">Chỉ tiêu sử dụng đất</th>
                        <th rowspan="3">Mã</th>
                        <th rowspan="3" rowspan="3">Cả thời kỳ</th>
                    </tr>
                    <tr>
                        <th colspan="2">Các năm kế hoạch</th>
                    </tr>
                    <tr>
                        <th>${data.khoangNamKyDau}</th>
                        <th>${data.khoangNamKySau}</th>                      
                    </tr>`;
    dataViewTable = `<td>${data.loaiDat.tenLoaiDat}</td>
                    <td>${data.loaiDat.maKyHieu}</td>
                    <td>${data.caThoiKKy}</td>
                    <td>${data.kyDau}</td>
                    <td>${data.kyCuoi}</td>`;
    viewTable += `<table class="table table-bordered">
                        ${viewThead}
                        <tbody><tr>${dataViewTable}</tr></tbody>
                    </table>`;
    return viewTable;
}

//end api cho bieu Bieu_QG0506_CT0506_QP0

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

//callQuyetDinh
function callQuyetDinh(maQuyetDinh) {
    let url = `v1/public/quyet-dinh/find-by-so-quyet-dinh?so-quyet-dinh=${maQuyetDinh}`;
    return ajaxCallGet(url);
}