<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="https://js.arcgis.com/4.6/esri/css/main.css">
<script src="https://js.arcgis.com/4.6/"></script>
<link rel="stylesheet" href="resources/css/map.css">
<script src="resources/js/ajax/ajax_map_backend.js"></script>
<script src="resources/js/ajax/ajax_map_bieu_mau.js"></script>
<script src="resources/js/ajax/ajax_map.js"></script>

<section class="tbdetailf">
    <div class="tbdf-bg"></div>
    <div class="tbdf-wp">
        <div class="tbdfimg">
            <img src="resources/img/closeicon.png" alt="">
        </div>
        <div class="tbbwp" id="tableInfoSoild">
            <div class="table-HTQH">
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
            </div>
            <div class="table-QHK">
            </div>
        </div>
    </div>
</section>
<main>
    <!-- LỚP 1 -->
    <div class="block-main-qh">
<%--        <i class="far fa-caret-square-right" id="openThongKeMap" style="display: none"></i>--%>
        <img src="resources/img/view-thongke.png" alt="" id="openThongKeMap"  style="display: none">
        <div class="block-left-qh">
            <div class="hea-tit-qh">
                <span id="nameMap"><i class="fas fa-sitemap"></i></span>
                <img src="resources/img/hidden-thongke.png" alt="" id="closeThongKeMap">
<%--                <i class="fa fa-times-circle" aria-hidden="true" id="closeThongKeMap"></i>--%>
            </div>
            <div class="view-qh view-qh-v1">
                <div class="title-qh">
                    <span><i class="fas fa-city"></i> Huyện/ Xã</span>
                </div>
                <ul id="viewDanhSachXaHuyen">
                </ul>
            </div>
            <div class="view-qh view-qh-v2">
                <div class="title-qh">
                    <span><i class="fa fa-calendar" aria-hidden="true"></i> Mục đích sử dụng đất</span>
<%--                    <span id="inputCheckMutil">--%>
<%--                        <input type="checkbox">--%>
<%--                        <span>Hiện Trạng</span>--%>
<%--                    </span>--%>
                    <button class="btn btn-info text-uppercase" id="btnSearchMutil"><i class="fa fa-search" aria-hidden="true"></i>Tìm
                        kiếm</button>
                </div>
                <nav class="nav nav-pills nav-justified justify-content-end" id="nav-tab">
                    <a class="nav-item nav-link active" id="nav-hientrang-tab" data-toggle="tab" href="" role="tab" aria-selected="true">Hiện Trạng</a>
                <a class="nav-item nav-link" id="nav-quyhoach-tab" data-toggle="tab" href="" role="tab" aria-selected="false">Quy Hoạch/ Kế Hoạch</a>
                </nav>
                <ul class="viewTimKiemDat" id="viewHienTrang">
                </ul>
                <ul class="viewTimKiemDat" id="viewQuyHoach" style="display: none">
                </ul>
            </div>
        </div>
        <div class="block-right-qh">
            <div class="block-search-qh-bd">
                <input type="text" id="inputSearchMap">
                <select name="" id="tieuChiSearchMap">
                    <option value="quyHoach">Quy Hoạch/ Kế Hoạch</option>
                    <option value="hienTrang">Hiện Trạng</option>
<%--                    <option value="xa">Xã</option>--%>
                </select>
                <button class="btn btn-info text-uppercase" id="btnSearchMap"><i class="fa fa-search" aria-hidden="true"></i>Tìm
                    kiếm</button>
            </div>
            <div class="block-hienthi">
                <ul>
                    <li>
                        <i class="fas fa-map-marked-alt"></i><span> Lớp hiển thị</span>
                        <div class="layer-2-qh">
                            <ul>
                                <li>Lớp hiển thị bản đồ</li>
                                <li>
                                    <input type="checkbox" name="" id="checkHienTrang" checked>
                                    Bản đồ hiện trạng
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="checkQuyHoach" checked>
                                    Bản đồ quy hoạch
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Chú thích đất
                        <div class="layer-3-qh">
                            <div class="search-chuthich">
                                <input type="text" placeholder="Tìm kiếm">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </div>
                            <ul id="hienthi-chuthich">
