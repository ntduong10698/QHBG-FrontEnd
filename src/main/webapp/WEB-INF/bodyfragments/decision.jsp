<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="resources/css/decision.css">
<script src="resources/js/ajax/ajax_decision.js"></script>
<!-- MAIN -->
<main>
    <section class="dp-filter">
        <div class="dpfilter-wp">
            <div class="dpfilter-ct">
                <div class="dpfc-item dpcf-fitem">
                    <span>Tìm kiếm văn bản:</span>
                    <input type="text" placeholder="Nhập từ khóa tìm kiếm...">
                </div>
                <div class="dpfc-item dpcf-cb">
                        <span>Tìm trong
                            <div class="mnverv2">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </span>
                    <div class="icbra-wp">
                        <div class="icbra-item">
                            <input type="radio" id="cb01" name="r1">
                            <label for="cb01">Tất cả</label>
                        </div>
                        <div class="icbra-item">
                            <input type="radio" id="cb02" name="r1">
                            <label for="cb02">Số hiệu</label>
                        </div>
                        <div class="icbra-item">
                            <input type="radio" id="cb03" name="r1">
                            <label for="cb03">Trích yếu</label>
                        </div>
                    </div>
                </div>
                <div class="dpfc-item dpcf-select">
                    <span>Cơ quan ban hành</span>
                    <div class="dpcft-drop">
                        <select id="dp-drop1" class="dp-drop">
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
                    <span>Loại quyết định</span>
                    <div class="dpcft-drop">
                        <select id="dp-drop2" class="dp-drop">
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
    <section class="dp-table">
        <div class="container">
            <div class="row">
                <table class="table table-hover table-bordered" id="tableDecision">
                    <thead>
                    <tr>
                        <th>Số, Kí hiệu</th>
                        <th>Trích yếu</th>
                        <th>Cơ quan ban hành</th>
                        <th>Người ký</th>
                        <th>Đính kèm</th>
                    </tr>
                    </thead>
                    <tbody>


                    </tbody>
                </table>
            </div>
        </div>
    </section>
</main>
<!-- END MAIN -->
<script src="resources/js/select2.min.js"></script>
<script src="resources/js/decision.js"></script>