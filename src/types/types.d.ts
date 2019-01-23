export type Maybe<T> = T | null;

export interface CapsulesFind {
  id?: Maybe<string>;

  landings?: Maybe<number>;

  mission?: Maybe<string>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  status?: Maybe<string>;

  type?: Maybe<string>;
}

export interface CoresFind {
  asds_attempts?: Maybe<number>;

  asds_landings?: Maybe<number>;

  block?: Maybe<number>;

  id?: Maybe<string>;

  missions?: Maybe<string>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  rtls_attempts?: Maybe<number>;

  rtls_landings?: Maybe<number>;

  status?: Maybe<string>;

  water_landing?: Maybe<boolean>;
}

export interface HistoryFind {
  end?: Maybe<Date>;

  flight_number?: Maybe<number>;

  id?: Maybe<string>;

  start?: Maybe<Date>;
}

export interface LaunchFind {
  apoapsis_km?: Maybe<number>;

  block?: Maybe<number>;

  cap_serial?: Maybe<string>;

  capsule_reuse?: Maybe<string>;

  core_flight?: Maybe<number>;

  core_reuse?: Maybe<string>;

  core_serial?: Maybe<string>;

  customer?: Maybe<string>;

  eccentricity?: Maybe<number>;

  end?: Maybe<Date>;

  epoch?: Maybe<Date>;

  fairings_recovered?: Maybe<string>;

  fairings_recovery_attempt?: Maybe<string>;

  fairings_reuse?: Maybe<string>;

  fairings_reused?: Maybe<string>;

  fairings_ship?: Maybe<string>;

  gridfins?: Maybe<string>;

  id?: Maybe<string>;

  inclination_deg?: Maybe<number>;

  land_success?: Maybe<string>;

  landing_intent?: Maybe<string>;

  landing_type?: Maybe<string>;

  landing_vehicle?: Maybe<string>;

  launch_date_local?: Maybe<Date>;

  launch_date_utc?: Maybe<Date>;

  launch_success?: Maybe<string>;

  launch_year?: Maybe<string>;

  legs?: Maybe<string>;

  lifespan_years?: Maybe<number>;

  longitude?: Maybe<number>;

  manufacturer?: Maybe<string>;

  mean_motion?: Maybe<number>;

  mission_id?: Maybe<string>;

  mission_name?: Maybe<string>;

  nationality?: Maybe<string>;

  norad_id?: Maybe<number>;

  orbit?: Maybe<string>;

  payload_id?: Maybe<string>;

  payload_type?: Maybe<string>;

  periapsis_km?: Maybe<number>;

  period_min?: Maybe<number>;

  raan?: Maybe<number>;

  reference_system?: Maybe<string>;

  regime?: Maybe<string>;

  reused?: Maybe<string>;

  rocket_id?: Maybe<string>;

  rocket_name?: Maybe<string>;

  rocket_type?: Maybe<string>;

  second_stage_block?: Maybe<string>;

  semi_major_axis_km?: Maybe<number>;

  ship?: Maybe<string>;

  side_core1_reuse?: Maybe<string>;

  side_core2_reuse?: Maybe<string>;

  site_id?: Maybe<string>;

  site_name_long?: Maybe<string>;

  site_name?: Maybe<string>;

  start?: Maybe<Date>;

  tbd?: Maybe<string>;

  tentative_max_precision?: Maybe<string>;

  tentative?: Maybe<string>;
}

export interface MissionsFind {
  id?: Maybe<string>;

  manufacturer?: Maybe<string>;

  name?: Maybe<string>;

  payload_id?: Maybe<string>;
}

export interface PayloadsFind {
  apoapsis_km?: Maybe<number>;

  customer?: Maybe<string>;

  eccentricity?: Maybe<number>;

  epoch?: Maybe<Date>;

  inclination_deg?: Maybe<number>;

  lifespan_years?: Maybe<number>;

  longitude?: Maybe<number>;

  manufacturer?: Maybe<string>;

  mean_motion?: Maybe<number>;

  nationality?: Maybe<string>;

  norad_id?: Maybe<number>;

  orbit?: Maybe<string>;

  payload_id?: Maybe<string>;

  payload_type?: Maybe<string>;

  periapsis_km?: Maybe<number>;

  period_min?: Maybe<number>;

  raan?: Maybe<number>;

  reference_system?: Maybe<string>;

  regime?: Maybe<string>;

  reused?: Maybe<boolean>;

  semi_major_axis_km?: Maybe<number>;
}

export interface ShipsFind {
  id?: Maybe<string>;

  name?: Maybe<string>;

  model?: Maybe<string>;

  type?: Maybe<string>;

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

  landings?: Maybe<number>;

  missions?: Maybe<(Maybe<CapsuleMission>)[]>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  status?: Maybe<string>;

  type?: Maybe<string>;

  dragon?: Maybe<Dragon>;
}

export interface CapsuleMission {
  flight?: Maybe<number>;

  name?: Maybe<string>;
}

export interface Dragon {
  active?: Maybe<boolean>;

  crew_capacity?: Maybe<number>;

  description?: Maybe<string>;

  diameter?: Maybe<Distance>;

  dry_mass_kg?: Maybe<number>;

  dry_mass_lb?: Maybe<number>;

  first_flight?: Maybe<string>;

  heat_shield?: Maybe<DragonHeatShield>;

  height_w_trunk?: Maybe<Distance>;

  id?: Maybe<string>;

  launch_payload_mass?: Maybe<Mass>;

  launch_payload_vol?: Maybe<Volume>;

  name?: Maybe<string>;

  orbit_duration_yr?: Maybe<number>;

  pressurized_capsule?: Maybe<DragonPressurizedCapsule>;

  return_payload_mass?: Maybe<Mass>;

  return_payload_vol?: Maybe<Volume>;

  sidewall_angle_deg?: Maybe<number>;

  thrusters?: Maybe<(Maybe<DragonThrust>)[]>;

  trunk?: Maybe<DragonTrunk>;

  type?: Maybe<string>;

  wikipedia?: Maybe<string>;
}

export interface Distance {
  feet?: Maybe<number>;

  meters?: Maybe<number>;
}

export interface DragonHeatShield {
  dev_partner?: Maybe<string>;

  material?: Maybe<string>;

  size_meters?: Maybe<number>;

  temp_degrees?: Maybe<number>;
}

export interface Mass {
  kg?: Maybe<number>;

  lb?: Maybe<number>;
}

export interface Volume {
  cubic_feet?: Maybe<number>;

  cubic_meters?: Maybe<number>;
}

export interface DragonPressurizedCapsule {
  payload_volume?: Maybe<Volume>;
}

export interface DragonThrust {
  amount?: Maybe<number>;

  fuel_1?: Maybe<string>;

  fuel_2?: Maybe<string>;

  pods?: Maybe<number>;

  thrust?: Maybe<Force>;

  type?: Maybe<string>;
}

export interface Force {
  kN?: Maybe<number>;

  lbf?: Maybe<number>;
}

export interface DragonTrunk {
  cargo?: Maybe<DragonTrunkCargo>;

