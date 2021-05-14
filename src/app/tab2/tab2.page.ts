import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { mapStyle } from '../mapStyle';
import { IonSearchbar } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
    let coords = new google.maps.LatLng(43.72, -79.75);
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
