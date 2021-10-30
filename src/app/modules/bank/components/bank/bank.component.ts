import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/modules/core/services/cache.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  constructor(private cacheService: CacheService,
              private router: Router) { }

  public ngOnInit(): void {
    if (!this.cacheService.getItemLocal('token')) {
      this.router.navigate(['auth']);
    }
  }

  public logout() {
    this.cacheService.cleanLocal();
    this.cacheService.cleanSession();
    this.router.navigate(['auth']);
  }

}
