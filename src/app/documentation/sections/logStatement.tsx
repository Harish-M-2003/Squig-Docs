import TextSection from "./Components/TextSection";

export default function LogStatement() {
  return (
    <div className="my-5 md:pl-5 mr-5 text-xl">

      <h1>Print Statement</h1>

      <TextSection className="mt-5 mr-5 text-gray-400">
        The <code>log</code> statement in Squig is used to display information
        to the console. It is a fundamental tool for debugging, providing
        feedback, and communicating with the user. The syntax for the{" "}
        <code>log</code> statement is as follows:
      </TextSection>

      <p className="my-5 bg-gray-900 rounded p-5"><span className="text-blue-400">log</span>{" expression"} ; </p>

      {/* <h2 className="my-5">Examples</h2> */}

      <h3>Example 1: Basic Usage</h3>
      <br />

      <p className="p-5 bg-gray-900 rounded">
        <code className="text-blue-300">
          log <span className="text-green-500">{'"Hello, World!"'}</span>
          <span className="text-white">;</span>
          {/* <span className="text-gray-500">{"# log -> print statement"}</span> */}
        </code>
      </p>
      <br />

      <p className="text-gray-400">
        {`In this example, the log statement is used to print the
        string "Hello, World!" to the console.`}
      </p>
      <br />

      <h3>Example 2: Variable Printing</h3>
      <br />

      <p className="bg-gray-900 p-5 rounded">
        <code>
          <span className="text-blue-400">let</span> name : <span className="text-green-500">{'"Squig"'}</span>;
          <br />
          <span className="text-blue-400">log </span> name + <span className="text-green-500">{" programming language!"}</span>;
        </code>
      </p>
      <br />

      <p className="text-gray-400">
        Here, the <code>log</code> statement concatenates the value of the{" "}
        <code>name</code> {`variable with the string "Welcome to " and prints the
        result to the console.`}
      </p>
      <br />

      {/* <h3>Example 3: Expression Printing</h3>
      <br />

      <p className="bg-gray-900 p-5 rounded">
        <code>
        <span className="text-blue-400">let</span> x : 5;
          <br />
          <span className="text-blue-400">let</span> y : 10; <br />
          <span className="text-blue-400">log </span><span className="text-green-500">"The sum of " + x + " and " + y + " is " + (x + y) + "."</span>;
        </code>
      </p>
      <br /> */}

      <p className="text-gray-400">
        In this example, the <code>log</code> statement prints the sum of
        variables <code>x</code> and <code>y</code>
        along with descriptive text.
      </p>
      <br />

      <h2>Note</h2>
      <br />
      <ul className="text-gray-400">
        <li>
          The <code>log</code> statement can handle various types of
          {`expressions, including strings, variables, and mathematical
          operations.`}
        </li>
        <br />
        <li>
          Ensure that expressions are separated by the <code>+</code> operator
          for concatenation.
        </li>
        <br />
      </ul>

      <p>
        Use the <code>log</code> statement strategically to provide informative
        outputs and enhance the clarity of your Squig programs.
      </p>
    </div>
  );
}
