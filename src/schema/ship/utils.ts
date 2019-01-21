export const collection = 'ship';
export const url = `/v3/ships`;

export const parseShips = ship => ({
  ...ship,
  id: ship.ship_id,
  name: ship.ship_name,
  model: ship.ship_model,
  type: ship.ship_type
});
