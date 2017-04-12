import {Observable} from 'data/observable';
import {MaterialMotion} from 'nativescript-material-motion';

export class HelloWorldModel extends Observable {
  public message: string;
  private materialMotion: MaterialMotion;

  constructor() {
    super();

    this.materialMotion = new MaterialMotion();
    this.message = this.materialMotion.message;
  }
}