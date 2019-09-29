function callNongNghiep() {
    callAllPriceLand();
}
function callAllPriceLand() {
    $.ajax({
        type:  "GET",
        url: URL_API + "v1/public/gia-dat/gia-dat-nong-nghiep/all" ,
        dataType: "json",
        timeout:2000,
        success: function (response) {
            console.log(response)
        }
    });

}