  trunk_volume?: Maybe<Volume>;
}

export interface DragonTrunkCargo {
  solar_array?: Maybe<number>;

  unpressurized_cargo?: Maybe<boolean>;
}

export interface Info {
  ceo?: Maybe<string>;

  coo?: Maybe<string>;

  cto_propulsion?: Maybe<string>;

  cto?: Maybe<string>;

  employees?: Maybe<number>;

  founded?: Maybe<number>;

  founder?: Maybe<string>;

  headquarters?: Maybe<Address>;

  launch_sites?: Maybe<number>;

  links?: Maybe<InfoLinks>;

  name?: Maybe<string>;

  summary?: Maybe<string>;

  test_sites?: Maybe<number>;

  valuation?: Maybe<number>;

  vehicles?: Maybe<number>;
}

export interface Address {
  address?: Maybe<string>;

  city?: Maybe<string>;

  state?: Maybe<string>;
}

export interface InfoLinks {
  elon_twitter?: Maybe<string>;

  flickr?: Maybe<string>;

  twitter?: Maybe<string>;

  website?: Maybe<string>;
}

export interface Core {
  asds_attempts?: Maybe<number>;

  asds_landings?: Maybe<number>;

  block?: Maybe<number>;

  id?: Maybe<string>;

  missions?: Maybe<(Maybe<CapsuleMission>)[]>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  rtls_attempts?: Maybe<number>;

  rtls_landings?: Maybe<number>;

  status?: Maybe<string>;

  water_landing?: Maybe<boolean>;
}

export interface History {
  details?: Maybe<string>;

  event_date_unix?: Maybe<Date>;

  event_date_utc?: Maybe<Date>;

  id?: Maybe<string>;

  links?: Maybe<Link>;

  title?: Maybe<string>;

  flight?: Maybe<Launch>;
}

export interface Link {
  article?: Maybe<string>;

  reddit?: Maybe<string>;

  wikipedia?: Maybe<string>;
}

export interface Launch {
  details?: Maybe<string>;

  id?: Maybe<string>;

  is_tentative?: Maybe<boolean>;

  launch_date_local?: Maybe<Date>;

  launch_date_unix?: Maybe<Date>;

  launch_date_utc?: Maybe<Date>;

  launch_site?: Maybe<LaunchSite>;

  launch_success?: Maybe<boolean>;

  launch_year?: Maybe<string>;

  links?: Maybe<LaunchLinks>;

  mission_id?: Maybe<(Maybe<string>)[]>;

  mission_name?: Maybe<string>;

  rocket?: Maybe<LaunchRocket>;

  static_fire_date_unix?: Maybe<Date>;

  static_fire_date_utc?: Maybe<Date>;

  telemetry?: Maybe<LaunchTelemetry>;

  tentative_max_precision?: Maybe<string>;

  upcoming?: Maybe<boolean>;

  ships?: Maybe<(Maybe<Ship>)[]>;
}

export interface LaunchSite {
  site_id?: Maybe<string>;

  site_name_long?: Maybe<string>;

  site_name?: Maybe<string>;
}

export interface LaunchLinks {
  article_link?: Maybe<string>;

  flickr_images?: Maybe<(Maybe<string>)[]>;

  mission_patch_small?: Maybe<string>;

  mission_patch?: Maybe<string>;

  presskit?: Maybe<string>;

  reddit_campaign?: Maybe<string>;

  reddit_launch?: Maybe<string>;

  reddit_media?: Maybe<string>;

  reddit_recovery?: Maybe<string>;

  video_link?: Maybe<string>;

  wikipedia?: Maybe<string>;
}

export interface LaunchRocket {
  fairings?: Maybe<LaunchRocketFairings>;

  first_stage?: Maybe<LaunchRocketFirstStage>;

  rocket_name?: Maybe<string>;

  rocket_type?: Maybe<string>;

  rocket?: Maybe<Rocket>;

  second_stage?: Maybe<LaunchRocketSecondStage>;
}

export interface LaunchRocketFairings {
  recovered?: Maybe<boolean>;

  recovery_attempt?: Maybe<boolean>;

  reused?: Maybe<boolean>;

  ship?: Maybe<string>;
}

export interface LaunchRocketFirstStage {
  cores?: Maybe<(Maybe<LaunchRocketFirstStageCore>)[]>;
}

export interface LaunchRocketFirstStageCore {
  block?: Maybe<number>;

  core?: Maybe<Core>;

  flight?: Maybe<number>;

  gridfins?: Maybe<boolean>;

  land_success?: Maybe<boolean>;

  landing_intent?: Maybe<boolean>;

  landing_type?: Maybe<string>;

  landing_vehicle?: Maybe<string>;

  legs?: Maybe<boolean>;

  reused?: Maybe<boolean>;
}

export interface Rocket {
  active?: Maybe<boolean>;

  boosters?: Maybe<number>;

  company?: Maybe<string>;

  cost_per_launch?: Maybe<number>;

  country?: Maybe<string>;

  description?: Maybe<string>;

  diameter?: Maybe<Distance>;

  engines?: Maybe<RocketEngines>;

  first_flight?: Maybe<Date>;

  first_stage?: Maybe<RocketFirstStage>;

  height?: Maybe<Distance>;

  id?: Maybe<string>;

  landing_legs?: Maybe<RocketLandingLegs>;

  mass?: Maybe<Mass>;

  name?: Maybe<string>;

  payload_weights?: Maybe<(Maybe<RocketPayloadWeight>)[]>;

  second_stage?: Maybe<RocketSecondStage>;

  stages?: Maybe<number>;

  success_rate_pct?: Maybe<number>;

  type?: Maybe<string>;

  wikipedia?: Maybe<string>;
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

export interface RocketFirstStage {
  burn_time_sec?: Maybe<number>;

  engines?: Maybe<number>;

  fuel_amount_tons?: Maybe<number>;

  reusable?: Maybe<boolean>;

  thrust_sea_level?: Maybe<Force>;

  thrust_vacuum?: Maybe<Force>;
}

export interface RocketLandingLegs {
  number?: Maybe<number>;

  material?: Maybe<string>;
}

export interface RocketPayloadWeight {
  id?: Maybe<string>;

  kg?: Maybe<number>;

  lb?: Maybe<number>;

  name?: Maybe<string>;
}

export interface RocketSecondStage {
  burn_time_sec?: Maybe<number>;

  engines?: Maybe<number>;

  fuel_amount_tons?: Maybe<number>;

  payloads?: Maybe<RocketSecondStagePayloads>;

  thrust?: Maybe<Force>;
}

export interface RocketSecondStagePayloads {
  option_1?: Maybe<string>;

  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
}

export interface RocketSecondStagePayloadCompositeFairing {
  height?: Maybe<Distance>;

  diameter?: Maybe<Distance>;
}

export interface LaunchRocketSecondStage {
  block?: Maybe<number>;

  payloads?: Maybe<(Maybe<Payload>)[]>;
}

export interface Payload {
  customers?: Maybe<(Maybe<string>)[]>;

  id?: Maybe<string>;

  manufacturer?: Maybe<string>;

  nationality?: Maybe<string>;

