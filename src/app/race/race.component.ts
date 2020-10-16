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
  colors = [
    "green",
    "purple",
    "yellow",
    "blue",
    "orange"
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public check() {
    console.log("chargement du composant race");
  }

  public changeColor() {
    //this.ponies[0].color = this.randomColor(0, this.colors.length - 1);
    // const pony = this.ponies[0];
    // this.ponies[0] = { ...pony, color: this.randomColor(0, this.colors.length - 1)}
    this.ponies.forEach(
      (p, index) => {
        this.ponies[index] = { ...p, color: this.randomColor(0, this.colors.length - 1)}
      }
    )
  }

  public randomColor(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return this.colors[Math.floor(Math.random() * (max - min + 1)) + min];
  }

}
