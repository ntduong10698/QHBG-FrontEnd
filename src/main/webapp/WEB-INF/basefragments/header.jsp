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
                <div class="liinput"><input type="text" id="email" placeholder="Email" required></div>
                <div class="liinput"><input type="password" id="password" placeholder="Mật khẩu" required></div>
                <div class="rpw">
                    <input type="checkbox">
                    <span>Nhớ tài khoản và mật khẩu</span>
                </div>
                <span class="libt"> <button  id="submit-log">Đăng nhập</button></span>
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
                    <span>Họ và tên: <span>(*)</span> <span class="error">Vui lòng điền thông tin vào đây</span></span>
                    <input id="fullname" data-bol="false" type="text" required>
                </div>
                <div class="sicitem-wp">
                    <span>Email: <span>(*)</span> <span class="error">Vui lòng điền thông tin vào đây</span></span>
                    <input id="emailSign" data-bol="false" type="text" required>
                </div>
                <div class="sicitem-wp">
                    <span>Mật khẩu: <span>(*)</span> <span class="error">Vui lòng điền thông tin vào đây</span></span>
                    <input id="pass1" data-bol="false" type="password" required>
                </div>
                <div class="sicitem-wp">
                    <span>Nhập lại mật khẩu: <span>(*)</span> <span class="error">Vui lòng điền thông tin vào đây</span></span>
                    <input id="pass2" data-bol="false" type="password" required>
                </div>

                <div class="sicitem-wp">
                    <span>Địa chỉ: <span>(*)</span > <span class="error">Vui lòng điền thông tin vào đây</span></span>
                    <input id="address" data-bol="false" type="text" required>
                </div>
            </div>
            <div class="sicright" id="sicright">

                <div class="sicitem-wp">
                    <span>Số điện thoại: <span>(*)</span> <span class="error">Vui lòng điền thông tin vào đây</span></span>
                    <input id="phoneNumber"  data-bol="false" type="text" required>
                </div>
                <div class="sicitem-wp">
                    <span>Số CMND: <span>(*)</span> <span class="error">Vui lòng điền thông tin vào đây</span></span>
                    <input id="numberCMT" data-bol="false" type="text" required>
                </div>
                <div class="sicitem-wp">
                    <span>Ngày cấp: <span>(*)</span> <span class="error">Vui lòng điền thông tin vào đây</span></span>
                    <input id="dateCMT" data-bol="false" type="date" required>
                </div>
                <div class="sicitem-wp">
                    <span>Nơi cấp: <span>(*)</span> <span class="error">Vui lòng điền thông tin vào đây</span></span>
                    <input id="addCMT" data-bol="false" type="text" required>
                </div>
            </div>
        </div>
        <span class="sisave"><button id="submitResign" ><i
                class="fas fa-download"></i> Lưu lại</button></span>
        <div class="sistatus">
            <a class="out">Thoát</a>
            <a class="sibcl"><i class="fas fa-long-arrow-alt-left"></i> Quay lại</a>
        </div>
    </div>
