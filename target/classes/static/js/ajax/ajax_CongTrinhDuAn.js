$(document).ready(function () {
    getHuyen();
    getLoaiDuAn();

});

function getHuyen() {
    let tmp = "";
    ajaxCallGet("v1/public/huyen/all").then(data => {
        data.map(function (result) {
            tmp += `
         <option value="${result.idHuyen}">
         ${result.tenHuyen}
                            </option>
         `;
        })
        $("#dp-drop3").append(tmp)
        console.log(data);
    });
}

function getLoaiDuAn() {
    let tmp = "";
    ajaxCallGet("v1/public/loai_dat/loai-cong-trinh-du-an/all").then(data => {
        data.map(function (result) {
            tmp += `
        <option value="${result.id}">${result.ten}</option>
        `;
        });

        $("#dp-drop4").append(tmp)
    })
}