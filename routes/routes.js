export const routes = {
  root: {
    landing: "/",
    buildings: {
      root: "/buildings",
      details: (id) => `/buildings/${id}`,
    },
  },
};
