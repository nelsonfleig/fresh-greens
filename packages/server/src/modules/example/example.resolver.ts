/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { FileUploadService } from '../file-upload/file-upload.service';

@Service()
class PrintService {
  msg = "'I am alive!'";

  printMessage() {
    return this.msg;
  }
}

@Service()
@Resolver()
export class ExampleResolver {
  constructor(private printService: PrintService, private fileUploadService: FileUploadService) {}

  @Query(() => String)
  hello() {
    return this.printService.printMessage();
  }

  @Mutation(() => Boolean)
  async singleUpload(@Arg('file', () => GraphQLUpload) file: FileUpload): Promise<boolean> {
    return this.fileUploadService.uploadToDisk(file);
  }

  @Mutation(() => String)
  async singleUploadS3(@Arg('file', () => GraphQLUpload) file: FileUpload): Promise<string> {
    return this.fileUploadService.uploadToS3(file);
  }
}
