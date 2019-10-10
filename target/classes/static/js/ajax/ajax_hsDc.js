let arrTable = [];
var arrChildDuong = [];
var arrAllDuong = [];
var arrAllDuongSort = []; // sap xep
var viewTableDuong = ''; // chua co gia
var viewTableDuongData = ''; //co chua gia
$(function () {
    setViewSelectHuyenHsDc();
    callBangGiaDatPNNHsDc();
})

//GENERAL

//set View select huyen
function setViewSelectHuyenHsDc() {
    // let viewSelectHuyen = `<option value='0'>--- Gõ để tìm kiếm ---</option>`;
    let viewSelectHuyen = "";
    ARR_HUYEN_TEXT.map((huyen, index) => {
        viewSelectHuyen += `<option value=${index + 1}>${huyen}</option>`;
    })
    $("#dp-drop15").html(viewSelectHuyen);
    $("#dp-drop15").val("1");
    $("#dp-drop15").select2().trigger('change');
    $("#dp-drop15").change(function () {
        callSelectBangGiaDatPNNHsDc();
    })
}

function callBangGiaDatPNNHsDc() {
    //set option bang gia dat
    let arrCallAjax = [callBangGiaDat(2),callBangGiaDat(3)];
    Promise.all(arrCallAjax).then(rs => {
        //set option
        let optionSelect = "";
        //set quyet dinh
        setViewQuyetDinh(rs);
        //end quyet dinh
        rs.map(item => {
            optionSelect += `<option value=${item[0].id}>${item[0].tenBang}</option>`;
        })
        $("#dp-drop14").html(optionSelect);
        //set chang select Bang gia dat

        // set truong hop default
        $("#dp-drop14").val(rs[0][0].id);
        $("#dp-drop14").select2().trigger('change');

        //set change select Bang gia dat;
        $("#dp-drop14").change(function () {
            callSelectBangGiaDatPNNHsDc();
        })
        //end set option

        // callSelectBangGiaDatPNN(); // call cho truong hop default
    }).catch(err => {
        console.log(err);
    })
    //end set option bang gia dat
}

function setViewQuyetDinh(arrBangGiaDat) {
    // 9 va 12 la id set cung
    let arrCall = [callQuyetDinhPnnNt(9, 0),callQuyetDinhPnnNt(12, 1)];
    Promise.all(arrCall).then(rs => {
        let arrCallFilter = [];
        let optionSelect = "";
        rs.map(item => {
            item.map(item1 => {
                arrCallFilter = arrCallFilter.filter(item2 => item2.id !== item1.id);
                arrCallFilter.push(item1);
            })
        })
        arrCallFilter.map(item => {
            optionSelect += `<option value=${item.id}>${item.trichYeu}</option>`;
        })
        $("#dp-drop13").html(optionSelect);
        // set truong hop default
        $("#dp-drop13").val(arrCallFilter[0].id);
        $("#dp-drop13").select2().trigger('change');
        callSelectBangGiaDatPNNHsDc();//set truong hop default khi trang moi view
    })
}

function callQuyetDinhPnnNt(id, check) {
    //check 0 la phi nong nghiep, 1 la nong thon
    let url = '';
    if (check === 0) {
        url = `v1/public/quyet-dinh/find-by-pnn?phi-nong-nghiep=${id}`;
    } else {
        url = `v1/public/quyet-dinh/find-by-tnt?nong-thon=${id}`;
    }
    return ajaxCallGet(url);
}

function callSelectBangGiaDatPNNHsDc() {
    let idHuyen = $("#dp-drop15").val();
    let idBangGiaDat = $("#dp-drop14").val();
    let idQuyetDinh = $("#dp-drop13").val();
    // id > 11 la dat nong thon
    if (idBangGiaDat <= 11) {
        $("#changeTextHsDc").html("Tên Đường");
        viewTableDuong = ''; //reset gia tri
        viewTableDuongData = '';
        arrAllDuongSort = [];
        callGiaDatPhiNongNghiepHsDc(idBangGiaDat, idHuyen, idQuyetDinh).then(rs => {
            arrTable = rs;
            setViewTenDuongHsDc(idHuyen);

        }).catch(err => {
            console.log(err);
        })
    } else {
        $("#changeTextHsDc").html("Xã/ Phường");
        callGiaDatNongThonHcDc(idBangGiaDat, idHuyen, idQuyetDinh).then(rs => {
            arrTable = rs;
            setViewSelectXaHsDc(idHuyen);
            $(".dp-table .table-wp").html(setTableGiaDatNongThonHsDC(rs, idHuyen));
        }).catch(err => {
            console.log(err);
        })
    }
    resetSelectXaHsDc();
}

