var arrXa = [];
var arrTable = [];
var arrChildDuong = [];
var arrAllDuong = []; // chua sap xep
var arrAllDuongSort = []; // sap xep
var viewTableDuong = ''; // chua co gia
var viewTableDuongData = ''; //co chua gia

$(function () {
    setViewSelectHuyen(); //set truong hop default
    // callBangGiaDatPNN();
    // changeSelectBangGiaDatPNN();
})


//GENERAL

function callGiaiDoan(idHuyen, bangGiaDatId) {
    if(bangGiaDatId > 11) {
        return ajaxCallGet(`v1/public/gia-dat/gia-dat-tai-nong-thon/find-all-giai-doan?huyen-id=${idHuyen}&bang-gia-dat-id=${bangGiaDatId}`);
    }
    return ajaxCallGet(`v1/public/gia-dat/gia-dat-phi-nong-nghiep/find-all-giai-doan?huyen-id=${idHuyen}&bang-gia-dat-id=${bangGiaDatId}`);
}

function setGiaiDoan(idHuyen, bangGiaDatId) {
    callGiaiDoan(idHuyen, bangGiaDatId).then(listRs => {
        let viewHtml = '';
        listRs.map(data => {
            viewHtml += `<option value="${data.namDau}-${data.namCuoi}">${data.namDau}-${data.namCuoi}</option>`;
        })
        $("#dp-drop9").html(viewHtml);
        $("#dp-drop9").val(listRs[0].namDau+"-"+listRs[0].namCuoi);
        $("#dp-drop9").select2().trigger('change');

        callSelectBangGiaDatPNN();
        $("#dp-drop9").change(function () {
            callSelectBangGiaDatPNN();
        })
    }).catch(err => {
        console.log(err);
    })
}

function callBangGiaDatPNN() {
    //set option bang gia dat
    let arrCallAjax = [callBangGiaDat(2),callBangGiaDat(3)];
    Promise.all(arrCallAjax).then(rs => {
        //set option
        // let optionSelect = "<option value='0'>--- Gõ để tìm kiếm ---</option>";
        let optionSelect = "";
        rs.map(item => {
            item.map(item1 => {
                optionSelect += `<option value=${item1.id}>${item1.tenBang}</option>`;
            })
        })
        $("#dp-drop8").html(optionSelect);
        //set chang select Bang gia dat

        // set truong hop default
        $("#dp-drop8").val(rs[0][0].id);
        $("#dp-drop8").select2().trigger('change');

        //set change select Bang gia dat;
        $("#dp-drop8").change(function () {
            // callSelectBangGiaDatPNN();
            setGiaiDoan($("#dp-drop10").val(),$("#dp-drop8").val());
        })
        setGiaiDoan($("#dp-drop10").val(),$("#dp-drop8").val());
        //end set option

        // callSelectBangGiaDatPNN(); // call cho truong hop default
    }).catch(err => {
        console.log(err);
    })
    //end set option bang gia dat
}

//set View select huyen
function setViewSelectHuyen() {
    // let viewSelectHuyen = `<option value='0'>--- Gõ để tìm kiếm ---</option>`;
    callHuyen().then(data => {
        let viewSelectHuyen = "";
        data.map((huyen, index) => {
            viewSelectHuyen += `<option value=${huyen.idHuyen}>${huyen.tenHuyen}</option>`;
        })
        $("#dp-drop10").html(viewSelectHuyen);
        $("#dp-drop10").val("1");
        $("#dp-drop10").select2().trigger('change');
        // setViewSelectXa(1);
        $("#dp-drop10").change(function () {
            // setViewSelectXa($("#dp-drop10").val());
            // callSelectBangGiaDatPNN();
            setGiaiDoan($("#dp-drop10").val(),$("#dp-drop8").val());
        })
        callBangGiaDatPNN();
    }).catch(err => {
        console.log(err);
    })
}

