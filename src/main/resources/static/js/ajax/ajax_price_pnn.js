var arrXa = [];
var arrTable = [];

$(function () {
    setViewSelectHuyen();
    callBangGiaDatPNN();
})

function callBangGiaDatPNN() {
    //set option bang gia dat
    let arrCallAjax = [callBangGiaDat(2),callBangGiaDat(3)];
    Promise.all(arrCallAjax).then(rs => {
        //set option
        let optionSelect = "<option value='0'>--- Gõ để tìm kiếm ---</option>";
        rs.map(item => {
            item.map(item1 => {
                optionSelect += `<option value=${item1.id}>${item1.tenBang}</option>`;
            })
        })
        $("#dp-drop8").html(optionSelect);
        //set chang select Bang gia dat

        //set change select Bang gia dat;
        $("#dp-drop8").change(function () {
            changeSelectBangGiaDatPNN();
        })
        //end set option
    }).catch(err => {
        console.log(err);
    })
    //end set option bang gia dat
}

function changeSelectBangGiaDatPNN() {
    let idHuyen = $("#dp-drop10").val();
    let id = $("#dp-drop8").val();
    // id > 11 la dat nong thon
    if (id <= 11) {
        console.log("Call bang gia dat phi nong nghiep");
    } else {
        callGiaDatNongThon(id, idHuyen).then(rs => {
            arrTable = rs;
            setViewSelectXa(idHuyen, rs);
            setViewLoaiXa();
            $(".block-table-price2").html(setTableGiaDatNongThon(rs,idHuyen));
            arrTable = rs;
        }).catch(err => {
            console.log(err);
        })
    }
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
    $("#dp-drop9").val("0");
    $("#dp-drop9").select2().trigger('change');

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

function changeSelectXaNongThon() {

}

function callGiaDatNongThon(id,idHuyen) {
    let url = `v1/public/gia-dat/gia-dat-tai-nong-thon/find-by-huyen-and-bang-gia-dat?bang-gia-dat-id=${id}&huyen-id=${idHuyen}`;
    return ajaxCallGet(url);
}

function callGiaDatPhiNongNghiep(id) {
    let url = `v1/public/gia-dat/gia-dat-phi-nong-nghiep/find-by-bang-gia-dat?bang-gia-dat-id=${id}`;
    return ajaxCallGet(url);
}

function callViewLoaiXa() {
    let url = `v1/public/dm-loai-xa/all`;
    return ajaxCallGet(url);
}

//set View select huyen
function setViewSelectHuyen() {
    let viewSelectHuyen = `<option value='0'>--- Gõ để tìm kiếm ---</option>`;
    ARR_HUYEN_TEXT.map((huyen, index) => {
        viewSelectHuyen += `<option value=${index + 1}>${huyen}</option>`;
    })
    $("#dp-drop10").html(viewSelectHuyen);
    $("#dp-drop10").val("1");
    $("#dp-drop10").select2().trigger('change');
    // setViewSelectXa(1);
    $("#dp-drop10").change(function () {
        setViewSelectXa($("#dp-drop10").val());
        changeSelectBangGiaDatPNN();
    })
}

//set view select xa
function setViewSelectXa(idHuyen) {
    callXa(idHuyen).then(rs => {
        arrXa = rs;
        let viewSelectXa = `<option value='0'>--- Gõ để tìm kiếm ---</option>`;
        rs.map(xa => {
            viewSelectXa += `<option value=${xa.idXa}>${xa.tenXa}</option>`
        })
        $("#dp-drop11").html(viewSelectXa);
        changeViewLoaiXa(arrTable, idHuyen);
        $("#dp-drop11").change(function () {
            let idXa = $("#dp-drop11").val();
            if (idXa != 0) {
                let xa = rs.filter(data => data.idXa == idXa);
                let idLoaiXa = xa[0].loaiXas[0] == null ? 0 : xa[0].loaiXas[0].idDmLoaiXa; //1 xa co mot loai xa
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
            }
        })
    }).catch(err => {
        console.log(err);
    })
}

//set view loai xa
function setViewLoaiXa() {
    callViewLoaiXa().then(rs => {
        let viewLoaiXa = "<option value='0'>--- Gõ để tìm kiếm ---</option>";
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
        $("#dp-drop12").html(viewLoaiXa);
    }).catch(err => {
        console.log(err);
    })
}

//change view loai xa
function changeViewLoaiXa(arrFindXa, idHuyen) {
    $("#dp-drop12").change(function () {
        let val = $("#dp-drop12").val();
        let arrRs = arrFindXa.filter(data => {
            if (data.loaiXa.parent != null) {
                return  (data.loaiXa.idDmLoaiXa == val || data.loaiXa.parent.idDmLoaiXa == val);
            } else {
                return data.loaiXa.idDmLoaiXa == val;
            }
        });
        $(".block-table-price2").html(setTableGiaDatNongThon(arrRs,idHuyen));
    })
}
//end change view loai xa

//set table GiaDatNongThon
function setTableGiaDatNongThon(rs,idHuyen) {
   let arrTD = rs.filter(data => data.loaiXa.parent.idDmLoaiXa == 1);
   let arrMN = rs.filter(data => data.loaiXa.parent.idDmLoaiXa == 2);
   let viewTable = '';
   let viewData = `<tr><td>I</td><td style="text-transform: uppercase; font-weight: bold">Xã Trung Du</td><td></td><td></td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
   arrTD.map((data1, index) => {
       viewData += setDataTableGiaDatNongThon(data1, index);
   })
    viewData += `<tr><td>II</td><td style="text-transform: uppercase; font-weight: bold">Xã Miền Núi</td><td></td><td></td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
    arrMN.map((data1, index) => {
        viewData += setDataTableGiaDatNongThon(data1, index);
    })
    viewTable =`<div class="tablep-cap">
                    <span>Bảng giá đất gia đoạn 2015-2019 - ${ARR_HUYEN_TEXT[idHuyen-1]}<br>Theo bảng giá đất ở nông thôn</span>
                </div>
                <table class="table-dat table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th rowspan="3">STT</th>
                            <th rowspan="3">Loại xã</th>
                        </tr>
                        <tr>
                            <th colspan="4">Khu vực 1</th>
                            <th colspan="4">Khu vực 2</th>
                            <th colspan="4">Khu vực 3</th>
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
                </table>`
    return viewTable;
}

function setDataTableGiaDatNongThon(data1, index) {
    return `<tr><td>${index+1}</td><td>${data1.loaiXa.tenLoaiXa}</td><td>${data1.viTri11}</td><td>${data1.viTri12}</td>
            <td>${data1.viTri13}</td><td>${data1.viTri14}</td><td>${data1.viTri21}</td><td>${data1.viTri22}</td><td>${data1.viTri23}</td>
            <td>${data1.viTri24}</td><td>${data1.viTri31}</td><td>${data1.viTri32}</td><td>${data1.viTri33}</td><td>${data1.viTri34}</td></tr>`;
}

function resetSelectXa() {
    $("#dp-drop11").val("0");
    $("#dp-drop11").select2().trigger('change');;
    $("#dp-drop12").val("0");
    $("#dp-drop12").select2().trigger('change');;
}