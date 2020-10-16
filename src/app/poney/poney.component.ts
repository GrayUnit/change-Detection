import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoneyComponent implements OnInit {

  @Input() ponyModel;
  public color$: Observable<string>;

  constructor(
    private colorService: ColorService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.color$ = this.colorService.get();
  }

  public check() {
    console.log("chargement du composant poney");
    this.changeDetector.detectChanges()
  }






}
