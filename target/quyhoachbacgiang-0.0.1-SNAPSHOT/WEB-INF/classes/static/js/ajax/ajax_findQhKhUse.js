var href = window.location.href;
var checkPage = href.indexOf("ke-hoach") > -1 ? 1 : 0; // 0 la quy haoch 1 la ke hoach
$(function () {
    let mkh = '';
    let idHuyen = '';
    let nam = '';
    viewLoadingGif();
    setSelectDonVi();
    setSelectDat();
    clickSearchTraCuu();
})

//view select nam
function setViewSelectYear() {
    $("#dp-drop7").parents(".dpfc-item").css("display","block");
    $(".dpfilter-wp .dpcf-select").addClass("fix-width-select");
    if (checkPage === 0) {
        $("#dp-drop7").html(`<option value="2015-2020">2015-2020</option>`);
    } else {
        $("#dp-drop7").html(`<option value="2015">Năm 2015</option>
                            <option value="2016">Năm 2016</option>
                            <option value="2017">Năm 2017</option>
                            <option value="2018">Năm 2018</option>
                            <option value="2019">Năm 2019</option>`);
    }
    $("#dp-drop5").select2( {
        placeholder: "--- Chọn chức năng đất ---",
        allowClear: true
    } );
    $("#dp-drop6").select2( {
        placeholder: "--- Chọn đơn vị ---",
        allowClear: true
    } );
    $("#dp-drop7").select2( {
        placeholder: "--- Chọn Năm ---",
        allowClear: true
    } );
}
//end view select nam

//view select dat
function setSelectDat() {
    let viewSelect = '';
    callLoaiDat().then(list => {
        if (list.length > 0) {
            list.map(data => {
                viewSelect += `<option value="${data.maKyHieu}">${data.maKyHieu}: ${data.tenLoaiDat}</option>`;
            })
            $("#dp-drop5").html(viewSelect);
            $("#dp-drop5").val(list[0].maKyHieu);
            $("#dp-drop5").select2().trigger('change');
        }
        hideLoadingGif();
    }).catch(err => {
        console.log(err);
        hideLoadingGif();
    })
}
//view select don vi
function setSelectDonVi() {
    let viewSelect = '';
    let option = 1;
    callHuyen().then(data1 => {
        data1.map((data, index) => {
            viewSelect += `<option value="${data.idHuyen}">${data.tenHuyen}</option>`;
        })
        if (checkPage === 0 ) {
            viewSelect = '<option value="0">Tỉnh Bắc Giang</option>' + viewSelect;
            option = 0;
            setViewSelectYear();
        } else {
            setViewSelectYear();
        }
        $("#dp-drop6").html(viewSelect);
        $("#dp-drop6").val(option);
        $("#dp-drop6").select2().trigger('change');
    }).catch(err => {
        console.log(err);
    })
}
//click search 
function clickSearchTraCuu() {
    $("#searchTraCuu").click(function () {
        viewLoadingGif();
        mkh = $("#dp-drop5").val();
        idHuyen = $("#dp-drop6").val();
        nam = $("#dp-drop7").val();
        if (checkPage === 0) {
            //0 la quy hoach 1 la ke hoach
            setBieuMauKhacQH(mkh, idHuyen);
            if(idHuyen != 0) {
                callThongKeQuyHoach(mkh, idHuyen).then(rs => {
                    setTableInfoSoildQHHuyen(mkh, rs, idHuyen);
                }).catch(err => {
                    console.log(err);
                })
            } else {
                // 0 la tinh
                callThongKeQuyHoachTinh(mkh).then(rs => {
                    rs = rs.filter(data1 => (data1.quyHoachKeHoach === "QH" && data1.nam == "2020")); //check
                    setTableInfoSoildQHTinh(rs, mkh);
                }).catch(err => {
                    console.log(err);
                })
            }
        } else {
            setBieuMauKhacKH(mkh, idHuyen, nam);
            callThongKeKeHoach(mkh, idHuyen).then(rs => {
                setTableInfoSoildKh(rs, nam, idHuyen);
            }).catch(err => {
                console.log(err);
            })
        }
        return false;
    })
}

//set data tableInfoSoild-KH
function setTableInfoSoildKh(dataTable, year, idHuyen) {
    let viewTable = '';
    let dataKh = dataTable.filter(data => data.quyHoachKeHoach === "KH"&& data.year == year);
    let viewThead = '';
    dataKh.sort(function (a, b) {
        return a.year - b.year;
    })
    let dataHt = dataTable.filter(data => (data.quyHoachKeHoach == "KH-HT" && data.year == year));
    console.log(year);
    if(dataHt.length > 0) dataKh.unshift(dataHt[0]); //full bang
    //create khung cac bang
    // tao khung thead cho cac bang
    if(dataKh.length > 0) {

        //set data cac keHoach
        $("#tableInfoSoild .table-HTQH").html(""); //reset data
        dataKh.map(data => {
            viewTable += `<div class="table-wp">
                <div class="tablep-cap">
                    <span>${data.name}</span>
                </div>
                <div style="overflow-y: auto">
                    ${getTableBieu_CH01_CH04_CH05_Ch06_Ch07_CH08_CH09(data)}
                </div>
            </div>`;
        })
        setQuyetDinh(idHuyen,year);
    }
    //end tao khung thead cho cac bang
    $("#tableInfoSoild .table-HTQH").html(viewTable);
    hideLoadingGif();
    //end create khung cac bang

}
//end set data tableInfoSoild-KH

