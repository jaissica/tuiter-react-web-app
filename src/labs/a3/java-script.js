import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import BooleanVariable from "./boolean-variables";
import IfElse from "./if-else";
import TernaryOperator from "./ternary-operator"
import WorkingWithFunctions from "./working-with-functions"

function JavaScript() {
   console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariable/>
          <IfElse/>
          <TernaryOperator/>
          <WorkingWithFunctions/>
       </div>
    );
 }
 export default JavaScript