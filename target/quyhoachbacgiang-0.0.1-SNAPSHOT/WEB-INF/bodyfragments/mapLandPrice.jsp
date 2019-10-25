<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="https://js.arcgis.com/4.6/esri/css/main.css">
<script src="https://js.arcgis.com/4.6/"></script>
<link rel="stylesheet" href="resources/css/map.css">
<link rel="stylesheet" href="resources/css/map_land_price.css">
<script src="resources/js/ajax/ajax_map_land_price.js"></script>
<section class="tbdetailf">
    <div class="tbdf-bg"></div>
    <div class="tbdf-wp">
        <div class="tbdfimg">
            <img src="resources/img/closeicon.png" alt="">
        </div>
        <div class="tbbwp" id="tableInfoSoild">
            <div class="tableBangGiaDat9">
                <%--                <div class="table-wp">--%>
                <%--                    <div class="tablep-cap">--%>
                <%--                        <span>HIỆN TRẠNG SỬ DỤNG ĐẤT THÀNH PHỐ BẮC GIANG NĂM 2016</span>--%>
                <%--                    </div>--%>
                <%--                    <table class="table table-bordered">--%>
                <%--                        <thead>--%>
                <%--                        <tr>--%>
                <%--                            <th rowspan="2">Chỉ tiêu</th>--%>
                <%--                            <th rowspan="2">Mã</th>--%>
                <%--                            <th rowspan="2">Diện tích</th>--%>
                <%--                            <th rowspan="2">Cơ cấu</th>--%>
                <%--                            <th colspan="10">Phân theo đơn vị hành chính</th>--%>
                <%--                        </tr>--%>
                <%--                        <tr>--%>
                <%--                            <th>TP.Bắc Giang</th>--%>
                <%--                            <th>Huyện Hiệp Hòa</th>--%>
                <%--                            <th>Huyện Yên Dũng</th>--%>
                <%--                            <th>Huyện Lục Nam</th>--%>
                <%--                            <th>Huyện Sơn Đông</th>--%>
                <%--                            <th>Huyện Lạng Giang</th>--%>
                <%--                            <th>Huyện Việt Yên</th>--%>
                <%--                            <th>Huyện Tân Yên</th>--%>
                <%--                            <th>Huyện Lục Ngạn</th>--%>
                <%--                            <th>Huyện Yên Thế</th>--%>
                <%--                        </tr>--%>
                <%--                        </thead>--%>
                <%--                        <tbody>--%>
                <%--                        <tr>--%>
                <%--                            <td>Đất chuyên trồng lúa nước</td>--%>
                <%--                            <td>LUC</td>--%>
                <%--                            <td>2072.85</td>--%>
                <%--                            <td>81.09</td>--%>
                <%--                            <td>0</td>--%>
                <%--                            <td>272.44</td>--%>
                <%--                            <td>72.12</td>--%>
                <%--                            <td>0.15</td>--%>
                <%--                            <td>0</td>--%>
                <%--                            <td>54.05</td>--%>
                <%--                            <td>0.89</td>--%>
                <%--                            <td>0.03</td>--%>
                <%--                            <td>49.05</td>--%>
                <%--                            <td>37.91</td>--%>
                <%--                        </tr>--%>
                <%--                        </tbody>--%>
                <%--                    </table>--%>
                <%--                </div>--%>
                <%--                <div class="table-wp">--%>
                <%--                    <div class="tablep-cap">--%>
                <%--                        <span>HIỆN TRẠNG SỬ DỤNG ĐẤT THÀNH PHỐ BẮC GIANG NĂM 2016</span>--%>
                <%--                    </div>--%>
                <%--                    <table class="table table-bordered">--%>
                <%--                        <thead>--%>
                <%--                        <tr>--%>
                <%--                            <th rowspan="2">Chỉ tiêu</th>--%>
                <%--                            <th rowspan="2">Mã</th>--%>
                <%--                            <th rowspan="2">Diện tích</th>--%>
                <%--                            <th rowspan="2">Cơ cấu</th>--%>
                <%--                            <th colspan="10">Phân theo đơn vị hành chính</th>--%>
                <%--                        </tr>--%>
                <%--                        <tr>--%>
                <%--                            <th>TP.Bắc Giang</th>--%>
                <%--                            <th>Huyện Hiệp Hòa</th>--%>
                <%--                            <th>Huyện Yên Dũng</th>--%>
                <%--                            <th>Huyện Lục Nam</th>--%>
                <%--                            <th>Huyện Sơn Đông</th>--%>
                <%--                            <th>Huyện Lạng Giang</th>--%>
                <%--                            <th>Huyện Việt Yên</th>--%>
                <%--                            <th>Huyện Tân Yên</th>--%>
                <%--                            <th>Huyện Lục Ngạn</th>--%>
                <%--                            <th>Huyện Yên Thế</th>--%>
                <%--                        </tr>--%>
                <%--                        </thead>--%>
                <%--                        <tbody>--%>
                <%--                        <tr>--%>
                <%--                            <td>Đất chuyên trồng lúa nước</td>--%>
                <%--                            <td>LUC</td>--%>
                <%--                            <td>2072.85</td>--%>
                <%--                            <td>81.09</td>--%>
                <%--                            <td>0</td>--%>
                <%--                            <td>272.44</td>--%>
                <%--                            <td>72.12</td>--%>
                <%--                            <td>0.15</td>--%>
                <%--                            <td>0</td>--%>
                <%--                            <td>54.05</td>--%>
                <%--                            <td>0.89</td>--%>
                <%--                            <td>0.03</td>--%>
                <%--                            <td>49.05</td>--%>
                <%--                            <td>37.91</td>--%>
                <%--                        </tr>--%>
                <%--                        </tbody>--%>
                <%--                    </table>--%>
                <%--                </div>--%>