<%--                                <li>--%>
<%--                                    <span>NNP</span>--%>
<%--                                    Đất nông nghiệp--%>
<%--                                </li>--%>
                            </ul>
                        </div>
                    </li>

                </ul>

            </div>
            <!-- FORM SEARCH -->
            <div class="form-search-toado" style="display: none;">

                <div class="content-form-search">
                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                    <table class="table table-hover" id="tableSearchMap">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Thông Tin</th>
                            <th>Mã Hiện Trạng</th>
                            <th>Mục Đích Sử Dụng</th>
                            <th>Diện Tích</th>
                            <th>Xã</th>
                            <th>Huyện</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ONT</td>
                            <td>Đất ở nông thôn</td>
                            <td>11.12928522(ha)</td>
                            <td>Đồng Tân</td>
                            <td>Hiệp Hòa</td>
                            <td>Vị trí</td>
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
    <!-- LỚP 2 -->
    <div class="block-main-l2" style="display:none;">
        <div class="bl-qh-v2">

            <div class="bl-v2-left">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
                <div class="infor-chitiet">
                    <span>Thông tin chi tiết</span>
                </div>
                <ul>
                    <li>
                        <span class="text-uppercase">Thông tin vùng đất</span>
                        <div class="info-bdqh-layer-2">
                            <div class="chitiet-qh">
                                <div class="chitiet-qh-title">

                                    <div class="chitiet-qh-left">
                                        <ul>
                                            <li>
                                                <span>Mã Ký hiệu SDD</span>
                                            </li>
                                            <li>
                                                <span>Mục đích sử dụng đất: </span>
                                            </li>
                                            <li>
                                                <span>Mục đích quy hoạch:</span>
                                            </li>
                                            <li>
                                                <span>Tỉnh:</span>
                                            </li>
                                            <li>
                                                <span>Huyện:</span>
                                            </li>
                                            <li>
                                                <span>Xã:</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="chitiet-qh-left" id="infoSoild">
                                        <ul>
                                            <li>
                                                <span>CQP</span>
                                            </li>
                                            <li>
                                                <span>Đất quốc phòng</span>
                                            </li>
                                            <li>
                                                <span>...</span>
                                            </li>
                                            <li>
                                                <span>Bắc Giang</span>
                                            </li>
                                            <li>
                                                <span>Lục Nam </span>
                                            </li>
                                            <li>
                                                <span>Cổ Loa</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                            <span class="text-uppercase" id="textInfoKhUser">Thông tin kế hoạch sử dụng
                                đất</span>
                        <div class="info-bdqh-layer-2 sect-bdqh-layer-2">
                            <div class="chitiet-qh">
                                <div id ="infoKhUse" class="chitiet-qh-title" style="background: #eefcab">

                                    <div class="chitiet-qh-left">
                                        <ul>
                                            <li>
                                                <span>Chỉ tiêu</span>
                                            </li>
                                            <li>
                                                <span>Mã </span>
                                            </li>
                                            <li>
                                                <span>Diện tich năm hiện trạng</span>
                                            </li>
                                            <li>
                                                <span>Năm 2011</span>
                                            </li>
                                            <li>
                                                <span>Năm 2012</span>
                                            </li>
                                            <li>
                                                <span>Năm 2013</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="chitiet-qh-left">
                                        <ul>
                                            <li>
                                                <span>Đất quốc phòng</span>
                                            </li>
                                            <li>
                                                <span>CQP</span>
                                            </li>
                                            <li>
                                                <span>24,286.500</span>
                                            </li>
                                            <li>
                                                <span>24,286.500</span>
                                            </li>
                                            <li>
                                                <span>24,286.500 </span>
                                            </li>
                                            <li>
                                                <span>24,286.500</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
<%--                    <li>--%>
<%--                        <span>Các dự án trên vùng đất</span>--%>
<%--                        <div class="sect-bdqh-layer-2 ">--%>
<%--&lt;%&ndash;                            <table class="table table-hover">&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <thead>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <th>Tên </th>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <th>Quy mô</th>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <th>Chủ đầu tư</th>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <th>Giai đoạn triển khai</th>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <th>Địa điểm</th>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <th>Mô tả chi tiết</th>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </thead>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <tbody>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td>SunShine City</td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td>5 hecta</td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td>Tập đoàn SunShine Group</td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td>Quý IV/2019</td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td>KDT Nam Thang Long - KDT Ciputra</td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td><i class="fa fa-plus-circle" aria-hidden="true"></i> </td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td>SunShine City</td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td>5 hecta</td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td>Tập đoàn SunShine Group</td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td>Quý IV/2019</td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td>KDT Nam Thang Long - KDT Ciputra</td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td><i class="fa fa-plus-circle" aria-hidden="true"></i> </td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </tbody>&ndash;%&gt;--%>
<%--&lt;%&ndash;                            </table>&ndash;%&gt;--%>
<%--                        </div>--%>
<%--                    </li>--%>
                    <li>
                            <span class="text-uppercase">Các quyết định được phê duyệt</span>
                        <div class="info-bdqh-layer-2 sect-bdqh-layer-2">
                            <div class="chitiet-qh">
                                <div class="chitiet-qh-title" style="background: #ecd59f">

                                    <div class="chitiet-qh-left">
                                        <ul>
                                            <li>
                                                <span>Ký hiệu:</span>
                                            </li>
                                            <li>
                                                <span>Trích yếu:</span>
                                            </li>
                                            <li>
                                                <span>Cơ quan ban hành:</span>
                                            </li>
                                            <li>
                                                <span>Người ký:</span>
                                            </li>
                                            <li>
                                                <span>Ngày ký:</span>
                                            </li>
                                            <li>
                                                <span>Tệp đính kèm:</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="chitiet-qh-left" id="chiTietQuyetDinhMap">
                                        <ul>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
