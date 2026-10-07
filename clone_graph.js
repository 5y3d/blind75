const cloneGraph = function(node) {
  const nodeMap = new Map();

  const dfs = (node) => {
    const existingClone = nodeMap.get(node);
      if (existingClone) { return existingClone }

      let clone = new _Node(node.val);
      nodeMap.set(node, clone);
      for (let neighbor of node.neighbors) {
        clone.neighbors.push(dfs(neighbor))
      }

      return clone 
    }

  if (node) { 
    dfs(node);
    return nodeMap.get(node);
  } else {
    return;
  }
};