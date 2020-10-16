import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  public ponies = [
    {id: 1, color: "green"},
    {id: 2, color: "purple"},
    {id: 3, color: "blue"},
    {id: 4, color: "yellow"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public check() {
    console.log("chargement du composant race");
  }


}
