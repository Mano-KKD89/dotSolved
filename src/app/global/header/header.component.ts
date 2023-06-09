import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {
  }
  public changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}
