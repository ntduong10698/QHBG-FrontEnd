<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="resources/css/select2.min.css">
<link rel="stylesheet" href="resources/css/landPrice.css">
<!-- MAIN -->
<main>
    <section class="landprice">
        <div class="container">
            <div class="row">
                <div class="col-3 p-lg-0">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link " data-toggle="tab" href="#menu0">
                                <div class="ni-wp">
                                    <div class="ni-img">
                                        <img src="resources/img/coin$.png" alt="">
                                    </div>
                                    <div class="ni-text">
                                        <span>Bảng giá đất nông nghiệp</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#menu1" data-toggle="tab">
                                <div class="ni-wp">
                                    <div class="ni-img">
                                        <img src="resources/img/coin$.png" alt="">
                                    </div>
                                    <div class="ni-text">
                                        <span>Bảng giá đất phi nông nghiệp</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#menu2" data-toggle="tab">
                                <div class="ni-wp">
                                    <div class="ni-img">
                                        <img src="resources/img/search.png" alt="">
                                    </div>
                                    <div class="ni-text">
                                        <span>Tra cứu hệ số điều chỉnh</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#menu3" data-toggle="tab">
                                <div class="ni-wp">
                                    <div class="ni-img">
                                        <img src="resources/img/decistion.png" alt="">
                                    </div>
                                    <div class="ni-text">
                                        <span>Quyết định giá đất cụ thể</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-1">
                    <div class="ver">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="col-8">
                    <div class="tab-content">
                        <div class="tab-pane fade" id="menu0">
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Năm / Giai đoạn:</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="agriland-stage" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Bảng giá đất:</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="agriland-landprice" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Huyện / Thành phố:</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="agriland-city" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Tên đường, đoạn</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="agriland-street" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-search">
                                <a class="ts-wp" href="#">
                                    <i class="fas fa-search"></i>
                                    <span>Tìm kiếm</span>
                                </a>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="menu1">
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Năm / Giai đoạn:</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="agriland-01" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Bảng giá đất:</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="agriland-02" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Huyện / Thành phố:</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="agriland-03" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Tên đường, Alalala</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="agriland-04" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-search">
                                <a class="ts-wp" href="#">
                                    <i class="fas fa-search"></i>
                                    <span>Tìm kiếm</span>
                                </a>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="menu2">
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Năm / Giai đoạn:</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="adjustment-01" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Bảng giá đất:</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="adjustment-02" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Huyện / Thành phố:</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="adjustment-03" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Tên đường, Ahihihi</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="adjustment-04" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-search">
                                <a class="ts-wp" href="#">
                                    <i class="fas fa-search"></i>
                                    <span>Tìm kiếm</span>
                                </a>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="menu3">
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Năm / Giai đoạn:</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="decision-01" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Bảng giá đất:</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="decision-02" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Huyện / Thành phố:</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="decision-03" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item">
                                <div class="ti-ele1">
                                    <div class="ele1-left">
                                        <span>Tên đường, Akakaka</span>
                                        <div class="mnver">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="ele1-right">
                                        <select id="decision-04" class="mselect">
                                            <option value="">--- Gõ để tìm kiếm ---</option>
                                            <option value="0">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="1">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="2">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="3">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="4">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="5">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">Bảng giá đất ở tại đô thị, ven trục đường giao thông
                                            </option>
                                            <option value="6">ha</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-search">
                                <a class="ts-wp" href="#">
                                    <i class="fas fa-search"></i>
                                    <span>Tìm kiếm</span>
                                </a>
                            </div>
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