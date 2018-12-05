/**
 * @module gmf.editing.module
 */
import angular from 'angular';
import gmfEditingEditFeature from 'gmf/editing/EditFeature.js';
import gmfEditingEditFeatureComponent from 'gmf/editing/editFeatureComponent.js';
import gmfEditingEditFeatureSelectorComponent from 'gmf/editing/editFeatureSelectorComponent.js';
import gmfEditingEnumerateAttribute from 'gmf/editing/EnumerateAttribute.js';
import gmfEditingSnapping from 'gmf/editing/Snapping.js';
import gmfEditingXSDAttributes from 'gmf/editing/XSDAttributes.js';

/**
 * @type {!angular.IModule}
 */
export default angular.module('gmfEditingModule', [
  gmfEditingEditFeature.module.name,
  gmfEditingEditFeatureComponent.name,
  gmfEditingEditFeatureSelectorComponent.name,
  gmfEditingEnumerateAttribute.module.name,
  gmfEditingSnapping.module.name,
  gmfEditingXSDAttributes.module.name,
]);
