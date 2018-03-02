import express from 'express';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackMiddleware from 'webpack-dev-middleware';

const port = 3000;
const app = express();

const webpackInstance = webpackMiddleware(webpack(config), {
    publicPath: config.output.publicPath
  }
);

app.use(webpackInstance);

app.listen(port, function(err){
  if(err){
    console.log(err); // eslint-disable-line no-console
  } else{
    open('http://localhost:' + port);
  }
});
