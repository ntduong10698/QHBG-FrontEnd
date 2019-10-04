// viet ham chung

//search change input ban gia dat
function searchChangeInputLandPrice(arrData, textFind) {
    return arrData.filter(data => data.tenBang.indexOf(textFind) > -1);
}
//end search change input ban gia dat

//call bang gia dat theo nhom dat theo checkLandPrice
function callBangGiaDat(checkLandPrice) {
    // checkLandPrice in landPrice.js
    let url = `v1/public/gia-dat/bang-gia-dat/find-by-nhom-gia-dat?id=${checkLandPrice}`;
    return ajaxCallGet(url);
}
//end call bang gia dat theo nhom dat

//call Xa trong Huyen
function callXa(idHuyen) {
    let url = `v1/public/xa/find-by-huyen?huyen=${idHuyen}`;
    return ajaxCallGet(url);
}
//end call Xa trong Huyen