  norad_id?: Maybe<(Maybe<number>)[]>;

  orbit_params?: Maybe<PayloadOrbitParams>;

  orbit?: Maybe<string>;

  payload_mass_kg?: Maybe<number>;

  payload_mass_lbs?: Maybe<number>;

  payload_type?: Maybe<string>;

  reused?: Maybe<boolean>;
}

export interface PayloadOrbitParams {
  apoapsis_km?: Maybe<number>;

  arg_of_pericenter?: Maybe<number>;

  eccentricity?: Maybe<number>;

  epoch?: Maybe<Date>;

  inclination_deg?: Maybe<number>;

  lifespan_years?: Maybe<number>;

  longitude?: Maybe<number>;

  mean_anomaly?: Maybe<number>;

  mean_motion?: Maybe<number>;

  periapsis_km?: Maybe<number>;

  period_min?: Maybe<number>;

  raan?: Maybe<number>;

  reference_system?: Maybe<string>;

  regime?: Maybe<string>;

  semi_major_axis_km?: Maybe<number>;
}

export interface LaunchTelemetry {
  flight_club?: Maybe<string>;
}

export interface Ship {
  abs?: Maybe<number>;

  active?: Maybe<boolean>;

  attempted_landings?: Maybe<number>;

  class?: Maybe<number>;

  course_deg?: Maybe<number>;

  home_port?: Maybe<string>;

  id?: Maybe<string>;

  image?: Maybe<string>;

  imo?: Maybe<number>;

  missions?: Maybe<(Maybe<ShipMission>)[]>;

  mmsi?: Maybe<number>;

  model?: Maybe<string>;

  name?: Maybe<string>;

  position?: Maybe<ShipLocation>;

  roles?: Maybe<(Maybe<string>)[]>;

  speed_kn?: Maybe<number>;

  status?: Maybe<string>;

  successful_landings?: Maybe<number>;

  type?: Maybe<string>;

  url?: Maybe<string>;

  weight_kg?: Maybe<number>;

  weight_lbs?: Maybe<number>;

  year_built?: Maybe<number>;
}

export interface ShipMission {
  flight?: Maybe<string>;

  name?: Maybe<string>;
}

export interface ShipLocation {
  latitude?: Maybe<number>;

  longitude?: Maybe<number>;
}

export interface Landpad {
  attempted_landings?: Maybe<string>;

  details?: Maybe<string>;

  full_name?: Maybe<string>;

  id?: Maybe<string>;

  landing_type?: Maybe<string>;

  location?: Maybe<Location>;

  status?: Maybe<string>;

  successful_landings?: Maybe<string>;

  wikipedia?: Maybe<string>;
}

export interface Location {
  latitude?: Maybe<number>;

  longitude?: Maybe<number>;

  name?: Maybe<string>;

  region?: Maybe<string>;
}

export interface Launchpad {
  attempted_launches?: Maybe<number>;

  details?: Maybe<string>;

  id?: Maybe<string>;

  location?: Maybe<Location>;

  name?: Maybe<string>;

  status?: Maybe<string>;

  successful_launches?: Maybe<number>;

  vehicles_launched?: Maybe<(Maybe<Rocket>)[]>;

  wikipedia?: Maybe<string>;
}

export interface Mission {
  description?: Maybe<string>;

  id?: Maybe<string>;

  manufacturers?: Maybe<(Maybe<string>)[]>;

  name?: Maybe<string>;

  twitter?: Maybe<string>;

  website?: Maybe<string>;

  wikipedia?: Maybe<string>;

  payloads?: Maybe<(Maybe<Payload>)[]>;
}

export interface Roadster {
  apoapsis_au?: Maybe<number>;

  details?: Maybe<string>;

  earth_distance_km?: Maybe<number>;

  earth_distance_mi?: Maybe<number>;

  eccentricity?: Maybe<number>;

  epoch_jd?: Maybe<number>;

  inclination?: Maybe<number>;

  launch_date_unix?: Maybe<Date>;

  launch_date_utc?: Maybe<Date>;

  launch_mass_kg?: Maybe<number>;

  launch_mass_lbs?: Maybe<number>;

  longitude?: Maybe<number>;

  mars_distance_km?: Maybe<number>;

  mars_distance_mi?: Maybe<number>;

  name?: Maybe<string>;

  norad_id?: Maybe<number>;

  orbit_type?: Maybe<number>;

  periapsis_arg?: Maybe<number>;

  periapsis_au?: Maybe<number>;

  period_days?: Maybe<number>;

  semi_major_axis_au?: Maybe<number>;

  speed_kph?: Maybe<number>;

  speed_mph?: Maybe<number>;

  wikipedia?: Maybe<string>;
}

export interface Mutation {}

export interface Subscription {}

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
  id: string;
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
  id: string;
}
export interface MissionsQueryArgs {
  find?: Maybe<MissionsFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface MissionQueryArgs {
  id: string;
}
export interface PayloadsQueryArgs {
  find?: Maybe<PayloadsFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface PayloadQueryArgs {
  id: string;
}
export interface RocketsQueryArgs {
  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface RocketQueryArgs {
  id: string;
}
export interface ShipsQueryArgs {
  find?: Maybe<ShipsFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface ShipQueryArgs {
  id: string;
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
    id: string;
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
    id: string;
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
    id: string;
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
    id: string;
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
    id: string;
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
    id: string;
  }
}

export namespace CapsuleResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Capsule> {
    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    landings?: LandingsResolver<Maybe<number>, TypeParent, Context>;

    missions?: MissionsResolver<
      Maybe<(Maybe<CapsuleMission>)[]>,
      TypeParent,
      Context
    >;

    original_launch?: OriginalLaunchResolver<Maybe<Date>, TypeParent, Context>;

    reuse_count?: ReuseCountResolver<Maybe<number>, TypeParent, Context>;

    status?: StatusResolver<Maybe<string>, TypeParent, Context>;

    type?: TypeResolver<Maybe<string>, TypeParent, Context>;

    dragon?: DragonResolver<Maybe<Dragon>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LandingsResolver<
    R = Maybe<number>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionsResolver<
    R = Maybe<(Maybe<CapsuleMission>)[]>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OriginalLaunchResolver<
    R = Maybe<Date>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ReuseCountResolver<
    R = Maybe<number>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DragonResolver<
    R = Maybe<Dragon>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace CapsuleMissionResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = CapsuleMission> {
    flight?: FlightResolver<Maybe<number>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;
  }

