import { Component } from '@angular/core';
import { ROUTER_TOKENS } from 'src/app/app.routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly ROUTER_TOKENS = ROUTER_TOKENS;

  
}
