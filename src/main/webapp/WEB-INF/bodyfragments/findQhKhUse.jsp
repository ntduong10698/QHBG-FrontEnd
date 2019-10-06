<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!-- Css trang tra cứu QHSD đất 2 link -->
<link rel="stylesheet" href="resources/css/decision.css">
<link rel="stylesheet" href="resources/css/findQhKhUse.css">
<script src="resources/js/ajax/ajax_map_backend.js"></script>
<script src="resources/js/ajax/ajax_map_bieu_mau.js"></script>
<script src="resources/js/ajax/ajax_findQhKhUse.js"></script>
<!-- MAIN -->
<main>
    <section class="dp-filter lu-landuseplan">
        <div class="dpfilter-wp">
            <div class="dpfilter-ct">
                <div class="dpfc-item dpcf-select">
                    <span>Chức năng sử dụng đất</span>
                    <div class="dpcft-drop">
                        <select id="dp-drop5" class="dp-drop">
                            <option value="">--- Chọn chức năng đất ---</option>
                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                        </select>
                    </div>
                </div>
                <div class="dpfc-item dpcf-select">
                    <span>Đơn vị</span>
                    <div class="dpcft-drop">
                        <select id="dp-drop6" class="dp-drop">
                            <option value="">--- Chọn đơn vị ---</option>
                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            </option>
                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            </option>
                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                        </select>
                    </div>
                </div>
                <div class="dpfc-item dpcf-select" style="display: none;">
                    <span>Năm</span>
                    <div class="dpcft-drop">
                        <select id="dp-drop7" class="dp-drop">
                            <option value="2015">Năm 2015</option>
                            <option value="2016">Năm 2016</option>
                            <option value="2017">Năm 2017</option>
                            <option value="2018">Năm 2018</option>
                            <option value="2019">Năm 2019</option>
                        </select>
                    </div>
                </div>
                <div class="dpfc-item dpcf-bt">
                    <a href="#" id="searchTraCuu"><img src="resources/img/searchbt.png" alt=""></a>
                </div>
                <div class="dpfc-item dpcf-bt">
                    <a href="#"><img src="resources/img/xls.png" alt=""></a>
                </div>
            </div>
        </div>
    </section>
    <section class="dp-table lu-landuseplan " >
        <div class="container">
            <div class="row" id="tableInfoSoild">
                <div class="table-HTQH">
                    <%--                    <div class="table-wp">--%>
                    <%--                        <div class="tablep-cap">--%>
                    <%--                            <span>HIỆN TRẠNG SỬ DỤNG ĐẤT THÀNH PHỐ BẮC GIANG NĂM 2016</span>--%>
                    <%--                        </div>--%>
                    <%--                        <table class="table table-bordered">--%>
                    <%--                            <thead>--%>
                    <%--                            <tr>--%>
                    <%--                                <th rowspan="2">Chỉ tiêu</th>--%>
                    <%--                                <th rowspan="2">Mã</th>--%>
                    <%--                                <th rowspan="2">Diện tích</th>--%>
                    <%--                                <th rowspan="2">Cơ cấu</th>--%>
                    <%--                                <th colspan="16">Phân theo đơn vị hành chính</th>--%>
                    <%--                            </tr>--%>
                    <%--                            <tr>--%>
                    <%--                                <th>Phường Trần Phú</th>--%>
                    <%--                                <th>Xã Dĩnh Trì</th>--%>
                    <%--                                <th>Phường Đa Mai</th>--%>
                    <%--                                <th>Phường Lê Lợi</th>--%>
                    <%--                                <th>Phường Ngô Quyền</th>--%>
                    <%--                                <th>Phường Thọ Xương</th>--%>
                    <%--                                <th>Phường Hoàng Văn Thụ</th>--%>
                    <%--                                <th>Phường Trần Nguyên Hãn</th>--%>
                    <%--                                <th>Phường Mỹ Độ</th>--%>
                    <%--                                <th>Phường Dĩnh Kế</th>--%>
                    <%--                                <th>Phường Xương Giang</th>--%>
                    <%--                                <th>Xã Song Mai</th>--%>
                    <%--                                <th>Xã Tân Tiến</th>--%>
                    <%--                                <th>Xã Song Khê</th>--%>
                    <%--                                <th>Xã Tân Mỹ</th>--%>
                    <%--                                <th>Xã Đồng Sơn</th>--%>
                    <%--                            </tr>--%>
                    <%--                            </thead>--%>
                    <%--                            <tbody>--%>
                    <%--                            <tr>--%>
                    <%--                                <td>Đất chuyên trồng lúa nước</td>--%>
                    <%--                                <td>LUC</td>--%>
                    <%--                                <td>2072.85</td>--%>
                    <%--                                <td>81.09</td>--%>
                    <%--                                <td>0</td>--%>
                    <%--                                <td>272.44</td>--%>
                    <%--                                <td>72.12</td>--%>
                    <%--                                <td>0.15</td>--%>
                    <%--                                <td>0</td>--%>
                    <%--                                <td>54.05</td>--%>
                    <%--                                <td>0.89</td>--%>
                    <%--                                <td>0.03</td>--%>
                    <%--                                <td>49.05</td>--%>
                    <%--                                <td>37.91</td>--%>
                    <%--                                <td>102.24</td>--%>
                    <%--                                <td>226.1</td>--%>
                    <%--                                <td>388.22</td>--%>
                    <%--                                <td>174.12</td>--%>
                    <%--                                <td>302.21</td>--%>
                    <%--                                <td>393.32</td>--%>
                    <%--                            </tr>--%>
                    <%--                            </tbody>--%>
                    <%--                        </table>--%>
                    <%--                    </div>--%>
                </div>
                <div class="table-QHK"></div>
            </div>
        </div>
    </section>
</main>
<!-- END MAIN -->
<!-- Plugin Select2 Js -->
<script src="resources/js/select2.min.js"></script>
<script src="resources/js/findQhKhUse.js"></script>