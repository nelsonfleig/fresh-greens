import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Arg, Authorized, Mutation, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { AbstractResolver } from '../core/models/abstract.resolver';
import { AWSUploaderService } from '../core/upload/aws-uploader.service';
import { Role } from '../user/types/role.enum';
import { UserService } from '../user/user.service';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ProductInput } from './types/product.input';

@Resolver(() => Product)
@Service()
export class ProductResolver extends AbstractResolver(Product, ProductInput) {
  constructor(
    protected productService: ProductService,
    protected awsUploader: AWSUploaderService,
    protected userService: UserService
  ) {
    super(productService);
  }

  @Authorized(Role.SELLER)
  @Mutation(() => Product, { name: `createProduct`, description: `Create Product` })
  async createProduct(
    @Arg('input', () => ProductInput) input: ProductInput,
    @Arg('productImage', () => GraphQLUpload) file: FileUpload
  ): Promise<Product> {
    const imageUrl = await this.awsUploader.upload(file);
    const productData = {
      ...input,
      imageUrl,
    };
    return this.productService.create(productData);
  }
}