  export type FlightResolver<
    R = Maybe<number>,
    Parent = CapsuleMission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = CapsuleMission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace DragonResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Dragon> {
    active?: ActiveResolver<Maybe<boolean>, TypeParent, Context>;

    crew_capacity?: CrewCapacityResolver<Maybe<number>, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;

    diameter?: DiameterResolver<Maybe<Distance>, TypeParent, Context>;

    dry_mass_kg?: DryMassKgResolver<Maybe<number>, TypeParent, Context>;

    dry_mass_lb?: DryMassLbResolver<Maybe<number>, TypeParent, Context>;

    first_flight?: FirstFlightResolver<Maybe<string>, TypeParent, Context>;

    heat_shield?: HeatShieldResolver<
      Maybe<DragonHeatShield>,
      TypeParent,
      Context
    >;

    height_w_trunk?: HeightWTrunkResolver<Maybe<Distance>, TypeParent, Context>;

    id?: IdResolver<Maybe<string>, TypeParent, Context>;

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

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    orbit_duration_yr?: OrbitDurationYrResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    pressurized_capsule?: PressurizedCapsuleResolver<
      Maybe<DragonPressurizedCapsule>,
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

    sidewall_angle_deg?: SidewallAngleDegResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    thrusters?: ThrustersResolver<
      Maybe<(Maybe<DragonThrust>)[]>,
      TypeParent,
      Context
    >;

    trunk?: TrunkResolver<Maybe<DragonTrunk>, TypeParent, Context>;

    type?: TypeResolver<Maybe<string>, TypeParent, Context>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;
  }

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
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DiameterResolver<
    R = Maybe<Distance>,
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
  export type HeightWTrunkResolver<
    R = Maybe<Distance>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Maybe<string>,
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
  export type NameResolver<
    R = Maybe<string>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OrbitDurationYrResolver<
    R = Maybe<number>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PressurizedCapsuleResolver<
    R = Maybe<DragonPressurizedCapsule>,
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
  export type SidewallAngleDegResolver<
    R = Maybe<number>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ThrustersResolver<
    R = Maybe<(Maybe<DragonThrust>)[]>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TrunkResolver<
    R = Maybe<DragonTrunk>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Dragon,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace DistanceResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Distance> {
    feet?: FeetResolver<Maybe<number>, TypeParent, Context>;

    meters?: MetersResolver<Maybe<number>, TypeParent, Context>;
  }

  export type FeetResolver<
    R = Maybe<number>,
    Parent = Distance,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MetersResolver<
    R = Maybe<number>,
    Parent = Distance,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace DragonHeatShieldResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = DragonHeatShield
  > {
    dev_partner?: DevPartnerResolver<Maybe<string>, TypeParent, Context>;

    material?: MaterialResolver<Maybe<string>, TypeParent, Context>;

    size_meters?: SizeMetersResolver<Maybe<number>, TypeParent, Context>;

    temp_degrees?: TempDegreesResolver<Maybe<number>, TypeParent, Context>;
  }

  export type DevPartnerResolver<
    R = Maybe<string>,
    Parent = DragonHeatShield,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
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
    cubic_feet?: CubicFeetResolver<Maybe<number>, TypeParent, Context>;

    cubic_meters?: CubicMetersResolver<Maybe<number>, TypeParent, Context>;
  }

  export type CubicFeetResolver<
    R = Maybe<number>,
    Parent = Volume,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CubicMetersResolver<
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

export namespace DragonThrustResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = DragonThrust> {
    amount?: AmountResolver<Maybe<number>, TypeParent, Context>;

    fuel_1?: Fuel_1Resolver<Maybe<string>, TypeParent, Context>;

    fuel_2?: Fuel_2Resolver<Maybe<string>, TypeParent, Context>;

    pods?: PodsResolver<Maybe<number>, TypeParent, Context>;

    thrust?: ThrustResolver<Maybe<Force>, TypeParent, Context>;

    type?: TypeResolver<Maybe<string>, TypeParent, Context>;
  }

  export type AmountResolver<
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
  export type PodsResolver<
    R = Maybe<number>,
    Parent = DragonThrust,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ThrustResolver<
    R = Maybe<Force>,
    Parent = DragonThrust,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = Maybe<string>,
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

export namespace DragonTrunkResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = DragonTrunk> {
    cargo?: CargoResolver<Maybe<DragonTrunkCargo>, TypeParent, Context>;

    trunk_volume?: TrunkVolumeResolver<Maybe<Volume>, TypeParent, Context>;
  }

  export type CargoResolver<
    R = Maybe<DragonTrunkCargo>,
    Parent = DragonTrunk,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TrunkVolumeResolver<
    R = Maybe<Volume>,
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

export namespace InfoResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Info> {
    ceo?: CeoResolver<Maybe<string>, TypeParent, Context>;

    coo?: CooResolver<Maybe<string>, TypeParent, Context>;

    cto_propulsion?: CtoPropulsionResolver<Maybe<string>, TypeParent, Context>;

    cto?: CtoResolver<Maybe<string>, TypeParent, Context>;

    employees?: EmployeesResolver<Maybe<number>, TypeParent, Context>;

    founded?: FoundedResolver<Maybe<number>, TypeParent, Context>;

    founder?: FounderResolver<Maybe<string>, TypeParent, Context>;

    headquarters?: HeadquartersResolver<Maybe<Address>, TypeParent, Context>;

    launch_sites?: LaunchSitesResolver<Maybe<number>, TypeParent, Context>;

    links?: LinksResolver<Maybe<InfoLinks>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    summary?: SummaryResolver<Maybe<string>, TypeParent, Context>;

    test_sites?: TestSitesResolver<Maybe<number>, TypeParent, Context>;

    valuation?: ValuationResolver<Maybe<number>, TypeParent, Context>;

    vehicles?: VehiclesResolver<Maybe<number>, TypeParent, Context>;
  }

  export type CeoResolver<
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
  export type CtoResolver<
    R = Maybe<string>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EmployeesResolver<
    R = Maybe<number>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FoundedResolver<
    R = Maybe<number>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FounderResolver<
    R = Maybe<string>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type HeadquartersResolver<
    R = Maybe<Address>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchSitesResolver<
    R = Maybe<number>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LinksResolver<
    R = Maybe<InfoLinks>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SummaryResolver<
    R = Maybe<string>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TestSitesResolver<
    R = Maybe<number>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ValuationResolver<
    R = Maybe<number>,
    Parent = Info,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type VehiclesResolver<
    R = Maybe<number>,
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
    elon_twitter?: ElonTwitterResolver<Maybe<string>, TypeParent, Context>;

    flickr?: FlickrResolver<Maybe<string>, TypeParent, Context>;

    twitter?: TwitterResolver<Maybe<string>, TypeParent, Context>;

    website?: WebsiteResolver<Maybe<string>, TypeParent, Context>;
  }

  export type ElonTwitterResolver<
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
  export type WebsiteResolver<
    R = Maybe<string>,
    Parent = InfoLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace CoreResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Core> {
    asds_attempts?: AsdsAttemptsResolver<Maybe<number>, TypeParent, Context>;

    asds_landings?: AsdsLandingsResolver<Maybe<number>, TypeParent, Context>;

    block?: BlockResolver<Maybe<number>, TypeParent, Context>;

    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    missions?: MissionsResolver<
      Maybe<(Maybe<CapsuleMission>)[]>,
      TypeParent,
      Context
    >;

    original_launch?: OriginalLaunchResolver<Maybe<Date>, TypeParent, Context>;

    reuse_count?: ReuseCountResolver<Maybe<number>, TypeParent, Context>;

    rtls_attempts?: RtlsAttemptsResolver<Maybe<number>, TypeParent, Context>;

    rtls_landings?: RtlsLandingsResolver<Maybe<number>, TypeParent, Context>;

    status?: StatusResolver<Maybe<string>, TypeParent, Context>;

    water_landing?: WaterLandingResolver<Maybe<boolean>, TypeParent, Context>;
  }

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
  export type BlockResolver<
    R = Maybe<number>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionsResolver<
    R = Maybe<(Maybe<CapsuleMission>)[]>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OriginalLaunchResolver<
    R = Maybe<Date>,
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
  export type StatusResolver<
    R = Maybe<string>,
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
    details?: DetailsResolver<Maybe<string>, TypeParent, Context>;

