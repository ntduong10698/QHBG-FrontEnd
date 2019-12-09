var year = '';
var arrLoaiXa = '';
var arrPopUpMap = '';
var arrLoaiXaView = '';
getAllLoaiXa();

$(function () {
    $("#closeThongKeMap").click(function () {
        $(".block-left-qh").css("display","none");
        $(".block-right-qh").addClass("hideThongKe");
        $("#openThongKeMap").css("display","block");
    })

    $("#openThongKeMap").click(function () {
        $(".block-left-qh").css("display","block");
        $(".block-right-qh").removeClass("hideThongKe");
        $("#openThongKeMap").css("display","none");
    })

    //set high map
    var height = $(window).height();
    // let heightMap = height - $("footer").height() - 60 - 45; // 60 padding footer 45 header
    let heightMap = height - 205; //fix sau 16 height gra, 45 header
    heightMap = heightMap > 300 ? heightMap : 300;
    $(".block-main-qh").height(heightMap); //set height main map
    heightMap = heightMap - 108; //108 = 40 + 34 x 2 40, tititle so do hien thi, 40 titile xa phuong
    $("#viewDanhSachXaHuyenArea").css("max-height",heightMap*0.5);
    $("#viewDanhSachLoaiXa").css("max-height",heightMap*0.5);
    $(window).resize(function () {
        height = $(window).height();
        // let heightMap = height - $("footer").height() - 60 - 45; // 60 padding footer 45 header
        let heightMap = height - 205; //fix sau 16 height gra, 45 header
        heightMap = heightMap > 300 ? heightMap : 300;
        $(".block-main-qh").height(heightMap); //set height main map
        heightMap = heightMap - 108; //108 = 40 + 34 x 2 40, tititle so do hien thi, 40 titile xa phuong
        $("#viewDanhSachXaHuyenArea").css("max-height",heightMap*0.5);
        $("#viewDanhSachLoaiXa").css("max-height",heightMap*0.5);
    })
})

function fnView(indexPopUp) {
    let data = arrPopUpMap[indexPopUp];
    let huyenId = '';
    if (data.Huyen === "Hiệp Hòa" || data.Huyen === "Hiệp Hoà") {
        huyenId = 1;
    } else {
        for(let i =0 ; i < 10; i++) {
            if (ARR_HUYEN_TEXT[i].localeCompare(data.Huyen) === 0) {
                huyenId = i;
                break;
            }
        }
    }
    huyenId++;
    let arrCall = [callHuyenAndBangGiaDat(huyenId, 12), callHuyenAndBangGiaDat(huyenId, 13), callHuyenAndBangGiaDat(huyenId, 14)];
    Promise.all(arrCall).then(listRs => {
        let viewHtml = '';
        listRs.map(rs => {
            rs = rs.filter(data1 => {
                return data1.loaiXa.idDmLoaiXa == data.LoaiXaId;
            })
            viewHtml += setTableGiaDatNongThon(rs,huyenId);
            $(".tableBangGiaDat12-13-14").html(viewHtml);
            $(".tbdetailf").addClass("show");
        })
    }).catch(err => {
        console.log(err);
    })
    $(".esri-icon-close").trigger("click"); //hiden fnView
}

function getUrlGetMap() {
    let params = (new URL(window.location)).searchParams;
    year = params.get("nam");
    let yearUrl = year === null ? "2015_2019" : year.replace("-","_");
    return `http://103.9.86.47:6080/arcgis/rest/services/Gia_Dat_Khu_Vuc_${yearUrl}/MapServer`;
}

function callAllLoaiXa () {
    return ajaxCallGet('v1/public/dm-loai-xa/all');
}

function getAllLoaiXa() {
    callAllLoaiXa().then(list => {
        arrLoaiXa = list;
    }).catch(err => {
        console.log(err);
    })
}

function getLoaiXaByLoaiXaId(loaiXaId) {
    return arrLoaiXa.find(loaiXa => loaiXa.idDmLoaiXa == loaiXaId);
}

