import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit,OnDestroy {

  constructor(private ns:NavbarService,
    private router: Router, private route: ActivatedRoute) { }
  ngOnDestroy(): void {
    this.ns.updateNavbarStatus(true);
  }

  ngOnInit(): void {
    this.ns.updateNavbarStatus(false);
  }

  goBack():void {
    var id = '1234'
    this.router.navigate(['/cards',id], { relativeTo: this.route, queryParams: { order: 'popular' ,order2: 'popular'} });
  }
}
