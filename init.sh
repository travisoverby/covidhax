#!/usr/bin/env bash
COVIDHAX_CURRENT_WORKING_DIRECTORY=`pwd`
COVIDHAX_COLOR_GREEN='\033[0;32m'
COVIDHAX_COLOR_LIGHT_GREEN='\033[1;32m'
COVIDHAX_COLOR_NO_COLOR='\033[0m'

echo "Installing NestJS dependencies..."
cd $COVIDHAX_CURRENT_WORKING_DIRECTORY/server && npm install --save

echo "Installing React dependencies..."
cd $COVIDHAX_CURRENT_WORKING_DIRECTORY/client && npm install --save

echo "Done!"
echo ""

echo -e "Run ${COVIDHAX_COLOR_GREEN}npm run start:dev${COVIDHAX_COLOR_NO_COLOR} from server dir to start the server on ${COVIDHAX_COLOR_LIGHT_GREEN}localhost:3000${COVIDHAX_COLOR_NO_COLOR}"
echo -e "Run ${COVIDHAX_COLOR_GREEN}npm start${COVIDHAX_COLOR_NO_COLOR} from client dir to start the React dev client on ${COVIDHAX_COLOR_LIGHT_GREEN}localhost:1337${COVIDHAX_COLOR_NO_COLOR}"
unset COVIDHAX_CURRENT_WORKING_DIRECTORY
unset COVIDHAX_COLOR_NO_COLOR
unset COVIDHAX_COLOR_NO_COLOR
unset COVIDHAX_COLOR_WHITE