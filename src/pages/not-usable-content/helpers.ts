export const getNotUsableContent = () => {
  // Heavy calculation functions that will be part of the chunk
  const calculateComplexValue = (base: number, iterations: number): number => {
    let result = base;
    for (let i = 0; i < iterations; i++) {
      result = Math.pow(result, 1.01) + Math.sin(result) * Math.cos(i);
    }
    return result;
  };

  const generateLargeArray = (size: number): number[] => {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(calculateComplexValue(i, 100));
    }
    return array;
  };

  const sortComplexArray = (arr: number[]): number[] => {
    return [...arr].sort((a, b) => a - b);
  };

  const filterArray = (arr: number[], threshold: number): number[] => {
    return arr.filter((item) => item > threshold);
  };

  const mapArray = (arr: number[]): string[] => {
    return arr.map((item) => `Item: ${item.toFixed(2)}`);
  };

  const reduceArray = (arr: number[]): number => {
    return arr.reduce((acc, curr) => acc + curr, 0);
  };

  // Create a large set of dummy data processing functions
  const processDataSet1 = () => {
    const data = generateLargeArray(500);
    const sorted = sortComplexArray(data);
    const filtered = filterArray(sorted, 1000);
    const mapped = mapArray(filtered);
    return mapped.slice(0, 100).join(", ");
  };

  const processDataSet2 = () => {
    const data = generateLargeArray(600);
    const sorted = sortComplexArray(data);
    const filtered = filterArray(sorted, 1500);
    const sum = reduceArray(filtered);
    return `Sum: ${sum.toFixed(2)}`;
  };

  const processDataSet3 = () => {
    const data = generateLargeArray(700);
    const sorted = sortComplexArray(data);
    const filtered = filterArray(sorted, 2000);
    const mapped = mapArray(filtered);
    return mapped.slice(0, 150).join(", ");
  };

  const processDataSet4 = () => {
    const data = generateLargeArray(800);
    const sorted = sortComplexArray(data);
    const filtered = filterArray(sorted, 2500);
    const sum = reduceArray(filtered);
    return `Sum: ${sum.toFixed(2)}`;
  };

  const processDataSet5 = () => {
    const data = generateLargeArray(900);
    const sorted = sortComplexArray(data);
    const filtered = filterArray(sorted, 3000);
    const mapped = mapArray(filtered);
    return mapped.slice(0, 200).join(", ");
  };

  // More complex calculations to add code size
  const matrixOperations = () => {
    const createMatrix = (size: number): number[][] => {
      const matrix = [];
      for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
          row.push(calculateComplexValue(i * j, 50));
        }
        matrix.push(row);
      }
      return matrix;
    };

    const transposeMatrix = (matrix: number[][]): number[][] => {
      const result = [];
      for (let i = 0; i < matrix[0].length; i++) {
        const row = [];
        for (let j = 0; j < matrix.length; j++) {
          row.push(matrix[j][i]);
        }
        result.push(row);
      }
      return result;
    };

    const matrix1 = createMatrix(20);
    const transposed = transposeMatrix(matrix1);
    return transposed;
  };

  // String manipulation functions
  const stringOperations = () => {
    const generateRandomString = (length: number): string => {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    };

    const encodeString = (str: string): string => {
      return str
        .split("")
        .map((char) => char.charCodeAt(0).toString(16))
        .join("");
    };

    const decodeString = (encoded: string): string => {
      const chunks = encoded.match(/.{1,2}/g) || [];
      return chunks
        .map((chunk) => String.fromCharCode(parseInt(chunk, 16)))
        .join("");
    };

    const strings = [];
    for (let i = 0; i < 100; i++) {
      const str = generateRandomString(50);
      const encoded = encodeString(str);
      const decoded = decodeString(encoded);
      strings.push({ original: str, encoded, decoded });
    }
    return strings;
  };

  // Geometric calculations
  const geometryOperations = () => {
    interface Point {
      x: number;
      y: number;
    }

    const generatePoints = (count: number): Point[] => {
      const points = [];
      for (let i = 0; i < count; i++) {
        points.push({
          x: calculateComplexValue(i, 20),
          y: calculateComplexValue(i + 10, 20),
        });
      }
      return points;
    };

    const calculateDistance = (p1: Point, p2: Point): number => {
      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    };

    const findClosestPoints = (points: Point[]): [Point, Point, number] => {
      let minDistance = Infinity;
      let closestPair: [Point, Point] = [points[0], points[1]];

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const distance = calculateDistance(points[i], points[j]);
          if (distance < minDistance) {
            minDistance = distance;
            closestPair = [points[i], points[j]];
          }
        }
      }

      return [...closestPair, minDistance];
    };

    const points = generatePoints(100);
    const closest = findClosestPoints(points);
    return closest;
  };

  // Tree data structure operations
  const treeOperations = () => {
    interface TreeNode {
      value: number;
      left: TreeNode | null;
      right: TreeNode | null;
    }

    const createBalancedTree = (depth: number): TreeNode | null => {
      if (depth <= 0) return null;

      return {
        value: calculateComplexValue(depth, 10),
        left: createBalancedTree(depth - 1),
        right: createBalancedTree(depth - 1),
      };
    };

    const traverseInOrder = (
      node: TreeNode | null,
      result: number[] = []
    ): number[] => {
      if (!node) return result;
      traverseInOrder(node.left, result);
      result.push(node.value);
      traverseInOrder(node.right, result);
      return result;
    };

    const traversePreOrder = (
      node: TreeNode | null,
      result: number[] = []
    ): number[] => {
      if (!node) return result;
      result.push(node.value);
      traversePreOrder(node.left, result);
      traversePreOrder(node.right, result);
      return result;
    };

    const traversePostOrder = (
      node: TreeNode | null,
      result: number[] = []
    ): number[] => {
      if (!node) return result;
      traversePostOrder(node.left, result);
      traversePostOrder(node.right, result);
      result.push(node.value);
      return result;
    };

    const tree = createBalancedTree(8);
    const inOrder = traverseInOrder(tree);
    const preOrder = traversePreOrder(tree);
    const postOrder = traversePostOrder(tree);

    return { inOrder, preOrder, postOrder };
  };

  // Graph operations
  const graphOperations = () => {
    interface Graph {
      [key: string]: string[];
    }

    const createRandomGraph = (nodes: number, edgesPerNode: number): Graph => {
      const graph: Graph = {};

      // Create nodes
      for (let i = 0; i < nodes; i++) {
        graph[`node${i}`] = [];
      }

      // Add random edges
      const nodeKeys = Object.keys(graph);
      for (const node of nodeKeys) {
        const availableNodes = nodeKeys.filter((n) => n !== node);
        const edgeCount = Math.min(
          Math.floor(Math.random() * edgesPerNode) + 1,
          availableNodes.length
        );

        for (let i = 0; i < edgeCount; i++) {
          const randomIndex = Math.floor(Math.random() * availableNodes.length);
          const target = availableNodes[randomIndex];

          if (!graph[node].includes(target)) {
            graph[node].push(target);
            // For undirected graph
            if (!graph[target].includes(node)) {
              graph[target].push(node);
            }
          }

          availableNodes.splice(randomIndex, 1);
        }
      }

      return graph;
    };

    const findPath = (
      graph: Graph,
      start: string,
      end: string
    ): string[] | null => {
      const visited = new Set<string>();
      const queue: [string, string[]][] = [[start, [start]]];

      while (queue.length > 0) {
        const [current, path] = queue.shift()!;

        if (current === end) {
          return path;
        }

        if (!visited.has(current)) {
          visited.add(current);

          for (const neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
              queue.push([neighbor, [...path, neighbor]]);
            }
          }
        }
      }

      return null;
    };

    const graph = createRandomGraph(30, 5);
    const path = findPath(graph, "node0", "node15");
    return { graph, path };
  };

  // Execute all the heavy operations
  const results = {
    dataSet1: processDataSet1(),
    dataSet2: processDataSet2(),
    dataSet3: processDataSet3(),
    dataSet4: processDataSet4(),
    dataSet5: processDataSet5(),
    matrix: matrixOperations(),
    strings: stringOperations(),
    geometry: geometryOperations(),
    tree: treeOperations(),
    graph: graphOperations(),
  };

  return results;
};
