(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"k+ul":function(e,n,i){"use strict";i.r(n),i.d(n,"Tab3PageModule",function(){return h});var t=i("TEn/"),a=i("tyNb"),o=i("ofXK"),r=i("3Pt+"),s=i("fXoL"),c=i("Zlt4");const d=["map"],l=["mySearchbar"];function g(e,n){if(1&e){const e=s.Nb();s.Mb(0,"ion-item"),s.Mb(1,"button",24),s.Ub("click",function(){s.cc(e);const i=n.$implicit;return s.Wb(2).nextPage(i)}),s.Mb(2,"ion-grid",25),s.Mb(3,"ion-row"),s.Mb(4,"ion-col",26),s.Mb(5,"ion-row"),s.gc(6),s.Lb(),s.Mb(7,"ion-row"),s.gc(8),s.Lb(),s.Mb(9,"ion-row"),s.gc(10),s.Lb(),s.Lb(),s.Mb(11,"ion-col",18),s.Mb(12,"ion-row"),s.Kb(13,"img",27),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()}if(2&e){const e=n.$implicit;s.zb(6),s.ic(" ",e.title," "),s.zb(2),s.ic(" Grade: ",e.grade," "),s.zb(2),s.ic(" Time: ",e.time," "),s.zb(3),s.ac("src",e.iconScreen,s.dc)}}function m(e,n){if(1&e&&(s.Mb(0,"ion-list",22),s.fc(1,g,14,4,"ion-item",23),s.Lb()),2&e){const e=s.Wb();s.zb(1),s.Zb("ngForOf",e.markers)}}let b=(()=>{class e{constructor(){this.isMarkerAvailable=!1,this.isMarkerClicked=!0,this.infoWindows=[],this.markers=[],this.markerDetails=[{title:"",description:"",peakTimes:"",parkingGrade:"",mapScreen:"",iconScreen:"",iconSecondScreen:"",key:""}]}ionViewDidEnter(){this.clearSearch(),this.showMap()}initializeMarkers(){this.markers=[{title:"Heart Lake Conservation Park",latitude:"43.743",longitude:"-79.796",grade:"C",time:"9:30am - 5:15pm",description:"Heart Lake Conservation has a very limited amount of parking spaces. There are better locations to park and drop off at both the Southern Trail  and Western Trail. These residential areas have no traffic and add an extra 5-10 minute walk to your schedule.",peakTimes:"Peak times are during lunch hours, (11:30am-1:00pm), and early morning, (7:30am-9:30am)",parkingGrade:"Designated Parking Grade: C",mapScreen:"../../assets/images/heart-map.PNG",iconScreen:"../../assets/images/park-icon1.png",iconSecondScreen:"../../assets/images/park-icon.PNG",key:"../../assets/images/key.PNG"},{title:"Trinity Common Brampton",latitude:"43.733",longitude:"-79.766",grade:"A-",time:"9:30am - 5:15pm",description:"Trinity Common Mall, is also referred to as Trinity Commons. It's designated parking accomodates a lot of people, yet the traffic on Great Lakes Dr. can become hectic. To avoid traffic, consider parking in the nearby residential areas for an extra 5 minute walk.",peakTimes:"Peak times are throughout weekends and from 2:00pm-4:00pm on weekdays.",parkingGrade:"Designated Parking Grade: A-",mapScreen:"../../assets/images/trinity-map.PNG",iconScreen:"../../assets/images/mall-icon1.png",iconSecondScreen:"../../assets/images/mall-icon.PNG",key:"../../assets/images/key.PNG"},{title:"Mount Pleasant Library",latitude:"43.677",longitude:"-79.824",grade:"D-",time:"Same hours as Ocean",description:"Mount Pleasant Library shares parking spaces with an elementary school and faces the traffic of workers going to the GO Station. To avoid this traffic and find alternative parking, consider staying off of Commuter Drive and using Salvation Road to park near residential areas. Limit your time on Ganton Road as well.",peakTimes:"Peak time during weekday mornings from 7:00am - 9:00am. Do not visit when GO Station is busy!",parkingGrade:"Designated Parking Grade: D-",mapScreen:"../../assets/images/mount-map.PNG",iconScreen:"../../assets/images/library-icon1.png",iconSecondScreen:"../../assets/images/library-icon.PNG",key:"../../assets/images/key.PNG"},{title:"Gage Park",latitude:"43.684",longitude:"-79.758",grade:"C+",time:"7am - 6pm",description:"Gage Park has subpar parking situation, and it is recommended to park in a nearby area and walk. Elizabeth Street is the perfect street to use while avoiding the traffic of Main Street. Parking near the residential area of Elizabeth Street and Craig Street is recommended for a 10-15 minute walk to the main area of the park.",peakTimes:"Peak time at 11:30am-2:00pm on weekends. Best enjoyed with lunch from local restaurants.",parkingGrade:"Designated Parking Grade: C+",mapScreen:"../../assets/images/gage-map.PNG",iconScreen:"../../assets/images/park-icon1.png",iconSecondScreen:"../../assets/images/park-icon.PNG",key:"../../assets/images/key.PNG"},{title:"Loafer's Lake Conservation",latitude:"43.724",longitude:"-79.802",grade:"C+",time:"7:30am - 11am",description:"Loafer's Lake Conservation has a decent parking system. Avoid traffic on Sandalwood Parkway by using Conestoga Drive. Park near the residential areas of Braidwook Lake Drive and Lakecrest Trail to avoid congested areas.",peakTimes:"Peak time at 7:30am - 11:00am during weekends.",parkingGrade:"Designated Parking Grade: C+",mapScreen:"../../assets/images/loafer-map.PNG",iconScreen:"../../assets/images/park-icon1.png",iconSecondScreen:"../../assets/images/park-icon.PNG",key:"../../assets/images/key.PNG"}]}getItems(e){this.initializeMarkers();const n=e.target.value;n&&""!==n.trim()?(this.isMarkerAvailable=!0,this.markers=this.markers.filter(e=>0==e.title.toLowerCase().indexOf(n.toLowerCase(),0))):this.isMarkerAvailable=!1}addMarkers(e){for(let n of e){let e=new google.maps.LatLng(n.latitude,n.longitude),i=new google.maps.Marker({position:e,title:n.title,latitude:n.latitude,longitude:n.longitude,grade:n.grade,time:n.time,description:n.description,peakTimes:n.peakTimes,parkingGrade:n.parkingGrade,mapScreen:n.mapScreen,iconScreen:n.iconScreen,iconSecondScreen:n.iconSecondScreen,key:n.key});i.setMap(this.map),this.addInfoToMarker(i)}}addInfoToMarker(e){let n=new google.maps.InfoWindow({content:'<div id="content"><ion-button id="navigate" fill="solid" expand="full" color="dark" strong> <p style="font-size:12px">'+e.title+'</p> </ion-button><ion-button id="navigate1" fill="default" expand="full" color="dark" strong> <p style="font-size:12px">Grade: '+e.grade+'</p> </ion-button><ion-button id="navigate2" fill="default" expand="full" color="dark" strong> <p style="font-size:12px">'+e.time+"</p> </ion-button></div>"});e.addListener("click",()=>{this.closeInfoWindows(),n.open(this.map,e),google.maps.event.addListenerOnce(n,"domready",()=>{document.getElementById("navigate").addEventListener("click",()=>{this.nextPage(e)})}),google.maps.event.addListenerOnce(n,"domready",()=>{document.getElementById("navigate1").addEventListener("click",()=>{this.nextPage(e)})}),google.maps.event.addListenerOnce(n,"domready",()=>{document.getElementById("navigate2").addEventListener("click",()=>{this.nextPage(e)})})}),this.infoWindows.push(n)}nextPage(e){this.isMarkerClicked=!1,this.markerDetails.title=e.title,this.markerDetails.mapScreen=e.mapScreen,this.markerDetails.description=e.description,this.markerDetails.peakTimes=e.peakTimes,this.markerDetails.parkingGrade=e.parkingGrade,this.markerDetails.iconScreen=e.iconScreen,this.markerDetails.iconSecondScreen=e.iconSecondScreen,this.markerDetails.key=e.key,this.clearSearch()}clearSearch(){this.isMarkerAvailable=!1,this.searchbar.value=null}changeMap(){console.log("back clicked"),this.isMarkerClicked=!0,this.closeInfoWindows()}closeInfoWindows(){for(let e of this.infoWindows)e.close()}showMap(){let e={center:new google.maps.LatLng(43.72,-79.79),zoom:12,disableDefaultUI:!1,styles:c.a};this.initializeMarkers(),this.map=new google.maps.Map(this.mapRef.nativeElement,e),this.addMarkers(this.markers)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Db({type:e,selectors:[["app-tab3"]],viewQuery:function(e,n){if(1&e&&(s.jc(d,1,s.m),s.jc(l,1)),2&e){let e;s.bc(e=s.Vb())&&(n.mapRef=e.first),s.bc(e=s.Vb())&&(n.searchbar=e.first)}},decls:40,vars:12,consts:[[3,"translucent"],["id","header"],["id","title"],["type","text","debounce","500","id","search",3,"ionChange"],["mySearchbar",""],["id","list",4,"ngIf"],[3,"fullscreen"],["id","map",3,"hidden"],["map",""],["id","header",3,"hidden"],["id","secondGrid"],[3,"click"],["size","5"],["id","imageCenter",3,"src"],["size","5","id","alignCenter"],["id","title2"],["id","colColor"],["size","2","id","alignCenter"],["size","2"],["id","iconSecond",3,"src"],["size","1"],["id","key",3,"src"],["id","list"],[4,"ngFor","ngForOf"],["item-right","","id","invisButton",3,"click"],["id","searchGrid"],["size","auto"],["id","iconScreen",3,"src"]],template:function(e,n){1&e&&(s.Mb(0,"ion-header",0),s.Mb(1,"div",1),s.Kb(2,"br"),s.Kb(3,"br"),s.Mb(4,"ion-title",2),s.gc(5," Attractions "),s.Lb(),s.Kb(6,"br"),s.Mb(7,"ion-searchbar",3,4),s.Ub("ionChange",function(e){return n.getItems(e)}),s.Lb(),s.Kb(9,"br"),s.fc(10,m,2,1,"ion-list",5),s.Lb(),s.Lb(),s.Mb(11,"ion-content",6),s.Kb(12,"div",7,8),s.Mb(14,"div",9),s.Mb(15,"ion-grid",10),s.Mb(16,"ion-row"),s.Mb(17,"ion-button",11),s.Ub("click",function(){return n.changeMap()}),s.gc(18,"Back"),s.Lb(),s.Lb(),s.Mb(19,"ion-row"),s.Mb(20,"ion-col",12),s.Kb(21,"img",13),s.Lb(),s.Lb(),s.Mb(22,"ion-row"),s.Mb(23,"ion-col",14),s.Mb(24,"h1",15),s.gc(25),s.Lb(),s.Lb(),s.Lb(),s.Mb(26,"ion-row"),s.Mb(27,"ion-col",12),s.Mb(28,"p"),s.gc(29),s.Lb(),s.Mb(30,"p"),s.gc(31),s.Lb(),s.Lb(),s.Lb(),s.Mb(32,"ion-row",16),s.Mb(33,"ion-col",17),s.Mb(34,"p",15),s.gc(35),s.Lb(),s.Lb(),s.Mb(36,"ion-col",18),s.Kb(37,"img",19),s.Lb(),s.Mb(38,"ion-col",20),s.Kb(39,"img",21),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&e&&(s.Zb("translucent",!0),s.zb(10),s.Zb("ngIf",n.isMarkerAvailable),s.zb(1),s.Zb("fullscreen",!0),s.zb(1),s.Zb("hidden",!n.isMarkerClicked),s.zb(2),s.Zb("hidden",n.isMarkerClicked),s.zb(7),s.ac("src",n.markerDetails.mapScreen,s.dc),s.zb(4),s.hc(n.markerDetails.title),s.zb(4),s.hc(n.markerDetails.description),s.zb(2),s.hc(n.markerDetails.parkingGrade),s.zb(4),s.hc(n.markerDetails.peakTimes),s.zb(2),s.ac("src",n.markerDetails.iconSecondScreen,s.dc),s.zb(2),s.ac("src",n.markerDetails.key,s.dc))},directives:[t.f,t.q,t.m,t.t,o.i,t.d,t.e,t.l,t.b,t.c,t.j,o.h,t.h],styles:["#map[_ngcontent-%COMP%]{height:100%;z-index:-1}@media (min-width:500px){#header[_ngcontent-%COMP%]{background-color:#8854d0}#iconScreen[_ngcontent-%COMP%]{width:75px;height:75px}#search[_ngcontent-%COMP%]{--icon-color:#fff;--placeholder-color:#fff;--placeholder-font-weight:5;--placeholder-opacity:5;--background:#7a4bbb;--color:#fff}#title[_ngcontent-%COMP%]{color:#fff;font-size:50px}#title2[_ngcontent-%COMP%]{background-color:#5e17eb;color:#fff}#list[_ngcontent-%COMP%]{background-color:#15181e;color:#15181e}ion-item[_ngcontent-%COMP%]{--padding-end:0px;--inner-padding-end:0px;--padding-start:0px;--background:#15181e}#invisButton[_ngcontent-%COMP%]{color:#fff;background-color:#15181e;width:5000px}#leftRow[_ngcontent-%COMP%]{text-align:right}#searchGrid[_ngcontent-%COMP%], #secondGrid[_ngcontent-%COMP%]{font-size:25px}#secondGrid[_ngcontent-%COMP%]{--ion-grid-columns:5;width:50%;border:.01em solid #000;margin-bottom:-1px;background-color:#fff}#alignCenter[_ngcontent-%COMP%]{text-align:center}#colColor[_ngcontent-%COMP%]{background-color:#5e17eb}#imageCenter[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}}@media (max-width:500px){#header[_ngcontent-%COMP%]{background-color:#8854d0}#iconScreen[_ngcontent-%COMP%]{width:45px;height:45px}#iconSecond[_ngcontent-%COMP%]{width:100px;height:100px}#search[_ngcontent-%COMP%]{--icon-color:#fff;--placeholder-color:#fff;--placeholder-font-weight:5;--placeholder-opacity:5;--background:#7a4bbb;--color:#fff}#title[_ngcontent-%COMP%]{color:#fff;font-size:25px}#title2[_ngcontent-%COMP%]{background-color:#5e17eb;color:#fff}#list[_ngcontent-%COMP%]{background-color:#15181e;color:#15181e}ion-item[_ngcontent-%COMP%]{--padding-end:0px;--inner-padding-end:0px;--padding-start:0px;--background:#15181e}#invisButton[_ngcontent-%COMP%]{color:#fff;background-color:#15181e;width:5000px}#leftRow[_ngcontent-%COMP%]{text-align:right}#searchGrid[_ngcontent-%COMP%], #secondGrid[_ngcontent-%COMP%]{font-size:12px}#secondGrid[_ngcontent-%COMP%]{--ion-grid-columns:5;border:.01em solid #000;margin-bottom:-1px;background-color:#fff}#alignCenter[_ngcontent-%COMP%]{text-align:center}#colColor[_ngcontent-%COMP%]{background-color:#5e17eb}#imageCenter[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}#key[_ngcontent-%COMP%]{width:35px;height:100px}}"]}),e})();var p=i("qtYk");const k=[{path:"",component:b}];let f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({imports:[[a.i.forChild(k)],a.i]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({imports:[[t.r,o.b,r.a,p.a,a.i.forChild([{path:"",component:b}]),f]]}),e})()}}]);