<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<link rel="stylesheet" href="resources/css/decision.css">
<link rel="stylesheet" href="resources/css/hsDc.css">
<script src="resources/js/ajax/ajax_land_price.js"></script>
<script src="resources/js/ajax/ajax_hsDc.js"></script>
<!-- MAIN -->
<main>
    <section class="dp-filter lu-adjcoe">
        <div class="dpfilter-wp">
            <div class="dpfilter-ct">
                <div class="dpfc-item dpcf-select">
                    <span>Quyết định</span>
                    <div class="dpcft-drop">
                        <select id="dp-drop13" class="dp-drop">
                            <option value="">--- Gõ để tìm kiếm ---</option>
                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                        </select>
                    </div>
                </div>
                <div class="dpfc-item  dpcf-select">
                    <span>Bảng giá đất</span>
                    <div class="dpcft-drop">
                        <select id="dp-drop14" class="dp-drop">
                            <option value="">--- Gõ để tìm kiếm ---</option>
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
                <div class="dpfc-item dpcf-select">
                    <span>Huyện/ TP</span>
                    <div class="dpcft-drop">
                        <select id="dp-drop15" class="dp-drop">
                            <option value="">--- Gõ để tìm kiếm ---</option>
                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                        </select>
                    </div>
                </div>
                <div class="dpfc-item  dpcf-select">
                    <span id="changeTextHsDc">Tên Đường</span>
                    <div class="dpcft-drop">
                        <select id="dp-drop16" class="dp-drop">
                            <option value="">--- Gõ để tìm kiếm ---</option>
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
                <div class="dpfc-item dpcf-bt">
                    <a href="#"><img src="resources/img/searchbt.png" alt=""></a>
                </div>
                <div class="dpfc-item dpcf-bt">
                    <a href="#"><img src="resources/img/xls.png" alt=""></a>
                </div>
            </div>
        </div>
    </section>
    <section class="dp-table lu-adjcoe">
        <div class="container">
            <div class="row">
                <div class="table-wp">
<%--                    <table class="table table-bordered">--%>
<%--                        <tbody>--%>
<%--                        <tr>--%>
<%--                            <td colspan="14">Quyết định ban hành Hệ số điều chỉnh giá đất áp dụng trên địa bàn--%>
<%--                                tỉnh Bắc Giang năm 2018 - TP Bắc Giang<br>Theo Bảng giá đất ở nông thôn</td>--%>
<%--                        </tr>--%>
<%--                        <tr>--%>
<%--                            <th width="5%" rowspan="2">STT</th>--%>
<%--                            <th width="23%" rowspan="2">Loại xã</th>--%>
<%--                            <th width="24%" colspan="4">Khu vực 1</th>--%>
<%--                            <th width="24%" colspan="4">Khu vực 2</th>--%>
<%--                            <th width="24%" colspan="4">Khu vực 3</th>--%>
<%--                        </tr>--%>
<%--                        <tr>--%>
<%--                            <th width="6%">Vị trí 1</th>--%>
<%--                            <th width="6%">Vị trí 2</th>--%>
<%--                            <th width="6%">Vị trí 3</th>--%>
<%--                            <th width="6%">Vị trí 4</th>--%>
<%--                            <th width="6%">Vị trí 1</th>--%>
<%--                            <th width="6%">Vị trí 2</th>--%>
<%--                            <th width="6%">Vị trí 3</th>--%>
<%--                            <th width="6%">Vị trí 4</th>--%>
<%--                            <th width="6%">Vị trí 1</th>--%>
<%--                            <th width="6%">Vị trí 2</th>--%>
<%--                            <th width="6%">Vị trí 3</th>--%>
<%--                            <th width="6%">Vị trí 4</th>--%>
<%--                        </tr>--%>
<%--                        </tbody>--%>
<%--                    </table>--%>
                </div>
<%--                <div class="table-wp">--%>
<%--                    <table class="table table-bordered">--%>

<%--                        <tr class="tieudebanggia tr-hover">--%>
<%--                            <td colspan="7">Quyết định ban hành Hệ số điều chỉnh giá đất áp dụng trên địa bàn--%>
<%--                                tỉnh Bắc Giang năm 2018<br>HỆ SỐ ĐIỀU CHỈNH GIÁ ĐẤT TẠI TP Bắc Giang</td>--%>
<%--                        </tr>--%>
<%--                        <tr>--%>
<%--                            <th width="5%">STT</th>--%>
<%--                            <th width="40%">Tên đường, đoạn đường</th>--%>
<%--                            <th width="10%">Vị trí 1</th>--%>
<%--                            <th width="10%">Vị trí 2</th>--%>
<%--                            <th width="10%">Vị trí 3</th>--%>
<%--                            <th width="10%">Vị trí 4</th>--%>
<%--                            <th width="15%">Năm</th>--%>
<%--                        </tr>--%>

<%--                    </table>--%>
<%--                </div>--%>
            </div>
        </div>
    </section>
</main>
<!-- END MAIN -->
<script src="resources/js/select2.min.js"></script>
<script src="resources/js/hsDc.js"></script>