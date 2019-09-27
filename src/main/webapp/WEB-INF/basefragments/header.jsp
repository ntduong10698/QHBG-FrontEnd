<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<section class="m-loginsignin">
    <div class="login-bg"></div>
    <div class="d-login">
        <div class="login-wp">
            <div class="liimg-wp">
                <img src="resources/img/user1.png" alt="">
            </div>
            <div class="litext-wp">
                <span class="lit-cap">Tài khoản</span>
                <div class="liinput"><input type="text" placeholder="Email"></div>
                <div class="liinput"><input type="password" placeholder="Mật khẩu"></div>
                <div class="rpw">
                    <input type="checkbox">
                    <span>Nhớ tài khoản và mật khẩu</span>
                </div>
                <span class="libt"> <a href="#">Đăng nhập</a></span>
                <div class="listatus">
                    <a class="out">Thoát</a>
                    <a class="licsi">Đăng ký</a>
                </div>
            </div>
        </div>
    </div>
    <div class="d-signin">
        <div class="siimg">
            <img src="resources/img/suser1.png" alt="">
        </div>
        <div class="sicap-wp">
            <span>Thông tin đăng ký</span>
        </div>
        <div class="sicontent">
            <div class="sicleft">
                <div class="sicitem-wp">
                    <span>Tên đăng nhập: <span>(*)</span></span>
                    <input type="text">
                </div>
                <div class="sicitem-wp">
                    <span>Mật khẩu: <span>(*)</span></span>
                    <input type="password">
                </div>
                <div class="sicitem-wp">
                    <span>Nhập lại mật khẩu: <span>(*)</span></span>
                    <input type="password">
                </div>
                <div class="sicitem-wp">
                    <span>Họ và tên: <span>(*)</span></span>
                    <input type="text">
                </div>
                <div class="sicitem-wp">
                    <span>Địa chỉ: <span>(*)</span></span>
                    <input type="text">
                </div>
            </div>
            <div class="sicright">
                <div class="sicitem-wp">
                    <span>Email: <span>(*)</span></span>
                    <input type="text">
                </div>
                <div class="sicitem-wp">
                    <span>Số điện thoại: <span>(*)</span></span>
                    <input type="text">
                </div>
                <div class="sicitem-wp">
                    <span>Số CMND: <span>(*)</span></span>
                    <input type="text">
                </div>
                <div class="sicitem-wp">
                    <span>Ngày cấp: <span>(*)</span></span>
                    <input type="text">
                </div>
                <div class="sicitem-wp">
                    <span>Nơi cấp: <span>(*)</span></span>
                    <input type="text">
                </div>
            </div>
        </div>
        <span class="sisave"><a href="#"><i class="fas fa-download"></i> Lưu lại</a></span>
        <div class="sistatus">
            <a class="out">Thoát</a>
            <a class="sibcl"><i class="fas fa-long-arrow-alt-left"></i> Quay lại</a>
        </div>
    </div>
</section>
<!-- HEADER -->
<header>
    <div class="hwapper d-flex">
        <a class="icon" href="/home" title="Home">
            <div class="ihwp iconhome">
                <i class="fas fa-home"></i>
            </div>
        </a>
        <div class="container">
            <div class="row d-flex justify-content-between">
                <div class="col-8 d-flex p-0 hdleft">
                    <a class="icon" href="mailto:so_tnmt_vt@bacgiang.gov.vn" title="Mail">
                        <div class="ihwp">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <span>so_tnmt_vt@bacgiang.gov.vn</span>
                    </a>
                    <a class="icon " href="tel:02043856047" title="Phone">
                        <div class="ihwp">
                            <i class="fas fa-phone"></i>
                        </div>
                        <span>0204.3856047 - 0204.3858831</span>
                    </a>
                    <a class="icon "
                       href="https://www.google.com/maps/place/Sở+Tài+nguyên+và+Môi+trường+tỉnh+Bắc+Giang/@21.2771565,106.1935929,17z/data=!3m1!4b1!4m5!3m4!1s0x31356d0d66577871:0x627892764830097b!8m2!3d21.2771565!4d106.1957816?hl=vi-VN"
                       title="Địa chỉ">
                        <div class="ihwp">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <span>Số 50 Đường Ngô Gia Tự - TP.Bắc Giang</span>
                    </a>
                </div>
                <div class="col-2 d-flex justify-content-end p-0 hdright">
                    <div class="noapp  d-flex">
                        <a class="icon " href="#" title="Tin tức">
                            <div class="ihwp">
                                <i class="far fa-newspaper"></i>
                            </div>
                        </a>
                        <a class="icon" href="#" title="Góp ý">
                            <div class="ihwp">
                                <i class="fas fa-comments"></i>
                            </div>
                        </a>
                        <a class="icon" href="#" title="Hướng dẫn">
                            <div class="ihwp">
                                <i class="fas fa-map-signs"></i>
                            </div>
                        </a>
                        <a href="#" class="user-name show" title="Tên Chủ tài Khoản">
                            <div class="usn-wp">
                                <div class="usn-img">
                                    <img src="resources/img/user2.png" alt="">
                                </div>
                                <span>Trương Thị Sáng</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <a class="icon iconacc hide" href="#" title="Tài Khoản">
            <div class="ihwp">
                <i class="fas fa-lock"></i>
            </div>
        </a>
        <a href="#" class="icon iconlogout show" title="Đăng Xuất">
            <div class="ihwp">
                <i class="fas fa-sign-out-alt" title="Đăng Xuất"></i>
            </div>
        </a>
    </div>
