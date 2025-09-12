# CSS Flex Wrap and Flex Item Properties 

## Flex Wrap

### What is `flex-wrap`?

- The `flex-wrap` property controls whether flex items are forced onto a single line or can wrap onto multiple lines in a flex container.
- By default, flex items try to fit into one line (`nowrap`), which can cause overflow or unwanted shrinking.
- Enabling wrapping allows items to move to new lines, improving layout flexibility and responsiveness.

### `flex-wrap` Property Values

| Value          | Description                                                      |
|----------------|------------------------------------------------------------------|
| `nowrap`       | All flex items stay on one line (default behavior).              |
| `wrap`         | Allows flex items to wrap onto multiple lines if needed.         |
| `wrap-reverse` | Wraps items like `wrap` but stacks new lines in reverse order.   |

### Example:

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```

This lets items flow to additional lines when container width is limited.

***

### Why is `flex-wrap` Important?

- Prevents overflow issues on smaller screens.
- Allows layouts to adapt fluidly on resizing.
- Works well with `flex-grow` and `flex-shrink` for responsive space distribution.

***

## Flex Item Properties

### 1. `order`

- Changes the **visual order** of flex items without modifying HTML source order.
- Default order value is `0`.
- Items with lower `order` values appear first.

```css
.item1 {
  order: 2;
}
.item2 {
  order: 1;
}
```

This will place `.item2` before `.item1` visually.

***

### 2. `flex-grow`

- Controls how much a flex item **grows** to fill available space inside the flex container.
- Default value is `0` (item does not grow).
- A higher number means the item grows more relative to others.

```css
.item {
  flex-grow: 2; /* grows twice as much as an item with flex-grow: 1 */
}
```

***

### 3. `flex-shrink`

- Controls how much a flex item **shrinks** when there is not enough space.
- Default is `1` (all items shrink equally).
- Setting it to `0` means the item will not shrink.
- Higher values shrink more compared to items with lower values.

```css
.item {
  flex-shrink: 0; /* prevents shrinking */
}
```

***

### 4. `flex-basis`

- Sets the initial **base size** of a flex item before growing or shrinking.
- Can be a fixed length (px, %) or `auto` (default).
- Helpful to specify an ideal size before flex adjustments.

```css
.item {
  flex-basis: 200px;
}
```

***

## Shorthand Property: `flex`

- Combines `flex-grow`, `flex-shrink`, and `flex-basis` in one line.

```css
.item {
  flex: 1 1 150px; /* grow, shrink, basis */
}
```

- Common shortcut when you want items to grow and shrink equally with a base size.

***

## Practical Example

```html
<div class="container">
  <div class="box box1">1</div>
  <div class="box box2">2</div>
  <div class="box box3">3</div>
  <div class="box box4">4</div>
</div>
```

```css
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.box {
  flex: 1 1 150px;
  margin: 10px;
  background-color: skyblue;
  text-align: center;
  padding: 20px;
}
```

Resize the container to see boxes wrap onto new lines and flexibly grow/shrink.

***

## Tips & Notes

- Use `flex-wrap: wrap` to make flex layouts responsive and prevent overflow.
- Use `order` to rearrange items visually without changing HTML.
- Combine `flex-grow`, `flex-shrink`, and `flex-basis` to control sizing behavior.
- Default flex item behavior: `flex: 0 1 auto` (no growth, shrinks, base size auto).
- Experiment with different values using browser developer tools for better understanding.

***

## Resources

- [MDN: flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)  
- [MDN: Flex Item Properties (flex-grow, shrink, basis)](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)  
- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)  
- [W3Schools: CSS Flexbox - flex-wrap](https://www.w3schools.com/cssref/css3_pr_flex-wrap.asp)

