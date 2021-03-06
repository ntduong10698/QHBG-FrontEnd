var href = window.location.href;

function callFullTableDecision() {
    // callTableDecision();
    callCoQuanBanHanh();
    callLoaiQuyetDinh();
    searchDecision();
    // searchTextQuyetDinh();
    //them cho phan gia dat
    if (href.indexOf("nhomQuyetDinh") === -1) {
        callTableDecision();
    }
    $("#exportExel a").click(function () {
        exportExcel("tableDecision", "QuyetDinh");
        return false;
    })
    $("#cb01").prop("checked", true);
}

// sắp xếp quyết định theo ngày
// function sortDecision(arr) {
//     arr.sort((a, b) => {
//         return a.thuTuUuTien - b.thuTuUuTien;
//     });
// }

// gọi ra dữ liệu all quyết định
function callTableDecision() {
    viewLoadingGif();
    let arr = null;
    $('#pagination').pagination({
        dataSource: function (done) {
            ajaxCallGet("v1/public/quyet-dinh/available").then(result => {
                hideLoadingGif();
                arr = result;
                done(arr);
            });
        },
        pageSize: 10,
        autoHidePrevious: true,
        autoHideNext: true,
        callback: function (result, pagination) {

            if (result.length > 0) {
                let tmp = addDataAfterGet(result, pagination.pageNumber);
                $("#tableDecision tbody").html(tmp);
            } else {
                $("#tableDecision").html("<span>Không có dữ liệu</span>");
            }
        }
    });
}


// call cơ quan ban hành
function callCoQuanBanHanh() {
    let tmp = `<option value="0">Tất Cả</option>`;
    ajaxCallGet("v1/public/quyet-dinh/co-quan-ban-hanh/all").then(data => {
        data.map(function (response, index) {
            tmp += `
             <option value="${response.id}"  >${response.tenCoQUan}
                            </option>
            `;
        })
        $("#dp-drop1").html(tmp);
    });
    // searchCoQuanBanHanh();
}

// call loại quyết định
function callLoaiQuyetDinh() {
    let tmp = `<option value="0">Tất Cả</option>`;
    ajaxCallGet("v1/public/quyet-dinh/nhom-quyet-dinh/available").then(data => {
        data.map(function (response, index) {
            tmp += `
            <option value="${response.id}">${response.tenNhom}
                            </option>
            `;
        })
        $("#dp-drop2").html(tmp);

        //them cho phan quyet dinhs
        if (href.indexOf("nhomQuyetDinh") > -1) {
            let idNhomQuyetDinh = href.trim().split("nhomQuyetDinh=")[1];
            $("#dp-drop2").val(idNhomQuyetDinh);
            $("#dp-drop2").select2().trigger('change');
            $("#searchQuyetDinh").trigger('click');
        }
    })
    // searchLoaiQuyetDinh();
}

function searchCoQuanBanHanh() {
    $("#dp-drop1").change(function () {
        // $("#dp-drop2").html("");
        // callLoaiQuyetDinh();
        viewLoadingGif();
        let arr = null;
        $('#pagination').pagination({

            dataSource: function (done) {
                ajaxCallGet("v1/public/quyet-dinh/find-by-co-quan-ban-hanh?id=" + $("#dp-drop1").val()).then(data => {
                    arr = data;
                    done(arr);
                    hideLoadingGif();
                });
            },
            pageSize: 10,
            autoHidePrevious: true,
            autoHideNext: true,
            callback: function (result, pagination) {
                addDataAfterGet(result, pagination.pageNumber)
            }
        })
    })
}

function searchLoaiQuyetDinh() {
    $("#dp-drop2").change(function () {
        // $("#dp-drop1").html("");
        // callCoQuanBanHanh();
        viewLoadingGif();
        let arr = null;
        $('#pagination').pagination({
            dataSource: function (done) {
                ajaxCallGet("v1/public/quyet-dinh/find-by-nhom-quyet-dinh?id=" + $("#dp-drop2").val()).then(data => {
                    arr = data;
                    hideLoadingGif();
                    done(arr);
                });
            },
            pageSize: 10,
            autoHidePrevious: true,
            autoHideNext: true,
            callback: function (result, pagination) {
                addDataAfterGet(result, pagination.pageNumber)
            }
        })
    });
}

function addDataAfterGet(data, number) {
    console.log(number)
    if (data.length > 0) {
            number = (number - 1) * 10;
        let tmp = "";
        data.map(function (response, index) {

            tmp += `
                <tr>
                <td style="text-align: center">${response.thuTuUuTien}</td>
                            <td><a href="thong-tin-quyet-dinh?id=${response.id}" target="_blank">${response.soQuyetDinh} </a></td>
                            <td>${response.trichYeu} </td>
                            <td>${response.coQuanBanHanh.tenCoQUan} </td>
                            <td><span>${response.chucVu}: ${response.nguoiKy}</span>
                                <span>Ngày ban hành: ${response.ngayBanHanh.split("-").reverse().join("/")}</span></td>
                            <td> <a href="${viewSrcFile(response.duongDanTep)}" target="_blank"><i class="fas fa-paperclip"></i></a></td>
                        </tr>
                `;
        });
        $("#tableDecision tbody").html(tmp);
    } else {
        $("#tableDecision tbody").html("<tr ><td colspan='6'>Không có kết quả phù hợp với tìm kiếm </td></tr>");
    }
}

function searchTextQuyetDinh() {
    $("#searchQuyetDinh").click(function () {
        viewLoadingGif();
        let test = document.getElementsByName("r1");
        let valuee = 0;
        for (let i = 0; i < test.length; i++) {
            if (test[i].checked) {
                valuee = test[i].value;
                break;
            }
        }
        let arr = null;
        $('#pagination').pagination({
            dataSource: function (done) {
                ajaxCallGet("v1/public/quyet-dinh/search?option=" + valuee + "&text=" + $('#searchTextQD').val()).then(data => {
                    arr = data;
                    hideLoadingGif();
                    done(arr);
                });
            },
            pageSize: 10,
            autoHidePrevious: true,
            autoHideNext: true,
            callback: function (result, pagination) {
                addDataAfterGet(result, pagination.pageNumber)
            }
        })
    })
}

function searchDecision(){
    $("#searchQuyetDinh").click(function () {
        let option = $('input[name="r1"]:checked').val();
        let text = $("#searchTextQD").val();
        let coQuanId = $("#dp-drop1 option:selected").val();
        let loaiId = $("#dp-drop2 option:selected").val();
        viewLoadingGif();
        callSearchDecision(option, text, coQuanId, loaiId).then(rs => {
            $('#pagination').pagination({
                dataSource: rs,
                pageSize: 10,
                autoHidePrevious: true,
                autoHideNext: true,
                callback: function (result, pagination) {
                    addDataAfterGet(result, pagination.pageNumber);
                    hideLoadingGif();
                }
            })
        }).catch(err => {
            console.log(err);
        })
    })
}

function callSearchDecision(option, text, coQuanId, loaiId) {
    return ajaxCallGet(`v1/public/quyet-dinh/tim-kiem?option=${option}&text=${text}&co-quan-id=${coQuanId}&loai-id=${loaiId}`);
}