import angular from 'angular';
import 'angular-ui-router';
import Config from './config';

angular
  .module('app', ['ui.router'])
  .config(Config);
