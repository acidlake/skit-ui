<script>
  import { Text, List, Paragraph, Code } from "$lib/typograhy";

  const items = [
        {label: 'When you need copyable/editable/ellipsis texts.', bold: false},
        {label: 
          'When need to display a title or paragraph contents in Articles/Blogs/Notes.', 
          href: '/',
          bold: false
        }
      ]

const code_text =`
# Import the component
import { Text } from "skit-ui/typograhy"

  <Text level={6} text="h1. Skit Ui" />
  <Text level={5} text="h2. Skit Ui" />
  <Text level={4} text="h3. Skit Ui" />
  <Text level={3} text="h4. Skit Ui" />
  <Text level={2} text="h5. Skit Ui" />
  <Text level={1} text="h6. Skit Ui" />
`;
const code_color =`
# Import the component
import { Text } from "skit-ui/typograhy"

  <Text level={1} text="h1. Skit Ui" />
  <Text level={1} text="h1. Skit Ui" type="secondary" />
  <Text level={1} text="h2. Skit Ui" type="success" />
  <Text level={1} text="h3. Skit Ui" type="warning" />
  <Text level={1} text="h4. Skit Ui" type="danger"/>
`;

const code_paragraph =`
# Import the component
import { Paragraph } from "skit-ui/typograhy"
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing
      </Paragraph>
      <Paragraph  type="secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </Paragraph>
      <Paragraph  type="danger">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </Paragraph>
      <Paragraph  type="warning">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </Paragraph>
      <Paragraph  type="success">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </Paragraph>
`;
</script>
<svelte:head>
  <title>Typography Skit UI</title>
</svelte:head>
<div class="y-6 p-4 rounded-lg shadow-lg bg-white mb-4">
  <Text level={3} bold text="Typography" />
  <Paragraph>
    Basic text writing, including headings, body text, lists, and more.
  </Paragraph>

  <List {items} />

  <div class="text-gray-600 mt-6">
    <Text level={6} text="h1. Skit Ui" />
    <Text level={5} text="h2. Skit Ui" />
    <Text level={4} text="h3. Skit Ui" />
    <Text level={3} text="h4. Skit Ui" />
    <Text level={2} text="h5. Skit Ui" />
    <Text level={1} text="h6. Skit Ui" />
  </div>
  <Code language="r" code="{code_text}" header=""/>

  <div class="mt-10 grid">
    <Text level={3} bold text="Colors" />
    <div class="text-gray-600 mt-6">
      <Text level={1} text="h1. Skit Ui" />
      <Text level={1} text="h1. Skit Ui" type="secondary" />
      <Text level={1} text="h2. Skit Ui" type="success" />
      <Text level={1} text="h3. Skit Ui" type="warning" />
      <Text level={1} text="h4. Skit Ui" type="danger"/>
    </div>
    <Code language="r" code="{code_color}" header=""/>
  </div>

  <div class="mt-10 grid">
    <Text level={3} bold text="Paragraph" />
    <div class="text-gray-600 mt-6">
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quia repellat inventore deserunt aliquid illo vitae deleniti unde aut? Velit numquam ab corporis veritatis enim sint aspernatur ad voluptates!
      </Paragraph>
      <Paragraph  type="secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quia repellat inventore deserunt aliquid illo vitae deleniti unde aut? Velit numquam ab corporis veritatis enim sint aspernatur ad voluptates!
      </Paragraph>
      <Paragraph  type="danger">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quia repellat inventore deserunt aliquid illo vitae deleniti unde aut? Velit numquam ab corporis veritatis enim sint aspernatur ad voluptates!
      </Paragraph>
      <Paragraph  type="warning">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quia repellat inventore deserunt aliquid illo vitae deleniti unde aut? Velit numquam ab corporis veritatis enim sint aspernatur ad voluptates!
      </Paragraph>
      <Paragraph  type="success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quia repellat inventore deserunt aliquid illo vitae deleniti unde aut? Velit numquam ab corporis veritatis enim sint aspernatur ad voluptates!
      </Paragraph>
    </div>
    <Code language="r" code="{code_paragraph}" header=""/>
  </div>

 
</div>