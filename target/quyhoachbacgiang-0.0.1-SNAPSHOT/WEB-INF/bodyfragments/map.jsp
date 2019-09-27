<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="https://js.arcgis.com/4.6/esri/css/main.css">
<script src="https://js.arcgis.com/4.6/"></script>
<link rel="stylesheet" href="resources/css/map.css">
<script src="resources/js/ajax/ajax_map.js"></script>
<main>
    <!-- LỚP 1 -->
    <div class="block-main-qh">
        <div class="block-left-qh">
            <div class="hea-tit-qh">
                <span><i class="fas fa-sitemap"></i>Sơ đồ hiển thị</span>
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
                </div>
                <ul id="viewTimKiemDat">
                </ul>
            </div>
        </div>
        <div class="block-right-qh">
            <div class="block-search-qh-bd">
                <input type="text">
                <select name="" id="">
                    <option value="">Huyện/TP</option>

                </select>
                <button class="btn btn-info text-uppercase"><i class="fa fa-search" aria-hidden="true"></i>Tìm
                    kiếm</button>
            </div>
            <div class="block-hienthi">
                <ul>
                    <li>
                        <i class="fas fa-map-marked-alt    "></i><span> Lớp hiển thị</span>
                        <div class="layer-2-qh">
                            <ul>
                                <li>Vùng Dữ Liệu</li>
                                <li>
                                    <input type="checkbox" name="" id="checkHienTrang" checked>
                                    Hiện trạng
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="checkQuyHoach" checked>
                                    Quy hoạch
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
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                                <li>
                                    <span>NNP</span>
                                    Đất nông nghiệp
                                </li>
                            </ul>
                        </div>
                    </li>

                </ul>

            </div>
            <!-- FORM SEARCH -->
            <div class="form-search-toado">

                <div class="content-form-search">
                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                    <table class="table table-hover">
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
                                    <div class="chitiet-qh-left">
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
                            <span class="text-uppercase">Thông tin kế hoạch sử dụng
                                đất</span>
                        <div class="info-bdqh-layer-2 sect-bdqh-layer-2">
                            <div class="chitiet-qh">
                                <div class="chitiet-qh-title" style="background: #eefcab">

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
                    <li>
                        <span>Các dự án trên vùng đất</span>
                        <div class="sect-bdqh-layer-2 ">


                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th>Tên </th>
                                    <th>Quy mô</th>
                                    <th>Chủ đầu tư</th>
                                    <th>Giai đoạn triển khai</th>
                                    <th>Địa điểm</th>
                                    <th>Mô tả chi tiết</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>SunShine City</td>
                                    <td>5 hecta</td>
                                    <td>Tập đoàn SunShine Group</td>
                                    <td>Quý IV/2019</td>
                                    <td>KDT Nam Thang Long - KDT Ciputra</td>
                                    <td><i class="fa fa-plus-circle" aria-hidden="true"></i> </td>
                                </tr>
                                <tr>
                                    <td>SunShine City</td>
                                    <td>5 hecta</td>
                                    <td>Tập đoàn SunShine Group</td>
                                    <td>Quý IV/2019</td>
                                    <td>KDT Nam Thang Long - KDT Ciputra</td>
                                    <td><i class="fa fa-plus-circle" aria-hidden="true"></i> </td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </li>
                    <li>
                            <span class="text-uppercase">Thông tin kế hoạch sử dụng
                                đất</span>
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
                                    <div class="chitiet-qh-left">
                                        <ul>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                            <span class="text-uppercase">Thông tin kế hoạch sử dụng
                                đất <span>đơn vị: đồng/m2</span></span>
                        <div class="sect-bdqh-layer-2">
                            <table class="table table-hover">
                                <thead style="background: #cdb3d4">
                                <tr>
                                    <th>Bảng giá đất </th>
                                    <th>Vị trí</th>
                                    <th>Giá đất</th>
                                    <th>Năm</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td rowspan="4"></td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td rowspan="3"></td>

                                </tr>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>


                                </tbody>
                            </table>

                        </div>
                    </li>
                    <li>
                            <span class="text-uppercase">Thông tin kế hoạch sử dụng
                                đất <span>đơn vị: đồng/m2</span></span>
                        <div class="sect-bdqh-layer-2">
                            <div class="bl-sect-col">
                                <div class="bl-sect-col-1" style="width: 60%">
                                    <div class="bl-sect-col-1-top">
                                        <span>Vị trí </span>
                                    </div>
                                    <div class="bl-sect-col-1-bottom"></div>
                                </div>
                                <div class="bl-sect-col-1" style="width: 25%">
                                    <div class="bl-sect-col-1-top">
                                        <span>Giá đất</span>
                                    </div>
                                    <div class="bl-sect-col-1-bottom"></div>
                                </div>
                                <div class="bl-sect-col-1" style="width: 15%">
                                    <div class="bl-sect-col-1-top">
                                        <span>Năm</span>
                                    </div>
                                    <div class="bl-sect-col-1-bottom"></div>
                                </div>

                            </div>

                        </div>
                    </li>
                </ul>

            </div>
            <div class="bl-v2-right">
                <div class="bl-v2">
                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                    <div class="bl-v2-r-left">
                        <div class="bl-v2-r-left-title">
                            <div class="b-bl-v2  text-uppercase">
                                <span> Chung Cư SunShine</span>
                            </div>
                            <div class="content-bl-v2">
                                <div class="content-bl-v2-left">
                                    <span>Tên dự án: </span>
                                </div>
                                <div class=" content-bl-v2-left content-bl-v2-right">
                                    <span>Sunshine City</span>
                                </div>
                            </div>
                            <div class="content-bl-v2">
                                <div class="content-bl-v2-left">
                                    <span>Chủ đầu tư dự án:</span>
                                </div>
                                <div class=" content-bl-v2-left content-bl-v2-right">
                                    <span>Chủ đầu tư tập đoàn Sunshine Group</span>
                                </div>
                            </div>
                            <div class="content-bl-v2">
                                <div class="content-bl-v2-left">
                                    <span>Vị trí dự án:</span>
                                </div>
                                <div class=" content-bl-v2-left content-bl-v2-right">
                                    <span>KDT Nam Thăng Long -KDT Ciputral, Bắc Từ Liêm, Hà Nội </span>
                                </div>
                            </div>
                            <div class="content-bl-v2">
                                <div class="content-bl-v2-left">
                                    <span>Tổng diện tích dự án:</span>
                                </div>
                                <div class=" content-bl-v2-left content-bl-v2-right">
                                    <span>Chung cư và biệt thự liền kề</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bl-v2-r-right">
                        <img src="resources/img/bdqh-1.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<script src="resources/js/map.js"></script>