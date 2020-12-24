TEMPDIR=`mktemp -d`
OLD_DIR=`pwd`

sed "s/ABGEORDNETEN_NAME/$1/" wunschzettel.tex \
  | sed "s/MY_NAME/$2/" > $TEMPDIR/wunschzettel.tex

cd $TEMPDIR
ln -s $OLD_DIR/Redressed-Regular.ttf Redressed-Regular.ttf
ln -s $OLD_DIR/zuckerstange.png zuckerstange.png
ln -s $OLD_DIR/rand.png rand.png
ln -s $OLD_DIR/rand_l.png rand_l.png
ln -s $OLD_DIR/rand_rt.png rand_rt.png
ln -s $OLD_DIR/rand_ld.png rand_ld.png
ln -s $OLD_DIR/rand_rd.png rand_rd.png
xelatex wunschzettel.tex >/dev/null 2>/dev/null
xelatex wunschzettel.tex >/dev/null 2>/dev/null
xelatex wunschzettel.tex >/dev/null 2>/dev/null
cat wunschzettel.pdf

rm -r $TEMPDIR
