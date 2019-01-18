import merge from 'lodash/merge';
import capsule from './capsule/resolvers';
import company from './company/resolvers';
import core from './core/resolvers';
import dragon from './dragon/resolvers';
import history from './history/resolvers';
import landpad from './landpad/resolvers';
import launch from './launch/resolvers';
import launchpad from './launchpad/resolvers';
import mission from './mission/resolvers';
import payload from './payload/resolvers';
import roadster from './roaster/resolvers';
import rocket from './rocket/resolvers';
import ship from './ship/resolvers';

const resolvers = merge(
  capsule,
  company,
  core,
  dragon,
  history,
  landpad,
  launch,
  launchpad,
  mission,
  payload,
  roadster,
  rocket,
  ship
);

export default resolvers;
