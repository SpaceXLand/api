export type Maybe<T> = T | null;

export interface CapsulesFind {
  id?: Maybe<string>;

  status?: Maybe<string>;

  original_launch?: Maybe<Date>;

  mission?: Maybe<string>;

  landings?: Maybe<number>;

  type?: Maybe<string>;

  reuse_count?: Maybe<number>;
}

export interface CoresFind {
  id?: Maybe<string>;

  block?: Maybe<number>;

  status?: Maybe<string>;

  original_launch?: Maybe<Date>;

  missions?: Maybe<string>;

  reuse_count?: Maybe<number>;

  rtls_attempts?: Maybe<number>;

  rtls_landings?: Maybe<number>;

  asds_attempts?: Maybe<number>;

  asds_landings?: Maybe<number>;

  water_landing?: Maybe<boolean>;
}

export interface HistoryFind {
  id?: Maybe<string>;

  start?: Maybe<Date>;

  end?: Maybe<Date>;

  flight_number?: Maybe<number>;
}

export interface LaunchFind {
  flight_id?: Maybe<string>;

  start?: Maybe<Date>;

  end?: Maybe<Date>;

  flight_number?: Maybe<number>;

  mission_name?: Maybe<string>;

  mission_id?: Maybe<string>;

  launch_year?: Maybe<string>;

  launch_date_utc?: Maybe<Date>;

  launch_date_local?: Maybe<Date>;

  tentative?: Maybe<string>;

  tentative_max_precision?: Maybe<string>;

  tbd?: Maybe<string>;

  rocket_id?: Maybe<string>;

  rocket_name?: Maybe<string>;

  rocket_type?: Maybe<string>;

  core_serial?: Maybe<string>;

  cap_serial?: Maybe<string>;

  core_flight?: Maybe<number>;

  block?: Maybe<number>;

  gridfins?: Maybe<string>;

  legs?: Maybe<string>;

  second_stage_block?: Maybe<string>;

  fairings_reused?: Maybe<string>;

  fairings_recovery_attempt?: Maybe<string>;

  fairings_recovered?: Maybe<string>;

  fairings_ship?: Maybe<string>;

  core_reuse?: Maybe<string>;

  side_core1_reuse?: Maybe<string>;

  side_core2_reuse?: Maybe<string>;

  fairings_reuse?: Maybe<string>;

  capsule_reuse?: Maybe<string>;

  ship?: Maybe<string>;

  site_id?: Maybe<string>;

  site_name?: Maybe<string>;

  site_name_long?: Maybe<string>;

  payload_id?: Maybe<string>;

  norad_id?: Maybe<number>;

  customer?: Maybe<string>;

  nationality?: Maybe<string>;

  manufacturer?: Maybe<string>;

  payload_type?: Maybe<string>;

  orbit?: Maybe<string>;

  reference_system?: Maybe<string>;

  regime?: Maybe<string>;

  longitude?: Maybe<number>;

  semi_major_axis_km?: Maybe<number>;

  eccentricity?: Maybe<number>;

  periapsis_km?: Maybe<number>;

  apoapsis_km?: Maybe<number>;

  inclination_deg?: Maybe<number>;

  period_min?: Maybe<number>;

  lifespan_years?: Maybe<number>;

  epoch?: Maybe<Date>;

  mean_motion?: Maybe<number>;

  raan?: Maybe<number>;

  reused?: Maybe<string>;

  launch_success?: Maybe<string>;

  land_success?: Maybe<string>;

  landing_intent?: Maybe<string>;

  landing_type?: Maybe<string>;

  landing_vehicle?: Maybe<string>;
}

export interface MissionsFind {
  mission_name?: Maybe<string>;

  mission_id?: Maybe<string>;

  manufacturer?: Maybe<string>;

  payload_id?: Maybe<string>;
}

export interface PayloadsFind {
  payload_id?: Maybe<string>;

  norad_id?: Maybe<number>;

  customer?: Maybe<string>;

  nationality?: Maybe<string>;

  manufacturer?: Maybe<string>;

  payload_type?: Maybe<string>;

  orbit?: Maybe<string>;

  reference_system?: Maybe<string>;

  regime?: Maybe<string>;

  longitude?: Maybe<number>;

  semi_major_axis_km?: Maybe<number>;

  eccentricity?: Maybe<number>;

  periapsis_km?: Maybe<number>;

  apoapsis_km?: Maybe<number>;

  inclination_deg?: Maybe<number>;

  period_min?: Maybe<number>;

  lifespan_years?: Maybe<number>;

  epoch?: Maybe<Date>;

  mean_motion?: Maybe<number>;

  raan?: Maybe<number>;

  reused?: Maybe<boolean>;
}

export interface ShipsFind {
  ship_id?: Maybe<string>;

  ship_name?: Maybe<string>;

  ship_model?: Maybe<string>;

  ship_type?: Maybe<string>;

  role?: Maybe<string>;

  active?: Maybe<boolean>;

  imo?: Maybe<number>;

  mmsi?: Maybe<number>;

  abs?: Maybe<number>;

  class?: Maybe<number>;

  weight_lbs?: Maybe<number>;

  weight_kg?: Maybe<number>;

  year_built?: Maybe<number>;

  home_port?: Maybe<string>;

  status?: Maybe<string>;

  speed_kn?: Maybe<number>;

  course_deg?: Maybe<number>;

  latitude?: Maybe<number>;

  longitude?: Maybe<number>;

  successful_landings?: Maybe<number>;

  attempted_landings?: Maybe<number>;

  mission?: Maybe<string>;
}

export type Date = any;

export type ObjectId = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  capsules?: Maybe<(Maybe<Capsule>)[]>;

  capsulesPast?: Maybe<(Maybe<Capsule>)[]>;

  capsulesUpcoming?: Maybe<(Maybe<Capsule>)[]>;

  capsule?: Maybe<Capsule>;

  company?: Maybe<Info>;

  cores?: Maybe<(Maybe<Core>)[]>;

  coresPast?: Maybe<(Maybe<Core>)[]>;

  coresUpcoming?: Maybe<(Maybe<Core>)[]>;

  core?: Maybe<Core>;

  dragons?: Maybe<(Maybe<Dragon>)[]>;

  dragon?: Maybe<Dragon>;

  _empty?: Maybe<string>;

  histories?: Maybe<(Maybe<History>)[]>;

  history?: Maybe<History>;

  landpads?: Maybe<(Maybe<Landpad>)[]>;

  landpad?: Maybe<Landpad>;

  launches?: Maybe<(Maybe<Launch>)[]>;

  launchesPast?: Maybe<(Maybe<Launch>)[]>;

  launchesUpcoming?: Maybe<(Maybe<Launch>)[]>;

  launch?: Maybe<Launch>;

  launchLatest?: Maybe<Launch>;

  launchNext?: Maybe<Launch>;

  launchpads?: Maybe<(Maybe<Launchpad>)[]>;

  launchpad?: Maybe<Launchpad>;

  missions?: Maybe<(Maybe<Mission>)[]>;

  mission?: Maybe<Mission>;

  payloads?: Maybe<(Maybe<Payload>)[]>;

  payload?: Maybe<Payload>;

  roadster?: Maybe<Roadster>;

  rockets?: Maybe<(Maybe<Rocket>)[]>;

  rocket?: Maybe<Rocket>;

  ships?: Maybe<(Maybe<Ship>)[]>;

  ship?: Maybe<Ship>;
}

export interface Capsule {
  id?: Maybe<string>;

  status?: Maybe<string>;

  original_launch?: Maybe<Date>;

  missions?: Maybe<(Maybe<CapsuleMission>)[]>;

  landings?: Maybe<number>;

  type?: Maybe<string>;

  reuse_count?: Maybe<number>;

  capsule?: Maybe<Dragon>;
}

export interface CapsuleMission {
  name?: Maybe<string>;

  flight?: Maybe<number>;
}

export interface Dragon {
  id?: Maybe<string>;

  name?: Maybe<string>;

  type?: Maybe<string>;

  active?: Maybe<boolean>;

  crew_capacity?: Maybe<number>;

  sidewall_angle_deg?: Maybe<number>;

  orbit_duration_yr?: Maybe<number>;

  dry_mass_kg?: Maybe<number>;

  dry_mass_lb?: Maybe<number>;

  first_flight?: Maybe<string>;

  heat_shield?: Maybe<DragonHeatShield>;

  thrusters?: Maybe<(Maybe<DragonThrust>)[]>;

  launch_payload_mass?: Maybe<Mass>;

  launch_payload_vol?: Maybe<Volume>;

  return_payload_mass?: Maybe<Mass>;

  return_payload_vol?: Maybe<Volume>;

  pressurized_capsule?: Maybe<DragonPressurizedCapsule>;

  trunk?: Maybe<DragonTrunk>;

  height_w_trunk?: Maybe<Distance>;

  diameter?: Maybe<Distance>;

  wikipedia?: Maybe<string>;

  description?: Maybe<string>;
}

export interface DragonHeatShield {
  material?: Maybe<string>;

  size_meters?: Maybe<number>;

  temp_degrees?: Maybe<number>;

  dev_partner?: Maybe<string>;
}

export interface DragonThrust {
  type?: Maybe<string>;

  amount?: Maybe<number>;

  pods?: Maybe<number>;

  fuel_1?: Maybe<string>;

  fuel_2?: Maybe<string>;

  thrust?: Maybe<Force>;
}

export interface Force {
  kN?: Maybe<number>;

  lbf?: Maybe<number>;
}

export interface Mass {
  kg?: Maybe<number>;

  lb?: Maybe<number>;
}

export interface Volume {
  cubic_meters?: Maybe<number>;

  cubic_feet?: Maybe<number>;
}

export interface DragonPressurizedCapsule {
  payload_volume?: Maybe<Volume>;
}

export interface DragonTrunk {
  trunk_volume?: Maybe<Volume>;

  cargo?: Maybe<DragonTrunkCargo>;
}

export interface DragonTrunkCargo {
  solar_array?: Maybe<number>;

  unpressurized_cargo?: Maybe<boolean>;
}

export interface Distance {
  meters?: Maybe<number>;

  feet?: Maybe<number>;
}

export interface Info {
  name?: Maybe<string>;

  founder?: Maybe<string>;

  founded?: Maybe<number>;

  employees?: Maybe<number>;

  vehicles?: Maybe<number>;

  launch_sites?: Maybe<number>;

  test_sites?: Maybe<number>;

  ceo?: Maybe<string>;

  cto?: Maybe<string>;

