import {
  AfterViewInit, ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AlertComponent } from '../alert/alert.component';
import { AlertModel } from '../../store/models/alert.model';
import { AlertStateLast } from '../../store/reducers/alert.reducer';
import { AlertTypes } from '../../store/enums/enums';

@Component({
  selector: 'alert-outlet',
  templateUrl: './alert-outlet.component.html',
  styleUrls: ['./alert-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertOutletComponent implements AfterViewInit {

  @ViewChild('container', {read: ViewContainerRef, static: true}) public container: ViewContainerRef | undefined;

  // @ts-ignore
  public ntAlertStateLast$: Observable<AlertModel | undefined> = this.store.pipe(select(AlertStateLast));

  public componentFactory: ComponentFactory<AlertComponent>;

  private alert(message: string, type: string, delay: number = 5000): void {
    const alert: ComponentRef<AlertComponent> | undefined = this.container?.createComponent(this.componentFactory);
    if (!alert) {
      return
    }
    alert.instance.type = type;
    alert.instance.message = message;
    alert.instance.delay = delay;
    alert.instance.close = () => {
      alert.destroy();
    };
  }

  constructor(@Inject(DOCUMENT) private document: Document, componentFactoryResolver: ComponentFactoryResolver, private store: Store<AlertTypes>, private cdr: ChangeDetectorRef) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(AlertComponent);
  }

  ngAfterViewInit(): void {
    this.ntAlertStateLast$.subscribe(res => {
      console.log(res, 1111)
      if (!res) {
        return;
      }

      switch (res.alertType) {
        case AlertTypes.Success:
          this.success(res.message, res.delay);
          break;
        case AlertTypes.Danger:
          this.danger(res.message, res.delay);
          break;
        case AlertTypes.Warning:
          this.warning(res.message, res.delay);
          break;
        case AlertTypes.Info:
          this.info(res.message, res.delay);
          break;
      }
      this.cdr.markForCheck();
    });
  }

  private danger(message: string, delay?: number) {
    this.alert(message, 'danger', delay);
  }

  private info(message: string, delay?: number) {
    this.alert(message, 'info', delay);
  }

  private success(message: string, delay?: number) {
    this.alert(message, 'success', delay);
  }

  private warning(message: string, delay?: number) {
    this.alert(message, 'warning', delay);
  }
}
