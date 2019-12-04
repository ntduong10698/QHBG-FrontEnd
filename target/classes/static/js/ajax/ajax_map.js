var arrPopUpMap = []; //khai bien toan cuc luu cac khoi khi duoc click
var checkMap = 0; // truong phan biet cac huyen va tinh
var year;
var quyetDinhMap;
var arrXaHuyen = [];

$(function () {
    $("#closeThongKeMap").click(function () {
        $(".block-left-qh").css("display","none");
        $(".block-right-qh").addClass("hideThongKe");
        $("#openThongKeMap").css("display","block");
    })

    $("#openThongKeMap").click(function () {
        $(".block-left-qh").css("display","block");
        $(".block-right-qh").removeClass("hideThongKe");
        $("#openThongKeMap").css("display","none");
    })
})
// xy ly click chi tiet khoi trong map
// tao ham de dua vao onlick vi chua biet ro thoi diem sinh ra popUP
function fnView(indexPopUp) {
    $(".block-main-l2").toggle();
    viewInfoSoild(arrPopUpMap[indexPopUp]);
    viewInforQuyetDinh(arrPopUpMap[indexPopUp]);
    $(".esri-icon-close").trigger("click"); //hiden fnView
}

// set view infoSoild chi tiet
function viewInfoSoild(data) {
    console.log(data.MaQuyetDinh);
    $("#infoSoild ul li:nth-child(1)").html(`<span>${ data.MaQuyHoach === undefined ? data.MaHienTrang : data.MaHienTrang+'/'+data.MaQuyHoach }</span>`);
    $("#infoSoild ul li:nth-child(2)").html(`<span>${ data.MucDichSuDung }</span>`);
    $("#infoSoild ul li:nth-child(2)").attr("title",data.MucDichSuDung);
    $("#infoSoild ul li:nth-child(3)").html(`<span>${ data.MucDichQuyHoach === undefined ? '<br/>' : data.MucDichQuyHoach }</span>`);
    $("#infoSoild ul li:nth-child(3)").attr("title",data.MucDichQuyHoach);
    $("#infoSoild ul li:nth-child(4)").html(`<span><a href="" data-type="tinh" class="reviewLocation">${ data.Tinh }</a></span>`);
    $("#infoSoild ul li:nth-child(4)").attr("title",data.Tinh);
    $("#infoSoild ul li:nth-child(5)").html(`<span><a href="" data-type="huyen" class="reviewLocation">${ data.Huyen }</a></span>`);
    $("#infoSoild ul li:nth-child(5)").attr("title",data.Huyen);
    $("#infoSoild ul li:nth-child(6)").html(`<span><a href="" data-type="xa" class="reviewLocation">${ data.Xa }</a></span>`);
    $("#infoSoild ul li:nth-child(6)").attr("title",data.Xa);
    setInfoKhUse(data);
}

function clickReview() {
    $(".reviewLocation").click(function () {
        let type = $(this).attr("data-type");
        let val =  $(this).text();
        val = val.indexOf(".") > -1 ? val.split(".")[1].trim() : val; //tach ki tu truoc dau cham
        let url = `v1/public/${type}/find-by-name?ten-${type}=${val}`;
        console.log(url);
        ajaxCallGet(url).then(data => {
            if (data.gioiThieuId !== null) {
                getGioiThieu(data.gioiThieuId).then(gioiThieu => {
                    $(".block-main-l2 .bl-v2-right .bl-v2").css("display","flex");
                    let viewData = `<i class="fa fa-times-circle" aria-hidden="true"></i>`;
                    viewData += `<div class="reviewTinhHuyenXa">${gioiThieu.content}</div>`;
                    $(".block-main-l2 .bl-v2-right .bl-v2").html(viewData);
                    //click tat reviewTinhHuyenXa
                    $(".bl-v2>i").click(function () {
                        $(".bl-v2").css("display","none");
                    });
                }).catch(err => {
                    console.log(err);
                })
            }
        }).catch(err => {
            console.log(err);
        })
        return false;
    })
}
//end xy ly click chi tiet khoi trong map

