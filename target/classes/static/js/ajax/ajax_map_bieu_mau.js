// Bieu Mau Khac Ke Hoach
function setBieuMauKhacKH(mkh, idMap, year) {
    $("#tableInfoSoild .table-QHK").html(''); //resetView
    callGetTableBieuMauKhacKh(mkh, idMap, year).then(data => {
        $("#tableInfoSoild .table-QHK").html(data);
    }).catch(err => {
        console.log(err);
    })
}

async function callGetTableBieuMauKhacKh(mkh, idMap, year) {
    let viewTableKhac = '';
    await callThongKeKeHoach(mkh, idMap).then(rs => {
        let arrBMKhac = rs.filter(item => item.quyHoachKeHoach === 'KH-K' && item.year == year);
        arrBMKhac.sort(function (a, b) {
            return a.year - b.year;
        })
        // console.log(arrBMKhac);
        arrBMKhac.map(data => {
            viewTableKhac += `<div class="table-wp">
                <div class="tablep-cap">
                    <span>${data.name}</span>
                </div>
                <div style="overflow-y: auto">
                    ${getTableBieu_CH01_CH04_CH05_Ch06_Ch07_CH08_CH09(data)}
                </div>
            </div>`;
        })
    }).catch(err => {
        console.log(err);
    })
    return viewTableKhac;
}
// End Bieu Mau Khac Ke Hoach

// Bieu Mau Khac Quy Hoach
function setBieuMauKhacQH(mkh, idMap) {
    $("#tableInfoSoild .table-QHK").html(''); //resetView
    let arrCallAjax = [];
    arrCallAjax.push(callGetTableBieu_QG02_CT02_CH02_QP02(mkh, idMap));
    arrCallAjax.push(callGetTableBieu_QG04_CT04_QP04(mkh, idMap));
    arrCallAjax.push(callGetTableBieu_QG08_CT07_QP06(mkh, idMap));
    arrCallAjax.push(callGetTableBieu_QG0911_CT0911_QP08(mkh, idMap));
    arrCallAjax.push(callGetTableBieu_QG0506_CT0506_QP05(mkh, idMap));
    Promise.all(arrCallAjax).then(rs => {
        let viewTable = '';
        rs.map(data => {
            viewTable += data;
        })
        $("#tableInfoSoild .table-QHK").html(viewTable);
    }).catch(err => {
        console.log(err);
    })
}

async function callGetTableBieu_QG02_CT02_CH02_QP02(mkh, idMap) {
    let viewTable = '';
    await callBieu_QG02_CT02_CH02_QP02(mkh, idMap).then(rs => {
        let arrBMKhac = rs.filter(item => item.quyHoachKeHoach === 'QH-K');
        arrBMKhac.map(data => {
            viewTable += `<div class="table-wp">
                <div class="tablep-cap">
                    <span>${data.name}</span>
                </div>
                <div style="overflow-y: auto">
                    ${getTableBieu_QG02_CT02_CH02_QP02(data)}
                </div>
            </div>`;
        })
    }).catch(err => {
        console.log(err);
    })
    return viewTable;
}

async function callGetTableBieu_QG04_CT04_QP04(mkh, idMap) {
    let viewTable = '';
    await callBieu_QG04_CT04_QP04(mkh, idMap).then(rs => {
        let arrBMKhac = rs.filter(item => item.quyHoachKeHoach === 'QH-K');
        arrBMKhac.map(data => {
            viewTable += `<div class="table-wp">
                <div class="tablep-cap">
                    <span>${data.name}</span>
                </div>
                <div style="overflow-y: auto">
                    ${getTableBieu_QG04_CT04_QP04(data)}
                </div>
            </div>`;
        })
    }).catch(err => {
        console.log(err);
    })
    return viewTable;
}

async function callGetTableBieu_QG08_CT07_QP06(mkh, idMap) {
    let viewTable = '';
    await callBieu_QG08_CT07_QP06(mkh, idMap).then(rs => {
        let arrBMKhac = rs.filter(item => item.quyHoachKeHoach === 'QH-K');
        arrBMKhac.map(data => {
            viewTable += `<div class="table-wp">
                <div class="tablep-cap">
                    <span>${data.name}</span>
                </div>
                <div style="overflow-y: auto">
                    ${getTableBieu_QG08_CT07_QP06(data)}
                </div>
            </div>`;
        })
    }).catch(err => {
        console.log(err);
    })
    return viewTable;
}

async function callGetTableBieu_QG0911_CT0911_QP08(mkh, idMap) {
    let viewTable = '';
    await callBieu_QG0911_CT0911_QP08(mkh, idMap).then(rs => {
        let arrBMKhac = rs.filter(item => item.quyHoachKeHoach === 'QH-K');
        arrBMKhac.map(data => {
            viewTable += `<div class="table-wp">
                <div class="tablep-cap">
                    <span>${data.name}</span>
                </div>
                <div style="overflow-y: auto">
                    ${getTableBieu_QG0911_CT0911_QP08(data)}
                </div>
            </div>`;
        })
    }).catch(err => {
        console.log(err);
    })
    return viewTable;
}

async function callGetTableBieu_QG0506_CT0506_QP05(mkh, idMap) {
    let viewTable = '';
    await callBieu_QG0506_CT0506_QP05(mkh, idMap).then(rs => {
        let arrBMKhac = rs.filter(item => item.quyHoachKeHoach === 'QH-K');
        arrBMKhac.map(data => {
            viewTable += `<div class="table-wp">
                <div class="tablep-cap">
                    <span>${data.name}</span>
                </div>
                <div style="overflow-y: auto">
                    ${getTableBieu_QG0506_CT0506_QP05(data)}
                </div>
            </div>`;
        })
    }).catch(err => {
        console.log(err);
    })
    return viewTable;
}

// End Bieu Mau Khac Quy Hoach