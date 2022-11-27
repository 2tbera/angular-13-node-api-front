import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { selectList } from "../../store/list/reducers/list.reducer";
import { getMyData } from 'src/app/store/my-info/actions/my-info.action';
import { selectMeInfo } from "../../store/my-info/reducers/my-info.reducer";
import { Me } from "../../core/models/me.model";
import { Observable } from "rxjs";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators } from "@angular/forms";
import { createAlbum, getAlbum } from "../../store/album/actions/album.action";

@Component({
  templateUrl: './listing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingPageComponent implements OnInit {

  public user$: Observable<Me> = this.store.pipe(select(selectMeInfo()));
  public fileList$ = this.store.pipe(select(selectList()));

  constructor(private router: Router,
              private cookieService: CookieService,
              public dialog: MatDialog,
              private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(getMyData())
    this.store.dispatch(getAlbum())
  }

  public openAddAlbumPopup(): void {
    const dialogRef = this.dialog.open(DialogAddAlbumDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result.name) {return}
      this.store.dispatch(createAlbum(result))
    });
  }

  public onLogout(): void {
    this.cookieService.delete('accessToken')
    this.cookieService.delete('refreshToken')
    this.router.navigate(['auth'])
  }
}

// REGION: Dialog component for Adding Albums

@Component({
  templateUrl: 'layout/dialog-add-album.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAddAlbumDialog {
  public form = this.fb.group({
    name: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogAddAlbumDialog>,
    @Inject(MAT_DIALOG_DATA) public data: void,
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
