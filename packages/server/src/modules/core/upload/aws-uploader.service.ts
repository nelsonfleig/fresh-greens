import AWS from 'aws-sdk';
import { PutObjectRequest } from 'aws-sdk/clients/s3';
import config from 'config';
import { FileUpload } from 'graphql-upload';
import { Service } from 'typedi';
import { IUploader } from './uploader.interface';

@Service()
export class AWSUploaderService implements IUploader {
  private s3: AWS.S3;

  constructor() {
    AWS.config = new AWS.Config();
    AWS.config.update({
      region: config.get('s3Region'),
      accessKeyId: config.get('accessKeyId'),
      secretAccessKey: config.get('secretAccessKey'),
    });
    this.s3 = new AWS.S3();
  }

  /**
   * Upload a file to an AWS S3 bucket
   *
   * @param fileUpload FileUpload type
   * @returns a url
   */
  upload({ createReadStream, filename }: FileUpload): Promise<string> {
    const fileStream = createReadStream();

    fileStream.on('error', error => {
      throw error;
    });

    const params: PutObjectRequest = {
      Bucket: config.get('s3BucketName'),
      Key: filename,
      Body: fileStream,
    };

    return new Promise((resolve, reject) => {
      this.s3.upload(params, (err, data) => {
        if (err) reject(err);
        resolve(data.Location);
      });
    });
  }
}
