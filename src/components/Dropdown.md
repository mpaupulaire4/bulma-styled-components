``` react
state: {menu: false}
---
<Dropdown className={state.menu ? 'is-active' : ''}>
  <div>
    <Button
      aria-haspopup="true"
      aria-controls="dropdown-menu"
      onClick={() => setState({menu: !state.menu})}
      onBlur={() => setState({menu: !state.menu})}
    >
      Dropdown button
    </Button>
  </div>
  <Dropdown.Menu>
    <Dropdown.Content>
      <Dropdown.Item>
        Dropdown item
      </Dropdown.Item>
      <Dropdown.Item>
        Other dropdown item
      </Dropdown.Item>
      <Dropdown.Item>
        Active dropdown item
      </Dropdown.Item>
      <Dropdown.Item>
        Other dropdown item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        With a divider
      </Dropdown.Item>
    </Dropdown.Content>
  </Dropdown.Menu>
</Dropdown>
```