//setQuyetDinh
function viewInforQuyetDinh() {
    let maQuyetDinh = quyetDinhMap;
    console.log(maQuyetDinh);
    let view = `<li>${maQuyetDinh === null ? '<br/>' : maQuyetDinh}</li>
                <li><br/></li>
                <li><br/></li>
                <li><br/></li>
                <li><br/></li>
                <li><br/></li>`;
    $("#chiTietQuyetDinhMap ul").html(view);
    if (maQuyetDinh != null) {
        callQuyetDinhMap(maQuyetDinh.toUpperCase(),year).then(data => {
            console.log(data);
            if (data.length > 0) {
                $("#chiTietQuyetDinhMap ul li:nth-child(2)").html(data[0].trichYeu);
                $("#chiTietQuyetDinhMap ul li:nth-child(2)").attr("title",data[0].trichYeu);
                $("#chiTietQuyetDinhMap ul li:nth-child(3)").html(data[0].coQuanBanHanh != null ? data[0].coQuanBanHanh.tenCoQUan : "<br/>");
                $("#chiTietQuyetDinhMap ul li:nth-child(3)").attr("title",(data[0].coQuanBanHanh != null ? data[0].coQuanBanHanh.tenCoQUan : ""));
                $("#chiTietQuyetDinhMap ul li:nth-child(4)").html(data[0].nguoiKy);
                $("#chiTietQuyetDinhMap ul li:nth-child(4)").attr("title",data[0].nguoiKy);
                $("#chiTietQuyetDinhMap ul li:nth-child(5)").html(data[0].ngayBanHanh != null ? `${reverseStringNam(data[0].ngayBanHanh)}` : "<br/>");
                $("#chiTietQuyetDinhMap ul li:nth-child(6)").html(`${data[0].duongDanTep != null ? `<a href="${data[0].duongDanTep}" target="_blank">${maQuyetDinh}</a>` : ''}`);
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
//endsetQuyetDinh

//set data infoKhUse qh,kh
function setInfoKhUse(data) {
    let pathName = window.location.href;
    let textViewLeft = '';
    let textViewRight = '';
    let mkh = data.MaQuyHoach === undefined ? data.MaHienTrang : data.MaQuyHoach;
    let chiTieu = data.MaQuyHoach === undefined ? data.MucDichSuDung : data.MucDichQuyHoach;
    textViewLeft = `<li><span>Chỉ tiêu</span></li><li><span>Mã Đất</span></li><li><span>Tổng diện tích</span></li>`;
    $("#infoKhUse .chitiet-qh-left:nth-child(1) ul").html(textViewLeft);
    clickReview();
    //reset view
    $("#tableInfoSoild .table-HTQH").html('');
    $("#tableInfoSoild .table-QHK").html('');

    if (pathName.indexOf("quy-hoach") > -1) {
        if (checkMap !== 0) {
            // quy hoach huyen
            setBieuMauKhacQH(mkh, checkMap, "QH"); //set datain bieu mau khac ke hoach
            callThongKeQuyHoach(mkh, checkMap).then(rs => {
                setTableInfoSoildQHHuyen(rs); //call set data tableInfoSoildQh
                if (rs.length > 0) {
                    textViewRight = `<li><span title="${chiTieu}">${chiTieu}</span></li><li><span>${mkh}</span></li><li><span>${rs[0].tongDienTich+" "+rs[0].unit}</span></li>`;
                } else {
                    textViewRight = `<li><span title="${chiTieu}">${chiTieu}</span></li><li><span>${mkh}</span></li><li><span></span></li>`;
                }
                $("#infoKhUse .chitiet-qh-left:nth-child(2) ul").html(textViewRight);
            }).catch(err => {
                console.log(err);
            });
        } else {
            setBieuMauKhacQH(mkh, checkMap, "QH");
            callThongKeQuyHoachTinh(mkh).then(rs => {
                setTableInfoSoildQHTinh(rs, "QH"); //call set data tableInfoSoildQh
                if (rs.length > 0) {
                    textViewRight = `<li><span title="${chiTieu}">${chiTieu}</span></li><li><span>${mkh}</span></li><li><span>${rs[0].tongDienTich+" "+rs[0].unit}</span></li>`;
                } else {
                    textViewRight = `<li><span title="${chiTieu}">${chiTieu}</span></li><li><span>${mkh}</span></li><li><span></span></li>`;
                }
                $("#infoKhUse .chitiet-qh-left:nth-child(2) ul").html(textViewRight);
            }).catch(err => {
                console.log(err);
            });
            //to do quy hoach tinh;
        }
    } else if (pathName.indexOf("ke-hoach") > -1) {
        textViewLeft = `<li><span>Chỉ tiêu</span></li>
                        <li><span>Mã Đất</span></li>
                        <li><span>Tổng diện tích</span></li>
                        <li><span>Năm 2015</span></li>
                        <li><span>Năm 2016</span></li>
                        <li><span>Năm 2017</span></li>
                        <li><span>Năm 2018</span></li>
                        <li><span>Năm 2019</span></li>`;
        $("#infoKhUse .chitiet-qh-left:nth-child(1) ul").html(textViewLeft);
        textViewRight += `<li><span title="${chiTieu}">${chiTieu}</span></li>
                               <li><span>${mkh}</span></li>
                               <li><span><br/></span></li>
                               <li><span><br/></span></li>
                               <li><span><br/></span></li>
                               <li><span><br/></span></li>
                               <li><span><br/></span></li>
                               <li><span><br/></span></li>`;
        // dung year loc tu arr bản ghi
        $("#infoKhUse .chitiet-qh-left:nth-child(2) ul").html(textViewRight);// set tat ca trong hop sang khong co, neu co dung jquery set lai
        if (checkMap != 0) {
            // setBieuMauKhacKH(mkh, checkMap, year); //set data in bieu mau khac ke hoach
            callThongKeKeHoach(mkh, checkMap).then(rs => {
                setTableInfoSoildKh(rs); //set data in tabelInfoSoildKh
                if (rs.length > 0) {
                    rs.map(data => {
                        if (data.bieuMau.idBieuMau == '37') {
                            // chi lay data KH o chi tiet
                            if (data.year == year) {
                                $("#infoKhUse .chitiet-qh-left:nth-child(2) ul li:nth-child(3)").html(`<span>${data.tongDienTich.toFixed(2)+" "+data.unit}</span>`); // set lai tong dien tich voi li thu 3
                            }
                            switch (data.year) {
                                // voi moi nam view ra tong dien tich ma day o nam day
                                case '2015':
                                    $("#infoKhUse .chitiet-qh-left:nth-child(2) ul li:nth-child(4)").html(`<span>${data.tongDienTich.toFixed(2)+" "+data.unit}</span>`);
                                    break;
                                case '2016':
                                    $("#infoKhUse .chitiet-qh-left:nth-child(2) ul li:nth-child(5)").html(`<span>${data.tongDienTich.toFixed(2)+" "+data.unit}</span>`);
                                    break;
                                case '2017':
                                    $("#infoKhUse .chitiet-qh-left:nth-child(2) ul li:nth-child(6)").html(`<span>${data.tongDienTich.toFixed(2)+" "+data.unit}</span>`);
                                    break;
                                case '2018':
                                    $("#infoKhUse .chitiet-qh-left:nth-child(2) ul li:nth-child(7)").html(`<span>${data.tongDienTich.toFixed(2)+" "+data.unit}</span>`);
                                    break;
                                case '2019':
                                    $("#infoKhUse .chitiet-qh-left:nth-child(2) ul li:nth-child(8)").html(`<span>${data.tongDienTich.toFixed(2)+" "+data.unit}</span>`);
                                    break;
                            }
                        }
                    })
                }
            }).catch(err => {
                console.log(err);
            })
        } else {
            textViewLeft = `<li><span>Chỉ tiêu</span></li>
                        <li><span>Mã Đất</span></li>
                        <li><span>Tổng diện tích</span></li>`;
            $("#infoKhUse .chitiet-qh-left:nth-child(1) ul").html(textViewLeft);
            textViewRight += `<li><span title="${chiTieu}">${chiTieu}</span></li>
                               <li><span>${mkh}</span></li>`;
            // dung year loc tu arr bản ghi
            $("#infoKhUse .chitiet-qh-left:nth-child(2) ul").html(textViewRight);// set tat ca trong hop sang khong co, neu co dung jquery set lai

            // quy hoach tinh
            setBieuMauKhacQH(mkh, 0, "KH"); //set datain bieu mau khac ke hoach
            callThongKeQuyHoachTinh(mkh).then(rs => {
                rs = rs.filter(data1 => data1.quyHoachKeHoach === "KH"); //check
                setTableInfoSoildQHTinh(rs, "KH");
                if (rs.length > 0) {
                    textViewRight = `<li><span title="${chiTieu}">${chiTieu}</span></li><li><span>${mkh}</span></li><li><span>${rs[0].tongDienTich.toFixed(2)+" "+rs[0].unit}</span></li>`;
                } else {
                    textViewRight = `<li><span title="${chiTieu}">${chiTieu}</span></li><li><span>${mkh}</span></li><li><span></span></li>`;
                }
                $("#infoKhUse .chitiet-qh-left:nth-child(2) ul").html(textViewRight);
            })
        }
    }
}
// end set data infoKhUse

//set data tableInfoSoild-KH
function setTableInfoSoildKh(dataTable) {
    let viewTable = '';
    let dataKh = dataTable.filter(data => data.quyHoachKeHoach === "KH" && data.year == year);
    let viewThead = '';
    dataKh.sort(function (a, b) {
        return a.bieuMau.idBieuMau - b.bieuMau.idBieuMau;
    })
    let dataHt = dataTable.filter(data => (data.quyHoachKeHoach == "KH-HT" && data.year == year));
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
    } else {
        // viewTable = "<strong>Không có dữ liệu</strong>";
        viewTable = "";
    }
    //end tao khung thead cho cac bang

    $("#tableInfoSoild .table-HTQH").html(viewTable);
    //end create khung cac bang

}
//end set data tableInfoSoild-KH

//set data tableInfoSoild-Qh-Huyen
function setTableInfoSoildQHHuyen(dataTable) {
    let viewTable = '';
    let mkhCall = '';
    //set Bang Quy Hoach Huyen
    if (dataTable.length > 0) {
        mkhCall = dataTable[0].loaiDat.maKyHieu;
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
    callThongKeKeHoachQh_Kh(mkhCall, checkMap, "QH-HT").then(data => {
        //reset value
        viewTable = '';
        let arrRs = data.filter(data1 => data1.year == "2020");
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
        // if(dataTable.length == 0 && arrRs.length == 0) $("#tableInfoSoild .table-HTQH").html("<strong>Không có dữ liệu</strong>"); //set Không có dữ liệu
        if(dataTable.length == 0 && arrRs.length == 0) $("#tableInfoSoild .table-HTQH").html("");
    }).catch(err => {
        console.log(err);
    })

}
//End set data tableInfoSoild-Qh-Huyen

//set data tableInfoSoild-Qh-Tinh
function setTableInfoSoildQHTinh(dataTable, qh_kh){
    let viewTable = '';
    let mkhCall = '';
    dataTable = dataTable.filter(value => value.quyHoachKeHoach === qh_kh);
    //set data infoSoild QH Tinh
    if(dataTable.length > 0) {
        //set data infoSoild QH Tinh
        mkhCall = dataTable[0].loaiDat.maKyHieu;
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
    callThongKeQuyHoachHienTrangTinh(mkhCall).then(data => {
        //reset value
        viewTable = '';
        let arrRs = data.filter(data1 => data1.quyHoachKeHoach === `${qh_kh}-HT`); //check
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
        // if(dataTable.length == 0 && arrRs.length == 0) $("#tableInfoSoild .table-HTQH").html("<strong>Không có dữ liệu</strong>"); //set Không có dữ liệu
        if(dataTable.length == 0 && arrRs.length == 0) $("#tableInfoSoild .table-HTQH").html("");
    }).catch(err => {
        console.log(err);
    })
}
//end set data tableInfoSoild-QH-Tinh


function setThongKe(mkh, ten, dienTich, dienTich1, qh_kh) {
    let viewHtml = '';
    dienTich === undefined  || dienTich == 0 ? viewHtml += '' : viewHtml += `<span><strong>Thống kê hiện trạng ${ten}: </strong><i>${mkh} - ${formatDienTich(dienTich.toFixed(2))} (ha).&nbsp;</i></span>`;
    dienTich1 === undefined || dienTich1 == 0 ? viewHtml += '' : viewHtml += `<span><strong>Thống kê ${qh_kh === "kh" ? "kế hoạch": "quy hoạch"} ${ten}: </strong><i>${mkh} - ${formatDienTich(dienTich1.toFixed(2))} (ha)</i></span>`;
    $(".thong-ke-ma-dat").html(viewHtml);
}

function getXaMuitlSelect(uid) {
    let xa = $(`#viewDanhSachXaHuyen li[data-uid='${uid}']`).text();
    xa = xa.replace("P.","Phường");
    xa = xa.replace("Xã TT","TT.");
    return xa;
}

function getHuyenMuitlSelect(uid) {
    let huyen = $(`#viewDanhSachXaHuyen li[data-uid='${uid}']`).text();
    let rs = {};
    if(huyen.indexOf('TP.') >= 0) {
        rs = {
            huyen: 'TP. Bắc Giang',
            idHuyen: 1
        }
    } else if (huyen.indexOf('Hiệp') >= 0) {
        rs = {
            huyen: 'huyện Hiệp Hòa',
            idHuyen: 2
        }
    } else {
        for (let i = 2; i < 10; i++) {
            if(huyen.indexOf(ARR_HUYEN_TEXT[i]) >= 0) {
                rs = {
                    huyen: `huyện ${ARR_HUYEN_TEXT[i]}`,
                    idHuyen: i + 1
                }
            }
        }
    }
    return rs;
}

function thongKeTinh(mkh, yearFind, map, map1, qh_kh) {
    console.log(yearFind);
    let arrCall = [callThongKeQuyHoachHienTrangTinh(mkh), callThongKeQuyHoachTinh(mkh)];
    Promise.all(arrCall).then(listRs => {
        console.log(listRs);
        if(map1 === undefined) {
            $(".thong-ke-ma-dat").html("");
            let dataQhHTTinh, dataQhTinh = undefined;
            if(listRs[0] !== undefined) {
                listRs[0].map(item => {
                    if (item.nam == yearFind) {
                        dataQhHTTinh = item;
                    }
                })
            }

            if(listRs[1] !== undefined) {
                listRs[1].map(item => {
                    if (item.nam == yearFind) {
                        dataQhTinh = item;
                    }
                })
            }
            setThongKe(mkh, "tỉnh", dataQhHTTinh === undefined ? undefined : dataQhHTTinh.tongDienTich, dataQhHTTinh === undefined ? undefined : dataQhTinh.tongDienTich, qh_kh);
        } else {
            let {huyen, idHuyen} = getHuyenMuitlSelect(map1);
            console.log(idHuyen);
            let dienTich, dienTich1 = 0;
            if(listRs[0] !== undefined) {
                let dienTichHuyen = {};
                let dataYear = {};
                listRs[0].map(item => {
                    if (item.nam == yearFind) {
                        dataYear = item;
                    }
                })
                console.log(dataYear);
                if (dataYear.dienTichTheoHuyens !== undefined){
                    dataYear.dienTichTheoHuyens.map(data => {
                        if (data.huyen.idHuyen == idHuyen) {
                            dienTichHuyen = data;
                        }
                    })
                    dienTich = dienTichHuyen.dienTich == 0 ? undefined: dienTichHuyen.dienTich;
                }else {
                    dienTich = undefined;
                }
            } else {
                dienTich = undefined;
            }

            if(listRs[1] !== undefined) {
                let dienTichHuyen = {};
                let dataYear = {};
                listRs[1].map(item => {
                    if (item.nam == yearFind) {
                        dataYear = item;
                    }
                })
                if (dataYear.dienTichTheoHuyens !== undefined){
                    dataYear.dienTichTheoHuyens.map(data => {
                        if (data.huyen.idHuyen == idHuyen) {
                            dienTichHuyen = data;
                        }
                    })
                    dienTich1 = dienTichHuyen.dienTich == 0 ? undefined: dienTichHuyen.dienTich;
                }else {
                    dienTich1 = undefined;
                }
            } else {
                dienTich1 = undefined;
            }
            $(".thong-ke-ma-dat").html("");
            setThongKe(mkh, huyen, dienTich, dienTich1, qh_kh);
        }
        hideLoadingGif();
    }).catch(err => {
        console.log(err);
        hideLoadingGif();
    })
}

function thongKeHuyen(arrCall, mkh, yearFind, map, map1, qh_kh) {
    console.log(yearFind);
    Promise.all(arrCall).then(listRs => {
        console.log(listRs);
        //chua co truong họp khac nam doi voi tinh va huyen
        if (map1 === undefined) {
            $(".thong-ke-ma-dat").html("");
            let dataQhHTHuyen, dataQhHuyen = undefined;
            if(listRs[0] !== undefined) {
                listRs[0].map(item => {
                    if (item.year == yearFind) {
                        dataQhHTHuyen = item;
                    }
                })
            }

            if(listRs[1] !== undefined) {
                listRs[1].map(item => {
                    if (item.nam == yearFind || item.year == yearFind) {
                        dataQhHuyen = item;
                    }
                })
            }
            setThongKe(mkh, ARR_HUYEN_TEXT[map-1], dataQhHTHuyen === undefined ? undefined : dataQhHTHuyen.tongDienTich, dataQhHuyen === undefined ? undefined : dataQhHuyen.tongDienTich, qh_kh);
        } else {
            let xa = getXaMuitlSelect(map1);
            let dienTich, dienTich1 = 0;
            if(listRs[0] !== undefined) {
                let dienTichXa = {};
                let dataYear = {};
                listRs[0].map(item => {
                    if (item.year == yearFind) {
                        dataYear = item;
                    }
                })
                console.log(dataYear);
                if (dataYear.dienTichTheoXas !== undefined) {
                    dataYear.dienTichTheoXas.map(data => {
                        if (data.xa.tenXa === xa) {
                            dienTichXa = data;
                        }
                    })
                    dienTich = dienTichXa.dienTich == 0 ? undefined: dienTichXa.dienTich;
                } else {
                    dienTich = undefined;
                }
            } else {
                dienTich = undefined;
            }

            if(listRs[1] !== undefined) {
                let dienTichXa = {};
                let dataYear = {};
                listRs[1].map(item => {
                    if (item.nam == yearFind || item.year == yearFind) {
                        dataYear = item;
                    }
                })

                if(dataYear.dienTichTheoXas !== undefined) {
                    dataYear.dienTichTheoXas.map(data => {
                        if (data.xa.tenXa === xa) {
                            dienTichXa = data;
                        }
                    })
                    dienTich1 = dienTichXa.dienTich == 0 ? undefined: dienTichXa.dienTich;
                } else {
                    dienTich1 = undefined;
                }
            } else {
                dienTich1 = undefined;
            }
            $(".thong-ke-ma-dat").html("");
            setThongKe(mkh, xa, dienTich, dienTich1, qh_kh);
        }
        hideLoadingGif();
    }).catch(err => {
        console.log(err);
        hideLoadingGif();
    })
}

function getThongKe(mkh) {
    let href = window.location.href;
    let qh_kh = href.indexOf("quy-hoach") >= 0 ? "qh" : "kh";
    let params = (new URL(href)).searchParams;
    let map =  params.get("map");
    let map1 = $("#viewDanhSachXaHuyen input:checked").val();
    let nam = params.get("nam");
    if (qh_kh === "qh") {
        //quy hoạch
        if (map == 0) {
            //tỉnh
            let yearFind = nam.split("-")[1] - 0 + 1;
            thongKeTinh(mkh, yearFind, map, map1, qh_kh);
        } else {
            //huyện
            let arrCall = [callThongKeKeHoachQh_Kh(mkh, map, "QH-HT"), callThongKeQuyHoach(mkh, map)];
            let yearFind = nam.split("-")[1] - 0 + 1;
            thongKeHuyen(arrCall, mkh, yearFind, map, map1, qh_kh);
        }
    } else {
        //kế hoạch
        if (map == 0) {
            //tỉnh
            let yearFind = nam.split("-")[0] - 1;
            thongKeTinh(mkh, yearFind, map, map1, qh_kh);
        } else {
            //huyện
            let arrCall = [callThongKeKeHoachQh_Kh(mkh, map, "KH-HT"), callThongKeKeHoachQh_Kh(mkh, map, "KH")];
            thongKeHuyen(arrCall, mkh, nam, map, map1, qh_kh);
        }
    }
}

//view map arcgis
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/MapImageLayer",
    "esri/widgets/Legend",
    "esri/geometry/Extent",
    "esri/geometry/SpatialReference",
    "esri/tasks/IdentifyTask",
    "esri/tasks/support/IdentifyParameters",
    "esri/symbols/SimpleFillSymbol",
    "esri/Graphic",
    "esri/tasks/QueryTask",
    "esri/tasks/support/Query",
    "dojo/on",
    "dojo/dom",
    "esri/layers/support/Sublayer",
    "dojo/_base/array",
    "esri/request",
    "esri/geometry/Point",
    "dojo/domReady!"
], function (Map, MapView, MapImageLayer, Legend, Extent, SpatialReference, IdentifyTask,
             IdentifyParameters, SimpleFillSymbol, Graphic, QueryTask, Query, on, dom, Sublayer, arrayUtils, esriRequest, Point) {

    //function handling

    //get url web
    function getUrlMap() {
        let rs = "http://103.9.86.47:6080/arcgis/rest/services/";
        let pathName = window.location.href;
        let params = (new URL(window.location)).searchParams;
        let arrSplit = [];
        let indexHuyen;
        if (pathName.search("quy-hoach") > -1) {
            arrSplit = params.get('map');
            if (arrSplit !== "0") {
                checkMap = arrSplit - 0; // set truong phan biet huyen va tinh// convert ve so
                indexHuyen = checkMap - 1; // url tinh map =0, cac huyen 1-10, chuyen ve de truy cap index trong mang bat dau tu 0
                rs += `Quy_Hoach_${ARR_HUYEN[indexHuyen]}_${params.get('nam').replace("-","_")}`;
                //set name ban do
                $("#nameMap").html(`<i class="fas fa-sitemap"></i> QH-${ARR_HUYEN_TEXT[indexHuyen]} ${params.get('nam')}`);
                quyetDinhMap = QUYET_DINH_QH[indexHuyen+1];
            } else {
                rs += `Quy_Hoach_Bac_Giang_${params.get('nam').replace("-","_")}`;
                //set name ban do
                $("#nameMap").html(`<i class="fas fa-sitemap"></i> QH-Bắc Giang ${params.get('nam')}`);
                quyetDinhMap = QUYET_DINH_QH[0];
            }
            console.log(rs);
            year = params.get('nam').split("-")[0];
            // change name infoKhUse
            $("#textInfoKhUser").html("Thông tin quy hoạch sử dụng đất");
        } else if (pathName.search("ke-hoach") > -1) {
            arrSplit = params.get('map');
            if (arrSplit !== "0") {
                checkMap = arrSplit - 0; //convert ve so
                indexHuyen = checkMap - 1; // url tinh map =0, cac huyen 1-10
                year = params.get('nam');
                rs += `Ke_Hoach_${ARR_HUYEN[indexHuyen]}_${year}`;
                //set name ban do
                $("#nameMap").html(`<i class="fas fa-sitemap"></i> KH-${ARR_HUYEN_TEXT[indexHuyen]}-${year}`);
                // change name infoKhUse
                $("#textInfoKhUser").html("Thông tin kế hoạch sử dụng đất");
                switch (year) {
                    case '2015':
                        quyetDinhMap = QUYET_DINH_KH_2015[indexHuyen+1];
                        break;
                    case '2016':
                        quyetDinhMap = QUYET_DINH_KH_2016[indexHuyen+1];
                        break;
                    case '2017':
                        quyetDinhMap = QUYET_DINH_KH_2017[indexHuyen+1];
                        break;
                    case '2018':
                        quyetDinhMap = QUYET_DINH_KH_2018[indexHuyen+1];
                        break;
                    case '2019':
                        quyetDinhMap = QUYET_DINH_KH_2019[indexHuyen+1];
                        break;
                }
            } else {
                rs += `Ke_Hoach_Bac_Giang_${params.get('nam').replace("-","_")}`;
                //set name ban do
                year = params.get('nam').split("-")[0];
                $("#nameMap").html(`<i class="fas fa-sitemap"></i> KH-Bắc Giang ${params.get('nam')}`);
                quyetDinhMap = QUYET_DINH_KH_2019[0];
            }
        }
        console.log(rs+"/MapServer");
        return rs + "/MapServer";
    }
    //end get url web

    //set upper in inputSearch
    $('#inputSearch').keyup(function () {
        this.value = this.value.toUpperCase();
    });

    //get groupLayer QuyHoach, NenDiaLy, HienTrang in fullLayerMap
    function filterSublayers(layersCall) {
        return layersCall.filter(function findGroupLayer(data){
            return (data.name === "QuyHoach" || data.name === "HienTrang" || data.name === "NenDiaLy") ;
        });
    }

    //get groupLayer KhoiQuyHoach, KhoiHienTrang in fullLayerMap
    function filterSublayersClick(layersCall) {
        return layersCall.filter(function findGroupLayer(data){
            return (data.name.search(/(QH_|KH_)(HienTrang|KeHoach|QuyHoach)/) > -1);
        });
    }
    
    //get layer KhoiXa hoac KhoiHuyen, -1 quy dinh la tim Khoi Huyen, > -1 quy dinh la tim Khoi Xa
    function filterKhoiXaHuyen(layersCall, check) {
        let textFind = check > 0 ? 'KhoiXa' : 'KhoiHuyen';
        return layersCall.filter(function findGroupLayer(data){
            return (data.name.search(textFind) > -1);
        });
    }

    //find chu thich dat
    function findSoild(chuThichDat) {
        setTimeout(function () {
            let textSearch = $(".search-chuthich input").val().toUpperCase();
            let contentSearch = '';
            let arrSearch = chuThichDat.filter(function find(data) {
                return (data.label.toUpperCase().search(textSearch) > -1);
            })
            if (arrSearch.length !== 0) {
                arrSearch.map(data => {
                    contentSearch += `<li><img src='data:image/png;base64,${data.imageData}'/> ${data.label}</li>`
                })
            } else {
                contentSearch = "Không có dữ liệu tương ứng."
            }
            $("#hienthi-chuthich").html(contentSearch);
        },100)
    }

    //end function handling

    //render map and handling map
    // let urlApiMap = "http://103.9.86.47:6080/arcgis/rest/services/Quy_Hoach_Hiep_Hoa_2015_2019/MapServer";
    let urlApiMap = getUrlMap();
    ajaxCall(urlApiMap+"?f=pjson").then(dataRs => {

        //pretreatment (tien xu ly)
        let layersCall = dataRs.layers;
        let sublayersCall = filterSublayers(layersCall); // get groupLayer QuyHoach, HienTrang or NenDiaLy
        // console.log(sublayersCall);
        let sublayersClick = filterSublayersClick(layersCall); // get Layer QuyHoach, HienTrang
        // console.log(sublayersClick);
        let layerKhoiXaHuyen = filterKhoiXaHuyen(layersCall, checkMap);
        // console.log(layerKhoiXaHuyen);
        //end pretreatment

        //set Option search map neu la tinh thi them option huyen (tam thoi bo)
        // if(checkMap === 0 ) {
        //     // neu la tinh thi them tuy chon tim khoi huyen
        //     $("#tieuChiSearchMap").append(`<option value="huyen">Huyện</option>`);
        // }

        //code map here
        let identifyTask, params;
        //sublayersCall[0] is QuyHoach and sublayersCall[1] is HienTrang or NenDiaLy
        let layer = new MapImageLayer({
            url: urlApiMap,
            sublayers: [{
                id: sublayersCall[1].id,
                visible: true
                },
                {
                id: sublayersCall[0].id,
                visible: true
                }
            ]
        });
        spatialReference = new SpatialReference({
            wkt: dataRs.spatialReference.wkt
        }); //set wkt in layersCall return for ajax
        let ext = new Extent({
            xmin: dataRs.fullExtent.xmin,
            ymin: dataRs.fullExtent.ymin,
            xmax: dataRs.fullExtent.xmax,
            ymax: dataRs.fullExtent.ymax,
            spatialReference: spatialReference
        });
        let map = new Map({
            layers: [layer]
        });
        let view = new MapView({
            container: "mapView",
            map: map,
            extent: ext
        });
        view.ui.move("zoom", "bottom-right");
        //end set view map

        //set event, notice in view
        view.when(function () {
            // executeIdentifyTask() is called each time the view is clicked
            on(view, "click", executeIdentifyTask);

            // Create identify task for the specified map service
            identifyTask = new IdentifyTask(urlApiMap);
            // Set the parameters for the Identify
            params = new IdentifyParameters();
            params.tolerance = 3;
            params.layerIds = [sublayersClick[0].id, sublayersClick[1].id];
            params.layerOption = "top";
            params.width = view.width;
            params.height = view.height;
            params.returnGeometry = true;
            //set notice map
            var urlLegend = urlApiMap + '/legend?f=pjson';
            esriRequest(urlLegend, {
                responseType: "json"
            }).then(response => {
                //get all layer in array
                let listLayer = response.data.layers;
                let layerNotices = [];
                listLayer.map(layer => {
                    if (layer.layerName.search(/(QH_|KH_)(HienTrang|KeHoach|QuyHoach)/) > -1) {
                        let listLegend = layer.legend;
                        listLegend.map(legend => {
                            if (legend.label !== '<all other values>' && legend.label != 209) {
                                layerNotices = layerNotices.filter(function(data) {
                                    return data.label !== legend.label;
                                })
                                layerNotices.push(legend);
                            }
                        })
                    }
                })
                layerNotices.sort(function(a, b){return a-b});  //get all MaDat and sort for id
                //set view notice
                let content = ''; // chua html view chu thich loại dat
                let chuThichDat = []; //lua view html de tim kiem
                // handling set chu thich dat trong map
                layerNotices.map(data => {
                    let chuThich = {
                        imageData : data.imageData,
                        label: mucDich(data.label)
                    }
                    content += `<li><img src='data:image/png;base64,${data.imageData}'/> ${mucDich(data.label)}</li>`
                    chuThichDat.push(chuThich);
                })
                $("#hienthi-chuthich").html(content); //set chu thich in map
                //set tim kiem chu thich dat //on input su kien thay doi gia tri trong input
                $(".search-chuthich input").on('input',function (event) {
                    //get value delay 100 get value
                    findSoild(chuThichDat);
                })

                //handling set tim kiem cac loai dat view
                let timKiemDatView = '';
                layerNotices.map(data => {
                    timKiemDatView += `<li><input type="checkbox" value=${data.label}><div class='muc-dich-dat'><img src='data:image/png;base64,${data.imageData}'/>  ${mucDich(data.label)}</div></li>`
                })
                $(".viewTimKiemDat").html(timKiemDatView);
                $(".viewTimKiemDat input").change(function () {
                    roleCheckBox();
                }) //set change in checkbox search
                //end set view notice
                $("#btnSearchMutil").click(function () {
                    searchMapCheckBox();
                })
                //set huyen so do viewDanhSachXaHuyen
                let viewDanhSachXaHuyen = '';
                // let viewDanhSachXaHuyen = `<li data-uid="-1" class="activeHuyenXa"><input type="checkbox" value="-1">Tất Cả</li>`;
                let queryViewXaHuyen = '';
                if (checkMap > 0 ) {
                    $(".view-qh-v1 .title-qh span").html(`<i class="fas fa-building"></i> Xã/ Phường`);
                    queryViewXaHuyen = 'Xa IS NOT NULL';
                } else {
                    $(".view-qh-v1 .title-qh span").html(`<i class="fas fa-building"></i> Huyện/ Thành Phố`);
                    queryViewXaHuyen = 'Huyen IS NOT NULL';
                }
                let queryTaskXaHuyen = new QueryTask({
                    url: urlApiMap + "/"+layerKhoiXaHuyen[0].id  // index 0 is KhoiQuyHoach, KhoiKeHoach
                });
                let queryXaHuyen = new Query();
                queryXaHuyen.returnGeometry = true;
                queryXaHuyen.outFields = ["*"];
                queryXaHuyen.where = queryViewXaHuyen;
                console.log(queryXaHuyen);
                queryTaskXaHuyen.execute(queryXaHuyen).then(function (results) {
                    searchViewXaPhuong = results;
                    arrXaHuyen = results.features;
                    // if (arrXaHuyen.length === 0) {
                    //     setTimeout(function () {
                    //         window.location.reload();
                    //     }, 500)
                    // }
                    console.log(`length : ${arrXaHuyen.length}`);
                    arrXaHuyen.map(data => {
                        let item = data.attributes;
                        if (checkMap > 0) {
                            // viewDanhSachXaHuyen += `<li data-uid="${data.uid}"><i class="fas fa-map-marked-alt"></i>&nbsp; ${ (item.Xa.indexOf(".") > -1) ? item.Xa : "Xã "+item.Xa}</li>`;
                            viewDanhSachXaHuyen += `<li data-uid="${data.uid}"><input type="checkbox" value="${data.uid}">${ (item.Xa.indexOf(".") > -1) ? item.Xa : "Xã "+item.Xa}</li>`;
                        } else {
                            // viewDanhSachXaHuyen += `<li data-uid="${data.uid}"><i class="fas fa-map-marked-alt"></i>&nbsp; ${ (item.Huyen.indexOf(".") > -1) ? item.Huyen : "Huyện "+item.Huyen}</li>`;
                            viewDanhSachXaHuyen += `<li data-uid="${data.uid}"><input type="checkbox" value="${data.uid}">${ (item.Huyen.indexOf(".") > -1) ? item.Huyen : "Huyện "+item.Huyen}</li>`;
                        }
                    })
                    $('#viewDanhSachXaHuyen').html(viewDanhSachXaHuyen);
                    $("#viewDanhSachXaHuyen li").click(function () {
                        $("#viewDanhSachXaHuyen li").removeClass("activeHuyenXa");
                        $(this).addClass("activeHuyenXa");
                        zoomToXaHuyen($(this).attr("data-uid"));
                    })
                }).catch(err => {
                    console.log(err);
                })
                //end set huyen so do

            }).catch(err => {
                console.log(err);
            })
            //end set notice map
            //function click polygon map, set view info when click
            function executeIdentifyTask(event) {
                if (event.graphic) {
                    console.log("event graphic");
                } else {
                    // Set the geometry to the location of the view click
                    params.geometry = event.mapPoint;
                    params.mapExtent = view.extent;
                    dom.byId("mapView").style.cursor = "wait";
                    // This function returns a promise that resolves to an array of features
                    // A custom popupTemplate is set for each feature based on the layer it
                    // originates from
                    identifyTask.execute(params).then(function (response) {

                        let results = response.results;
                        arrPopUpMap = []; // moi lan click reset lai mang chua popUp
                        return arrayUtils.map(results, function (result, indexPopUp) {
                            let feature = result.feature;
                            arrPopUpMap.push(feature.attributes); // them tung khoi duoc click
                            let layerName = result.layerName;
                            feature.attributes.layerName = layerName;
                            feature.attributes.DienTich = feature.attributes.DienTich < 0 ? 0 - feature.attributes.DienTich : feature.attributes.DienTich - 0;
                            feature.attributes.DienTich = formatNumber(feature.attributes.DienTich.toFixed(2), ',', ',');
                            if (layerName.search(/(QH_|KH_)(QuyHoach|KeHoach)/) > -1) {
                                let quyetDinhBanDo = feature.attributes.SoQuyetDinh !== undefined ? feature.attributes.SoQuyetDinh: feature.attributes.MaQuyetDinh;
                                quyetDinhMap = quyetDinhBanDo !== 'Null'? quyetDinhBanDo : quyetDinhMap;
                                feature.popupTemplate = { // autocasts as new PopupTemplate()
                                    title: "Thông tin quy hoạch",
                                    content: "<b>Mã sử dụng đất:</b> {MaHienTrang}/{MaQuyHoach} " +
                                        "<br><b>Mục đích sử dụng đất: </b> {MucDichSuDung}" +
                                        "<br><b>Mục đích quy hoạch: </b> {MucDichQuyHoach}" +
                                        "<br><b>Diện tích vùng: </b> {DienTich} (ha)" +
                                        "<br><b>Số Quyết Định :</b>" + `${quyetDinhMap == null ? '' : quyetDinhMap}` +
                                        "<br><b>Xã :</b> <span>{Xa}</span> " +
                                        "<b> Huyện :</b> <span>{Huyen}</span> " +
                                        "<b> Tỉnh :</b> <span>{Tinh}</span> " +
                                        "<br> <b> Lưu ý :</b> <span>Diện tích chỉ có giá trị tham khảo trên bản đồ</span> " +
                                        `<br><b><div class='xem-chi-tiet' onclick='fnView(${indexPopUp})'>Thống kê</div></b>`
                                };
                            } else if (layerName.search(/(QH_|KH_)HienTrang/) > -1) {
                                feature.popupTemplate = { // autocasts as new PopupTemplate()
                                    title: "Thông tin sử dụng đất",
                                    content: "<b>Mã sử dụng đất: </b> {MaHienTrang} " +
                                        "<br><b>Mục đích sử dụng: </b> {MucDichSuDung}" +
                                        "<br><b>Diện tích vùng: </b> {DienTich} (ha)" +
                                        "<br><b>Xã :</b> <span>{Xa}</span> " +
                                        "<b> Huyện :</b> <span>{Huyen}</span> " +
                                        "<b> Tỉnh :</b> <span>{Tinh}</span> " +
                                        "<br> <b> Lưu ý :</b> <span>Diện tích chỉ có giá trị tham khảo trên bản đồ</span> " +
                                        `<br><b><div class='xem-chi-tiet' onclick='fnView(${indexPopUp})'>Thống kê</div></b>`
                                };
                            }

                            return feature;

                        });

                    }).then(showPopup); // Send the array of features to showPopup()
                }
                //show popUp when click
                function showPopup(response) {
                    if (response.length > 0) {
                        view.popup.open({
                            features: response,
                            location: event.mapPoint
                        });
                        //debugger;
                        var graphics = arrayUtils.map(response, function (item) {
                            //debugger;
                            var symbol = new SimpleFillSymbol({
                                color: [0, 51, 204, 1],
                                style: "none",
                                outline: { // autocasts as esri/symbols/SimpleLineSymbol
                                    color: [0, 51, 204, 1],
                                    width: 2
                                }
                            });
                            var polygonGraphic = new Graphic({
                                geometry: item.geometry,
                                symbol: symbol
                            });
                            return polygonGraphic;
                        });
                        view.graphics.removeAll();
                        view.graphics.addMany(graphics);
                    }
                    dom.byId("mapView").style.cursor = "auto";
                }
                //end show popUp when click
            }
            //end function click
        })
        //end set event, notice in view

        //on of layer with id checkQuyHoach end checkHienTrang in view
        on(dom.byId("checkQuyHoach"), "change", function (ev) {
            layer.findSublayerById(0).visible = ev.target.checked; //on of KeHoach or QuyHoach all id 0
        });
        on(dom.byId("checkHienTrang"), "change", function (ev) {
            console.log(layer);
            layer.findSublayerById(sublayersCall[1].id).visible = ev.target.checked; //on of HienTrang all index 1
        });
        //end on of layer
        //
        //search map with id btnSearch
        on(dom.byId("btnSearchMap"), "click", executeQueryTask);
        var searchResults;
        var searchViewXaPhuong;
        // handling search
        function executeQueryTask() {
            let inputSearch = dom.byId("inputSearchMap").value; //get text in input Search with id inputSearch
            $(document.body).css({
                'cursor': 'wait!important' //when load change icon cursor
            });
            let tieuChi = dom.byId("tieuChiSearchMap").value; //get tieuChi search
            //-----------------QuyHoach && KeHoach -- bo link huyen xa
            if (tieuChi === 'quyHoach') {
                searchMapQuyHoach(`'${inputSearch}'`); // query text can 'ma'
            }
            //-----------------HienTrang -- bo link huyen xa
            if (tieuChi == 'hienTrang') {
                searchMapHienTrang(`'${inputSearch}'`); // query text can 'ma'
            }
            //------------------Xa-Phuong
            if (tieuChi == 'xa') {
                let khoiXa = layersCall.find(data => data.name.search("KhoiXa") > -1);
                let queryTask = new QueryTask({
                    url: urlApiMap + "/" + khoiXa.id
                });
                let query = new Query();
                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = `Upper(Xa) like N'%${inputSearch}%'`;
                // When resolved, returns features and graphics that satisfy the query.
                queryTask.execute(query).then(function (results) {
                    searchResults = results;
                    if (searchResults.features.length > 0) {
                        let content = "";
                        content += " <thead><tr><th>STT</th><th>Xã</th><th>Huyện</th><th>Tỉnh</td><th>Diện tích</th>" +
                            "<th>Vị trí</th></tr></thead>";
                        let features = searchResults.features;
                        features.map((data,index) => {
                            let item = data.attributes;
                            let uid = data.uid;
                            content += `<tr><td>  ${index + 1} </td><td>${item.Xa}</td> <td>${item.Huyen}</td><td>Bắc Giang</td><td>${item.DienTich > 0 ? item.DienTich : -item.DienTich} (ha)</td>`;
                            content += `</td><td><a id='idVitriXa${uid}'  href='' >Vị trí</a></td>`;
                        })
                        dom.byId("tableSearchMap").innerHTML = content;
                        features.map(data => {
                            let uid = data.uid;
                            $(`#idVitriXa${uid}`).click(() => {
                                zoomTo(uid);

                            });
                        })
                        $(".form-search-toado").css("display","block");
                        $("#tableSearchMap a").click(function () {
                            return false;
                        });
                    } else {
                        $(".form-search-toado").css("display","none");
                        // alert("Không tìm thấy kết quả phù hợp");
                        viewAlter(2,"Không tìm thấy kết quả phù hợp");
                    }
                    $(document.body).css({
                        'cursor': 'default'
                    });
                }).catch(err => {
                    console.log(err);
                });

                queryTask.executeForCount(query).then(function (searchResults) {
                    console.log(searchResults);
                }).catch(err => {
                    console.log(err);
                });
            }
            //------------------Huyen--chua test
            if (tieuChi == 'huyen') {
                let khoiHuyen = layersCall.find(data => data.name.search("KhoiHuyen") > -1);
                let queryTask = new QueryTask({
                    url: urlApiMap+ "/" + khoiHuyen.id
                });
                let query = new Query();
                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = `Upper(Huyen) like N'%${inputSearch}%'`;
                // When resolved, returns features and graphics that satisfy the query.
                queryTask.execute(query).then(function (results) {
                    searchResults = results;
                    if (searchResults.features.length > 0) {
                        let content = "";
                        content += " <thead><tr><th>STT</th><th>Huyện</th><th>Tỉnh</th><th>Diện tích</th>" +
                            "<th>Vị trí</th></tr></thead>";
                        let features = searchResults.features;
                        features.map((data,index) => {
                            let item = data.attributes;
                            let uid = data.uid;
                            content += `<tr><td>  ${index + 1} </td><td>${item.Huyen}</td> <td>Bắc Giang</td><td>${item.DienTich} (ha)</td>`;
                            content += `<td><a id='idVitriHuyen${uid}'  href='' '>Vị trí</a></td>`
                        })
                        dom.byId("tableSearchMap").innerHTML = content;
                        features.map(data => {
                            let uid = data.uid;
                            $(`#idVitriHuyen${uid}`).click(() => {
                                zoomTo(uid);
                            });
                        })
                        $("#tableSearchMap a").click(function () {
                            return false;
                        });
                        $(".form-search-toado").css("display","block");
                    } else {
                        $(".form-search-toado").css("display","none");
                        // alert("Không tìm thấy kết quả phù hợp");
                        viewAlter(2,"Không tìm thấy kết quả phù hợp");
                    }
                    $(document.body).css({
                        'cursor': 'default'
                    });
                }).catch(err => {
                    console.log(err);
                });

                queryTask.executeForCount(query).then(function (searchResults) {
                    console.log(searchResults);
                }).catch(err => {
                    console.log(err);
                });
            }
        }

        function getQueryHuyenXa(uidHuyenXa) {
            let queryHuyenXa = '';
            for (let i = 0 ; i < arrXaHuyen.length; i ++) {
                if (arrXaHuyen[i].uid == uidHuyenXa) {
                    queryHuyenXa += checkMap == 0 ? `Upper(Huyen) like N'%${arrXaHuyen[i].attributes.Huyen}%'` : `Upper(Xa) like N'%${arrXaHuyen[i].attributes.Xa}%'`;
                }
            }
            return queryHuyenXa;
        }

        function getManyQueryHuyenXa() {
            let query = '';
            $("#viewDanhSachXaHuyen li input:checked").length === 0 ? '' : query += ' and (';
            $("#viewDanhSachXaHuyen li input:checked").map((index, data) => {
                index === 0 ? query += getQueryHuyenXa($(data).val()) : query+= ' or ' + getQueryHuyenXa($(data).val());
            });
            $("#viewDanhSachXaHuyen li input:checked").length === 0 ? '' : query += ')';
            return query;
        }

        function searchMapQuyHoach(inputSearch) {
            let queryTask = new QueryTask({
                url: urlApiMap + "/"+sublayersClick[0].id  // index 0 is KhoiQuyHoach, KhoiKeHoach
            });
            let query = new Query();
            query.returnGeometry = true;
            query.outFields = ["*"];
            query.where = `(MaQuyHoach = ${inputSearch})`;
            query.where += getManyQueryHuyenXa();
            // When resolved, returns features and graphics that satisfy the query.
            $('body').css({
                'cursor': 'wait'
            });
            viewLoadingGif();
            queryTask.execute(query).then(function (results) {
                searchResults = results;
                if (searchResults.features.length > 0) {
                    let content = "";
                    content += " <thead><tr><th>STT</th><th>Mã quy hoạch</th><th>Mục đích quy hoạch</th><th>Diện tích</th>" +
                        "<th>Xã</th><th>Huyện</th><th>Thông tin</th></tr></thead>";
                    // let ma = searchResults.features[0].attributes.MaQuyHoach;
                    let features = searchResults.features;
                    features = features.filter(item => item.attributes.Huyen !== null);
                    features.sort(function (a,b) {
                        return a.attributes.Huyen.localeCompare(b.attributes.Huyen);
                    })
                    features.map((data, index) => {
                        let item = data.attributes;
                        let uid = data.uid;
                        content += `<tr><td>  ${index + 1} </td><td>${item.MaHienTrang}/${item.MaQuyHoach}</td> <td>${item.MucDichQuyHoach}</td><td>${item.DienTich > 0 ? item.DienTich.toFixed(2) : -item.DienTich.toFixed(2)} (ha)</td>`;
                        content += `<td>${item.Xa.replace("p.","P.")}</td><td>${item.Huyen}</td><td><a id='idVitri${uid}'  href='' '>Vị trí</a></td>`;
                    })
                    dom.byId("tableSearchMap").innerHTML = content;
                    features.map(data => {
                        let uid = data.uid;
                        $(`#idVitri${uid}`).click(() => {
                            zoomTo(uid);
                            $(".content-form-search > .fa-times-circle").trigger("click");
                        });
                    })
                    getThongKe(features[0].attributes.MaQuyHoach);
                    $(".form-search-toado").css("display","block");
                    $("#tableSearchMap a").click(function () {
                        return false;
                    });
                } else {
                    $(".form-search-toado").css("display","none");
                    // alert("Không tìm thấy kết quả phù hợp");
                    viewAlter(2,"Không tìm thấy kết quả phù hợp");
                    hideLoadingGif();
                }
                $(document.body).css({
                    'cursor': 'default'
                });
            }).catch(err => {
                console.log(err);
            });

            queryTask.executeForCount(query).then(function (searchResults) {
                console.log(searchResults);
            }).catch(err => {
                console.log(err);
            });
        }
        
        function searchMapHienTrang(inputSearch) {
            let queryTask = new QueryTask({
                url: urlApiMap + "/"+sublayersClick[1].id // index 1 is KhoiQuyHoach
            });
            let query = new Query();
            query.returnGeometry = true;
            query.outFields = ["*"];
            query.where = `(MaHienTrang = ${inputSearch})`;
            query.where += getManyQueryHuyenXa();
            // When resolved, returns features and graphics that satisfy the query.
            $('body').css({
                'cursor': 'wait'
            });
            viewLoadingGif();
            queryTask.execute(query).then(function (results) {
                searchResults = results;
                if (searchResults.features.length > 0) {
                    let content = "";
                    content += " <thead><tr><th>STT</th><th>Mã hiện trạng</th><th>Mục đích sử dụng</th><th>Diện tích</th>" +
                        "<th>Xã</th><th>Huyện</th><th>Thông tin</th></tr></thead>";
                    let features = searchResults.features;
                    features.sort(function (a,b) {
                        return a.attributes.Huyen.localeCompare(b.attributes.Huyen);
                    })
                    features.map((data, index) => {
                        let item = data.attributes;
                        let uid = data.uid;
                        content += `<tr><td>  ${index + 1} </td><td>${item.MaHienTrang}</td> <td>${item.MucDichSuDung}</td><td>${item.DienTich > 0 ? item.DienTich.toFixed(2) : -item.DienTich.toFixed(2)} (ha)</td>`;
                        content += `<td>${item.Xa.replace("p.","P.")}</td><td>${item.Huyen}</td><td><a id='idVitri${uid}'  href='' '>Vị trí</a></td>`
                    })
                    dom.byId("tableSearchMap").innerHTML = content;
                    features.map(data => {
                        let uid = data.uid;
                        $(`#idVitri${uid}`).click(() => {
                            zoomTo(uid);
                            $(".content-form-search > .fa-times-circle").trigger("click");
                        });
                    })
                    getThongKe(features[0].attributes.MaHienTrang);
                    $(".form-search-toado").css("display","block");
                    $("#tableSearchMap a").click(function () {
                        return false;
                    });
                } else {
                    $(".form-search-toado").css("display","none");
                    // alert("Không tìm thấy kết quả phù hợp");
                    viewAlter(2,"Không tìm thấy kết quả phù hợp");
                    hideLoadingGif();
                }
                $(document.body).css({
                    'cursor': 'default'
                });
            }).catch(err => {
                console.log(err);
                hideLoadingGif();
            });

            queryTask.executeForCount(query).then(function (searchResults) {
                console.log(searchResults);
            }).catch(err => {
                console.log(err);
            });
        }
        // end handling search
        //click zoom in search
        function zoomTo(uid) {
            for (var i = 0; i < searchResults.features.length; i++) {
                var uid_Search = searchResults.features[i].uid;
                if (uid == uid_Search) {
                    var geometry = searchResults.features[i].geometry;
                    var symbol = new SimpleFillSymbol({
                        color: [0, 51, 204, 1],
                        style: "none",
                        outline: { // autocasts as esri/symbols/SimpleLineSymbol
                            color: [0, 51, 204, 1],
                            width: 2
                        }
                    });
                    var polygonGraphic = new Graphic({
                        geometry: geometry,
                        symbol: symbol

                    });
                    view.graphics.removeAll();
                    view.graphics.add(polygonGraphic);

                    view.extent = geometry.extent;
                    break;
                }
            }
        }

        function zoomToXaHuyen(uid) {
            for (var i = 0; i < searchViewXaPhuong.features.length; i++) {
                var uid_Search = searchViewXaPhuong.features[i].uid;
                if (uid == uid_Search) {
                    var geometry = searchViewXaPhuong.features[i].geometry;
                    var symbol = new SimpleFillSymbol({
                        color: [0, 51, 204, 1],
                        style: "none",
                        outline: { // autocasts as esri/symbols/SimpleLineSymbol
                            color: [0, 51, 204, 1],
                            width: 2
                        }
                    });
                    var polygonGraphic = new Graphic({
                        geometry: geometry,
                        symbol: symbol

                    });
                    view.graphics.removeAll();
                    view.graphics.add(polygonGraphic);

                    view.extent = geometry.extent;
                    break;
                }
            }
        }
        //end zoom in search
        //end search map


        //role checkbox
        function roleCheckBox() {
            let lenHienTrang = $("#viewHienTrang input:checked").length ;
            let lenQuyHoach = $("#viewQuyHoach input:checked").length ;
            if (lenHienTrang > 1 && lenQuyHoach === 1) {
                $("#viewQuyHoach input").attr("disabled","disabled");
                $("#viewQuyHoach input:checked").prop("disabled", false);
            }
            if (lenQuyHoach > 1 && lenHienTrang === 1) {
                $("#viewHienTrang input").attr("disabled","disabled");
                $("#viewHienTrang input:checked").prop("disabled", false);
            }
            if(lenHienTrang > 1 && lenQuyHoach === 0) {
                $("#viewQuyHoach input").prop("disabled", false);
            }
            if (lenQuyHoach > 1 && lenHienTrang === 0) {
                $("#viewHienTrang input").prop("disabled", false);
            }
        }

        //search checkbox
        function searchMapCheckBox() {
            let queryRs;
            let lenHienTrang = $("#viewHienTrang input:checked").length ;
            let lenQuyHoach = $("#viewQuyHoach input:checked").length ;
            if (lenQuyHoach === 0 ) {
                queryRs = getInputSearchCheckBox(false);
                // neu '' tuc la ko co checkbox click khong query va tat bang find
                if (queryRs !== '') {
                    searchMapHienTrang(queryRs);
                } else {
                    $(".form-search-toado").css("display","none");
                }
            }else if (lenHienTrang === 0) {
                queryRs = getInputSearchCheckBox(true);
                // neu '' tuc la ko co checkbox click khong query va tat bang find
                if (queryRs !== '') {
                    searchMapQuyHoach(queryRs);
                } else {
                    $(".form-search-toado").css("display","none");
                }
            } else {
                queryRs = getInputSearchCheckBox(true);
                queryRs += "and (MaHienTrang = "+getInputSearchCheckBox(false)+")";
                if (queryRs !== '') {
                    searchMapQuyHoach(queryRs);
                } else {
                    $(".form-search-toado").css("display","none");
                }
            }
        }
        //test true la quy hoach, false la hien trang
        //create query add
        function getInputSearchCheckBox(test) {
            let rs = '';
            $(`#${test ? 'viewQuyHoach' : 'viewHienTrang'} input`).map((index, data) => {
                let check = $(data).is(":checked");
                if (check) {
                    let arrSplit = mucDich($(data).val()).split(":");
                    if (rs === '') {
                        rs += `'${arrSplit[0]}'`; // '' thi chi can ma
                    } else {
                        rs += test ? ` OR MaQuyHoach = '${arrSplit[0]}'` : ` OR MaHienTrang = '${arrSplit[0]}'`; //kiem tra == 'ma'
                    }
                }
            })
            return rs;
        }
        //search checkbox

        //end search check box
    }).catch(err => {
        console.log(err);
        // alert("Không có dữ liệu bản đồ");
        // viewAlter(2,"Vui lòng tải lại trang!");
        setTimeout(function () {
            window.location.reload();
        }, 800)
    });

    //end render map and handling map
})