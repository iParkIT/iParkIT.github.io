import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { mapStyle } from '../mapStyle';
import { IonSearchbar } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  map: any;

  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  @ViewChild('mySearchbar', {static: false}) searchbar: IonSearchbar;

  isMarkerAvailable = false;
  isMarkerClicked = true;
  infoWindows: any = [];
  markers: any = [];
  markerDetails: any = [
    {
      title: "",
      description: "",
      peakTimes: "",
      parkingGrade: "",
      mapScreen: "",
      iconScreen: "",
      iconSecondScreen: "",
      key: ""
    }
  ];

  constructor() { }

  ionViewDidEnter() {
    this.clearSearch();
    this.showMap();
  }

  initializeMarkers() {
    this.markers = [
      {
        title: "Louise Arbour Secondary School",
        latitude: "43.759",
        longitude: "-79.767",
        grade: "C",
        time: "8am - 5pm",
        description: "Louise Arbor Secondary School, better known as LA or LASS has a decent parking situation. Try to avoid Bramalea Road if possible, and consider taking a detour through Fernforest Drive to drop off students in the nearby residential areas for an extra 5-10 minute walk.",
        peakTimes: "Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",
        parkingGrade: "Designated Parking Grade: C",
        mapScreen: "../../assets/images/louise-map.PNG",
        iconScreen: "../../assets/images/school-icon1.png",
        iconSecondScreen: "../../assets/images/school-icon.PNG",
        key: "../../assets/images/key.PNG"
      },
      {
        title: "Sandalwood Heights Secondary School",
        latitude: "43.766",
        longitude: "-79.744",
        grade: "C",
        time: "7:30pm - Midnight",
        description: "Sandalwood Heights Secondary School, also referred to as Swood has a subpar parking system. Try staying off of Sandalwood Parkway and limit your time on Torbram Road. Drop students off at the residential areas or the Gas Station at Sandalwood and Torbram for an extra 5-15 minute walk. Using Torbram Road to drop students off at the Southern Walking trails is recommended.",
        peakTimes: "Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",
        parkingGrade: "Designated Parking Grade: C",
        mapScreen: "../../assets/images/sandalwood-map.PNG",
        iconScreen: "../../assets/images/school-icon1.png",
        iconSecondScreen: "../../assets/images/school-icon.PNG",
        key: "../../assets/images/key.PNG"
      },
      {
        title: "Harold M. Brathwaite Secondary School",
        latitude: "43.739",
        longitude: "-79.771",
        grade: "D+",
        time: "10am - 9pm",
        description: "Harold M. Brathwaite Secondary School, better known as HB or HBSS has a very limited amount of parking. The best place to park is at the nearby Sandalwood Park Seniors Centre or Soccer Centre. Great Lakes Drive is the most busiest road and should be avoided if possible.",
        peakTimes: "Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",
        parkingGrade: "Designated Parking Grade: D+",
        mapScreen: "../../assets/images/harold-map.PNG",
        iconScreen: "../../assets/images/school-icon1.png",
        iconSecondScreen: "../../assets/images/school-icon.PNG",
        key: "../../assets/images/key.PNG"
      },
      {
        title: "Williams Parkway Sr. Public School",
        latitude: "43.731",
        longitude: "-79.732",
        grade: "D-",
        time: "12pm - 7pm",
        description: "Williams Parkway Senior Public School, also known as WP has a terrible parking system. It is heavily recommended that you drop students off at the Terry Miller Recreation Centre for an extra 5 minute walk. Limit your time on Williams Parkway road and park in nearby residential areas at Hilldale Crescent. Using Mansfield Street is also healthy, yet it would add an extra 10-15 minutes of walking time.",
        peakTimes: "Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",
        parkingGrade: "Designated Parking Grade: D-",
        mapScreen: "../../assets/images/williams-map.PNG",
        iconScreen: "../../assets/images/school-icon1.png",
        iconSecondScreen: "../../assets/images/school-icon.PNG",
        key: "../../assets/images/key.PNG"
      },
      {
        title: "Central Peel Secondary School",
        latitude: "43.698",
        longitude: "-79.751",
        grade: "B",
        time: "10am - Midnight",
        description: "Central Peel Secondary School, also known as CPSS has a decent parking situation. Queen Street and Kennedy Road hosts large volumes of traffic, so it is better to limit your time on these streets. Use the residential areas on Woodward and McCaul to your advantage. If approaching from the South, drop students at the Southern intersection.",
        peakTimes: "Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",
        parkingGrade: "Designated Parking Grade: B",
        mapScreen: "../../assets/images/central-map.PNG",
        iconScreen: "../../assets/images/school-icon1.png",
        iconSecondScreen: "../../assets/images/school-icon.PNG",
        key: "../../assets/images/key.PNG"
      },
      {
        title: "Turner Fenton Secondary School",
        latitude: "43.676",
        longitude: "-79.718",
        grade: "C+",
        time: "5pm - 10pm, 21+ after 10pm",
        description: "Turner Fenton Secondary School, also refered to as TFSS or just 'Turner' has a subpar parking situation. Kennedy Road and First Gulf Road faces a lot of traffic during peak times. It is recommended to drop students at the surrounding Home Depot complex or the residential areas near the intersections of Kennedy Road and First Gulf Road.",
        peakTimes: "Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",
        parkingGrade: "Designated Parking Grade: C+",
        mapScreen: "../../assets/images/turner-map.PNG",
        iconScreen: "../../assets/images/school-icon1.png",
        iconSecondScreen: "../../assets/images/school-icon.PNG",
        key: "../../assets/images/key.PNG"
      },
      {
        title: "Centennial Senior Public School",
        latitude: "43.672",
        longitude: "-79.749",
        grade: "C-",
        time: "7am - 6pm",
        description: "Centennial Senior Public School, also known as CSPS has a relatively bad parking situation. Try avoiding Main Street if possible, and limit your time on Elgin Drive and Ladore Drive. Park near the residential areas near Ambleside Drive and Elibeth Street. To access these roads and avoid Ladore Drive, try using Mill Street.",
        peakTimes: "Peak time at 8:15am-8:25am and 2:15pm-2:45pm. Arrive 15 minutes earlier/later for best timing.",
        parkingGrade: "Designated Parking Grade: C-",
        mapScreen: "../../assets/images/centennial-map.PNG",
        iconScreen: "../../assets/images/school-icon1.png",
        iconSecondScreen: "../../assets/images/school-icon.PNG",
        key: "../../assets/images/key.PNG"
      },
      {
        title: "Heart Lake Conservation Park",
        latitude: "43.743",
        longitude: "-79.796",
        grade: "C",
        time: "9:30am - 5:15pm",
        description: "Heart Lake Conservation has a very limited amount of parking spaces. There are better locations to park and drop off at both the Southern Trail  and Western Trail. These residential areas have no traffic and add an extra 5-10 minute walk to your schedule.",
        peakTimes: "Peak times are during lunch hours, (11:30am-1:00pm), and early morning, (7:30am-9:30am)",
        parkingGrade: "Designated Parking Grade: C",
        mapScreen: "../../assets/images/heart-map.PNG",
        iconScreen: "../../assets/images/park-icon1.png",
        iconSecondScreen: "../../assets/images/park-icon.PNG",
        key: "../../assets/images/key.PNG"
      },
      {
        title: "Trinity Common Brampton",
        latitude: "43.733",
        longitude: "-79.766",
        grade: "A-",
        time: "9:30am - 5:15pm",
        description: "Trinity Common Mall, is also referred to as Trinity Commons. It's designated parking accomodates a lot of people, yet the traffic on Great Lakes Dr. can become hectic. To avoid traffic, consider parking in the nearby residential areas for an extra 5 minute walk.",
        peakTimes: "Peak times are throughout weekends and from 2:00pm-4:00pm on weekdays.",
        parkingGrade: "Designated Parking Grade: A-",
        mapScreen: "../../assets/images/trinity-map.PNG",
        iconScreen: "../../assets/images/mall-icon1.png",
        iconSecondScreen: "../../assets/images/mall-icon.PNG",
        key: "../../assets/images/key.PNG"
      },
      {
        title: "Mount Pleasant Library",
        latitude: "43.677",
        longitude: "-79.824",
        grade: "D-",
        time: "Same hours as Ocean",
        description: "Mount Pleasant Library shares parking spaces with an elementary school and faces the traffic of workers going to the GO Station. To avoid this traffic and find alternative parking, consider staying off of Commuter Drive and using Salvation Road to park near residential areas. Limit your time on Ganton Road as well.",
        peakTimes: "Peak time during weekday mornings from 7:00am - 9:00am. Do not visit when GO Station is busy!",
        parkingGrade: "Designated Parking Grade: D-",
        mapScreen: "../../assets/images/mount-map.PNG",
        iconScreen: "../../assets/images/library-icon1.png",
        iconSecondScreen: "../../assets/images/library-icon.PNG",
        key: "../../assets/images/key.PNG"
      },
      {
        title: "Gage Park",
        latitude: "43.684",
        longitude: "-79.758",
        grade: "C+",
        time: "7am - 6pm",
        description: "Gage Park has subpar parking situation, and it is recommended to park in a nearby area and walk. Elizabeth Street is the perfect street to use while avoiding the traffic of Main Street. Parking near the residential area of Elizabeth Street and Craig Street is recommended for a 10-15 minute walk to the main area of the park.",
        peakTimes: "Peak time at 11:30am-2:00pm on weekends. Best enjoyed with lunch from local restaurants.",
        parkingGrade: "Designated Parking Grade: C+",
        mapScreen: "../../assets/images/gage-map.PNG",
        iconScreen: "../../assets/images/park-icon1.png",
        iconSecondScreen: "../../assets/images/park-icon.PNG",
        key: "../../assets/images/key.PNG"
      },
      {
        title: "Loafer's Lake Conservation",
        latitude: "43.724",
        longitude: "-79.802",
        grade: "C+",
        time: "7:30am - 11am",
        description: "Loafer's Lake Conservation has a decent parking system. Avoid traffic on Sandalwood Parkway by using Conestoga Drive. Park near the residential areas of Braidwook Lake Drive and Lakecrest Trail to avoid congested areas.",
        peakTimes: "Peak time at 7:30am - 11:00am during weekends.",
        parkingGrade: "Designated Parking Grade: C+",
        mapScreen: "../../assets/images/loafer-map.PNG",
        iconScreen: "../../assets/images/park-icon1.png",
        iconSecondScreen: "../../assets/images/park-icon.PNG",
        key: "../../assets/images/key.PNG"
      }
    ];
  }

  getItems(ev: any) {

    this.initializeMarkers();
    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.isMarkerAvailable = true;
      this.markers = this.markers.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase(), 0) == 0);
      })
    } else {
      this.isMarkerAvailable = false;
    }
  }

  addMarkers(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude,
        grade: marker.grade,
        time: marker.time,
        description: marker.description,
        peakTimes: marker.peakTimes,
        parkingGrade: marker.parkingGrade,
        mapScreen: marker.mapScreen,
        iconScreen: marker.iconScreen,
        iconSecondScreen: marker.iconSecondScreen,
        key: marker.key
      });

      mapMarker.setMap(this.map);
      this.addInfoToMarker(mapMarker);
    }
  }

  addInfoToMarker(marker) {
    let infoContent = '<div id="content">' +
      '<ion-button id="navigate" fill="solid" expand="full" color="dark" strong> <p style="font-size:12px">' + marker.title + '</p> </ion-button>' +
      '<ion-button id="navigate1" fill="default" expand="full" color="dark" strong> <p style="font-size:12px">Grade: ' + marker.grade + '</p> </ion-button>' +
      '<ion-button id="navigate2" fill="default" expand="full" color="dark" strong> <p style="font-size:12px">' + marker.time + '</p> </ion-button>' +
      '</div>';
    let infoWindow = new google.maps.InfoWindow({
      content: infoContent
    });

    marker.addListener('click', () => {
      this.closeInfoWindows();
      infoWindow.open(this.map, marker);

      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('navigate').addEventListener('click', () => {
          this.nextPage(marker);
        });
      })
      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('navigate1').addEventListener('click', () => {
          this.nextPage(marker);
        });
      })
      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('navigate2').addEventListener('click', () => {
          this.nextPage(marker);
        });
      })
    });
    this.infoWindows.push(infoWindow);
  }

  nextPage(marker) {
    this.isMarkerClicked = false;
    this.markerDetails.title = marker.title;
    this.markerDetails.mapScreen = marker.mapScreen;
    this.markerDetails.description = marker.description;
    this.markerDetails.peakTimes = marker.peakTimes;
    this.markerDetails.parkingGrade = marker.parkingGrade;
    this.markerDetails.iconScreen = marker.iconScreen;
    this.markerDetails.iconSecondScreen = marker.iconSecondScreen;
    this.markerDetails.key = marker.key;
    this.clearSearch();
  }

  clearSearch() {
    this.isMarkerAvailable = false;
    this.searchbar.value = null;
  }

  changeMap() {
    console.log("back clicked");
    this.isMarkerClicked = true;
    this.closeInfoWindows();
  }

  closeInfoWindows() {
    for (let window of this.infoWindows) {
      window.close();
    }
  }

  showMap() {
    let coords = new google.maps.LatLng(43.72, -79.77);
    let options = {
      center: coords,
      zoom: 12,
      disableDefaultUI: false,
      styles: mapStyle
    }

    this.initializeMarkers();
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkers(this.markers);
  }
}
