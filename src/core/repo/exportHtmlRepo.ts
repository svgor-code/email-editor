import exportHtmlService from '../api/exportHtmlService';

export async function renderHtml(craftNodes, editorSsrUrl) {
  try {
    const response = await exportHtmlService.generateHtml(
      craftNodes,
      editorSsrUrl
    );
    return response;
  } catch (err) {
    throw err;
  }
}
