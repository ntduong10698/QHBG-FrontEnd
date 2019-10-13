<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<link rel="stylesheet" href="resources/css/feedBack.css">
<script src="resources/js/ajax/ajax_feedBack.js"></script>
<!-- MAIN -->
<main>
    <section class="p-feedback">
        <div class="container">
            <div class="row">
                <div class="col-6" style="margin: auto;">
                    <div class="pfl-wp">
                        <div class="pfl-cap">
                            <span class="pfc-cap">Gửi ý kiến đóng góp / Câu hỏi</span>
                        </div>
                        <div class="pflbc-wp">
                            <div class="pfl-note">
                                <span>Vui lòng nhập đầy đủ các thông tin để chúng tôi có thể nhận được phản hồi chính xác.</span>
                            </div>
                            <div class="pfl-content">
                                <div class="sicitem-wp">
                                    <span >Họ và tên: <span>(*)</span></span>
                                    <input type="text" placeholder="Nhập họ và tên">
                                </div>
                                <div class="sicitem-wp">
                                    <span >Email: <span>(*)</span></span>
                                    <input type="email" placeholder="Nhập Email">
                                </div>
                                <div class="sicitem-wp">
                                    <span >Tiêu đề: <span>(*)</span></span>
                                    <input type="text" placeholder="Nhập Tiêu đề">
                                </div>
                                <div class="sicitem-wp">
                                    <span >Nội dung: <span>(*)</span></span>
                                    <textarea  placeholder="Nhập nội dung góp ý"></textarea>
                                </div>
                                <div class="sicitem-wp">
                                    <div><span></span></div>
                                    <div class="sendfb"><a href="#" class="asendfb">Gửi góp ý</a></div>
                                </div>
                            </div>
                            <div class="pfl-hcontent">
                                <div class="pflh-wp">
                                    <div class="pflhimg">
                                        <img src="./public/img/closeicon.png" alt="">
                                    </div>
                                    <div class="pflh-text ">
                                        <div class="fb-item tabcontentleft" href="tin1" id="tabcontentid">
                                            <!-- <div class="fbi-num">
                                                <span>1</span>
                                            </div>
                                            <span>Chưa nhận được suât tái định cư theo quy
                                                định nhà nước, nhà tôi phải đến cơ quan nào
                                                để hỏi làm việc lấy lại lô đất đó ?Chưa nhận được suât tái định cư theo quy
                                                định nhà nước, nhà tôi phải đến cơ quan nào
                                                để hỏi làm việc lấy lại lô đất đó ?
                                            </span> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<%--                <div class="col-6">--%>
<%--                    <div class="pfr-wp">--%>
<%--                        <div class="pfr-cap">--%>
<%--                            <span><i class="fas fa-comments"></i></span>--%>
<%--                            <span class="pfc-cap">Hỏi đáp</span>--%>
<%--                        </div>--%>
<%--                        <div class="pfr-content">--%>
<%--                            <a class="fb-item tab-item1" >--%>
<%--                                <div class="fbi-num">--%>
<%--                                    <span>1</span>--%>
<%--                                </div>--%>
<%--                                <span>Chưa nhận được suât tái định cư theo quy--%>
<%--                                        định nhà nước, nhà tôi phải đến cơ quan nào--%>
<%--                                        để hỏi làm việc lấy lại lô đất đó ?Chưa nhận được suât tái định cư theo quy--%>
<%--                                        định nhà nước, nhà tôi phải đến cơ quan nào--%>
<%--                                        để hỏi làm việc lấy lại lô đất đó ?--%>
<%--                                    </span>--%>
<%--                            </a>--%>
<%--                            <a class="fb-item tab-item1">--%>
<%--                                <div class="fbi-num ">--%>
<%--                                    <span>2</span>--%>
<%--                                </div>--%>
<%--                                <span>Chưa nhận được suât tái định cư theo quy--%>
<%--                                        định nhà nước, nhà tôi phải đến cơ quan nào--%>
<%--                                        để hỏi làm việc lấy lại lô đất đó ?</span>--%>
<%--                            </a>--%>
<%--                            <a class="fb-item tab-item1" >--%>
<%--                                <div class="fbi-num">--%>
<%--                                    <span>3</span>--%>
<%--                                </div>--%>
<%--                                <span>Chưa nhận được suât tái định cư theo quy--%>
<%--                                        định nhà nước, nhà tôi phải đến cơ quan nào--%>
<%--                                        để hỏi làm việc lấy lại lô đất đó ?</span>--%>
<%--                            </a>--%>
<%--                            <a class="fb-item tab-item1" >--%>
<%--                                <div class="fbi-num">--%>
<%--                                    <span>4</span>--%>
<%--                                </div>--%>
<%--                                <span>Chưa nhận được suât tái định cư theo quy--%>
<%--                                        định nhà nước, nhà tôi phải đến cơ quan nào--%>
<%--                                        để hỏi làm việc lấy lại lô đất đó ?</span>--%>
<%--                            </a>--%>
<%--                            <a class="fb-item tab-item1" >--%>
<%--                                <div class="fbi-num">--%>
<%--                                    <span>5</span>--%>
<%--                                </div>--%>
<%--                                <span>Chưa nhận được suât tái định cư theo quy--%>
<%--                                        định nhà nước, nhà tôi phải đến cơ quan nào--%>
<%--                                        để hỏi làm việc lấy lại lô đất đó ?</span>--%>
<%--                            </a>--%>
<%--                            <a class="fb-item tab-item1" >--%>
<%--                                <div class="fbi-num">--%>
<%--                                    <span>6</span>--%>
<%--                                </div>--%>
<%--                                <span>Chưa nhận được suât tái định cư theo quy--%>
<%--                                        định nhà nước, nhà tôi phải đến cơ quan nào--%>
<%--                                        để hỏi làm việc lấy lại lô đất đó ?</span>--%>
<%--                            </a>--%>
<%--                            <a class="fb-item tab-item1" >--%>
<%--                                <div class="fbi-num">--%>
<%--                                    <span>7</span>--%>
<%--                                </div>--%>
<%--                                <span>Chưa nhận được suât tái định cư theo quy--%>
<%--                                        định nhà nước, nhà tôi phải đến cơ quan nào--%>
<%--                                        để hỏi làm việc lấy lại lô đất đó ?</span>--%>
<%--                            </a>--%>
<%--                        </div>--%>
<%--                    </div>--%>
<%--                </div>--%>
            </div>
        </div>
    </section>
</main>
<!-- END MAIN -->