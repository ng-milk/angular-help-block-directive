function helpBlockDirective(){function l(l,n,e){var i=angular.element(n[0].querySelectorAll(".hb-title")[0]);l.hbVisible=!1,l.iconClass=e.helpBlockIconClass||null,l.title=e.helpBlockTitle,l.content=e.helpBlockContent,i.bind("click",function(){l.$apply(function(){l.hbVisible=!l.hbVisible})})}return{scope:{},restrict:"A",replace:!0,template:'<section class="hb-row" ng-class="{\'expanded\': hbVisible}">\n                <p class="hb-title">\n                  <i ng-if="iconClass" class="{{iconClass}}"></i>\n                  <span ng-bind="title"></span>\n                </p>\n\n                <p class="hb-content" ng-bind="content" ng-show="hbVisible"></p>\n              </section>',link:l}}angular.module("dm.helpBlock",[]).directive("helpBlock",helpBlockDirective);