function getTextLoaiXa(loaiXa) {
    if(loaiXa !== undefined) {
        return loaiXa.tenLoaiXa + `${loaiXa.parent === null ? "": " - "+loaiXa.parent.tenLoaiXa}`;
    }
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

//call table
function callHuyenAndBangGiaDat(huyenId, bangGiaDatId) {
    return ajaxCallGet(`v1/public/gia-dat/gia-dat-tai-nong-thon/find-by-huyen-and-bang-gia-dat?huyen-id=${huyenId}&bang-gia-dat-id=${bangGiaDatId}`);
}

//set table GiaDatNongThon
function setTableGiaDatNongThon(rs,idHuyen) {
    console.log(rs);
    if (rs.length > 0) {
        let arrTD = rs.filter(data => {
            if (data.loaiXa.parent !== null) {
                return data.loaiXa.parent.idDmLoaiXa == 1;
            }
        });
        let arrMN = rs.filter(data => {
            if (data.loaiXa.parent !== null) {
                return data.loaiXa.parent.idDmLoaiXa == 2;
            }
        });
        let viewTable = '';
        let viewData = '';
        if(arrTD.length > 0) {
            viewData = `<tr><td><strong style="font-family: 'Times New Roman', Times, serif">I</strong></td><td style="text-transform: uppercase; font-weight: bold">Xã Trung Du</td><td></td><td></td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
            arrTD.map((data1, index) => {
                viewData += setDataTableGiaDatNongThon(data1, index);
            })
        }
        if(arrMN.length > 0) {
            viewData += `<tr><td><strong style="font-family: 'Times New Roman', Times, serif">II</strong></td><td style="text-transform: uppercase; font-weight: bold">Xã Miền Núi</td><td></td><td></td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
            arrMN.map((data1, index) => {
                viewData += setDataTableGiaDatNongThon(data1, index);
            })
        }
        viewTable =`<div class="tablep-cap">
                    <span>Bảng giá đất giai đoạn ${year} - ${ARR_HUYEN_TEXT[idHuyen-1]}<br>Theo ${rs[0].bangGiaDat.tenBang}</span>
                </div>
                <table class="table-dat table table-hover table-bordered" id="tableExport">
                    <thead>
                        <tr>
                            <th rowspan="3">STT</th>
                            <th rowspan="3">Loại xã</th>
                        </tr>
                        <tr>
                            <th colspan="4">Khu vực 1</th>
                            <th colspan="4">Khu vực 2</th>
                            <th colspan="4">Khu vực 3</th>
                        </tr>
                        <tr>
                            <th>Vị trí 1</th>
                            <th>Vị trí 2</th>
                            <th>Vị trí 3</th>
                            <th>Vị trí 4</th>
                            <th>Vị trí 1</th>
                            <th>Vị trí 2</th>
                            <th>Vị trí 3</th>
                            <th>Vị trí 4</th>
                            <th>Vị trí 1</th>
                            <th>Vị trí 2</th>
                            <th>Vị trí 3</th>
                            <th>Vị trí 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${viewData}
                    </tbody>
                </table>`;
        return viewTable;
    } else {
        return "";
    }
}

function setDataTableGiaDatNongThon(data1, index) {
    return `<tr><td>${index+1}</td><td>${data1.loaiXa.tenLoaiXa}</td>
            <td>${data1.viTri11 == 0 ? '' : formatNumber(data1.viTri11,'.','.')}</td>
            <td>${data1.viTri12 == 0 ? '' : formatNumber(data1.viTri12,'.','.')}</td>
            <td>${data1.viTri13 == 0 ? '' : formatNumber(data1.viTri13,'.','.')}</td>
            <td>${data1.viTri14 == 0 ? '' : formatNumber(data1.viTri14,'.','.')}</td>
            <td>${data1.viTri21 == 0 ? '' : formatNumber(data1.viTri21,'.','.')}</td>
            <td>${data1.viTri22 == 0 ? '' : formatNumber(data1.viTri22,'.','.')}</td>
            <td>${data1.viTri23 == 0 ? '' : formatNumber(data1.viTri23,'.','.')}</td>
            <td>${data1.viTri24 == 0 ? '' : formatNumber(data1.viTri24,'.','.')}</td>
            <td>${data1.viTri31 == 0 ? '' : formatNumber(data1.viTri31,'.','.')}</td>
            <td>${data1.viTri32 == 0 ? '' : formatNumber(data1.viTri32,'.','.')}</td>
            <td>${data1.viTri33 == 0 ? '' : formatNumber(data1.viTri33,'.','.')}</td>
            <td>${data1.viTri34 == 0 ? '' : formatNumber(data1.viTri34,'.','.')}</td>
            </tr>`;
}

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

    //set upper in inputSearch
    $('#inputSearch').keyup(function () {
        this.value = this.value.toUpperCase();
    });

    //get groupLayer KhoiQuyHoach, KhoiHienTrang in fullLayerMap
    function filterSublayersClick(layersCall) {
        return layersCall.filter(function findGroupLayer(data){
            return (data.name.indexOf("KhoiXa") > -1);
        });
    }

    //get layer KhoiXa hoac KhoiHuyen, -1 quy dinh la tim Khoi Huyen, > -1 quy dinh la tim Khoi Xa
    function filterKhoiXaHuyen(layersCall) {
        let textFind = 'KhoiHuyen';
        return layersCall.filter(function findGroupLayer(data){
            return (data.name.indexOf(textFind) > -1);
        });
    }

    //end function handling

    //render map and handling map
    let urlApiMap = getUrlGetMap();
    ajaxCall(urlApiMap+"?f=pjson").then(dataRs => {

        //pretreatment (tien xu ly)
        let layersCall = dataRs.layers;
        // console.log(sublayersCall);
        let sublayersClick = filterSublayersClick(layersCall); // get Layer QuyHoach, HienTrang
        console.log(sublayersClick);
        let layerKhoiXaHuyen = filterKhoiXaHuyen(layersCall);
        console.log(layerKhoiXaHuyen);
        //end pretreatment

        //code map here
        let identifyTask, params;
        //sublayersCall[0] is QuyHoach and sublayersCall[1] is HienTrang or NenDiaLy
        let layer = new MapImageLayer({
            url: urlApiMap,
            sublayers: [
                {
                    id: layersCall[2].id,
                    visible: true
                },
                {
                    id: layersCall[1].id,
                    visible: true
                },
                {
                    id: layersCall[0].id,
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
            extent: ext
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
            params.layerIds = [sublayersClick[0].id];
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
                let listLegend = listLayer[1].legend;
                listLegend.map(legend => {
                    if (legend.label !== '<all other values>') {
                        layerNotices = layerNotices.filter(function(data) {
                            return data.label !== legend.label;
                        })
                        layerNotices.push(legend);
                    }
                })
                layerNotices.sort(function(a, b){return a-b});  //get all MaDat and sort for id
                //set view notice
                let content = ''; // chua html view chu thich loại dat
                let chuThichDat = []; //lua view html de tim kiem
                // handling set chu thich dat trong map
                layerNotices.map(data => {
                    let chuThich = {
                        id: data.label,
                        imageData : data.imageData,
                        label: getTextLoaiXa(getLoaiXaByLoaiXaId(data.label))
                    }
                    if(chuThich.label !== undefined) {
                        content += `<li><img src='data:image/png;base64,${data.imageData}'/> ${chuThich.label}</li>`
                        chuThichDat.push(chuThich);
                    }
                })
                arrLoaiXaView = chuThichDat;
                $("#hienthi-chuthich").html(content); //set chu thich in map
                //set tim kiem chu thich dat //on input su kien thay doi gia tri trong input
                $(".search-chuthich input").on('input',function (event) {
                    //get value delay 100 get value
                    findSoild(chuThichDat);
                })

                //set huyen so do viewDanhSachXaHuyen
                let viewDanhSachXaHuyen = '';
                let queryViewXaHuyen = '';
                let queryTaskXaHuyen = new QueryTask({
                    url: urlApiMap + "/"+layerKhoiXaHuyen[0].id  // index 0 is KhoiQuyHoach, KhoiKeHoach
                });
                let queryXaHuyen = new Query();
                queryXaHuyen.returnGeometry = true;
                queryXaHuyen.outFields = ["*"];
                queryXaHuyen.where = queryViewXaHuyen;
                console.log(queryXaHuyen);
                queryTaskXaHuyen.execute(queryXaHuyen).then(function (results) {
                    searchViewXaPhuong = results;
                    let arrXaHuyen = results.features;
                    console.log(`length : ${arrXaHuyen.length}`);
                    arrXaHuyen.map(data => {
                        let item = data.attributes;
                        viewDanhSachXaHuyen += `<li data-uid="${data.uid}"><i class="fas fa-map-marked-alt"></i>&nbsp; ${ (item.Huyen.indexOf(".") > -1) ? item.Huyen : "Huyện "+item.Huyen}</li>`;
                    })
                    $('#viewDanhSachXaHuyenArea').html(viewDanhSachXaHuyen);
                    $("#viewDanhSachXaHuyenArea li").click(function () {
                        zoomToXaHuyen($(this).attr("data-uid"));
                    })
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
                            let loaiXaId = feature.attributes.LoaiXaId;
                            let loaiXa = getLoaiXaByLoaiXaId(loaiXaId);
                            console.log(loaiXa);
                            if (loaiXa !== undefined) {
                                feature.popupTemplate = { // autocasts as new PopupTemplate()
                                    title: "Thông tin xã",
                                    content: "<b>Xã:</b> {Xa} " +
                                        "<br><b>Loại Xã: </b>"+`${loaiXa.parent !== null ? loaiXa.tenLoaiXa + " - " + loaiXa.parent.tenLoaiXa : loaiXa.tenLoaiXa}`+
                                        "<br><b>Huyện: </b> {Huyen}" +
                                        "<br><b>Số Quyết Định: </b> <a style='color: blue; cursor: pointer;' href='http://123.31.45.240:8480/media/img/467000000861bacgiang1.pdf' target='_blank'>861/QĐ-UBND</a>" +
                                        "<br><b>Giai Đoạn :</b> <span>"+year+"</span> " +
                                        `<br><b><div class='xem-chi-tiet' onclick='fnView(${indexPopUp})'>Xem Chi Tiết</div></b>`
                                };
                            } else {
                                feature.popupTemplate = { // autocasts as new PopupTemplate()
                                    title: "Thông tin xã",
                                    content: "<b>Xã:</b> {Xa} " +
                                        "<br><b>Huyện: </b> {Huyen}"
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

        //search map with id btnSearch
        on(dom.byId("btnSearchMap"), "click", executeQueryTask);
        var searchResults;
        var searchViewXaPhuong;
        // handling search
        function executeQueryTask() {
            let inputSearch = dom.byId("inputSearchMap").value; //get text in input Search with id inputSearch
            $(document.body).css({
                'cursor': 'wait' //when load change icon cursor
            });
            let tieuChi = dom.byId("tieuChiSearchMap").value; //get tieuChi search
            //-----------------QuyHoach && KeHoach -- bo link huyen xa
            if (tieuChi === 'tenXa') {
                searchMapTenXa(`${inputSearch}`); // query text can 'ma'
            }
        }

        function searchMapTenXa(inputSearch) {
            let queryTask = new QueryTask({
                url: urlApiMap + "/"+sublayersClick[0].id  // index 0 is KhoiQuyHoach, KhoiKeHoach
            });
            let query = new Query();
            query.returnGeometry = true;
            query.outFields = ["*"];
            query.where = `Upper(Xa) like N'%${inputSearch}%'`;
            // When resolved, returns features and graphics that satisfy the query.
            $(document.body).css({
                'cursor': 'wait'
            });
            queryTask.execute(query).then(function (results) {
                searchResults = results;
                if (searchResults.features.length > 0) {
                    let content = "";
                    content += " <thead><tr><th>STT</th><th>Xã/ Phường/ Thị Trấn</th><th>Huyện</th><th>Thông tin</th></tr></thead>";
                    // let ma = searchResults.features[0].attributes.MaQuyHoach;
                    let features = searchResults.features;
                    features.map((data, index) => {
                        let item = data.attributes;
                        let uid = data.uid;
                        content += `<tr><td>  ${index + 1} </td><td>${item.Xa}</td> <td>${item.Huyen}</td><td><a id='idVitri${uid}'  href='' '>Vị trí</a></td>`;
                    })
                    dom.byId("tableSearchMap").innerHTML = content;
                    features.map(data => {
                        let uid = data.uid;
                        $(`#idVitri${uid}`).click(() => {
                            zoomTo(uid);
                            $(".content-form-search > .fa-times-circle").trigger("click");
                        });
                    })
                    $(".form-search-toado").css("display","block");
                    $("#tableSearchMap a").click(function () {
                        return false;
                    });
                } else {
                    $(".form-search-toado").css("display","none");
                    // alert("Không tìm thấy kết quả phù hợp");
                    viewAlter(2,"Không tìm thấy kết quả phù hợp");
                }
                $(document.body).css({
                    'cursor': 'default'
                });
            }).catch(err => {
                console.log(err);
                $(".form-search-toado").css("display","none");
                viewAlter(2,"Xảy ra lỗi. Vui lòng thử tìm kiếm khác");
                $(document.body).css({
                    'cursor': 'default'
                });
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

        function zoomToXaHuyen(uid) {
            for (var i = 0; i < searchViewXaPhuong.features.length; i++) {
                var uid_Search = searchViewXaPhuong.features[i].uid;
                if (uid == uid_Search) {
                    var geometry = searchViewXaPhuong.features[i].geometry;
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
            findXaByHuyen(uid);
        }
        //end zoom in search
        //end search map

        //create query add

        //end search check box

        function findXaByHuyen(uid) {
            viewLoadingGif();
            let inputSearch = $(`#viewDanhSachXaHuyenArea li[data-uid='${uid}']`).text().trim();
            inputSearch = inputSearch.indexOf("Huyện") > -1 ? inputSearch.split("Huyện")[1].trim() : inputSearch;
            console.log(inputSearch);
            let queryTask = new QueryTask({
                url: urlApiMap+ "/" + sublayersClick[0].id
            });
            let query = new Query();
            query.returnGeometry = true;
            query.outFields = ["*"];
            query.where = `Upper(Huyen) like N'%${inputSearch}%'`;
            // When resolved, returns features and graphics that satisfy the query.
            queryTask.execute(query).then(function (results) {
                searchResults = results;
                if (searchResults.features.length > 0) {
                    let features = searchResults.features;
                    let arrLoaiXaId = [];
                    let arrLoaiXaA1 = [];
                    let arrLoaiXaA2 = [];
                    let arrLoaiXaA3 = [];
                    let arrLoaiXaA4 = [];
                    let arrLoaiXaA5 = [];
                    let arrLoaiXaA6 = [];
                    let arrLoaiXaA7 = [];
                    let arrLoaiXaA8 = [];
                    features.map(data => {
                        let item = data.attributes;
                        if(item.LoaiXaId !== null) {
                            arrLoaiXaId = arrLoaiXaId.filter(id => {
                                return id != item.LoaiXaId;
                            })
                            arrLoaiXaId.push(item.LoaiXaId);
                            //phân loại xã
                            switch (item.LoaiXaId) {
                                case 3:
                                    arrLoaiXaA1.push(item.Xa);
                                    break;
                                case 4:
                                    arrLoaiXaA2.push(item.Xa);
                                    break;
                                case 5:
                                    arrLoaiXaA3.push(item.Xa);
                                    break;
                                case 9:
                                    arrLoaiXaA4.push(item.Xa);
                                    break;
                                case 6:
                                    arrLoaiXaA5.push(item.Xa);
                                    break;
                                case 7:
                                    arrLoaiXaA6.push(item.Xa);
                                    break;
                                case 8:
                                    arrLoaiXaA7.push(item.Xa);
                                    break;
                                case 10:
                                    arrLoaiXaA8.push(item.Xa);
                                    break;
                            }
                        }
                    })
                    let viewHtml = '';
                    arrLoaiXaId.sort(function (a,b) {
                        return a - b;
                    })
                    arrLoaiXaId.map(item => {
                        let chuThich = arrLoaiXaView.find(ct=> ct.id == item);
                        viewHtml += chuThich === undefined ? "" : `<li><img src='data:image/png;base64,${chuThich.imageData}'/>&nbsp;${chuThich.label}</li>`;
                    })
                    $("#viewDanhSachLoaiXa").html(viewHtml);
                    //chia nhóm xã
                    $("#loaiXaTrungDu").html("");
                    if (arrLoaiXaA1.length > 0 || arrLoaiXaA2.length > 0 || arrLoaiXaA3.length > 0 || arrLoaiXaA4.length > 0) {
                        let viewHtmlLoaiXa = '<li class="loai-xa">Xã trung du</li>';
                        viewHtmlLoaiXa += arrLoaiXaA1.length > 0 ? `<li><strong>- Xã nhóm A: </strong>${arrLoaiXaA1.join(", ")}</li>`: "";
                        viewHtmlLoaiXa += arrLoaiXaA2.length > 0 ? `<li><strong>- Xã nhóm B: </strong>${arrLoaiXaA2.join(", ")}</li>`: "";
                        viewHtmlLoaiXa += arrLoaiXaA3.length > 0 ? `<li><strong>- Xã nhóm C: </strong>${arrLoaiXaA3.join(", ")}</li>`: "";
                        viewHtmlLoaiXa += arrLoaiXaA4.length > 0 ? `<li><strong>- Xã nhóm D: </strong>${arrLoaiXaA4.join(", ")}</li>`: "";
                        console.log(viewHtmlLoaiXa);
                        $("#loaiXaTrungDu").html(viewHtmlLoaiXa);
                    }
                    $("#loaiXaMienNui").html("");
                    if (arrLoaiXaA5.length > 0 || arrLoaiXaA6.length > 0 || arrLoaiXaA7.length > 0 || arrLoaiXaA8.length > 0) {
                        let viewHtmlLoaiXa = '<li class="loai-xa">Xã miền núi</li>';
                        viewHtmlLoaiXa += arrLoaiXaA5.length > 0 ? `<li><strong>- Xã nhóm A: </strong>${arrLoaiXaA5.join(", ")}</li>`: "";
                        viewHtmlLoaiXa += arrLoaiXaA6.length > 0 ? `<li><strong>- Xã nhóm B: </strong>${arrLoaiXaA6.join(", ")}</li>`: "";
                        viewHtmlLoaiXa += arrLoaiXaA7.length > 0 ? `<li><strong>- Xã nhóm C: </strong>${arrLoaiXaA7.join(", ")}</li>`: "";
                        viewHtmlLoaiXa += arrLoaiXaA8.length > 0 ? `<li><strong>- Xã nhóm D: </strong>${arrLoaiXaA8.join(", ")}</li>`: "";
                        console.log(viewHtmlLoaiXa);
                        $("#loaiXaMienNui").html(viewHtmlLoaiXa);
                    }
                } else {
                    viewAlter(2,"Không tìm thấy kết quả phù hợp");
                }
                hideLoadingGif();
                $(document.body).css({
                    'cursor': 'default'
                });
            }).catch(err => {
                hideLoadingGif();
                console.log(err);
            });
        }
    }).catch(err => {
        console.log(err);
        // alert("Không có dữ liệu bản đồ");
        // viewAlter(2,"Không có dữ liệu bản đồ");
        setTimeout(function () {
            window.location.reload();
        }, 800)
    });

    //end render map and handling map
})