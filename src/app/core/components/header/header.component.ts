import { DOCUMENT } from '@angular/common';
import { Component, Renderer2, inject } from '@angular/core';
import { ROUTER_TOKENS } from 'src/app/app.routes';
import { InConfiguration } from 'src/app/config/config.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  readonly ROUTER_TOKENS = ROUTER_TOKENS;
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);

  public config!: InConfiguration;
  userImg?: string;
  homePage?: string;
  isNavbarCollapsed = true;
  flagvalue: string | string[] | undefined;
  isOpenSidebar?: boolean;
  docElement: HTMLElement | undefined;
  isFullScreen = false;

  mobileMenuSidebarOpen(event: Event, className: string) {
    const hasClass = (event.target as HTMLInputElement).classList.contains(
      className
    );
    if (hasClass) {
      this.renderer.removeClass(this.document.body, className);
    } else {
      this.renderer.addClass(this.document.body, className);
    }

    const hasClass2 = this.document.body.classList.contains('side-closed');
    if (hasClass2) {
      // this.renderer.removeClass(this.document.body, "side-closed");
      this.renderer.removeClass(this.document.body, 'submenu-closed');
    } else {
      // this.renderer.addClass(this.document.body, "side-closed");
      this.renderer.addClass(this.document.body, 'submenu-closed');
    }
  }

  callSidemenuCollapse() {
    const hasClass = this.document.body.classList.contains('side-closed');
    if (hasClass) {
      this.renderer.removeClass(this.document.body, 'side-closed');
      this.renderer.removeClass(this.document.body, 'submenu-closed');
      localStorage.setItem('collapsed_menu', 'false');
    } else {
      this.renderer.addClass(this.document.body, 'side-closed');
      this.renderer.addClass(this.document.body, 'submenu-closed');
      localStorage.setItem('collapsed_menu', 'true');
    }
  }

  logout() {
    // this.subs.sink = this.authService.logout().subscribe((res) => {
    //   if (!res.success) {
    //     this.router.navigate(['/authentication/signin']);
    //   }
    // });
  }

}