    event_date_unix?: EventDateUnixResolver<Maybe<Date>, TypeParent, Context>;

    event_date_utc?: EventDateUtcResolver<Maybe<Date>, TypeParent, Context>;

    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    links?: LinksResolver<Maybe<Link>, TypeParent, Context>;

    title?: TitleResolver<Maybe<string>, TypeParent, Context>;

    flight?: FlightResolver<Maybe<Launch>, TypeParent, Context>;
  }

  export type DetailsResolver<
    R = Maybe<string>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EventDateUnixResolver<
    R = Maybe<Date>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EventDateUtcResolver<
    R = Maybe<Date>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LinksResolver<
    R = Maybe<Link>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = Maybe<string>,
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
    article?: ArticleResolver<Maybe<string>, TypeParent, Context>;

    reddit?: RedditResolver<Maybe<string>, TypeParent, Context>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;
  }

  export type ArticleResolver<
    R = Maybe<string>,
    Parent = Link,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RedditResolver<
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
    details?: DetailsResolver<Maybe<string>, TypeParent, Context>;

    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    is_tentative?: IsTentativeResolver<Maybe<boolean>, TypeParent, Context>;

    launch_date_local?: LaunchDateLocalResolver<
      Maybe<Date>,
      TypeParent,
      Context
    >;

    launch_date_unix?: LaunchDateUnixResolver<Maybe<Date>, TypeParent, Context>;

    launch_date_utc?: LaunchDateUtcResolver<Maybe<Date>, TypeParent, Context>;

    launch_site?: LaunchSiteResolver<Maybe<LaunchSite>, TypeParent, Context>;

    launch_success?: LaunchSuccessResolver<Maybe<boolean>, TypeParent, Context>;

    launch_year?: LaunchYearResolver<Maybe<string>, TypeParent, Context>;

    links?: LinksResolver<Maybe<LaunchLinks>, TypeParent, Context>;

    mission_id?: MissionIdResolver<
      Maybe<(Maybe<string>)[]>,
      TypeParent,
      Context
    >;

    mission_name?: MissionNameResolver<Maybe<string>, TypeParent, Context>;

    rocket?: RocketResolver<Maybe<LaunchRocket>, TypeParent, Context>;

    static_fire_date_unix?: StaticFireDateUnixResolver<
      Maybe<Date>,
      TypeParent,
      Context
    >;

    static_fire_date_utc?: StaticFireDateUtcResolver<
      Maybe<Date>,
      TypeParent,
      Context
    >;

    telemetry?: TelemetryResolver<Maybe<LaunchTelemetry>, TypeParent, Context>;

    tentative_max_precision?: TentativeMaxPrecisionResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    upcoming?: UpcomingResolver<Maybe<boolean>, TypeParent, Context>;

    ships?: ShipsResolver<Maybe<(Maybe<Ship>)[]>, TypeParent, Context>;
  }

  export type DetailsResolver<
    R = Maybe<string>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IsTentativeResolver<
    R = Maybe<boolean>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchDateLocalResolver<
    R = Maybe<Date>,
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
  export type LaunchYearResolver<
    R = Maybe<string>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LinksResolver<
    R = Maybe<LaunchLinks>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionIdResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionNameResolver<
    R = Maybe<string>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RocketResolver<
    R = Maybe<LaunchRocket>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StaticFireDateUnixResolver<
    R = Maybe<Date>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StaticFireDateUtcResolver<
    R = Maybe<Date>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TelemetryResolver<
    R = Maybe<LaunchTelemetry>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TentativeMaxPrecisionResolver<
    R = Maybe<string>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type UpcomingResolver<
    R = Maybe<boolean>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ShipsResolver<
    R = Maybe<(Maybe<Ship>)[]>,
    Parent = Launch,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchSiteResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = LaunchSite> {
    site_id?: SiteIdResolver<Maybe<string>, TypeParent, Context>;

    site_name_long?: SiteNameLongResolver<Maybe<string>, TypeParent, Context>;

    site_name?: SiteNameResolver<Maybe<string>, TypeParent, Context>;
  }

  export type SiteIdResolver<
    R = Maybe<string>,
    Parent = LaunchSite,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SiteNameLongResolver<
    R = Maybe<string>,
    Parent = LaunchSite,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SiteNameResolver<
    R = Maybe<string>,
    Parent = LaunchSite,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchLinksResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = LaunchLinks> {
    article_link?: ArticleLinkResolver<Maybe<string>, TypeParent, Context>;

    flickr_images?: FlickrImagesResolver<
      Maybe<(Maybe<string>)[]>,
      TypeParent,
      Context
    >;

    mission_patch_small?: MissionPatchSmallResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    mission_patch?: MissionPatchResolver<Maybe<string>, TypeParent, Context>;

    presskit?: PresskitResolver<Maybe<string>, TypeParent, Context>;

    reddit_campaign?: RedditCampaignResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    reddit_launch?: RedditLaunchResolver<Maybe<string>, TypeParent, Context>;

    reddit_media?: RedditMediaResolver<Maybe<string>, TypeParent, Context>;

    reddit_recovery?: RedditRecoveryResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    video_link?: VideoLinkResolver<Maybe<string>, TypeParent, Context>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;
  }

  export type ArticleLinkResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FlickrImagesResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionPatchSmallResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionPatchResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PresskitResolver<
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
  export type RedditMediaResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RedditRecoveryResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type VideoLinkResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchRocketResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = LaunchRocket> {
    fairings?: FairingsResolver<
      Maybe<LaunchRocketFairings>,
      TypeParent,
      Context
    >;

    first_stage?: FirstStageResolver<
      Maybe<LaunchRocketFirstStage>,
      TypeParent,
      Context
    >;

    rocket_name?: RocketNameResolver<Maybe<string>, TypeParent, Context>;

    rocket_type?: RocketTypeResolver<Maybe<string>, TypeParent, Context>;

    rocket?: RocketResolver<Maybe<Rocket>, TypeParent, Context>;

    second_stage?: SecondStageResolver<
      Maybe<LaunchRocketSecondStage>,
      TypeParent,
      Context
    >;
  }

  export type FairingsResolver<
    R = Maybe<LaunchRocketFairings>,
    Parent = LaunchRocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FirstStageResolver<
    R = Maybe<LaunchRocketFirstStage>,
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
  export type RocketResolver<
    R = Maybe<Rocket>,
    Parent = LaunchRocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SecondStageResolver<
    R = Maybe<LaunchRocketSecondStage>,
    Parent = LaunchRocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LaunchRocketFairingsResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = LaunchRocketFairings
  > {
    recovered?: RecoveredResolver<Maybe<boolean>, TypeParent, Context>;

    recovery_attempt?: RecoveryAttemptResolver<
      Maybe<boolean>,
      TypeParent,
      Context
    >;

    reused?: ReusedResolver<Maybe<boolean>, TypeParent, Context>;

    ship?: ShipResolver<Maybe<string>, TypeParent, Context>;
  }

  export type RecoveredResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFairings,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RecoveryAttemptResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFairings,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ReusedResolver<
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
    block?: BlockResolver<Maybe<number>, TypeParent, Context>;

    core?: CoreResolver<Maybe<Core>, TypeParent, Context>;

    flight?: FlightResolver<Maybe<number>, TypeParent, Context>;

    gridfins?: GridfinsResolver<Maybe<boolean>, TypeParent, Context>;

    land_success?: LandSuccessResolver<Maybe<boolean>, TypeParent, Context>;

    landing_intent?: LandingIntentResolver<Maybe<boolean>, TypeParent, Context>;

    landing_type?: LandingTypeResolver<Maybe<string>, TypeParent, Context>;

    landing_vehicle?: LandingVehicleResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    legs?: LegsResolver<Maybe<boolean>, TypeParent, Context>;

    reused?: ReusedResolver<Maybe<boolean>, TypeParent, Context>;
  }

  export type BlockResolver<
    R = Maybe<number>,
    Parent = LaunchRocketFirstStageCore,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
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
  export type GridfinsResolver<
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
}

