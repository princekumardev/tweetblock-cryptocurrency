import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SocialcallbackService } from '../../_services/socialcallback.service';

@Component({
  selector: 'app-fbcallback',
  templateUrl: './fbcallback.component.html',
  styleUrls: ['./fbcallback.component.css']
})
export class FbcallbackComponent implements OnInit {
  public userid: string;
  public u: any;

  constructor(private router: Router, private http: Http,
              private socialcallbackService: SocialcallbackService) { }

  ngOnInit() {
    this.fbcallbackfetchdata();
  }

  fbcallbackfetchdata() {
      this.socialcallbackService.facebookcallback()
          .subscribe(result => {
              if (result === true) {
                  // login successful
                  //this.router.navigate(['/dashboard']);
              } else {
                  // login failed
                  //this.error = 'Username or password is incorrect';
              }
          });
  }


}
