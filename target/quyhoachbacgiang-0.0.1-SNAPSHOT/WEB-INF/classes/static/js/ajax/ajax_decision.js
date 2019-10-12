function callFullTableDecision() {
    callTableDecision();
    callCoQuanBanHanh();
    callLoaiQuyetDinh();
    searchTextQuyetDinh();

}

function callTableDecision() {
    let tmp = "";
    ajaxCallGet("v1/public/quyet-dinh/all").then(result => {
        console.log(result)
        if (result.length > 0) {
            result.map(function (response, index) {
                tmp += `
                 <tr>
                            <td><a href="thong-tin-quyet-dinh?id=${response.id}">${response.soQuyetDinh} </a></td>
                            <td><a href="thong-tin-quyet-dinh?id=${response.id}">${response.trichYeu}</a>
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
    })
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
    })
}

function searchLoaiQuyetDinh() {
    $("#dp-drop2").change(function () {
        ajaxCallGet("v1/public/quyet-dinh/find-by-nhom-quyet-dinh?id=" + $("#dp-drop2").val()).then(data => {
            addDataAfterGet(data);
        });
    });
}

function addDataAfterGet(data) {
    let tmp = "";
    console.log(data)
    if (data.length > 0) {
        data.map(function (response, index) {
            tmp += `
                <tr>
                            <td><a href="thong-tin-quyet-dinh?id=${response.id}">${response.soQuyetDinh} </a></td>
                            <td><a href="thong-tin-quyet-dinh?id=${response.id}">${response.trichYeu}</a>
                            </td>
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
        if ($("#searchTextQD").val()!==""){
            if ($("#searchTextQD").val().match("^[a-zA-Z0-9]+$")) {
                ajaxCallGet("v1/public/quyet-dinh/search?option=" + valuee + "&text=" + $('#searchTextQD').val()).then(data => {

                    addDataAfterGet(data);

                });
            }else{
                alert("Chỉ chấp nhận kí tự thường, in hoa, không nhận chấp nhận số và kí tự đặc biệt")
            }
        } else{
            alert("Vui lòng nhập từ khóa tìm kiếm ")
        }

    })
}