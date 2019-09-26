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
        let year;
        if (pathName.search("quy-hoach") > -1) {
            arrSplit = pathName.split("map=");
            if (arrSplit[1] !== "0") {
                indexHuyen = arrSplit[1] - 1; // url tinh map =0, cac huyen 1-10
                rs += `Quy_Hoach_${ARR_HUYEN[indexHuyen]}_2015_2019`;
            } else {
                rs += "Quy_Hoach_Bac_Giang_2015_2019"
            }
        } else if (pathName.search("ke-hoach") > -1) {
            arrSplit = pathName.split("map=");
            indexHuyen = arrSplit[1].split("&")[0] - 1; // url tinh map =0, cac huyen 1-10
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
        //end pretreatment

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
                let content = '';
                let chuThichDat = []; //lua view html de tim kiem
                layerNotices.map(data => {
                    let chuThich = {
                        imageData : data.imageData,
                        label: mucDich(data.label)
                    }
                    content += `<li><img src='data:image/png;base64,${data.imageData}'/> ${mucDich(data.label)}</li>`
                    chuThichDat.push(chuThich);
                })
                $("#hienthi-chuthich").html(content);
                //set tim kiem chu thich dat //on input su kien thay doi gia tri trong input
                $(".search-chuthich input").on('input',function (event) {
                    //get value delay 100 get value
                    findSoild(chuThichDat);
                })
                // dom.byId("legend").innerHTML = content; dom set view for api arcgis
                //end set view notice

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

                        return arrayUtils.map(results, function (result) {

                            var feature = result.feature;
                            var layerName = result.layerName;

                            feature.attributes.layerName = layerName;
                            if (layerName.search(/(QH_|KH_)(QuyHoach|KeHoach)/) > -1) {
                                feature.popupTemplate = { // autocasts as new PopupTemplate()
                                    title: "Thông tin quy hoạch",
                                    content: "<b>Mã sử dụng đất:</b> {MaHienTrang}/{MaQuyHoach} " +
                                        "<br><b>Mục Đích sử dụng đất: </b> {MucDichSuDung}" +
                                        "<br><b>Mục đích quy hoạch: </b> {MucDichQuyHoach}" +
                                        "<br><b>Diện tích: </b> {DienTich} (ha)" +
                                        "<br><b>Số Quyết Định :</b> {MaQuyetDinh}" +
                                        "<br><b>Xã :</b> <span class ='XemChiTiet' >{Xa}</span> " +
                                        "<b> Huyện :</b> <span class ='XemChiTiet' >{Huyen}</span> " +
                                        "<b> Tỉnh :</b> <span class ='XemChiTiet' >{Tinh}</span> " +
                                        "<br><b><div class='XemChiTiet' onclick=fnView() >Thống kê</div></b>"
                                };
                            } else if (layerName.search(/(QH_|KH_)HienTrang/) > -1) {
                                feature.popupTemplate = { // autocasts as new PopupTemplate()
                                    title: "Thông tin sử dụng đất",
                                    content: "<b>Mã sử dụng đất: </b> {MaHienTrang} " +
                                        "<br><b>Mục Đích sử dụng: </b> {MucDichSuDung}" +
                                        "<br><b>Diện tích: </b> {DienTich} (ha)" +
                                        "<br><b>Xã :</b> <span class ='XemChiTiet' >{Xa}</span> " +
                                        "<b> Huyện :</b> <span class ='XemChiTiet' >{Huyen}</span> " +
                                        "<b> Tỉnh :</b> <span class ='XemChiTiet' >{Tinh}</span> " +
                                        "<br><b><div class='XemChiTiet' onclick=fnView() >Thống kê</div></b>"
                                };
                            }

                            return feature;

                        });

                    }).then(showPopup); // Send the array of features to showPopup()
                }
            }
            //end function click
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
            //click statistical
            function fnView() {

            }
            //end click statistical
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
        // //search map with id btnSearch
        // on(dom.byId("btnSearch"), "click", executeQueryTask);
        var searchResults;
        // handling search
        function executeQueryTask() {
            var inputSearch = dom.byId("inputSearch").value; //get text in input Search with id inputSearch
            $(document.body).css({
                'cursor': 'wait' //when load change icon cursor
            });
            let tieuChi = dom.byId("tieuChi").value; //get tieuChi search
            //-----------------QuyHoach && KeHoach -- bo link huyen xa
            if (tieuChi === 'quyHoach' || tieuChi === 'keHoach') {
                var queryTask = new QueryTask({
                    url: urlApiMap + "/"+sublayersClick[0].id  // index 0 is KhoiQuyHoach, KhoiKeHoach
                });
                var query = new Query();
                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = `MaQuyHoach = '${inputSearch}'`;
                // When resolved, returns features and graphics that satisfy the query.
                queryTask.execute(query).then(function (results) {
                    searchResults = results;
                    if (searchResults.features.length > 0) {
                        let content = "<table class='grid'>";
                        content += " <thead><tr><th>STT</th><th>Mã quy hoạch</th><th>Mục đích quy hoạch</th><th>Diện tích</th>" +
                            "<th>Xã</th><th>Huyện</th><th>Thông tin</th></tr></thead>";
                        // let ma = searchResults.features[0].attributes.MaQuyHoach;
                        let features = searchResults.features;
                        features.map((data, index) => {
                            let item = data.attributes;
                            let uid = data.uid;
                            content += `<tr><td>  ${index + 1} </td><td>${item.MaHienTrang}/${item.MaQuyHoach}</td> <td>${item.MucDichQuyHoach}</td><td>&nbsp;&nbsp;${item.DienTich > 0 ? item.DienTich : -item.DienTich} (ha)</td>`;
                            content += `<td><a href='#'>${item.Xa}</a></td><td><a href='#'>${item.Huyen}<a/></td><td><a id='idVitri${uid}'  href='#ViTri' '>Vị trí</a></td>`;
                        })
                        content += "</table>";
                        dom.byId("tableSearch").innerHTML = content;
                        features.map(data => {
                            let uid = data.uid;
                            $(`#idVitri${uid}`).click(() => {
                                zoomTo(uid);
                            });
                        })
                    } else alert("Không tìm thấy kết quả phù hợp");
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
            //-----------------HienTrang -- bo link huyen xa
            if (tieuChi == 'hienTrang') {
                var queryTask = new QueryTask({
                    url: urlApiMap + "/"+sublayersClick[1].id // index 1 is KhoiQuyHoach
                });
                var query = new Query();
                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = `MaHienTrang = '${inputSearch}'`;
                // When resolved, returns features and graphics that satisfy the query.
                queryTask.execute(query).then(function (results) {
                    searchResults = results;
                    if (searchResults.features.length > 0) {
                        let content = "<table class='grid'>";
                        content += " <thead><tr><th>STT</th><th>Mã hiện trạng</th><th>Mục đích sử dụng</th><th>Diện tích</th>" +
                            "<th>Xã</th><th>Huyện</th><th>Thông tin</th></tr></thead>";
                        let features = searchResults.features;
                        features.map((data, index) => {
                            let item = data.attributes;
                            let uid = data.uid;
                            content += `<tr><td>  ${index + 1} </td><td>${item.MaHienTrang}</td> <td>${item.MucDichSuDung}</td><td>&nbsp;&nbsp;${item.DienTich > 0 ? item.DienTich : -item.DienTich} (ha)</td>`;
                            content += `<td><a href='#'>${item.Xa}</a></td><td><a href='#'>${item.Huyen}<a/></td><td><a id='idVitri${uid}'  href='#ViTri' '>Vị trí</a></td>`
                        })
                        content += "</table>";
                        dom.byId("tableSearch").innerHTML = content;
                        features.map(data => {
                            let uid = data.uid;
                            $(`#idVitri${uid}`).click(() => {
                                zoomTo(uid);
                            });
                        })
                    } else alert("Không tìm thấy kết quả phù hợp");
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
            //------------------Xa-Phuong
            if (tieuChi == 'xa') {
                let khoiXa = layersCall.find(data => data.name.search("KhoiXa") > -1);
                var queryTask = new QueryTask({
                    url: urlApiMap + "/" + khoiXa.id
                });
                var query = new Query();
                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = `Upper(Xa) like N'%${inputSearch}%'`;
                // When resolved, returns features and graphics that satisfy the query.
                queryTask.execute(query).then(function (results) {
                    searchResults = results;
                    if (searchResults.features.length > 0) {
                        let content = "<table class='grid'>";
                        content += " <thead><tr><th>STT</th><th>Xã</th><th>Huyện</th><th>Tỉnh</td><th>Diện tích</th>" +
                            "<th>Vị trí</th></tr></thead>";
                        let features = searchResults.features;
                        features.map((data,index) => {
                            let item = data.attributes;
                            let uid = data.uid;
                            content += `<tr><td>  ${index + 1} </td><td>${item.Xa}</td> <td>${item.Huyen}</td><td>Bắc Giang</td><td>&nbsp;&nbsp;${item.DienTich > 0 ? item.DienTich : -item.DienTich} (ha)</td>`;
                            content += `</td><td><a id='idVitriXa${uid}'  href='#ViTri' >Vị trí</a></td>`;
                        })
                        content += "</table>";
                        dom.byId("tableSearch").innerHTML = content;
                        features.map(data => {
                            let uid = data.uid;
                            $(`#idVitriXa${uid}`).click(() => {
                                zoomTo(uid);
                            });
                        })

                    } else alert("Không tìm thấy kết quả phù hợp");
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
                var queryTask = new QueryTask({
                    url: urlApiMap+ "/" + khoiHuyen.id
                });
                var query = new Query();
                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = `Upper(Huyen) like N'%${inputSearch}%'`;
                // When resolved, returns features and graphics that satisfy the query.
                queryTask.execute(query).then(function (results) {
                    searchResults = results;
                    if (searchResults.features.length > 0) {
                        let content = "<table class='grid'>";
                        content += " <thead><tr><th>STT</th><th>Huyện</th><th>Tỉnh</th><th>Diện tích</th>" +
                            "<th>Vị trí</th></tr></thead>";
                        let features = searchResults.features;
                        features.map((data,index) => {
                            let item = data.attributes;
                            let uid = data.uid;
                            content += `<tr><td>  ${index + 1} </td><td>${item.Huyen}</td> <td>Bắc Giang</td><td>&nbsp;${item.DienTich} (ha)</td>`;
                            content += `<td><a id='idVitriHuyen${uid}'  href='#ViTri' '>Vị trí</a></td>`
                        })
                        content += "</table>";
                        dom.byId("tableSearch").innerHTML = content;
                        features.map(data => {
                            let uid = data.uid;
                            $(`#idVitriHuyen${uid}`).click(() => {
                                zoomTo(uid);
                            });
                        })

                    } else alert("Không tìm thấy kết quả phù hợp");
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
    }).catch(err => {
        console.log(err);
        alert("Chưa có dữ liệu bản đồ");
    });

    //end render map and handling map
})