# input-patterns

## Usage

```javascript
import React from "react";
import applyPatterns, { JUST_NUMBERS } from "check-input-patterns";
import { toString } from "../../util/util";

const Input = ({
  type = "text",
  value,
  patterns = [JUST_NUMBERS],
  className = "",
  ...rest
}) => {
  return (
    <input
      className={`my-class ${className}`}
      value={applyPatterns(toString(value), patterns)}
      type={type}
      {...rest}
    />
  );
};
export default Input;
```
