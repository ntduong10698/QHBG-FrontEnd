<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<link rel="stylesheet" href="resources/css/decision.css">
<link rel="stylesheet" href="resources/css/findDcQh.css">
<script src="resources/js/ajax/ajax_findDcQh.js"></script>
<!-- MAIN -->
<main>
    <section class="dp-filter lu-adjplan">
        <div class="dpfilter-wp">
            <div class="dpfilter-ct">
                <div class="dpfc-item dpcf-fitem">
                    <span>Tìm kiếm thông tin điều chỉnh bổ sung</span>
                    <input type="text" placeholder="Vị trí, địa điểm điều chỉnh, bổ xung" id="inputViTri">
                </div>
                <div class="dpfc-item dpcf-select">
                    <span>Huyện áp dụng</span>
                    <div class="dpcft-drop">
                        <select id="dp-drop7" class="dp-drop">
                            <option value="">--- Tất cả ---</option>
                            <option value="0">--- Tất cả ---
                            </option>
                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                            </option>
                        </select>
                    </div>
                </div>
                <div class="dpfc-item dpcf-fitem">
                    <span>Số quyết định</span>
                    <input type="text" placeholder="Nhập số quyết định" id="inputQuyetDinh">
                </div>
                <div class="dpfc-item dpcf-bt">
                    <a href="" id="searchDcQH"><img src="resources/img/searchbt.png" alt=""></a>
                </div>
                <div class="dpfc-item dpcf-bt" id="exportExel">
                    <a href="#"><img src="resources/img/xls.png" alt=""></a>
                </div>
            </div>
        </div>
    </section>
    <section class="dp-table lu-adjplan">
        <div class="container">
            <div class="row table-wp">
                <div class="tablep-cap">
                    <span><strong>Thông Tin điều chỉnh quy hoạch</strong></span>
                </div>
                <table class="table table-bordered" id="tableExport">
                    <thead>
                    <tr>
                        <th>Vị trí, địa điểm</th>
                        <th>Huyện/Thành phố</th>
                        <th>Nội dung điều chỉnh, bổ sung</th>
                        <th>Lý do điều chỉnh</th>
                        <th style="width: 90px;">Diện tích điều chỉnh</th>
                        <th>Thông tin quyết định</th>
                        <th style="width: 90px;">Ngày ban hành</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <div class="pp-pagi">
                    <div class="ppgai-wp">
                        <div class="page-able">
                            <div id="pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<!-- END MAIN -->
<script src="resources/js/select2.min.js"></script>
<script src="resources/js/findDcQh.js"></script>