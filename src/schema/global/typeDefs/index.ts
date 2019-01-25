import { Query } from './entryPoints';
import directives from './directives';
import scalars from './scalars';
import common from './common';

const global = [Query, directives, scalars, common];

export default global;
