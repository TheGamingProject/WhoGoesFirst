echo open $HOST > ftp.txt
echo user $USER $PASS >> ftp.txt
find ./build/ -type f -printf "put build/%P %P\n" >> ftp.txt
echo bye >> ftp.txt

ftp -n < ftp.txt
