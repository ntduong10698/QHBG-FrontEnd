var arrPopUpMap = []; //khai bien toan cuc luu cac khoi khi duoc click
var checkMap = 0; // truong phan biet cac huyen va tinh
var year;
// xy ly click chi tiet khoi trong map
// tao ham de dua vao onlick vi chua biet ro thoi diem sinh ra popUP
function fnView(indexPopUp) {
    $(".block-main-l2").toggle();
    viewInfoSoild(arrPopUpMap[indexPopUp]);
}

// set view infoSoild chi tiet
function viewInfoSoild(data) {
    $("#infoSoild ul li:nth-child(1)").html(`<span>${ data.MaQuyHoach === undefined ? data.MaHienTrang : data.MaHienTrang+'/'+data.MaQuyHoach }</span>`);
    $("#infoSoild ul li:nth-child(2)").html(`<span>${ data.MucDichSuDung }</span>`);
    $("#infoSoild ul li:nth-child(3)").html(`<span>${ data.MucDichQuyHoach === undefined ? '...' : data.MucDichQuyHoach }</span>`);
    $("#infoSoild ul li:nth-child(4)").html(`<span>${ data.Tinh }</span>`);
    $("#infoSoild ul li:nth-child(5)").html(`<span>${ data.Huyen }</span>`);
    $("#infoSoild ul li:nth-child(6)").html(`<span>${ data.Xa }</span>`);
    setInfoKhUse(data);
}
//end xy ly click chi tiet khoi trong map