function resetSelectXaHsDc() {
    $("#dp-drop16").val("0");
    $("#dp-drop16").select2().trigger('change');
}
//END_GENERAL

//Gia Dat Nong Thon
function setViewSelectXaHsDc(idHuyen) {
    callXa(idHuyen).then(rs => {
        arrXa = rs;
        let viewSelectXa = `<option value='0'>--- Gõ để tìm kiếm ---</option>`;
        rs.map(xa => {
            viewSelectXa += `<option value=${xa.idXa}>${xa.tenXa}</option>`
        })
        $("#dp-drop16").html(viewSelectXa);
        $("#dp-drop16").unbind('change'); //reset function change
        $("#dp-drop16").select2({
            placeholder: "--- Gõ để tìm kiếm ---",
            allowClear: true
        });
        $("#dp-drop16").change(function () {
            let idXa = $("#dp-drop16").val();
            if (idXa != 0) {
                let xa = arrXa.filter(data => data.idXa == idXa);
                let idLoaiXa = xa[0].loaiXas[0] == null ? 0 : xa[0].loaiXas[0].idDmLoaiXa; //1 xa co mot loai xa
                let viewTable = '';
                let arrFindXa = '';
                if (idLoaiXa != 0) {
                    arrFindXa = arrTable.filter(item => item.loaiXa.idDmLoaiXa == idLoaiXa);
                } else {
                    arrFindXa = arrTable;
                }
                viewTable = setTableGiaDatNongThonHsDC(arrFindXa,idHuyen);
                $(".dp-table .table-wp").html(viewTable);
            }
        })
    }).catch(err => {
        console.log(err);
    })
}

function setTableGiaDatNongThonHsDC(rs,idHuyen) {
    let arrTD = rs.filter(data => data.loaiXa.parent.idDmLoaiXa == 1);
    let arrMN = rs.filter(data => data.loaiXa.parent.idDmLoaiXa == 2);
    let viewTable = '';
    let viewData = `<tr><td><strong>I</strong></td><td style="text-transform: uppercase; font-weight: bold">Xã Trung Du</td><td></td><td></td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
    arrTD.map((data1, index) => {
        viewData += setDataTableGiaDatNongThonHsDc(data1, index);
    })
    viewData += `<tr><td><strong>II</strong></td><td style="text-transform: uppercase; font-weight: bold">Xã Miền Núi</td><td></td><td></td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
    arrMN.map((data1, index) => {
        viewData += setDataTableGiaDatNongThonHsDc(data1, index);
    })
    viewTable =`<table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td colspan="14" style="background: #ededed;"><strong>${$("#dp-drop13").text()} - ${ARR_HUYEN_TEXT[idHuyen-1]}<br>Theo Bảng giá đất ở nông thôn </strong></td>
                        </tr>
                        <tr>
                            <th width="5%" rowspan="2">STT</th>
                            <th width="23%" rowspan="2">Loại xã</th>
                            <th width="24%" colspan="4">Khu vực 1</th>
                            <th width="24%" colspan="4">Khu vực 2</th>
                            <th width="24%" colspan="4">Khu vực 3</th>
                        </tr>
                        <tr>
                            <th width="6%">Vị trí 1</th>
                            <th width="6%">Vị trí 2</th>
                            <th width="6%">Vị trí 3</th>
                            <th width="6%">Vị trí 4</th>
                            <th width="6%">Vị trí 1</th>
                            <th width="6%">Vị trí 2</th>
                            <th width="6%">Vị trí 3</th>
                            <th width="6%">Vị trí 4</th>
                            <th width="6%">Vị trí 1</th>
                            <th width="6%">Vị trí 2</th>
                            <th width="6%">Vị trí 3</th>
                            <th width="6%">Vị trí 4</th>
                        </tr>
                        ${viewData}
                    </tbody>
                </table>`
    return viewTable;
}

