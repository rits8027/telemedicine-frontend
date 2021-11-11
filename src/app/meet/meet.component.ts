import { Renderer2, OnInit, Inject, Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { api_key } from '../secrets';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css'],
})
export class MeetComponent implements OnInit {
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  public ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
      var script = document.createElement("script");
      script.type = "text/javascript";

      script.addEventListener("load", function (event) {
        const meeting = new VideoSDKMeeting();

        const config = {
          name: "Shouvit Pradhan",
          apiKey: "${api_key}",
          meetingId: "telemedecine",

          containerId: null,
          redirectOnLeave: "http://localhost:4200/home",

          micEnabled: true,
          webcamEnabled: true,
          participantCanToggleSelfWebcam: true,
          participantCanToggleSelfMic: true,

          chatEnabled: true,
          screenShareEnabled: true,
          pollEnabled: true,
          whiteBoardEnabled: true,
          raiseHandEnabled: true,

          recordingEnabled: true,
          recordingWebhookUrl: "https://www.videosdk.live/callback",
          participantCanToggleRecording: true,

          brandingEnabled: true,
          brandLogoURL: "https://c8.alamy.com/comp/R80572/clinical-digital-health-healthcare-telemedicine-line-icon-on-transparent-background-black-icon-vector-illustration-R80572.jpg",
          brandName: "Telemedicine",
          poweredBy: true,

          participantCanLeave: true, // if false, leave button won't be visible

          // Live stream meeting to youtube
          livestream: {
            autoStart: true,
            outputs: [
              // {
              //   url: "rtmp://x.rtmp.youtube.com/live2",
              //   streamKey: "<STREAM KEY FROM YOUTUBE>",
              // },
            ],
          },

          permissions: {
            askToJoin: false, // Ask joined participants for entry in meeting
            toggleParticipantMic: true, // Can toggle other participant's mic
            toggleParticipantWebcam: true, // Can toggle other participant's webcam
          },

          joinScreen: {
            visible: true, // Show the join screen ?
            title: "Shouvit's Meeting", // Meeting title
            meetingUrl: window.location.href, // Meeting joining url
          },

          pin: {
            allowed: true, // participant can pin any participant in meeting
            layout: "SPOTLIGHT", // meeting layout - GRID | SPOTLIGHT | SIDEBAR
          },
        };

        meeting.init(config);
      });

      script.src =
        "https://sdk.videosdk.live/rtc-js-prebuilt/0.1.15/rtc-js-prebuilt.js";
      document.getElementsByTagName("head")[0].appendChild(script);
      `;

    this._renderer2.appendChild(this._document.body, script);
  }
}
