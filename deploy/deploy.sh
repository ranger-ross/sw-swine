FTP_SERVER=ftp.s-wswine.com
FTP_USERNAME=deployer-svc-accnt
FTP_PASSWORD=$1

# ftp commands
COMMANDS="\
rmdir -f backup;\
mkdir -p ross;\
mmv *.html backup/
mmv *.js backup/;\
mmv *.css backup/;\
mmv *.map backup/;\
mmv *.ico backup/;\
mput dist/sw-swine/*;\
"

lftp -c "open -u $FTP_USERNAME,$FTP_PASSWORD $FTP_SERVER; $COMMANDS"


# Debugging Code
#lftp -u 'deployer-svc-accnt,r@wVe7aTTf6hP*' ftp://ftp.s-wswine.com
#
#ls
