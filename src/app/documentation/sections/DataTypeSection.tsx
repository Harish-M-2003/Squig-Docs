import CodeSection from "./Components/CodeSection";
import TextSection from "./Components/TextSection";

export default function DataTypeSection() {
  return (
    <div className="my-5 md:pl-5 mr-5 text-xl text-xl">
      <h1 className="text-2xl pt-20">
        <span className="text-blue-400">#</span>Data Types
      </h1>
      <br />

      <TextSection>
        Squig supports various data types to handle different kinds of values in
        your programs. Here are the main data types in Squig:
      </TextSection>
      <br />

      <h2>1. Number</h2>
      <br />

      <TextSection>
        The <code>Number</code> data type represents numeric values, including
        integers and floating-point numbers.
      </TextSection>

      <h2>2. Bool</h2>
      <br />

      <TextSection>
        The <code>Bool</code> data type represents Boolean values, either{" "}
        <code>true</code> or <code>false</code>.
      </TextSection>

      <h2>3. Collection</h2>
      <br />

      <TextSection>
        The <code>Collection</code> data type is a container that includes
        various subtypes. For more information on available subtypes, please
        refer to the official Squig documentation.
      </TextSection>

      <h2>4. String</h2>
      <br />

      <TextSection>
        The <code>String</code> data type represents sequences of characters and
        is used to store text.
      </TextSection>

      <h2>5. Map</h2>
      <br />

      <TextSection>
        {`The Map data type is an ordered collection of key-value
        pairs where elements can be accessed by both index and key.`}<br></br><br/>
        {`When accessed by index, it returns a collection of [key, value] pairs.`}
      </TextSection>
      <br />

      <h2>Example</h2>
      <br />

      <CodeSection>
        let age : 25
        <br />
        let isStudent : true
        <br />
        {`let dynamicCollection : {1, "Hello", true}`}
        <br />
        {`let greeting : "Hello, Squig!"`}
        <br />
        {`let personInfo : {"name": "John", "age": 30, "isStudent": false}`}
        <br />
      </CodeSection>
      {/* <div className="pt-5">
        <TextSection>
          In this example, a variable named dynamicCollection is declared with
          the Collection type, showcasing the flexibility to store different
          types of values within the collection. Understanding and utilizing
          these data types will allow you to work with a variety of values and
          structures in Squig. For more details on the available subtypes of the{" "}
          <code>Collection</code> type, refer to the official Squig
          documentation.
        </TextSection>
      </div> */}
    </div>
  );
}
