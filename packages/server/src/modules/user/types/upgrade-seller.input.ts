import { Field, InputType } from 'type-graphql';

@InputType()
export class UpgradeToSellerInput {
  @Field()
  sellerName?: string;

  @Field()
  address?: string;

  @Field()
  city?: string;
}
