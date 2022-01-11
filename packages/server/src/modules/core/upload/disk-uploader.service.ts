import { createWriteStream } from 'fs';
import { FileUpload } from 'graphql-upload';
import path from 'path';
import { Service } from 'typedi';
import { IUploader } from './uploader.interface';

@Service()
export class FileUploadService implements IUploader {
  /**
   *  Upload file to disk
   *
   *  IMPORTANT: This method is written for demonstration purposes. It is meant to show how to work with a stream from the package graphql-upload
   *
   * @param fileUpload FileUpload type
   * @returns boolean if successfully written to disk
   */
  upload({ createReadStream, filename }: FileUpload): Promise<string> {
    const filePath = path.join(__dirname, `../../../../../uploads/${filename}`);

    return new Promise((resolve, reject) => {
      createReadStream()
        .pipe(createWriteStream(filePath))
        .on('finish', () => resolve(filePath))
        .on('error', e => {
          reject(e);
        });
    });
  }
}
