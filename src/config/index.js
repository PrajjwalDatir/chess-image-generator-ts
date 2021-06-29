const cols = 'abcdefgh';

const white = 'PBNRQK';

const black = 'pbnrqk';

const defaultSize = 480;

const defaultLight = 'rgb(240, 217, 181)';

const defaultDark = 'rgb(181, 136, 99)';

const defaultStyle = 'merida';

const filePaths = {
  wp: 'WhitePawn',
  bp: 'BlackPawn',
  wb: 'WhiteBishop',
  bb: 'BlackBishop',
  wn: 'WhiteKnight',
  bn: 'BlackKnight',
  wr: 'WhiteRook',
  br: 'BlackRook',
  wq: 'WhiteQueen',
  bq: 'BlackQueen',
  wk: 'WhiteKing',
  bk: 'BlackKing',
};

module.exports = {
  cols,
  white,
  black,
  defaultSize,
  defaultLight,
  defaultDark,
  defaultStyle,
  filePaths,
};
