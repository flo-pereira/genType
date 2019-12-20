// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

var component = ReasonReact.statelessComponent("InnerComponent");

function make(_children) {
  return {
          debugName: component.debugName,
          reactClassInternal: component.reactClassInternal,
          handedOffState: component.handedOffState,
          willReceiveProps: component.willReceiveProps,
          didMount: component.didMount,
          didUpdate: component.didUpdate,
          willUnmount: component.willUnmount,
          willUpdate: component.willUpdate,
          shouldUpdate: component.shouldUpdate,
          render: (function (param) {
              return React.createElement("div", undefined, "Inner Component");
            }),
          initialState: component.initialState,
          retainedProps: component.retainedProps,
          reducer: component.reducer,
          jsElementWrapped: component.jsElementWrapped
        };
}

var InnerComponent = {
  someValueSoModuleOffsetsAreShifted: 77,
  component: component,
  make: make
};

var component$1 = ReasonReact.statelessComponent("ManyProps");

function make$1(param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, _children) {
  return {
          debugName: component$1.debugName,
          reactClassInternal: component$1.reactClassInternal,
          handedOffState: component$1.handedOffState,
          willReceiveProps: component$1.willReceiveProps,
          didMount: component$1.didMount,
          didUpdate: component$1.didUpdate,
          willUnmount: component$1.willUnmount,
          willUpdate: component$1.willUpdate,
          shouldUpdate: component$1.shouldUpdate,
          render: (function (param) {
              return React.createElement("div", undefined, "Many Props");
            }),
          initialState: component$1.initialState,
          retainedProps: component$1.retainedProps,
          reducer: component$1.reducer,
          jsElementWrapped: component$1.jsElementWrapped
        };
}

var ManyProps = {
  component: component$1,
  make: make$1
};

var component$2 = ReasonReact.statelessComponent("ManyComponents");

function make$2(_children) {
  return {
          debugName: component$2.debugName,
          reactClassInternal: component$2.reactClassInternal,
          handedOffState: component$2.handedOffState,
          willReceiveProps: component$2.willReceiveProps,
          didMount: component$2.didMount,
          didUpdate: component$2.didUpdate,
          willUnmount: component$2.willUnmount,
          willUpdate: component$2.willUpdate,
          shouldUpdate: component$2.shouldUpdate,
          render: (function (param) {
              return React.createElement("div", undefined, "Outer Component", ReasonReact.element(undefined, undefined, make([])));
            }),
          initialState: component$2.initialState,
          retainedProps: component$2.retainedProps,
          reducer: component$2.reducer,
          jsElementWrapped: component$2.jsElementWrapped
        };
}

export {
  InnerComponent ,
  ManyProps ,
  component$2 as component,
  make$2 as make,
  
}
/* component Not a pure module */
