export const maxAmountOfColumns = 10;
export const minColumWidth = 100 / maxAmountOfColumns;

export const EMPTY = "empty";
export const TEXT = "text";
export const BLOCK_TYPES = [EMPTY, TEXT];

export const EMPTY_BOCK_ATTRIBUTES = {
  type: EMPTY,
  backgroundColor: "#ffffff"
}

export const TEXT_BOCK_ATTRIBUTES = {
  type: TEXT,
  content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum expedita quibusdam odit a itaque sunt consequatur, ipsum, placeat quas consequuntur dolore perspiciatis veniam magni amet possimus officia? Similique, cupiditate dicta.",
  backgroundColor: "#ffffff"
}

export const DEFAULT_ATTRIBUTES_FOR_TYPE = {
  [EMPTY]: EMPTY_BOCK_ATTRIBUTES,
  [TEXT]: TEXT_BOCK_ATTRIBUTES
}

export const defaultPageContent = [
  defaultRow(),
  defaultRow(),
  defaultRow()
];

export function defaultRow() {
  return { 
    id: _uuid(),
    content: [defaultColumn(50), defaultColumn(50, TEXT_BOCK_ATTRIBUTES)]
  };
}

export function defaultColumn(width: number, attributes=EMPTY_BOCK_ATTRIBUTES) {
  return { 
    id: _uuid(),
    width: width,
    ...attributes
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
  if (page[rowIndex].content.length >= maxAmountOfColumns) return page;

  page[rowIndex].content.push(defaultColumn(0));
  const newColumIndex = page[rowIndex].content.length - 1;
  const newColumnWidth = Math.round(100 / (newColumIndex + 1));
  return resizeColumn(page, rowIndex, newColumIndex, newColumnWidth);
};

export function updateColumn(page: any, rowIndex: number, columnIndex: number, params: Object) {
  page[rowIndex].content[columnIndex] = {...page[rowIndex].content[columnIndex], ...params}
  return page;
};

export function changeColumnType(page: any, rowIndex: number, columnIndex: number, type: string) {
  page[rowIndex].content[columnIndex] =
    { ...DEFAULT_ATTRIBUTES_FOR_TYPE[type], ...page[rowIndex].content[columnIndex] };
  return page;
}

export function deleteColumn(page: any, rowIndex: number, columnIndex: number) {
  page = resizeColumn(page, rowIndex, columnIndex, 0);
  page[rowIndex].content.splice(columnIndex, 1);
  if (page[rowIndex].length == 0) deleteRow(page, rowIndex);
  return page;
};

export function dragResizeColumn(page: any, rowIndex: number, columnIndex: number, width: number) {
  if (width < minColumWidth) return page;
  const widthDifference = width - page[rowIndex].content[columnIndex].width
  if (page[rowIndex].content[columnIndex + 1].width - widthDifference < minColumWidth) {
    return page;
  }

  page[rowIndex].content[columnIndex + 1].width -= widthDifference
  page[rowIndex].content[columnIndex].width = width;
  return page;
};

export function resizeColumn(page: any, rowIndex: number, columnIndex: number, width: number) {
  let widthDifference = width - page[rowIndex].content[columnIndex].width
  while (widthDifference !== 0) {
    page[rowIndex].content.forEach((column: any, index: number) => {
      if (index == columnIndex) return;
      if (column.width <= minColumWidth) return;
      if (widthDifference === 0) return;

      if (widthDifference > 0) {
        column.width -= 1;
        widthDifference -= 1;
      } else {
        column.width += 1;
        widthDifference += 1;
      }
    })
  }
  page[rowIndex].content[columnIndex].width = width;
  return page;
};

function _uuid() {
  return crypto.randomUUID();
};
