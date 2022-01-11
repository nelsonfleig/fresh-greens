import { Arg, ClassType, ID, Int, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import pluralize from 'pluralize';
import { Middleware } from 'type-graphql/dist/interfaces/Middleware';
import { AbstractService } from './service.abstract';

export function createBaseResolver<T extends ClassType, I extends ClassType>(
  objectTypeCls: T,
  inputType: I,
  relations: string[] = [],
  middleware: Middleware<any>[] = []
): any {
  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    constructor(protected readonly service: AbstractService) {}

    @UseMiddleware(...middleware)
    @Query(() => [objectTypeCls], {
      name: `find${pluralize(objectTypeCls.name)}`,
      description: `List all ${pluralize(objectTypeCls.name)}`,
    })
    find(): Promise<T[]> {
      return this.service.find(relations);
    }

    @UseMiddleware(...middleware)
    @Query(() => [objectTypeCls], {
      name: `paginate${pluralize(objectTypeCls.name)}`,
      description: `Paginate ${pluralize(objectTypeCls.name)}`,
    })
    paginate(
      @Arg('skip', () => Int, { nullable: true }) skip = 0,
      @Arg('limit', () => Int, { nullable: true }) limit = 10
    ): Promise<T[]> {
      return this.service.paginate({ skip, take: limit }, relations);
    }

    @UseMiddleware(...middleware)
    @Query(() => objectTypeCls, {
      name: `findOne${objectTypeCls.name}`,
      description: `Find one ${objectTypeCls.name}`,
    })
    findOne(@Arg('id', () => ID) id: number): Promise<T | undefined> {
      return this.service.findOne({ id }, relations);
    }

    @UseMiddleware(...middleware)
    @Mutation(() => objectTypeCls, {
      name: `create${objectTypeCls.name}`,
      description: `Create ${objectTypeCls.name}`,
    })
    create(@Arg('input', () => inputType) data: any): Promise<T> {
      return this.service.create(data);
    }

    @UseMiddleware(...middleware)
    @Mutation(() => objectTypeCls, {
      name: `update${objectTypeCls.name}`,
      description: `Update ${objectTypeCls.name}`,
    })
    update(@Arg('id', () => ID) id: number, @Arg('input', () => inputType) data: any): Promise<T> {
      return this.service.update(id, data);
    }

    @UseMiddleware(...middleware)
    delete(@Arg('id', () => ID) id: number): Promise<boolean> {
      return this.service.delete(id);
    }
  }

  return BaseResolver;
}
