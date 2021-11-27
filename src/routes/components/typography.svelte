<script>
  import { Text, Paragraph } from "$lib/typograhy";
</script>
<div class="y-6 p-4 rounded-lg shadow-lg bg-white mb-4">
  <h1 class="text-3xl font-medium font-roboto text-gray-600">Typography</h1>
  <p class="text-gray-600 font-roboto">
    Basic text writing, including headings, body text, lists, and more.
  </p>

  <div class="text-gray-600 mt-6">
    <Text>When To Use</Text>
    <ul class="list-disc p-6">
      <li>
        <Text level={1}>
          When need to display a title or paragraph <a href="#" class="text-blue-500 hover:underline">link</a> contents in Articles/Blogs/Notes.
        </Text>
      </li>
      <li>When you need copyable/editable/ellipsis texts.</li>
    </ul>
  </div>
  <div class="mt-4">
    <Paragraph level={1} type="secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quia repellat inventore deserunt aliquid illo vitae deleniti unde aut? Velit numquam ab corporis veritatis enim sint aspernatur ad voluptates!
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quia repellat inventore deserunt aliquid illo vitae deleniti unde aut? Velit numquam ab corporis veritatis enim sint aspernatur ad voluptates!
      
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, est obcaecati, voluptas ab delectus sapiente quibusdam, aspernatur quisquam aut aliquid eius quos ut nam eos excepturi quod. Ullam reprehenderit sed laboriosam quos beatae dicta. Expedita blanditiis facilis odit veritatis libero perferendis aspernatur labore? Velit tempore repellendus fugit debitis, corrupti sed.
    </Paragraph>
  </div>
</div>