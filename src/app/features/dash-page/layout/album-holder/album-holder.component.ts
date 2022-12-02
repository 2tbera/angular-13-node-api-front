import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormBuilder, Validators } from "@angular/forms";
import { getAlbumMusic } from "../../../../store/album/actions/album.action";
import { select, Store } from '@ngrx/store';
import {  selectAlbumsMusic } from "../../../../store/album/reducers/album.reducer";
import { filter } from "rxjs/operators";

/**
 * @description converts base64 string into File class
 * @param base64 base64 string of a file
 * @param fileName file name
 * @returns Object File class
 */

@Component({
  templateUrl: './album-holder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumHolderComponent implements OnInit {

  public albumsMusic$ = this.store.pipe(select(selectAlbumsMusic()));

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private dialog: MatDialog, private store: Store , private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.store.dispatch(getAlbumMusic({id: this.route.snapshot.params['id']}))
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((res) => {
      this.store.dispatch(getAlbumMusic({id: this.route.snapshot.params['id']}))
    })
  }

  public openAddAlbumPopup(): void {
    const dialogRef = this.dialog.open(DialogAddMusicDialog, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result.name) {return}
      this.http.post(`http://localhost:3000/album/addMusic/${this.route.snapshot.params['id']}`, result).subscribe((res) => {
        console.log(res, 122)
      });
    });
  }


}

@Component({
  templateUrl: 'layout/dialog-add-music/dialog-add-music.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAddMusicDialog {

  public form = this.fb.group({
    name: [null, Validators.required],
    category: [null, Validators.required],
    file: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogAddMusicDialog>,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: void,
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public upload(value: any): void {
    const formData: any = new FormData();
    formData.append('file', value.target.files[0] );
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    this.http.post(`http://localhost:3000/file/upload`, formData, {
        headers,
      }).subscribe((res) => {
        this.form.get('file')?.setValue((res as { filename: string}).filename);
        this.cdr.detectChanges();
    });
  }

}
