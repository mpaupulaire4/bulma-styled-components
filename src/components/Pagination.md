#### Simple Example
``` js
<Pagination role="navigation" aria-label="pagination">
  <Pagination.Previous disabled>Previous</Pagination.Previous>
  <Pagination.Next>Next page</Pagination.Next>
  <Pagination.List>
    <li>
      <Pagination.Link className="is-current" aria-current="page" aria-label="Goto page 1">1</Pagination.Link>
    </li>
    <li>
      <Pagination.Link aria-label="Goto page 2">2</Pagination.Link>
    </li>
    <li>
      <Pagination.Link aria-label="Goto page 3">3</Pagination.Link>
    </li>
    <li>
      <Pagination.Ellipsis>&hellip;</Pagination.Ellipsis>
    </li>
    <li>
      <Pagination.Link aria-label="Goto page 86">86</Pagination.Link>
    </li>
  </Pagination.List>
</Pagination>
```
#### Rounded
``` js
<Pagination className="is-rounded" role="navigation" aria-label="pagination">
  <Pagination.Previous>Previous</Pagination.Previous>
  <Pagination.Next>Next page</Pagination.Next>
  <Pagination.List>
    <li>
      <Pagination.Link aria-label="Goto page 1">1</Pagination.Link>
    </li>
    <li>
      <Pagination.Ellipsis>&hellip;</Pagination.Ellipsis>
    </li>
    <li>
      <Pagination.Link aria-label="Goto page 45">45</Pagination.Link>
    </li>
    <li>
      <Pagination.Link className="is-current" aria-label="Page 46" aria-current="page">46</Pagination.Link>
    </li>
    <li>
      <Pagination.Link aria-label="Goto page 47">47</Pagination.Link>
    </li>
    <li>
      <Pagination.Ellipsis>&hellip;</Pagination.Ellipsis>
    </li>
    <li>
      <Pagination.Link aria-label="Goto page 86">86</Pagination.Link>
    </li>
  </Pagination.List>
</Pagination>
```
#### Centered
``` js
<Pagination className="is-centered" role="navigation" aria-label="pagination">
  <Pagination.Previous>Previous</Pagination.Previous>
  <Pagination.Next>Next page</Pagination.Next>
  <Pagination.List>
    <li>
      <Pagination.Link aria-label="Goto page 1">1</Pagination.Link>
    </li>
    <li>
      <Pagination.Ellipsis>&hellip;</Pagination.Ellipsis>
    </li>
    <li>
      <Pagination.Link aria-label="Goto page 45">45</Pagination.Link>
    </li>
    <li>
      <Pagination.Link className="is-current" aria-label="Page 46" aria-current="page">46</Pagination.Link>
    </li>
    <li>
      <Pagination.Link aria-label="Goto page 47">47</Pagination.Link>
    </li>
    <li>
      <Pagination.Ellipsis>&hellip;</Pagination.Ellipsis>
    </li>
    <li>
      <Pagination.Link aria-label="Goto page 86">86</Pagination.Link>
    </li>
  </Pagination.List>
</Pagination>
```
#### On the Right
``` js
<Pagination className="is-right" role="navigation" aria-label="pagination">
  <Pagination.Previous>Previous</Pagination.Previous>
  <Pagination.Next>Next page</Pagination.Next>
  <Pagination.List>
    <li>
      <Pagination.Link aria-label="Goto page 1">1</Pagination.Link>
    </li>
    <li>
      <Pagination.Ellipsis>&hellip;</Pagination.Ellipsis>
    </li>
    <li>
      <Pagination.Link aria-label="Goto page 45">45</Pagination.Link>
    </li>
    <li>
      <Pagination.Link className="is-current" aria-label="Page 46" aria-current="page">46</Pagination.Link>
    </li>
    <li>
      <Pagination.Link aria-label="Goto page 47">47</Pagination.Link>
    </li>
    <li>
      <Pagination.Ellipsis>&hellip;</Pagination.Ellipsis>
    </li>
    <li>
      <Pagination.Link aria-label="Goto page 86">86</Pagination.Link>
    </li>
  </Pagination.List>
</Pagination>
```