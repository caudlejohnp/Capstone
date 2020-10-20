import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizeService } from 'src/api-authorization/authorize.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public isAuthenticated: Observable<boolean>;

  constructor(private authService: AuthorizeService) { }

  async ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

}
