/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Arg, Mutation, Query, Resolver, Authorized } from 'type-graphql';
import { Service } from 'typedi';
import { AppMailerService } from '../common/app-mailer.service';
import { AWSUploaderService } from '../core/upload/aws-uploader.service';
import { FileUploadService } from '../core/upload/disk-uploader.service';
import { Role } from '../user/types/role.enum';

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
    private fileService: FileUploadService,
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
  async singleUpload(@Arg('file', () => GraphQLUpload) file: FileUpload): Promise<string> {
    return this.fileService.upload(file);
  }

  @Mutation(() => String)
  async singleUploadS3(@Arg('file', () => GraphQLUpload) file: FileUpload): Promise<string> {
    return this.uploaderService.upload(file);
  }

  @Authorized(Role.USER)
  @Query(() => Boolean)
  protect(): boolean {
    return true;
  }
}
