// const URL_API = "http://123.31.45.240:8480/admin/api/";
var url_href = window.location.origin+"/admin_qhsdd/";
// var url_href = "http://localhost:9987/";
const URL_API = url_href + "api/";
// const URL_API = url_href + "api/";
const URL_FILE = url_href + "resources/file/media/img/";
const tokenHeader_value = "";
const QUYET_DINH_QH = ['19/NQ-CP','130/QĐ-UBND','152/QĐ-UBND','131/QĐ-UBND','155/QĐ-UBND','154/QĐ-UBND','132/QĐ-UBND','147/QĐ-UBND','129/QĐ-UBND','146/QĐ-UBND','153/QĐ-UBND'];
const QUYET_DINH_KH_2015 = [null,'59/QĐ-UBND','58/QĐ-UBND','70/QĐ-UBND','69/QĐ-UBND','67/QĐ-UBND','57/QĐ-UBND','72/QĐ-UBND','66/QĐ-UBND','68/QĐ-UBND','71/QĐ-UBND'];
const QUYET_DINH_KH_2016 = [null,'69/QĐ-UBND','94/QĐ-UBND','93/QĐ-UBND','65/QĐ-UBND','68/QĐ-UBND','100/QĐ-UBND','92/QĐ-UBND','67/QĐ-UBND','66/QĐ-UBND','101/QĐ-UBND'];
const QUYET_DINH_KH_2017 = [null,'53/QĐ-UBND','55/QĐ-UBND','52/QĐ-UBND','54/QĐ-UBND','72/QĐ-UBND','57/QĐ-UBND','71/QĐ-UBND','51/QĐ-UBND','56/QĐ-UBND','80/QĐ-UBND'];
const QUYET_DINH_KH_2018 = [null,'102/QĐ-UBND','106/QĐ-UBND','103/QĐ-UBND','105/QĐ-UBND','100/QĐ-UBND','104/QĐ-UBND','112/QĐ-UBND','113/QĐ-UBND','101/QĐ-UBND','121/QĐ-UBND'];
const QUYET_DINH_KH_2019 = ['40/NQ-CP','76/QĐ-UBND','162/QĐ-UBND','77/QĐ-UBND','158/QĐ-UBND','99/QĐ-UBND','177/QĐ-UBND','107/QĐ-UBND','159/QĐ-UBND','82/QĐ-UBND','178/QĐ-UBND'];
const ARR_HUYEN = ['TPBG', 'Hiep_Hoa', 'Yen_Dung', 'Luc_Nam', 'Son_Dong', 'Lang_Giang', 'Viet_Yen', 'Tan_Yen', 'Luc_Ngan', 'Yen_The'];
const ARR_HUYEN_TEXT = ['TP. Bắc Giang', 'Hiệp Hòa', 'Yên Dũng', 'Lục Nam', 'Sơn Động', 'Lạng Giang', 'Việt Yên', 'Tân Yên', 'Lục Ngạn', 'Yên Thế'];
const MA_DAT = ['NPP: Đất nông nghiệp','SXN: Đất sản xuất nông nghiệp','CHN: Đất trồng cây hằng năm','LUA: Đất trồng lúa','LUC: Đất chuyên trồng lúa nước'
,'LUK: Đất trồng lúa nước còn lại','LUN: Đất trồng lúa nương','COC: Đất cỏ dùng vào chăn nuôi','HNK: Đất trồng cây hằng năm khác'
,'BHK: Đất trồng cây hằng năm khác','NHK: Đất nương rẫy trồng cây hằng năm khác','CLN: Đất trồng cây lâu năm','LNC: Đất trồng cây công nghiệp lâu năm'
,'LNQ: Đất trồng cây ăn quả lâu năm','LNK: Đất trồng cây lâu năm khác','LNP: Đất lâm nghiệp','RSX: Đất rừng sản xuất'
,'RSN: Đất có rừng tự nhiên sản xuất','RST: Đất có rừng trồng sản xuất','RSK: Đất khoanh nuôi phục hồi rừng sản xuất'
,'RSM: Đất trồng rừng sản xuất','RPH: Đất rừng phòng hộ','RPN: Đất có rừng tự nhiên phòng hộ','RPT: Đất có rừng trồng phòng hộ'
,'RPK: Đất khoanh nuôi phục hồi rừng phòng hộ','RPM: Đất trồng rừng phòng hộ','RDD: Đất rừng đặc dụng','RDN: Đất có rừng tự nhiên đặc dụng'
,'RDT: Đất có rừng trồng đặc dụng','RDK: Đất khoanh nuôi phụ hồi rừng đặc dụng','RDM: Đất trồng rừng đặc dụng','NTS: Đất nuôi trồng thủy sản'
,'TSL: Đất nuôi trồng thủy sản nước lợ; mặn','TSN: Đất chuyên nuôi trồng thủy sản nước ngọt','LMU: Đất làm muối'
,'NKH: Đất nông nghiệp khác','PNN: Đất phi nông nghiệp','OTC: Đất ở', 'ONT: Đất ở tại nông thôn','ODT: Đất ở tại đô thị'
,'CDG: Đất chuyên dùng','CTS: Đất trụ sở cơ quan; công trình sự nghiệp','TSC: Đất trụ sở cơ quan; công trình','DTS: Đất xây dựng trụ sở của tổ chức sự nghiệp'
,'TSK: Đất trụ sở khác','CQP: Đất quốc phòng', 'CAN: Đất an ninh','CSK: Đất sản xuất; kinh doanh phi nông nghiệp','SKK: Đất khu công nghiệp'
,'SKC: Đất cơ sở sản xuất; kinh doanh','SKS: Đất cho hoạt động khoáng sản','SKX: Đất sản xuất vật liệu xây dựng; gốm sứ'
,'CCC: Đất có mục đính công cộng','DGT: Đất giao thông','TMD: Đất thương mại; dịch vụ','TMD: Đất thương mại; dịch vụ'
,'DTL: Đất thủy lợi','DNL: Đất công trình năng lượng','DBV: Đất công trình bưu chính viễn thông','DSH: Đất sinh hoạt cộng đồng'
,'DVH: Đất cơ sở văn hóa','DKV: Đất khu vui chơi; giải trí công cộng','DYT: Đất cơ sở y tế','DGD: Đất cơ sở giáo dục-đào tạo'
,'DTT: Đất cơ sở thể dục-thể thao','DKH: Đất cơ sở nghiên cứu khoa học','DXH: Đất cơ sở dịch vụ về xã hội','DCH: Đất chợ'
,'DDT: Đất có di tích; danh thắng', 'DRA: Đất bãi  thải; xử lý chất thải','TTN: Đất tôn giáo; tín ngưỡng','TON: Đất tôn giáo'
,'TIN: Đất tín ngưỡng','NTD: Đất nghĩa trang; nghĩa địa','SMN: Đất sông suối và mặt nước chuyên dùng','SON: Đất sông; ngoài; kênh; rạch; suối'
,'MNC: Đất có mặt nước chuyên dùng','PNK: Đất phi nông nghiệp khác','CSD: Đất bằng chưa sử dụng','BCS: Đất đôi núi chưa sử dụng'
,'NCS: Núi đá không có rừng cây','MVB: Đất có mặt nước ver biển', 'MVT: Đất mặt nước ven biển nuôi trồng thủy sản'
,'MVR: Đất mặt nước ven biển có rừng ngập mặn','MVK: Đất mặt nước ven biển có mục đích khác'];
var passUser=null;
var emailUserr=null;
function viewSrcFile(src) {
    if(src.indexOf("http") === 0) return src;
    return URL_FILE + src;
}
function mucDich(color) {
    var int = parseInt(color, 10);
    switch (int) {
        case 1:
            return 'NPP: Đất nông nghiệp';
        case 2:
            return 'SXN: Đất sản xuất nông nghiệp';
        case 3:
            return 'CHN: Đất trồng cây hằng năm';
        case 4:
            return 'LUA: Đất trồng lúa';
        case 5:
            return 'LUC: Đất chuyên trồng lúa nước';
        case 6:
            return 'LUK: Đất trồng lúa nước còn lại';
        case 7:
            return 'LUN: Đất trồng lúa nương';
        case 8:
            return 'COC: Đất cỏ dùng vào chăn nuôi';
        case 11:
            return 'HNK: Đất trồng cây hằng năm khác';
        case 12:
            return 'BHK: Đất trồng cây hằng năm khác';
        case 13:
            return 'NHK: Đất nương rẫy trồng cây hằng năm khác';
        case 14:
            return 'CLN: Đất trồng cây lâu năm';
        case 15:
            return 'LNC: Đất trồng cây công nghiệp lâu năm';
        case 16:
            return 'LNQ: Đất trồng cây ăn quả lâu năm';
        case 17:
            return 'LNK: Đất trồng cây lâu năm khác';
        case 18:
            return 'LNP: Đất lâm nghiệp';
        case 19:
            return 'RSX: Đất rừng sản xuất';
        case 20:
            return 'RSN: Đất có rừng tự nhiên sản xuất';
        case 21:
            return 'RST: Đất có rừng trồng sản xuất';
        case 22:
            return 'RSK: Đất khoanh nuôi phục hồi rừng sản xuất';
        case 23:
            return 'RSM: Đất trồng rừng sản xuất';
        case 24:
            return 'RPH: Đất rừng phòng hộ';
        case 25:
            return 'RPN: Đất có rừng tự nhiên phòng hộ';
        case 26:
            return 'RPT: Đất có rừng trồng phòng hộ';
        case 27:
            return 'RPK: Đất khoanh nuôi phục hồi rừng phòng hộ';
        case 28:
            return 'RPM: Đất trồng rừng phòng hộ';
        case 29:
            return 'RDD: Đất rừng đặc dụng';
        case 30:
            return 'RDN: Đất có rừng tự nhiên đặc dụng';
        case 31:
            return 'RDT: Đất có rừng trồng đặc dụng';
        case 32:
            return 'RDK: Đất khoanh nuôi phụ hồi rừng đặc dụng';
        case 33:
            return 'RDM: Đất trồng rừng đặc dụng';
        case 34:
            return 'NTS: Đất nuôi trồng thủy sản';
        case 35:
            return 'TSL: Đất nuôi trồng thủy sản nước lợ; mặn';
        case 36:
            return 'TSN: Đất chuyên nuôi trồng thủy sản nước ngọt';
        case 37:
            return 'LMU: Đất làm muối';
        case 38:
            return 'NKH: Đất nông nghiệp khác';
        case 39:
            return 'PNN: Đất phi nông nghiệp';
        case 40:
            return 'OTC: Đất ở';
        case 41:
            return 'ONT: Đất ở tại nông thôn';
        case 42:
            return 'ODT: Đất ở tại đô thị';
        case 43:
            return 'CDG: Đất chuyên dùng';
        case 44:
            return 'CTS: Đất trụ sở cơ quan; công trình sự nghiệp';
        case 45:
            return 'TSC: Đất trụ sở cơ quan; công trình';
        case 46:
            return 'DTS: Đất xây dựng trụ sở của tổ chức sự nghiệp';
        case 48:
            return 'TSK: Đất trụ sở khác';
        case 52:
            return 'CQP: Đất quốc phòng';
        case 53:
            return 'CAN: Đất an ninh';
        case 54:
            return 'CSK: Đất sản xuất; kinh doanh phi nông nghiệp';
        case 55:
            return 'SKK: Đất khu công nghiệp';
        case 56:
            return 'SKC: Đất cơ sở sản xuất; kinh doanh';
        case 57:
            return 'SKS: Đất cho hoạt động khoáng sản';
        case 58:
            return 'SKX: Đất sản xuất vật liệu xây dựng; gốm sứ';
        case 59:
            return 'CCC: Đất có mục đính công cộng';
        case 60:
            return 'DGT: Đất giao thông';
        case 61:
            return 'TMD: Đất thương mại; dịch vụ';
        case 62:
            return 'TMD: Đất thương mại; dịch vụ';
        case 63:
            return 'DTL: Đất thủy lợi';
        case 66:
            return 'DNL: Đất công trình năng lượng';
        case 67:
            return 'DBV: Đất công trình bưu chính viễn thông';
        case 68:
            return 'DSH: Đất sinh hoạt cộng đồng';
        case 69:
            return 'DVH: Đất cơ sở văn hóa';
        case 70:
            return 'DKV: Đất khu vui chơi; giải trí công cộng';
        case 72:
            return 'DYT: Đất cơ sở y tế';
        case 75:
            return 'DGD: Đất cơ sở giáo dục-đào tạo';
        case 78:
            return 'DTT: Đất cơ sở thể dục-thể thao';
        case 79:
            return 'DKH: Đất cơ sở nghiên cứu khoa học';
        case 80:
            return 'DXH: Đất cơ sở dịch vụ về xã hội';
        case 81:
            return 'DCH: Đất chợ';
        case 84:
            return 'DDT: Đất có di tích; danh thắng';
        case 85:
            return 'DRA: Đất bãi  thải; xử lý chất thải';
        case 86:
            return 'TTN: Đất tôn giáo; tín ngưỡng';
        case 87:
            return 'TON: Đất tôn giáo';
        case 88:
            return 'TIN: Đất tín ngưỡng';
        case 89:
            return 'NTD: Đất nghĩa trang; nghĩa địa';
        case 90:
            return 'SMN: Đất sông suối và mặt nước chuyên dùng';
        case 91:
            return 'SON: Đất sông; ngoài; kênh; rạch; suối';
        case 92:
            return 'MNC: Đất có mặt nước chuyên dùng';
        case 93:
            return 'PNK: Đất phi nông nghiệp khác';
        case 98:
            return 'CSD: Đất bằng chưa sử dụng';
        case 99:
            return 'BCS: Đất đôi núi chưa sử dụng';
        case 100:
            return 'NCS: Núi đá không có rừng cây';
        case 101:
            return 'MVB: Đất có mặt nước ver biển';
        case 102:
            return 'MVT: Đất mặt nước ven biển nuôi trồng thủy sản';
        case 103:
            return 'MVR: Đất mặt nước ven biển có rừng ngập mặn';
        case 104:
            return 'MVK: Đất mặt nước ven biển có mục đích khác';
        default:
            return 'CSD: Nhóm đất chưa sử dụng';
    }

}