<%--                    <li>--%>
<%--                            <span class="text-uppercase">Giá đất quy định tại vị trí</span>--%>
<%--                        <div class="sect-bdqh-layer-2">--%>
<%--&lt;%&ndash;                            <table class="table table-hover">&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <thead style="background: #cdb3d4">&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <th>Bảng giá đất </th>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <th>Vị trí</th>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <th>Giá đất</th>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <th>Năm</th>&ndash;%&gt;--%>

<%--&lt;%&ndash;                                </tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </thead>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <tbody>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td rowspan="4"></td>&ndash;%&gt;--%>

<%--&lt;%&ndash;                                </tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </tr>&ndash;%&gt;--%>

<%--&lt;%&ndash;                                <tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td rowspan="3"></td>&ndash;%&gt;--%>

<%--&lt;%&ndash;                                </tr>&ndash;%&gt;--%>

<%--&lt;%&ndash;                                <tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <tr>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <td></td>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </tr>&ndash;%&gt;--%>


<%--&lt;%&ndash;                                </tbody>&ndash;%&gt;--%>
<%--&lt;%&ndash;                            </table>&ndash;%&gt;--%>

<%--                        </div>--%>
<%--                    </li>--%>
<%--                    <li>--%>
<%--                            <span class="text-uppercase">Giá đất thị trường</span>--%>
<%--&lt;%&ndash;                        <div class="sect-bdqh-layer-2">&ndash;%&gt;--%>
<%--&lt;%&ndash;                            <div class="bl-sect-col">&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <div class="bl-sect-col-1" style="width: 60%">&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <div class="bl-sect-col-1-top">&ndash;%&gt;--%>
<%--&lt;%&ndash;                                        <span>Vị trí </span>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    </div>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <div class="bl-sect-col-1-bottom"></div>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </div>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <div class="bl-sect-col-1" style="width: 25%">&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <div class="bl-sect-col-1-top">&ndash;%&gt;--%>
<%--&lt;%&ndash;                                        <span>Giá đất</span>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    </div>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <div class="bl-sect-col-1-bottom"></div>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </div>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                <div class="bl-sect-col-1" style="width: 15%">&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <div class="bl-sect-col-1-top">&ndash;%&gt;--%>
<%--&lt;%&ndash;                                        <span>Năm</span>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    </div>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                    <div class="bl-sect-col-1-bottom"></div>&ndash;%&gt;--%>
<%--&lt;%&ndash;                                </div>&ndash;%&gt;--%>

<%--&lt;%&ndash;                            </div>&ndash;%&gt;--%>

<%--&lt;%&ndash;                        </div>&ndash;%&gt;--%>
<%--                    </li>--%>
                </ul>
                <a href="" id="clickViewTableInfoSoild">Xem chi tiết >></a>
            </div>
            <div class="bl-v2-right">
                <div class="bl-v2">
                    <i class="fa fa-times-circle" aria-hidden="true"></i>
<%--                    <div class="bl-v2-r-left">--%>
<%--                        <div class="bl-v2-r-left-title">--%>
<%--                            <div class="b-bl-v2  text-uppercase">--%>
<%--                                <span> Chung Cư SunShine</span>--%>
<%--                            </div>--%>
<%--                            <div class="content-bl-v2">--%>
<%--                                <div class="content-bl-v2-left">--%>
<%--                                    <span>Tên dự án: </span>--%>
<%--                                </div>--%>
<%--                                <div class=" content-bl-v2-left content-bl-v2-right">--%>
<%--                                    <span>Sunshine City</span>--%>
<%--                                </div>--%>
<%--                            </div>--%>
<%--                            <div class="content-bl-v2">--%>
<%--                                <div class="content-bl-v2-left">--%>
<%--                                    <span>Chủ đầu tư dự án:</span>--%>
<%--                                </div>--%>
<%--                                <div class=" content-bl-v2-left content-bl-v2-right">--%>
<%--                                    <span>Chủ đầu tư tập đoàn Sunshine Group</span>--%>
<%--                                </div>--%>
<%--                            </div>--%>
<%--                            <div class="content-bl-v2">--%>
<%--                                <div class="content-bl-v2-left">--%>
<%--                                    <span>Vị trí dự án:</span>--%>
<%--                                </div>--%>
<%--                                <div class=" content-bl-v2-left content-bl-v2-right">--%>
<%--                                    <span>KDT Nam Thăng Long -KDT Ciputral, Bắc Từ Liêm, Hà Nội </span>--%>
<%--                                </div>--%>
<%--                            </div>--%>
<%--                            <div class="content-bl-v2">--%>
<%--                                <div class="content-bl-v2-left">--%>
<%--                                    <span>Tổng diện tích dự án:</span>--%>
<%--                                </div>--%>
<%--                                <div class=" content-bl-v2-left content-bl-v2-right">--%>
<%--                                    <span>Chung cư và biệt thự liền kề</span>--%>
<%--                                </div>--%>
<%--                            </div>--%>
<%--                        </div>--%>
<%--                    </div>--%>
<%--                    <div class="bl-v2-r-right">--%>
<%--                        <img src="resources/img/bdqh-1.png" alt="">--%>
<%--                    </div>--%>
                </div>
            </div>
        </div>
    </div>
</main>
<script src="resources/js/map.js"></script>