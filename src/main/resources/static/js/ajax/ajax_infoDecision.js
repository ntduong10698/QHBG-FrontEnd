var idWed = window.location.href.split("=");
$(document).ready(function () {
    getDataInfoQuyetDinh();
    // getDataDieuChinhBoSung();
    getQuyetDinhLienQuan(idWed[idWed.length - 1]);
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
                                    <div><a href="${data.duongDanTep}" target="_blank"><i class="fa fa-paperclip"></i> Tải xuống  </a>
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
                                    <div><a href="" > </a></div>
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

function getQuyetDinhLienQuan(id) {
//     ajaxCallGet("v1/public/quyet-dinh/ho-so-kem-theo/find-by-quyet-dinh?id=" + id).then(data => {
//         console.log(data);
//         if (data.length > 0) {
//             let tmp = "";
//             data.map(function (result,index) {
//                 tmp += `
// <tr>
//                                 <td style="text-align:center;width:5%">${index+1}</td>
//                                 <td style="width:25%">Thôn Hòa Mục, xã Mỹ An, huyện Lục Ngạn</td>
//                                 <td style="width:30%">Điều chỉnh diện tích khoảng 1,98 ha đất (đất nuôi trồng
//                                     thủy sản khoảng 0,86 ha, đất trồng cây lâu năm khoảng 1,12 ha) sang đất cơ
//                                     sở sản xuất phi nông nghiệp
//                                 </td>
//                                 <td style="width:30%">Căn cứ công văn số 1388/UBNN-ĐT ngày 9/11/2017 của Chủ
//                                     tịch UBND tỉnh về việc cho phép thực hiện dự án đầu tư của công ty cổ phần
//                                     Clever
//                                 </td>
//                                 <td style="width:10%; text-align:center">198,000 m<sup class="sup-text">2</sup>
//                                 </td>
//                             </tr>
// `;
//             })
//
//         }
//     });
    ajaxCallGet("v1/public/quyet-dinh/thong-tin-dieu-chinh-quy-hoach/find-by-quyet-dinh?id=" + id).then(data => {
        console.log(data);
        if (data.length > 0) {
            let tmp = "";
            data.map(function (result, index) {
                tmp += `
<tr>
                                <td style="text-align:center;width:5%">${index + 1}</td>
                                <td style="width:25%">${result.viTri}</td>
                                <td style="width:30%">${result.noiDung}</td>
                                <td style="width:30%">${result.lyDo}</td>
                                <td style="width:10%; text-align:center">${formatNumber(result.dienTich, '.', '.')}<sup class="sup-text">2</sup>
                                </td>
                            </tr>
`;
            })
            $("#quyetDinhLienQuan thead").html("  <th>STT</th>\n" +
                "            <th>Vị trí, địa điểm</th>\n" +
                "            <th>Nội dung điều chỉnh, bổ sung</th>\n" +
                "            <th>Lý do điều chỉnh, bổ sung</th>\n" +
                "            <th>Diện tích</th>")

            $("#quyetDinhLienQuan tbody").html(tmp)
        } else {
            $("#quyetDinhLienQuan tbody").html("<tr><td colspan='13'>Không có dữ liệu để hiển thị</td></tr>");
        }
    });
    ajaxCallGet("v1/public/quyet-dinh/vi-tri-gia-dat-ap-dung/find-by-quyet-dinh?id=" + id).then(data => {
        console.log(data);
        if (data.length > 0) {
            let tmp = "";
            data.map(function (result, index) {
                tmp += `
<tr>
                                <td style="text-align:center;width:5%">${index + 1}</td>
                                <td style="width:25%">${result.viTri}</td>
                                <td style="width:30%">${result.moTa}</td>
                                <td style="width:30%">${formatNumber(result.giaDat, '.', '.')}</td>
                               
                                </td>
                            </tr>
`;
            })
            $("#quyetDinhLienQuan thead").html(" <th>STT</th>\n" +
                "                                <th>Vị trí, địa điểm</th>\n" +
                "                                <th>Mô tả</th>\n" +
                "                                <th>Diện tích</th>");
            $("#quyetDinhLienQuan tbody").html(tmp)
        } else {
            $("#quyetDinhLienQuan tbody").html("<tr><td colspan='13'>Không có dữ liệu để hiển thị</td></tr>");
        }
    });
}

