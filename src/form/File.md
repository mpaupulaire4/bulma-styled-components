### Simple
``` react
<File>
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <File.Label>
        Choose a file…
      </File.Label>
    </File.CTA>
  </File.Label>
</File>
```
### Modifiers
#### Has Name and File Name
``` react
<File className="has-name">
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <File.Label>
        Choose a file…
      </File.Label>
    </File.CTA>
    <File.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File.Name>
  </File.Label>
</File>
```
#### CTA on right
``` react
<File className="has-name is-right">
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <File.Label>
        Choose a file…
      </File.Label>
    </File.CTA>
    <File.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File.Name>
  </File.Label>
</File>
```
#### Expanded Name
``` react
<File className="has-name is-fullwidth">
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <File.Label>
        Choose a file…
      </File.Label>
    </File.CTA>
    <File.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File.Name>
  </File.Label>
</File>
```
#### Boxed
``` react
<File className="is-boxed">
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <File.Label>
        Choose a file…
      </File.Label>
    </File.CTA>
  </File.Label>
</File>
```
#### Boxed With Name
``` react
<File className="has-name is-boxed">
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <File.Label>
        Choose a file…
      </File.Label>
    </File.CTA>
    <File.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File.Name>
  </File.Label>
</File>
```
### Supports Colors
``` react
<File className="has-name is-primary">
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <File.Label>
        Choose a file…
      </File.Label>
    </File.CTA>
    <File.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File.Name>
  </File.Label>
</File>
```