</section>
<!-- HEADER -->
<header>
    <div class="hwapper d-flex" id="header">
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
                        <span>banbientap_stmt@bacgiang.gov.vn</span>
                    </a>
                    <a class="icon " href="tel:02043856047" title="Phone">
                        <div class="ihwp">
                            <i class="fas fa-phone"></i>
                        </div>
                        <a href="tel:02043856047"><span>0204.3856.047</span>  </a>
                    </a>
                    <a class="icon "
                       href="https://www.google.com/maps/place/Sở+Tài+nguyên+và+Môi+trường+tỉnh+Bắc+Giang/@21.2771565,106.1935929,17z/data=!3m1!4b1!4m5!3m4!1s0x31356d0d66577871:0x627892764830097b!8m2!3d21.2771565!4d106.1957816?hl=vi-VN"
                       title="Địa chỉ">
                        <div class="ihwp">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                     <a
                                href="https://www.google.com/maps/place/S%E1%BB%9F+T%C3%A0i+nguy%C3%AAn+v%C3%A0+M%C3%B4i+tr%C6%B0%E1%BB%9Dng+t%E1%BB%89nh+B%E1%BA%AFc+Giang/@21.2769586,106.1946887,18z/data=!4m5!3m4!1s0x31356d0d66577871:0x627892764830097b!8m2!3d21.2771565!4d106.1957816?hl=vi-VN"> <span>Số 50 Đường Ngô Gia Tự - TP.Bắc Giang</span> </a>
                    </a>
                </div>
                <div class="col-2 d-flex justify-content-end p-0 hdright">
                    <div class="noapp  d-flex" id="addUser">
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

                    </div>
                </div>
            </div>
        </div>
        <a id="lockhome" class="icon iconacc "  title="Tài Khoản">
            <div class="ihwp">
                <i class="fas fa-lock"></i>
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
                        <a href="gia-dat-nong-nghiep" title="giá đất">
                            <span>Giá đất</span>
                        </a>
                        <ul class="submenu-lv1 sml1v2">
                            <li><a href="gia-dat-nong-nghiep"><i class="fas fa-angle-double-right"></i> <span>Bảng giá đất nông
                                            nghiệp</span>
                                <i class="fas fa-caret-right"></i>
                            </a>
                                <ul class="submenu-lv2">
                                    <li><a href="gia-dat-nong-nghiep"><i class="fas fa-angle-double-right"></i>
                                        <span>Giai đoạn 2015-2019</span></a></li>
                                </ul>
                            </li>
                            <li><a href="gia-dat-phi-nong-nghiep"><i class="fas fa-angle-double-right"></i> <span>Bảng giá đất phi nông
                                            nghiệp</span>
                                <i class="fas fa-caret-right"></i>
                            </a>
                                <ul class="submenu-lv2">
                                    <li><a href="gia-dat-phi-nong-nghiep"><i class="fas fa-angle-double-right"></i>
                                        <span>Giai đoạn 2015-2019</span></a></li>
                                </ul>
                            </li>
                            <li><a href="quyet-dinh?nhomQuyetDinh=1"><i class="fas fa-angle-double-right"></i> <span>Quyết định giá đất cụ
                                            thể</span></a></li>
                            <li><a href="he-so-dieu-chinh"><i class="fas fa-angle-double-right"></i> <span>Hệ số điều
                                            chỉnh</span></a></li>
                        </ul>
                    </li>
                    <li class="menu-item">
                        <a href="quy-hoach?map=0" title="quy hoạch">
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
                                <a href="quy-hoach?map=1">
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
                            <li><a href="tra-cuu-quy-hoach"><i class="fas fa-angle-double-right"></i> <span>Tra cứu quy hoạch sử dụng đất</span></a>
                            </li>
                            <li><a href="tra-cuu-dieu-chinh-quy-hoach"><i class="fas fa-angle-double-right"></i>
                                <span>Tra cứu điều chỉnh quy hoạch</span></a></li>
                        </ul>
                    </li>
                    <li class="menu-item">
                        <a href="ke-hoach?map=1&nam=2015" title="kế hoạch">
                            <span>Kế hoạch</span>
                        </a>
                        <ul class="submenu-lv1 sml1v2">
                            <li>
                                <a href="ke-hoach?map=1&nam=2015">
                                    <i class="fas fa-angle-double-right"></i>
                                    <span>Kế hoạch sử dụng đất các huyện, thành phố</span>
                                    <i class="fas fa-caret-right"></i>
                                </a>
                                <ul class="submenu-lv2">
                                    <li><a href="ke-hoach?map=1&nam=2015">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Thành phố Bắc Giang</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="ke-hoach?map=1&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=1&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=1&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=1&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=1&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="ke-hoach?map=2&nam=2015">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Hiệp Hòa</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="ke-hoach?map=2&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=2&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=2&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=2&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=2&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="ke-hoach?map=3&nam=2015">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Yên Dũng</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="ke-hoach?map=3&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=3&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=3&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=3&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=2&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="ke-hoach?map=4&nam=2015">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Lục Nam</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="ke-hoach?map=4&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=4&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=4&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=4&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=4&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="ke-hoach?map=5&nam=2015">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Sơn Động</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="ke-hoach?map=5&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=5&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=5&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=5&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=5&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="ke-hoach?map=6&nam=2015">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Lạng Giang</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="ke-hoach?map=6&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=6&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=6&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=6&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=6&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="ke-hoach?map=7&nam=2015">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Việt Yên</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="ke-hoach?map=7&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=7&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=7&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=7&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=7&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="ke-hoach?map=8&nam=2015">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Tân Yên</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="ke-hoach?map=8&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=8&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=8&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=8&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=8&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="ke-hoach?map=9&nam=2015">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Lục Ngạn</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="ke-hoach?map=9&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=9&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=9&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=9&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=9&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="ke-hoach?map=10&nam=2015">
                                        <i class="fas fa-angle-double-right"></i>
                                        <span>Huyện Yên Thế</span>
                                        <i class="fas fa-caret-right"></i>
                                    </a>
                                        <ul class="submenu-lv3">
                                            <li><a href="ke-hoach?map=10&nam=2015">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2015</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=10&nam=2016">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2016</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=10&nam=2017">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2017</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=10&nam=2018">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2018</span>
                                            </a></li>
                                            <li><a href="ke-hoach?map=10&nam=2019">
                                                <i class="fas fa-angle-double-right"></i>
                                                <span>2019</span>
                                            </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="tra-cuu-ke-hoach"><i class="fas fa-angle-double-right"></i>
                                <span>Tra cứu kế hoạch sử dụng đất</span></a></li>
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
                        <a href="huong-dan" title="hướng dẫn">
                            <span>Hướng dẫn</span>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="gop-y" title="góp ý">
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