</header>
<!-- END HEADER -->
<!-- LOGO -->
<!-- END LOGO -->
<section class="logo">
    <div class="container">
        <div class="row">
            <div class="logo-wp">
                <div class="img-wp">
                    <a href="/home"><img src="resources/img/logo.png" alt=""></a>
                </div>
                <div class="logotext-wp">
                    <span>Sở tài nguyên và môi trường tỉnh Bắc Giang</span>
                    <span>Giá đất và quy hoạch sử dụng đất</span>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- NAV -->
<nav>
    <div class="container">
        <div class="row">
            <div class="navigation">
                <ul class="header__menu">
                    <li class="menu-item">
                        <a href="home" class="active" title="Home">
                            <span>Trang chủ</span>
                        </a>
                    </li>
<%--                    <li class="menu-item item-product">--%>
<%--                        <a href="#" title="tin tức">--%>
<%--                            <span>Tin tức</span>--%>
<%--                        </a>--%>
<%--                    </li>--%>
                    <li class="menu-item">
                        <a href="gia-dat" title="giá đất">
                            <span>Giá đất</span>
                        </a>
                        <ul class="submenu-lv1 sml1v2">
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> <span>Bảng giá đất nông
                                            nghiệp</span>
                                <i class="fas fa-caret-right"></i>
                                </a>
                                <ul class="submenu-lv2">
                                    <li><a href="#"><i class="fas fa-angle-double-right"></i> <span>Giai đoạn 2015-2019</span></a></li>
                                </ul>
                            </li>
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> <span>Bảng giá đất phi nông
                                            nghiệp</span>
                                <i class="fas fa-caret-right"></i>
                                </a>
                                <ul class="submenu-lv2">
                                    <li><a href="#"><i class="fas fa-angle-double-right"></i> <span>Giai đoạn 2015-2019</span></a></li>
                                </ul>
                            </li>
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> <span>Quyết định giá đất cụ
                                            thể</span></a></li>
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> <span>Hệ số điều
                                            chỉnh</span></a></li>
                        </ul>
                    </li>
                    <li class="menu-item">
                        <a href="#" title="quy hoạch">
                            <span>Quy hoạch</span>
                        </a>
                        <ul class="submenu-lv1 sml1v2">
                            <li>
                                <a href="quy-hoach?map=0">
                                    <i class="fas fa-angle-double-right"></i>
                                    <span>Quy hoạch sử dụng đất tỉnh Bắc Giang</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-angle-double-right"></i>
                                    <span>Quy hoạch sử dụng đất các huyện, thành phố</span>
                                    <i class="fas fa-caret-right"></i>
                                </a>
                                <ul class="submenu-lv2">
                                    <li><a href="quy-hoach?map=1">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Thành phố Bắc Giang</span>
                                    </a>
                                    <li><a href="quy-hoach?map=2">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Hiêp Hòa</span>
                                    </a>
                                    </li>
                                    <li><a href="quy-hoach?map=3">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Yên Dũng</span>
                                    </a>
                                    </li>
                                    <li><a href="quy-hoach?map=4">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Lục Nam</span>
                                    </a>
                                    </li>
                                    <li><a href="quy-hoach?map=5">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Sơn Động</span>
                                    </a>
                                    </li>
                                    <li><a href="quy-hoach?map=6">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Lạng Giang</span>
                                    </a>
                                    </li>
                                    <li><a href="quy-hoach?map=7">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Việt Yên</span>
                                    </a>
                                    </li>
                                    <li><a href="quy-hoach?map=8">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Tân Yên</span>
                                    </a>
                                    </li>
                                    <li><a href="quy-hoach?map=9">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Lục Ngạn</span>
                                    </a>
                                    </li>

                                    <li><a href="quy-hoach?map=10">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Yên Thế</span>
                                    </a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> <span>Tra cứu quy hoạch sử dụng đất</span></a></li>
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> <span>Tra cứu điều chỉnh quy hoạch</span></a></li>
                        </ul>
                    </li>
                    <li class="menu-item">
                        <a href="#" title="kế hoạch">
                            <span>Kế hoạch</span>
                        </a>
                        <ul class="submenu-lv1 sml1v2">
                            <li>
                                <a href="#">
                                    <i class="fas fa-angle-double-right"></i>
                                    <span>Kế hoạch sử dụng đất các huyện, thành phố</span>
                                    <i class="fas fa-caret-right"></i>
                                </a>
                                <ul class="submenu-lv2">
                                    <li><a href="#">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Thành phố Bắc Giang</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="/ke-hoach?map=1&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=1&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=1&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=1&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=1&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Hiệp Hòa</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="/ke-hoach?map=2&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=2&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=2&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=2&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=2&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Yên Dũng</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="/ke-hoach?map=3&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=3&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=3&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=3&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=2&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Lục Nam</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="/ke-hoach?map=4&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=4&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=4&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=4&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=4&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Sơn Động</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="/ke-hoach?map=5&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=5&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=5&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=5&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=5&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Lạng Giang</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="/ke-hoach?map=6&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=6&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=6&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=6&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=6&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Việt Yên</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="/ke-hoach?map=7&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=7&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=7&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=7&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=7&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Tân Yên</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="/ke-hoach?map=8&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=8&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=8&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=8&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=8&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Lục Ngạn</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="/ke-hoach?map=9&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=9&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=9&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=9&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=9&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Yên Thế</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="/ke-hoach?map=10&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=10&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=10&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=10&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="/ke-hoach?map=10&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> <span>Tra cứu kế hoạch sử dụng đất</span></a></li>
                        </ul>
                    </li>
                    <li class="menu-item">
                        <a href="du-an" title="công trình & dự án">
                            <span>Công trình & Dự án</span>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="quyet-dinh" title="quyết định">
                            <span>Quyết định</span>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="#" title="hướng dẫn">
                            <span>Hướng dẫn</span>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="#" title="góp ý">
                            <span>Góp ý</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
<!-- END NAV -->
<section class="gra"></section>