  coo?: Maybe<string>;

  cto_propulsion?: Maybe<string>;

  valuation?: Maybe<number>;

  headquarters?: Maybe<Address>;

  links?: Maybe<InfoLinks>;

  summary?: Maybe<string>;
}

export interface Address {
  address?: Maybe<string>;

  city?: Maybe<string>;

  state?: Maybe<string>;
}

export interface InfoLinks {
  website?: Maybe<string>;

  flickr?: Maybe<string>;

  twitter?: Maybe<string>;

  elon_twitter?: Maybe<string>;
}

export interface Core {
  id?: Maybe<string>;

  block?: Maybe<number>;

  status?: Maybe<string>;

  original_launch?: Maybe<Date>;

  missions?: Maybe<(Maybe<CapsuleMission>)[]>;

  reuse_count?: Maybe<number>;

  rtls_attempts?: Maybe<number>;

  rtls_landings?: Maybe<number>;

  asds_attempts?: Maybe<number>;

  asds_landings?: Maybe<number>;

  water_landing?: Maybe<boolean>;
}

export interface History {
  id?: Maybe<string>;

  title?: Maybe<string>;

  event_date_utc?: Maybe<Date>;

  event_date_unix?: Maybe<Date>;

  details?: Maybe<string>;

  links?: Maybe<Link>;

  flight?: Maybe<Launch>;
}

export interface Link {
  reddit?: Maybe<string>;

  article?: Maybe<string>;

  wikipedia?: Maybe<string>;
}

export interface Launch {
  flight_number?: Maybe<number>;

  mission_name?: Maybe<string>;

  mission_id?: Maybe<(Maybe<string>)[]>;

  upcoming?: Maybe<boolean>;

  launch_year?: Maybe<string>;

  launch_date_unix?: Maybe<Date>;

  launch_date_utc?: Maybe<Date>;

  launch_date_local?: Maybe<Date>;

  is_tentative?: Maybe<boolean>;

  tentative_max_precision?: Maybe<string>;

  rocket?: Maybe<LaunchRocket>;

  ships?: Maybe<(Maybe<string>)[]>;

  telemetry?: Maybe<LaunchTelemetry>;

  launch_site?: Maybe<LaunchSite>;

  launch_success?: Maybe<boolean>;

  links?: Maybe<LaunchLinks>;

  details?: Maybe<string>;

  static_fire_date_utc?: Maybe<Date>;

  static_fire_date_unix?: Maybe<Date>;
}

export interface LaunchRocket {
  rocket?: Maybe<Rocket>;

  rocket_name?: Maybe<string>;

  rocket_type?: Maybe<string>;

  first_stage?: Maybe<LaunchRocketFirstStage>;

  second_stage?: Maybe<LaunchRocketSecondStage>;

  fairings?: Maybe<LaunchRocketFairings>;
}

export interface Rocket {
  id?: Maybe<number>;

  active?: Maybe<boolean>;

  stages?: Maybe<number>;

  boosters?: Maybe<number>;

  cost_per_launch?: Maybe<number>;

  success_rate_pct?: Maybe<number>;

  first_flight?: Maybe<Date>;

  country?: Maybe<string>;

  company?: Maybe<string>;

  height?: Maybe<Distance>;

  diameter?: Maybe<Distance>;

  mass?: Maybe<Mass>;

  payload_weights?: Maybe<(Maybe<RocketPayloadWeight>)[]>;

  first_stage?: Maybe<RocketFirstStage>;

  second_stage?: Maybe<RocketSecondStage>;

  engines?: Maybe<RocketEngines>;

  landing_legs?: Maybe<RocketLandingLegs>;

  wikipedia?: Maybe<string>;

  description?: Maybe<string>;

  rocket_id?: Maybe<string>;

  rocket_name?: Maybe<string>;

  rocket_type?: Maybe<string>;
}

export interface RocketPayloadWeight {
  id?: Maybe<string>;

  name?: Maybe<string>;

  kg?: Maybe<number>;

  lb?: Maybe<number>;
}

export interface RocketFirstStage {
  reusable?: Maybe<boolean>;

  engines?: Maybe<number>;

  fuel_amount_tons?: Maybe<number>;

  burn_time_sec?: Maybe<number>;

  thrust_sea_level?: Maybe<Force>;

  thrust_vacuum?: Maybe<Force>;
}

export interface RocketSecondStage {
  engines?: Maybe<number>;

  fuel_amount_tons?: Maybe<number>;

  burn_time_sec?: Maybe<number>;

  thrust?: Maybe<Force>;

  payloads?: Maybe<RocketSecondStagePayloads>;
}

export interface RocketSecondStagePayloads {
  option_1?: Maybe<string>;

  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
}

export interface RocketSecondStagePayloadCompositeFairing {
  height?: Maybe<Distance>;

  diameter?: Maybe<Distance>;
}

export interface RocketEngines {
  number?: Maybe<number>;

  type?: Maybe<string>;

  version?: Maybe<string>;

  layout?: Maybe<string>;

  engine_loss_max?: Maybe<string>;

  propellant_1?: Maybe<string>;

  propellant_2?: Maybe<string>;

  thrust_sea_level?: Maybe<Force>;

  thrust_vacuum?: Maybe<Force>;

  thrust_to_weight?: Maybe<number>;
}

export interface RocketLandingLegs {
  number?: Maybe<number>;

  material?: Maybe<string>;
}

export interface LaunchRocketFirstStage {
  cores?: Maybe<(Maybe<LaunchRocketFirstStageCore>)[]>;
}

export interface LaunchRocketFirstStageCore {
  core?: Maybe<Core>;

  flight?: Maybe<number>;

  block?: Maybe<number>;

  gridfins?: Maybe<boolean>;

  legs?: Maybe<boolean>;

  reused?: Maybe<boolean>;

  land_success?: Maybe<boolean>;

  landing_intent?: Maybe<boolean>;

  landing_type?: Maybe<string>;

  landing_vehicle?: Maybe<string>;
}

export interface LaunchRocketSecondStage {
  block?: Maybe<number>;

  payloads?: Maybe<(Maybe<Payload>)[]>;
}

export interface Payload {
  payload_id?: Maybe<string>;

  norad_id?: Maybe<(Maybe<number>)[]>;

  reused?: Maybe<boolean>;

  customers?: Maybe<(Maybe<string>)[]>;

  nationality?: Maybe<string>;

  manufacturer?: Maybe<string>;

  payload_type?: Maybe<string>;

  payload_mass_kg?: Maybe<number>;

  payload_mass_lbs?: Maybe<number>;

  orbit?: Maybe<string>;

  orbit_params?: Maybe<PayloadOrbitParams>;
}

export interface PayloadOrbitParams {
  reference_system?: Maybe<string>;

  regime?: Maybe<string>;

  longitude?: Maybe<number>;

  lifespan_years?: Maybe<number>;

  epoch?: Maybe<Date>;

  mean_motion?: Maybe<number>;

  raan?: Maybe<number>;

  semi_major_axis_km?: Maybe<number>;

  eccentricity?: Maybe<number>;

  periapsis_km?: Maybe<number>;

  apoapsis_km?: Maybe<number>;

  inclination_deg?: Maybe<number>;

  period_min?: Maybe<number>;

  arg_of_pericenter?: Maybe<number>;

  mean_anomaly?: Maybe<number>;
}

export interface LaunchRocketFairings {
  reused?: Maybe<boolean>;

  recovery_attempt?: Maybe<boolean>;

  recovered?: Maybe<boolean>;

  ship?: Maybe<string>;
}

export interface LaunchTelemetry {
  flight_club?: Maybe<string>;
}

export interface LaunchSite {
  site_id?: Maybe<string>;

  site_name?: Maybe<string>;

  site_name_long?: Maybe<string>;
}

export interface LaunchLinks {
  mission_patch?: Maybe<string>;

  mission_patch_small?: Maybe<string>;

  reddit_campaign?: Maybe<string>;

  reddit_launch?: Maybe<string>;

  reddit_recovery?: Maybe<string>;

  reddit_media?: Maybe<string>;

  presskit?: Maybe<string>;

  article_link?: Maybe<string>;

  wikipedia?: Maybe<string>;

  video_link?: Maybe<string>;

  flickr_images?: Maybe<(Maybe<string>)[]>;
}

export interface Landpad {
  id?: Maybe<string>;

  full_name?: Maybe<string>;

  status?: Maybe<string>;

  location?: Maybe<Location>;

  landing_type?: Maybe<string>;

  attempted_landings?: Maybe<string>;

  successful_landings?: Maybe<string>;

  wikipedia?: Maybe<string>;

  details?: Maybe<string>;
}

export interface Location {
  name?: Maybe<string>;

  region?: Maybe<string>;

  latitude?: Maybe<number>;

  longitude?: Maybe<number>;
}

export interface Launchpad {
  id?: Maybe<number>;

  status?: Maybe<string>;

  location?: Maybe<Location>;

  vehicles_launched?: Maybe<(Maybe<Rocket>)[]>;

  attempted_launches?: Maybe<number>;

  successful_launches?: Maybe<number>;

  wikipedia?: Maybe<string>;

  details?: Maybe<string>;

  site_id?: Maybe<string>;

  site_name_long?: Maybe<string>;
}

export interface Mission {
  mission_name?: Maybe<string>;

  mission_id?: Maybe<string>;

  manufacturers?: Maybe<(Maybe<string>)[]>;

  wikipedia?: Maybe<string>;

  website?: Maybe<string>;

  twitter?: Maybe<string>;

  description?: Maybe<string>;

  payloads?: Maybe<(Maybe<Payload>)[]>;
}

export interface Roadster {
  name?: Maybe<string>;

  launch_date_utc?: Maybe<Date>;

  launch_date_unix?: Maybe<Date>;

  launch_mass_kg?: Maybe<number>;

  launch_mass_lbs?: Maybe<number>;

  norad_id?: Maybe<number>;

  epoch_jd?: Maybe<number>;

  orbit_type?: Maybe<number>;

  apoapsis_au?: Maybe<number>;

  periapsis_au?: Maybe<number>;

  semi_major_axis_au?: Maybe<number>;

  eccentricity?: Maybe<number>;

  inclination?: Maybe<number>;

  longitude?: Maybe<number>;

  periapsis_arg?: Maybe<number>;

  period_days?: Maybe<number>;

  speed_kph?: Maybe<number>;

  speed_mph?: Maybe<number>;

  earth_distance_km?: Maybe<number>;

  earth_distance_mi?: Maybe<number>;