//set view select xa
function setViewSelectXa(idHuyen) {
    callXa(idHuyen).then(rs => {
        arrXa = rs;
        let viewSelectXa = `<option value='0'>--- Tất Cả ---</option>`;
        rs.map(xa => {
            viewSelectXa += `<option value=${xa.idXa}>${xa.tenXa}</option>`
        })
        $("#dp-drop11").html(viewSelectXa);
        $("#dp-drop11").unbind('change'); //reset function change
        $("#dp-drop11").select2({
            placeholder: "--- Gõ để tìm kiếm ---",
            allowClear: true
        });
        changeViewLoaiXa(arrTable, idHuyen); //set default full arrTable
        $("#dp-drop11").change(function () {
            viewLoadingGif();
            $("#dp-drop12").val("0");
            $("#dp-drop12").select2().trigger('change');
            let idXa = $("#dp-drop11").val();
            if (idXa != 0) {
                let xa = arrXa.filter(data => data.idXa == idXa);
                let idLoaiXa = xa[0].loaiXa == null ? 0 : xa[0].loaiXa.idDmLoaiXa; //1 xa co mot loai xa
                let viewTable = '';
                let arrFindXa = '';
                if (idLoaiXa != 0) {
                    arrFindXa = arrTable.filter(item => item.loaiXa.idDmLoaiXa == idLoaiXa);
                } else {
                    arrFindXa = arrTable;
                }
                viewTable = setTableGiaDatNongThon(arrFindXa,idHuyen);
                $(".block-table-price2").html(viewTable);
                changeViewLoaiXa(arrFindXa, idHuyen);
            } else {
                $(".block-table-price2").html(setTableGiaDatNongThon(arrTable,idHuyen));
                changeViewLoaiXa(arrTable, idHuyen);
            }
            clickChiTietDatPNN();
        })
    }).catch(err => {
        console.log(err);
    })
}

function callSelectBangGiaDatPNN() {
    let idHuyen = $("#dp-drop10").val();
    let id = $("#dp-drop8").val();
    let giaiDoan = $("#dp-drop9").val();
    // id > 11 la dat nong thon
    viewLoadingGif();
    if (id <= 11) {
        hidenViewXa();
        viewTableDuong = ''; //reset gia tri
        viewTableDuongData = '';
        arrAllDuongSort = [];
        callGiaDatPhiNongNghiep(id, idHuyen, giaiDoan).then(rs => {
            arrTable = rs;
            setViewTenDuong(idHuyen, giaiDoan);
            // $(".block-table-price2").html(setTableGiaDatPhiNongNghiep(rs, idHuyen));
            //set default khi vao trang phi nong nghiep
        }).catch(err => {
            console.log(err);
        })
    } else {
        viewSelectXa();
        callGiaDatNongThon(id, idHuyen).then(rs => {
            arrTable = rs.filter(item => {
                return item.namDau+"-"+item.namCuoi === giaiDoan;
            });
            setViewSelectXa(idHuyen);
            setViewLoaiXa();
            $(".block-table-price2").html(setTableGiaDatNongThon(arrTable, idHuyen));
            clickChiTietDatPNN();
            // arrTable = rs;
        }).catch(err => {
            console.log(err);
        })
    }
    //run export Excel
    $("#exportExel a").unbind("click");
    $("#exportExel a").click(function () {
        exportExcel("tableExport","BangGiaDatPhiNongNghiep");
        return false;
    })
    resetSelectXa();
}

function resetSelectView() {
    $("#dp-drop8").select2({
        placeholder: "--- Gõ để tìm kiếm ---",
        allowClear: true
    });
    $("#dp-drop9").select2({
        placeholder: "--- Gõ để tìm kiếm ---",
        allowClear: true
    });

    $("#dp-drop10").select2({
        placeholder: "--- Gõ để tìm kiếm ---",
        allowClear: true
    });
    $("#dp-drop11").select2({
        placeholder: "--- Gõ để tìm kiếm ---",
        allowClear: true
    });
    $("#dp-drop12").select2({
        placeholder: "--- Gõ để tìm kiếm ---",
        allowClear: true
    });
}

function hidenViewXa() {
    $("#dp-drop11").parents('.dpfc-item').css("display","none");
    $(".dpfc-item.dpcf-select").removeClass('fix-width-select');
    $("#nameSelectDrop12").html("Tên Đường");
    resetSelectView();
}

function viewSelectXa() {
    $("#dp-drop11").parents('.dpfc-item').css("display","flex");
    $(".dpfc-item.dpcf-select").addClass('fix-width-select');
    $("#nameSelectDrop12").html("Loại Xã");
    resetSelectView();
}

//END GENERAL

//Gia Dat Nong Thon