function setDataTableGiaDatNongThonHsDc(data1, index) {
    return `<tr><td>${index+1}</td><td>${data1.loaiXa.tenLoaiXa}</td><td>${formatNumber(data1.viTri11,'.','.')}</td><td>${formatNumber(data1.viTri12,'.','.')}</td>
            <td>${formatNumber(data1.viTri13,'.','.')}</td><td>${formatNumber(data1.viTri14,'.','.')}</td><td>${formatNumber(data1.viTri21,'.','.')}</td><td>${formatNumber(data1.viTri22,'.','.')}</td><td>${formatNumber(data1.viTri23,'.','.')}</td>
            <td>${formatNumber(data1.viTri24,'.','.')}</td><td>${formatNumber(data1.viTri31,'.','.')}</td><td>${formatNumber(data1.viTri32,'.','.')}</td><td>${formatNumber(data1.viTri33,'.','.')}</td><td>${formatNumber(data1.viTri34,'.','.')}</td>
            </tr>`;
}

function callGiaDatNongThonHcDc(idBangGiaDat, idHuyen, idQuyetDinh) {
    let url = `v1/public/gia-dat/gia-dat-tai-nong-thon/filter?bang-gia-dat=${idBangGiaDat}&huyen=${idHuyen}&quyet-dinh=${idQuyetDinh}&xa=0`;
    return ajaxCallGet(url);
}
//End gia dat nong thon

//gia dat thanh thi

function callGiaDatPhiNongNghiepHsDc(idBangGiaDat, idHuyen, idQuyetDinh) {
    // let url = `v1/public/gia-dat/gia-dat-phi-nong-nghiep/filter?bang-gia-dat=${idBangGiaDat}&huyen=${idHuyen}&quyet-dinh=${idQuyetDinh}&danh-muc-duong=0`;
    let url = `v1/public/gia-dat/gia-dat-phi-nong-nghiep/find-by-huyen-and-bang-gia-dat?bang-gia-dat-id=${idBangGiaDat}&huyen-id=${idHuyen}`;
    return ajaxCallGet(url);
}

function setViewTenDuongHsDc(idHuyen) {
    callTenDuongByIdHuyenHsDc(idHuyen).then(rs => {
        let viewSelect = '<option value="0">--- Gõ để tìm kiếm ---</option>';
        arrAllDuong = rs;
        rs.map(data => {
            viewSelect += `<option value="${data.cap}">${data.ten}</option>`
        })
        //set Data duong chu co gia trong huyen
        setTableGiaDatPhiNongNghiepHsDc(setViewTableDuongHsDc(rs), idHuyen);
        $("#dp-drop16").html(viewSelect);
        $("#dp-drop16").unbind('change'); //reset function change
        $("#dp-drop16").select2({
            placeholder: "--- Gõ để tìm kiếm ---",
            allowClear: true
        });

        changeViewTenDuongHsDc(idHuyen);
    }).catch(err => {
        console.log(err);
    })
}

function changeViewTenDuongHsDc(idHuyen) {
    $("#dp-drop16").change(function () {
        $(".dp-table .table-wp tbody").html(viewTableDuongData); //set lai full data de find bang jquery
        let val = $("#dp-drop16").val();
        if (val != 0) {
            let arrSelectDuong = arrAllDuongSort.filter(item => item.cap.startsWith(val+"."));
            let viewSelect = '';
            arrSelectDuong.map(item => {
                viewSelect += `<tr data-cap="${item.cap}">`+ $(`tr[data-cap='${item.cap}']`).html() + "</tr>";
            })
            viewSelect = `<tr data-cap="${val}">`+$(`tr[data-cap='${val}']`).html() +"</tr>" + viewSelect;
            // console.log(viewSelect);
            $(".dp-table .table-wp tbody").html(viewSelect);
        } else {
            // $(".block-table-price2").html(setTableGiaDatPhiNongNghiep(arr,idHuyen));
        }
    })
}

