var idWed = window.location.href.split("=");
$(document).ready(function () {
    getDataInfoQuyetDinh();
    // getDataDieuChinhBoSung();
});

function getDataInfoQuyetDinh() {

    ajaxCallGet("v1/public/quyet-dinh/find-by-id?id=" + idWed[idWed.length - 1]).then(data => {
        console.log(data);
        if (data !== null) {
            let tmp = "";
            if (data.duongDanTep !== null) {
                tmp = `
 <tr>
                                <td class="dttd-title">Tiêu đề</td>
                                <td colspan="3" class="dttd-tc">${data.tieuDe}</td>
                            </tr>
                            <tr>
                                <td class="dttd-title">Số quyết định</td>
                                <td colspan="3">${data.soQuyetDinh}</td>
                            </tr>
                            <tr>
                                <td class="dttd-title">Trích yếu</td>
                                <td colspan="3">${data.trichYeu}</td>
                            </tr>
                            <tr>
                                <td class="dttd-title">Cơ quan ban hành</td>
                                <td colspan="3">${data.coQuanBanHanh.tenCoQUan}</td>
                            </tr>
                             <tr>
                                <td class="dttd-title">Ngày ban hành</td>
                                <td colspan="3">${data.ngayBanHanh.split("-").reverse().join("/")}</td>
                            </tr>
                            
                            <tr>
                                <td class="dttd-title"> Người ký</td>
                                <td>${data.nguoiKy}</td>
                                <td class="dttd-stitle">Chức vụ</td>
                                <td>${data.chucVu}</td>
                            </tr>
                            <tr>
                                <td class="dttd-title">Tài liệu kèm theo</td>
                                <td colspan="3" class="">
                                    <div><a href="${data.duongDanTep}"><i class="fa fa-paperclip"></i> Tải xuống  </a>
                                    </div>
                                </td>
                            </tr>
`;
            } else {
                tmp = `
 <tr>
                                <td class="dttd-title">Tiêu đề</td>
                                <td colspan="3" class="dttd-tc">${data.tieuDe}</td>
                            </tr>
                            <tr>
                                <td class="dttd-title">Số quyết định</td>
                                <td colspan="3">${data.soQuyetDinh}</td>
                            </tr>
                            <tr>
                                <td class="dttd-title">Trích yếu</td>
                                <td colspan="3">${data.trichYeu}</td>
                            </tr>
                            <tr>
                                <td class="dttd-title">Cơ quan ban hành</td>
                                <td colspan="3">${data.coQuanBanHanh.tenCoQUan}</td>
                            </tr>
                              <tr>
                                <td class="dttd-title">Ngày ban hành</td>
                                <td colspan="3">${data.ngayBanHanh.split("-").reverse().join("/")}</td>
                            </tr>
                            <tr>
                                <td class="dttd-title"> Người ký</td>
                                <td>${data.nguoiKy}</td>
                                <td class="dttd-stitle">Chức vụ</td>
                                <td>${data.chucVu}</td>
                            </tr>
                            <tr>
                                <td class="dttd-title">Tài liệu kèm theo</td>
                                <td colspan="3" class="">
                                    <div><a href=""> </a>
                                    </div>
                                </td>
                            </tr>
`;
            }
            $("#tableInfoDecesion tbody").html(tmp);
        } else {
            $("#tableInfoDecesion tbody").html("<tr><td>Không có dữ liệu để hiển thị</td></tr>");
        }


    });
}

