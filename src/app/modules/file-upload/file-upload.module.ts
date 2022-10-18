import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FileUploadComponent } from './file-upload.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [FileUploadComponent],
    declarations: [FileUploadComponent]
})
export class FileUploadModule { }