function countPoint(text) {
    let count = 0;
    for(let i = 0; i < text.length; i++) {
        if (text.charAt(i) === '.') {
            count++;
        }
    }
    return count;
}

function callTenDuongByIdHuyenHsDc(idHuyen) {
    let url = `v1/public/danh-muc-duong/find-by-huyen?huyen-id=${idHuyen}`;
    return ajaxCallGet(url);
}

function setViewTableDuongHsDc(rs) {
    let arrRoot = [];
    let arrChild = [];
    rs.map(data => {
        if (data.cap.split(".").length >= 2) {
            arrChild.push(data);
        } else {
            arrRoot.push(data);
        }
    })
    arrChildDuong = arrChild;
    arrRoot.map(data => {
        viewTableDuong += `<tr data-cap=${data.cap}>
                            <td><strong>${convertToRoman(data.cap)}</strong></td>
                            <td><strong>${data.ten}</strong></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>`;
        arrAllDuongSort.push(data);
        findChilDuongHsDc(data);
    })
    return viewTableDuong;
}

function findChilDuongHsDc(root) {
    let capRoot = root.cap;
    let arrChildCap1 = [];
    arrChildDuong.map((data, index) => {
        let test = countPoint(data.cap) - countPoint(capRoot);
        if (data.cap.startsWith(capRoot+".") && (test === 1) ) {
            arrChildCap1.push(data);
            arrChildDuong = arrChildDuong.filter(item => item.id != data.id);
        }
    })
    // sap xep thu thu cac con cung cap
    arrChildCap1.sort(function (a, b) {
        let arrA = a.cap.split(".");
        let arrB = b.cap.split(".");
        return arrA[arrA.length - 1] - arrB[arrB.length - 1]
    })
    arrChildCap1.map(data1 => {
        viewTableDuong += `<tr data-cap=${data1.cap}>
                            <td>${data1.cap}</td>
                            <td>${checkCap(data1.cap)} ${data1.ten}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>`;
        arrAllDuongSort.push(data1);
        findChilDuongHsDc(data1);
    })
    return viewTableDuong;
}


function setTableGiaDatPhiNongNghiepHsDc(viewData, idHuyen){
    let viewTable = `<div class="tablep-cap">
                    <span><strong>${$("#dp-drop13").text()} - ${ARR_HUYEN_TEXT[idHuyen - 1]}<br>Theo bảng giá đất ở tại đô thị, ven trục đường giao thông</strong></span>
                </div>
                <table class="table-dat table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Cấp</th>
                            <th style="width: 360px !important;">Tên đường, đoạn đường</th>
                            <th>Vị trí 1</th>
                            <th>Vị trí 2</th>
                            <th>Vị trí 3</th>
                            <th>Vị trí 4</th>
                            <th style="width: 150px !important;">Năm</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${viewData}
                    </tbody>
                </table>`;
    $(".dp-table .table-wp").html(viewTable);

    //setDataTable
    setDataTableGiaDatPhiNongNghiepHsDc();
    viewTableDuongData = $(".dp-table .table-wp tbody").html();
}

function setDataTableGiaDatPhiNongNghiepHsDc() {
    arrTable.map(data => {
        let item = $(`tr[data-cap='${data.danhMucDuong.cap}']`);
        item.children("td:nth-child(3)").html(formatNumber(data.viTri1,'.','.'));
        item.children("td:nth-child(4)").html(formatNumber(data.viTri2,'.','.'));
        item.children("td:nth-child(5)").html(formatNumber(data.viTri3,'.','.'));
        item.children("td:nth-child(6)").html(formatNumber(data.viTri4,'.','.'));
        item.children("td:nth-child(7)").html(data.quyetDinh != null ? data.quyetDinh.namDau +" - "+data.quyetDinh.namCuoi : "-" );
        item.children("td:nth-child(8)").html(`<span><span data-id=${data.id}><i class="fas fa-plus" aria-hidden="true"></i></span></span>`)
    })
}

//end gia dat thanh thi

