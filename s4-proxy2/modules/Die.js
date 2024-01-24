const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");
const { response } = require("express");

async function postDocumentJobs(iFile,iOptions) {
    try {
      
      let PDFBlob = new Blob([iFile.buffer], { type: "application/pdf" });

      let formData = new FormData();
        formData.append('options', iOptions);
        formData.append('file', PDFBlob, iFile.originalname);

        let dieApiResult = await executeHttpRequest(
          {
            destinationName: "doc-info-extraction-post"
          },
          {
            method: "post",
            url: "document/jobs",
            headers: {
              'Accept': '*/*'
            },
            data: formData
          }
        );
        
        return dieApiResult.data;

      } catch (error) {
        console.log(error);
      }
}

module.exports = {    
    postDocumentJobs: postDocumentJobs
}