$(document).ready(function () {
    getHuyen();

    getLoaiDuAn();
    // getTableDuAn();
    pagination_CongTrinhDuAn()
    findCongTrinhDuAn()
});

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

// function getTableDuAn() {
//     ajaxCallGet("v1/public/cong-trinh-du-an/all").then(data => {
//         console.log(data);
//
//         let tmp = "";
//         data.map(function (result, index) {
//             checkCacTruong(result);
//             tmp += `
//              <tr>
//                         <td>${index + 1}</td>
//                         <td>${result.tenCongTrinhDuAn}</td>
//                         <td>${result.loaiCongTrinhDuAn.ten}</td>
//                         <td>${result.tongDienTich}</td>
//                         <td>${result.diaDiem}</td>
//                         <td>${result.huyen.tenHuyen}</td>
//                         <td>${result.canCuThuHoi}</td>
//                         <td><span><span class="dataCongtrinh"    onclick="findIdCongTrinhDuAn(${result.idCongTrinhDuAn})"><i class="fas fa-plus"></i></span></span></td>
//                     </tr>
//             `;
//
//         });
//         $("#tableCongTrinhDuAn tbody").html(tmp);
//     })
// }

function checkCacTruong(result) {
    result.tenCongTrinhDuAn = (result.tenCongTrinhDuAn !== null ? result.tenCongTrinhDuAn : "");
    result.diaDiem = (result.diaDiem !== null ? result.diaDiem : "");
    result.loaiCongTrinhDuAn = (result.loaiCongTrinhDuAn !== null ? result.loaiCongTrinhDuAn : "");
    result.tongDienTich = (result.tongDienTich !== null ? result.tongDienTich : "");
    result.huyen.tenHuyen = (result.huyen.tenHuyen !== null ? result.huyen.tenHuyen : "");
    result.canCuThuHoi = (result.canCuThuHoi !== null ? result.canCuThuHoi : "");
    result.tongDienTich = (result.tongDienTich > 0 ? result.tongDienTich : "")
}

function findCongTrinhDuAn() {
    $("#clickSearchDuAn").click(function () {
        console.log()
        ajaxCallGet("v1/public/cong-trinh-du-an/filter?ten-cong-trinh=" + $("#nameProject").val() + "&dia-diem=" + $("#diaDiemDuAn").val() + "&loai-du-an=" + $("#dp-drop4").val() + "&huyen=" + $("#dp-drop3").val()).then(data => {
            if (data !== null) {
                console.log(data)
                let tmp = "";
                data.map(function (result, index) {
                    checkCacTruong(result);
                    tmp += `
             <tr>
                        <td>${index + 1}</td>
                        <td>${result.tenCongTrinhDuAn}</td>
                        <td>${result.loaiCongTrinhDuAn.ten}</td>
                        <td>${result.tongDienTich}</td>
                        <td>${result.diaDiem}</td>
                        <td>${result.huyen.tenHuyen}</td>
                        <td>${result.canCuThuHoi}</td>
                        <td><span><span class="dataCongtrinh" onclick="findIdCongTrinhDuAn(${result.idCongTrinhDuAn})" ><i class="fas fa-plus"></i></span></span></td>
                    </tr>
            `;
                })
                $("#tableCongTrinhDuAn tbody").html(tmp);
            } else {
                $("#tableCongTrinhDuAn tbody").html("<tr> <td colspan='13'>Không có kết quả</td></tr>");
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
       +
                           <span>Căn cứ thu hồi:</span>
                        </div>
                        <div class="pr-infor-right col-9">
                            <span><a href="">${data.canCuThuHoi}</a></span>
                        </div>
                    </div>
                      <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                            <span>Diện tích:</span>
                        </div>
                        <div class="pr-infor-right col-9">
                            <span><a href="">${data.tongDienTich}</a></span>
                        </div>
                    </div>
                      <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                            <span>Ghi chú:</span>
                        </div>
                        <div class="pr-infor-right col-9">
                            <span><a href=""></a></span>
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
    let arr = new Array();
    ajaxCallGet("v1/public/cong-trinh-du-an/count-page").then(data => {
       arr=data;
       console.log(arr);


    });
    $('#tableCongTrinhDuAn').pagination({
        dataSource: function(done) {
            $.ajax({
                type: 'GET',
                dataType: "json",
                headers: {
                    "Authorization": tokenHeader_value,
                },
                url: URL_API+ 'v1/public/cong-trinh-du-an/page',
                timeout:2000,
                success: function(response) {
                    done(response);
                }
            });
        },


        pageSize: 10,
        autoHidePrevious: true,
        autoHideNext: true,
        callback: function (data, pagination) {


            let tmp = "";
        data.map(function (result, index) {

            if (pagination.pageNumber<2){
                index +=1;
                pagination.pageNumber='';
            }
            checkCacTruong(result);
            tmp += `
             <tr>
                        <td>${pagination.pageNumber}${index}</td>
                        <td>${result.tenCongTrinhDuAn}</td>
                        <td>${result.loaiCongTrinhDuAn.ten}</td>
                        <td>${result.tongDienTich}</td>
                        <td>${result.diaDiem}</td>
                        <td>${result.huyen.tenHuyen}</td>
                        <td>${result.canCuThuHoi}</td>
                        <td><span><span class="dataCongtrinh"    onclick="findIdCongTrinhDuAn(${result.idCongTrinhDuAn})"><i class="fas fa-plus"></i></span></span></td>
                    </tr>
            `;

        });
        $("#tableCongTrinhDuAn tbody").html(tmp);
        }
    })
}