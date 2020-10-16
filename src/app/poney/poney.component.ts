import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoneyComponent implements OnInit {

  @Input() ponyModel;

  constructor() { }

  ngOnInit(): void {
  }

  public check() {
    console.log("chargement du composant poney");
  }

  getPonyImageUrl() {
         return `https://cdn.jsdelivr.net/gh/coderbase-it/angular-cd-pp@master/src/assets/images/pony-${this.ponyModel.color}-running.gif`;
  }


}
