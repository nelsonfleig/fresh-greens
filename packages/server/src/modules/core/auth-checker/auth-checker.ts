import { Context } from 'src/ts/types/context.type';
import { AuthChecker, ResolverData } from 'type-graphql';
import { Service } from 'typedi';

interface AuthCheckerInterface<T> {
  check: AuthChecker<T>;
}

/**
 * Custom authentication to specify the role/roles that the user needs to possess in order to get access to the field, query or mutation.
 *
 * Implementation as a class allows the developer to leverage the dependency injection mechanism if needed, ie. to check a token in a redis store service or DB repo
 */
@Service()
export class CustomAuthChecker implements AuthCheckerInterface<Context> {
  check({ context: { user } }: ResolverData<Context>, roles: string[]) {
    // If no roles passed, just check if there is a user
    if (!user || !roles.length) {
      return !!user;
    }

    if (user.roles.some(role => roles.includes(role))) {
      // grant access if the roles overlap
      return true;
    }

    // no roles matched, restrict access
    return false;
  }
}
