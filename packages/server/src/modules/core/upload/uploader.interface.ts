import { FileUpload } from 'graphql-upload';

export interface IUploader {
  /**
   * Upload a file an return it's path
   */
  upload: (fileData: FileUpload) => Promise<string>;
}
