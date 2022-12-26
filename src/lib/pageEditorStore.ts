import { writable } from "svelte/store";

const defaultPageContent = [
  [
    { content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." },
    { content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." }
  ],
  [
    { content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." },
    { content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." }
  ],
  [
    { content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." },
    { content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." }
  ]
];

const PageEditorStore = writable(defaultPageContent);

export default PageEditorStore;