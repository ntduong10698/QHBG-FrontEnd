$(function () {
    setSelectHuyen();
    pageAblePage(10);
    searchDcQuyHoach();
})

function setSelectHuyen() {
    let view = '<option value="0">Gõ để tìm kiếm</option>';
    callHuyen().then(data1 => {
        data1.map((data, index) => {
            view += `<option value="${data.idHuyen}">${data.tenHuyen}</option>`;
        })
        $("#dp-drop7").html(view);
    }).catch(err => {
        console.log(err);
    })
}

function callDieuChinhQuyHoach(page) {
  let url = `v1/public/quyet-dinh/thong-tin-dieu-chinh-quy-hoach/page?page=${page}`;
  return ajaxCallGet(url);
}

function getDataTableDieuChinhQuyHoach(data, pageNumber) {
    let dataTable = ``;
    let stt = (pageNumber-1)*10 + 1;
    if (data.length > 0) {
        data.map((item, index) => {
            dataTable += `<tr>
                <td>${item.thuTuUuTien}</td>
                <td>${item.viTri}</td>
                <td>${item.huyen == null ? "Huyện ..." : item.huyen.tenHuyen}</td>
                <td>${item.noiDung}</td>
                <td>${item.lyDo}</td>
                <td>${item.dienTich/10000 > 1 ? formatNumber(item.dienTich/10000,',',',') : item.dienTich/10000} (ha)</td>
                <td>${item.quyetDinh !== null ? `<a target="_blank" href="${viewSrcFile(item.quyetDinh.duongDanTep)}">${item.quyetDinh.soQuyetDinh}</a>`: ''}</td>
                <td style="text-align: center;">${item.quyetDinh !== null ? reverseStringNam(item.quyetDinh.ngayBanHanh) : ''}</td>
            </tr>`
        })
    }
    hideLoadingGif();
    $("#exportExel a").click(function () {
        exportExcel("tableExport", "DieuChinhQuyHoach");
        return false;
    })
    return dataTable
}

function setTableDieuChinhQuyHoach(page) {
    callDieuChinhQuyHoach(page).then(rs => {
        $(".table-bordered tbody").html(getDataTableDieuChinhQuyHoach(rs,page));
    }).catch(err => {
        console.log(err);
    })
}

function callSizePageDcQh(size) {
    let url = `v1/public/quyet-dinh/thong-tin-dieu-chinh-quy-hoach/count-page?size=${size}`;
    return ajaxCallGet(url);
}

function pageAblePage(size) {
    viewLoadingGif();
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
                // showNavigator: true,
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
    let url = `v1/public/quyet-dinh/thong-tin-dieu-chinh-quy-hoach/filter?vi-tri=${viTri}&huyen-id=${huyenId}&so-quyet-dinh=${soQuyetDinh.toUpperCase()}`;
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
            // $("#pagination").css("display","none");
            viewLoadingGif();
            callSearchDcQuyHoach(viTri, huyenId, soQuyetDinh).then(data1 => {
                console.log(data1.length);
                (function () {
                    var container = $('#pagination');
                    container.pagination({
                        dataSource: data1,
                        locator: 'items',
                        totalNumber: data1.length,
                        pageSize: 10,
                        showPageNumbers: true,
                        showPrevious: true,
                        showNext: true,
                        // showNavigator: true,
                        showFirstOnEllipsisShow: true,
                        showLastOnEllipsisShow: true,
                        callback: function (response, pagination) {
                            $(".table-bordered tbody").html(getDataTableDieuChinhQuyHoach(response, pagination.pageNumber));
                        }
                    })
                })();
            }).catch(err => {
                console.log(err);
            })
        }
        return false;
    })
}
