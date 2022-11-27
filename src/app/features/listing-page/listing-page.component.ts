import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Item } from '../../core/models/item.model';
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { select, Store } from "@ngrx/store";
import { addFile } from "../../store/list/actions/list.action";
import { selectList } from "../../store/list/reducers/list.reducer";
import { getMyData } from 'src/app/store/my-info/actions/my-info.action';

@Component({
  templateUrl: './listing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingPageComponent implements OnInit {

  public fileList: Item[] = [];

  public fileList$ = this.store.pipe(select(selectList()));

  constructor(private router: Router, private sanitizer: DomSanitizer,
              private cookieService: CookieService,
              private store: Store,
              private changeDetection: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  public fileChange(data: any): void {
    const img: SafeResourceUrl = this.getImageSanitizedUrl(URL.createObjectURL(data));
    const item: Item = {
      title: data.name,
      logo: img
    }
    this.fileList.push(
      item
    );
    this.store.dispatch(addFile({addNewFile: item}))
    this.changeDetection.detectChanges();
  }

  private getImageSanitizedUrl(fileUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);
  }

  public testToken() {
    this.store.dispatch(getMyData())
  }


  public onLogout(): void {

    this.cookieService.delete('accessToken')
    this.cookieService.delete('refreshToken')

    this.router.navigate(['auth'])
  }

}
