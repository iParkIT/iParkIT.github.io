(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{TUkU:function(e,i,n){"use strict";n.r(i),n.d(i,"Tab2PageModule",function(){return k});var t=n("TEn/"),a=n("ofXK"),o=n("3Pt+"),r=n("qtYk"),s=n("tyNb"),c=n("fXoL"),d=n("Zlt4");const l=["map"],m=["mySearchbar"];function g(e,i){if(1&e){const e=c.Nb();c.Mb(0,"ion-item"),c.Mb(1,"button",24),c.Ub("click",function(){c.cc(e);const n=i.$implicit;return c.Wb(2).nextPage(n)}),c.Mb(2,"ion-grid",25),c.Mb(3,"ion-row"),c.Mb(4,"ion-col",26),c.Mb(5,"ion-row"),c.gc(6),c.Lb(),c.Mb(7,"ion-row"),c.gc(8),c.Lb(),c.Mb(9,"ion-row"),c.gc(10),c.Lb(),c.Lb(),c.Mb(11,"ion-col",18),c.Mb(12,"ion-row"),c.Kb(13,"img",27),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&e){const e=i.$implicit;c.zb(6),c.ic(" ",e.title," "),c.zb(2),c.ic(" Grade: ",e.grade," "),c.zb(2),c.ic(" Time: ",e.time," "),c.zb(3),c.ac("src",e.iconScreen,c.dc)}}function p(e,i){if(1&e&&(c.Mb(0,"ion-list",22),c.fc(1,g,14,4,"ion-item",23),c.Lb()),2&e){const e=c.Wb();c.zb(1),c.Zb("ngForOf",e.markers)}}const b=[{path:"",component:(()=>{class e{constructor(){this.isMarkerAvailable=!1,this.isMarkerClicked=!0,this.infoWindows=[],this.markers=[],this.markerDetails=[{title:"",description:"",peakTimes:"",parkingGrade:"",mapScreen:"",iconScreen:"",iconSecondScreen:"",key:""}]}ionViewDidEnter(){this.clearSearch(),this.showMap()}initializeMarkers(){this.markers=[{title:"Louise Arbour Secondary School",latitude:"43.759",longitude:"-79.767",grade:"C",time:"8am - 5pm",description:"Louise Arbor Secondary School, better known as LA or LASS has a decent parking situation. Try to avoid Bramalea Road if possible, and consider taking a detour through Fernforest Drive to drop off students in the nearby residential areas for an extra 5-10 minute walk.",peakTimes:"Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",parkingGrade:"Designated Parking Grade: C",mapScreen:"../../assets/images/louise-map.PNG",iconScreen:"../../assets/images/school-icon1.png",iconSecondScreen:"../../assets/images/school-icon.PNG",key:"../../assets/images/key.PNG"},{title:"Sandalwood Heights Secondary School",latitude:"43.766",longitude:"-79.744",grade:"C",time:"7:30pm - Midnight",description:"Sandalwood Heights Secondary School, also referred to as Swood has a subpar parking system. Try staying off of Sandalwood Parkway and limit your time on Torbram Road. Drop students off at the residential areas or the Gas Station at Sandalwood and Torbram for an extra 5-15 minute walk. Using Torbram Road to drop students off at the Southern Walking trails is recommended.",peakTimes:"Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",parkingGrade:"Designated Parking Grade: C",mapScreen:"../../assets/images/sandalwood-map.PNG",iconScreen:"../../assets/images/school-icon1.png",iconSecondScreen:"../../assets/images/school-icon.PNG",key:"../../assets/images/key.PNG"},{title:"Harold M. Brathwaite Secondary School",latitude:"43.739",longitude:"-79.771",grade:"D+",time:"10am - 9pm",description:"Harold M. Brathwaite Secondary School, better known as HB or HBSS has a very limited amount of parking. The best place to park is at the nearby Sandalwood Park Seniors Centre or Soccer Centre. Great Lakes Drive is the most busiest road and should be avoided if possible.",peakTimes:"Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",parkingGrade:"Designated Parking Grade: D+",mapScreen:"../../assets/images/harold-map.PNG",iconScreen:"../../assets/images/school-icon1.png",iconSecondScreen:"../../assets/images/school-icon.PNG",key:"../../assets/images/key.PNG"},{title:"Williams Parkway Sr. Public School",latitude:"43.731",longitude:"-79.732",grade:"D-",time:"12pm - 7pm",description:"Williams Parkway Senior Public School, also known as WP has a terrible parking system. It is heavily recommended that you drop students off at the Terry Miller Recreation Centre for an extra 5 minute walk. Limit your time on Williams Parkway road and park in nearby residential areas at Hilldale Crescent. Using Mansfield Street is also healthy, yet it would add an extra 10-15 minutes of walking time.",peakTimes:"Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",parkingGrade:"Designated Parking Grade: D-",mapScreen:"../../assets/images/williams-map.PNG",iconScreen:"../../assets/images/school-icon1.png",iconSecondScreen:"../../assets/images/school-icon.PNG",key:"../../assets/images/key.PNG"},{title:"Central Peel Secondary School",latitude:"43.698",longitude:"-79.751",grade:"B",time:"10am - Midnight",description:"Central Peel Secondary School, also known as CPSS has a decent parking situation. Queen Street and Kennedy Road hosts large volumes of traffic, so it is better to limit your time on these streets. Use the residential areas on Woodward and McCaul to your advantage. If approaching from the South, drop students at the Southern intersection.",peakTimes:"Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",parkingGrade:"Designated Parking Grade: B",mapScreen:"../../assets/images/central-map.PNG",iconScreen:"../../assets/images/school-icon1.png",iconSecondScreen:"../../assets/images/school-icon.PNG",key:"../../assets/images/key.PNG"},{title:"Turner Fenton Secondary School",latitude:"43.676",longitude:"-79.718",grade:"C+",time:"5pm - 10pm, 21+ after 10pm",description:"Turner Fenton Secondary School, also refered to as TFSS or just 'Turner' has a subpar parking situation. Kennedy Road and First Gulf Road faces a lot of traffic during peak times. It is recommended to drop students at the surrounding Home Depot complex or the residential areas near the intersections of Kennedy Road and First Gulf Road.",peakTimes:"Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",parkingGrade:"Designated Parking Grade: C+",mapScreen:"../../assets/images/turner-map.PNG",iconScreen:"../../assets/images/school-icon1.png",iconSecondScreen:"../../assets/images/school-icon.PNG",key:"../../assets/images/key.PNG"},{title:"Centennial Senior Public School",latitude:"43.672",longitude:"-79.749",grade:"C-",time:"7am - 6pm",description:"Centennial Senior Public School, also known as CSPS has a relatively bad parking situation. Try avoiding Main Street if possible, and limit your time on Elgin Drive and Ladore Drive. Park near the residential areas near Ambleside Drive and Elibeth Street. To access these roads and avoid Ladore Drive, try using Mill Street.",peakTimes:"Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",parkingGrade:"Designated Parking Grade: C-",mapScreen:"../../assets/images/centennial-map.PNG",iconScreen:"../../assets/images/school-icon1.png",iconSecondScreen:"../../assets/images/school-icon.PNG",key:"../../assets/images/key.PNG"}]}getItems(e){this.initializeMarkers();const i=e.target.value;i&&""!==i.trim()?(this.isMarkerAvailable=!0,this.markers=this.markers.filter(e=>0==e.title.toLowerCase().indexOf(i.toLowerCase(),0))):this.isMarkerAvailable=!1}addMarkers(e){for(let i of e){let e=new google.maps.LatLng(i.latitude,i.longitude),n=new google.maps.Marker({position:e,title:i.title,latitude:i.latitude,longitude:i.longitude,grade:i.grade,time:i.time,description:i.description,peakTimes:i.peakTimes,parkingGrade:i.parkingGrade,mapScreen:i.mapScreen,iconScreen:i.iconScreen,iconSecondScreen:i.iconSecondScreen,key:i.key});n.setMap(this.map),this.addInfoToMarker(n)}}addInfoToMarker(e){let i=new google.maps.InfoWindow({content:'<div id="content"><ion-button id="navigate" fill="solid" expand="full" color="dark" strong> <p style="font-size:12px">'+e.title+'</p> </ion-button><ion-button id="navigate1" fill="default" expand="full" color="dark" strong> <p style="font-size:12px">Grade: '+e.grade+'</p> </ion-button><ion-button id="navigate2" fill="default" expand="full" color="dark" strong> <p style="font-size:12px">'+e.time+"</p> </ion-button></div>"});e.addListener("click",()=>{this.closeInfoWindows(),i.open(this.map,e),google.maps.event.addListenerOnce(i,"domready",()=>{document.getElementById("navigate").addEventListener("click",()=>{this.nextPage(e)})}),google.maps.event.addListenerOnce(i,"domready",()=>{document.getElementById("navigate1").addEventListener("click",()=>{this.nextPage(e)})}),google.maps.event.addListenerOnce(i,"domready",()=>{document.getElementById("navigate2").addEventListener("click",()=>{this.nextPage(e)})})}),this.infoWindows.push(i)}nextPage(e){this.isMarkerClicked=!1,this.markerDetails.title=e.title,this.markerDetails.mapScreen=e.mapScreen,this.markerDetails.description=e.description,this.markerDetails.peakTimes=e.peakTimes,this.markerDetails.parkingGrade=e.parkingGrade,this.markerDetails.iconScreen=e.iconScreen,this.markerDetails.iconSecondScreen=e.iconSecondScreen,this.markerDetails.key=e.key,this.clearSearch()}clearSearch(){this.isMarkerAvailable=!1,this.searchbar.value=null}changeMap(){console.log("back clicked"),this.isMarkerClicked=!0,this.closeInfoWindows()}closeInfoWindows(){for(let e of this.infoWindows)e.close()}showMap(){let e={center:new google.maps.LatLng(43.72,-79.75),zoom:12,disableDefaultUI:!1,styles:d.a};this.initializeMarkers(),this.map=new google.maps.Map(this.mapRef.nativeElement,e),this.addMarkers(this.markers)}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c.Db({type:e,selectors:[["app-tab2"]],viewQuery:function(e,i){if(1&e&&(c.jc(l,1,c.m),c.jc(m,1)),2&e){let e;c.bc(e=c.Vb())&&(i.mapRef=e.first),c.bc(e=c.Vb())&&(i.searchbar=e.first)}},decls:40,vars:12,consts:[[3,"translucent"],["id","header"],["id","title"],["type","text","debounce","500","id","search",3,"ionChange"],["mySearchbar",""],["id","list",4,"ngIf"],[3,"fullscreen"],["id","map",3,"hidden"],["map",""],["id","header",3,"hidden"],["id","secondGrid"],[3,"click"],["size","5"],["id","imageCenter",3,"src"],["size","5","id","alignCenter"],["id","title2"],["id","colColor"],["size","2","id","alignCenter"],["size","2"],["id","iconSecond",3,"src"],["size","1"],["id","key",3,"src"],["id","list"],[4,"ngFor","ngForOf"],["item-right","","id","invisButton",3,"click"],["id","searchGrid"],["size","auto"],["id","iconScreen",3,"src"]],template:function(e,i){1&e&&(c.Mb(0,"ion-header",0),c.Mb(1,"div",1),c.Kb(2,"br"),c.Kb(3,"br"),c.Mb(4,"ion-title",2),c.gc(5," School "),c.Lb(),c.Kb(6,"br"),c.Mb(7,"ion-searchbar",3,4),c.Ub("ionChange",function(e){return i.getItems(e)}),c.Lb(),c.Kb(9,"br"),c.fc(10,p,2,1,"ion-list",5),c.Lb(),c.Lb(),c.Mb(11,"ion-content",6),c.Kb(12,"div",7,8),c.Mb(14,"div",9),c.Mb(15,"ion-grid",10),c.Mb(16,"ion-row"),c.Mb(17,"ion-button",11),c.Ub("click",function(){return i.changeMap()}),c.gc(18,"Back"),c.Lb(),c.Lb(),c.Mb(19,"ion-row"),c.Mb(20,"ion-col",12),c.Kb(21,"img",13),c.Lb(),c.Lb(),c.Mb(22,"ion-row"),c.Mb(23,"ion-col",14),c.Mb(24,"h1",15),c.gc(25),c.Lb(),c.Lb(),c.Lb(),c.Mb(26,"ion-row"),c.Mb(27,"ion-col",12),c.Mb(28,"p"),c.gc(29),c.Lb(),c.Mb(30,"p"),c.gc(31),c.Lb(),c.Lb(),c.Lb(),c.Mb(32,"ion-row",16),c.Mb(33,"ion-col",17),c.Mb(34,"p",15),c.gc(35),c.Lb(),c.Lb(),c.Mb(36,"ion-col",18),c.Kb(37,"img",19),c.Lb(),c.Mb(38,"ion-col",20),c.Kb(39,"img",21),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.Zb("translucent",!0),c.zb(10),c.Zb("ngIf",i.isMarkerAvailable),c.zb(1),c.Zb("fullscreen",!0),c.zb(1),c.Zb("hidden",!i.isMarkerClicked),c.zb(2),c.Zb("hidden",i.isMarkerClicked),c.zb(7),c.ac("src",i.markerDetails.mapScreen,c.dc),c.zb(4),c.hc(i.markerDetails.title),c.zb(4),c.hc(i.markerDetails.description),c.zb(2),c.hc(i.markerDetails.parkingGrade),c.zb(4),c.hc(i.markerDetails.peakTimes),c.zb(2),c.ac("src",i.markerDetails.iconSecondScreen,c.dc),c.zb(2),c.ac("src",i.markerDetails.key,c.dc))},directives:[t.f,t.q,t.m,t.t,a.i,t.d,t.e,t.l,t.b,t.c,t.j,a.h,t.h],styles:["#map[_ngcontent-%COMP%]{height:100%;z-index:-1}@media (min-width:500px){#header[_ngcontent-%COMP%]{background-color:#8854d0}#iconScreen[_ngcontent-%COMP%]{width:75px;height:75px}#search[_ngcontent-%COMP%]{--icon-color:#fff;--placeholder-color:#fff;--placeholder-font-weight:5;--placeholder-opacity:5;--background:#7a4bbb;--color:#fff}#title[_ngcontent-%COMP%]{color:#fff;font-size:50px}#title2[_ngcontent-%COMP%]{background-color:#5e17eb;color:#fff}#list[_ngcontent-%COMP%]{background-color:#15181e;color:#15181e}ion-item[_ngcontent-%COMP%]{--padding-end:0px;--inner-padding-end:0px;--padding-start:0px;--background:#15181e}#invisButton[_ngcontent-%COMP%]{color:#fff;background-color:#15181e;width:5000px}#leftRow[_ngcontent-%COMP%]{text-align:right}#searchGrid[_ngcontent-%COMP%], #secondGrid[_ngcontent-%COMP%]{font-size:25px}#secondGrid[_ngcontent-%COMP%]{--ion-grid-columns:5;width:50%;border:.01em solid #000;margin-bottom:-1px;background-color:#fff}#alignCenter[_ngcontent-%COMP%]{text-align:center}#colColor[_ngcontent-%COMP%]{background-color:#5e17eb}#imageCenter[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}}@media (max-width:500px){#header[_ngcontent-%COMP%]{background-color:#8854d0}#iconScreen[_ngcontent-%COMP%]{width:45px;height:45px}#iconSecond[_ngcontent-%COMP%]{width:100px;height:100px}#search[_ngcontent-%COMP%]{--icon-color:#fff;--placeholder-color:#fff;--placeholder-font-weight:5;--placeholder-opacity:5;--background:#7a4bbb;--color:#fff}#title[_ngcontent-%COMP%]{color:#fff;font-size:25px}#title2[_ngcontent-%COMP%]{background-color:#5e17eb;color:#fff}#list[_ngcontent-%COMP%]{background-color:#15181e;color:#15181e}ion-item[_ngcontent-%COMP%]{--padding-end:0px;--inner-padding-end:0px;--padding-start:0px;--background:#15181e}#invisButton[_ngcontent-%COMP%]{color:#fff;background-color:#15181e;width:5000px}#leftRow[_ngcontent-%COMP%]{text-align:right}#searchGrid[_ngcontent-%COMP%], #secondGrid[_ngcontent-%COMP%]{font-size:12px}#secondGrid[_ngcontent-%COMP%]{--ion-grid-columns:5;border:.01em solid #000;margin-bottom:-1px;background-color:#fff}#alignCenter[_ngcontent-%COMP%]{text-align:center}#colColor[_ngcontent-%COMP%]{background-color:#5e17eb}#imageCenter[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}#key[_ngcontent-%COMP%]{width:35px;height:100px}}"]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({imports:[[s.i.forChild(b)],s.i]}),e})(),k=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({imports:[[t.r,a.b,o.a,r.a,h]]}),e})()}}]);