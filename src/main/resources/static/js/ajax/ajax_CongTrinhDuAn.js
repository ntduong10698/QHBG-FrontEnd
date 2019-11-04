$(document).ready(function () {
    getHuyen();
    getLoaiDuAn();
    pagination_CongTrinhDuAn()
    findCongTrinhDuAn()
    $("#exportExel a").click(function () {
        exportExcel("tableCongTrinhDuAn", "DuAn");
        return false;
    });

});
var a=0;
function getHuyen() {
    let tmp = "";
    ajaxCallGet("v1/public/huyen/all").then(data => {
        data.map(function (result) {
            tmp += `
         <option value="${result.idHuyen}">
         ${result.tenHuyen}
                            </option>
         `;
        })
        $("#dp-drop3").append(tmp)
        console.log(data);
    });
}

function getLoaiDuAn() {
    let tmp = "";
    ajaxCallGet("v1/public/loai_dat/loai-cong-trinh-du-an/all").then(data => {
        data.map(function (result) {
            tmp += `
        <option value="${result.id}">${result.ten}</option>
        `;
        });

        $("#dp-drop4").append(tmp)
    })
}

function checkCacTruong(result) {

    result.tenCongTrinhDuAn = (result.tenCongTrinhDuAn !== null ? result.tenCongTrinhDuAn : "");
    result.diaDiem = (result.diaDiem !== null ? result.diaDiem : "");
    result.loaiCongTrinhDuAn = (result.loaiCongTrinhDuAn !== null ? result.loaiCongTrinhDuAn : "");
    result.tongDienTich = (result.tongDienTich !== null ? result.tongDienTich : "");
    result.canCuThuHoi = (result.canCuThuHoi !== null ? result.canCuThuHoi : "");
    result.tongDienTich = (result.tongDienTich > 0 ? result.tongDienTich : "")
}

function findCongTrinhDuAn() {
    $("#clickSearchDuAn").click(function () {
        viewLoadingGif();
        $('#pagination_CongTrinh').pagination({
            dataSource: function (done) {
                ajaxCallGet("v1/public/cong-trinh-du-an/filter?ten-cong-trinh=" + $("#nameProject").val() + "&dia-diem=" + $("#diaDiemDuAn").val() + "&loai-du-an=" + $("#dp-drop4").val() + "&huyen=" + $("#dp-drop3").val()).then(data => {
                    done(data)
                });
            },
            pageSize: 10,
            autoHidePrevious: true,
            autoHideNext: true,
            callback: function (data, pagination) {
                hideLoadingGif();
                if (data.length > 0) {
                    addData(data, pagination.pageNumber);
                } else {
                    $("#tableCongTrinhDuAn tbody").html("<tr> <td colspan='13'>Không có kết quả</td></tr>");
                }
            }
        });
    })
}

function findIdCongTrinhDuAn(id) {
    let tmp = "";
    ajaxCallGet("v1/public/cong-trinh-du-an/find-by-id?id=" + id).then(data => {
        checkCacTruong(data)

        tmp += `
        <div class="fa-pr-bt ">
            <div class="pr-bt-left">
                <a href="">
                    <img src="resources/img/bando.png" alt="">
                </a>
            </div>
            <div class="pr-bt-right">
                <i id="click-qd" onclick="clickHide()" class="fa fa-times-circle" aria-hidden="true"></i>
                <div class="pr-top">
                    <span>Thông tin công trình dự án</span>
                </div>
                <div class="pr-bottom ">
                    <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                            <span>Tên dự án:</span>
                        </div>
                        <div class="pr-infor-right col-9">
                            <span>${data.tenCongTrinhDuAn}</span>
                        </div>
                    </div>
                    <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                            <span>Địa điểm:</span>
                        </div>
                        <div class="pr-infor-right col-9">
                            <span>${data.diaDiem}</span>
                        </div>
                    </div>
                    <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                            <span>Loại công trình:</span>
                        </div>
                        <div class="pr-infor-right col-9">
                            <span>${data.loaiCongTrinhDuAn.ten}</span>
                        </div>
                    </div>
                   
                   
                    <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                           <span>Căn cứ thu hồi:</span>
                        </div>
                        <div class="pr-infor-right col-9">
                            <span>${data.canCuThuHoi}</span>
                        </div>
                    </div>
                      <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                            <span>Diện tích (ha):</span>
                        </div>
                        <div class="pr-infor-right col-9">
                            <span>${data.tongDienTich}</span>
                        </div>
                    </div>
                      <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                            <span>Ghi chú:</span>
                        </div>
                        <div class="pr-infor-right col-9">
                            <span></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        `;
        $("#block-price-bottom").html(tmp);
    })
    $("#block-price-bottom").fadeIn(1000);
}