function callGiaDatNongThon(id,idHuyen) {
    let url = `v1/public/gia-dat/gia-dat-tai-nong-thon/find-by-huyen-and-bang-gia-dat?bang-gia-dat-id=${id}&huyen-id=${idHuyen}`;
    return ajaxCallGet(url);
}

function callViewLoaiXa() {
    let url = `v1/public/dm-loai-xa/all`;
    return ajaxCallGet(url);
}

//set view loai xa
function setViewLoaiXa() {
    callViewLoaiXa().then(rs => {
        let viewLoaiXa = "<option value='0'>--- Tất Cả ---</option>";
        let arrRoot = rs.filter(item => item.parent === null);
        let arrChild = rs.filter(item => item.parent !== null);
        arrRoot.map(data => {
            viewLoaiXa += `<optgroup label='${data.tenLoaiXa}'><option value='${data.idDmLoaiXa}'>${data.tenLoaiXa}</option>`;
            arrChild.map(item => {
                if(item.parent.idDmLoaiXa === data.idDmLoaiXa) {
                    viewLoaiXa += `<option value=${item.idDmLoaiXa}>${item.tenLoaiXa}</option>`
                }
            })
            viewLoaiXa += "</optgroup>"
        })
        $("#dp-drop12").unbind('change'); //reset function change
        $("#dp-drop12").select2({
            placeholder: "--- Gõ để tìm kiếm ---",
            allowClear: true
        });

        $("#dp-drop12").html(viewLoaiXa);
    }).catch(err => {
        console.log(err);
    })
}

//change view loai xa
function changeViewLoaiXa(arrFindXa, idHuyen) {
    $("#dp-drop12").change(function () {
        let val = $("#dp-drop12").val();
        if (val != 0) {
            let valXa = $("#dp-drop11").val();
            let xa = arrXa.filter(data1 => data1.idXa == valXa);
            viewLoadingGif();
            let arrRs = [];
            if (valXa != 0 && xa[0].loaiXa != null) {
                arrRs = arrFindXa.filter(data => {
                    if (data.loaiXa.parent != null) {
                        return  ((data.loaiXa.idDmLoaiXa == val && xa[0].loaiXa.idDmLoaiXa == val)|| (data.loaiXa.parent.idDmLoaiXa == val && xa[0].loaiXa.parent.idDmLoaiXa == val));
                    } else {
                        return data.loaiXa.idDmLoaiXa == val && xa[0].loaiXa.idDmLoaiXa == val;
                    }
                });
            } else {
                arrRs = arrFindXa.filter(data => {
                    if (data.loaiXa.parent != null) {
                        return  (data.loaiXa.idDmLoaiXa == val || data.loaiXa.parent.idDmLoaiXa == val);
                    } else {
                        return data.loaiXa.idDmLoaiXa == val;
                    }
                });
            }
            $(".block-table-price2").html(setTableGiaDatNongThon(arrRs,idHuyen));
            clickChiTietDatPNN();
        } else {
            viewLoadingGif();
            let idXa = $("#dp-drop11").val();
            if (idXa != 0) {
                let xa = arrXa.filter(data => data.idXa == idXa);
                let idLoaiXa = xa[0].loaiXa == null ? 0 : xa[0].loaiXa.idDmLoaiXa; //1 xa co mot loai xa
                let viewTable = '';
                let arrFindXa = '';
                if (idLoaiXa != 0) {
                    arrFindXa = arrTable.filter(item => item.loaiXa.idDmLoaiXa == idLoaiXa);
                } else {
                    arrFindXa = arrTable;
                }
                viewTable = setTableGiaDatNongThon(arrFindXa,idHuyen);
                $(".block-table-price2").html(viewTable);
                changeViewLoaiXa(arrFindXa, idHuyen);
            } else {
                $(".block-table-price2").html(setTableGiaDatNongThon(arrTable,idHuyen));
                changeViewLoaiXa(arrTable, idHuyen);
            }
            clickChiTietDatPNN();
        }
    })
}
//end change view loai xa