//set data tableInfoSoild-Qh-Huyen
function setTableInfoSoildQHHuyen(mkh, dataTable, idHuyen) {
    let viewTable = '';
    //set Bang Quy Hoach Huyen
    if (dataTable.length > 0) {
        viewTable = `<div class="table-wp">
                <div class="tablep-cap">
                    <span>${dataTable[0].name}</span>
                </div>
                <div style="overflow-y: auto">
                    ${getTableBieu_CH03(dataTable[0])}
                </div>
            </div>`;
        setQuyetDinh(idHuyen,"2015");
        $("#tableInfoSoild .table-HTQH").html(viewTable);
    }

    //set HienTrangQuyHoachHuyen cung api voi kh-huyen
    callThongKeKeHoach(mkh, idHuyen).then(data => {
        //reset value
        viewTable = '';
        let arrRs = data.filter(data1 => data1.year == "2020" && data1.quyHoachKeHoach === "QH-HT");
        if(arrRs.length > 0) {

            viewTable += `<div class="table-wp">
                <div class="tablep-cap">
                    <span>${arrRs[0].name}</span>
                </div>
                <div style="overflow-y: auto">
                    ${getTableBieu_CH01_CH04_CH05_Ch06_Ch07_CH08_CH09(arrRs[0])}
                </div>
            </div>`;
            // console.log(viewTable);
            setQuyetDinh(idHuyen,"2015");
            $("#tableInfoSoild .table-HTQH").prepend(viewTable); //noi len dau hien trang hien thi truoc
        }
        hideLoadingGif();
    }).catch(err => {
        console.log(err);
    })

}
//End set data tableInfoSoild-Qh-Huyen

//set data tableInfoSoild-Qh-Tinh
function setTableInfoSoildQHTinh(dataTable, mkh){
    let viewTable = '';

    //set data infoSoild QH Tinh
    if(dataTable.length > 0) {
        //set data infoSoild QH Tinh
        viewTable = `<div class="table-wp">
                <div class="tablep-cap">
                    <span>${dataTable[0].name}</span>
                </div>
                <div style="overflow-y: auto">
                    ${getTableBieu_CT0308(dataTable[0])}
                </div>
            </div>`;
        setQuyetDinh(0,"2015");
        $("#tableInfoSoild .table-HTQH").html(viewTable);
    }

    //set data infoSoild QH-HT Tinh
    callThongKeQuyHoachHienTrangTinh(mkh).then(data => {
        //reset value
        viewTable = '';
        let arrRs = data.filter(data1 => data1.nam == "2020" && data1.quyHoachKeHoach === "QH-HT"); //check
        if(arrRs.length > 0) {
            viewTable = `<div class="table-wp">
                <div class="tablep-cap">
                    <span>${arrRs[0].name}</span>
                </div>
                <div style="overflow-y: auto">
                    ${getTableBieu_CT01(arrRs[0])}
                </div>
            </div>`;
            $("#tableInfoSoild .table-HTQH").prepend(viewTable); //noi len dau hien trang hien thi truoc
            setQuyetDinh(0,"2015");
        }
        hideLoadingGif();
    }).catch(err => {
        console.log(err);
    })
}
//end set data tableInfoSoild-QH-Tinh

//set quyetdinh
function setQuyetDinh(idHuyen,year) {
    $("#quyetDinhTraCuu").html('');
    let arr = [];
    if (checkPage == 0) {
        arr = QUYET_DINH_QH;
    } else {
        switch (year) {
            case '2015':
                arr = QUYET_DINH_KH_2015;
                break;
            case '2016':
                arr = QUYET_DINH_KH_2016;
                break;
            case '2017':
                arr = QUYET_DINH_KH_2017;
                break;
            case '2018':
                arr = QUYET_DINH_KH_2018;
                break;
            case '2019':
                arr = QUYET_DINH_KH_2019;
                break;
        }
    }
    callQuyetDinhMap(arr[idHuyen].toUpperCase(),year).then(rs => {
        if (rs.length > 0) {
            $("#quyetDinhTraCuu").html(`<strong>Các số liệu được lấy tại quyết định: </strong><a href="${rs[0].duongDanTep}">${arr[idHuyen]}</a>`);
        }
    }).catch(err => {
        console.log(err);
    })
}

function callLoaiDat() {
    return ajaxCallGet('v1/public/loai-dat/all');
}