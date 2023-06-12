import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_Nm242kQAd",
    ClientId: "2pcdp6ln0c7u27lffb450esv5l"
}

export default new CognitoUserPool(poolData);