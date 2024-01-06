import CodeSection from "./Components/CodeSection";
import TextSection from "./Components/TextSection";

export default function InputStatement() {
  return (
    <div className="my-5 md:pl-5 mr-5 text-lg md:text-xl">
      <h1 className="text-2xl pt-20"><span className="text-blue-500"># </span>User Input Statement</h1><br/>

      <TextSection>
        {`In Squig, the user input statement allows you to capture input from
        users. The syntax uses single quotes to denote the input prompt:`}
      </TextSection><br/>

      <CodeSection>variable_name : <span className="text-green-500">{"'Enter your input: '"}</span></CodeSection><br/>

      <h2>Example</h2><br/>

      <CodeSection>name : <span className="text-green-500">{"'Enter your name: '"}</span><br/><span className="text-blue-400">log</span> name</CodeSection><br/>

      <TextSection>
        {`In this example, the user is prompted to enter their name, and the input
        is stored in the variable`} <code>name</code>.
      </TextSection><br/>

      <h2>Note</h2><br/>

      <ul className="text-gray-400">
        <li>
          Ensure that the variable receiving the input is declared before using
          the user input statement.
        </li><br/>
        <li>
          The input prompt within single quotes should provide clear
          instructions to the user.
        </li><br/>
        <li className="font-bold text-gray-200">Squig can automatically detect the data type of the input.</li><br/>

      </ul>

      <p>
        Use the user input statement to create interactive programs and gather
        information from users in your Squig programs.
      </p>
    </div>
  );
}