$(document).ready(function () {

    // Click Account Header
    $("a.icon.iconacc").click(function () {
        $(".m-loginsignin").addClass("show")
        $(".d-login").addClass("show")
    });
    $("a.out").click(function () {
        $(".m-loginsignin").removeClass("show")
        $(".d-signin").removeClass("show")
    });
    $(".licsi").click(function () {
        $(".d-login").removeClass("show")
        $(".d-signin").addClass("show")
    });
    $(".sibcl").click(function (e) {
        $(".d-login").addClass("show")
        $(".d-signin").removeClass("show")
    });
    $(".icon.iconlogout").click(function () {
        $(this).removeClass("show");
        $(".user-name").removeClass("show");
        $(".icon.iconacc").removeClass("hide");
    })
    // Scroll Fixtop header
    // $(window).scroll(function () {
    //     var scroll = $(this).scrollTop();
    //     if (scroll > 30) {
    //         $("header").css({
    //             'position': 'fixed',
    //             'top': '0',
    //             'left': '0',
    //             'z-index': '1004',
    //             'box-shadow': '0px 0px 5px 0px rgba(0,0,0,0.75)'
    //         });
    //     } else {
    //         $("header").css({
    //             'position': 'static',
    //             'box-shadow': 'none'
    //         });
    //     }
    // });
    $('.alert').css({'opacity': '0', 'visibility': 'hidden'});

    let path = window.location.pathname;
    testSite(path, '/ban-do-gia-da', 'Bản đồ giá đất');
    testSite(path, '/gia-dat-nong-nghiep', 'Giá đất nông nghiệp');
    testSite(path, '/gia-dat-phi-nong-nghiep', 'Giá đất phi nông nghiệp');
    testSite(path, '/quyet-dinh', 'Quyết định');
    testSite(path, '/he-so-dieu-chinh', 'Hệ số điều chỉnh');
    testSite(path, '/quy-hoach', 'Quy hoạch');
    testSite(path, '/tra-cuu-quy-hoach', 'Tra cứu quy hoạch');
    testSite(path, '/tra-cuu-dieu-chinh-quy-hoach', 'Tra cứu điều chỉnh quy hoạch');
    testSite(path, '/ke-hoach', 'Kế hoạch');
    testSite(path, '/tra-cuu-ke-hoach', 'Tra cứu kế hoạch');
    testSite(path, '/du-an', 'Công trình dự án');
    testSite(path, '/huong-dan', 'Hướng dẫn');
    testSite(path, '/gop-y', 'Góp ý');
});

