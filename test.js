"use strict";
/* 
  Avoid 64K limit for methods in Rhino optimisation.
  This can also be set using the command line option:
   -opt -1
 */
Packages.org.mozilla.javascript.Context.
        getCurrentContext().setOptimizationLevel(-1);

/* 
  env.js DOM implementation in JavaScript 
  Website: http://www.envjs.com/
 */
load("lib/env.rhino.1.2.js");

/* libraries */
load("lib/jquery-1.9.1.js");
jQuery.support.cors = true; // tells jQuery to allow CORS
load("lib/handlebars-1.0.0-rc.3.js");
load("lib/underscore.js");
load("lib/backbone.js");
