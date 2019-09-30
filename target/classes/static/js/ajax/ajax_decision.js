function callFullTableDecision() {
    callTableDecision()
}

function callTableDecision() {
    let tmp = "";
    $.ajax({
        type: "GET",
        url: URL_API + "v1/public/quyet-dinh/all",
        dataType: "json",
        timeout: 2000,
        success: function (result) {
            result.map(function (response,index) {
                tmp += `
             <tr>
                        <td><a href="#">${response.soQuyetDinh} </a></td>
                        <td><a href="#">${response.trichYeu}</a>
                        </td>
                        <td>${response.coQuanBanHanh.tenCoQUan} </td>
                        <td><span>${response.chucVu} ${response.nguoiKy}</span>
                            <span>Ngày ban hành: ${response.ngayBanHanh.reverse().join("/")}</span></td>
                        <td> <a href="#"><i class="fas fa-paperclip"></i></a></td>
                    </tr>
            `;
            });
            $("#tableDecision tbody").html(tmp);
        }

    });

}