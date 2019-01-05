import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  archive: any;

  constructor(private router: ActivatedRoute, private router2: Router) { }

  ngOnInit() {
    this.router.paramMap
      .subscribe(params => {
        let y = params.get('year');
        let m = params.get('month');
        this.archive = { year: y, month: m };
      });
  }

  backToHome(){
    this.router2.navigate(['']);
  }

}