//set table GiaDatNongThon
function setTableGiaDatNongThon(rs,idHuyen) {
   let arrTD = rs.filter(data => {
       if (data.loaiXa.parent !== null) {
           return data.loaiXa.parent.idDmLoaiXa == 1;
       }
   });
   let arrMN = rs.filter(data => {
       if (data.loaiXa.parent !== null) {
           return data.loaiXa.parent.idDmLoaiXa == 2;
       }
   });
   let viewTable = '';
   // let viewData = `<tr><td><strong style="font-family: 'Times New Roman', Times, serif">I</strong></td><td style="text-transform: uppercase; font-weight: bold">Xã Trung Du</td><td></td><td></td>
   //                  <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
   // arrTD.map((data1, index) => {
   //     viewData += setDataTableGiaDatNongThon(data1, index);
   // })
   //  viewData += `<tr><td><strong style="font-family: 'Times New Roman', Times, serif">II</strong></td><td style="text-transform: uppercase; font-weight: bold">Xã Miền Núi</td><td></td><td></td>
   //                  <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
   //  arrMN.map((data1, index) => {
   //      viewData += setDataTableGiaDatNongThon(data1, index);
   //  })
    let viewData = '';
    if(arrTD.length > 0) {
        viewData = `<tr><td><strong style="font-family: 'Times New Roman', Times, serif">I</strong></td><td style="text-transform: uppercase; font-weight: bold">Xã Trung Du</td><td></td><td></td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
        arrTD.map((data1, index) => {
            viewData += setDataTableGiaDatNongThon(data1, index);
        })
    }
    if(arrMN.length > 0) {
        viewData += `<tr><td><strong style="font-family: 'Times New Roman', Times, serif">II</strong></td><td style="text-transform: uppercase; font-weight: bold">Xã Miền Núi</td><td></td><td></td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
        arrMN.map((data1, index) => {
            viewData += setDataTableGiaDatNongThon(data1, index);
        })
    }
    viewTable =`<div class="tablep-cap">
                    <span>Bảng giá đất giai đoạn ${$("#dp-drop9").val()} - ${ARR_HUYEN_TEXT[idHuyen-1]}<br>Theo ${$('#dp-drop8 option:selected').text()}</span>
                </div>
                <table class="table-dat table table-hover table-bordered" id="tableExport">
                    <thead>
                        <tr>
                            <th rowspan="3">STT</th>
                            <th rowspan="3">Loại xã</th>
                        </tr>
                        <tr>
                            <th colspan="4">Khu vực 1</th>
                            <th colspan="4">Khu vực 2</th>
                            <th colspan="4">Khu vực 3</th>
                            <th rowspan="3">Chi tiết</th>
                        </tr>
                        <tr>
                            <th>Vị trí 1</th>
                            <th>Vị trí 2</th>
                            <th>Vị trí 3</th>
                            <th>Vị trí 4</th>
                            <th>Vị trí 1</th>
                            <th>Vị trí 2</th>
                            <th>Vị trí 3</th>
                            <th>Vị trí 4</th>
                            <th>Vị trí 1</th>
                            <th>Vị trí 2</th>
                            <th>Vị trí 3</th>
                            <th>Vị trí 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${viewData}
                    </tbody>
                </table>`;
    hideLoadingGif();
    return viewTable;
}

function clickChiTietDatPNN() {
    $(".table-dat tbody tr td span>span").click(function () {
        // console.log(arrTable);
        let idGiaDat = $(this).attr("data-id");
        for (let i = 0 ; i < arrTable.length ; i++) {
            if(arrTable[i].id == idGiaDat) {
                let viewQuyetDinh = getViewQuyetDinh(arrTable[i].quyetDinh);
                $(".fa-pr-bt .pr-bt-right .pr-bottom").html(viewQuyetDinh);
                break;
            }
        }
        $("#block-price-bottom").fadeIn(1000);
    })
}

