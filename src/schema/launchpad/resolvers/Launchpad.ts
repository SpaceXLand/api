export const Launchpad = {
  vehicles_launched: async ({ vehicles_launched }, args, context) => {
    return vehicles_launched.map(async name => {
      const [data] = await context.db
        .collection('rocket')
        .find({ name })
        .limit(1)
        .toArray();
      return data;
    });
  }
};
