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

function callThongKeKeHoachQh_Kh(mkh, idTinhHuyen, qh_kh) {
    let url = `v1/public/read-excel/bieu_CH01_CH04_CH05_Ch06_Ch07_CH08_CH09/find-by-mkh-type?mkh=${mkh}&id=${idTinhHuyen}&type=${qh_kh}`;
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
    dataViewTable = `<td class="view-text-table">${data.loaiDat.tenLoaiDat}</td>
                    <td class="view-text-table">${data.loaiDat.maKyHieu}</td>
                    <td class="view-number-table">${data.dienTich_QH_KH_DuocDuyet ==0 ? '' : formatDienTich(data.dienTich_QH_KH_DuocDuyet.toFixed(2))}</td>
                    <td class="view-number-table">${data.ketQuaDienTich == 0 ? '' : formatDienTich(data.ketQuaDienTich.toFixed(2))}</td>
                    <td class="view-number-table">${data.ketQuaTangGiam == 0 ? '' : formatDienTich(data.ketQuaTangGiam.toFixed(2))}</td>
                    <td class="view-number-table">${data.ketQuaTyLe == 0 ? '' : data.ketQuaTyLe.toFixed(2)}</td>`;
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
    dataViewTable = `<td class="view-text-table">${data.loaiDat.tenLoaiDat}</td>
                    <td class="view-text-table">${data.loaiDat.maKyHieu}</td>
                    <td class="view-number-table">${data.dienTichCoCauTheoNams[0].dienTich == 0 ? '' : formatDienTich(data.dienTichCoCauTheoNams[0].dienTich.toFixed(2))}</td>
                    <td class="view-number-table">${data.dienTichCoCauTheoNams[0].coCau == 0 ? '' : data.dienTichCoCauTheoNams[0].coCau.toFixed(2)}</td>
                    <td class="view-number-table">${data.dienTichCoCauTheoNams[1].dienTich == 0 ? '' : formatDienTich(data.dienTichCoCauTheoNams[1].dienTich.toFixed(2))}</td>
                    <td class="view-number-table">${data.dienTichCoCauTheoNams[1].coCau == 0 ? '' : data.dienTichCoCauTheoNams[1].coCau.toFixed(2)}</td>
                    <td class="view-number-table">${data.dienTichCoCauTheoNams[2].dienTich == 0 ? '' : formatDienTich(data.dienTichCoCauTheoNams[2].dienTich.toFixed(2))}</td>
                    <td class="view-number-table">${data.dienTichCoCauTheoNams[2].coCau ==0 ? '': data.dienTichCoCauTheoNams[2].coCau.toFixed(2)}</td>`;
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
                        <th rowspan="3" rowspan="3">Năm hiện trang (ha)</th>
                    </tr>
                    <tr>
                        <th colspan="5">Các năm kế hoạch (ha)</th>
                    </tr>
                    <tr>
                        <th>${data.dienTichTheoNams[0].nam}</th>
                        <th>${data.dienTichTheoNams[1].nam}</th>
                        <th>${data.dienTichTheoNams[2].nam}</th>
                        <th>${data.dienTichTheoNams[3].nam}</th>
                        <th>${data.dienTichTheoNams[4].nam}</th>                        
                    </tr>`;
    dataViewTable = `<td class="view-text-table">${data.loaiDat.tenLoaiDat}</td>
                    <td class="view-text-table">${data.loaiDat.maKyHieu}</td>
                    <td class="view-number-table">${data.namHienTrang == 0 ? '' : formatDienTich(data.namHienTrang.toFixed(2))}</td>
                    <td class="view-number-table">${data.dienTichTheoNams[0].dienTich == 0 ? '' : formatDienTich(data.dienTichTheoNams[0].dienTich.toFixed(2))}</td>
                    <td class="view-number-table">${data.dienTichTheoNams[1].dienTich == 0 ? '' : formatDienTich(data.dienTichTheoNams[1].dienTich.toFixed(2))}</td>
                    <td class="view-number-table">${data.dienTichTheoNams[2].dienTich == 0 ? '' : formatDienTich(data.dienTichTheoNams[2].dienTich.toFixed(2))}</td>
                    <td class="view-number-table">${data.dienTichTheoNams[3].dienTich == 0 ? '' : formatDienTich(data.dienTichTheoNams[3].dienTich.toFixed(2))}</td>
                    <td class="view-number-table">${data.dienTichTheoNams[4].dienTich == 0 ? '' : formatDienTich(data.dienTichTheoNams[4].dienTich.toFixed(2))}</td>`;
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
                        <th rowspan="3" rowspan="3">Tổng diện tích (ha)</th>
                    </tr>
                    <tr>
                        <th colspan="5">Các năm kế hoạch (ha)</th>
                    </tr>
                    <tr>
                        <th>${data.dienTichTheoNams[0].nam}</th>
                        <th>${data.dienTichTheoNams[1].nam}</th>
                        <th>${data.dienTichTheoNams[2].nam}</th>
                        <th>${data.dienTichTheoNams[3].nam}</th>
                        <th>${data.dienTichTheoNams[4].nam}</th>                        
                    </tr>`;
    dataViewTable = `<td class="view-text-table">${data.loaiDat.tenLoaiDat}</td>
                    <td class="view-text-table">${data.loaiDat.maKyHieu}</td>
                    <td class="view-number-table">${formatDienTich(data.tongDienTich.toFixed(2))}</td>
                    <td class="view-number-table">${data.dienTichTheoNams[0].dienTich == 0 ? '' : formatDienTich(data.dienTichTheoNams[0].dienTich.toFixed(2))}</td>
                    <td class="view-number-table">${data.dienTichTheoNams[1].dienTich == 0 ? '' : formatDienTich(data.dienTichTheoNams[1].dienTich.toFixed(2))}</td>
                    <td class="view-number-table">${data.dienTichTheoNams[2].dienTich == 0 ? '' : formatDienTich(data.dienTichTheoNams[2].dienTich.toFixed(2))}</td>
                    <td class="view-number-table">${data.dienTichTheoNams[3].dienTich == 0 ? '' : formatDienTich(data.dienTichTheoNams[3].dienTich.toFixed(2))}</td>
                    <td class="view-number-table">${data.dienTichTheoNams[4].dienTich == 0 ? '' : formatDienTich(data.dienTichTheoNams[4].dienTich.toFixed(2))}</td>`;
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
                        <th rowspan="3" rowspan="3">Cả thời kỳ (ha)</th>
                    </tr>
                    <tr>
                        <th colspan="2">Các năm kế hoạch (ha)</th>
                    </tr>
                    <tr>
                        <th>${data.khoangNamKyDau}</th>
                        <th>${data.khoangNamKySau}</th>                      
                    </tr>`;
    dataViewTable = `<td class="view-text-table">${data.loaiDat.tenLoaiDat}</td>
                    <td class="view-text-table">${data.loaiDat.maKyHieu}</td>
                    <td class="view-number-table">${data.caThoiKKy == 0 ? '' : formatDienTich(data.caThoiKKy.toFixed(2))}</td>
                    <td class="view-number-table">${data.kyDau == 0 ? '' : formatDienTich(data.kyDau.toFixed(2))}</td>
                    <td class="view-number-table">${data.kyCuoi == 0 ? '' : formatDienTich(data.kyCuoi.toFixed(2))}</td>`;
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
                    <th rowspan="2">Diện tích (ha)</th>
                    <th colspan=${data.dienTichTheoXas == null ? 0 :data.dienTichTheoXas.length}>Phân theo đơn vị hành chính (ha)</th>
                 </tr><tr>`;
    data.dienTichTheoXas.map(data1 => {
        viewThead += `<th>${data1.xa == null? "Xã ..." : viewTextXa(data1.xa.tenXa)}</th>`;
    })
    dataViewTable = `<td class="view-text-table">${data.loaiDat.tenLoaiDat}</td><td class="view-text-table">${data.loaiDat.maKyHieu}</td><td class="view-number-table">${data.tongDienTich ==0 ? '' :formatDienTich(data.tongDienTich.toFixed(2))}</td>`;
    data.dienTichTheoXas.map(data1 => {
        dataViewTable += `<td class="view-number-table">${data1.dienTich ==0 ? '' : formatDienTich(data1.dienTich.toFixed(2))}</td>`
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
                    <th rowspan="2">Chỉ tiêu sử dụng đất</th>
                    <th rowspan="2">Mã</th>
                    <th rowspan="2">Cấp tỉnh phân bổ (ha)</th>
                    <th rowspan="2">Cấp huyện xác định (ha)</th>
                    <th rowspan="2">Tổng số (ha)</th>
                    <th colspan=${data.dienTichTheoXas == null ? 0 :data.dienTichTheoXas.length}>Phân theo đơn vị hành chính (ha)</th>
                 </tr><tr>`;
    data.dienTichTheoXas.map(data1 => {
        viewThead += `<th>${data1.xa == null ? "Xã ..." :viewTextXa(data1.xa.tenXa)}</th>`;
    })
    viewThead += "</tr></thead>";
    dataViewTable =`<td class="view-text-table">${data.loaiDat.tenLoaiDat}</td>
                        <td class="view-text-table">${data.loaiDat.maKyHieu}</td>
                        <td class="view-number-table">${data.dienTichCapTinhPhanBo == 0 ? '' : formatDienTich(data.dienTichCapTinhPhanBo.toFixed(2))}</td>
                        <td class="view-number-table">${data.dienTichCapHuyenXacDinh == 0 ? '' : formatDienTich(data.dienTichCapHuyenXacDinh.toFixed(2))}</td>
                        <td class="view-number-table">${data.tongDienTich ==0 ? '' : formatDienTich(data.tongDienTich.toFixed(2))}</td>`;
    data.dienTichTheoXas.map(data1 => {
        dataViewTable += `<td class="view-number-table">${data1.dienTich == 0 ?'' : formatDienTich(data1.dienTich.toFixed(2))}</td>`
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
                    <th rowspan="2">Chỉ tiêu sử dụng đất</th>
                    <th rowspan="2">Mã</th>
                    <th rowspan="2">Cấp quốc gia phân bổ (ha)</th>
                    <th rowspan="2">Cấp tỉnh xác định (ha)</th>
                    <th rowspan="2">Tổng số (ha)</th>
                    <th colspan=${data.dienTichTheoHuyens === null ? 0 : data.dienTichTheoHuyens.length}>Phân theo đơn vị hành chính (ha)</th>
                 </tr><tr>`;
    data.dienTichTheoHuyens.map(data => {
        viewThead += `<th>${data.huyen == null? "Huyện ..." :data.huyen.tenHuyen}</th>`;
    })
    viewThead += "</tr></thead>";

    dataViewTable =`<td class="view-text-table">${data.loaiDat.tenLoaiDat}</td>
                        <td class="view-text-table">${data.loaiDat.maKyHieu}</td>
                        <td class="view-number-table">${data.dienTichCapQGPhanBo == 0 ? '' : formatDienTich(data.dienTichCapQGPhanBo.toFixed(2))}</td>
                        <td class="view-number-table">${data.dienTichCapTinhXD == 0 ? '' : formatDienTich(data.dienTichCapTinhXD.toFixed(2))}</td>
                        <td class="view-number-table">${data.tongDienTich ==0 ? '' : formatDienTich(data.tongDienTich.toFixed(2))}</td>`;
    data.dienTichTheoHuyens.map(data => {
        dataViewTable += `<td class="view-number-table">${data.dienTich == 0 ? '' : formatDienTich(data.dienTich.toFixed(2))}</td>`
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
                    <th rowspan="2">Diện tích (ha)</th>
                    <th rowspan="2">Cơ Cấu (%) (ha)</th>
                    <th colspan=${data.dienTichTheoHuyens === null ? 0 : data.dienTichTheoHuyens.length}>Phân theo đơn vị hành chính (ha)</th>
                 </tr><tr>`;
    data.dienTichTheoHuyens.map(data1 => {
        viewThead += `<th>${data1.huyen == null? "Huyện ..." : data1.huyen.tenHuyen}</th>`;
    })
    viewThead += `</tr></thead>`;
    dataViewTable = `<td class="view-text-table">${data.loaiDat.tenLoaiDat}</td><td class="view-text-table">${data.loaiDat.maKyHieu}</td><td class="view-number-table">${data.tongDienTich == 0 ? '' : formatDienTich(data.tongDienTich.toFixed(2))}</td><td class="view-number-table">${data.coCau ==0 ? '' : data.coCau.toFixed(2)}</td>`;
    data.dienTichTheoHuyens.map(data1 => {
        dataViewTable += `<td class="view-number-table">${data1.dienTich == 0 ? '' : formatDienTich(data1.dienTich.toFixed(2))}</td>`
    })
    viewTable += `<table class="table table-bordered">
                        ${viewThead}
                        <tbody><tr>${dataViewTable}</tr></tbody>
                    </table>`;
    return viewTable;
}
//end Table HT_Tinh

//callQuyetDinh
function callQuyetDinhMap(maQuyetDinh, nam) {
    let url = `v1/public/quyet-dinh/find-by-so-quyet-dinh-and-nam-dau?sqd=${maQuyetDinh}&nam-dau=${nam}`;
    return ajaxCallGet(url);
}