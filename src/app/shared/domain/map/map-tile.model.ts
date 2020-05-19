export class MapTileModel {

  constructor(public imagePath: string,
              public backgroundImagePath: string,
              public clickable: boolean,
              public link: string = '') {
  }
}
