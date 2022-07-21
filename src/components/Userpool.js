import React from 'react'
import {CongnitoUserPool} from 'amazon-cognito-identity-js'
const poolData={
    UserPoolId:"",
    ClientId:"sujalfjla"
}

export default new CognitoUserPool(poolData);