function testSite(path,site, siteView) {
    if (path.indexOf(site) > -1) {
        $(".site .site-sub").text(siteView);
    }
}

function formatNumber(nStr, decSeperate, groupSeperate) {
    nStr += '';
    x = nStr.split(decSeperate);
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
    }
    return x1 + x2;
}

function reverseStringNam(text) {
    return  text.split("-").reverse().join("/");
}

function convertToRoman(num) {
    let roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let str = '';
    for (let i of Object.keys(roman)) {
        let q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }
    return str;
}

function checkCap(str) {
    let count = countPoint(str);
    let symbol = "";
    if (count === 1)
        symbol = ' ';
    else if (count === 2)
        symbol = "&nbsp;&nbsp;-";
    else if (count === 3)
        symbol = "&nbsp;&nbsp;&nbsp;&nbsp;+    ";
    return symbol;
}

function viewCap(str) {
    let count = countPoint(str);
    return count === 1? str.split(".")[1].trim(): '';
}

function viewLoadingGif() {
    $("#loading-gif").css("display","block");
}

function hideLoadingGif() {
    setTimeout(function () {
        $("#loading-gif").css("display","none");
    }, 200)
}

function exportExcel(tableSelect, fileNameExport) {
    $("th,td").addClass("tableexport-string");
    let instance = $(`#${tableSelect}`).tableExport({
        formats: ['xlsx'],
        fileName: fileNameExport,
        exportButtons: false
    });
    let exportData = instance.getExportData()[tableSelect]['xlsx'];
    instance.export2file(exportData.data, exportData.mimeType, fileNameExport, exportData.fileExtension);
    $("th,td").removeClass("tableexport-string");
}

function testInput(str, strReg) {
    return str.match(strReg); //tra ve null nếu không trùng
}

function viewTextXa(xa) {
    return xa.indexOf("TT") > -1 ? "TT "+xa.split("TT")[1]: xa;
}

function viewAlter(type, mess) {
    let typeAlter = '';
    let note = '';
    switch (type) {
        case 1:
            typeAlter = 'alert-success';
            note = 'Thành công';
            break;
        case 2:
            typeAlter = 'alert-info';
            note = 'Thông báo';
            break;
        case 3:
            typeAlter = 'alert-warning';
            note = 'Cảnh báo';
            break;
        case 4:
            typeAlter = 'alert-danger';
            note = 'Lỗi';
            break;
        default:
            typeAlter = 'alert-info';
            note = 'Thông báo';
            break;
    }
    $(".view-alert").html(`<div class="alert alert-dismissible ${typeAlter}" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                      <strong class="view-animation">${note + '!'}</strong> ${mess}.</div>`);
    setTimeout(function () {
        $(".view-alert").html("");
    }, 5000)
}

function formatDienTich(dienTich) {
    return formatNumber(dienTich, '.', ',');
}