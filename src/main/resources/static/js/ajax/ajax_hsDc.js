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
    //set quyet dinh
    setViewQuyetDinh();
    //end quyet dinh
    //set option bang gia dat
    let arrCallAjax = [callBangGiaDat(2),callBangGiaDat(3)];
    Promise.all(arrCallAjax).then(rs => {
        //set option
        let optionSelect = "";
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

        callSelectBangGiaDatPNNHsDc(); // call cho truong hop default
    }).catch(err => {
        console.log(err);
    })
    //end set option bang gia dat
}

function setViewQuyetDinh() {
    // 9 va 12 la id set cung
    callQuyetDinhHsDc().then(rs => {
        let optionSelect = "";
        rs.map(item => {
            optionSelect += `<option value=${item.id}>${item.trichYeu}</option>`;
        })
        $("#dp-drop13").html(optionSelect);
        // set truong hop default
        $("#dp-drop13").val(rs[0].id);
        $("#dp-drop13").select2().trigger('change');
        $("#dp-drop13").change(function () {
            callSelectBangGiaDatPNNHsDc();
        })
    })
}

function callQuyetDinhHsDc() {
    let url = `v1/public/quyet-dinh/find-by-nhom-quyet-dinh?id=4`;
    return ajaxCallGet(url);
}

function callSelectBangGiaDatPNNHsDc() {
    let idHuyen = $("#dp-drop15").val();
    let idBangGiaDat = $("#dp-drop14").val();
    let idQuyetDinh = $("#dp-drop13").val();
    // id > 11 la dat nong thon
    viewLoadingGif();
    if (idBangGiaDat <= 11) {
        $("#changeTextHsDc").html("Tên Đường");
        viewTableDuong = ''; //reset gia tri
        viewTableDuongData = '';
        arrAllDuongSort = [];
        callGiaDatPhiNongNghiepHsDc(idBangGiaDat, idHuyen, idQuyetDinh).then(rs => {
            arrTable = rs;
            setViewTenDuongHsDc();
            //set Data duong chu co gia trong huyen
            setTableGiaDatPhiNongNghiepHsDc(setViewTableDuongHsDc(rs), idHuyen);
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
    //run export Excel
    $("#exportExel a").unbind('click');
    $("#exportExel a").click(function () {
        exportExcel("tableExport","HeSoDieuChinh");
        return false;
    })
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
            viewLoadingGif();
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
            hideLoadingGif();
        })
        hideLoadingGif();
    }).catch(err => {
        console.log(err);
    })
}

