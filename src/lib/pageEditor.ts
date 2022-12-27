export const defaultColumn = { content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." };
export const defaultRow = [defaultColumn, defaultColumn];

export const defaultPageContent = [
  defaultRow,
  defaultRow,
  defaultRow
];

export function addColumnToRow(page: any, rowIndex: any) {
  const newRow = [...page[rowIndex], defaultColumn]
  page.splice(rowIndex, 1, newRow);
  return page;
}