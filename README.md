# Pathfinding Visualizer

This project is a pathfinding visualizer that demonstrates four popular pathfinding algorithms: Dijkstra's Algorithm, Depth-First Search (DFS), Breadth-First Search (BFS), and A* Search. Additionally, the project offers three types of mazes (No Maze, Binary Tree Maze, and Recursive Division Maze) that can be generated to test these algorithms.

Click on the grid to create walls, and observe how the algorithms navigate around obstacles to find the shortest path.

## Table of Contents

- [Features](#features)
- [Pathfinding Algorithms](#pathfinding-algorithms)
- [Maze Generation](#maze-generation)
- [Time Complexities Summary](#time-complexities-summary)
- [Deployement](#deployement)
- [Future Improvements](#future-improvements)

---

## Features

- **Interactive Grid**: Click on the grid to place walls.
- **Algorithm Visualization**: Watch Dijkstra, DFS, BFS, and A* in action.
- **Maze Generation**: Choose between No Maze, Binary Tree Maze, and Recursive Division Maze.
- **Shortest Path**: Algorithms attempt to find the shortest path from the start node to the target node, avoiding obstacles.
- **Animations**: Traversed tiles, walls, and untraversed tiles are highlighted using different colors. If a path to the end tile is found, it is highlighted in green, with animations showcasing the pathfinding process.
  
---

## Pathfinding Algorithms

### Dijkstra's Algorithm
Dijkstra's algorithm is a **greedy algorithm** that guarantees the shortest path in a weighted graph, even when all edges have equal weight (such as in our grid). The algorithm explores the least expensive node first and keeps updating the shortest distance to the target.

- **Time Complexity**: **O((V + E) log V)**, where **V** is the number of vertices (nodes) and **E** is the number of edges.

### Depth-First Search (DFS)
DFS explores as far as possible along each branch before backtracking. It is not guaranteed to find the shortest path, but it's a simple and quick-to-implement algorithm.

- **Time Complexity**: **O(V + E)**, where **V** is the number of vertices and **E** is the number of edges.

### Breadth-First Search (BFS)
BFS explores all the nodes at the present depth level before moving on to nodes at the next depth level. In an unweighted graph like our grid, BFS always finds the shortest path.

- **Time Complexity**: **O(V + E)**, where **V** is the number of vertices and **E** is the number of edges.

### A* Search
A* combines the strengths of Dijkstra's Algorithm and BFS. It uses a heuristic function (in this case, Manhattan distance) to estimate the shortest path more efficiently. A* guarantees the shortest path if the heuristic is admissible.

- **Time Complexity**: **O((V + E) log V)**, where **V** is the number of vertices and **E** is the number of edges, similar to Dijkstra but usually faster with an appropriate heuristic.

---

## Maze Generation

The project includes three maze generation techniques that allow you to test the pathfinding algorithms on different kinds of grids:

### No Maze
- The grid starts empty, with no walls. You can add walls by clicking on the cells.

### Binary Tree Maze
- This algorithm carves out a maze by creating a binary tree structure. The result is a random maze with lots of paths and dead ends.

### Recursive Division Maze
- This algorithm divides the grid recursively into smaller and smaller sections, placing walls along the way, resulting in a maze that has a more intricate and natural look.

---

## Time Complexities Summary

| Algorithm       | Time Complexity         | Finds Shortest Path? |
|-----------------|-------------------------|----------------------|
| Dijkstra        | O((V + E) log V)         | Yes                  |
| DFS             | O(V + E)                 | No                   |
| BFS             | O(V + E)                 | Yes (unweighted grid)|
| A* Search       | O((V + E) log V)         | Yes (with admissible heuristic) |

---

## Deployement

Live Demo: [Pathfinding Visualizer](https://path-finding-wiz.vercel.app/)

---

## Future Improvements

- Add a Set Start Tile and Set End Tile Button to set custom Start Tile and End Tile.
- Add more algorithms (e.g., Greedy Best-First Search, Bi-directional Search).
- Allow dynamic weighting for Dijkstra and A*.
- Add support for weighted walls.
- Improve UI/UX.

---



