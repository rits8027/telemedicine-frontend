import { Renderer2, OnInit, Inject, Component, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { api_key } from '../secrets';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css'],
})
export class MeetComponent implements OnInit, OnDestroy {
  meet: Object;
  appointmentId: string;
  private userListener: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private homeService: HomeService,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.route.params.subscribe((params) => (this.appointmentId = params.id));
  }

  loadMeeting() {
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
      var script = document.createElement("script");
      script.type = "text/javascript";

      script.addEventListener("load", function (event) {
        const meeting = new VideoSDKMeeting();

        const config = {
          name: "${this.authService.getUser().name}",
          apiKey: "${api_key}",
          meetingId: "${this.appointmentId}",

          containerId: null,
          redirectOnLeave: "${
            this.authService.getIsDoctor()
              ? this.meet['kioskRoom']
                ? 'http://localhost:4200/disable/' + this.appointmentId
                : 'http://localhost:4200/meet/' +
                  this.appointmentId +
                  '/prescription'
              : 'http://localhost:4200/home'
          }",
          
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
            visible: false, // Show the join screen ?
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

  ngOnInit(): void {
    if (this.authService.getIsUserFetched()) this.setUp();
    this.userListener = this.authService
      .getAuthStatusListener()
      .subscribe((userFetched) => userFetched && this.setUp());
  }

  setUp() {
    this.homeService.getAppointment(this.appointmentId).subscribe(
      (response) => {
        this.meet = response['data'];
        const allowed = this.meet['doctors'].concat(this.meet['attendees'], [
          this.meet['creator'],
        ]);
        if (
          allowed.includes(this.authService.getUserId()) ||
          this.authService.getIsKiosk()
        )
          this.loadMeeting();
        else this.router.navigate(['/home']);
      },
      (error) => {
        // show error
        this.router.navigate(['/home']);
      }
    );
  }

  ngOnDestroy(): void {
    this.userListener.unsubscribe();
  }
}
