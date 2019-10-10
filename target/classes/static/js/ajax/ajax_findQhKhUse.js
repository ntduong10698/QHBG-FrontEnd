let href = window.location.href;
let checkPage = href.indexOf("ke-hoach") > -1 ? 1 : 0; // 0 la quy haoch 1 la ke hoach
$(function () {
    let mkh = '';
    let idHuyen = '';
    let nam = '';
    setSelectDonVi();
    setSelectDat();
    clickSearchTraCuu();
})

//view select nam
function setViewSelectYear() {
    $("#dp-drop7").parents(".dpfc-item").css("display","block");
    $(".dpfilter-wp .dpcf-select").addClass("fix-width-select");
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
    MA_DAT.map(data => {
        let val = data.split(":")[0];
        viewSelect += `<option value="${val}">${data}</option>`;
    })
    $("#dp-drop5").html(viewSelect);
    $("#dp-drop5").val(MA_DAT[0].split(":")[0]);
    $("#dp-drop5").select2().trigger('change');
}
//view select don vi
function setSelectDonVi() {
    let viewSelect = '';
    let option = 1;
    ARR_HUYEN_TEXT.map((data, index) => {
        viewSelect += `<option value="${index + 1}">${data}</option>`;
    })
    if (checkPage === 0 ) {
        viewSelect = '<option value="0">Tỉnh Bắc Giang</option>' + viewSelect;
        option = 0;
    } else {
        setViewSelectYear();
    }
    $("#dp-drop6").html(viewSelect);
    $("#dp-drop6").val(option);
    $("#dp-drop6").select2().trigger('change');
}
//click search 
function clickSearchTraCuu() {
    $("#searchTraCuu").click(function () {
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
                setTableInfoSoildKh(rs, nam);
            }).catch(err => {
                console.log(err);
            })
        }
        return false;
    })
}

//set data tableInfoSoild-KH
function setTableInfoSoildKh(dataTable, year) {
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
    }
    //end tao khung thead cho cac bang

    $("#tableInfoSoild .table-HTQH").html(viewTable);
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
            $("#tableInfoSoild .table-HTQH").prepend(viewTable); //noi len dau hien trang hien thi truoc
        }
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
        }

    }).catch(err => {
        console.log(err);
    })
}
//end set data tableInfoSoild-QH-Tinh
