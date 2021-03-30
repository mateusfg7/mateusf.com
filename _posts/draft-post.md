---
title: 'Draft Post'
date: '0001-01-01'
description: 'Post made for test markdown render'
category: 'Draft'
tags: 'title4test, content4test, code4test'
---

# Title 1
## Title 2
### Title 3
#### Title 4

&nbsp;

normal
**negrito**
_itálico_


`inline code`

&nbsp;

block code

elixir
```elixir
defmodule Foo do
  def bar(x), when x == 0, do: x+1 end
  def bar(x) do
    x + 2
  end
end

x = Foo.bar 0
y = Foo.bar 1

^y = x + 1
```

python
```python
def foo(x):
  return x + 1

def bar(y):
  return y + 1

x = foo(1)
y = bar(1)
```

Js
```javascript
function foo(x) {
  return x + 1;
}

function bar(y) {
  return y + 1;
}

const x = foo(1);
const y = bar(1);
```


tables

| | A | B |
|---|---|---|
| a | Aa | Ba |
| b | Ab | Bb |


separation

---

foo
