# TODO setup host server with ssh to tranfer files easier

echo open $HOST > ftp.txt
echo user $USER $PASS >> ftp.txt
echo mkdir static
echo mkdir static/js
echo mkdir static/css
find ./build/ -type f -printf "put build/%P %P\n" >> ftp.txt
echo bye >> ftp.txt

ftp -n < ftp.txt
