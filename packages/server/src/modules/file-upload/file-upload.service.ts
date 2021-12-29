import AWS from 'aws-sdk';
import { PutObjectRequest } from 'aws-sdk/clients/s3';
import config from 'config';
import { createWriteStream } from 'fs';
import { FileUpload } from 'graphql-upload';
import path from 'path';
import { Service } from 'typedi';

@Service()
export class FileUploadService {
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
   *  Upload file to disk
   *  IMPORTANT: This method is written for demonstration purposes. It is meant to show how to work with a stream from the package graphql-upload
   *
   * @param fileUpload FileUpload type
   * @returns boolean if successfully written to disk
   */
  uploadToDisk({ createReadStream, filename }: FileUpload): Promise<boolean> {
    return new Promise((resolve, reject) => {
      createReadStream()
        .pipe(createWriteStream(path.join(__dirname, `../../../../../uploads/${filename}`)))
        .on('finish', () => resolve(true))
        .on('error', e => {
          reject(e);
        });
    });
  }

  /**
   * Upload a file to an AWS S3 bucket
   *
   * @param fileUpload FileUpload type
   * @returns a url
   */
  uploadToS3({ createReadStream, filename }: FileUpload): Promise<string> {
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
