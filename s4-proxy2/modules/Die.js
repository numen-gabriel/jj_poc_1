const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");
const { response } = require("express");

async function postDocumentJobs(iFilepath,iFilename,iOptions,iToken) {
    try {
      
      let PDFBlob = new Blob([iFilepath], { type: "application/pdf" });

      // Build blob of pdf file
      //let PDFBlob = await fetch(iFilepath).then(r => r.blob());

      let formData = new FormData();
        formData.append('options', iOptions);
        formData.append('file', PDFBlob, iFilename);

        let sToken = "Bearer " + iToken;

        let dieApiResult = await executeHttpRequest(
          {
            destinationName: "doc-info-extraction-post"
            //url: "https://en15ronw8wa1l.x.pipedream.net/"
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