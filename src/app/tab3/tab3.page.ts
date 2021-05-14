import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { mapStyle } from '../mapStyle';
import { IonSearchbar } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
    let coords = new google.maps.LatLng(43.72, -79.79);
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
