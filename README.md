# Silent Promise Rejection in Node.js

This repository demonstrates a common, yet easily missed, error in Node.js: unhandled promise rejections.  By default, Node.js silently ignores these rejections, making them hard to track down.  The `bug.js` file contains the problematic code.  `bugSolution.js` shows the corrected version.

## Problem

The issue lies in the improper handling of a promise rejection. The promise rejects after 2 seconds, but because there's no `.catch` block in the original code, the error is swallowed, leading to potential instability and difficult debugging.

## Solution

The solution involves using `.catch()` to handle the rejection explicitly. This prints the error to the console allowing for easier debugging.  In production, you would want more sophisticated error handling, perhaps logging to a file or monitoring system.

## How to run

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `node bug.js` to see the silent failure.
4. Run `node bugSolution.js` to see the corrected handling.