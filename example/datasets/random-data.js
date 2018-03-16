function genRandomTree(N = 300) {
  return {
    nodes: [...Array(N).keys()].map(i => ({ id: i })),
      links: [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      source: id,
      target: Math.round(Math.random() * (id-1))
    }))
  };
}