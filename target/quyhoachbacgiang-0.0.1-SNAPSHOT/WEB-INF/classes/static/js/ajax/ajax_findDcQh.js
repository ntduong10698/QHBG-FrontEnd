$(function () {
    setSelectHuyen();
    callDieuChinhQuyHoach().then(rs => {
        $(".table-bordered tbody").html(getDataTableDieuChinhQuyHoach(rs));
    }).catch(err => {
        console.log(err);
    })
})

function setSelectHuyen() {
    let view = '';
    ARR_HUYEN_TEXT.map((data, index) => {
        view += `<option value="${index + 1}">${data}</option>`;
    })
    $("#dp-drop7").html(view);
    $("#dp-drop7").val(1);
    $("#dp-drop7").select2().trigger('change');
}

function callDieuChinhQuyHoach() {
  let url = 'v1/public/quyet-dinh/thong-tin-dieu-chinh-quy-hoach/available';
  return ajaxCallGet(url);
}

function getDataTableDieuChinhQuyHoach(data) {
    let dataTable = ``;
    if (data.length > 0) {
        data.map(item => {
            dataTable += `<tr>
                <td>${item.viTri}</td>
                <td>Huyện ...</td>
                <td>${item.noiDung}</td>
                <td>${item.lyDo}</td>
                <td>${formatNumber(item.dienTich,',',',')} m<sup>2</sup></td>
                <td><a href="#">${item.quyetDinh.soQuyetDinh}</a></td>
            </tr>`
        })
    }
    return dataTable
}
