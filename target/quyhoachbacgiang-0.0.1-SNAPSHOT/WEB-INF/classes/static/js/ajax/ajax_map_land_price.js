var arrPopUpMap = []; //khai bien toan cuc luu cac khoi khi duoc click
var arrChildDuong = [];
var viewTableDuong = ''; // chua co gia
var year = '';
var arrDuongMap = [];
//set data table
function setViewTableDuong(rs) {
    viewTableDuong = '';
    let arrRoot = [];
    let arrChild = [];
    rs.map(data => {
        if (data.cap.split(".").length > 2) {
            arrChild.push(data);
        } else if (data.cap.split(".").length = 2) {
            arrRoot.push(data);
        }
    })
    arrChildDuong = arrChild;
    arrRoot.map((data, index) => {
        viewTableDuong += `<tr data-cap=${data.cap}>
                            <td><strong>${index + 1}</strong></td>
                            <td style="text-align: left;"><strong>${data.ten}</strong></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>`;
        findChilDuong(data);
    })
    return viewTableDuong;
}

function findChilDuong(root) {
    let capRoot = root.cap;
    let arrChildCap1 = [];
    arrChildDuong.map((data, index) => {
        let test = countPoint(data.cap) - countPoint(capRoot);
        if (data.cap.startsWith(capRoot+".") && (test === 1) ) {
            arrChildCap1.push(data);
            arrChildDuong = arrChildDuong.filter(item => item.id != data.id);
        }
    })
    // sap xep thu thu cac con cung cap
    arrChildCap1.sort(function (a, b) {
        let arrA = a.cap.split(".");
        let arrB = b.cap.split(".");
        return arrA[arrA.length - 1] - arrB[arrB.length - 1]
    })
    arrChildCap1.map((data1, index1) => {
        viewTableDuong += `<tr data-cap=${data1.cap}>
                            <td><strong>${viewCap(data1.cap) === '' ? '' : index1 + 1}</strong></td>
                            <td style="text-align: left;">${checkCap(data1.cap)} ${data1.ten}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>`;
        findChilDuong(data1);
    })
    return viewTableDuong;
}

function countPoint(text) {
    let count = 0;
    for(let i = 0; i < text.length; i++) {
        if (text.charAt(i) === '.') {
            count++;
        }
    }
    return count;
}

function setTableGiaDatPhiNongNghiep(viewData, idHuyen){
    let viewTable = `<div class="tablep-cap">
                    <span>Bảng giá đất giai đoạn ${year} - ${ARR_HUYEN_TEXT[idHuyen - 1]}<br><span>Theo bảng giá đất ở tại đô thị, ven trục đường giao thông</span></span>
                </div>
                <table class="table-dat table table-hover table-bordered" id="tableExport">
                    <thead>
                        <tr>
                            <th style="width: 80px !important;">STT</th>
                            <th style="width: 360px !important;">Tên đường, đoạn đường</th>
                            <th>Vị trí 1</th>
                            <th>Vị trí 2</th>
                            <th>Vị trí 3</th>
                            <th>Vị trí 4</th>
                            <th style="width: 150px !important;">Giai đoạn</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${viewData}
                    </tbody>
                </table>`;
    $(".tableBangGiaDat9").html(viewTable);
    $(".tableBangGiaDat10").html(viewTable);
    $(".tableBangGiaDat10 .tablep-cap span:nth-child(1) span").html("Bảng giá đất thương mại, dịch vụ tại đô thị, ven trục đường giao thông");
    $(".tableBangGiaDat11").html(viewTable);
    $(".tableBangGiaDat11 .tablep-cap span:nth-child(1) span").html("Bảng giá đất sản xuất, kinh doanh phi nông nghiệp không phải là đất thương mại, dịch vụ tại đô thị, ven trục đường giao thông");
    //setDataTable
    // setDataTableGiaDatPhiNongNghiep();
    // viewTableDuongData = $(".block-table-price2 tbody").html();
    hideLoadingGif();
}

