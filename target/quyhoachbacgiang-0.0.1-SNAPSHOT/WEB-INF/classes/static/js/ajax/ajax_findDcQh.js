$(function () {
    setSelectHuyen();
    pageAblePage(10);
    searchDcQuyHoach();
})

function setSelectHuyen() {
    let view = '<option value="0">Gõ để tìm kiếm</option>';
    ARR_HUYEN_TEXT.map((data, index) => {
        view += `<option value="${index + 1}">${data}</option>`;
    })
    $("#dp-drop7").html(view);
}

function callDieuChinhQuyHoach(page) {
  let url = `v1/public/quyet-dinh/thong-tin-dieu-chinh-quy-hoach/page?page=${page}`;
  return ajaxCallGet(url);
}

function getDataTableDieuChinhQuyHoach(data) {
    let dataTable = ``;
    if (data.length > 0) {
        data.map(item => {
            dataTable += `<tr>
                <td>${item.viTri}</td>
                <td>${item.huyen == null ? "Huyện ..." : item.huyen.tenHuyen}</td>
                <td>${item.noiDung}</td>
                <td>${item.lyDo}</td>
                <td>${formatNumber(item.dienTich,',',',')} m<sup>2</sup></td>
                <td><a target="_blank" href="${item.quyetDinh.duongDanTep}">${item.quyetDinh.soQuyetDinh}</a></td>
            </tr>`
        })
    }
    return dataTable
}

function setTableDieuChinhQuyHoach(page) {
    callDieuChinhQuyHoach(page).then(rs => {
        $(".table-bordered tbody").html(getDataTableDieuChinhQuyHoach(rs));
    }).catch(err => {
        console.log(err);
    })
}

function callSizePageDcQh(size) {
    let url = `v1/public/quyet-dinh/thong-tin-dieu-chinh-quy-hoach/count-page?size=${size}`;
    return ajaxCallGet(url);
}

function pageAblePage(size) {
    callSizePageDcQh(size).then(result => {
        (function () {
            var container = $('#pagination');
            container.pagination({
                dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
                locator: 'items',
                totalNumber: result,
                pageSize: 1,
                showPageNumbers: true,
                showPrevious: true,
                showNext: true,
                showNavigator: true,
                showFirstOnEllipsisShow: true,
                showLastOnEllipsisShow: true,
                callback: function (response, pagination) {
                    console.log(pagination.pageNumber); // khi click sẽ đọc ra số trang click
                    setTableDieuChinhQuyHoach(pagination.pageNumber);
                }
            })
        })();
    }).catch(err => {
        console.log(err);
    })
}

function callSearchDcQuyHoach(viTri, huyenId, soQuyetDinh) {
    let url = `v1/public/quyet-dinh/thong-tin-dieu-chinh-quy-hoach/filter?viTri=${viTri}&huyen-id=${huyenId}&so-quyet-dinh=${soQuyetDinh.toUpperCase()}`;
    return ajaxCallGet(url);
}

function searchDcQuyHoach() {
    $("#searchDcQH").click(function () {
        let viTri = $("#inputViTri").val();
        let huyenId = $("#dp-drop7").val();
        let soQuyetDinh = $("#inputQuyetDinh").val();
        viTri = viTri == null ? '' : viTri;
        soQuyetDinh = soQuyetDinh == null ? '' : soQuyetDinh;
        console.log(viTri+" "+huyenId+" "+soQuyetDinh);
        if (viTri === '' && huyenId == 0 && soQuyetDinh === '') {
            $("#pagination").css("display","block");
            pageAblePage(10);
        } else {
            $("#pagination").css("display","none");
            callSearchDcQuyHoach(viTri, huyenId, soQuyetDinh).then(data => {
                $(".table-bordered tbody").html(getDataTableDieuChinhQuyHoach(data));
            }).catch(err => {
                console.log(err);
            })
        }
        return false;
    })
}