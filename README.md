# input-patterns

## Usage

```javascript
import React from "react";
import applyPatterns from "check-input-patterns";
import { toString } from "../../util/util";

const Input = ({
  type = "text",
  value,
  patterns = [],
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

```javascript
import React from "react";
import { NO_SPECIAL, NO_MATHEMATIC } from "check-input-patterns";

...
  <Input patterns={[NO_SPECIAL, NO_MATHEMATIC]} />
...

```
