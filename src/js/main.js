import angular from 'angular';
import Config from './config';

angular
  .module('app', ['ui-router'])
  .config(Config);