  mars_distance_km?: Maybe<number>;

  mars_distance_mi?: Maybe<number>;

  wikipedia?: Maybe<string>;

  details?: Maybe<string>;
}

export interface Ship {
  ship_id?: Maybe<string>;

  ship_name?: Maybe<string>;

  ship_model?: Maybe<string>;

  ship_type?: Maybe<string>;

  roles?: Maybe<(Maybe<string>)[]>;

  active?: Maybe<boolean>;

  imo?: Maybe<number>;

  mmsi?: Maybe<number>;

  abs?: Maybe<number>;

  class?: Maybe<number>;

  weight_lbs?: Maybe<number>;

  weight_kg?: Maybe<number>;

  year_built?: Maybe<number>;

  home_port?: Maybe<string>;

  status?: Maybe<string>;

  speed_kn?: Maybe<number>;

  course_deg?: Maybe<number>;

  position?: Maybe<ShipLocation>;

  successful_landings?: Maybe<number>;

  attempted_landings?: Maybe<number>;

  missions?: Maybe<(Maybe<ShipMission>)[]>;

  url?: Maybe<string>;

  image?: Maybe<string>;
}

export interface ShipLocation {
  latitude?: Maybe<number>;

  longitude?: Maybe<number>;
}

export interface ShipMission {
  name?: Maybe<string>;

  flight?: Maybe<string>;
}

export interface Mutation {
  _empty?: Maybe<string>;
}

export interface Subscription {
  _empty?: Maybe<string>;
}

export interface CoreMission {
  name?: Maybe<string>;

  flight?: Maybe<number>;
}

// ====================================================
// Arguments
// ====================================================

