import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import BooleanVariable from "./boolean-variables";
import IfElse from "./if-else";
import TernaryOperator from "./ternary-operator"
import WorkingWithFunctions from "./working-with-functions"
import WorkingWithArrays from "./working-with-arrays"
import TemplateLiterals from "./template-literals"
import House from "./house"
import Spread from "./spread"
import Destructing from "./destructing"
import FunctionDestructing from "./function-destructing"

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
          <WorkingWithArrays/>
          <TemplateLiterals/>
          <House/>
          <Spread/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript