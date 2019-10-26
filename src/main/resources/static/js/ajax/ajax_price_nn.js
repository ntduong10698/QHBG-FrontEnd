$(function () {
    callNongNghiep(1);
})
function callNongNghiep(checkLandPrice) {

    //set data in select in bang gia dat nong nghiep
    viewLoadingGif();
    callBangGiaDat(checkLandPrice).then(data => {
        let optionSelect = "<option value='0'>--- Tất Cả ---</option>";
        let arrCall = [];
        data.map(rs => {
            optionSelect += `<option value=${rs.id}>${rs.tenBang}</option>`;
            arrCall.push(callGiaDatNongNghiep(rs.id));
        })
        $("#dp-drop8").html(optionSelect);
        //end add data in select in bang gia dat nong nghiep

        //call table bang gia dat nong nghiep theo id cua bang gia dat
        Promise.all(arrCall).then(rs => {
            // set view table bang gia dat nong nghiep full
            viewTableDatNongNghiep(rs);
            //call find gia dat nong nghiep
            findSelectBangGiaDat(rs);
            findGiaDatNongNghiep(rs);
            hideLoadingGif();
        }).catch(err => {
            console.log(err);
        })
        //end call table bang gia dat nong nghiep theo id cua bang gia dat
    }).catch(err => {
        console.log(err);
    })
}

function callGiaDatNongNghiep(id) {
    let url = `v1/public/gia-dat/gia-dat-nong-nghiep/find-by-bang-gia-dat?bang-gia-dat-id=${id}`;
    return ajaxCallGet(url);
}

function findGiaDatNongNghiep(rs) {
    $("#searchGiaDat").click(function () {
        viewLoadingGif();
        let searchViTriGiaDat = $("#searchViTriGiaDat input").val().toUpperCase();
        let priceDatMin = $("#priceDatMin").val() == '' ? 0 : $("#priceDatMin").val()*1000; //to vnd
        let priceDatMax = $("#priceDatMax").val() == '' ? '' : $("#priceDatMax").val()*1000;
        let bangGiaDat = $("#dp-drop8").val();
        let arrFilter = [];
        if (bangGiaDat == 0) {
            rs.map(arr => {
                arrFilter.push(arr.filter(data => (priceDatMax == '' ? ((data.viTri.toUpperCase().indexOf(searchViTriGiaDat) > -1) && (data.giaDat >= priceDatMin))
                                    : ((data.viTri.toUpperCase().indexOf(searchViTriGiaDat) > -1) && (data.giaDat >= priceDatMin) && (data.giaDat <= priceDatMax) ) ) ));
            })
        } else {
            arrSearch = rs.filter(data => data[0].bangGiaDat.id == bangGiaDat);
            arrSearch.map(arr => {
                arrFilter.push(arr.filter(data => (priceDatMax == '' ? ((data.viTri.toUpperCase().indexOf(searchViTriGiaDat) > -1) && (data.giaDat >= priceDatMin))
                    : ((data.viTri.toUpperCase().indexOf(searchViTriGiaDat) > -1) && (data.giaDat >= priceDatMin) && (data.giaDat <= priceDatMax) ) ) ));
            })
        }
        viewTableDatNongNghiep(arrFilter);
        hideLoadingGif();
        return false;
    })
}

function findSelectBangGiaDat(rs) {
    $("#dp-drop8").change(function () {
        viewLoadingGif();
       let val = $("#dp-drop8").val();
       if(val != 0) {
           let arrFilter = rs.filter(data => data[0].bangGiaDat.id == val);
           viewTableDatNongNghiep(arrFilter);
       } else {
           viewTableDatNongNghiep(rs);
       }
       //reset gia tri
        $("#searchViTriGiaDat input").val('');
        $("#priceDatMin").val(0);
        $("#priceDatMax").val('');
        hideLoadingGif();
    })
}

function viewTableDatNongNghiep(rs) {
    let viewTable = '';
    rs.map((dataTable, index) => {
        if(dataTable.length > 1) {
            viewTable += `<tr><td rowspan=${dataTable.length + 1}>${dataTable[0].bangGiaDat.tenBang}</td></tr>`; //promise return dung thu tu nen lay ten table o cha data.length + vì tính cả dòng của nó
            dataTable.map((data1,index1) => {
                viewTable += `<tr>
                                    <td>${index1 + 1}</td>
                                    <td>${data1.viTri}</td>
                                    <td>${data1.giaDat == 0 ?'' : formatNumber(data1.giaDat,'.','.')}</td>
                                    <td>
                                        <span>
                                            <span data-id="${data1.id}">
                                                <i class="fas fa-plus" aria-hidden="true"></i>
                                            </span>
                                        </span>
                                    </td>
                                </tr>`;

            })
        } else if (dataTable.length === 1) {
            viewTable += `<tr>
                            <td>${dataTable[0].bangGiaDat.tenBang}</td>
                            <td style="text-align: center !important;">1</td>
                            <td style="text-align: left !important;">${dataTable[0].viTri}</td>
                            <td>${dataTable[0].giaDat == 0 ? '' : formatNumber(dataTable[0].giaDat,'.','.')}</td>
                            <td>
                                <span>
                                    <span data-id="${dataTable[0].id}">
                                        <i class="fas fa-plus" aria-hidden="true"></i>
                                    </span>
                                </span>
                            </td>
                        </tr>`;
        }
    })
    viewTable = `<table class="table-dat table table-hover table-bordered tableexport-string" id="tableExport" >
                            <thead>
                            <tr>
                                <th>Bảng Giá Đất</th>
                                <th>STT</th>
                                <th>Vị Trí</th>
                                <th>Giá Đất</th>
                                <th>Chi Tiết</th>
                            </tr>
                            </thead>
                            <tbody>${viewTable}</tbody></table>`;
    $(" .block-table-price2").html(viewTable);
    //click view quyet dinh
    $(".table-dat  tbody tr td span>span").click(function () {
        let idGiaDat = $(this).attr("data-id");
        let test = false;
        for (let i = 0 ; i < rs.length ; i++) {
            if(!test) {
                for(let j = 0 ; j < rs[i].length; j++) {
                    if (rs[i][j].id == idGiaDat) {
                        let viewQuyetDinh = getViewQuyetDinh(rs[i][j].quyetDinh);
                        $(".fa-pr-bt .pr-bt-right .pr-bottom").html(viewQuyetDinh);
                        test = true;
                        break;
                    }
                }
            } else {
                break;
            }
        }
        $("#block-price-bottom").fadeIn(1000);
    });
    // end set view table bang gia dat nong nghiep full

    //run export Excel
    $("#exportExel a").click(function () {
        exportExcel("tableExport","BangGiaDatNongNghiep");
        return false;
    })
}