function setDataTableGiaDatNongThon(data1, index) {
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
            <td><span><span data-id=${data1.id}><i class="fas fa-plus" aria-hidden="true"></i></span></span></td>
            </tr>`;
}

function resetSelectXa() {
    $("#dp-drop11").val("0");
    $("#dp-drop11").select2().trigger('change');
    $("#dp-drop12").val("0");
    $("#dp-drop12").select2().trigger('change');
}

//End gia dat nong thon

//Gia dat thanh thi
function callGiaDatPhiNongNghiep(id, idHuyen, giaiDoan) {
    let url = `v1/public/gia-dat/gia-dat-phi-nong-nghiep/find-by-huyen-and-bang-gia-dat-and-giai-doan?bang-gia-dat-id=${id}&huyen-id=${idHuyen}&giai-doan=${giaiDoan}`;
    return ajaxCallGet(url);
}

function callTenDuongByIdHuyen(idHuyen, giaiDoan) {
    let url = `v1/public/danh-muc-duong/find-by-huyen-and-giai-doan?huyen-id=${idHuyen}&giai-doan=${giaiDoan}`;
    return ajaxCallGet(url);
}

function setViewTenDuong(idHuyen, giaiDoan) {
    callTenDuongByIdHuyen(idHuyen, giaiDoan).then(rs => {
        let viewSelect = '<option value="0">--- Tất Cả ---</option>';
        arrAllDuong = rs;
        rs.map(data => {
            viewSelect += `<option value="${data.cap}">${data.ten}</option>`
        })
        //set Data duong chu co gia trong huyen
        setTableGiaDatPhiNongNghiep(setViewTableDuong(rs), idHuyen);
        $("#dp-drop12").html(viewSelect);
        $("#dp-drop12").unbind('change'); //reset function change
        $("#dp-drop12").select2({
            placeholder: "--- Gõ để tìm kiếm ---",
            allowClear: true
        });

        changeViewTenDuong(idHuyen);
    }).catch(err => {
        console.log(err);
    })
}

function changeViewTenDuong(idHuyen) {
    $("#dp-drop12").change(function () {
        $(".block-table-price2 tbody").html(viewTableDuongData); //set lai full data de find bang jquery
        let val = $("#dp-drop12").val();
        if (val != 0) {
            viewLoadingGif();
            let arrSelectDuong = arrAllDuongSort.filter(item => item.cap.startsWith(val+"."));
            let viewSelect = '';
            arrSelectDuong.map(item => {
                viewSelect += `<tr data-cap="${item.cap}">`+ $(`tr[data-cap='${item.cap}']`).html() + "</tr>";
            })
            viewSelect = `<tr data-cap="${val}">`+$(`tr[data-cap='${val}']`).html() +"</tr>" + viewSelect;
            // console.log(viewSelect);
            $(".block-table-price2 tbody").html(viewSelect);
            hideLoadingGif();
            clickChiTietDatPNN();
        } else {
            // $(".block-table-price2").html(setTableGiaDatPhiNongNghiep(arr,idHuyen));
        }
    })
}

function setViewTableDuong(rs) {
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
    arrRoot.map((data, index) => {
        viewTableDuong += `<tr data-cap=${data.cap}>
                            <td><strong style="font-family: 'Times New Roman', Times, serif">${convertToRoman(index + 1)}</strong></td>
                            <td><strong>${data.ten}</strong></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>`;
        arrAllDuongSort.push(data);
        findChilDuong(data);
    })
    return viewTableDuong;
}

function findChilDuong(root) {
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
    arrChildCap1.map((data1, index1) => {
        viewTableDuong += `<tr data-cap=${data1.cap}>
                            <td><strong>${viewCap(data1.cap) === '' ? '' : index1 + 1}</strong></td>
                            <td>${checkCap(data1.cap)} ${data1.ten}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>`;
        arrAllDuongSort.push(data1);
        findChilDuong(data1);
    })
    return viewTableDuong;
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

function setTableGiaDatPhiNongNghiep(viewData, idHuyen){
    let viewTable = `<div class="tablep-cap">
                    <span>Bảng giá đất giai đoạn ${$("#dp-drop9").val()} - ${ARR_HUYEN_TEXT[idHuyen - 1]}<br>Theo ${$('#dp-drop8 option:selected').text()}</span>
                </div>
                <table class="table-dat table table-hover table-bordered table-dat1" id="tableExport">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th style="width: 360px !important;">Tên đường, đoạn đường</th>
                            <th>Vị trí 1</th>
                            <th>Vị trí 2</th>
                            <th>Vị trí 3</th>
                            <th>Vị trí 4</th>
                            <th style="width: 150px !important;">Giai đoạn</th>
                            <th style="width: 130px !important;">Quyết định</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${viewData}
                    </tbody>
                </table>`;
    $(".block-table-price2").html(viewTable);

    //setDataTable
    setDataTableGiaDatPhiNongNghiepQuyetDinh();
    viewTableDuongData = $(".block-table-price2 tbody").html();
    hideLoadingGif();
}

function callAllGiaiDoanQuyetDinh(huyenId, bangGiaDatId, giaiDoan) {
    return ajaxCallGet(`v1/public/gia-dat/gia-dat-phi-nong-nghiep/find-all-quyet-dinh?huyen-id=${huyenId}&bang-id=${bangGiaDatId}&giai-doan=${giaiDoan}`);
}

function setDataTableGiaDatPhiNongNghiepQuyetDinh() {
    callAllGiaiDoanQuyetDinh($("#dp-drop10").val(), $("#dp-drop8").val(), $("#dp-drop9").val()).then(list => {
        list.sort((a,b) => a.ngayBanHanh.localeCompare(b.ngayBanHanh));
        if(list.length <= 1) {
            setDataTableGiaDatPhiNongNghiep(arrTable);
        } else {
            let arrDataQuyetDinh = [];
            list.map(item => {
                let quyetDinhCheck = item.id;
                arrDataQuyetDinh.push(arrTable.filter(it => it.quyetDinh.id === quyetDinhCheck));
            })
            setDataTableGiaDatPhiNongNghiep(arrDataQuyetDinh[0]);
            arrDataQuyetDinh.map((data,index) => {
                if(index !== 0) setDataTableGiaDatPhiNongNghiepDieuChinh(arrDataQuyetDinh[index], index);
            })
            clickChiTietDatPNN();
        }
    }).catch(err => {
        console.log(err);
    })
}

function setDataTableGiaDatPhiNongNghiepDieuChinh(arrTableData,index) {
    arrTableData.map(data => {
        let item = $(`tr[data-cap='${data.danhMucDuong.cap}']`);
        let quyetDinhView = item.children("td:nth-child(8)").text();
        if(quyetDinhView.length > 0) {
            item.addClass("text-line-through");
            item.after(`<tr data-cap="${data.danhMucDuong.cap}" data-quyetdinh=${index}>${item.html()}</tr>`);
            item = $(`tr[data-cap='${data.danhMucDuong.cap}'][data-quyetdinh='${index}']`);
            $(`tr[data-quyetdinh='${index}']`).removeClass("text-line-through");
        }
        item.children("td:nth-child(3)").html(data.viTri1 == 0 ? '': formatNumber(data.viTri1,'.','.'));
        item.children("td:nth-child(4)").html(data.viTri2 == 0 ? '': formatNumber(data.viTri2,'.','.'));
        item.children("td:nth-child(5)").html(data.viTri3 == 0 ? '': formatNumber(data.viTri3,'.','.'));
        item.children("td:nth-child(6)").html(data.viTri4 == 0 ? '': formatNumber(data.viTri4,'.','.'));
        item.children("td:nth-child(7)").html(data.namDau != null && data.namCuoi != null ? data.namDau +" - "+data.namCuoi : "" );
        item.children("td:nth-child(8)").html(`<span><span data-id=${data.id}>${data.quyetDinh.soQuyetDinh}</span></span>`);
    })
}

function setDataTableGiaDatPhiNongNghiep(arrTableData) {
   arrTableData.map(data => {
       let item = $(`tr[data-cap='${data.danhMucDuong.cap}']`);
       item.children("td:nth-child(3)").html(data.viTri1 == 0 ? '': formatNumber(data.viTri1,'.','.'));
       item.children("td:nth-child(4)").html(data.viTri2 == 0 ? '': formatNumber(data.viTri2,'.','.'));
       item.children("td:nth-child(5)").html(data.viTri3 == 0 ? '': formatNumber(data.viTri3,'.','.'));
       item.children("td:nth-child(6)").html(data.viTri4 == 0 ? '': formatNumber(data.viTri4,'.','.'));
       item.children("td:nth-child(7)").html(data.namDau != null && data.namCuoi != null ? data.namDau +" - "+data.namCuoi : "" );
       item.children("td:nth-child(8)").html(`<span><span data-id=${data.id}>${data.quyetDinh.soQuyetDinh}</span></span>`);
       // item.children("td:nth-child(8)").html(`<span><span data-id=${data.id}><i class="fas fa-plus" aria-hidden="true"></i></span></span>`);
   })
}
//Gia dat thanh thi