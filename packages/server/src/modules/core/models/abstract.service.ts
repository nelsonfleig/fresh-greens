import { Repository } from 'typeorm';

type PaginateInput = {
  take: number;
  skip?: number;
  where?: any;
};

export abstract class AbstractService {
  constructor(protected readonly repository: Repository<any>) {}

  find(condition: any = {}, relations: string[] = []): Promise<any[]> {
    return this.repository.find({ where: condition, relations });
  }

  paginate(paginateInput: PaginateInput, relations: string[] = []): Promise<any[]> {
    return this.repository.find({ ...paginateInput, relations });
  }

  findOne(condition: any, relations: string[] = []): Promise<any | undefined> {
    return this.repository.findOne(condition, { relations });
  }

  create(data: any): Promise<any> {
    // create entity first so private entity methods run (ie. slugify)
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  async update(id: number, data: any): Promise<any> {
    const found = await this.repository.findOne(id);

    // Original Typeorm entity props must be updated directly for
    // BeforeUpdate hooks to run. Using spread operator does not work updates
    // entity, but does not run hooks
    Object.entries(data).forEach(([key, value]) => {
      found[key] = value;
    });
    return this.repository.save(found);
  }

  async delete(id: number): Promise<boolean> {
    const res = await this.repository.delete(id);
    if (res.affected) {
      return true;
    }
    throw new Error('Not found');
  }
}
