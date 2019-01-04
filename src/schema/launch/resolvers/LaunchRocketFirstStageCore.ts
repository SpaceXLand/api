export const LaunchRocketFirstStageCore = {
  core: async ({ core_serial }, args, context) => {
    const [data] = await context.db
      .collection('core')
      .find({ core_serial })
      .project(context.project({ id: true }))
      .limit(1)
      .toArray();
    return data;
  }
};
