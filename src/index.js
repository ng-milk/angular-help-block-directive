/*
 * angular-help-block-directive v0.0.2
 * (c) 2015 Dan Mindru http://mindrudan.com
 * License: MIT
 */

angular.module('dm.helpBlock', [])
       .directive('helpBlock', helpBlockDirective);


/*
 * @param <String> attrs.title: the title will be displayed by default
 * @param <String> attrs.content: the content will be toggled by pressing the title
 * @param <String> attrs.iconClass: the class for the title icon (default is no icon)
 */
function helpBlockDirective(){
  function helpBlockLink(scope, element, attrs) {
    scope.hbVisible = false;
    scope.iconClass = attrs.helpBlockIconClass;
    scope.title = attrs.helpBlockTitle;
    scope.content = attrs.helpBlockContent;

    // Toggle help block visibility.
    scope.toggle = function togglehelpBlockContent(){
      scope.hbVisible = !scope.hbVisible;
    };
  }

  return {
    scope: {},
    restrict: 'A',
    replace: true,
    template: '<section class="hb-row" ng-class="{\'expanded\': hbVisible}">
                <p class="hb-title" ng-click="toggle()">
                  <i ng-if="iconClass" class="{{iconClass}}"></i>
                  <span ng-bind="title"></span>
                </p>

                <p class="hb-content" ng-bind="content" ng-show="hbVisible"></p>
              </section>',
    link: helpBlockLink
  };
}