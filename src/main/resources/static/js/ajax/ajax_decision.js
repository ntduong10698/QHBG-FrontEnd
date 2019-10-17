function callFullTableDecision() {
    callTableDecision();
    callCoQuanBanHanh();
    callLoaiQuyetDinh();
    searchTextQuyetDinh();

}

function sortDecision(arr) {
    arr.sort((a, b) => {
        return ('' + b.ngayBanHanh).localeCompare(a.ngayBanHanh);
    });
}

function callTableDecision() {
    let arr= null;
    $('#pagination').pagination({
        dataSource: function (done) {
            ajaxCallGet("v1/public/quyet-dinh/all").then(result => {
                arr=result;
                sortDecision(arr)
                done(arr);
            });
        },
        pageSize: 10,
        autoHidePrevious: true,
        autoHideNext: true,
        callback: function (result, pagination) {
            console.log(result)
            if (result.length > 0) {
                let tmp = "";
                result.map(function (response, index) {
                    tmp += `
                 <tr>
                            <td><a href="thong-tin-quyet-dinh?id=${response.id}">${response.soQuyetDinh} </a></td>
                            <td>${response.trichYeu}
                            </td>
                            <td>${response.coQuanBanHanh.tenCoQUan} </td>
                            <td><span>${response.chucVu} ${response.nguoiKy}</span>
                                <span>Ngày ban hành: ${response.ngayBanHanh.split("-").reverse().join("/")}</span></td>
                            <td> <a href="thong-tin-quyet-dinh?id=${response.id}"><i class="fas fa-paperclip"></i></a></td>
                        </tr>
                `;

                });
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
    })
    searchLoaiQuyetDinh()

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

        $('#pagination').pagination({
            dataSource: function (done) {
                ajaxCallGet("v1/public/quyet-dinh/find-by-nhom-quyet-dinh?id=" + $("#dp-drop2").val()).then(data => {
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
                            <td><a href="thong-tin-quyet-dinh?id=${response.id}">${response.soQuyetDinh} </a></td>
                            <td>${response.trichYeu} </td>
                            <td>${response.coQuanBanHanh.tenCoQUan} </td>
                            <td><span>${response.chucVu} ${response.nguoiKy}</span>
                                <span>Ngày ban hành: ${response.ngayBanHanh.split("-").reverse().join("/")}</span></td>
                            <td> <a href=""><i class="fas fa-paperclip"></i></a></td>
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