//set data infoKhUse qh,kh
function setInfoKhUse(data) {
    let pathName = window.location.href;
    let textViewLeft = '';
    let textViewRight = '';
    let mkh = data.MaQuyHoach === undefined ? data.MaHienTrang : data.MaQuyHoach;
    let chiTieu = data.MaQuyHoach === undefined ? data.MucDichSuDung : data.MucDichQuyHoach;
    if (pathName.indexOf("quy-hoach") > -1) {
        textViewLeft = `<li><span>Chỉ tiêu</span></li><li><span>Mã Đất</span></li><li><span>Tổng diện tích</span></li>`;
        $("#infoKhUse .chitiet-qh-left:nth-child(1) ul").html(textViewLeft);
        callThongKeQuyHoach(mkh, checkMap).then(rs => {
            if (rs.length > 0) {
                textViewRight = `<li><span>${chiTieu}</span></li><li><span>${mkh}</span></li><li><span>${rs[0].tongDienTich+" "+rs[0].unit}</span></li>`;
            } else {
                textViewRight = `<li><span>${chiTieu}</span></li><li><span>${mkh}</span></li><li><span>...  </span></li>`;
            }
            $("#infoKhUse .chitiet-qh-left:nth-child(2) ul").html(textViewRight);
        }).catch(err => {
            console.log(err);
        });
    } else if (pathName.indexOf("ke-hoach") > -1) {
        textViewLeft = `<li><span>Chỉ tiêu</span></li>
                        <li><span>Mã Đất</span></li>
                        <li><span>Tổng diện tích</span></li>
                        <li><span>Năm 2015</span></li>
                        <li><span>Năm 2016</span></li>
                        <li><span>Năm 2017</span></li>
                        <li><span>Năm 2018</span></li>
                        <li><span>Năm 2019</span></li>`;
        $("#infoKhUse .chitiet-qh-left:nth-child(1) ul").html(textViewLeft);
        callThongKeKeHoach(mkh, checkMap).then(rs => {
            setTableInfoSoildKh(rs); //set data in tabelInfoSoildKh
            textViewRight += `<li><span>${chiTieu}</span></li>
                               <li><span>${mkh}</span></li>
                               <li><span>...</span></li>
                               <li><span>...</span></li>
                               <li><span>...</span></li>
                               <li><span>...</span></li>
                               <li><span>...</span></li>
                               <li><span>...</span></li>`;
            // dung year loc tu arr bản ghi
            $("#infoKhUse .chitiet-qh-left:nth-child(2) ul").html(textViewRight);// set tat ca trong hop sang khong co, neu co dung jquery set lai
            if (rs.length > 0) {
                rs.map(data => {
                    if (data.quyHoachKeHoach == 'KH') {
                        // chi lay data KH o chi tiet
                        if (data.year == year) {
                            $("#infoKhUse .chitiet-qh-left:nth-child(2) ul li:nth-child(3)").html(`<span>${data.tongDienTich+" "+data.unit}</span>`); // set lai tong dien tich voi li thu 3
                        }
                        switch (data.year) {
                            // voi moi nam view ra tong dien tich ma day o nam day
                            case '2015':
                                $("#infoKhUse .chitiet-qh-left:nth-child(2) ul li:nth-child(4)").html(`<span>${data.tongDienTich+" "+data.unit}</span>`);
                                break;
                            case '2016':
                                $("#infoKhUse .chitiet-qh-left:nth-child(2) ul li:nth-child(5)").html(`<span>${data.tongDienTich+" "+data.unit}</span>`);
                                break;
                            case '2017':
                                $("#infoKhUse .chitiet-qh-left:nth-child(2) ul li:nth-child(6)").html(`<span>${data.tongDienTich+" "+data.unit}</span>`);
                                break;
                            case '2018':
                                $("#infoKhUse .chitiet-qh-left:nth-child(2) ul li:nth-child(7)").html(`<span>${data.tongDienTich+" "+data.unit}</span>`);
                                break;
                            case '2019':
                                $("#infoKhUse .chitiet-qh-left:nth-child(2) ul li:nth-child(8)").html(`<span>${data.tongDienTich+" "+data.unit}</span>`);
                                break;
                        }
                    }
                })
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
// end set data infoKhUse

//set data tableInfoSoild-KH
function setTableInfoSoildKh(dataTable) {
    let viewTable = '';
    let dataKh = dataTable.filter(data => data.quyHoachKeHoach === "KH");
    let viewThead = '';
    dataKh.sort(function (a, b) {
        return a.year - b.year;
    })
    let dataHt = dataTable.filter(data => (data.quyHoachKeHoach == "KH-HT" && data.year == year));
    //create khung cac bang
    // tao khung thead cho cac bang
    if(dataHt.length > 0) {
        viewThead = `<thead><tr>
                    <th rowspan="2">Chỉ tiêu sử dụng đất</th>
                    <th rowspan="2">Mã</th>
                    <th rowspan="2">Diện tích</th>
                    <th rowspan="2">Cơ cấu</th>
                    <th colspan=${dataHt[0].dienTichTheoXas.length}>Phân theo đơn vị hành chính</th>
                 </tr><tr>`;
        dataHt[0].dienTichTheoXas.map(data => {
            viewThead += `<th>${data.xa == null? "Xã ..." : data.xa.tenXa}</th>`;
        })
        viewThead += `</tr></thead>`;
    } else if(dataKh.length > 0) {
        viewThead = `<thead><tr>
                    <th rowspan="2">Chỉ tiêu sử dụng đất</th>
                    <th rowspan="2">Mã</th>
                    <th rowspan="2">Diện tích</th>
                    <th rowspan="2">Cơ cấu</th>
                    <th colspan=${dataKh[0].dienTichTheoXas.length}>Phân theo đơn vị hành chính</th>
                 </tr><tr>`;
        dataKh[0].dienTichTheoXas.map(data => {
            viewThead += `<th>${data.xa == null? "Xã ..." : data.xa.tenXa}</th>`;
        })
        viewThead += `</tr></thead>`;
    } else {
        viewThead = "Chưa có dữ liệu";
    }
    //end tao khung thead cho cac bang

    //bang hien trang, khong co data thi in ra chua co du lieu
    viewTable = `<div class="table-wp">
                <div class="tablep-cap">
                    <span>${dataHt[0] == null? "" : dataHt[0].name}</span>
                </div>
                <div style="overflow-y: auto">
                    <table class="table table-bordered">
                        ${viewThead}
                    </table>
                </div>
            </div>`;
    //bang kh cac nam, neu khong co data thì map se khong chay
    dataKh.map(data => {
        viewTable += `<div class="table-wp">
                <div class="tablep-cap">
                    <span>${data.name}</span>
                </div>
                <div style="overflow-y: auto">
                    <table class="table table-bordered">
                        ${viewThead}
                    </table>
                </div>
            </div>`;
    })
    $("#tableInfoSoild").html(viewTable);
    //end create khung cac bang


    //click view table loi refes lai trang
    $("a#clickViewTableInfoSoild").click(function () {
        $(".tbdetailf").addClass("show");
        return false;
    })
}
//end set data tableInfoSoild-KH


//view map arcgis
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/MapImageLayer",
    "esri/widgets/Legend",
    "esri/geometry/Extent",
    "esri/geometry/SpatialReference",
    "esri/tasks/IdentifyTask",
    "esri/tasks/support/IdentifyParameters",
    "esri/symbols/SimpleFillSymbol",
    "esri/Graphic",
    "esri/tasks/QueryTask",
    "esri/tasks/support/Query",
    "dojo/on",
    "dojo/dom",
    "esri/layers/support/Sublayer",
    "dojo/_base/array",
    "esri/request",
    "esri/geometry/Point",
    "dojo/domReady!"
], function (Map, MapView, MapImageLayer, Legend, Extent, SpatialReference, IdentifyTask,
             IdentifyParameters, SimpleFillSymbol, Graphic, QueryTask, Query, on, dom, Sublayer, arrayUtils, esriRequest, Point) {

    //function handling

    //get url web
    function getUrlMap() {
        let rs = "http://103.9.86.47:6080/arcgis/rest/services/";
        let pathName = window.location.href;
        let arrSplit = [];
        let indexHuyen;
        if (pathName.search("quy-hoach") > -1) {
            arrSplit = pathName.split("map=");
            if (arrSplit[1] !== "0") {
                checkMap = arrSplit[1] - 0; // set truong phan biet huyen va tinh// convert ve so
                indexHuyen = checkMap - 1; // url tinh map =0, cac huyen 1-10, chuyen ve de truy cap index trong mang bat dau tu 0
                rs += `Quy_Hoach_${ARR_HUYEN[indexHuyen]}_2015_2019`;
            } else {
                rs += "Quy_Hoach_Bac_Giang_2015_2019";
            }
        } else if (pathName.search("ke-hoach") > -1) {
            arrSplit = pathName.split("map=");
            checkMap = arrSplit[1].split("&")[0] - 0; //convert ve so
            indexHuyen = checkMap - 1; // url tinh map =0, cac huyen 1-10
            year = pathName.split("nam=")[1];
            rs += `Ke_Hoach_${ARR_HUYEN[indexHuyen]}_${year}`;
        }
        console.log(rs+"/MapServer")
        return rs + "/MapServer";
    }
    //end get url web

    //set upper in inputSearch
    $('#inputSearch').keyup(function () {
        this.value = this.value.toUpperCase();
    });

    //get groupLayer QuyHoach, NenDiaLy, HienTrang in fullLayerMap
    function filterSublayers(layersCall) {
        return layersCall.filter(function findGroupLayer(data){
            return (data.name === "QuyHoach" || data.name === "HienTrang" || data.name === "NenDiaLy") ;
        });
    }

    //get groupLayer KhoiQuyHoach, KhoiHienTrang in fullLayerMap
    function filterSublayersClick(layersCall) {
        return layersCall.filter(function findGroupLayer(data){
            return (data.name.search(/(QH_|KH_)(HienTrang|KeHoach|QuyHoach)/) > -1);
        });
    }
    
    //get layer KhoiXa hoac KhoiHuyen, -1 quy dinh la tim Khoi Huyen, > -1 quy dinh la tim Khoi Xa
    function filterKhoiXaHuyen(layersCall, check) {
        let textFind = check > 0 ? 'KhoiXa' : 'KhoiHuyen';
        return layersCall.filter(function findGroupLayer(data){
            return (data.name.search(textFind) > -1);
        });
    }

    //find chu thich dat
    function findSoild(chuThichDat) {
        setTimeout(function () {
            let textSearch = $(".search-chuthich input").val().toUpperCase();
            let contentSearch = '';
            let arrSearch = chuThichDat.filter(function find(data) {
                return (data.label.toUpperCase().search(textSearch) > -1);
            })
            if (arrSearch.length !== 0) {
                arrSearch.map(data => {
                    contentSearch += `<li><img src='data:image/png;base64,${data.imageData}'/> ${data.label}</li>`
                })
            } else {
                contentSearch = "Không có dữ liệu tương ứng."
            }
            $("#hienthi-chuthich").html(contentSearch);
        },100)
    }

    //end function handling

    //render map and handling map
    // let urlApiMap = "http://103.9.86.47:6080/arcgis/rest/services/Quy_Hoach_Hiep_Hoa_2015_2019/MapServer";
    let urlApiMap = getUrlMap();
    ajaxCall(urlApiMap+"?f=pjson").then(dataRs => {

        //pretreatment (tien xu ly)
        let layersCall = dataRs.layers;
        let sublayersCall = filterSublayers(layersCall); // get groupLayer QuyHoach, HienTrang or NenDiaLy
        console.log(sublayersCall);
        let sublayersClick = filterSublayersClick(layersCall); // get Layer QuyHoach, HienTrang
        console.log(sublayersClick);
        let layerKhoiXaHuyen = filterKhoiXaHuyen(layersCall, checkMap);
        console.log(layerKhoiXaHuyen);
        //end pretreatment

        //set Option search map
        if(checkMap === 0 ) {
            // neu la tinh thi them tuy chon tim khoi huyen
            $("#tieuChiSearchMap").append(`<option value="huyen">Huyện</option>`);
        }

        //code map here
        let identifyTask, params;
        //sublayersCall[0] is QuyHoach and sublayersCall[1] is HienTrang or NenDiaLy
        let layer = new MapImageLayer({
            url: urlApiMap,
            sublayers: [{
                id: sublayersCall[1].id,
                visible: true
                },
                {
                id: sublayersCall[0].id,
                visible: true
                }
            ]
        });
        spatialReference = new SpatialReference({
            wkt: dataRs.spatialReference.wkt
        }); //set wkt in layersCall return for ajax
        let ext = new Extent({
            xmin: dataRs.fullExtent.xmin,
            ymin: dataRs.fullExtent.ymin,
            xmax: dataRs.fullExtent.xmax,
            ymax: dataRs.fullExtent.ymax,
            spatialReference: spatialReference
        });
        let map = new Map({
            layers: [layer]
        });
        let view = new MapView({
            container: "mapView",
            map: map,
            extent: ext,
        });
        view.ui.move("zoom", "bottom-right");
        //end set view map

        //set event, notice in view
        view.when(function () {
            // executeIdentifyTask() is called each time the view is clicked
            on(view, "click", executeIdentifyTask);

            // Create identify task for the specified map service
            identifyTask = new IdentifyTask(urlApiMap);
            // Set the parameters for the Identify
            params = new IdentifyParameters();
            params.tolerance = 3;
            params.layerIds = [sublayersClick[0].id, sublayersClick[1].id];
            params.layerOption = "top";
            params.width = view.width;
            params.height = view.height;
            params.returnGeometry = true;
            //set notice map
            var urlLegend = urlApiMap + '/legend?f=pjson';
            esriRequest(urlLegend, {
                responseType: "json"
            }).then(response => {
                //get all layer in array
                let listLayer = response.data.layers;
                let layerNotices = [];
                listLayer.map(layer => {
                    if (layer.layerName.search(/(QH_|KH_)(HienTrang|KeHoach|QuyHoach)/) > -1) {
                        let listLegend = layer.legend;
                        listLegend.map(legend => {
                            if (legend.label !== '<all other values>' && legend.label != 209) {
                                layerNotices = layerNotices.filter(function(data) {
                                    return data.label !== legend.label;
                                })
                                layerNotices.push(legend);
                            }
                        })
                    }
                })
                layerNotices.sort(function(a, b){return a-b});  //get all MaDat and sort for id
                //set view notice
                let content = ''; // chua html view chu thich loại dat
                let chuThichDat = []; //lua view html de tim kiem
                // handling set chu thich dat trong map
                layerNotices.map(data => {
                    let chuThich = {
                        imageData : data.imageData,
                        label: mucDich(data.label)
                    }
                    content += `<li><img src='data:image/png;base64,${data.imageData}'/> ${mucDich(data.label)}</li>`
                    chuThichDat.push(chuThich);
                })
                $("#hienthi-chuthich").html(content); //set chu thich in map
                //set tim kiem chu thich dat //on input su kien thay doi gia tri trong input
                $(".search-chuthich input").on('input',function (event) {
                    //get value delay 100 get value
                    findSoild(chuThichDat);
                })

                //handling set tim kiem cac loai dat view
                let timKiemDatView = '';
                layerNotices.map(data => {
                    timKiemDatView += `<li><input type="checkbox" value=${data.label}><div class='muc-dich-dat'><img src='data:image/png;base64,${data.imageData}'/>  ${mucDich(data.label)}</div></li>`
                })
                $("#viewTimKiemDat").html(timKiemDatView);
                $("#viewTimKiemDat input").change(function () {
                    searchMapCheckBox();
                }) //set change in checkbox search
                //end set view notice

                //set huyen so do viewDanhSachXaHuyen
                let viewDanhSachXaHuyen = '';
                let queryViewXaHuyen = '';
                if (checkMap > 0 ) {
                    $(".view-qh-v1 .title-qh span").html(`<i class="fas fa-building"></i> Xã/ Phường`);
                    queryViewXaHuyen = 'Xa IS NOT NULL';
                } else {
                    $(".view-qh-v1 .title-qh span").html(`<i class="fas fa-building"></i> Huyện/ Thành Phố`);
                    queryViewXaHuyen = 'Huyen IS NOT NULL';
                }
                let queryTaskXaHuyen = new QueryTask({
                    url: urlApiMap + "/"+layerKhoiXaHuyen[0].id  // index 0 is KhoiQuyHoach, KhoiKeHoach
                });
                let queryXaHuyen = new Query();
                queryXaHuyen.returnGeometry = true;
                queryXaHuyen.outFields = ["*"];
                queryXaHuyen.where = queryViewXaHuyen;
                queryTaskXaHuyen.execute(queryXaHuyen).then(function (results) {
                    let arrXaHuyen = results.features;
                    arrXaHuyen.map(data => {
                        let item = data.attributes;
                        if (checkMap > 0) {
                            viewDanhSachXaHuyen += `<li><i class="fas fa-map-marked-alt"></i>&nbsp; ${ (item.Xa.indexOf(".") > -1) ? item.Xa : "Xã "+item.Xa}</li>`;
                        } else {
                            viewDanhSachXaHuyen += `<li><i class="fas fa-map-marked-alt"></i>&nbsp; ${ (item.Huyen.indexOf(".") > -1) ? item.Huyen : "Huyện "+item.Huyen}</li>`;
                        }
                    })
                    $('#viewDanhSachXaHuyen').html(viewDanhSachXaHuyen);
                }).catch(err => {
                    console.log(err);
                })
                //end set huyen so do

            }).catch(err => {
                console.log(err);
            })
            //end set notice map
            //function click polygon map, set view info when click
            function executeIdentifyTask(event) {
                if (event.graphic) {
                    console.log("event graphic");
                } else {
                    // Set the geometry to the location of the view click
                    params.geometry = event.mapPoint;
                    params.mapExtent = view.extent;
                    dom.byId("mapView").style.cursor = "wait";
                    // This function returns a promise that resolves to an array of features
                    // A custom popupTemplate is set for each feature based on the layer it
                    // originates from
                    identifyTask.execute(params).then(function (response) {

                        let results = response.results;
                        arrPopUpMap = []; // moi lan click reset lai mang chua popUp
                        return arrayUtils.map(results, function (result, indexPopUp) {
                            let feature = result.feature;
                            arrPopUpMap.push(feature.attributes); // them tung khoi duoc click
                            let layerName = result.layerName;
                            feature.attributes.layerName = layerName;
                            if (layerName.search(/(QH_|KH_)(QuyHoach|KeHoach)/) > -1) {
                                feature.popupTemplate = { // autocasts as new PopupTemplate()
                                    title: "Thông tin quy hoạch",
                                    content: "<b>Mã sử dụng đất:</b> {MaHienTrang}/{MaQuyHoach} " +
                                        "<br><b>Mục đích sử dụng đất: </b> {MucDichSuDung}" +
                                        "<br><b>Mục đích quy hoạch: </b> {MucDichQuyHoach}" +
                                        "<br><b>Diện tích: </b> {DienTich} (ha)" +
                                        "<br><b>Số Quyết Định :</b> {MaQuyetDinh}" +
                                        "<br><b>Xã :</b> <span>{Xa}</span> " +
                                        "<b> Huyện :</b> <span>{Huyen}</span> " +
                                        "<b> Tỉnh :</b> <span>{Tinh}</span> " +
                                        `<br><b><div class='xem-chi-tiet' onclick='fnView(${indexPopUp})'>Thống kê</div></b>`
                                };
                            } else if (layerName.search(/(QH_|KH_)HienTrang/) > -1) {
                                feature.popupTemplate = { // autocasts as new PopupTemplate()
                                    title: "Thông tin sử dụng đất",
                                    content: "<b>Mã sử dụng đất: </b> {MaHienTrang} " +
                                        "<br><b>Mục đích sử dụng: </b> {MucDichSuDung}" +
                                        "<br><b>Diện tích: </b> {DienTich} (ha)" +
                                        "<br><b>Xã :</b> <span>{Xa}</span> " +
                                        "<b> Huyện :</b> <span>{Huyen}</span> " +
                                        "<b> Tỉnh :</b> <span>{Tinh}</span> " +
                                        `<br><b><div class='xem-chi-tiet' onclick='fnView(${indexPopUp})'>Thống kê</div></b>`
                                };
                            }

                            return feature;

                        });

                    }).then(showPopup); // Send the array of features to showPopup()
                }
                //show popUp when click
                function showPopup(response) {
                    if (response.length > 0) {
                        view.popup.open({
                            features: response,
                            location: event.mapPoint
                        });
                        //debugger;
                        var graphics = arrayUtils.map(response, function (item) {
                            //debugger;
                            var symbol = new SimpleFillSymbol({
                                color: [0, 51, 204, 1],
                                style: "none",
                                outline: { // autocasts as esri/symbols/SimpleLineSymbol
                                    color: [0, 51, 204, 1],
                                    width: 2
                                }
                            });
                            var polygonGraphic = new Graphic({
                                geometry: item.geometry,
                                symbol: symbol
                            });
                            return polygonGraphic;
                        });
                        view.graphics.removeAll();
                        view.graphics.addMany(graphics);
                    }
                    dom.byId("mapView").style.cursor = "auto";
                }
                //end show popUp when click
            }
            //end function click
        })
        //end set event, notice in view

        //on of layer with id checkQuyHoach end checkHienTrang in view
        on(dom.byId("checkQuyHoach"), "change", function (ev) {
            layer.findSublayerById(0).visible = ev.target.checked; //on of KeHoach or QuyHoach all id 0
        });
        on(dom.byId("checkHienTrang"), "change", function (ev) {
            console.log(layer);
            layer.findSublayerById(sublayersCall[1].id).visible = ev.target.checked; //on of HienTrang all index 1
        });
        //end on of layer
        //
        //search map with id btnSearch
        on(dom.byId("btnSearchMap"), "click", executeQueryTask);
        var searchResults;
        // handling search
        function executeQueryTask() {
            let inputSearch = dom.byId("inputSearchMap").value; //get text in input Search with id inputSearch
            $(document.body).css({
                'cursor': 'wait' //when load change icon cursor
            });
            let tieuChi = dom.byId("tieuChiSearchMap").value; //get tieuChi search
            //-----------------QuyHoach && KeHoach -- bo link huyen xa
            if (tieuChi === 'quyHoach') {
                searchMapQuyHoach(`'${inputSearch}'`); // query text can 'ma'
            }
            //-----------------HienTrang -- bo link huyen xa
            if (tieuChi == 'hienTrang') {
                searchMapHienTrang(`'${inputSearch}'`); // query text can 'ma'
            }
            //------------------Xa-Phuong
            if (tieuChi == 'xa') {
                let khoiXa = layersCall.find(data => data.name.search("KhoiXa") > -1);
                let queryTask = new QueryTask({
                    url: urlApiMap + "/" + khoiXa.id
                });
                let query = new Query();
                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = `Upper(Xa) like N'%${inputSearch}%'`;
                // When resolved, returns features and graphics that satisfy the query.
                queryTask.execute(query).then(function (results) {
                    searchResults = results;
                    if (searchResults.features.length > 0) {
                        let content = "";
                        content += " <thead><tr><th>STT</th><th>Xã</th><th>Huyện</th><th>Tỉnh</td><th>Diện tích</th>" +
                            "<th>Vị trí</th></tr></thead>";
                        let features = searchResults.features;
                        features.map((data,index) => {
                            let item = data.attributes;
                            let uid = data.uid;
                            content += `<tr><td>  ${index + 1} </td><td>${item.Xa}</td> <td>${item.Huyen}</td><td>Bắc Giang</td><td>${item.DienTich > 0 ? item.DienTich : -item.DienTich} (ha)</td>`;
                            content += `</td><td><a id='idVitriXa${uid}'  href='' >Vị trí</a></td>`;
                        })
                        dom.byId("tableSearchMap").innerHTML = content;
                        features.map(data => {
                            let uid = data.uid;
                            $(`#idVitriXa${uid}`).click(() => {
                                zoomTo(uid);
                            });
                        })
                        $(".form-search-toado").css("display","block");
                        $("#tableSearchMap a").click(function () {
                            return false;
                        });
                    } else {
                        $(".form-search-toado").css("display","none");
                        alert("Không tìm thấy kết quả phù hợp");
                    }
                    $(document.body).css({
                        'cursor': 'default'
                    });
                }).catch(err => {
                    console.log(err);
                });

                queryTask.executeForCount(query).then(function (searchResults) {
                    console.log(searchResults);
                }).catch(err => {
                    console.log(err);
                });
            }
            //------------------Huyen--chua test
            if (tieuChi == 'huyen') {
                let khoiHuyen = layersCall.find(data => data.name.search("KhoiHuyen") > -1);
                let queryTask = new QueryTask({
                    url: urlApiMap+ "/" + khoiHuyen.id
                });
                let query = new Query();
                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = `Upper(Huyen) like N'%${inputSearch}%'`;
                // When resolved, returns features and graphics that satisfy the query.
                queryTask.execute(query).then(function (results) {
                    searchResults = results;
                    if (searchResults.features.length > 0) {
                        let content = "";
                        content += " <thead><tr><th>STT</th><th>Huyện</th><th>Tỉnh</th><th>Diện tích</th>" +
                            "<th>Vị trí</th></tr></thead>";
                        let features = searchResults.features;
                        features.map((data,index) => {
                            let item = data.attributes;
                            let uid = data.uid;
                            content += `<tr><td>  ${index + 1} </td><td>${item.Huyen}</td> <td>Bắc Giang</td><td>${item.DienTich} (ha)</td>`;
                            content += `<td><a id='idVitriHuyen${uid}'  href='' '>Vị trí</a></td>`
                        })
                        dom.byId("tableSearchMap").innerHTML = content;
                        features.map(data => {
                            let uid = data.uid;
                            $(`#idVitriHuyen${uid}`).click(() => {
                                zoomTo(uid);
                            });
                        })
                        $("#tableSearchMap a").click(function () {
                            return false;
                        });
                        $(".form-search-toado").css("display","block");
                    } else {
                        $(".form-search-toado").css("display","none");
                        alert("Không tìm thấy kết quả phù hợp");
                    }
                    $(document.body).css({
                        'cursor': 'default'
                    });
                }).catch(err => {
                    console.log(err);
                });

                queryTask.executeForCount(query).then(function (searchResults) {
                    console.log(searchResults);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
        
        function searchMapQuyHoach(inputSearch) {
            let queryTask = new QueryTask({
                url: urlApiMap + "/"+sublayersClick[0].id  // index 0 is KhoiQuyHoach, KhoiKeHoach
            });
            let query = new Query();
            query.returnGeometry = true;
            query.outFields = ["*"];
            query.where = `MaQuyHoach = ${inputSearch}`;
            // When resolved, returns features and graphics that satisfy the query.
            $(document.body).css({
                'cursor': 'wait'
            });
            queryTask.execute(query).then(function (results) {
                searchResults = results;
                if (searchResults.features.length > 0) {
                    let content = "";
                    content += " <thead><tr><th>STT</th><th>Mã quy hoạch</th><th>Mục đích quy hoạch</th><th>Diện tích</th>" +
                        "<th>Xã</th><th>Huyện</th><th>Thông tin</th></tr></thead>";
                    // let ma = searchResults.features[0].attributes.MaQuyHoach;
                    let features = searchResults.features;
                    features.map((data, index) => {
                        let item = data.attributes;
                        let uid = data.uid;
                        content += `<tr><td>  ${index + 1} </td><td>${item.MaHienTrang}/${item.MaQuyHoach}</td> <td>${item.MucDichQuyHoach}</td><td>${item.DienTich > 0 ? item.DienTich : -item.DienTich} (ha)</td>`;
                        content += `<td>${item.Xa}</td><td>${item.Huyen}</td><td><a id='idVitri${uid}'  href='' '>Vị trí</a></td>`;
                    })
                    dom.byId("tableSearchMap").innerHTML = content;
                    features.map(data => {
                        let uid = data.uid;
                        $(`#idVitri${uid}`).click(() => {
                            zoomTo(uid);
                        });
                    })
                    $(".form-search-toado").css("display","block");
                    $("#tableSearchMap a").click(function () {
                        return false;
                    });
                } else {
                    $(".form-search-toado").css("display","none");
                    alert("Không tìm thấy kết quả phù hợp");
                }
                $(document.body).css({
                    'cursor': 'default'
                });
            }).catch(err => {
                console.log(err);
            });

            queryTask.executeForCount(query).then(function (searchResults) {
                console.log(searchResults);
            }).catch(err => {
                console.log(err);
            });
        }
        
        function searchMapHienTrang(inputSearch) {
            let queryTask = new QueryTask({
                url: urlApiMap + "/"+sublayersClick[1].id // index 1 is KhoiQuyHoach
            });
            let query = new Query();
            query.returnGeometry = true;
            query.outFields = ["*"];
            query.where = `MaHienTrang = ${inputSearch}`;
            // When resolved, returns features and graphics that satisfy the query.
            $(document.body).css({
                'cursor': 'wait'
            });
            queryTask.execute(query).then(function (results) {
                searchResults = results;
                if (searchResults.features.length > 0) {
                    let content = "";
                    content += " <thead><tr><th>STT</th><th>Mã hiện trạng</th><th>Mục đích sử dụng</th><th>Diện tích</th>" +
                        "<th>Xã</th><th>Huyện</th><th>Thông tin</th></tr></thead>";
                    let features = searchResults.features;
                    features.map((data, index) => {
                        let item = data.attributes;
                        let uid = data.uid;
                        content += `<tr><td>  ${index + 1} </td><td>${item.MaHienTrang}</td> <td>${item.MucDichSuDung}</td><td>${item.DienTich > 0 ? item.DienTich : -item.DienTich} (ha)</td>`;
                        content += `<td>${item.Xa}</td><td>${item.Huyen}</td><td><a id='idVitri${uid}'  href='' '>Vị trí</a></td>`
                    })
                    dom.byId("tableSearchMap").innerHTML = content;
                    features.map(data => {
                        let uid = data.uid;
                        $(`#idVitri${uid}`).click(() => {
                            zoomTo(uid);
                        });
                    })
                    $(".form-search-toado").css("display","block");
                    $("#tableSearchMap a").click(function () {
                        return false;
                    });
                } else {
                    $(".form-search-toado").css("display","none");
                    alert("Không tìm thấy kết quả phù hợp");
                }
                $(document.body).css({
                    'cursor': 'default'
                });
            }).catch(err => {
                console.log(err);
            });

            queryTask.executeForCount(query).then(function (searchResults) {
                console.log(searchResults);
            }).catch(err => {
                console.log(err);
            });
        }
        // end handling search
        //click zoom in search
        function zoomTo(uid) {
            for (var i = 0; i < searchResults.features.length; i++) {
                var uid_Search = searchResults.features[i].uid;
                if (uid == uid_Search) {
                    var geometry = searchResults.features[i].geometry;
                    var symbol = new SimpleFillSymbol({
                        color: [0, 51, 204, 1],
                        style: "none",
                        outline: { // autocasts as esri/symbols/SimpleLineSymbol
                            color: [0, 51, 204, 1],
                            width: 2
                        }
                    });
                    var polygonGraphic = new Graphic({
                        geometry: geometry,
                        symbol: symbol

                    });
                    view.graphics.removeAll();
                    view.graphics.add(polygonGraphic);

                    view.extent = geometry.extent;
                    break;
                }
            }
        }
        //end zoom in search
        //end search map

        //search checkbox
        function searchMapCheckBox() {
            let tieuChi = dom.byId("tieuChiSearchMap").value; //get tieuChi search
            let queryRs;
            if (tieuChi === 'quyHoach') {
                queryRs = getInputSearchCheckBox(true);
                // neu '' tuc la ko co checkbox click khong query va tat bang find
                if (queryRs !== '') {
                    searchMapQuyHoach(queryRs);
                } else {
                    $(".form-search-toado").css("display","none");
                }
            } else {
                queryRs = getInputSearchCheckBox(false);
                // neu '' tuc la ko co checkbox click khong query va tat bang find
                if (queryRs !== '') {
                    searchMapHienTrang(queryRs);
                } else {
                    $(".form-search-toado").css("display","none");
                }
            }
        }
        //test true la quy hoach, false la hien trang
        //create query add
        function getInputSearchCheckBox(test) {
            let rs = '';
            $("#viewTimKiemDat input").map((index, data) => {
                let check = $(data).is(":checked");
                if (check) {
                    let arrSplit = mucDich($(data).val()).split(":");
                    if (rs === '') {
                        rs += `'${arrSplit[0]}'`; // '' thi chi can ma
                    } else {
                        rs += test ? ` OR MaQuyHoach = '${arrSplit[0]}'` : ` OR MaHienTrang = '${arrSplit[0]}'`; //kiem tra == 'ma'
                    }
                }
            })
            return rs;
        }
        //search checkbox

        //end search check box
    }).catch(err => {
        console.log(err);
        alert("Chưa có dữ liệu bản đồ");
    });

    //end render map and handling map
})