export namespace RocketResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Rocket> {
    active?: ActiveResolver<Maybe<boolean>, TypeParent, Context>;

    boosters?: BoostersResolver<Maybe<number>, TypeParent, Context>;

    company?: CompanyResolver<Maybe<string>, TypeParent, Context>;

    cost_per_launch?: CostPerLaunchResolver<Maybe<number>, TypeParent, Context>;

    country?: CountryResolver<Maybe<string>, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;

    diameter?: DiameterResolver<Maybe<Distance>, TypeParent, Context>;

    engines?: EnginesResolver<Maybe<RocketEngines>, TypeParent, Context>;

    first_flight?: FirstFlightResolver<Maybe<Date>, TypeParent, Context>;

    first_stage?: FirstStageResolver<
      Maybe<RocketFirstStage>,
      TypeParent,
      Context
    >;

    height?: HeightResolver<Maybe<Distance>, TypeParent, Context>;

    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    landing_legs?: LandingLegsResolver<
      Maybe<RocketLandingLegs>,
      TypeParent,
      Context
    >;

    mass?: MassResolver<Maybe<Mass>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    payload_weights?: PayloadWeightsResolver<
      Maybe<(Maybe<RocketPayloadWeight>)[]>,
      TypeParent,
      Context
    >;

    second_stage?: SecondStageResolver<
      Maybe<RocketSecondStage>,
      TypeParent,
      Context
    >;

    stages?: StagesResolver<Maybe<number>, TypeParent, Context>;

    success_rate_pct?: SuccessRatePctResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    type?: TypeResolver<Maybe<string>, TypeParent, Context>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;
  }

  export type ActiveResolver<
    R = Maybe<boolean>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type BoostersResolver<
    R = Maybe<number>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CompanyResolver<
    R = Maybe<string>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CostPerLaunchResolver<
    R = Maybe<number>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CountryResolver<
    R = Maybe<string>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DiameterResolver<
    R = Maybe<Distance>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EnginesResolver<
    R = Maybe<RocketEngines>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FirstFlightResolver<
    R = Maybe<Date>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FirstStageResolver<
    R = Maybe<RocketFirstStage>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type HeightResolver<
    R = Maybe<Distance>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LandingLegsResolver<
    R = Maybe<RocketLandingLegs>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MassResolver<
    R = Maybe<Mass>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PayloadWeightsResolver<
    R = Maybe<(Maybe<RocketPayloadWeight>)[]>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SecondStageResolver<
    R = Maybe<RocketSecondStage>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StagesResolver<
    R = Maybe<number>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SuccessRatePctResolver<
    R = Maybe<number>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = Rocket,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Rocket,
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

export namespace RocketFirstStageResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = RocketFirstStage
  > {
    burn_time_sec?: BurnTimeSecResolver<Maybe<number>, TypeParent, Context>;

    engines?: EnginesResolver<Maybe<number>, TypeParent, Context>;

    fuel_amount_tons?: FuelAmountTonsResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    reusable?: ReusableResolver<Maybe<boolean>, TypeParent, Context>;

    thrust_sea_level?: ThrustSeaLevelResolver<
      Maybe<Force>,
      TypeParent,
      Context
    >;

    thrust_vacuum?: ThrustVacuumResolver<Maybe<Force>, TypeParent, Context>;
  }

  export type BurnTimeSecResolver<
    R = Maybe<number>,
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
  export type ReusableResolver<
    R = Maybe<boolean>,
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

