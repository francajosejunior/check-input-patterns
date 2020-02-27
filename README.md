# input-patterns

## Usage

```javascript
import React from "react";
import applyPatterns from "../../lib/applyPatterns";
import { toString } from "../../util/util";
import "./styles.scss";

const Input = ({
  type = "text",
  value,
  patterns = [],
  className = "",
  ...rest
}) => {
  return (
    <input
      className={`input ${className}`}
      value={applyPatterns(toString(value), patterns)}
      type={type}
      {...rest}
    />
  );
};
export default Input;
```