function clickHide() {
    $("#block-price-bottom").hide()
}

function pagination_CongTrinhDuAn() {
    viewLoadingGif();
    let arr;
    ajaxCallGet("v1/public/cong-trinh-du-an/count-page").then(data => {
        arr = new Array(data);
        $('#pagination_CongTrinh').pagination({
            dataSource: arr,
            pageSize: 1,
            pageNumber: 1,
            autoHidePrevious: true,
            autoHideNext: true,
            callback: function (data, pagination) {
                hideLoadingGif();
                let tmp = "";
                $.ajax({
                    type: 'GET',
                    dataType: "json",
                    async: false,
                    headers: {
                        "Authorization": tokenHeader_value,
                    },
                    url: URL_API + 'v1/public/cong-trinh-du-an/page?page=' + pagination.pageNumber,
                    timeout: 2000,
                    success: function (response) {
                        addData(response, pagination.pageNumber);
                    }
                });
            }
        });
    });
}

function addData(response, number) {
    let tmp = "";
    number = (number - 1) * 10;

    response.map(function (result, index) {
        // if (result.tenCongTrinhDuAn.equals(result.tenCongTrinhDuAn.toUpperCase())){
        //         //     console
        //         // }
        let tenHuyen = "";
        if (result.huyen !== null) {
            tenHuyen = (result.huyen.tenHuyen !== null ? result.huyen.tenHuyen : "");
        }
        checkCacTruong(result);

        if (result.tenCongTrinhDuAn.localeCompare(result.tenCongTrinhDuAn.toUpperCase()) === 0) {
           
            tmp += `
             <tr style="font-weight:600;">
                        <td>${number+index+1}</td>
                        <td>${result.tenCongTrinhDuAn}</td>
                        <td>${result.loaiCongTrinhDuAn.ten}</td>
                        <td>${result.tongDienTich}</td>
                        <td>${result.diaDiem}</td>
                        <td>${tenHuyen}</td>
                        <td>${result.canCuThuHoi}</td>
                        <td><span><span class="dataCongtrinh"    onclick="findIdCongTrinhDuAn(${result.idCongTrinhDuAn})"><i class="fas fa-plus"></i></span></span></td>
                    </tr>
            `;
        } else {
            tmp += `
             <tr>
                        <td>${number + index + 1}</td>
                        <td>${result.tenCongTrinhDuAn}</td>
                        <td>${result.loaiCongTrinhDuAn.ten}</td>
                        <td>${result.tongDienTich}</td>
                        <td>${result.diaDiem}</td>
                        <td>${tenHuyen}</td>
                        <td>${result.canCuThuHoi}</td>
                        <td><span><span class="dataCongtrinh"    onclick="findIdCongTrinhDuAn(${result.idCongTrinhDuAn})"><i class="fas fa-plus"></i></span></span></td>
                    </tr>
            `;
        }
    });
    $("#tableCongTrinhDuAn tbody").html(tmp);
}
function convertToRoman(num) {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var str = '';

    for (var i of Object.keys(roman)) {
        var q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }

    return str;
}