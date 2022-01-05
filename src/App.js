/**
 * class => is a reserved keywword in Javascript.
 * class => className
 * @returns
 * style = ""
 * style="background-color:red"
 * 
 * Rule ---->
 * style = {{}}
 * style = {{backgroundColor: "red"}}
 * 
 * 1. First Two Letter Css Property are now Converted into camelCase Property
 * 2. The value of the property must be in "Double Quote"
 */

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row bg-dark text-light p-3 sticky-top">
        <div className="col h3"> React </div>
      </div>

    </div >
  );
}