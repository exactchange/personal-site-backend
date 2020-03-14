const { ƒ } = require('fire-backend');

/*
 * Video
 */

class Video extends ƒ.Action {
  constructor(path) {
    super(path);

    this.setShape({
      imgSrc: ƒ.Type.String,
      href: ƒ.Type.String,
      title: ƒ.Type.String
    });

    this.setReadWriteDelete(true, false, false);
  }
}

exports.Video = Video;
