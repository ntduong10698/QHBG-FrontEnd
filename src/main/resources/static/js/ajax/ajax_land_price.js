
function PhanPageLandprice(url) {
    if (url.indexOf("gia-dat-nong-nghiep") > 0) {
        callNongNghiep();
    } else if (url.indexOf("gia-dat-phi-nong-nghiep")) {
        callPhiNongNghiep();
    }else {
        console.log("lỗi")
    }
}