import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';

@Component({
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {

  @Input() public close: (() => void) = () => {};
  @Input() public delay: number | undefined;
  @Input() public message: string | undefined;
  @Input() public type: string | undefined;

  private timer: number | undefined;
  public show: boolean | undefined;


  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  closeToast() {
    this.timer = setTimeout(() => {
      this.show = false;
      setTimeout(() => {
        this.close();
      }, 400);
    }, this.delay);
  }

  ngOnInit() {
    this.show = false;
    this.changeDetectorRef.detectChanges();
    setTimeout(() => {
      this.show = true;
      this.changeDetectorRef.detectChanges();
      this.startHideTimeout();
    });
  }

  public  startHideTimeout(): void {
    this.closeToast();
  }

  public stopHideTimeout(): void {
    clearTimeout(this.timer);
  }
}

