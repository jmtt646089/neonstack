const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  // ... other webpack configurations
  resolve: {
    // Add the plugin to the 'resolve.plugins' array
    plugins: [new TsconfigPathsPlugin()],
    // It's also important to list the file extensions your project uses
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  // ... other webpack configurations
};