export namespace RocketPayloadWeightResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = RocketPayloadWeight
  > {
    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    kg?: KgResolver<Maybe<number>, TypeParent, Context>;

    lb?: LbResolver<Maybe<number>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<
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
  export type NameResolver<
    R = Maybe<string>,
    Parent = RocketPayloadWeight,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace RocketSecondStageResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = RocketSecondStage
  > {
    burn_time_sec?: BurnTimeSecResolver<Maybe<number>, TypeParent, Context>;

    engines?: EnginesResolver<Maybe<number>, TypeParent, Context>;

    fuel_amount_tons?: FuelAmountTonsResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    payloads?: PayloadsResolver<
      Maybe<RocketSecondStagePayloads>,
      TypeParent,
      Context
    >;

    thrust?: ThrustResolver<Maybe<Force>, TypeParent, Context>;
  }

  export type BurnTimeSecResolver<
    R = Maybe<number>,
    Parent = RocketSecondStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
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
  export type PayloadsResolver<
    R = Maybe<RocketSecondStagePayloads>,
    Parent = RocketSecondStage,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ThrustResolver<
    R = Maybe<Force>,
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
    customers?: CustomersResolver<
      Maybe<(Maybe<string>)[]>,
      TypeParent,
      Context
    >;

    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    manufacturer?: ManufacturerResolver<Maybe<string>, TypeParent, Context>;

    nationality?: NationalityResolver<Maybe<string>, TypeParent, Context>;

    norad_id?: NoradIdResolver<Maybe<(Maybe<number>)[]>, TypeParent, Context>;

    orbit_params?: OrbitParamsResolver<
      Maybe<PayloadOrbitParams>,
      TypeParent,
      Context
    >;

    orbit?: OrbitResolver<Maybe<string>, TypeParent, Context>;

    payload_mass_kg?: PayloadMassKgResolver<Maybe<number>, TypeParent, Context>;

    payload_mass_lbs?: PayloadMassLbsResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    payload_type?: PayloadTypeResolver<Maybe<string>, TypeParent, Context>;

    reused?: ReusedResolver<Maybe<boolean>, TypeParent, Context>;
  }

  export type CustomersResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ManufacturerResolver<
    R = Maybe<string>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NationalityResolver<
    R = Maybe<string>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NoradIdResolver<
    R = Maybe<(Maybe<number>)[]>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OrbitParamsResolver<
    R = Maybe<PayloadOrbitParams>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OrbitResolver<
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
  export type PayloadTypeResolver<
    R = Maybe<string>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ReusedResolver<
    R = Maybe<boolean>,
    Parent = Payload,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace PayloadOrbitParamsResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = PayloadOrbitParams
  > {
    apoapsis_km?: ApoapsisKmResolver<Maybe<number>, TypeParent, Context>;

    arg_of_pericenter?: ArgOfPericenterResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    eccentricity?: EccentricityResolver<Maybe<number>, TypeParent, Context>;

    epoch?: EpochResolver<Maybe<Date>, TypeParent, Context>;

    inclination_deg?: InclinationDegResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    lifespan_years?: LifespanYearsResolver<Maybe<number>, TypeParent, Context>;

    longitude?: LongitudeResolver<Maybe<number>, TypeParent, Context>;

    mean_anomaly?: MeanAnomalyResolver<Maybe<number>, TypeParent, Context>;

    mean_motion?: MeanMotionResolver<Maybe<number>, TypeParent, Context>;

    periapsis_km?: PeriapsisKmResolver<Maybe<number>, TypeParent, Context>;

    period_min?: PeriodMinResolver<Maybe<number>, TypeParent, Context>;

    raan?: RaanResolver<Maybe<number>, TypeParent, Context>;

    reference_system?: ReferenceSystemResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    regime?: RegimeResolver<Maybe<string>, TypeParent, Context>;

    semi_major_axis_km?: SemiMajorAxisKmResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;
  }

  export type ApoapsisKmResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ArgOfPericenterResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EccentricityResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EpochResolver<
    R = Maybe<Date>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type InclinationDegResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LifespanYearsResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MeanAnomalyResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MeanMotionResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PeriapsisKmResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PeriodMinResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RaanResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
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
  export type SemiMajorAxisKmResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
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

export namespace ShipResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Ship> {
    abs?: AbsResolver<Maybe<number>, TypeParent, Context>;

    active?: ActiveResolver<Maybe<boolean>, TypeParent, Context>;

    attempted_landings?: AttemptedLandingsResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    class?: ClassResolver<Maybe<number>, TypeParent, Context>;

    course_deg?: CourseDegResolver<Maybe<number>, TypeParent, Context>;

    home_port?: HomePortResolver<Maybe<string>, TypeParent, Context>;

    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    image?: ImageResolver<Maybe<string>, TypeParent, Context>;

    imo?: ImoResolver<Maybe<number>, TypeParent, Context>;

    missions?: MissionsResolver<
      Maybe<(Maybe<ShipMission>)[]>,
      TypeParent,
      Context
    >;

    mmsi?: MmsiResolver<Maybe<number>, TypeParent, Context>;

    model?: ModelResolver<Maybe<string>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    position?: PositionResolver<Maybe<ShipLocation>, TypeParent, Context>;

    roles?: RolesResolver<Maybe<(Maybe<string>)[]>, TypeParent, Context>;

    speed_kn?: SpeedKnResolver<Maybe<number>, TypeParent, Context>;

    status?: StatusResolver<Maybe<string>, TypeParent, Context>;

    successful_landings?: SuccessfulLandingsResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    type?: TypeResolver<Maybe<string>, TypeParent, Context>;

    url?: UrlResolver<Maybe<string>, TypeParent, Context>;

    weight_kg?: WeightKgResolver<Maybe<number>, TypeParent, Context>;

    weight_lbs?: WeightLbsResolver<Maybe<number>, TypeParent, Context>;

    year_built?: YearBuiltResolver<Maybe<number>, TypeParent, Context>;
  }

  export type AbsResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ActiveResolver<
    R = Maybe<boolean>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type AttemptedLandingsResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ClassResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CourseDegResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type HomePortResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ImageResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ImoResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionsResolver<
    R = Maybe<(Maybe<ShipMission>)[]>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MmsiResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ModelResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PositionResolver<
    R = Maybe<ShipLocation>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RolesResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SpeedKnResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SuccessfulLandingsResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<
    R = Maybe<string>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WeightKgResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WeightLbsResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type YearBuiltResolver<
    R = Maybe<number>,
    Parent = Ship,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace ShipMissionResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = ShipMission> {
    flight?: FlightResolver<Maybe<string>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;
  }

  export type FlightResolver<
    R = Maybe<string>,
    Parent = ShipMission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = ShipMission,
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

export namespace LandpadResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Landpad> {
    attempted_landings?: AttemptedLandingsResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    details?: DetailsResolver<Maybe<string>, TypeParent, Context>;

    full_name?: FullNameResolver<Maybe<string>, TypeParent, Context>;

    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    landing_type?: LandingTypeResolver<Maybe<string>, TypeParent, Context>;

    location?: LocationResolver<Maybe<Location>, TypeParent, Context>;

    status?: StatusResolver<Maybe<string>, TypeParent, Context>;

    successful_landings?: SuccessfulLandingsResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;
  }

  export type AttemptedLandingsResolver<
    R = Maybe<string>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DetailsResolver<
    R = Maybe<string>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FullNameResolver<
    R = Maybe<string>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LandingTypeResolver<
    R = Maybe<string>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LocationResolver<
    R = Maybe<Location>,
    Parent = Landpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
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
}

export namespace LocationResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Location> {
    latitude?: LatitudeResolver<Maybe<number>, TypeParent, Context>;

    longitude?: LongitudeResolver<Maybe<number>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    region?: RegionResolver<Maybe<string>, TypeParent, Context>;
  }

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
}

export namespace LaunchpadResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Launchpad> {
    attempted_launches?: AttemptedLaunchesResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    details?: DetailsResolver<Maybe<string>, TypeParent, Context>;

    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    location?: LocationResolver<Maybe<Location>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    status?: StatusResolver<Maybe<string>, TypeParent, Context>;

