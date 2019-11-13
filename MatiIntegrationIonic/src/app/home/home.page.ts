import { Component, OnInit } from "@angular/core";

declare var cordova: any;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor() {}

  showMFKYC() {
    cordova.plugins.MatiGlobalIDSDK.showMFKYC();
  }

  ionViewDidEnter() {
    cordova.plugins.MatiGlobalIDSDK.init("5dc09bd3047ea0001c4b20ba");
    cordova.plugins.MatiGlobalIDSDK.metadata({ key: "value" });
    cordova.plugins.MatiGlobalIDSDK.setMatiCallback(
      identityId => {
        console.log("setMatiCallback success: " + identityId);
      },
      error => {
        console.log("setMatiCallback error: " + error);
      }
    );
  }
}
