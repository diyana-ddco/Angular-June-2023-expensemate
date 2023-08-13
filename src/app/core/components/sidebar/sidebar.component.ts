import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, inject } from '@angular/core';
import { RouteInfo } from './sidebar.metadata';
import { SIDEBAR_ITEMS } from './sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);
  public elementRef = inject(ElementRef);
  
  public sidebarItems!: RouteInfo[];
  public menuIcon:string = 'radio_button_checked';
  public listMaxHeight?: string;
  public innerHeight?: number;
  public headerHeight = 60;
  
  ngOnInit(): void {
    this.setMenuHeight();
    this.sidebarItems = SIDEBAR_ITEMS.filter((sidebarItem) => sidebarItem);
  }

  callSidemenuCollapse() {
    const hasClass = this.document.body.classList.contains('side-closed');
    if (hasClass) {
      this.renderer.removeClass(this.document.body, 'side-closed');
      this.renderer.removeClass(this.document.body, 'submenu-closed');
      this.menuIcon = 'radio_button_checked';
    } else {
      this.renderer.addClass(this.document.body, 'side-closed');
      this.renderer.addClass(this.document.body, 'submenu-closed');
      this.menuIcon = 'radio_button_unchecked';
    }

    const sideClosedHover =
      this.document.body.classList.contains('side-closed');
    if (sideClosedHover) {
      this.renderer.removeClass(this.document.body, 'side-closed-hover');
    }
  }

  callToggleMenu(event: Event, length: number) {
    if (length > 0) {
      const parentElement = (event.target as HTMLInputElement).closest('li');
      const activeClass = parentElement?.classList.contains('active');

      if (activeClass) {
        this.renderer.removeClass(parentElement, 'active');
      } else {
        this.renderer.addClass(parentElement, 'active');
      }
    }
  }
  
  mouseHover() {
    const body = this.elementRef.nativeElement.closest('body');
    if (body.classList.contains('submenu-closed')) {
      this.renderer.addClass(this.document.body, 'side-closed-hover');
      this.renderer.removeClass(this.document.body, 'submenu-closed');
    }
  }

  mouseOut() {
    const body = this.elementRef.nativeElement.closest('body');
    if (body.classList.contains('side-closed-hover')) {
      this.renderer.removeClass(this.document.body, 'side-closed-hover');
      this.renderer.addClass(this.document.body, 'submenu-closed');
    }
  }

  setMenuHeight() {
    this.innerHeight = window.innerHeight;
    const height = this.innerHeight - this.headerHeight;
    this.listMaxHeight = height + '';
  }

  // logout() {
  //   this.authService.logout().subscribe((res) => {
  //     if (!res.success) {
  //       this.router.navigate(['/authentication/signin']);
  //     }
  //   });
  // }
}