function setDataTableGiaDatPhiNongNghiep(query, arrTable) {
    arrTable.map(data => {
        let item = $(`${query} tr[data-cap='${data.danhMucDuong.cap}']`);
        item.children("td:nth-child(3)").html(data.viTri1 == 0 ? '': formatNumber(data.viTri1,'.','.'));
        item.children("td:nth-child(4)").html(data.viTri2 == 0 ? '': formatNumber(data.viTri2,'.','.'));
        item.children("td:nth-child(5)").html(data.viTri3 == 0 ? '': formatNumber(data.viTri3,'.','.'));
        item.children("td:nth-child(6)").html(data.viTri4 == 0 ? '': formatNumber(data.viTri4,'.','.'));
        // item.children("td:nth-child(7)").html((data.namDau != null && data.namCuoi != null ? data.namDau +" - "+data.namCuoi : ""));
        item.children("td:nth-child(7)").html(data.quyetDinh.soQuyetDinh);
        // item.children("td:nth-child(8)").html(`<span><span data-id=${data.id}><i class="fas fa-plus" aria-hidden="true"></i></span></span>`)
    })
}
//set data table

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
})

function fnView(indexPopUp) {
    //to do click
    let data = arrPopUpMap[indexPopUp];
    console.log(data.TenDuong+" "+data.Huyen);
    callHuyen().then(arrHuyen => {
        let huyen = arrHuyen.filter(item => item.tenHuyen.indexOf(data.Huyen.indexOf("TP.") > -1 ? "Bắc Giang" : data.Huyen) > -1);
        viewLoadingGif();
        callFindChilDuong(data.TenDuong, 9, huyen[0].idHuyen).then(data1 => {
            if (data1.length > 0) {
                setTableGiaDatPhiNongNghiep(setViewTableDuong(data1),huyen[0].idHuyen);
            } else {
                callFindChilDuong2(data.TenDuong, 9, huyen[0].idHuyen).then(data2 => {
                    setTableGiaDatPhiNongNghiep(setViewTableDuong(data2),huyen[0].idHuyen);
                }).catch(err => {
                    console.log(err);
                })
            }
            callAllGiaDatPnn(huyen[0].idHuyen).then(listData => {
                listData.map((list, index) => {
                    // setDataTableGiaDatPhiNongNghiep(`.tableBangGiaDat${9 + index}`, list);
                    setDataTableGiaDatPhiNongNghiepQuyetDinh(huyen[0].idHuyen,index, list);
                })
                hideLoadingGif();
            }).catch(err => {
                console.log(err);
            })
            $(".tbdetailf").addClass("show"); // view tableInfo
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
    // callAllBangGiaDat();
    $(".esri-icon-close").trigger("click"); //hiden fnView
}

async function callAllGiaDatPnn(idHuyen) {
    let arr = [callGiaDatPhiNongNghiep(9,idHuyen),callGiaDatPhiNongNghiep(10,idHuyen),callGiaDatPhiNongNghiep(11,idHuyen)];
    let rs = [];
    await Promise.all(arr).then(data => {
        rs = data;
    }).catch(err => {
        console.log(err);
    })
    return rs;
}

function callGiaDatPhiNongNghiep(id, idHuyen) {
    let url = `v1/public/gia-dat/gia-dat-phi-nong-nghiep/find-by-huyen-and-bang-gia-dat-and-giai-doan?bang-gia-dat-id=${id}&huyen-id=${idHuyen}&giai-doan=${year}`;
    return ajaxCallGet(url);
}

function callFindChilDuong(duong, idBangGiaDat, idHuyen) {
    return ajaxCallGet(`v1/public/danh-muc-duong/find-child?duong=${duong}&bang-gia-dat-id=${idBangGiaDat}&huyen-id=${idHuyen}&giai-doan=${year}`);
}

function callFindChilDuong2(duong, idBangGiaDat, idHuyen) {
    return ajaxCallGet(`v1/public/danh-muc-duong/find-child-2?duong=${duong}&bang-gia-dat-id=${idBangGiaDat}&huyen-id=${idHuyen}&giai-doan=${year}`);
}

function callAllGiaiDoanQuyetDinh(huyenId, bangGiaDatId, giaiDoan) {
    return ajaxCallGet(`v1/public/gia-dat/gia-dat-phi-nong-nghiep/find-all-quyet-dinh?huyen-id=${huyenId}&bang-id=${bangGiaDatId}&giai-doan=${giaiDoan}`);
}

function setDataTableGiaDatPhiNongNghiepQuyetDinh(huyenId, i, arrTable) {
    let query = `.tableBangGiaDat${9 + i}`;
    callAllGiaiDoanQuyetDinh(huyenId, 9 + i, year).then(list => {
        list.sort((a,b) => a.ngayBanHanh.localeCompare(b.ngayBanHanh));
        if(list.length <= 1) {
            setDataTableGiaDatPhiNongNghiep(query,arrTable);
        } else {
            let arrDataQuyetDinh = [];
            list.map(item => {
                let quyetDinhCheck = item.id;
                arrDataQuyetDinh.push(arrTable.filter(it => it.quyetDinh.id === quyetDinhCheck));
            })
            setDataTableGiaDatPhiNongNghiep(query,arrDataQuyetDinh[0]);
            arrDataQuyetDinh.map((data,index) => {
                if(index !== 0) setDataTableGiaDatPhiNongNghiepDieuChinh(query, arrDataQuyetDinh[index], index);
            })
        }
    }).catch(err => {
        console.log(err);
    })
}

function setDataTableGiaDatPhiNongNghiepDieuChinh(query ,arrTableData,index) {
    arrTableData.map(data => {
        let item = $(`${query} tr[data-cap='${data.danhMucDuong.cap}']`);
        let quyetDinhView = item.children("td:nth-child(7)").text();
        if(quyetDinhView != data.quyetDinh.soQuyetDinh && quyetDinhView != '') {
            item.addClass("text-line-through");
            item.after(`<tr data-cap="${data.danhMucDuong.cap}" data-quyetdinh=${index}>${item.html()}</tr>`);
            item = $(`${query} tr[data-cap='${data.danhMucDuong.cap}'][data-quyetdinh='${index}']`);
            $(`${query} tr[data-quyetdinh='${index}']`).removeClass("text-line-through");
        }
        item.children("td:nth-child(3)").html(data.viTri1 == 0 ? '': formatNumber(data.viTri1,'.','.'));
        item.children("td:nth-child(4)").html(data.viTri2 == 0 ? '': formatNumber(data.viTri2,'.','.'));
        item.children("td:nth-child(5)").html(data.viTri3 == 0 ? '': formatNumber(data.viTri3,'.','.'));
        item.children("td:nth-child(6)").html(data.viTri4 == 0 ? '': formatNumber(data.viTri4,'.','.'));
        // item.children("td:nth-child(7)").html(data.namDau != null && data.namCuoi != null ? data.namDau +" - "+data.namCuoi : "" );
        item.children("td:nth-child(7)").html(`<span><span data-id=${data.id}>${data.quyetDinh.soQuyetDinh}</span></span>`);
    })
}

function getUrlGetMap() {
    let params = (new URL(window.location)).searchParams;
    year = params.get("nam");
    //set name map
    $("#nameMap").html(`<i class="fas fa-sitemap"></i>Bản đồ giá đất ${year}`);
    let yearUrl = year === null ? "2015_2019" : year.replace("-","_");
    yearUrl = yearUrl === "2020_2024" ? "2015_2019" : yearUrl;
    return `http://103.9.86.47:6080/arcgis/rest/services/Gia_Dat_${yearUrl}/MapServer`;
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
            return (data.name.indexOf("DuongGiaoThong") > -1);
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
                    id: layersCall[3].id,
                    visible: true
                },
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
                    // if (arrXaHuyen.length === 0) {
                    //     setTimeout(function () {
                    //         window.location.reload();
                    //     }, 500)
                    // }
                    console.log(`length : ${arrXaHuyen.length}`);
                    arrXaHuyen.map(data => {
                        let item = data.attributes;
                        viewDanhSachXaHuyen += `<li data-uid="${data.uid}"><i class="fas fa-map-marked-alt"></i>&nbsp; ${ (item.Huyen.indexOf(".") > -1) ? item.Huyen : "Huyện "+item.Huyen}</li>`;
                    })
                    $('#viewDanhSachXaHuyen').html(viewDanhSachXaHuyen);
                    $("#viewDanhSachXaHuyen li").click(function () {
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
                            feature.attributes.SoQuyetDinh = year === "2015-2019" ? "861/QĐ-UBND" : year === "2020-2024" ? "35/NQ- HĐND": "";
                            let linkQuyetDinh = year === "2015-2019" ? "http://123.31.45.240:8480/media/img/467000000861bacgiang1.pdf" : year === "2020-2024" ? "http://123.31.45.240:8480/media/img/547000000NQ%20thong%20qua%20Bang%20gia%20dat%20%202020-2024-%C4%91%C3%A3%20chuy%E1%BB%83n%20%C4%91%E1%BB%95i.pdf": "";
                            feature.popupTemplate = { // autocasts as new PopupTemplate()
                                title: "Thông tin đường",
                                content: "<b>Tên Đường:</b> {TenDuong} " +
                                    "<br><b>Huyện: </b> {Huyen}" +
                                    "<br><b>Mục đích quy hoạch: </b> {MucDichQuyHoach}" +
                                    "<br><b>Số Quyết Định: </b> <a style='color: blue; cursor: pointer;' href='"+linkQuyetDinh+"' target='_blank'>{SoQuyetDinh}</a>" +
                                    "<br><b>Giai Đoạn :</b> <span>"+year+"</span> " +
                                    `<br><b><div class='xem-chi-tiet' onclick='fnView(${indexPopUp})'>Xem Chi Tiết</div></b>`
                            };
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
            if (tieuChi === 'tenDuong') {
                searchMapTenDuong(`${inputSearch}`); // query text can 'ma'
            }
        }

        getAllDuong();
        function getAllDuong() {
            let queryTask = new QueryTask({
                url: urlApiMap + "/"+sublayersClick[0].id  // index 0 is KhoiQuyHoach, KhoiKeHoach
            });
            let query = new Query();
            query.returnGeometry = true;
            query.outFields = ["*"];
            query.where = '1=1';
            // When resolved, returns features and graphics that satisfy the query.
            $(document.body).css({
                'cursor': 'wait'
            });
            queryTask.execute(query).then(function (results) {
                let features = results.features;
                features.map(data => {
                    let item = data.attributes;
                    if(item.TenDuong != null) {
                        arrDuongMap = arrDuongMap.filter(element => element.localeCompare(item.TenDuong.toUpperCase()));
                        arrDuongMap.push(item.TenDuong.toUpperCase());
                    }
                })
                setSearchDuong(arrDuongMap);
                $("#inputSearchMap").on('input',function(){
                    setTimeout(function () {
                        let textSearch = $("#inputSearchMap").val().toUpperCase();
                        let arrSearch = arrDuongMap.filter(function find(data) {
                            return (data.search(textSearch) > -1);
                        })
                        if (arrSearch.length !== 0) {
                            setSearchDuong(arrSearch);
                        } else {
                            $("#text-search-stress").html("Không có dữ liệu tương ứng.");
                        }
                    },100)
                })
                $(document.body).css({
                    'cursor': 'default'
                });
            }).catch(err => {
                console.log(err);
                $(document.body).css({
                    'cursor': 'default'
                });
            })
        }

        function setSearchDuong(arr) {
            let viewHtml = '';
            arr.map(data => {
                viewHtml += `<li>${data}</li>`;
            })
            $("#text-search-stress").html(viewHtml);
            $("#text-search-stress li").click(function () {
                $("#inputSearchMap").val($(this).text());
            })
        }

        function searchMapTenDuong(inputSearch) {
            let queryTask = new QueryTask({
                url: urlApiMap + "/"+sublayersClick[0].id  // index 0 is KhoiQuyHoach, KhoiKeHoach
            });
            let query = new Query();
            query.returnGeometry = true;
            query.outFields = ["*"];
            query.where = `Upper(TenDuong) like N'%${inputSearch}%'`;
            // When resolved, returns features and graphics that satisfy the query.
            $(document.body).css({
                'cursor': 'wait'
            });
            queryTask.execute(query).then(function (results) {
                searchResults = results;
                if (searchResults.features.length > 0) {
                    let content = "";
                    content += " <thead><tr><th>STT</th><th>Tên Đường</th><th>Huyện</th><th>Số Quyết Định</th>" +
                        "<th>Giai Đoạn</th><th>Thông tin</th></tr></thead>";
                    // let ma = searchResults.features[0].attributes.MaQuyHoach;
                    let features = searchResults.features;
                    features.map((data, index) => {
                        let item = data.attributes;
                        let uid = data.uid;
                        content += `<tr><td>  ${index + 1} </td><td>${item.TenDuong}</td> <td>${item.Huyen}</td><td>${item.SoQuyetDinh}</td>`;
                        content += `<td>${item.GiaiDoan}</td><td><a id='idVitri${uid}'  href='' '>Vị trí</a></td>`;
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
        }
        //end zoom in search
        //end search map

        //create query add

        //end search check box
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

