$(document).ready(function () {
    getHuyen();
    getLoaiDuAn();
    getTableDuAn();
    findCongTrinhDuAn()
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

function getTableDuAn() {
    ajaxCallGet("v1/public/cong-trinh-du-an/all").then(data => {
        console.log(data);
        let tmp = "";
        data.map(function (result, index) {
            result.tenCongTrinhDuAn = (result.tenCongTrinhDuAn !== null ? result.tenCongTrinhDuAn : "");
            result.diaDiem = (result.diaDiem !== null ? result.diaDiem : "");
            result.loaiCongTrinhDuAn = (result.loaiCongTrinhDuAn !== null ? result.loaiCongTrinhDuAn : "");
            result.tongDienTich = (result.tongDienTich !== null ? result.tongDienTich : "");
            result.huyen.tenHuyen = (result.huyen.tenHuyen !== null ? result.huyen.tenHuyen : "");
            result.canCuThuHoi = (result.canCuThuHoi !== null ? result.canCuThuHoi : "");
            tmp += `
             <tr>
                        <td>${index}</td>
                        <td>${result.tenCongTrinhDuAn}</td>
                        <td>${result.loaiCongTrinhDuAn.ten}</td>
                        <td>${result.tongDienTich}</td>
                        <td>${result.diaDiem}</td>
                        <td>${result.huyen.tenHuyen}</td>
                        <td>${result.canCuThuHoi}</td>
                        <td><span><span data-id="${result.id}"><i class="fas fa-plus"></i></span></span></td>
                    </tr>
            `;

        });
        $("#tableCongTrinhDuAn tbody").html(tmp);
    })
}

function findCongTrinhDuAn() {
    $("#clickSearchDuAn").click(function () {
        console.log()
        ajaxCallGet("v1/public/cong-trinh-du-an/filter?ten-cong-trinh=" + $("#nameProject").val() + "&dia-diem=" + $("#diaDiemDuAn").val() + "&loai-du-an=" + $("#dp-drop4").val() + "&huyen=" + $("#dp-drop3").val()).then(data => {
            console.log(data)
        })
    })

}