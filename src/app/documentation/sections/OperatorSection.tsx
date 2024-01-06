import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TextSection from "./Components/TextSection";
import CodeSection from "./Components/CodeSection";

export default function OperatorSection() {
  return (
    <div className="my-5 md:pl-5 mr-5 text-xl">
      <h1 className="text-2xl pt-20">
        <span className="text-blue-500"># </span>Operators
      </h1>
      <br />

      <TextSection>
        Squig supports various operators to perform operations on values in your
        programs. Here are the main types of operators in Squig:
      </TextSection>
      <br />

      <h2>1. Arithmetic Operators</h2>
      <br />

      <TextSection>
        Arithmetic operators are used for mathematical operations on numeric
        values.
      </TextSection>
      <br />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Operator</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Example</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>+</TableCell>
            <TableCell>Addition</TableCell>
            <TableCell>
              <code>result = 10 + 5;</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>-</TableCell>
            <TableCell>Subtraction</TableCell>
            <TableCell>
              <code>result = 15 - 8;</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>*</TableCell>
            <TableCell>Multiplication</TableCell>
            <TableCell>
              <code>result = 3 * 4;</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>/</TableCell>
            <TableCell>Division</TableCell>
            <TableCell>
              <code>result = 20 / 4;</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>%</TableCell>
            <TableCell>Modulus</TableCell>
            <TableCell>
              <code>result = 10 % 3;</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <h2>2. Logical Operators</h2>
      <br />

      <TextSection>
        Logical operators are used for logical operations on Boolean values.
      </TextSection>
      <br />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Operator</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Example</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>&&</TableCell>
            <TableCell>Logical AND</TableCell>
            <TableCell>
              <code>result = true && false;</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>||</TableCell>
            <TableCell>Logical OR</TableCell>
            <TableCell>
              <code>result = true || false;</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>!</TableCell>
            <TableCell>Logical NOT</TableCell>
            <TableCell>
              <code>result = !true;</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h2>3. Shorthand Assignment Operators</h2>
      <br />

      <TextSection>
        Shorthand assignment operators combine the arithmetic or logical
        operation with the assignment operation.
      </TextSection>
      <br />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Operator</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Example</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>+=</TableCell>
            <TableCell>Addition Assignment</TableCell>
            <TableCell>
              <code>result +: 5;</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>-=</TableCell>
            <TableCell>Subtraction Assignment</TableCell>
            <TableCell>
              <code>result -: 8;</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>*=</TableCell>
            <TableCell>Multiplication Assignment</TableCell>
            <TableCell>
              <code>result *: 4;</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>/:</TableCell>
            <TableCell>Division Assignment</TableCell>
            <TableCell>
              <code>result /: 2;</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>%=</TableCell>
            <TableCell>Modulus Assignment</TableCell>
            <TableCell>
              <code>result %= 3;</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h2>Note</h2>
      <br />

      <TextSection>
        In Squig, the shorthand assignment operators have an additional form,
        replacing the <code>=</code> with a colon <code>:</code>:
      </TextSection>
      <br />
      <CodeSection>
        {`result :+ 5;    // Equivalent to result += 5;`}
        {`result :- 8;    // Equivalent to result -= 8;`}<br/>
        {`result :* 4;    // Equivalent to result *= 4;`}<br/>
        {`result :/ 2;    // Equivalent to result /= 2;`}<br/>
        {`result :% 3;    // Equivalent to result %= 3;`}
      </CodeSection>
    </div>
  );
}
