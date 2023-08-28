# input-patterns

It removes unwish values from a string based on 1 or more regexp patterns.

It is compatible with React

See an example in https://codesandbox.io/s/check-input-patterns-example-593ygr?file=/src/App.js

## Usage

```javascript
import React from "react";
import applyPatterns from "check-input-patterns";

const Input = (props) => {
  return (
    <input
      {...props}
      className={`my-class ${props.className || ""}`}
      value={applyPatterns(props.value.toString(), props.patterns || [])}
      type={props.type || "text"}
      onChange={(e) => {
        const newValue = applyPatterns(
          e.target.value.toString(),
          props.patterns || []
        );

        e.target.value = newValue;

        props.onChange(e);
      }}
    />
  );
};
export default Input;
```

```javascript
import { NO_COMMA, NO_DASH, NO_NUMBERS } from "check-input-patterns";
import Input from "./Input";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <Input
        patterns={[NO_COMMA, NO_DASH, NO_NUMBERS]}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
}
```
