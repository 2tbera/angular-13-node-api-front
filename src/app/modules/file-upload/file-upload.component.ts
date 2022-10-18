import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'file-upload',
    templateUrl: 'file-upload.component.html',
})
export class FileUploadComponent {
    public selectedFile: any;

    @Input() accept?: string;
    @Input() isActive: boolean = true;
    @Input() text?: string ;

    @Output("fileChange") fileChangeEmitter: EventEmitter<File | null> = new EventEmitter();

    constructor(private sanitizer: DomSanitizer) { }

    public fileChange(event: any): void {
        if (event && event.target && event.target.files) {
            this.fileChangeEmitter.emit(event.target.files[0]);
        }
        else {
            this.fileChangeEmitter.emit(null);
            this.selectedFile = null;
        }
    }

}
