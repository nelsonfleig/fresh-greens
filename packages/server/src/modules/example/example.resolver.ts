/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { AppMailerService } from '../common/app-mailer.service';
import { AWSUploaderService } from '../core/upload/aws-uploader.service';

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
  constructor(
    private printService: PrintService,
    private uploaderService: AWSUploaderService,
    private appMailerService: AppMailerService
  ) {}

  @Query(() => String)
  hello() {
    return this.printService.printMessage();
  }

  @Query(() => Boolean)
  async testEmail() {
    await this.appMailerService.sendTestEmail();
    return true;
  }

  @Mutation(() => String)
  async singleUploadS3(@Arg('file', () => GraphQLUpload) file: FileUpload): Promise<string> {
    return this.uploaderService.upload(file);
  }
}
