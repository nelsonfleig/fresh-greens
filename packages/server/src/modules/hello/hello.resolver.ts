/* eslint-disable max-classes-per-file */
import { Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

@Service()
class PrintService {
  msg = "'I am alive!'";

  printMessage() {
    return this.msg;
  }
}

@Service()
@Resolver()
export class HelloResolver {
  constructor(private printService: PrintService) {}

  @Query(() => String)
  hello() {
    return this.printService.printMessage();
  }
}
