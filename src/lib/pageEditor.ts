export const defaultPageContent = [
  defaultRow(),
  defaultRow(),
  defaultRow()
];

export function defaultRow() {
  return { 
    id: _uuid(),
    content: [defaultColumn(), defaultColumn()]
  };
}

export function defaultColumn() {
  return { 
    id: _uuid(),
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ipsam modi porro earum nobis? Cupiditate, ducimus dignissimos explicabo magni quod eius nemo, iure consequatur quasi quaerat sequi perspiciatis. Quos." 
  };
}

export function addRow(page: any, rowIndex: number ) {
  page.splice(rowIndex, 0, defaultRow());
  return page;
};

export function deleteRow(page: any, rowIndex: number ) {
  page.splice(rowIndex, 1);
  return page;
};

export function addColumn(page: any, rowIndex: number) {
  page[rowIndex].content.push(defaultColumn());
  return page;
};

export function deleteColumn(page: any, rowIndex: number, columnIndex: number) {
  page[rowIndex].content.splice(columnIndex, 1);
  if (page[rowIndex].length == 0) deleteRow(page, rowIndex);
  return page;
};

function _uuid() {
  return crypto.randomUUID();
}
