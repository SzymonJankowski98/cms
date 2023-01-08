<script>
  import { onMount } from "svelte";
  import Quill from "quill";

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [ 'link', 'image', 'video', 'formula' ],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean']
    ]
  };

  export let content = "";

  onMount(() => {
    let editor = new Quill("#editor", {
      modules: modules,
      theme: 'snow',
    });

    editor.root.innerHTML = content;
    editor.on("text-change", () => content = editor.root.innerHTML);
	});
</script>

<head>
  <link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet" />
</head>

<input class="hidden" type="textarea" name="content" value={content}/>
<div id="editor" class="w-full min-h-[200px] mt-2"></div>