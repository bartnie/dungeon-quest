export class MapTileModel {

  constructor(public imagePath: string,
              public backgroundImagePath: string,
              public isRedirecting: boolean,
              public accessible: boolean,
              public link: string = '') {
  }
}
