<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="resources/css/landPrice.css">
<link rel="stylesheet" href="resources/css/project.css">
<link rel="stylesheet" href="resources/css/decision.css">
<script src="resources/js/ajax/ajax_land_price.js"></script>
<script src="resources/js/ajax/ajax_price_nn.js"></script>
<!-- MAIN -->
<main>
    <section class="dp-filter lanprift">
        <div class="dpfilter-wp">
            <div class="dpfilter-ct">
                <%--                    <div class="bl-sea d-flex" style="">--%>
                <%--                        <div class="search-1">--%>
                <%--                            <select name="" id="">--%>
                <%--                                <option value="">Bảng giá đất nông nghiệp</option>--%>
                <%--                                <option value="">Bảng giá đất công nghiệp</option>--%>
                <%--                            </select>--%>
                <%--                        </div>--%>
                <%--                        <div class="search-2 " style="width:8%">--%>
                <%--                            <p>Năm / Giai đoạn:</p>--%>
                <%--                            <select name="" id="">--%>
                <%--                                <option value="">2015-2019</option>--%>
                <%--                                <option value="">2019-2030</option>--%>
                <%--                            </select>--%>
                <%--                        </div>--%>
                <%--                        <div class="search-2" style="width:32%">--%>
                <%--                            <p>Bảng giá đất:</p>--%>
                <%--                            <select name="" id="">--%>
                <%--                                <option value="">Trồng lúa nước và cây hàng năm</option>--%>
                <%--                                <option value="">Trồng rừng</option>--%>
                <%--                            </select>--%>
                <%--                        </div>--%>
                <%--                        <div class="search-2">--%>
                <%--                            <p>Vị trí:</p>--%>
                <%--                            <input type="text">--%>
                <%--                        </div>--%>
                <%--                        <div class="search-2">--%>
                <%--                            <p class="d-flex  "><span>Giá đất:</span><span>(đồng/m2)</span></p>--%>
                <%--                            <div class="d-flex ">--%>
                <%--                                <input class="ip-1" type="text">--%>
                <%--                                <input class="ip-1" type="text">--%>
                <%--                            </div>--%>

                <%--                        </div>--%>
                <%--                </div>--%>
                <div class="dpfc-item dpcf-select">
                    <span>Bảng giá đất nông nghiệp</span>
                    <div class="dpcft-drop">
                        <select id="dp-drop8" class="dp-drop">
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
                <div class="dpfc-item dpcf-select">
                    <span>Năm/Giai đoạn</span>
                    <div class="dpcft-drop">
                        <select id="dp-drop9" class="dp-drop">
                            <option value="">--- Tất Cả ---</option>
                            <option value="0">2015-2019</option>
                        </select>
                    </div>
                </div>
                <%--                    <div class="dpfc-item dpcf-select">--%>
                <%--                        <span>Bảng giá đất</span>--%>
                <%--                        <div class="dpcft-drop">--%>
                <%--                            <select id="dp-drop10" class="dp-drop">--%>
                <%--                                <option value="">--- Gõ để tìm kiếm ---</option>--%>
                <%--                                <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông--%>
                <%--                                </option>--%>
                <%--                                <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông--%>
                <%--                                </option>--%>
                <%--                                <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông--%>
                <%--                                </option>--%>
                <%--                                </option>--%>
                <%--                                <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông--%>
                <%--                                </option>--%>
                <%--                                <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông--%>
                <%--                                </option>--%>
                <%--                                </option>--%>
                <%--                                <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông--%>
                <%--                                </option>--%>
                <%--                                <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông--%>
                <%--                                </option>--%>
                <%--                            </select>--%>
                <%--                        </div>--%>
                <%--                    </div>--%>
                <div class="dpfc-item dpcf-fitem" id="searchViTriGiaDat">
                    <span>Vị trí:</span>
                    <input type="text" placeholder="Nhập từ khóa tìm kiếm...">
                </div>
                <div class="dpfc-item dpcf-fitem">
                    <span>Giá đất x1.000 (VNĐ/m<sup>2</sup>):</span>
                    <div class="ippwp">
                        <input type="number" value="0" placeholder="Giá nhỏ nhất" id="priceDatMin" min="0">
                        <input type="number" placeholder="Giá lớn nhất" id="priceDatMax" min="0">
                    </div>
                </div>
                <div class="dpfc-item dpcf-bt" id="searchGiaDat">
                    <a href=""><img src="resources/img/searchbt.png" alt=""></a>
                </div>
                <div class="dpfc-item dpcf-bt" id="exportExel">
                    <a href=""><img src="resources/img/xls.png" alt=""></a>
                </div>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="block-table-price2">
            <table class="table-dat table table-hover table-bordered">
                <thead>
                <tr>
                    <th>Bảng Giá Đất</th>
                    <th>STT</th>
                    <th>Vị Trí</th>
                    <th>Giá Đất</th>
                    <th>Chi Tiết</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td rowspan="6">Bảng Giá Đất Trồng Lúa Nước Và Cây Hàng Năm</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>
                        <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>

                <tr>
                    <td rowspan="6">Bảng Giá Đất Trồng Lúa Nước Và Cây Hàng Năm</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>
                <tr>
                    <td rowspan="6">Bảng Giá Đất Trồng Lúa Nước Và Cây Hàng Năm</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Tại Thành Phố Bắc Giang</td>

                    <td>60.000</td>
                    <td>                            <span>
                            <span>
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </span></td>
                </tr>


                </tbody>
            </table>

        </div>
    </section>
    <section class="block-price-bottom " id="block-price-bottom">
        <div class="fa-pr-bt ">
            <div class="pr-bt-left">
                <a href="">
                    <img src="resources/img/bando.png" alt="">
                </a>
            </div>
            <div class="pr-bt-right">
                <i id="click-qd" class="fa fa-times-circle" aria-hidden="true"></i>
                <div class="pr-top">
                    <span>Thông tin quyết định</span>
                </div>
                <div class="pr-bottom ">
                    <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                            <span>Số quyết định</span>
                        </div>
                        <div class="pr-infor-right col-9">
                            <span>861/QĐ-UBND</span>
                        </div>
                    </div>
                    <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                            <span>Trích yếu:</span>
                        </div>
                        <div class="pr-infor-right col-9">
                            <span>Ban hành bảng giá đất giai đoạn 2015-2019 tỉnh Bắc Giang</span>
                        </div>
                    </div>
                    <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                            <span>Cơ quan ban hành:</span>
                        </div>
                        <div class="pr-infor-right col-9">
                            <span>Ủy ban Nhân Dân Tỉnh Bắc Giang</span>
                        </div>
                    </div>
                    <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                            <span>Ngày ban hành:</span>
                        </div>
                        <div class="pr-infor-right col-3">
                            <span>30/12/2014</span>
                        </div>
                        <div class="pr-infor-right col-3" style="background: #cccccc;">
                            <span>Thời gian hiệu lực:</span>
                        </div>
                        <div class="pr-infor-right col-3">
                            <span>2015-2019</span>
                        </div>
                    </div>
                    <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                            <span>Người ký:</span>
                        </div>
                        <div class="pr-infor-right col-3">
                            <span>30/12/2014</span>
                        </div>
                        <div class="pr-infor-right col-3" style="background: #cccccc;">
                            <span>Chức vụ:</span>
                        </div>
                        <div class="pr-infor-right col-3">
                            <span>2015-2019</span>
                        </div>
                    </div>
                    <div class="pr-info row">
                        <div class="pr-infor-left col-3">
                            <span>Tệp đình kèm theo:</span>
                        </div>
                        <div class="pr-infor-right col-9">
                            <span><a href="">bacgiang.gov.vn</a></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</main>
<!-- END MAIN -->
<script src="resources/js/select2.min.js"></script>
<script src="resources/js/landPrice.js"></script>