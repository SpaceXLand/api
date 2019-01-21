export const LaunchRocket = {
  rocket: async ({ rocket_id }, args, context) => {
    const [data] = await context.db
      .collection('rocket')
      .find({ id: rocket_id })
      .limit(1)
      .toArray();
    return data;
  }
};
