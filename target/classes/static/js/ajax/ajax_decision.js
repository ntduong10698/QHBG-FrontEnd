var href = window.location.href;

function callFullTableDecision() {
    // callTableDecision();
    callCoQuanBanHanh();
    callLoaiQuyetDinh();
    searchTextQuyetDinh();

    //them cho phan gia dat
    if (href.indexOf("nhomQuyetDinh") == -1) {
        callTableDecision();
    }
    $("#exportExel a").click(function () {
        exportExcel("tableDecision","QuyetDinh");
        return false;
    })
}

function sortDecision(arr) {
    arr.sort((a, b) => {
        return ('' + b.ngayBanHanh).localeCompare(a.ngayBanHanh);
    });
}

function callTableDecision() {
    viewLoadingGif();
    let arr = null;
    $('#pagination').pagination({
        dataSource: function (done) {
            ajaxCallGet("v1/public/quyet-dinh/all").then(result => {
                hideLoadingGif();
                arr = result;
                sortDecision(arr)
                done(arr);
            });
        },
        pageSize: 10,
        autoHidePrevious: true,
        autoHideNext: true,
        callback: function (result, pagination) {

            if (result.length > 0) {
                let tmp = addDataAfterGet(result);
                $("#tableDecision tbody").html(tmp);
            } else {
                $("#tableDecision").html("<span>Không có dữ liệu</span>");
            }
        }
    });
}


// .reverse()c
function callCoQuanBanHanh() {
    let tmp = "";
    ajaxCallGet("v1/public/quyet-dinh/co-quan-ban-hanh/all").then(data => {

        data.map(function (response, index) {
            tmp += `
             <option value="${response.id}"  >${response.tenCoQUan}
                            </option>
            `;

        })
        $("#dp-drop1").append(tmp);
    });
    searchCoQuanBanHanh();
}

function callLoaiQuyetDinh() {
    let tmp = "";
    ajaxCallGet("v1/public/quyet-dinh/nhom-quyet-dinh/all").then(data => {

        data.map(function (response, index) {
            tmp += `
            <option value="${response.id}">${response.tenNhom}
                            </option>
            `;
        })
        $("#dp-drop2").append(tmp);

        //them cho phan quyet dinhs
        let idNhomQuyetDinh = href.trim().split("nhomQuyetDinh=")[1];
        $("#dp-drop2").val(idNhomQuyetDinh);
        $("#dp-drop2").select2().trigger('change');
    })
    searchLoaiQuyetDinh();
}

function searchCoQuanBanHanh() {
    $("#dp-drop1").change(function () {
        ajaxCallGet("v1/public/quyet-dinh/find-by-co-quan-ban-hanh?id=" + $("#dp-drop1").val()).then(data => {
            addDataAfterGet(data)
        });
        $('#pagination').pagination({
            dataSource: function (done) {
                ajaxCallGet("v1/public/quyet-dinh/find-by-co-quan-ban-hanh?id=" + $("#dp-drop1").val()).then(data => {
                    done(data)
                });
            },
            pageSize: 10,
            autoHidePrevious: true,
            autoHideNext: true,
            callback: function (result, pagination) {
                addDataAfterGet(result)
            }
        })
    })
}

function searchLoaiQuyetDinh() {
    $("#dp-drop2").change(function () {
        viewLoadingGif();
        $('#pagination').pagination({
            dataSource: function (done) {
                ajaxCallGet("v1/public/quyet-dinh/find-by-nhom-quyet-dinh?id=" + $("#dp-drop2").val()).then(data => {
                    hideLoadingGif();
                    done(data);
                });
            },
            pageSize: 10,
            autoHidePrevious: true,
            autoHideNext: true,
            callback: function (result, pagination) {
                addDataAfterGet(result)
            }
        })
    });
}

function addDataAfterGet(data) {

    console.log(data)
    if (data.length > 0) {
        let tmp = "";
        data.map(function (response, index) {
            console.log(tmp)
            tmp += `
                <tr>
                            <td><a href="thong-tin-quyet-dinh?id=${response.id}" target="_blank">${response.soQuyetDinh} </a></td>
                            <td>${response.trichYeu} </td>
                            <td>${response.coQuanBanHanh.tenCoQUan} </td>
                            <td><span>${response.chucVu} ${response.nguoiKy}</span>
                                <span>Ngày ban hành: ${response.ngayBanHanh.split("-").reverse().join("/")}</span></td>
                            <td> <a href="${response.duongDanTep}" target="_blank"><i class="fas fa-paperclip"></i></a></td>
                        </tr>
                `;
        });
        $("#tableDecision tbody").html(tmp);
    } else {
        $("#tableDecision tbody").html("<tr ><td colspan='5'>Không có kết quả phù hợp với tìm kiếm </td></tr>");
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
        $('#pagination').pagination({
            dataSource: function (done) {
                ajaxCallGet("v1/public/quyet-dinh/search?option=" + valuee + "&text=" + $('#searchTextQD').val()).then(data => {
                    hideLoadingGif();
                    done(data);
                });
            },
            pageSize: 10,

            autoHidePrevious: true,
            autoHideNext: true,
            callback: function (result, pagination) {
                addDataAfterGet(result)
            }
        })


    })
}
