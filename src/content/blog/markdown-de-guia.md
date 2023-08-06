---
title: "Guia de estilos en Markdown"
description: "Aqui previsualizaras el post"
pubDate: "Aug 08 2023"
heroImage: "/blog-placeholder-1.jpg"
---

Here is a sample of some basic Markdown syntax that can be used when writing
Markdown content in Astro.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section
headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum,
voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma
dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as
cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin
porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur?
Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit
ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda
veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore
eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata
tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne
sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

![This is a placeholder image description](/blog-placeholder-1.jpg)

## Blockquotes

The blockquote element represents content that is quoted from another source,
optionally with a citation which must be within a `footer` or `cite` element,
and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br> —
> <cite>Rob Pike[^1]</cite>

[^1]:
    The above quote is excerpted from Rob Pike's
    [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest,
    November 18, 2015.

## Tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

---

###### html

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Example HTML5 Document</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

---

###### css

```css
*,
::before,
::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
}
```

---

###### json

```json
{
    "personas": [
        {
            "nombre": "Juan",
            "edad": 25,
            "correo": "juan@example.com"
        },
        {
            "nombre": "María",
            "edad": 30,
            "correo": "maria@example.com"
        },
        {
            "nombre": "Pedro",
            "edad": 28,
            "correo": "pedro@example.com"
        }
    ]
}
```

---

###### js

```js
import express from "express";
const app = express();

app.get("/ping", (req, res) => {
    res.status(200).json({ message: "Pong!" });
});

app.listen(3000, () => console.log("API en el puerto 3000"));
```

---

###### ts

```ts
import express, { Request, Response } from "express";
const app = express();

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).json({ message: "Pong!" });
});

app.listen(3000, () => console.log("API en el puerto 3000"));
```

---

###### jsx

```jsx
import React from "react";

export default function App(props) {
    return <div>My App</div>;
}
```

---

###### tsx

```tsx
import React from "react";

type Props = {
    anything: any;
};

export default function App(props: Props) {
    return <div>My App</div>;
}
```

---

###### bash

```bash
#!/bin/bash

echo "¡Bienvenido al ejemplo de script en bash!"

echo "Por favor, ingresa tu nombre:"
read nombre

echo "Hola, $nombre. Vamos a contar del 1 al 5:"

for i in {1..5}
do
  echo $i
done

if [ "$nombre" == "bash" ]; then
  echo "¡Eres un experto en bash!"
else
  echo "¡Disfruta aprendiendo bash!"
fi

echo "Fin del script. ¡Hasta luego!"
```

---

###### sql

```sql
CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  edad INT,
  correo VARCHAR(100)
);

INSERT INTO usuarios (id, nombre, edad, correo)
VALUES
  (1, 'Juan', 25, 'juan@example.com'),
  (2, 'María', 30, 'maria@example.com'),
  (3, 'Pedro', 28, 'pedro@example.com');

SELECT * FROM usuarios WHERE edad > 25;
```

---

###### md

```md
## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

-   List item
-   Another item
-   And another item

#### Nested list

-   Fruit
    -   Apple
    -   Orange
    -   Banana
-   Dairy
    1.  Milk
    2.  Cheese
```

---

###### astro

```astro
---
interface Props {
	date: Date;
}

const { date } = Astro.props;
---
<time datetime={date.toISOString()}>
	{
		date.toLocaleDateString('en-us', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})
	}
</time>
```

---

###### yaml

```yaml
lockfileVersion: "6.0"

settings:
    autoInstallPeers: true
    excludeLinksFromLockfile: false

dependencies:
    "@astrojs/mdx":
        specifier: 0.19.7
        version: 0.19.7(astro@2.9.3)
    "@astrojs/react":
        specifier: 2.2.1
        version: 2.2.1(@types/react-dom@18.0.6)(@types/react@18.0.21)(react-dom@18.0.0)(react@18.0.0)
    "@astrojs/rss":
        specifier: 2.4.3
        version: 2.4.3
```

---

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

-   List item
-   Another item
-   And another item

#### Nested list

-   Fruit
    -   Apple
    -   Orange
    -   Banana
-   Dairy
    1.  Milk
    2.  Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the
session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and
other small creatures.