function setTableGiaDatNongThonHsDC(rs,idHuyen) {
    let arrTD = rs.filter(data => data.loaiXa.parent!== null && data.loaiXa.parent.idDmLoaiXa == 1);
    let arrMN = rs.filter(data => data.loaiXa.parent!== null && data.loaiXa.parent.idDmLoaiXa == 2);
    let viewTable = '';
    let viewData = `<tr><td><strong style="font-family: 'Times New Roman', Times, serif">I</strong></td><td style="text-transform: uppercase; font-weight: bold">Xã Trung Du</td><td></td><td></td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
    arrTD.map((data1, index) => {
        viewData += setDataTableGiaDatNongThonHsDc(data1, index);
    })
    viewData += `<tr><td><strong style="font-family: 'Times New Roman', Times, serif">II</strong></td><td style="text-transform: uppercase; font-weight: bold">Xã Miền Núi</td><td></td><td></td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
    arrMN.map((data1, index) => {
        viewData += setDataTableGiaDatNongThonHsDc(data1, index);
    })
    viewTable =`<table class="table table-bordered" id="tableExport">
                    <tbody>
                        <tr>
                            <td colspan="14" style="background: #ededed;"><strong>${$("#dp-drop13 option:selected").text()} - ${ARR_HUYEN_TEXT[idHuyen-1]}<br>Theo Bảng giá đất ở nông thôn </strong></td>
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
    return `<tr><td>${index+1}</td><td>${data1.loaiXa.tenLoaiXa}</td>
            <td>${data1.viTri11 == 0 ? '' : formatNumber(data1.viTri11,'.','.')}</td>
            <td>${data1.viTri12 == 0 ? '' : formatNumber(data1.viTri12,'.','.')}</td>
            <td>${data1.viTri13 == 0 ? '' : formatNumber(data1.viTri13,'.','.')}</td>
            <td>${data1.viTri14 == 0 ? '' : formatNumber(data1.viTri14,'.','.')}</td>
            <td>${data1.viTri21 == 0 ? '' : formatNumber(data1.viTri21,'.','.')}</td>
            <td>${data1.viTri22 == 0 ? '' : formatNumber(data1.viTri22,'.','.')}</td>
            <td>${data1.viTri23 == 0 ? '' : formatNumber(data1.viTri23,'.','.')}</td>
            <td>${data1.viTri24 == 0 ? '' : formatNumber(data1.viTri24,'.','.')}</td>
            <td>${data1.viTri31 == 0 ? '' : formatNumber(data1.viTri31,'.','.')}</td>
            <td>${data1.viTri32 == 0 ? '' : formatNumber(data1.viTri32,'.','.')}</td>
            <td>${data1.viTri33 == 0 ? '' : formatNumber(data1.viTri33,'.','.')}</td>
            <td>${data1.viTri34 == 0 ? '' : formatNumber(data1.viTri34,'.','.')}</td>
            </tr>`;
}

function callGiaDatNongThonHcDc(idBangGiaDat, idHuyen, idQuyetDinh) {
    let url = `v1/public/gia-dat/he-so-dieu-chinh-nong-thon/filter?bang-gia-dat-id=${idBangGiaDat}&huyen-id=${idHuyen}&quyet-dinh-id=${idQuyetDinh}`;
    return ajaxCallGet(url);
}
//End gia dat nong thon

//gia dat thanh thi

function callGiaDatPhiNongNghiepHsDc(idBangGiaDat, idHuyen, idQuyetDinh) {
    // let url = `v1/public/gia-dat/gia-dat-phi-nong-nghiep/filter?bang-gia-dat=${idBangGiaDat}&huyen=${idHuyen}&quyet-dinh=${idQuyetDinh}&danh-muc-duong=0`;
    let url = `v1/public/gia-dat/he-so-dieu-chinh-do-thi/filter?bang-gia-dat-id=${idBangGiaDat}&huyen-id=${idHuyen}&quyet-dinh-id=${idQuyetDinh}`;
    return ajaxCallGet(url);
}

function setViewTenDuongHsDc() {
    callTenDuongByIdHuyenHsDc().then(rs => {
        let viewSelect = '<option value="0">--- Gõ để tìm kiếm ---</option>';
        arrAllDuong = rs;
        rs.map(data => {
            viewSelect += `<option value="${data.cap}">${data.ten}</option>`
        })
        $("#dp-drop16").html(viewSelect);
        $("#dp-drop16").unbind('change'); //reset function change
        $("#dp-drop16").select2({
            placeholder: "--- Gõ để tìm kiếm ---",
            allowClear: true
        });
        changeViewTenDuongHsDc();
    }).catch(err => {
        console.log(err);
    })
}

function changeViewTenDuongHsDc() {
    $("#dp-drop16").change(function () {
        // viewLoadingGif();
        $(".dp-table .table-wp tbody").html(viewTableDuongData); //set lai full data de find bang jquery
        let val = $("#dp-drop16").val();
        if (val != 0) {
            viewLoadingGif();
            let arrSelectDuong = arrAllDuongSort.filter(item => item.danhMucDuongHeSo.cap.startsWith(val+"."));
            let viewSelect = '';
            arrSelectDuong.map(item => {
                viewSelect += `<tr data-cap="${item.danhMucDuongHeSo.cap}">`+ $(`tr[data-cap='${item.danhMucDuongHeSo.cap}']`).html() + "</tr>";
            })
            viewSelect = `<tr data-cap="${val}">`+$(`tr[data-cap='${val}']`).html() +"</tr>" + viewSelect;
            // console.log(viewSelect);
            $(".dp-table .table-wp tbody").html(viewSelect);
            hideLoadingGif();
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

function callTenDuongByIdHuyenHsDc() {
    let url = `v1/public/all`;
    return ajaxCallGet(url);
}

function setViewTableDuongHsDc(rs) {
    let arrRoot = [];
    let arrChild = [];
    rs.map(data => {
        if (data.danhMucDuongHeSo.cap.split(".").length >= 2) {
            arrChild.push(data);
        } else {
            arrRoot.push(data);
        }
    })
    arrChildDuong = arrChild;
    arrRoot.map((data, index) => {
        viewTableDuong += `<tr data-cap=${data.danhMucDuongHeSo.cap}>
                            <td><strong style="font-family: 'Times New Roman', Times, serif">${convertToRoman(index+1)}</strong></td>
                            <td><strong>${data.danhMucDuongHeSo.ten}</strong></td>
                            <td>${data.viTri1 == 0 ? '' : data.viTri1}</td>
                            <td>${data.viTri2 == 0 ? '' : data.viTri2}</td>
                            <td>${data.viTri3 == 0 ? '' : data.viTri3}</td>
                            <td>${data.viTri4 == 0 ? '' : data.viTri4}</td>
                            <td>${data.nam}</td>
                            </tr>`;
        arrAllDuongSort.push(data);
        findChilDuongHsDc(data);
    })
    return viewTableDuong;
}

function findChilDuongHsDc(root) {
    let capRoot = root.danhMucDuongHeSo.cap;
    let arrChildCap1 = [];
    arrChildDuong.map((data, index) => {
        let test = countPoint(data.danhMucDuongHeSo.cap) - countPoint(capRoot);
        if (data.danhMucDuongHeSo.cap.startsWith(capRoot+".") && (test === 1) ) {
            arrChildCap1.push(data);
            arrChildDuong = arrChildDuong.filter(item => item.danhMucDuongHeSo.id != data.danhMucDuongHeSo.id);
        }
    })
    // sap xep thu thu cac con cung cap
    arrChildCap1.sort(function (a, b) {
        let arrA = a.danhMucDuongHeSo.cap.split(".");
        let arrB = b.danhMucDuongHeSo.cap.split(".");
        return arrA[arrA.length - 1] - arrB[arrB.length - 1]
    })
    arrChildCap1.map((data1, index1) => {
        viewTableDuong += `<tr data-cap=${data1.danhMucDuongHeSo.cap}>
                            <td><strong>${viewCap(data1.danhMucDuongHeSo.cap) === '' ? '' : index1 + 1}</strong></td>
                            <td>${checkCap(data1.danhMucDuongHeSo.cap)} ${data1.danhMucDuongHeSo.ten}</td>
                            <td>${data1.viTri1 == 0 ? '' : data1.viTri1}</td>
                            <td>${data1.viTri2 == 0 ? '' : data1.viTri2}</td>
                            <td>${data1.viTri3 == 0 ? '' : data1.viTri3}</td>
                            <td>${data1.viTri4 == 0 ? '' : data1.viTri4}</td>
                            <td>${data1.nam}</td>
                            </tr>`;
        arrAllDuongSort.push(data1);
        findChilDuongHsDc(data1);
    })
    return viewTableDuong;
}


function setTableGiaDatPhiNongNghiepHsDc(viewData, idHuyen){
    let viewTable = `<div class="tablep-cap">
                    <span><strong>${$("#dp-drop13 option:selected").text()} - ${ARR_HUYEN_TEXT[idHuyen - 1]}<br>Theo bảng giá đất ở tại đô thị, ven trục đường giao thông</strong></span>
                </div>
                <table class="table-dat table table-hover table-bordered" id="tableExport">
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
    viewTableDuongData = $(".dp-table .table-wp tbody").html();
    hideLoadingGif();
}


//end gia dat thanh thi

