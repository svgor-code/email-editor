import axios from './axios';

class ExportHtmlService {
  generateHtml = (jsx, editorSsrUrl) =>
    new Promise((resolve, reject) => {
      //check if url is present in env.
      const url = `${editorSsrUrl}`;
      axios
        .post(
          url,
          { app: jsx },
          { headers: { 'Content-Type': 'application/json' } }
        )
        .then((response) => {
          if (response) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
}

const exportHtmlService = new ExportHtmlService();

export default exportHtmlService;
