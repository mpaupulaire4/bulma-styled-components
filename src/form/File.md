### Simple
``` react
const SpanLabel = File.Label.withComponent('span');
<File>
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <SpanLabel>
        Choose a file…
      </SpanLabel>
    </File.CTA>
  </File.Label>
</File>
```
### Modifiers
#### Has Name and File Name
``` react
const SpanLabel = File.Label.withComponent('span');
<File className="has-name">
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <SpanLabel>
        Choose a file…
      </SpanLabel>
    </File.CTA>
    <File.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File.Name>
  </File.Label>
</File>
```
#### CTA on right
``` react
const SpanLabel = File.Label.withComponent('span');
<File className="has-name is-right">
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <SpanLabel>
        Choose a file…
      </SpanLabel>
    </File.CTA>
    <File.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File.Name>
  </File.Label>
</File>
```
#### Expanded Name
``` react
const SpanLabel = File.Label.withComponent('span');
<File className="has-name is-fullwidth">
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <SpanLabel>
        Choose a file…
      </SpanLabel>
    </File.CTA>
    <File.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File.Name>
  </File.Label>
</File>
```
#### Boxed
``` react
const SpanLabel = File.Label.withComponent('span');
<File className="is-boxed">
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <SpanLabel>
        Choose a file…
      </SpanLabel>
    </File.CTA>
  </File.Label>
</File>
```
#### Boxed With Name
``` react
const SpanLabel = File.Label.withComponent('span');
<File className="has-name is-boxed">
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <SpanLabel>
        Choose a file…
      </SpanLabel>
    </File.CTA>
    <File.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File.Name>
  </File.Label>
</File>
```
### Supports Colors
``` react
const SpanLabel = File.Label.withComponent('span');
<File className="has-name is-primary">
  <File.Label>
    <File.Input name="resume"/>
    <File.CTA>
      <File.Icon>
        <i className="fa fa-upload"></i>
      </File.Icon>
      <SpanLabel>
        Choose a file…
      </SpanLabel>
    </File.CTA>
    <File.Name>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File.Name>
  </File.Label>
</File>
```