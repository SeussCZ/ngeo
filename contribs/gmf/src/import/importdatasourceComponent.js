/* global Bloodhound */

import angular from 'angular';

import gmfDatasourceExternalDataSourcesManager from 'gmf/datasource/ExternalDataSourcesManager.js';

import gmfImportWmsCapabilityLayertreeComponent from 'gmf/import/wmsCapabilityLayertreeComponent.js';

import gmfImportWmtsCapabilityLayertreeComponent from 'gmf/import/wmtsCapabilityLayertreeComponent.js';

import ngeoQueryQuerent from 'ngeo/query/Querent.js';
import {guessServiceTypeByUrl} from 'ngeo/datasource/OGC.js';


/**
 * The definition of an external OGC server
 * @typedef {Object} ExternalOGCServer
 * @property {string} name
 * @property {string} type
 * @property {string} url
 */


/**
 * @type {angular.IModule}
 * @hidden
 */
const module = angular.module('gmfImportdatasource', [
  gmfDatasourceExternalDataSourcesManager.name,
  gmfImportWmsCapabilityLayertreeComponent.name,
  gmfImportWmtsCapabilityLayertreeComponent.name,
  ngeoQueryQuerent.name,
]);


module.run(
  /**
   * @ngInject
   * @param {angular.ITemplateCacheService} $templateCache
   */
  ($templateCache) => {
    // @ts-ignore: webpack
    $templateCache.put('gmf/import/importdatasourceComponent', require('./importdatasourceComponent.html'));
  });


module.value('gmfImportdatasourceTemplateUrl',
  /**
   * @param {angular.IAttributes} $attrs Attributes.
   * @return {string} The template url.
   */
  ($attrs) => {
    const templateUrl = $attrs.gmfImportdatasourceTemplateUrl;
    return templateUrl !== undefined ? templateUrl :
      'gmf/import/importdatasourceComponent';
  });


/**
 * @param {angular.IAttributes} $attrs Attributes.
 * @param {function(angular.IAttributes): string} gmfImportdatasourceTemplateUrl Template function.
 * @return {string} Template URL.
 * @ngInject
 * @private
 * @hidden
 */
function gmfImportdatasourceTemplateUrl($attrs, gmfImportdatasourceTemplateUrl) {
  return gmfImportdatasourceTemplateUrl($attrs);
}

/**
 * @typedef {'Local' | 'Online'} Mode
 */


/**
 * @private
 * @hidden
 */
class Controller {

