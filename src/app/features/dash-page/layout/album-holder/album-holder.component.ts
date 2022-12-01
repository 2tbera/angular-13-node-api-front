import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { FormBuilder, Validators } from "@angular/forms";

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



  constructor( private route: ActivatedRoute,private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public openAddAlbumPopup(): void {
    const dialogRef = this.dialog.open(DialogAddMusicDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result.name) {return}
      // this.store.dispatch(createAlbum(result))
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
    @Inject(MAT_DIALOG_DATA) public data: void,
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }


  public test(value: any): void {

    const formData: any = new FormData();
    formData.append('file', value.target.files[0] );

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    this.http.post(`http://localhost:3000/file/upload`, formData, {
        headers,
      }).subscribe((res) => {
        const x = res as { filename: string}

        this.form.get('file')?.setValue(x.filename)
    });
  }

}
