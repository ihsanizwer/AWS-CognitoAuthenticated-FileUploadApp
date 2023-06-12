import React from 'react'
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const bucketName = 'mys3-bucket-geaegagasa';
#Need to find a way to replace the above programattically


export const MembersOnly = () => {
    return (
        <div>
            <h3 color='black'>This is the Members Only section</h3>
        </div>
    )
}