export interface CapsulesQueryArgs {
  find?: Maybe<CapsulesFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CapsulesPastQueryArgs {
  find?: Maybe<CapsulesFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CapsulesUpcomingQueryArgs {
  find?: Maybe<CapsulesFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CapsuleQueryArgs {
  id: string;
}
export interface CoresQueryArgs {
  find?: Maybe<CoresFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CoresPastQueryArgs {
  find?: Maybe<CoresFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CoresUpcomingQueryArgs {
  find?: Maybe<CoresFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CoreQueryArgs {
  id: string;
}
export interface DragonsQueryArgs {
  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface DragonQueryArgs {
  id: string;
}
export interface HistoriesQueryArgs {
  find?: Maybe<HistoryFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface HistoryQueryArgs {
  id: string;
}
export interface LandpadsQueryArgs {
  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface LandpadQueryArgs {
  id: string;
}
export interface LaunchesQueryArgs {
  find?: Maybe<LaunchFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface LaunchesPastQueryArgs {
  find?: Maybe<LaunchFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface LaunchesUpcomingQueryArgs {
  find?: Maybe<LaunchFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface LaunchQueryArgs {
  flight_number: number;
}
export interface LaunchLatestQueryArgs {
  offset?: Maybe<number>;
}
export interface LaunchNextQueryArgs {
  offset?: Maybe<number>;
}
export interface LaunchpadsQueryArgs {
  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface LaunchpadQueryArgs {
  pad: string;
}
export interface MissionsQueryArgs {
  find?: Maybe<MissionsFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface MissionQueryArgs {
  mission_id: string;
}
export interface PayloadsQueryArgs {
  find?: Maybe<PayloadsFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface PayloadQueryArgs {
  payload_id: string;
}
export interface RocketsQueryArgs {
  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface RocketQueryArgs {
  rocket: string;
}
export interface ShipsQueryArgs {
  find?: Maybe<ShipsFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface ShipQueryArgs {
  ship_id: string;
}

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

import { MyContext } from "./context";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {
    capsules?: CapsulesResolver<Maybe<(Maybe<Capsule>)[]>, TypeParent, Context>;

    capsulesPast?: CapsulesPastResolver<
      Maybe<(Maybe<Capsule>)[]>,
      TypeParent,
      Context
    >;

    capsulesUpcoming?: CapsulesUpcomingResolver<
      Maybe<(Maybe<Capsule>)[]>,
      TypeParent,
      Context
    >;

    capsule?: CapsuleResolver<Maybe<Capsule>, TypeParent, Context>;

    company?: CompanyResolver<Maybe<Info>, TypeParent, Context>;

    cores?: CoresResolver<Maybe<(Maybe<Core>)[]>, TypeParent, Context>;

    coresPast?: CoresPastResolver<Maybe<(Maybe<Core>)[]>, TypeParent, Context>;

    coresUpcoming?: CoresUpcomingResolver<
      Maybe<(Maybe<Core>)[]>,
      TypeParent,
      Context
    >;

    core?: CoreResolver<Maybe<Core>, TypeParent, Context>;

    dragons?: DragonsResolver<Maybe<(Maybe<Dragon>)[]>, TypeParent, Context>;

    dragon?: DragonResolver<Maybe<Dragon>, TypeParent, Context>;

    _empty?: _EmptyResolver<Maybe<string>, TypeParent, Context>;

    histories?: HistoriesResolver<
      Maybe<(Maybe<History>)[]>,
      TypeParent,
      Context
    >;

    history?: HistoryResolver<Maybe<History>, TypeParent, Context>;

    landpads?: LandpadsResolver<Maybe<(Maybe<Landpad>)[]>, TypeParent, Context>;

    landpad?: LandpadResolver<Maybe<Landpad>, TypeParent, Context>;

    launches?: LaunchesResolver<Maybe<(Maybe<Launch>)[]>, TypeParent, Context>;

    launchesPast?: LaunchesPastResolver<
      Maybe<(Maybe<Launch>)[]>,
      TypeParent,
      Context
    >;

    launchesUpcoming?: LaunchesUpcomingResolver<
      Maybe<(Maybe<Launch>)[]>,
      TypeParent,
      Context
    >;

    launch?: LaunchResolver<Maybe<Launch>, TypeParent, Context>;

    launchLatest?: LaunchLatestResolver<Maybe<Launch>, TypeParent, Context>;

    launchNext?: LaunchNextResolver<Maybe<Launch>, TypeParent, Context>;

    launchpads?: LaunchpadsResolver<
      Maybe<(Maybe<Launchpad>)[]>,
      TypeParent,
      Context
    >;

    launchpad?: LaunchpadResolver<Maybe<Launchpad>, TypeParent, Context>;

    missions?: MissionsResolver<Maybe<(Maybe<Mission>)[]>, TypeParent, Context>;

    mission?: MissionResolver<Maybe<Mission>, TypeParent, Context>;

    payloads?: PayloadsResolver<Maybe<(Maybe<Payload>)[]>, TypeParent, Context>;

    payload?: PayloadResolver<Maybe<Payload>, TypeParent, Context>;

    roadster?: RoadsterResolver<Maybe<Roadster>, TypeParent, Context>;

    rockets?: RocketsResolver<Maybe<(Maybe<Rocket>)[]>, TypeParent, Context>;

    rocket?: RocketResolver<Maybe<Rocket>, TypeParent, Context>;

    ships?: ShipsResolver<Maybe<(Maybe<Ship>)[]>, TypeParent, Context>;

    ship?: ShipResolver<Maybe<Ship>, TypeParent, Context>;
  }

  export type CapsulesResolver<
    R = Maybe<(Maybe<Capsule>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CapsulesArgs>;
  export interface CapsulesArgs {
    find?: Maybe<CapsulesFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CapsulesPastResolver<
    R = Maybe<(Maybe<Capsule>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CapsulesPastArgs>;
  export interface CapsulesPastArgs {
    find?: Maybe<CapsulesFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CapsulesUpcomingResolver<
    R = Maybe<(Maybe<Capsule>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CapsulesUpcomingArgs>;
  export interface CapsulesUpcomingArgs {
    find?: Maybe<CapsulesFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CapsuleResolver<
    R = Maybe<Capsule>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CapsuleArgs>;
  export interface CapsuleArgs {
    id: string;
  }

  export type CompanyResolver<
    R = Maybe<Info>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CoresResolver<
    R = Maybe<(Maybe<Core>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CoresArgs>;
  export interface CoresArgs {
    find?: Maybe<CoresFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CoresPastResolver<
    R = Maybe<(Maybe<Core>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CoresPastArgs>;
  export interface CoresPastArgs {
    find?: Maybe<CoresFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CoresUpcomingResolver<
    R = Maybe<(Maybe<Core>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CoresUpcomingArgs>;
  export interface CoresUpcomingArgs {
    find?: Maybe<CoresFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CoreResolver<
    R = Maybe<Core>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CoreArgs>;
  export interface CoreArgs {
    id: string;
  }

  export type DragonsResolver<
    R = Maybe<(Maybe<Dragon>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, DragonsArgs>;
  export interface DragonsArgs {
    limit?: Maybe<number>;

    offset?: Maybe<number>;
  }

  export type DragonResolver<
    R = Maybe<Dragon>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, DragonArgs>;
  export interface DragonArgs {
    id: string;
  }

  export type _EmptyResolver<
    R = Maybe<string>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type HistoriesResolver<
    R = Maybe<(Maybe<History>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, HistoriesArgs>;
  export interface HistoriesArgs {
    find?: Maybe<HistoryFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type HistoryResolver<
    R = Maybe<History>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, HistoryArgs>;
  export interface HistoryArgs {
    id: string;
  }

  export type LandpadsResolver<
    R = Maybe<(Maybe<Landpad>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, LandpadsArgs>;
  export interface LandpadsArgs {
    limit?: Maybe<number>;

    offset?: Maybe<number>;
  }

  export type LandpadResolver<
    R = Maybe<Landpad>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, LandpadArgs>;
  export interface LandpadArgs {
    id: string;
  }

  export type LaunchesResolver<
    R = Maybe<(Maybe<Launch>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, LaunchesArgs>;
  export interface LaunchesArgs {
    find?: Maybe<LaunchFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type LaunchesPastResolver<
    R = Maybe<(Maybe<Launch>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, LaunchesPastArgs>;
  export interface LaunchesPastArgs {
    find?: Maybe<LaunchFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type LaunchesUpcomingResolver<
    R = Maybe<(Maybe<Launch>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, LaunchesUpcomingArgs>;
  export interface LaunchesUpcomingArgs {
    find?: Maybe<LaunchFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type LaunchResolver<
    R = Maybe<Launch>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, LaunchArgs>;
  export interface LaunchArgs {
    flight_number: number;
  }

  export type LaunchLatestResolver<
    R = Maybe<Launch>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, LaunchLatestArgs>;
  export interface LaunchLatestArgs {
    offset?: Maybe<number>;
  }

  export type LaunchNextResolver<
    R = Maybe<Launch>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, LaunchNextArgs>;
  export interface LaunchNextArgs {
    offset?: Maybe<number>;
  }

  export type LaunchpadsResolver<
    R = Maybe<(Maybe<Launchpad>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, LaunchpadsArgs>;
  export interface LaunchpadsArgs {
    limit?: Maybe<number>;

    offset?: Maybe<number>;
  }

  export type LaunchpadResolver<
    R = Maybe<Launchpad>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, LaunchpadArgs>;
  export interface LaunchpadArgs {
    pad: string;
  }

  export type MissionsResolver<
    R = Maybe<(Maybe<Mission>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, MissionsArgs>;
  export interface MissionsArgs {
    find?: Maybe<MissionsFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;
  }

  export type MissionResolver<
    R = Maybe<Mission>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, MissionArgs>;
  export interface MissionArgs {
    mission_id: string;
  }

  export type PayloadsResolver<
    R = Maybe<(Maybe<Payload>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, PayloadsArgs>;
  export interface PayloadsArgs {
    find?: Maybe<PayloadsFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type PayloadResolver<
    R = Maybe<Payload>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, PayloadArgs>;
  export interface PayloadArgs {
    payload_id: string;
  }

  export type RoadsterResolver<
    R = Maybe<Roadster>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RocketsResolver<
    R = Maybe<(Maybe<Rocket>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, RocketsArgs>;
  export interface RocketsArgs {
    limit?: Maybe<number>;

    offset?: Maybe<number>;
  }

  export type RocketResolver<
    R = Maybe<Rocket>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, RocketArgs>;
  export interface RocketArgs {
    rocket: string;
  }

  export type ShipsResolver<
    R = Maybe<(Maybe<Ship>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, ShipsArgs>;
  export interface ShipsArgs {
    find?: Maybe<ShipsFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type ShipResolver<
    R = Maybe<Ship>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, ShipArgs>;
  export interface ShipArgs {
    ship_id: string;
  }
}

export namespace CapsuleResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Capsule> {
    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    status?: StatusResolver<Maybe<string>, TypeParent, Context>;

    original_launch?: OriginalLaunchResolver<Maybe<Date>, TypeParent, Context>;

    missions?: MissionsResolver<
      Maybe<(Maybe<CapsuleMission>)[]>,
      TypeParent,
      Context
    >;

    landings?: LandingsResolver<Maybe<number>, TypeParent, Context>;

    type?: TypeResolver<Maybe<string>, TypeParent, Context>;

    reuse_count?: ReuseCountResolver<Maybe<number>, TypeParent, Context>;

    capsule?: CapsuleResolver<Maybe<Dragon>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OriginalLaunchResolver<
    R = Maybe<Date>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionsResolver<
    R = Maybe<(Maybe<CapsuleMission>)[]>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LandingsResolver<
    R = Maybe<number>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ReuseCountResolver<
    R = Maybe<number>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CapsuleResolver<
    R = Maybe<Dragon>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace CapsuleMissionResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = CapsuleMission> {
    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    flight?: FlightResolver<Maybe<number>, TypeParent, Context>;
  }

  export type NameResolver<
    R = Maybe<string>,
    Parent = CapsuleMission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FlightResolver<
    R = Maybe<number>,
    Parent = CapsuleMission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace DragonResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Dragon> {
    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    type?: TypeResolver<Maybe<string>, TypeParent, Context>;

    active?: ActiveResolver<Maybe<boolean>, TypeParent, Context>;

    crew_capacity?: CrewCapacityResolver<Maybe<number>, TypeParent, Context>;

    sidewall_angle_deg?: SidewallAngleDegResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    orbit_duration_yr?: OrbitDurationYrResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    dry_mass_kg?: DryMassKgResolver<Maybe<number>, TypeParent, Context>;

    dry_mass_lb?: DryMassLbResolver<Maybe<number>, TypeParent, Context>;

    first_flight?: FirstFlightResolver<Maybe<string>, TypeParent, Context>;

    heat_shield?: HeatShieldResolver<
      Maybe<DragonHeatShield>,
      TypeParent,
      Context
    >;

    thrusters?: ThrustersResolver<
      Maybe<(Maybe<DragonThrust>)[]>,
      TypeParent,
      Context
    >;

    launch_payload_mass?: LaunchPayloadMassResolver<
      Maybe<Mass>,
      TypeParent,
      Context
    >;

    launch_payload_vol?: LaunchPayloadVolResolver<
      Maybe<Volume>,
      TypeParent,
      Context
    >;

    return_payload_mass?: ReturnPayloadMassResolver<
      Maybe<Mass>,
      TypeParent,
      Context
    >;

    return_payload_vol?: ReturnPayloadVolResolver<
      Maybe<Volume>,
      TypeParent,
      Context
    >;

    pressurized_capsule?: PressurizedCapsuleResolver<
      Maybe<DragonPressurizedCapsule>,
      TypeParent,
      Context
    >;

    trunk?: TrunkResolver<Maybe<DragonTrunk>, TypeParent, Context>;

    height_w_trunk?: HeightWTrunkResolver<Maybe<Distance>, TypeParent, Context>;

    diameter?: DiameterResolver<Maybe<Distance>, TypeParent, Context>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ActiveResolver<
    R = Maybe<boolean>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CrewCapacityResolver<
    R = Maybe<number>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SidewallAngleDegResolver<
    R = Maybe<number>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OrbitDurationYrResolver<
    R = Maybe<number>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DryMassKgResolver<
    R = Maybe<number>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DryMassLbResolver<
    R = Maybe<number>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FirstFlightResolver<
    R = Maybe<string>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type HeatShieldResolver<
    R = Maybe<DragonHeatShield>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ThrustersResolver<
    R = Maybe<(Maybe<DragonThrust>)[]>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchPayloadMassResolver<
    R = Maybe<Mass>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchPayloadVolResolver<
    R = Maybe<Volume>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ReturnPayloadMassResolver<
    R = Maybe<Mass>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ReturnPayloadVolResolver<
    R = Maybe<Volume>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PressurizedCapsuleResolver<
    R = Maybe<DragonPressurizedCapsule>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TrunkResolver<
    R = Maybe<DragonTrunk>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type HeightWTrunkResolver<
    R = Maybe<Distance>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DiameterResolver<
    R = Maybe<Distance>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace DragonHeatShieldResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = DragonHeatShield
  > {
    material?: MaterialResolver<Maybe<string>, TypeParent, Context>;

    size_meters?: SizeMetersResolver<Maybe<number>, TypeParent, Context>;

    temp_degrees?: TempDegreesResolver<Maybe<number>, TypeParent, Context>;

    dev_partner?: DevPartnerResolver<Maybe<string>, TypeParent, Context>;
  }

  export type MaterialResolver<
    R = Maybe<string>,
    Parent = DragonHeatShield,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SizeMetersResolver<
    R = Maybe<number>,
    Parent = DragonHeatShield,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TempDegreesResolver<
    R = Maybe<number>,
    Parent = DragonHeatShield,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DevPartnerResolver<
    R = Maybe<string>,
    Parent = DragonHeatShield,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace DragonThrustResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = DragonThrust> {
    type?: TypeResolver<Maybe<string>, TypeParent, Context>;

    amount?: AmountResolver<Maybe<number>, TypeParent, Context>;

    pods?: PodsResolver<Maybe<number>, TypeParent, Context>;

    fuel_1?: Fuel_1Resolver<Maybe<string>, TypeParent, Context>;

    fuel_2?: Fuel_2Resolver<Maybe<string>, TypeParent, Context>;

    thrust?: ThrustResolver<Maybe<Force>, TypeParent, Context>;
  }

  export type TypeResolver<
    R = Maybe<string>,
    Parent = DragonThrust,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type AmountResolver<
    R = Maybe<number>,
    Parent = DragonThrust,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PodsResolver<
    R = Maybe<number>,
    Parent = DragonThrust,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type Fuel_1Resolver<
    R = Maybe<string>,
    Parent = DragonThrust,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type Fuel_2Resolver<
    R = Maybe<string>,
    Parent = DragonThrust,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ThrustResolver<
    R = Maybe<Force>,
    Parent = DragonThrust,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace ForceResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Force> {
    kN?: KNResolver<Maybe<number>, TypeParent, Context>;

    lbf?: LbfResolver<Maybe<number>, TypeParent, Context>;
  }

  export type KNResolver<
    R = Maybe<number>,
    Parent = Force,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LbfResolver<
    R = Maybe<number>,
    Parent = Force,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace MassResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Mass> {
    kg?: KgResolver<Maybe<number>, TypeParent, Context>;

    lb?: LbResolver<Maybe<number>, TypeParent, Context>;
  }

  export type KgResolver<
    R = Maybe<number>,
    Parent = Mass,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LbResolver<
    R = Maybe<number>,
    Parent = Mass,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace VolumeResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Volume> {
    cubic_meters?: CubicMetersResolver<Maybe<number>, TypeParent, Context>;

    cubic_feet?: CubicFeetResolver<Maybe<number>, TypeParent, Context>;
  }

  export type CubicMetersResolver<
    R = Maybe<number>,
    Parent = Volume,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CubicFeetResolver<
    R = Maybe<number>,
    Parent = Volume,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace DragonPressurizedCapsuleResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = DragonPressurizedCapsule
  > {
    payload_volume?: PayloadVolumeResolver<Maybe<Volume>, TypeParent, Context>;
  }

  export type PayloadVolumeResolver<
    R = Maybe<Volume>,
    Parent = DragonPressurizedCapsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace DragonTrunkResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = DragonTrunk> {
    trunk_volume?: TrunkVolumeResolver<Maybe<Volume>, TypeParent, Context>;

    cargo?: CargoResolver<Maybe<DragonTrunkCargo>, TypeParent, Context>;
  }

  export type TrunkVolumeResolver<
    R = Maybe<Volume>,
    Parent = DragonTrunk,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CargoResolver<
    R = Maybe<DragonTrunkCargo>,
    Parent = DragonTrunk,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace DragonTrunkCargoResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = DragonTrunkCargo
  > {
    solar_array?: SolarArrayResolver<Maybe<number>, TypeParent, Context>;

    unpressurized_cargo?: UnpressurizedCargoResolver<
      Maybe<boolean>,
      TypeParent,
      Context
    >;
  }

  export type SolarArrayResolver<
    R = Maybe<number>,
    Parent = DragonTrunkCargo,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type UnpressurizedCargoResolver<
    R = Maybe<boolean>,
    Parent = DragonTrunkCargo,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace DistanceResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Distance> {
    meters?: MetersResolver<Maybe<number>, TypeParent, Context>;

    feet?: FeetResolver<Maybe<number>, TypeParent, Context>;
  }

  export type MetersResolver<
    R = Maybe<number>,
    Parent = Distance,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FeetResolver<
    R = Maybe<number>,
    Parent = Distance,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace InfoResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Info> {
    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    founder?: FounderResolver<Maybe<string>, TypeParent, Context>;

    founded?: FoundedResolver<Maybe<number>, TypeParent, Context>;

    employees?: EmployeesResolver<Maybe<number>, TypeParent, Context>;

    vehicles?: VehiclesResolver<Maybe<number>, TypeParent, Context>;

    launch_sites?: LaunchSitesResolver<Maybe<number>, TypeParent, Context>;

    test_sites?: TestSitesResolver<Maybe<number>, TypeParent, Context>;

    ceo?: CeoResolver<Maybe<string>, TypeParent, Context>;

    cto?: CtoResolver<Maybe<string>, TypeParent, Context>;

    coo?: CooResolver<Maybe<string>, TypeParent, Context>;

    cto_propulsion?: CtoPropulsionResolver<Maybe<string>, TypeParent, Context>;

    valuation?: ValuationResolver<Maybe<number>, TypeParent, Context>;

    headquarters?: HeadquartersResolver<Maybe<Address>, TypeParent, Context>;

    links?: LinksResolver<Maybe<InfoLinks>, TypeParent, Context>;

    summary?: SummaryResolver<Maybe<string>, TypeParent, Context>;
  }

  export type NameResolver<
    R = Maybe<string>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FounderResolver<
    R = Maybe<string>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FoundedResolver<
    R = Maybe<number>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EmployeesResolver<
    R = Maybe<number>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type VehiclesResolver<
    R = Maybe<number>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchSitesResolver<
    R = Maybe<number>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TestSitesResolver<
    R = Maybe<number>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CeoResolver<
    R = Maybe<string>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CtoResolver<
    R = Maybe<string>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CooResolver<
    R = Maybe<string>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CtoPropulsionResolver<
    R = Maybe<string>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ValuationResolver<
    R = Maybe<number>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type HeadquartersResolver<
    R = Maybe<Address>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LinksResolver<
    R = Maybe<InfoLinks>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SummaryResolver<
    R = Maybe<string>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace AddressResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Address> {
    address?: AddressResolver<Maybe<string>, TypeParent, Context>;

    city?: CityResolver<Maybe<string>, TypeParent, Context>;

    state?: StateResolver<Maybe<string>, TypeParent, Context>;
  }

  export type AddressResolver<
    R = Maybe<string>,
    Parent = Address,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CityResolver<
    R = Maybe<string>,
    Parent = Address,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StateResolver<
    R = Maybe<string>,
    Parent = Address,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace InfoLinksResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = InfoLinks> {
    website?: WebsiteResolver<Maybe<string>, TypeParent, Context>;

    flickr?: FlickrResolver<Maybe<string>, TypeParent, Context>;

    twitter?: TwitterResolver<Maybe<string>, TypeParent, Context>;

    elon_twitter?: ElonTwitterResolver<Maybe<string>, TypeParent, Context>;
  }

  export type WebsiteResolver<
    R = Maybe<string>,
    Parent = InfoLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FlickrResolver<
    R = Maybe<string>,
    Parent = InfoLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TwitterResolver<
    R = Maybe<string>,
    Parent = InfoLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ElonTwitterResolver<
    R = Maybe<string>,
    Parent = InfoLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace CoreResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Core> {
    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    block?: BlockResolver<Maybe<number>, TypeParent, Context>;

    status?: StatusResolver<Maybe<string>, TypeParent, Context>;

    original_launch?: OriginalLaunchResolver<Maybe<Date>, TypeParent, Context>;

    missions?: MissionsResolver<
      Maybe<(Maybe<CapsuleMission>)[]>,
      TypeParent,
      Context
    >;

    reuse_count?: ReuseCountResolver<Maybe<number>, TypeParent, Context>;

    rtls_attempts?: RtlsAttemptsResolver<Maybe<number>, TypeParent, Context>;

    rtls_landings?: RtlsLandingsResolver<Maybe<number>, TypeParent, Context>;

    asds_attempts?: AsdsAttemptsResolver<Maybe<number>, TypeParent, Context>;

    asds_landings?: AsdsLandingsResolver<Maybe<number>, TypeParent, Context>;

    water_landing?: WaterLandingResolver<Maybe<boolean>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type BlockResolver<
    R = Maybe<number>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OriginalLaunchResolver<
    R = Maybe<Date>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionsResolver<
    R = Maybe<(Maybe<CapsuleMission>)[]>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ReuseCountResolver<
    R = Maybe<number>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RtlsAttemptsResolver<
    R = Maybe<number>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RtlsLandingsResolver<
    R = Maybe<number>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type AsdsAttemptsResolver<
    R = Maybe<number>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type AsdsLandingsResolver<
    R = Maybe<number>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WaterLandingResolver<
    R = Maybe<boolean>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace HistoryResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = History> {
    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    title?: TitleResolver<Maybe<string>, TypeParent, Context>;

    event_date_utc?: EventDateUtcResolver<Maybe<Date>, TypeParent, Context>;

    event_date_unix?: EventDateUnixResolver<Maybe<Date>, TypeParent, Context>;

    details?: DetailsResolver<Maybe<string>, TypeParent, Context>;

    links?: LinksResolver<Maybe<Link>, TypeParent, Context>;

    flight?: FlightResolver<Maybe<Launch>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = Maybe<string>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EventDateUtcResolver<
    R = Maybe<Date>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EventDateUnixResolver<
    R = Maybe<Date>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DetailsResolver<
    R = Maybe<string>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LinksResolver<
    R = Maybe<Link>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FlightResolver<
    R = Maybe<Launch>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LinkResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Link> {
    reddit?: RedditResolver<Maybe<string>, TypeParent, Context>;

    article?: ArticleResolver<Maybe<string>, TypeParent, Context>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;
  }

  export type RedditResolver<
    R = Maybe<string>,
    Parent = Link,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ArticleResolver<
    R = Maybe<string>,
    Parent = Link,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Link,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Launch> {
    flight_number?: FlightNumberResolver<Maybe<number>, TypeParent, Context>;

    mission_name?: MissionNameResolver<Maybe<string>, TypeParent, Context>;

    mission_id?: MissionIdResolver<
      Maybe<(Maybe<string>)[]>,
      TypeParent,
      Context
    >;

    upcoming?: UpcomingResolver<Maybe<boolean>, TypeParent, Context>;

    launch_year?: LaunchYearResolver<Maybe<string>, TypeParent, Context>;

    launch_date_unix?: LaunchDateUnixResolver<Maybe<Date>, TypeParent, Context>;

    launch_date_utc?: LaunchDateUtcResolver<Maybe<Date>, TypeParent, Context>;

    launch_date_local?: LaunchDateLocalResolver<
      Maybe<Date>,
      TypeParent,
      Context
    >;

    is_tentative?: IsTentativeResolver<Maybe<boolean>, TypeParent, Context>;

    tentative_max_precision?: TentativeMaxPrecisionResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    rocket?: RocketResolver<Maybe<LaunchRocket>, TypeParent, Context>;

    ships?: ShipsResolver<Maybe<(Maybe<string>)[]>, TypeParent, Context>;

    telemetry?: TelemetryResolver<Maybe<LaunchTelemetry>, TypeParent, Context>;

    launch_site?: LaunchSiteResolver<Maybe<LaunchSite>, TypeParent, Context>;

    launch_success?: LaunchSuccessResolver<Maybe<boolean>, TypeParent, Context>;

    links?: LinksResolver<Maybe<LaunchLinks>, TypeParent, Context>;

    details?: DetailsResolver<Maybe<string>, TypeParent, Context>;

    static_fire_date_utc?: StaticFireDateUtcResolver<
      Maybe<Date>,
      TypeParent,
      Context
    >;

    static_fire_date_unix?: StaticFireDateUnixResolver<
      Maybe<Date>,
      TypeParent,
      Context
    >;
  }

  export type FlightNumberResolver<
    R = Maybe<number>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionNameResolver<
    R = Maybe<string>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionIdResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type UpcomingResolver<
    R = Maybe<boolean>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchYearResolver<
    R = Maybe<string>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchDateUnixResolver<
    R = Maybe<Date>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchDateUtcResolver<
    R = Maybe<Date>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchDateLocalResolver<
    R = Maybe<Date>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IsTentativeResolver<
    R = Maybe<boolean>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TentativeMaxPrecisionResolver<
    R = Maybe<string>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RocketResolver<
    R = Maybe<LaunchRocket>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ShipsResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TelemetryResolver<
    R = Maybe<LaunchTelemetry>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchSiteResolver<
    R = Maybe<LaunchSite>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchSuccessResolver<
    R = Maybe<boolean>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LinksResolver<
    R = Maybe<LaunchLinks>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DetailsResolver<
    R = Maybe<string>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StaticFireDateUtcResolver<
    R = Maybe<Date>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StaticFireDateUnixResolver<
    R = Maybe<Date>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchRocketResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = LaunchRocket> {
    rocket?: RocketResolver<Maybe<Rocket>, TypeParent, Context>;

    rocket_name?: RocketNameResolver<Maybe<string>, TypeParent, Context>;

    rocket_type?: RocketTypeResolver<Maybe<string>, TypeParent, Context>;

    first_stage?: FirstStageResolver<
      Maybe<LaunchRocketFirstStage>,
      TypeParent,
      Context
    >;

    second_stage?: SecondStageResolver<
      Maybe<LaunchRocketSecondStage>,
      TypeParent,
      Context
    >;

    fairings?: FairingsResolver<
      Maybe<LaunchRocketFairings>,
      TypeParent,
      Context
    >;
  }

  export type RocketResolver<
    R = Maybe<Rocket>,
    Parent = LaunchRocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RocketNameResolver<
    R = Maybe<string>,
    Parent = LaunchRocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RocketTypeResolver<
    R = Maybe<string>,
    Parent = LaunchRocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FirstStageResolver<
    R = Maybe<LaunchRocketFirstStage>,
    Parent = LaunchRocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SecondStageResolver<
    R = Maybe<LaunchRocketSecondStage>,
    Parent = LaunchRocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FairingsResolver<
    R = Maybe<LaunchRocketFairings>,
    Parent = LaunchRocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace RocketResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Rocket> {
    id?: IdResolver<Maybe<number>, TypeParent, Context>;

    active?: ActiveResolver<Maybe<boolean>, TypeParent, Context>;

    stages?: StagesResolver<Maybe<number>, TypeParent, Context>;

    boosters?: BoostersResolver<Maybe<number>, TypeParent, Context>;

    cost_per_launch?: CostPerLaunchResolver<Maybe<number>, TypeParent, Context>;

    success_rate_pct?: SuccessRatePctResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    first_flight?: FirstFlightResolver<Maybe<Date>, TypeParent, Context>;

    country?: CountryResolver<Maybe<string>, TypeParent, Context>;

    company?: CompanyResolver<Maybe<string>, TypeParent, Context>;

    height?: HeightResolver<Maybe<Distance>, TypeParent, Context>;

    diameter?: DiameterResolver<Maybe<Distance>, TypeParent, Context>;

    mass?: MassResolver<Maybe<Mass>, TypeParent, Context>;

    payload_weights?: PayloadWeightsResolver<
      Maybe<(Maybe<RocketPayloadWeight>)[]>,
      TypeParent,
      Context
    >;

    first_stage?: FirstStageResolver<
      Maybe<RocketFirstStage>,
      TypeParent,
      Context
    >;

    second_stage?: SecondStageResolver<
      Maybe<RocketSecondStage>,
      TypeParent,
      Context
    >;

    engines?: EnginesResolver<Maybe<RocketEngines>, TypeParent, Context>;

    landing_legs?: LandingLegsResolver<
      Maybe<RocketLandingLegs>,
      TypeParent,
      Context
    >;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;

    rocket_id?: RocketIdResolver<Maybe<string>, TypeParent, Context>;

    rocket_name?: RocketNameResolver<Maybe<string>, TypeParent, Context>;

    rocket_type?: RocketTypeResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<number>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ActiveResolver<
    R = Maybe<boolean>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StagesResolver<
    R = Maybe<number>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type BoostersResolver<
    R = Maybe<number>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CostPerLaunchResolver<
    R = Maybe<number>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SuccessRatePctResolver<
    R = Maybe<number>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FirstFlightResolver<
    R = Maybe<Date>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CountryResolver<
    R = Maybe<string>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CompanyResolver<
    R = Maybe<string>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type HeightResolver<
    R = Maybe<Distance>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DiameterResolver<
    R = Maybe<Distance>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MassResolver<
    R = Maybe<Mass>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PayloadWeightsResolver<
    R = Maybe<(Maybe<RocketPayloadWeight>)[]>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FirstStageResolver<
    R = Maybe<RocketFirstStage>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SecondStageResolver<
    R = Maybe<RocketSecondStage>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EnginesResolver<
    R = Maybe<RocketEngines>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LandingLegsResolver<
    R = Maybe<RocketLandingLegs>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RocketIdResolver<
    R = Maybe<string>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RocketNameResolver<
    R = Maybe<string>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RocketTypeResolver<
    R = Maybe<string>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace RocketPayloadWeightResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = RocketPayloadWeight
  > {
    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    kg?: KgResolver<Maybe<number>, TypeParent, Context>;

    lb?: LbResolver<Maybe<number>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = RocketPayloadWeight,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = RocketPayloadWeight,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type KgResolver<
    R = Maybe<number>,
    Parent = RocketPayloadWeight,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LbResolver<
    R = Maybe<number>,
    Parent = RocketPayloadWeight,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace RocketFirstStageResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = RocketFirstStage
  > {
    reusable?: ReusableResolver<Maybe<boolean>, TypeParent, Context>;

    engines?: EnginesResolver<Maybe<number>, TypeParent, Context>;

    fuel_amount_tons?: FuelAmountTonsResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    burn_time_sec?: BurnTimeSecResolver<Maybe<number>, TypeParent, Context>;

    thrust_sea_level?: ThrustSeaLevelResolver<
      Maybe<Force>,
      TypeParent,
      Context
    >;

    thrust_vacuum?: ThrustVacuumResolver<Maybe<Force>, TypeParent, Context>;
  }

  export type ReusableResolver<
    R = Maybe<boolean>,
    Parent = RocketFirstStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EnginesResolver<
    R = Maybe<number>,
    Parent = RocketFirstStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FuelAmountTonsResolver<
    R = Maybe<number>,
    Parent = RocketFirstStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type BurnTimeSecResolver<
    R = Maybe<number>,
    Parent = RocketFirstStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ThrustSeaLevelResolver<
    R = Maybe<Force>,
    Parent = RocketFirstStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ThrustVacuumResolver<
    R = Maybe<Force>,
    Parent = RocketFirstStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace RocketSecondStageResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = RocketSecondStage
  > {
    engines?: EnginesResolver<Maybe<number>, TypeParent, Context>;

    fuel_amount_tons?: FuelAmountTonsResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    burn_time_sec?: BurnTimeSecResolver<Maybe<number>, TypeParent, Context>;

    thrust?: ThrustResolver<Maybe<Force>, TypeParent, Context>;

    payloads?: PayloadsResolver<
      Maybe<RocketSecondStagePayloads>,
      TypeParent,
      Context
    >;
  }

  export type EnginesResolver<
    R = Maybe<number>,
    Parent = RocketSecondStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FuelAmountTonsResolver<
    R = Maybe<number>,
    Parent = RocketSecondStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type BurnTimeSecResolver<
    R = Maybe<number>,
    Parent = RocketSecondStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ThrustResolver<
    R = Maybe<Force>,
    Parent = RocketSecondStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PayloadsResolver<
    R = Maybe<RocketSecondStagePayloads>,
    Parent = RocketSecondStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace RocketSecondStagePayloadsResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = RocketSecondStagePayloads
  > {
    option_1?: Option_1Resolver<Maybe<string>, TypeParent, Context>;

    composite_fairing?: CompositeFairingResolver<
      Maybe<RocketSecondStagePayloadCompositeFairing>,
      TypeParent,
      Context
    >;
  }

  export type Option_1Resolver<
    R = Maybe<string>,
    Parent = RocketSecondStagePayloads,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CompositeFairingResolver<
    R = Maybe<RocketSecondStagePayloadCompositeFairing>,
    Parent = RocketSecondStagePayloads,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace RocketSecondStagePayloadCompositeFairingResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = RocketSecondStagePayloadCompositeFairing
  > {
    height?: HeightResolver<Maybe<Distance>, TypeParent, Context>;

    diameter?: DiameterResolver<Maybe<Distance>, TypeParent, Context>;
  }

  export type HeightResolver<
    R = Maybe<Distance>,
    Parent = RocketSecondStagePayloadCompositeFairing,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DiameterResolver<
    R = Maybe<Distance>,
    Parent = RocketSecondStagePayloadCompositeFairing,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace RocketEnginesResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = RocketEngines> {
    number?: NumberResolver<Maybe<number>, TypeParent, Context>;

    type?: TypeResolver<Maybe<string>, TypeParent, Context>;

    version?: VersionResolver<Maybe<string>, TypeParent, Context>;

    layout?: LayoutResolver<Maybe<string>, TypeParent, Context>;

    engine_loss_max?: EngineLossMaxResolver<Maybe<string>, TypeParent, Context>;

    propellant_1?: Propellant_1Resolver<Maybe<string>, TypeParent, Context>;

    propellant_2?: Propellant_2Resolver<Maybe<string>, TypeParent, Context>;

    thrust_sea_level?: ThrustSeaLevelResolver<
      Maybe<Force>,
      TypeParent,
      Context
    >;

    thrust_vacuum?: ThrustVacuumResolver<Maybe<Force>, TypeParent, Context>;

    thrust_to_weight?: ThrustToWeightResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;
  }

  export type NumberResolver<
    R = Maybe<number>,
    Parent = RocketEngines,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = RocketEngines,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type VersionResolver<
    R = Maybe<string>,
    Parent = RocketEngines,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LayoutResolver<
    R = Maybe<string>,
    Parent = RocketEngines,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EngineLossMaxResolver<
    R = Maybe<string>,
    Parent = RocketEngines,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type Propellant_1Resolver<
    R = Maybe<string>,
    Parent = RocketEngines,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type Propellant_2Resolver<
    R = Maybe<string>,
    Parent = RocketEngines,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ThrustSeaLevelResolver<
    R = Maybe<Force>,
    Parent = RocketEngines,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ThrustVacuumResolver<
    R = Maybe<Force>,
    Parent = RocketEngines,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ThrustToWeightResolver<
    R = Maybe<number>,
    Parent = RocketEngines,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace RocketLandingLegsResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = RocketLandingLegs
  > {
    number?: NumberResolver<Maybe<number>, TypeParent, Context>;

    material?: MaterialResolver<Maybe<string>, TypeParent, Context>;
  }

  export type NumberResolver<
    R = Maybe<number>,
    Parent = RocketLandingLegs,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MaterialResolver<
    R = Maybe<string>,
    Parent = RocketLandingLegs,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchRocketFirstStageResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = LaunchRocketFirstStage
  > {
    cores?: CoresResolver<
      Maybe<(Maybe<LaunchRocketFirstStageCore>)[]>,
      TypeParent,
      Context
    >;
  }

  export type CoresResolver<
    R = Maybe<(Maybe<LaunchRocketFirstStageCore>)[]>,
    Parent = LaunchRocketFirstStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchRocketFirstStageCoreResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = LaunchRocketFirstStageCore
  > {
    core?: CoreResolver<Maybe<Core>, TypeParent, Context>;

    flight?: FlightResolver<Maybe<number>, TypeParent, Context>;

    block?: BlockResolver<Maybe<number>, TypeParent, Context>;

    gridfins?: GridfinsResolver<Maybe<boolean>, TypeParent, Context>;

    legs?: LegsResolver<Maybe<boolean>, TypeParent, Context>;

    reused?: ReusedResolver<Maybe<boolean>, TypeParent, Context>;

    land_success?: LandSuccessResolver<Maybe<boolean>, TypeParent, Context>;

    landing_intent?: LandingIntentResolver<Maybe<boolean>, TypeParent, Context>;

    landing_type?: LandingTypeResolver<Maybe<string>, TypeParent, Context>;

    landing_vehicle?: LandingVehicleResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;
  }

  export type CoreResolver<
    R = Maybe<Core>,
    Parent = LaunchRocketFirstStageCore,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FlightResolver<
    R = Maybe<number>,
    Parent = LaunchRocketFirstStageCore,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type BlockResolver<
    R = Maybe<number>,
    Parent = LaunchRocketFirstStageCore,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type GridfinsResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFirstStageCore,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LegsResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFirstStageCore,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ReusedResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFirstStageCore,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LandSuccessResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFirstStageCore,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LandingIntentResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFirstStageCore,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LandingTypeResolver<
    R = Maybe<string>,
    Parent = LaunchRocketFirstStageCore,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LandingVehicleResolver<
    R = Maybe<string>,
    Parent = LaunchRocketFirstStageCore,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchRocketSecondStageResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = LaunchRocketSecondStage
  > {
    block?: BlockResolver<Maybe<number>, TypeParent, Context>;

    payloads?: PayloadsResolver<Maybe<(Maybe<Payload>)[]>, TypeParent, Context>;
  }

  export type BlockResolver<
    R = Maybe<number>,
    Parent = LaunchRocketSecondStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PayloadsResolver<
    R = Maybe<(Maybe<Payload>)[]>,
    Parent = LaunchRocketSecondStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace PayloadResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Payload> {
    payload_id?: PayloadIdResolver<Maybe<string>, TypeParent, Context>;

    norad_id?: NoradIdResolver<Maybe<(Maybe<number>)[]>, TypeParent, Context>;

    reused?: ReusedResolver<Maybe<boolean>, TypeParent, Context>;

    customers?: CustomersResolver<
      Maybe<(Maybe<string>)[]>,
      TypeParent,
      Context
    >;

    nationality?: NationalityResolver<Maybe<string>, TypeParent, Context>;

    manufacturer?: ManufacturerResolver<Maybe<string>, TypeParent, Context>;

    payload_type?: PayloadTypeResolver<Maybe<string>, TypeParent, Context>;

    payload_mass_kg?: PayloadMassKgResolver<Maybe<number>, TypeParent, Context>;

    payload_mass_lbs?: PayloadMassLbsResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    orbit?: OrbitResolver<Maybe<string>, TypeParent, Context>;

    orbit_params?: OrbitParamsResolver<
      Maybe<PayloadOrbitParams>,
      TypeParent,
      Context
    >;
  }

  export type PayloadIdResolver<
    R = Maybe<string>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NoradIdResolver<
    R = Maybe<(Maybe<number>)[]>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ReusedResolver<
    R = Maybe<boolean>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CustomersResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NationalityResolver<
    R = Maybe<string>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ManufacturerResolver<
    R = Maybe<string>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PayloadTypeResolver<
    R = Maybe<string>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PayloadMassKgResolver<
    R = Maybe<number>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PayloadMassLbsResolver<
    R = Maybe<number>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OrbitResolver<
    R = Maybe<string>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OrbitParamsResolver<
    R = Maybe<PayloadOrbitParams>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace PayloadOrbitParamsResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = PayloadOrbitParams
  > {
    reference_system?: ReferenceSystemResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    regime?: RegimeResolver<Maybe<string>, TypeParent, Context>;

    longitude?: LongitudeResolver<Maybe<number>, TypeParent, Context>;

    lifespan_years?: LifespanYearsResolver<Maybe<number>, TypeParent, Context>;

    epoch?: EpochResolver<Maybe<Date>, TypeParent, Context>;

    mean_motion?: MeanMotionResolver<Maybe<number>, TypeParent, Context>;

    raan?: RaanResolver<Maybe<number>, TypeParent, Context>;

    semi_major_axis_km?: SemiMajorAxisKmResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    eccentricity?: EccentricityResolver<Maybe<number>, TypeParent, Context>;

    periapsis_km?: PeriapsisKmResolver<Maybe<number>, TypeParent, Context>;

    apoapsis_km?: ApoapsisKmResolver<Maybe<number>, TypeParent, Context>;

    inclination_deg?: InclinationDegResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    period_min?: PeriodMinResolver<Maybe<number>, TypeParent, Context>;

    arg_of_pericenter?: ArgOfPericenterResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    mean_anomaly?: MeanAnomalyResolver<Maybe<number>, TypeParent, Context>;
  }

  export type ReferenceSystemResolver<
    R = Maybe<string>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RegimeResolver<
    R = Maybe<string>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LifespanYearsResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EpochResolver<
    R = Maybe<Date>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MeanMotionResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RaanResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SemiMajorAxisKmResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EccentricityResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PeriapsisKmResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ApoapsisKmResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type InclinationDegResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PeriodMinResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ArgOfPericenterResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MeanAnomalyResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchRocketFairingsResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = LaunchRocketFairings
  > {
    reused?: ReusedResolver<Maybe<boolean>, TypeParent, Context>;

    recovery_attempt?: RecoveryAttemptResolver<
      Maybe<boolean>,
      TypeParent,
      Context
    >;

    recovered?: RecoveredResolver<Maybe<boolean>, TypeParent, Context>;

    ship?: ShipResolver<Maybe<string>, TypeParent, Context>;
  }

  export type ReusedResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFairings,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RecoveryAttemptResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFairings,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RecoveredResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFairings,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ShipResolver<
    R = Maybe<string>,
    Parent = LaunchRocketFairings,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchTelemetryResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = LaunchTelemetry
  > {
    flight_club?: FlightClubResolver<Maybe<string>, TypeParent, Context>;
  }

  export type FlightClubResolver<
    R = Maybe<string>,
    Parent = LaunchTelemetry,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchSiteResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = LaunchSite> {
    site_id?: SiteIdResolver<Maybe<string>, TypeParent, Context>;

    site_name?: SiteNameResolver<Maybe<string>, TypeParent, Context>;

    site_name_long?: SiteNameLongResolver<Maybe<string>, TypeParent, Context>;
  }

  export type SiteIdResolver<
    R = Maybe<string>,
    Parent = LaunchSite,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SiteNameResolver<
    R = Maybe<string>,
    Parent = LaunchSite,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SiteNameLongResolver<
    R = Maybe<string>,
    Parent = LaunchSite,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchLinksResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = LaunchLinks> {
    mission_patch?: MissionPatchResolver<Maybe<string>, TypeParent, Context>;

    mission_patch_small?: MissionPatchSmallResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    reddit_campaign?: RedditCampaignResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    reddit_launch?: RedditLaunchResolver<Maybe<string>, TypeParent, Context>;

    reddit_recovery?: RedditRecoveryResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    reddit_media?: RedditMediaResolver<Maybe<string>, TypeParent, Context>;

    presskit?: PresskitResolver<Maybe<string>, TypeParent, Context>;

    article_link?: ArticleLinkResolver<Maybe<string>, TypeParent, Context>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;

    video_link?: VideoLinkResolver<Maybe<string>, TypeParent, Context>;

    flickr_images?: FlickrImagesResolver<
      Maybe<(Maybe<string>)[]>,
      TypeParent,
      Context
    >;
  }

  export type MissionPatchResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionPatchSmallResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RedditCampaignResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RedditLaunchResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RedditRecoveryResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RedditMediaResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PresskitResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ArticleLinkResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type VideoLinkResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FlickrImagesResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LandpadResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Landpad> {
    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    full_name?: FullNameResolver<Maybe<string>, TypeParent, Context>;

    status?: StatusResolver<Maybe<string>, TypeParent, Context>;

    location?: LocationResolver<Maybe<Location>, TypeParent, Context>;

    landing_type?: LandingTypeResolver<Maybe<string>, TypeParent, Context>;

    attempted_landings?: AttemptedLandingsResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    successful_landings?: SuccessfulLandingsResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;

    details?: DetailsResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FullNameResolver<
    R = Maybe<string>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LocationResolver<
    R = Maybe<Location>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LandingTypeResolver<
    R = Maybe<string>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type AttemptedLandingsResolver<
    R = Maybe<string>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SuccessfulLandingsResolver<
    R = Maybe<string>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DetailsResolver<
    R = Maybe<string>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LocationResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Location> {
    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    region?: RegionResolver<Maybe<string>, TypeParent, Context>;

    latitude?: LatitudeResolver<Maybe<number>, TypeParent, Context>;

    longitude?: LongitudeResolver<Maybe<number>, TypeParent, Context>;
  }

  export type NameResolver<
    R = Maybe<string>,
    Parent = Location,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RegionResolver<
    R = Maybe<string>,
    Parent = Location,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LatitudeResolver<
    R = Maybe<number>,
    Parent = Location,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = Maybe<number>,
    Parent = Location,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchpadResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Launchpad> {
    id?: IdResolver<Maybe<number>, TypeParent, Context>;

    status?: StatusResolver<Maybe<string>, TypeParent, Context>;

    location?: LocationResolver<Maybe<Location>, TypeParent, Context>;

    vehicles_launched?: VehiclesLaunchedResolver<
      Maybe<(Maybe<Rocket>)[]>,
      TypeParent,
      Context
    >;

    attempted_launches?: AttemptedLaunchesResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    successful_launches?: SuccessfulLaunchesResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;

    details?: DetailsResolver<Maybe<string>, TypeParent, Context>;

    site_id?: SiteIdResolver<Maybe<string>, TypeParent, Context>;

    site_name_long?: SiteNameLongResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<number>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LocationResolver<
    R = Maybe<Location>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type VehiclesLaunchedResolver<
    R = Maybe<(Maybe<Rocket>)[]>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type AttemptedLaunchesResolver<
    R = Maybe<number>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SuccessfulLaunchesResolver<
    R = Maybe<number>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DetailsResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SiteIdResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SiteNameLongResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace MissionResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Mission> {
    mission_name?: MissionNameResolver<Maybe<string>, TypeParent, Context>;

    mission_id?: MissionIdResolver<Maybe<string>, TypeParent, Context>;

    manufacturers?: ManufacturersResolver<
      Maybe<(Maybe<string>)[]>,
      TypeParent,
      Context
    >;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;

    website?: WebsiteResolver<Maybe<string>, TypeParent, Context>;

    twitter?: TwitterResolver<Maybe<string>, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;

    payloads?: PayloadsResolver<Maybe<(Maybe<Payload>)[]>, TypeParent, Context>;
  }

  export type MissionNameResolver<
    R = Maybe<string>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionIdResolver<
    R = Maybe<string>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ManufacturersResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WebsiteResolver<
    R = Maybe<string>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TwitterResolver<
    R = Maybe<string>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PayloadsResolver<
    R = Maybe<(Maybe<Payload>)[]>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace RoadsterResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Roadster> {
    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    launch_date_utc?: LaunchDateUtcResolver<Maybe<Date>, TypeParent, Context>;

    launch_date_unix?: LaunchDateUnixResolver<Maybe<Date>, TypeParent, Context>;

    launch_mass_kg?: LaunchMassKgResolver<Maybe<number>, TypeParent, Context>;

    launch_mass_lbs?: LaunchMassLbsResolver<Maybe<number>, TypeParent, Context>;

    norad_id?: NoradIdResolver<Maybe<number>, TypeParent, Context>;

    epoch_jd?: EpochJdResolver<Maybe<number>, TypeParent, Context>;

    orbit_type?: OrbitTypeResolver<Maybe<number>, TypeParent, Context>;

    apoapsis_au?: ApoapsisAuResolver<Maybe<number>, TypeParent, Context>;

    periapsis_au?: PeriapsisAuResolver<Maybe<number>, TypeParent, Context>;

    semi_major_axis_au?: SemiMajorAxisAuResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    eccentricity?: EccentricityResolver<Maybe<number>, TypeParent, Context>;

    inclination?: InclinationResolver<Maybe<number>, TypeParent, Context>;

    longitude?: LongitudeResolver<Maybe<number>, TypeParent, Context>;

    periapsis_arg?: PeriapsisArgResolver<Maybe<number>, TypeParent, Context>;

    period_days?: PeriodDaysResolver<Maybe<number>, TypeParent, Context>;

    speed_kph?: SpeedKphResolver<Maybe<number>, TypeParent, Context>;

    speed_mph?: SpeedMphResolver<Maybe<number>, TypeParent, Context>;

    earth_distance_km?: EarthDistanceKmResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    earth_distance_mi?: EarthDistanceMiResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    mars_distance_km?: MarsDistanceKmResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    mars_distance_mi?: MarsDistanceMiResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;

    details?: DetailsResolver<Maybe<string>, TypeParent, Context>;
  }

  export type NameResolver<
    R = Maybe<string>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchDateUtcResolver<
    R = Maybe<Date>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchDateUnixResolver<
    R = Maybe<Date>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchMassKgResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchMassLbsResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NoradIdResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EpochJdResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OrbitTypeResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ApoapsisAuResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PeriapsisAuResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SemiMajorAxisAuResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EccentricityResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type InclinationResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PeriapsisArgResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PeriodDaysResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SpeedKphResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SpeedMphResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EarthDistanceKmResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EarthDistanceMiResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MarsDistanceKmResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MarsDistanceMiResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DetailsResolver<
    R = Maybe<string>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace ShipResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Ship> {
    ship_id?: ShipIdResolver<Maybe<string>, TypeParent, Context>;

    ship_name?: ShipNameResolver<Maybe<string>, TypeParent, Context>;

    ship_model?: ShipModelResolver<Maybe<string>, TypeParent, Context>;

    ship_type?: ShipTypeResolver<Maybe<string>, TypeParent, Context>;

    roles?: RolesResolver<Maybe<(Maybe<string>)[]>, TypeParent, Context>;

    active?: ActiveResolver<Maybe<boolean>, TypeParent, Context>;

    imo?: ImoResolver<Maybe<number>, TypeParent, Context>;

    mmsi?: MmsiResolver<Maybe<number>, TypeParent, Context>;

    abs?: AbsResolver<Maybe<number>, TypeParent, Context>;

    class?: ClassResolver<Maybe<number>, TypeParent, Context>;

    weight_lbs?: WeightLbsResolver<Maybe<number>, TypeParent, Context>;

    weight_kg?: WeightKgResolver<Maybe<number>, TypeParent, Context>;

    year_built?: YearBuiltResolver<Maybe<number>, TypeParent, Context>;

    home_port?: HomePortResolver<Maybe<string>, TypeParent, Context>;

    status?: StatusResolver<Maybe<string>, TypeParent, Context>;

    speed_kn?: SpeedKnResolver<Maybe<number>, TypeParent, Context>;

    course_deg?: CourseDegResolver<Maybe<number>, TypeParent, Context>;

    position?: PositionResolver<Maybe<ShipLocation>, TypeParent, Context>;

    successful_landings?: SuccessfulLandingsResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    attempted_landings?: AttemptedLandingsResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    missions?: MissionsResolver<
      Maybe<(Maybe<ShipMission>)[]>,
      TypeParent,
      Context
    >;

    url?: UrlResolver<Maybe<string>, TypeParent, Context>;

    image?: ImageResolver<Maybe<string>, TypeParent, Context>;
  }

  export type ShipIdResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ShipNameResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ShipModelResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ShipTypeResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RolesResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ActiveResolver<
    R = Maybe<boolean>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ImoResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MmsiResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type AbsResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ClassResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WeightLbsResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WeightKgResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type YearBuiltResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type HomePortResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SpeedKnResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CourseDegResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PositionResolver<
    R = Maybe<ShipLocation>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SuccessfulLandingsResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type AttemptedLandingsResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionsResolver<
    R = Maybe<(Maybe<ShipMission>)[]>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ImageResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace ShipLocationResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = ShipLocation> {
    latitude?: LatitudeResolver<Maybe<number>, TypeParent, Context>;

    longitude?: LongitudeResolver<Maybe<number>, TypeParent, Context>;
  }

  export type LatitudeResolver<
    R = Maybe<number>,
    Parent = ShipLocation,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = Maybe<number>,
    Parent = ShipLocation,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace ShipMissionResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = ShipMission> {
    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    flight?: FlightResolver<Maybe<string>, TypeParent, Context>;
  }

  export type NameResolver<
    R = Maybe<string>,
    Parent = ShipMission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FlightResolver<
    R = Maybe<string>,
    Parent = ShipMission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {
    _empty?: _EmptyResolver<Maybe<string>, TypeParent, Context>;
  }

  export type _EmptyResolver<
    R = Maybe<string>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace SubscriptionResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {
    _empty?: _EmptyResolver<Maybe<string>, TypeParent, Context>;
  }

  export type _EmptyResolver<
    R = Maybe<string>,
    Parent = {},
    Context = MyContext
  > = SubscriptionResolver<R, Parent, Context>;
}

export namespace CoreMissionResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = CoreMission> {
    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    flight?: FlightResolver<Maybe<number>, TypeParent, Context>;
  }

  export type NameResolver<
    R = Maybe<string>,
    Parent = CoreMission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FlightResolver<
    R = Maybe<number>,
    Parent = CoreMission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  MyContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  MyContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  MyContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<Date, any> {
  name: "Date";
}
export interface ObjectIDScalarConfig
  extends GraphQLScalarTypeConfig<ObjectId, any> {
  name: "ObjectID";
}

export interface IResolvers {
  Query?: QueryResolvers.Resolvers;
  Capsule?: CapsuleResolvers.Resolvers;
  CapsuleMission?: CapsuleMissionResolvers.Resolvers;
  Dragon?: DragonResolvers.Resolvers;
  DragonHeatShield?: DragonHeatShieldResolvers.Resolvers;
  DragonThrust?: DragonThrustResolvers.Resolvers;
  Force?: ForceResolvers.Resolvers;
  Mass?: MassResolvers.Resolvers;
  Volume?: VolumeResolvers.Resolvers;
  DragonPressurizedCapsule?: DragonPressurizedCapsuleResolvers.Resolvers;
  DragonTrunk?: DragonTrunkResolvers.Resolvers;
  DragonTrunkCargo?: DragonTrunkCargoResolvers.Resolvers;
  Distance?: DistanceResolvers.Resolvers;
  Info?: InfoResolvers.Resolvers;
  Address?: AddressResolvers.Resolvers;
  InfoLinks?: InfoLinksResolvers.Resolvers;
  Core?: CoreResolvers.Resolvers;
  History?: HistoryResolvers.Resolvers;
  Link?: LinkResolvers.Resolvers;
  Launch?: LaunchResolvers.Resolvers;
  LaunchRocket?: LaunchRocketResolvers.Resolvers;
  Rocket?: RocketResolvers.Resolvers;
  RocketPayloadWeight?: RocketPayloadWeightResolvers.Resolvers;
  RocketFirstStage?: RocketFirstStageResolvers.Resolvers;
  RocketSecondStage?: RocketSecondStageResolvers.Resolvers;
  RocketSecondStagePayloads?: RocketSecondStagePayloadsResolvers.Resolvers;
  RocketSecondStagePayloadCompositeFairing?: RocketSecondStagePayloadCompositeFairingResolvers.Resolvers;
  RocketEngines?: RocketEnginesResolvers.Resolvers;
  RocketLandingLegs?: RocketLandingLegsResolvers.Resolvers;
  LaunchRocketFirstStage?: LaunchRocketFirstStageResolvers.Resolvers;
  LaunchRocketFirstStageCore?: LaunchRocketFirstStageCoreResolvers.Resolvers;
  LaunchRocketSecondStage?: LaunchRocketSecondStageResolvers.Resolvers;
  Payload?: PayloadResolvers.Resolvers;
  PayloadOrbitParams?: PayloadOrbitParamsResolvers.Resolvers;
  LaunchRocketFairings?: LaunchRocketFairingsResolvers.Resolvers;
  LaunchTelemetry?: LaunchTelemetryResolvers.Resolvers;
  LaunchSite?: LaunchSiteResolvers.Resolvers;
  LaunchLinks?: LaunchLinksResolvers.Resolvers;
  Landpad?: LandpadResolvers.Resolvers;
  Location?: LocationResolvers.Resolvers;
  Launchpad?: LaunchpadResolvers.Resolvers;
  Mission?: MissionResolvers.Resolvers;
  Roadster?: RoadsterResolvers.Resolvers;
  Ship?: ShipResolvers.Resolvers;
  ShipLocation?: ShipLocationResolvers.Resolvers;
  ShipMission?: ShipMissionResolvers.Resolvers;
  Mutation?: MutationResolvers.Resolvers;
  Subscription?: SubscriptionResolvers.Resolvers;
  CoreMission?: CoreMissionResolvers.Resolvers;
  Date?: GraphQLScalarType;
  ObjectId?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
