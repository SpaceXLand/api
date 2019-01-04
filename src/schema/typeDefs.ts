import global from './global/typeDefs';
import capsule from './capsule/typeDefs';
import core from './core/typeDefs';
import dragon from './dragon/typeDefs';
import history from './history/typeDefs';
import info from './info/typeDefs';
import landpad from './landpad/typeDefs';
import launch from './launch/typeDefs';
import launchpad from './launchpad/typeDefs';
import mission from './mission/typeDefs';
import roadster from './roaster/typeDefs';
import rocket from './rocket/typeDefs';
import ship from './ship/typeDefs';
import payload from './payload/typeDefs';

const typeDefs = [
  ...global,
  capsule,
  core,
  dragon,
  history,
  info,
  landpad,
  launch,
  launchpad,
  mission,
  payload,
  roadster,
  rocket,
  ship
];

export default typeDefs;
