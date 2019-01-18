import { Query } from './entryPoints';
import directives from './directives';
import scalars from './scalars';
import spaceX from './spaceX';

const global = [Query, directives, scalars, spaceX];

export default global;
