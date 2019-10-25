<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="resources/css/decision.css">
<link rel="stylesheet" href="resources/css/project.css">
<link rel="stylesheet" href="resources/css/landPrice.css">
<script src="resources/js/ajax/ajax_CongTrinhDuAn.js"></script>
<main>
    <section class="dp-filter p-project">
        <div class="dpfilter-wp">
            <div class="dpfilter-ct">
                <div class="dpfc-item dpcf-fitem ">
                    <span>Huyện:</span>
                    <div class="pp-select">
                        <select id="dp-drop3" class="pp-drop">
                            <option value="0">--- Tất cả ---</option>
                        </select>
                    </div>
                </div>
                <div class="dpfc-item dpcf-fitem">
                    <span>Loại dự án</span>
                    <div class="pp-select">
                        <select id="dp-drop4" class="pp-drop">
                        </select>
                    </div>
                </div>
                <div class="dpfc-item dpcf-fitem">
                    <span>Tên dự án:</span>
                    <input type="text" id="nameProject" placeholder="Nhập từ khóa tìm kiếm...">
                </div>
                <div class="dpfc-item dpcf-fitem">
                    <span>Địa điểm:</span>
                    <input type="text" id="diaDiemDuAn" placeholder="Nhập từ khóa tìm kiếm...">
                </div>
                <div class="dpfc-item dpcf-bt">
                    <a id="clickSearchDuAn"><img src="resources/img/searchbt.png" alt=""></a>
                </div>
                <div class="dpfc-item dpcf-bt" id="exportExel">
                    <a href="#"><img src="resources/img/xls.png" alt=""></a>
                </div>
            </div>
        </div>
    </section>
    <section class="pp-table">
        <div class="container" style="background: white;">
            <div class="row" id="pagination_CongTrinh">
                <div class="tablep-cap">
                    <span>Danh mục công trình dự án</span>
                </div>
                <table class="table table-hover table-bordered" id="tableCongTrinhDuAn">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Dự án, công trình</th>
                        <th>Loại dự án</th>
                        <th>Tổng diện tích (ha)</th>
                        <th>Địa điểm</th>
                        <th>Thuộc huyện</th>
                        <th>Căn cứ thu hồi, CMĐ</th>
                        <th>Chi tiết</th>
                    </tr>
                    </thead>
                    <tbody>



                    </tbody>
                </table>

            </div>
        </div>
    </section>
    <section class="block-price-bottom " id="block-price-bottom">

    </section>
</main>
<!-- Plugin Select2 Js -->
<script src="resources/js/select2.min.js"></script>
<script src="resources/js/project.js"></script>