<%--            </div>--%>
            </div>
            <div class="tableBangGiaDat10"></div>
            <div class="tableBangGiaDat11"></div>
        </div>
    </div>
</section>
<main>
    <!-- LỚP 1 -->
    <div class="block-main-qh">
        <i class="far fa-caret-square-right" id="openThongKeMap" style="display: none"></i>
        <div class="block-left-qh">
            <div class="hea-tit-qh">
                <span id="nameMap"><i class="fas fa-sitemap"></i>Bản đồ giá đất 2015-2019</span>
                <i class="fa fa-times-circle" aria-hidden="true" id="closeThongKeMap"></i>
            </div>
            <div class="view-qh view-qh-v1">
                <div class="title-qh">
                    <span><i class="fas fa-city"></i> Huyện</span>
                </div>
                <ul id="viewDanhSachXaHuyen">
                </ul>
            </div>
        </div>
        <div class="block-right-qh">
            <div class="block-search-qh-bd">
                <input type="text" id="inputSearchMap">
                <select name="" id="tieuChiSearchMap">
                    <option value="tenDuong">Tên Đường</option>
                    <%--                    <option value="xa">Xã</option>--%>
                </select>
                <button class="btn btn-info text-uppercase" id="btnSearchMap"><i class="fa fa-search" aria-hidden="true"></i>Tìm
                    kiếm</button>
            </div>
            <!-- FORM SEARCH -->
            <div class="form-search-toado" style="display: none;">

                <div class="content-form-search">
                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                    <table class="table table-hover" id="tableSearchMap">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Đường</th>
                            <th>Huyện</th>
                            <th>Số Quyết Định</th>
                            <th>Giai Đoạn</th>
                            <th>Thông Tin</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>Số Quyết Định</td>
                            <td>Giai Đoạn</td>
                            <td>Vị Trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>Số Quyết Định</td>
                            <td>Giai Đoạn</td>
                            <td>Vị Trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>Số Quyết Định</td>
                            <td>Giai Đoạn</td>
                            <td>Vị Trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>Số Quyết Định</td>
                            <td>Giai Đoạn</td>
                            <td>Vị Trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>Số Quyết Định</td>
                            <td>Giai Đoạn</td>
                            <td>Vị Trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>Số Quyết Định</td>
                            <td>Giai Đoạn</td>
                            <td>Vị Trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>Số Quyết Định</td>
                            <td>Giai Đoạn</td>
                            <td>Vị Trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>Số Quyết Định</td>
                            <td>Giai Đoạn</td>
                            <td>Vị Trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>Số Quyết Định</td>
                            <td>Giai Đoạn</td>
                            <td>Vị Trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>Số Quyết Định</td>
                            <td>Giai Đoạn</td>
                            <td>Vị Trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>Số Quyết Định</td>
                            <td>Giai Đoạn</td>
                            <td>Vị Trí</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <!-- END FORM SEARCH -->
            <div id="mapView"></div>
        </div>
    </div>
    <!-- END LỚP 1 -->
</main>
<script src="resources/js/map.js"></script>
<script src="resources/js/map_land_price.js"></script>