global.fetch = require('node-fetch');
import QuickSight from 'aws-sdk/clients/quicksight'
const AWS = require('aws-sdk');
// const QuickSightEmbedding = require("amazon-quicksight-embedding-sdk");


// gera o html pra embedar
function generateEmbedUrlForAnonymousUser(
    accountId, // YOUR  ID
    initialDashboardId, // DASHBOARD ID TO WHICH THE CONSTRUCTED URL POINTS
    quicksightNamespace, // VALID NAMESPACE WHERE YOU WANT TO DO NOAUTH EMBEDDING
    authorizedResourceArns, // DASHBOARD ARN LIST TO EMBED
    sessionTags, // SESSION TAGS USED FOR ROW-LEVEL SECURITY
    generateEmbedUrlForAnonymousUserCallback, // GENERATEEMBEDURLFORANONYMOUSUSER SUCCESS CALLBACK METHOD
    errorCallback // GENERATEEMBEDURLFORANONYMOUSUSER ERROR CALLBACK METHOD
    ) {
    const experienceConfiguration = {
        "Dashboard": {
            "InitialDashboardId": initialDashboardId
        }
    };

    const generateEmbedUrlForAnonymousUserParams = {
        "AwsAccountId": accountId,
        "Namespace": quicksightNamespace,
        "AuthorizedResourceArns": authorizedResourceArns,
        "ExperienceConfiguration": experienceConfiguration,
        "SessionTags": sessionTags,
        "SessionLifetimeInMinutes": 600
    };

    const quicksightClient = new AWS.QuickSight({
        region: process.env.AWS_REGION,
    });

    quicksightClient.generateEmbedUrlForAnonymousUser(generateEmbedUrlForAnonymousUserParams, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            errorCallback(err);
        } else {
            const result = {
                "statusCode": 200,
                "headers": {
                    "Access-Control-Allow-Origin": "*", // USE YOUR WEBSITE DOMAIN TO SECURE ACCESS TO THIS API
                    "Access-Control-Allow-Headers": "Content-Type"
                },
                "body": JSON.stringify(data),
                "isBase64Encoded": false
            }
            generateEmbedUrlForAnonymousUserCallback(result);
        }
    });
}

let embededUrl = generateEmbedUrlForAnonymousUser(
    '0784-9604-0109', 
    '7c894cb9-39ba-4fd9-bda8-f02993321d62', 
    'default',
    ['arn:aws:quicksight:us-east-1:078496040109:dashboard/7c894cb9-39ba-4fd9-bda8-f02993321d62'],
    ['FIPAL - MITSUBISHI'],
)

console.log(embededUrl)

const QuickSightTeste = () => {

  return (
    <>
          {/* <iframe
            width="960"
            height="720"
            src="https://sa-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/683733563610/dashboards/d9cbb27b-e5a5-46ab-a3a3-024e596e8232?directory_alias=pavkoquicksight">
        </iframe> */}
      <div>
        <p>
          Hello World
        </p>
      </div>
    </>
    )
  }

export default QuickSightTeste