  /**
   * @param {JQuery} $element Element.
   * @param {angular.IFilterService} $filter Angular filter.
   * @param {angular.auto.IInjectorService} $injector Main injector.
   * @param {angular.IScope} $scope Angular scope.
   * @param {angular.ITimeoutService} $timeout Angular timeout service.
   * @param {import("gmf/datasource/ExternalDataSourcesManager.js").ExternalDatSourcesManager}
   *     gmfExternalDataSourcesManager GMF service responsible of managing
   *     external data sources.
   * @param {import("ngeo/query/Querent.js").Querent} ngeoQuerent Ngeo querent service.
   * @private
   * @ngInject
   * @ngdoc controller
   * @ngname GmfImportdatasourceController
   */
  constructor($element, $filter, $injector, $scope, $timeout,
    gmfExternalDataSourcesManager, ngeoQuerent) {

    // Binding properties

    /**
     * @type {?import("ol/Map.js").default}
     */
    this.map = null;


    // Injected properties

    /**
     * @type {JQuery}
     * @private
     */
    this.element_ = $element;

    /**
     * @type {angular.IScope}
     * @private
     */
    this.scope_ = $scope;

    /**
     * @type {angular.ITimeoutService}
     * @private
     */
    this.timeout_ = $timeout;

    /**
     * @type {import("gmf/datasource/ExternalDataSourcesManager.js").ExternalDatSourcesManager}
     * @private
     */
    this.gmfExternalDataSourcesManager_ = gmfExternalDataSourcesManager;

    /**
     * @type {import("ngeo/query/Querent.js").Querent}
     * @private
     */
    this.ngeoQuerent_ = ngeoQuerent;


    // Model properties

    /**
     * @type {?File}
     */
    this.file = null;

    /**
     * @type {?string}
     */
    this.url = null;


    // Inner properties

    /**
     * @type {JQuery}
     * @private
     */
    this.fileInput_ = $element.find('input[type=file]');

    /**
     * @type {boolean}
     */
    this.hasError = false;

    /**
     * @type {?angular.IPromise<void>}
     * @private
     */
    this.hasErrorPromise_ = null;

    /**
     * @type {Mode}
     */
    this.mode = 'Online';

    /**
     * @type {Mode[]}
     */
    this.modes = ['Local', 'Online'];

    /**
     * @type {boolean}
     */
    this.pending = false;

    /**
     * @type {import('ngeo/misc/filters.js').unitPrefix}
     * @private
     */
    this.unitPrefixFormat_ = /** @type {import('ngeo/misc/filters.js').unitPrefix} */ (
      $filter('ngeoUnitPrefix'));

    /**
     * Current WMS Capabilities that were connected.
     * @type {?Object}
     */
    this.wmsCapabilities = null;

    /**
     * Current WTMS Capabilities that were connected.
     * @type {?Object}
     */
    this.wmtsCapabilities = null;

    /**
     * @type {?Bloodhound<string>}
     * @private
     */
    this.serversEngine_ = null;

    /** @type {?ExternalOGCServer[]} */
    const servers = $injector.has('gmfExternalOGCServers') ? $injector.get('gmfExternalOGCServers')
      : null;

    if (servers) {
      const serverUrls = servers.map(server => server.url);
      this.serversEngine_ = new Bloodhound({
        /**
         * Allows search queries to match from string from anywhere within
         * the url, and not only from the beginning of the string (which is
         * the default, non-configurable behaviour of bloodhound).
         *
         * Borrowed from:
         * https://stackoverflow.com/questions/22059933/twitter-typeahead-js-how-to-return-all-matched-elements-within-a-string
         *
         * @param {string} datum Datum.
         * @return {string[]} List of datum tokenizers.
         */
        datumTokenizer: (datum) => {
          if (typeof datum != 'string') {
            throw new Error('Wrong datum type');
          }
          const originalDatumTokenizers = Bloodhound.tokenizers.whitespace(datum);
          if (!originalDatumTokenizers) {
            throw new Error('Missing originalDatumTokenizers');
          }
          const datumTokenizers = [];
          for (const originalDatumTokenizer of originalDatumTokenizers) {
            let i = 0;
            while ((i + 1) < originalDatumTokenizer.length) {
              datumTokenizers.push(
                originalDatumTokenizer.substr(
                  i,
                  originalDatumTokenizer.length
                )
              );
              i++;
            }
          }
          return datumTokenizers;
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: serverUrls
      });
    }

    // Register input[type=file] onchange event, use HTML5 File api
    this.fileInput_.on('change', () => {
      const fileInput = /** @type {HTMLInputElement} */(this.fileInput_[0]);
      const files = fileInput.files;
      this.file = files && files[0] ? files[0] : null;

      if (this.file) {
        this.hasError = false;
        // update the label
        $(fileInput).next('.custom-file-label').html(this.fileNameAndSize);
      }

      this.scope_.$apply();
    });
  }

  /**
   * Called on initialization of the component.
   */
  $onInit() {
    this.gmfExternalDataSourcesManager_.map = this.map;


    if (this.serversEngine_) {

      /**
       * @param {string} query Query string.
       * @param {function(Array<string>):void} sync
       */
      const serversEngineWithDefaults = (query, sync) => {
        if (!this.serversEngine_) {
          throw new Error('Missing serversEngine');
        }
        if (query === '') {
          sync(this.serversEngine_.all());
        } else {
          this.serversEngine_.search(query, sync);
        }
      };
      // Timeout to let Angular render the placeholder of the input properly,
      // otherwise typeahead would copy the string with {{}} in it...
      this.timeout_(() => {
        const $urlInput = this.element_.find('input[name=url]');
        const $connectBtn = this.element_.find('button.gmf-importdatasource-connect-btn');
        $urlInput.typeahead({
          hint: true,
          highlight: true,
          minLength: 0
        }, {
          name: 'url',
          source: serversEngineWithDefaults
        }).bind('typeahead:select', (ev, suggestion) => {
          this.timeout_(() => {
            this.url = suggestion;
            this.scope_.$apply();
            $connectBtn.focus();
          });
        });
      });
    }
  }

  /**
   * Connect to given online resource URL.
   */
  connect() {
    if (!this.url) {
      throw new Error('Missing url');
    }
    const url = this.url;
    const serviceType = guessServiceTypeByUrl(url);

    this.startWorking_();
    if (serviceType === 'WMS') {
      this.ngeoQuerent_.wmsGetCapabilities(url).then(
        (wmsCapabilities) => {
          this.wmsCapabilities = wmsCapabilities;
          this.stopWorking_();
        },
        () => {
          // Something went wrong...
          this.stopWorking_(true);
        }
      );
    } else if (serviceType === 'WMTS') {
      this.ngeoQuerent_.wmtsGetCapabilities(url).then(
        (wmtsCapabilities) => {
          this.wmtsCapabilities = wmtsCapabilities;
          this.stopWorking_();
        },
        () => {
          // Something went wrong...
          this.stopWorking_(true);
        }
      );
    } else {
      // Could not determine the type of url
      this.timeout_(() => {
        this.stopWorking_(true);
      });
    }
  }

  /**
   * Create data source from file.
   */
  load() {
    if (!this.file) {
      throw new Error('Missing file');
    }
    const file = this.file;
    this.gmfExternalDataSourcesManager_.createAndAddDataSourceFromFile(file, (success) => {
      if (!success) {
        this.hasError = true;
      }
    });
  }

  /**
   * @return {string} The name of the file and human-readable size.
   */
  get fileNameAndSize() {
    if (!this.file) {
      return '';
    }
    let nameAndSize = '';

    const file = this.file;
    if (file !== undefined) {
      const fileSize = this.unitPrefixFormat_(file.size, 'o');
      nameAndSize = `${file.name}, ${fileSize}`;
    }

    return nameAndSize;
  }


  // === Private methods ===

  /**
   * @private
   */
  startWorking_() {
    this.pending = true;
    this.hasError = false;

    // Clear any previous objects
    this.wmsCapabilities = null;
    this.wmtsCapabilities = null;
  }

  /**
   * @param {boolean=} opt_hasError Whether we stopped working because of after
   *     an error.
   * @private
   */
  stopWorking_(opt_hasError = false) {
    this.pending = false;
    if (opt_hasError) {
      this.hasError = true;
      if (this.hasErrorPromise_) {
        this.timeout_.cancel(this.hasErrorPromise_);
      }
      this.hasErrorPromise_ = this.timeout_(() => {
        this.hasError = false;
        this.hasErrorPromise_ = null;
      }, 3000);
    }
  }
}


module.component('gmfImportdatasource', {
  bindings: {
    'map': '<'
  },
  controller: Controller,
  templateUrl: gmfImportdatasourceTemplateUrl
});


export default module;