    successful_launches?: SuccessfulLaunchesResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    vehicles_launched?: VehiclesLaunchedResolver<
      Maybe<(Maybe<Rocket>)[]>,
      TypeParent,
      Context
    >;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;
  }

  export type AttemptedLaunchesResolver<
    R = Maybe<number>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DetailsResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LocationResolver<
    R = Maybe<Location>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SuccessfulLaunchesResolver<
    R = Maybe<number>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type VehiclesLaunchedResolver<
    R = Maybe<(Maybe<Rocket>)[]>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace MissionResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Mission> {
    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;

    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    manufacturers?: ManufacturersResolver<
      Maybe<(Maybe<string>)[]>,
      TypeParent,
      Context
    >;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    twitter?: TwitterResolver<Maybe<string>, TypeParent, Context>;

    website?: WebsiteResolver<Maybe<string>, TypeParent, Context>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;

    payloads?: PayloadsResolver<Maybe<(Maybe<Payload>)[]>, TypeParent, Context>;
  }

  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ManufacturersResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TwitterResolver<
    R = Maybe<string>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WebsiteResolver<
    R = Maybe<string>,
    Parent = Mission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
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
    apoapsis_au?: ApoapsisAuResolver<Maybe<number>, TypeParent, Context>;

    details?: DetailsResolver<Maybe<string>, TypeParent, Context>;

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

    eccentricity?: EccentricityResolver<Maybe<number>, TypeParent, Context>;

    epoch_jd?: EpochJdResolver<Maybe<number>, TypeParent, Context>;

    inclination?: InclinationResolver<Maybe<number>, TypeParent, Context>;

    launch_date_unix?: LaunchDateUnixResolver<Maybe<Date>, TypeParent, Context>;

    launch_date_utc?: LaunchDateUtcResolver<Maybe<Date>, TypeParent, Context>;

    launch_mass_kg?: LaunchMassKgResolver<Maybe<number>, TypeParent, Context>;

    launch_mass_lbs?: LaunchMassLbsResolver<Maybe<number>, TypeParent, Context>;

    longitude?: LongitudeResolver<Maybe<number>, TypeParent, Context>;

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

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    norad_id?: NoradIdResolver<Maybe<number>, TypeParent, Context>;

    orbit_type?: OrbitTypeResolver<Maybe<number>, TypeParent, Context>;

    periapsis_arg?: PeriapsisArgResolver<Maybe<number>, TypeParent, Context>;

    periapsis_au?: PeriapsisAuResolver<Maybe<number>, TypeParent, Context>;

    period_days?: PeriodDaysResolver<Maybe<number>, TypeParent, Context>;

    semi_major_axis_au?: SemiMajorAxisAuResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    speed_kph?: SpeedKphResolver<Maybe<number>, TypeParent, Context>;

    speed_mph?: SpeedMphResolver<Maybe<number>, TypeParent, Context>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;
  }

  export type ApoapsisAuResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DetailsResolver<
    R = Maybe<string>,
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
  export type EccentricityResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EpochJdResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type InclinationResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchDateUnixResolver<
    R = Maybe<Date>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LaunchDateUtcResolver<
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
  export type LongitudeResolver<
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
  export type NameResolver<
    R = Maybe<string>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NoradIdResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OrbitTypeResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PeriapsisArgResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PeriapsisAuResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PeriodDaysResolver<
    R = Maybe<number>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SemiMajorAxisAuResolver<
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
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Roadster,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {}
}

export namespace SubscriptionResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {}
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

export type RateLimitDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  RateLimitDirectiveArgs,
  MyContext
>;
export interface RateLimitDirectiveArgs {
  max?: Maybe<number>;

  window?: Maybe<string>;

  message?: Maybe<string>;

  identityArgs?: Maybe<(Maybe<string>)[]>;
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

export interface IResolvers<Context = MyContext> {
  Query?: QueryResolvers.Resolvers<Context>;
  Capsule?: CapsuleResolvers.Resolvers<Context>;
  CapsuleMission?: CapsuleMissionResolvers.Resolvers<Context>;
  Dragon?: DragonResolvers.Resolvers<Context>;
  Distance?: DistanceResolvers.Resolvers<Context>;
  DragonHeatShield?: DragonHeatShieldResolvers.Resolvers<Context>;
  Mass?: MassResolvers.Resolvers<Context>;
  Volume?: VolumeResolvers.Resolvers<Context>;
  DragonPressurizedCapsule?: DragonPressurizedCapsuleResolvers.Resolvers<
    Context
  >;
  DragonThrust?: DragonThrustResolvers.Resolvers<Context>;
  Force?: ForceResolvers.Resolvers<Context>;
  DragonTrunk?: DragonTrunkResolvers.Resolvers<Context>;
  DragonTrunkCargo?: DragonTrunkCargoResolvers.Resolvers<Context>;
  Info?: InfoResolvers.Resolvers<Context>;
  Address?: AddressResolvers.Resolvers<Context>;
  InfoLinks?: InfoLinksResolvers.Resolvers<Context>;
  Core?: CoreResolvers.Resolvers<Context>;
  History?: HistoryResolvers.Resolvers<Context>;
  Link?: LinkResolvers.Resolvers<Context>;
  Launch?: LaunchResolvers.Resolvers<Context>;
  LaunchSite?: LaunchSiteResolvers.Resolvers<Context>;
  LaunchLinks?: LaunchLinksResolvers.Resolvers<Context>;
  LaunchRocket?: LaunchRocketResolvers.Resolvers<Context>;
  LaunchRocketFairings?: LaunchRocketFairingsResolvers.Resolvers<Context>;
  LaunchRocketFirstStage?: LaunchRocketFirstStageResolvers.Resolvers<Context>;
  LaunchRocketFirstStageCore?: LaunchRocketFirstStageCoreResolvers.Resolvers<
    Context
  >;
  Rocket?: RocketResolvers.Resolvers<Context>;
  RocketEngines?: RocketEnginesResolvers.Resolvers<Context>;
  RocketFirstStage?: RocketFirstStageResolvers.Resolvers<Context>;
  RocketLandingLegs?: RocketLandingLegsResolvers.Resolvers<Context>;
  RocketPayloadWeight?: RocketPayloadWeightResolvers.Resolvers<Context>;
  RocketSecondStage?: RocketSecondStageResolvers.Resolvers<Context>;
  RocketSecondStagePayloads?: RocketSecondStagePayloadsResolvers.Resolvers<
    Context
  >;
  RocketSecondStagePayloadCompositeFairing?: RocketSecondStagePayloadCompositeFairingResolvers.Resolvers<
    Context
  >;
  LaunchRocketSecondStage?: LaunchRocketSecondStageResolvers.Resolvers<Context>;
  Payload?: PayloadResolvers.Resolvers<Context>;
  PayloadOrbitParams?: PayloadOrbitParamsResolvers.Resolvers<Context>;
  LaunchTelemetry?: LaunchTelemetryResolvers.Resolvers<Context>;
  Ship?: ShipResolvers.Resolvers<Context>;
  ShipMission?: ShipMissionResolvers.Resolvers<Context>;
  ShipLocation?: ShipLocationResolvers.Resolvers<Context>;
  Landpad?: LandpadResolvers.Resolvers<Context>;
  Location?: LocationResolvers.Resolvers<Context>;
  Launchpad?: LaunchpadResolvers.Resolvers<Context>;
  Mission?: MissionResolvers.Resolvers<Context>;
  Roadster?: RoadsterResolvers.Resolvers<Context>;
  Mutation?: MutationResolvers.Resolvers<Context>;
  Subscription?: SubscriptionResolvers.Resolvers<Context>;
  CoreMission?: CoreMissionResolvers.Resolvers<Context>;
  Date?: GraphQLScalarType;
  ObjectId?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
  rateLimit?: RateLimitDirectiveResolver<Result>;
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
